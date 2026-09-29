<?php
declare(strict_types=1);

// Mux SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class MuxSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new MuxUtility();
        $this->_utility = $utility;

        $config = MuxConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = MuxHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = MuxHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!MuxFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, MuxFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return MuxUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = MuxHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = MuxHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = MuxHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new MuxSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new MuxError($op . "_allow",
                "MuxSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = MuxHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = MuxHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new MuxError("graphql_error",
                "MuxSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_annotation = null;

    // Canonical facade: $client->Annotation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->annotation()
    // resolves here too.
    public function Annotation($data = null)
    {
        require_once __DIR__ . '/entity/annotation_entity.php';
        if ($data === null) {
            if ($this->_annotation === null) {
                $this->_annotation = new AnnotationEntity($this, null);
            }
            return $this->_annotation;
        }
        return new AnnotationEntity($this, $data);
    }


    private $_ask_question = null;

    // Canonical facade: $client->AskQuestion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ask_question()
    // resolves here too.
    public function AskQuestion($data = null)
    {
        require_once __DIR__ . '/entity/ask_question_entity.php';
        if ($data === null) {
            if ($this->_ask_question === null) {
                $this->_ask_question = new AskQuestionEntity($this, null);
            }
            return $this->_ask_question;
        }
        return new AskQuestionEntity($this, $data);
    }


    private $_asset = null;

    // Canonical facade: $client->Asset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->asset()
    // resolves here too.
    public function Asset($data = null)
    {
        require_once __DIR__ . '/entity/asset_entity.php';
        if ($data === null) {
            if ($this->_asset === null) {
                $this->_asset = new AssetEntity($this, null);
            }
            return $this->_asset;
        }
        return new AssetEntity($this, $data);
    }


    private $_asset_or_live_stream_id = null;

    // Canonical facade: $client->AssetOrLiveStreamId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->asset_or_live_stream_id()
    // resolves here too.
    public function AssetOrLiveStreamId($data = null)
    {
        require_once __DIR__ . '/entity/asset_or_live_stream_id_entity.php';
        if ($data === null) {
            if ($this->_asset_or_live_stream_id === null) {
                $this->_asset_or_live_stream_id = new AssetOrLiveStreamIdEntity($this, null);
            }
            return $this->_asset_or_live_stream_id;
        }
        return new AssetOrLiveStreamIdEntity($this, $data);
    }


    private $_asset_playback_id = null;

    // Canonical facade: $client->AssetPlaybackId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->asset_playback_id()
    // resolves here too.
    public function AssetPlaybackId($data = null)
    {
        require_once __DIR__ . '/entity/asset_playback_id_entity.php';
        if ($data === null) {
            if ($this->_asset_playback_id === null) {
                $this->_asset_playback_id = new AssetPlaybackIdEntity($this, null);
            }
            return $this->_asset_playback_id;
        }
        return new AssetPlaybackIdEntity($this, $data);
    }


    private $_asset_shot = null;

    // Canonical facade: $client->AssetShot()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->asset_shot()
    // resolves here too.
    public function AssetShot($data = null)
    {
        require_once __DIR__ . '/entity/asset_shot_entity.php';
        if ($data === null) {
            if ($this->_asset_shot === null) {
                $this->_asset_shot = new AssetShotEntity($this, null);
            }
            return $this->_asset_shot;
        }
        return new AssetShotEntity($this, $data);
    }


    private $_create_playback_id = null;

    // Canonical facade: $client->CreatePlaybackId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_playback_id()
    // resolves here too.
    public function CreatePlaybackId($data = null)
    {
        require_once __DIR__ . '/entity/create_playback_id_entity.php';
        if ($data === null) {
            if ($this->_create_playback_id === null) {
                $this->_create_playback_id = new CreatePlaybackIdEntity($this, null);
            }
            return $this->_create_playback_id;
        }
        return new CreatePlaybackIdEntity($this, $data);
    }


    private $_create_track = null;

    // Canonical facade: $client->CreateTrack()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_track()
    // resolves here too.
    public function CreateTrack($data = null)
    {
        require_once __DIR__ . '/entity/create_track_entity.php';
        if ($data === null) {
            if ($this->_create_track === null) {
                $this->_create_track = new CreateTrackEntity($this, null);
            }
            return $this->_create_track;
        }
        return new CreateTrackEntity($this, $data);
    }


    private $_directive = null;

    // Canonical facade: $client->Directive()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->directive()
    // resolves here too.
    public function Directive($data = null)
    {
        require_once __DIR__ . '/entity/directive_entity.php';
        if ($data === null) {
            if ($this->_directive === null) {
                $this->_directive = new DirectiveEntity($this, null);
            }
            return $this->_directive;
        }
        return new DirectiveEntity($this, $data);
    }


    private $_directive_run_detail = null;

    // Canonical facade: $client->DirectiveRunDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->directive_run_detail()
    // resolves here too.
    public function DirectiveRunDetail($data = null)
    {
        require_once __DIR__ . '/entity/directive_run_detail_entity.php';
        if ($data === null) {
            if ($this->_directive_run_detail === null) {
                $this->_directive_run_detail = new DirectiveRunDetailEntity($this, null);
            }
            return $this->_directive_run_detail;
        }
        return new DirectiveRunDetailEntity($this, $data);
    }


    private $_drm_configuration = null;

    // Canonical facade: $client->DrmConfiguration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->drm_configuration()
    // resolves here too.
    public function DrmConfiguration($data = null)
    {
        require_once __DIR__ . '/entity/drm_configuration_entity.php';
        if ($data === null) {
            if ($this->_drm_configuration === null) {
                $this->_drm_configuration = new DrmConfigurationEntity($this, null);
            }
            return $this->_drm_configuration;
        }
        return new DrmConfigurationEntity($this, $data);
    }


    private $_edit_caption = null;

    // Canonical facade: $client->EditCaption()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->edit_caption()
    // resolves here too.
    public function EditCaption($data = null)
    {
        require_once __DIR__ . '/entity/edit_caption_entity.php';
        if ($data === null) {
            if ($this->_edit_caption === null) {
                $this->_edit_caption = new EditCaptionEntity($this, null);
            }
            return $this->_edit_caption;
        }
        return new EditCaptionEntity($this, $data);
    }


    private $_engagement_heatmap = null;

    // Canonical facade: $client->EngagementHeatmap()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->engagement_heatmap()
    // resolves here too.
    public function EngagementHeatmap($data = null)
    {
        require_once __DIR__ . '/entity/engagement_heatmap_entity.php';
        if ($data === null) {
            if ($this->_engagement_heatmap === null) {
                $this->_engagement_heatmap = new EngagementHeatmapEntity($this, null);
            }
            return $this->_engagement_heatmap;
        }
        return new EngagementHeatmapEntity($this, $data);
    }


    private $_engagement_hotspot = null;

    // Canonical facade: $client->EngagementHotspot()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->engagement_hotspot()
    // resolves here too.
    public function EngagementHotspot($data = null)
    {
        require_once __DIR__ . '/entity/engagement_hotspot_entity.php';
        if ($data === null) {
            if ($this->_engagement_hotspot === null) {
                $this->_engagement_hotspot = new EngagementHotspotEntity($this, null);
            }
            return $this->_engagement_hotspot;
        }
        return new EngagementHotspotEntity($this, $data);
    }


    private $_find_best_thumbnail = null;

    // Canonical facade: $client->FindBestThumbnail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->find_best_thumbnail()
    // resolves here too.
    public function FindBestThumbnail($data = null)
    {
        require_once __DIR__ . '/entity/find_best_thumbnail_entity.php';
        if ($data === null) {
            if ($this->_find_best_thumbnail === null) {
                $this->_find_best_thumbnail = new FindBestThumbnailEntity($this, null);
            }
            return $this->_find_best_thumbnail;
        }
        return new FindBestThumbnailEntity($this, $data);
    }


    private $_find_key_moment = null;

    // Canonical facade: $client->FindKeyMoment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->find_key_moment()
    // resolves here too.
    public function FindKeyMoment($data = null)
    {
        require_once __DIR__ . '/entity/find_key_moment_entity.php';
        if ($data === null) {
            if ($this->_find_key_moment === null) {
                $this->_find_key_moment = new FindKeyMomentEntity($this, null);
            }
            return $this->_find_key_moment;
        }
        return new FindKeyMomentEntity($this, $data);
    }


    private $_find_scene = null;

    // Canonical facade: $client->FindScene()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->find_scene()
    // resolves here too.
    public function FindScene($data = null)
    {
        require_once __DIR__ . '/entity/find_scene_entity.php';
        if ($data === null) {
            if ($this->_find_scene === null) {
                $this->_find_scene = new FindSceneEntity($this, null);
            }
            return $this->_find_scene;
        }
        return new FindSceneEntity($this, $data);
    }


    private $_generate_asset_shot = null;

    // Canonical facade: $client->GenerateAssetShot()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate_asset_shot()
    // resolves here too.
    public function GenerateAssetShot($data = null)
    {
        require_once __DIR__ . '/entity/generate_asset_shot_entity.php';
        if ($data === null) {
            if ($this->_generate_asset_shot === null) {
                $this->_generate_asset_shot = new GenerateAssetShotEntity($this, null);
            }
            return $this->_generate_asset_shot;
        }
        return new GenerateAssetShotEntity($this, $data);
    }


    private $_generate_chapter = null;

    // Canonical facade: $client->GenerateChapter()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate_chapter()
    // resolves here too.
    public function GenerateChapter($data = null)
    {
        require_once __DIR__ . '/entity/generate_chapter_entity.php';
        if ($data === null) {
            if ($this->_generate_chapter === null) {
                $this->_generate_chapter = new GenerateChapterEntity($this, null);
            }
            return $this->_generate_chapter;
        }
        return new GenerateChapterEntity($this, $data);
    }


    private $_generate_engagement_insight = null;

    // Canonical facade: $client->GenerateEngagementInsight()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate_engagement_insight()
    // resolves here too.
    public function GenerateEngagementInsight($data = null)
    {
        require_once __DIR__ . '/entity/generate_engagement_insight_entity.php';
        if ($data === null) {
            if ($this->_generate_engagement_insight === null) {
                $this->_generate_engagement_insight = new GenerateEngagementInsightEntity($this, null);
            }
            return $this->_generate_engagement_insight;
        }
        return new GenerateEngagementInsightEntity($this, $data);
    }


    private $_generate_premium_caption = null;

    // Canonical facade: $client->GeneratePremiumCaption()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate_premium_caption()
    // resolves here too.
    public function GeneratePremiumCaption($data = null)
    {
        require_once __DIR__ . '/entity/generate_premium_caption_entity.php';
        if ($data === null) {
            if ($this->_generate_premium_caption === null) {
                $this->_generate_premium_caption = new GeneratePremiumCaptionEntity($this, null);
            }
            return $this->_generate_premium_caption;
        }
        return new GeneratePremiumCaptionEntity($this, $data);
    }


    private $_generate_track_subtitle = null;

    // Canonical facade: $client->GenerateTrackSubtitle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate_track_subtitle()
    // resolves here too.
    public function GenerateTrackSubtitle($data = null)
    {
        require_once __DIR__ . '/entity/generate_track_subtitle_entity.php';
        if ($data === null) {
            if ($this->_generate_track_subtitle === null) {
                $this->_generate_track_subtitle = new GenerateTrackSubtitleEntity($this, null);
            }
            return $this->_generate_track_subtitle;
        }
        return new GenerateTrackSubtitleEntity($this, $data);
    }


    private $_incident = null;

    // Canonical facade: $client->Incident()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident()
    // resolves here too.
    public function Incident($data = null)
    {
        require_once __DIR__ . '/entity/incident_entity.php';
        if ($data === null) {
            if ($this->_incident === null) {
                $this->_incident = new IncidentEntity($this, null);
            }
            return $this->_incident;
        }
        return new IncidentEntity($this, $data);
    }


    private $_input_info = null;

    // Canonical facade: $client->InputInfo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->input_info()
    // resolves here too.
    public function InputInfo($data = null)
    {
        require_once __DIR__ . '/entity/input_info_entity.php';
        if ($data === null) {
            if ($this->_input_info === null) {
                $this->_input_info = new InputInfoEntity($this, null);
            }
            return $this->_input_info;
        }
        return new InputInfoEntity($this, $data);
    }


    private $_job_summary = null;

    // Canonical facade: $client->JobSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->job_summary()
    // resolves here too.
    public function JobSummary($data = null)
    {
        require_once __DIR__ . '/entity/job_summary_entity.php';
        if ($data === null) {
            if ($this->_job_summary === null) {
                $this->_job_summary = new JobSummaryEntity($this, null);
            }
            return $this->_job_summary;
        }
        return new JobSummaryEntity($this, $data);
    }


    private $_list_all_metric_value = null;

    // Canonical facade: $client->ListAllMetricValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_all_metric_value()
    // resolves here too.
    public function ListAllMetricValue($data = null)
    {
        require_once __DIR__ . '/entity/list_all_metric_value_entity.php';
        if ($data === null) {
            if ($this->_list_all_metric_value === null) {
                $this->_list_all_metric_value = new ListAllMetricValueEntity($this, null);
            }
            return $this->_list_all_metric_value;
        }
        return new ListAllMetricValueEntity($this, $data);
    }


    private $_list_breakdown_value = null;

    // Canonical facade: $client->ListBreakdownValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_breakdown_value()
    // resolves here too.
    public function ListBreakdownValue($data = null)
    {
        require_once __DIR__ . '/entity/list_breakdown_value_entity.php';
        if ($data === null) {
            if ($this->_list_breakdown_value === null) {
                $this->_list_breakdown_value = new ListBreakdownValueEntity($this, null);
            }
            return $this->_list_breakdown_value;
        }
        return new ListBreakdownValueEntity($this, $data);
    }


    private $_list_delivery_usage = null;

    // Canonical facade: $client->ListDeliveryUsage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_delivery_usage()
    // resolves here too.
    public function ListDeliveryUsage($data = null)
    {
        require_once __DIR__ . '/entity/list_delivery_usage_entity.php';
        if ($data === null) {
            if ($this->_list_delivery_usage === null) {
                $this->_list_delivery_usage = new ListDeliveryUsageEntity($this, null);
            }
            return $this->_list_delivery_usage;
        }
        return new ListDeliveryUsageEntity($this, $data);
    }


    private $_list_dimension_value = null;

    // Canonical facade: $client->ListDimensionValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_dimension_value()
    // resolves here too.
    public function ListDimensionValue($data = null)
    {
        require_once __DIR__ . '/entity/list_dimension_value_entity.php';
        if ($data === null) {
            if ($this->_list_dimension_value === null) {
                $this->_list_dimension_value = new ListDimensionValueEntity($this, null);
            }
            return $this->_list_dimension_value;
        }
        return new ListDimensionValueEntity($this, $data);
    }


    private $_list_error = null;

    // Canonical facade: $client->ListError()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_error()
    // resolves here too.
    public function ListError($data = null)
    {
        require_once __DIR__ . '/entity/list_error_entity.php';
        if ($data === null) {
            if ($this->_list_error === null) {
                $this->_list_error = new ListErrorEntity($this, null);
            }
            return $this->_list_error;
        }
        return new ListErrorEntity($this, $data);
    }


    private $_list_export = null;

    // Canonical facade: $client->ListExport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_export()
    // resolves here too.
    public function ListExport($data = null)
    {
        require_once __DIR__ . '/entity/list_export_entity.php';
        if ($data === null) {
            if ($this->_list_export === null) {
                $this->_list_export = new ListExportEntity($this, null);
            }
            return $this->_list_export;
        }
        return new ListExportEntity($this, $data);
    }


    private $_list_filter_value = null;

    // Canonical facade: $client->ListFilterValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_filter_value()
    // resolves here too.
    public function ListFilterValue($data = null)
    {
        require_once __DIR__ . '/entity/list_filter_value_entity.php';
        if ($data === null) {
            if ($this->_list_filter_value === null) {
                $this->_list_filter_value = new ListFilterValueEntity($this, null);
            }
            return $this->_list_filter_value;
        }
        return new ListFilterValueEntity($this, $data);
    }


    private $_list_insight = null;

    // Canonical facade: $client->ListInsight()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_insight()
    // resolves here too.
    public function ListInsight($data = null)
    {
        require_once __DIR__ . '/entity/list_insight_entity.php';
        if ($data === null) {
            if ($this->_list_insight === null) {
                $this->_list_insight = new ListInsightEntity($this, null);
            }
            return $this->_list_insight;
        }
        return new ListInsightEntity($this, $data);
    }


    private $_list_monitoring_dimension = null;

    // Canonical facade: $client->ListMonitoringDimension()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_monitoring_dimension()
    // resolves here too.
    public function ListMonitoringDimension($data = null)
    {
        require_once __DIR__ . '/entity/list_monitoring_dimension_entity.php';
        if ($data === null) {
            if ($this->_list_monitoring_dimension === null) {
                $this->_list_monitoring_dimension = new ListMonitoringDimensionEntity($this, null);
            }
            return $this->_list_monitoring_dimension;
        }
        return new ListMonitoringDimensionEntity($this, $data);
    }


    private $_list_monitoring_metric = null;

    // Canonical facade: $client->ListMonitoringMetric()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_monitoring_metric()
    // resolves here too.
    public function ListMonitoringMetric($data = null)
    {
        require_once __DIR__ . '/entity/list_monitoring_metric_entity.php';
        if ($data === null) {
            if ($this->_list_monitoring_metric === null) {
                $this->_list_monitoring_metric = new ListMonitoringMetricEntity($this, null);
            }
            return $this->_list_monitoring_metric;
        }
        return new ListMonitoringMetricEntity($this, $data);
    }


    private $_list_real_time_dimension = null;

    // Canonical facade: $client->ListRealTimeDimension()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_real_time_dimension()
    // resolves here too.
    public function ListRealTimeDimension($data = null)
    {
        require_once __DIR__ . '/entity/list_real_time_dimension_entity.php';
        if ($data === null) {
            if ($this->_list_real_time_dimension === null) {
                $this->_list_real_time_dimension = new ListRealTimeDimensionEntity($this, null);
            }
            return $this->_list_real_time_dimension;
        }
        return new ListRealTimeDimensionEntity($this, $data);
    }


    private $_list_real_time_metric = null;

    // Canonical facade: $client->ListRealTimeMetric()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_real_time_metric()
    // resolves here too.
    public function ListRealTimeMetric($data = null)
    {
        require_once __DIR__ . '/entity/list_real_time_metric_entity.php';
        if ($data === null) {
            if ($this->_list_real_time_metric === null) {
                $this->_list_real_time_metric = new ListRealTimeMetricEntity($this, null);
            }
            return $this->_list_real_time_metric;
        }
        return new ListRealTimeMetricEntity($this, $data);
    }


    private $_list_related_incident = null;

    // Canonical facade: $client->ListRelatedIncident()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_related_incident()
    // resolves here too.
    public function ListRelatedIncident($data = null)
    {
        require_once __DIR__ . '/entity/list_related_incident_entity.php';
        if ($data === null) {
            if ($this->_list_related_incident === null) {
                $this->_list_related_incident = new ListRelatedIncidentEntity($this, null);
            }
            return $this->_list_related_incident;
        }
        return new ListRelatedIncidentEntity($this, $data);
    }


    private $_list_subview_breakdown_value = null;

    // Canonical facade: $client->ListSubviewBreakdownValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_subview_breakdown_value()
    // resolves here too.
    public function ListSubviewBreakdownValue($data = null)
    {
        require_once __DIR__ . '/entity/list_subview_breakdown_value_entity.php';
        if ($data === null) {
            if ($this->_list_subview_breakdown_value === null) {
                $this->_list_subview_breakdown_value = new ListSubviewBreakdownValueEntity($this, null);
            }
            return $this->_list_subview_breakdown_value;
        }
        return new ListSubviewBreakdownValueEntity($this, $data);
    }


    private $_list_subview_comparison_value = null;

    // Canonical facade: $client->ListSubviewComparisonValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_subview_comparison_value()
    // resolves here too.
    public function ListSubviewComparisonValue($data = null)
    {
        require_once __DIR__ . '/entity/list_subview_comparison_value_entity.php';
        if ($data === null) {
            if ($this->_list_subview_comparison_value === null) {
                $this->_list_subview_comparison_value = new ListSubviewComparisonValueEntity($this, null);
            }
            return $this->_list_subview_comparison_value;
        }
        return new ListSubviewComparisonValueEntity($this, $data);
    }


    private $_list_subview_dimension = null;

    // Canonical facade: $client->ListSubviewDimension()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_subview_dimension()
    // resolves here too.
    public function ListSubviewDimension($data = null)
    {
        require_once __DIR__ . '/entity/list_subview_dimension_entity.php';
        if ($data === null) {
            if ($this->_list_subview_dimension === null) {
                $this->_list_subview_dimension = new ListSubviewDimensionEntity($this, null);
            }
            return $this->_list_subview_dimension;
        }
        return new ListSubviewDimensionEntity($this, $data);
    }


    private $_list_subview_dimension_value = null;

    // Canonical facade: $client->ListSubviewDimensionValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_subview_dimension_value()
    // resolves here too.
    public function ListSubviewDimensionValue($data = null)
    {
        require_once __DIR__ . '/entity/list_subview_dimension_value_entity.php';
        if ($data === null) {
            if ($this->_list_subview_dimension_value === null) {
                $this->_list_subview_dimension_value = new ListSubviewDimensionValueEntity($this, null);
            }
            return $this->_list_subview_dimension_value;
        }
        return new ListSubviewDimensionValueEntity($this, $data);
    }


    private $_list_video_view_export = null;

    // Canonical facade: $client->ListVideoViewExport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_video_view_export()
    // resolves here too.
    public function ListVideoViewExport($data = null)
    {
        require_once __DIR__ . '/entity/list_video_view_export_entity.php';
        if ($data === null) {
            if ($this->_list_video_view_export === null) {
                $this->_list_video_view_export = new ListVideoViewExportEntity($this, null);
            }
            return $this->_list_video_view_export;
        }
        return new ListVideoViewExportEntity($this, $data);
    }


    private $_live_stream = null;

    // Canonical facade: $client->LiveStream()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->live_stream()
    // resolves here too.
    public function LiveStream($data = null)
    {
        require_once __DIR__ . '/entity/live_stream_entity.php';
        if ($data === null) {
            if ($this->_live_stream === null) {
                $this->_live_stream = new LiveStreamEntity($this, null);
            }
            return $this->_live_stream;
        }
        return new LiveStreamEntity($this, $data);
    }


    private $_live_stream_playback_id = null;

    // Canonical facade: $client->LiveStreamPlaybackId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->live_stream_playback_id()
    // resolves here too.
    public function LiveStreamPlaybackId($data = null)
    {
        require_once __DIR__ . '/entity/live_stream_playback_id_entity.php';
        if ($data === null) {
            if ($this->_live_stream_playback_id === null) {
                $this->_live_stream_playback_id = new LiveStreamPlaybackIdEntity($this, null);
            }
            return $this->_live_stream_playback_id;
        }
        return new LiveStreamPlaybackIdEntity($this, $data);
    }


    private $_metric_timeseries_data = null;

    // Canonical facade: $client->MetricTimeseriesData()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->metric_timeseries_data()
    // resolves here too.
    public function MetricTimeseriesData($data = null)
    {
        require_once __DIR__ . '/entity/metric_timeseries_data_entity.php';
        if ($data === null) {
            if ($this->_metric_timeseries_data === null) {
                $this->_metric_timeseries_data = new MetricTimeseriesDataEntity($this, null);
            }
            return $this->_metric_timeseries_data;
        }
        return new MetricTimeseriesDataEntity($this, $data);
    }


    private $_moderate = null;

    // Canonical facade: $client->Moderate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->moderate()
    // resolves here too.
    public function Moderate($data = null)
    {
        require_once __DIR__ . '/entity/moderate_entity.php';
        if ($data === null) {
            if ($this->_moderate === null) {
                $this->_moderate = new ModerateEntity($this, null);
            }
            return $this->_moderate;
        }
        return new ModerateEntity($this, $data);
    }


    private $_monitoring_breakdown = null;

    // Canonical facade: $client->MonitoringBreakdown()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->monitoring_breakdown()
    // resolves here too.
    public function MonitoringBreakdown($data = null)
    {
        require_once __DIR__ . '/entity/monitoring_breakdown_entity.php';
        if ($data === null) {
            if ($this->_monitoring_breakdown === null) {
                $this->_monitoring_breakdown = new MonitoringBreakdownEntity($this, null);
            }
            return $this->_monitoring_breakdown;
        }
        return new MonitoringBreakdownEntity($this, $data);
    }


    private $_monitoring_breakdown_timeseries = null;

    // Canonical facade: $client->MonitoringBreakdownTimeseries()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->monitoring_breakdown_timeseries()
    // resolves here too.
    public function MonitoringBreakdownTimeseries($data = null)
    {
        require_once __DIR__ . '/entity/monitoring_breakdown_timeseries_entity.php';
        if ($data === null) {
            if ($this->_monitoring_breakdown_timeseries === null) {
                $this->_monitoring_breakdown_timeseries = new MonitoringBreakdownTimeseriesEntity($this, null);
            }
            return $this->_monitoring_breakdown_timeseries;
        }
        return new MonitoringBreakdownTimeseriesEntity($this, $data);
    }


    private $_monitoring_histogram_timeseries = null;

    // Canonical facade: $client->MonitoringHistogramTimeseries()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->monitoring_histogram_timeseries()
    // resolves here too.
    public function MonitoringHistogramTimeseries($data = null)
    {
        require_once __DIR__ . '/entity/monitoring_histogram_timeseries_entity.php';
        if ($data === null) {
            if ($this->_monitoring_histogram_timeseries === null) {
                $this->_monitoring_histogram_timeseries = new MonitoringHistogramTimeseriesEntity($this, null);
            }
            return $this->_monitoring_histogram_timeseries;
        }
        return new MonitoringHistogramTimeseriesEntity($this, $data);
    }


    private $_monitoring_timeseries = null;

    // Canonical facade: $client->MonitoringTimeseries()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->monitoring_timeseries()
    // resolves here too.
    public function MonitoringTimeseries($data = null)
    {
        require_once __DIR__ . '/entity/monitoring_timeseries_entity.php';
        if ($data === null) {
            if ($this->_monitoring_timeseries === null) {
                $this->_monitoring_timeseries = new MonitoringTimeseriesEntity($this, null);
            }
            return $this->_monitoring_timeseries;
        }
        return new MonitoringTimeseriesEntity($this, $data);
    }


    private $_overall = null;

    // Canonical facade: $client->Overall()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->overall()
    // resolves here too.
    public function Overall($data = null)
    {
        require_once __DIR__ . '/entity/overall_entity.php';
        if ($data === null) {
            if ($this->_overall === null) {
                $this->_overall = new OverallEntity($this, null);
            }
            return $this->_overall;
        }
        return new OverallEntity($this, $data);
    }


    private $_playback_restriction = null;

    // Canonical facade: $client->PlaybackRestriction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->playback_restriction()
    // resolves here too.
    public function PlaybackRestriction($data = null)
    {
        require_once __DIR__ . '/entity/playback_restriction_entity.php';
        if ($data === null) {
            if ($this->_playback_restriction === null) {
                $this->_playback_restriction = new PlaybackRestrictionEntity($this, null);
            }
            return $this->_playback_restriction;
        }
        return new PlaybackRestrictionEntity($this, $data);
    }


    private $_real_time_breakdown = null;

    // Canonical facade: $client->RealTimeBreakdown()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->real_time_breakdown()
    // resolves here too.
    public function RealTimeBreakdown($data = null)
    {
        require_once __DIR__ . '/entity/real_time_breakdown_entity.php';
        if ($data === null) {
            if ($this->_real_time_breakdown === null) {
                $this->_real_time_breakdown = new RealTimeBreakdownEntity($this, null);
            }
            return $this->_real_time_breakdown;
        }
        return new RealTimeBreakdownEntity($this, $data);
    }


    private $_real_time_histogram_timeseries = null;

    // Canonical facade: $client->RealTimeHistogramTimeseries()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->real_time_histogram_timeseries()
    // resolves here too.
    public function RealTimeHistogramTimeseries($data = null)
    {
        require_once __DIR__ . '/entity/real_time_histogram_timeseries_entity.php';
        if ($data === null) {
            if ($this->_real_time_histogram_timeseries === null) {
                $this->_real_time_histogram_timeseries = new RealTimeHistogramTimeseriesEntity($this, null);
            }
            return $this->_real_time_histogram_timeseries;
        }
        return new RealTimeHistogramTimeseriesEntity($this, $data);
    }


    private $_real_time_timeseries = null;

    // Canonical facade: $client->RealTimeTimeseries()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->real_time_timeseries()
    // resolves here too.
    public function RealTimeTimeseries($data = null)
    {
        require_once __DIR__ . '/entity/real_time_timeseries_entity.php';
        if ($data === null) {
            if ($this->_real_time_timeseries === null) {
                $this->_real_time_timeseries = new RealTimeTimeseriesEntity($this, null);
            }
            return $this->_real_time_timeseries;
        }
        return new RealTimeTimeseriesEntity($this, $data);
    }


    private $_signal_live_stream_complete = null;

    // Canonical facade: $client->SignalLiveStreamComplete()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->signal_live_stream_complete()
    // resolves here too.
    public function SignalLiveStreamComplete($data = null)
    {
        require_once __DIR__ . '/entity/signal_live_stream_complete_entity.php';
        if ($data === null) {
            if ($this->_signal_live_stream_complete === null) {
                $this->_signal_live_stream_complete = new SignalLiveStreamCompleteEntity($this, null);
            }
            return $this->_signal_live_stream_complete;
        }
        return new SignalLiveStreamCompleteEntity($this, $data);
    }


    private $_signing_key = null;

    // Canonical facade: $client->SigningKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->signing_key()
    // resolves here too.
    public function SigningKey($data = null)
    {
        require_once __DIR__ . '/entity/signing_key_entity.php';
        if ($data === null) {
            if ($this->_signing_key === null) {
                $this->_signing_key = new SigningKeyEntity($this, null);
            }
            return $this->_signing_key;
        }
        return new SigningKeyEntity($this, $data);
    }


    private $_simulcast_target = null;

    // Canonical facade: $client->SimulcastTarget()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->simulcast_target()
    // resolves here too.
    public function SimulcastTarget($data = null)
    {
        require_once __DIR__ . '/entity/simulcast_target_entity.php';
        if ($data === null) {
            if ($this->_simulcast_target === null) {
                $this->_simulcast_target = new SimulcastTargetEntity($this, null);
            }
            return $this->_simulcast_target;
        }
        return new SimulcastTargetEntity($this, $data);
    }


    private $_static_rendition = null;

    // Canonical facade: $client->StaticRendition()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->static_rendition()
    // resolves here too.
    public function StaticRendition($data = null)
    {
        require_once __DIR__ . '/entity/static_rendition_entity.php';
        if ($data === null) {
            if ($this->_static_rendition === null) {
                $this->_static_rendition = new StaticRenditionEntity($this, null);
            }
            return $this->_static_rendition;
        }
        return new StaticRenditionEntity($this, $data);
    }


    private $_subview_breakdown_timeseries = null;

    // Canonical facade: $client->SubviewBreakdownTimeseries()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subview_breakdown_timeseries()
    // resolves here too.
    public function SubviewBreakdownTimeseries($data = null)
    {
        require_once __DIR__ . '/entity/subview_breakdown_timeseries_entity.php';
        if ($data === null) {
            if ($this->_subview_breakdown_timeseries === null) {
                $this->_subview_breakdown_timeseries = new SubviewBreakdownTimeseriesEntity($this, null);
            }
            return $this->_subview_breakdown_timeseries;
        }
        return new SubviewBreakdownTimeseriesEntity($this, $data);
    }


    private $_subview_overall_value = null;

    // Canonical facade: $client->SubviewOverallValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subview_overall_value()
    // resolves here too.
    public function SubviewOverallValue($data = null)
    {
        require_once __DIR__ . '/entity/subview_overall_value_entity.php';
        if ($data === null) {
            if ($this->_subview_overall_value === null) {
                $this->_subview_overall_value = new SubviewOverallValueEntity($this, null);
            }
            return $this->_subview_overall_value;
        }
        return new SubviewOverallValueEntity($this, $data);
    }


    private $_summarize = null;

    // Canonical facade: $client->Summarize()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->summarize()
    // resolves here too.
    public function Summarize($data = null)
    {
        require_once __DIR__ . '/entity/summarize_entity.php';
        if ($data === null) {
            if ($this->_summarize === null) {
                $this->_summarize = new SummarizeEntity($this, null);
            }
            return $this->_summarize;
        }
        return new SummarizeEntity($this, $data);
    }


    private $_transcription_vocabulary = null;

    // Canonical facade: $client->TranscriptionVocabulary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->transcription_vocabulary()
    // resolves here too.
    public function TranscriptionVocabulary($data = null)
    {
        require_once __DIR__ . '/entity/transcription_vocabulary_entity.php';
        if ($data === null) {
            if ($this->_transcription_vocabulary === null) {
                $this->_transcription_vocabulary = new TranscriptionVocabularyEntity($this, null);
            }
            return $this->_transcription_vocabulary;
        }
        return new TranscriptionVocabularyEntity($this, $data);
    }


    private $_translate_audio = null;

    // Canonical facade: $client->TranslateAudio()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->translate_audio()
    // resolves here too.
    public function TranslateAudio($data = null)
    {
        require_once __DIR__ . '/entity/translate_audio_entity.php';
        if ($data === null) {
            if ($this->_translate_audio === null) {
                $this->_translate_audio = new TranslateAudioEntity($this, null);
            }
            return $this->_translate_audio;
        }
        return new TranslateAudioEntity($this, $data);
    }


    private $_translate_caption = null;

    // Canonical facade: $client->TranslateCaption()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->translate_caption()
    // resolves here too.
    public function TranslateCaption($data = null)
    {
        require_once __DIR__ . '/entity/translate_caption_entity.php';
        if ($data === null) {
            if ($this->_translate_caption === null) {
                $this->_translate_caption = new TranslateCaptionEntity($this, null);
            }
            return $this->_translate_caption;
        }
        return new TranslateCaptionEntity($this, $data);
    }


    private $_update_asset_track = null;

    // Canonical facade: $client->UpdateAssetTrack()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->update_asset_track()
    // resolves here too.
    public function UpdateAssetTrack($data = null)
    {
        require_once __DIR__ . '/entity/update_asset_track_entity.php';
        if ($data === null) {
            if ($this->_update_asset_track === null) {
                $this->_update_asset_track = new UpdateAssetTrackEntity($this, null);
            }
            return $this->_update_asset_track;
        }
        return new UpdateAssetTrackEntity($this, $data);
    }


    private $_upload = null;

    // Canonical facade: $client->Upload()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->upload()
    // resolves here too.
    public function Upload($data = null)
    {
        require_once __DIR__ . '/entity/upload_entity.php';
        if ($data === null) {
            if ($this->_upload === null) {
                $this->_upload = new UploadEntity($this, null);
            }
            return $this->_upload;
        }
        return new UploadEntity($this, $data);
    }


    private $_url_signing_key = null;

    // Canonical facade: $client->UrlSigningKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->url_signing_key()
    // resolves here too.
    public function UrlSigningKey($data = null)
    {
        require_once __DIR__ . '/entity/url_signing_key_entity.php';
        if ($data === null) {
            if ($this->_url_signing_key === null) {
                $this->_url_signing_key = new UrlSigningKeyEntity($this, null);
            }
            return $this->_url_signing_key;
        }
        return new UrlSigningKeyEntity($this, $data);
    }


    private $_usage_export = null;

    // Canonical facade: $client->UsageExport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->usage_export()
    // resolves here too.
    public function UsageExport($data = null)
    {
        require_once __DIR__ . '/entity/usage_export_entity.php';
        if ($data === null) {
            if ($this->_usage_export === null) {
                $this->_usage_export = new UsageExportEntity($this, null);
            }
            return $this->_usage_export;
        }
        return new UsageExportEntity($this, $data);
    }


    private $_video_view = null;

    // Canonical facade: $client->VideoView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->video_view()
    // resolves here too.
    public function VideoView($data = null)
    {
        require_once __DIR__ . '/entity/video_view_entity.php';
        if ($data === null) {
            if ($this->_video_view === null) {
                $this->_video_view = new VideoViewEntity($this, null);
            }
            return $this->_video_view;
        }
        return new VideoViewEntity($this, $data);
    }


    private $_webhook = null;

    // Canonical facade: $client->Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook()
    // resolves here too.
    public function Webhook($data = null)
    {
        require_once __DIR__ . '/entity/webhook_entity.php';
        if ($data === null) {
            if ($this->_webhook === null) {
                $this->_webhook = new WebhookEntity($this, null);
            }
            return $this->_webhook;
        }
        return new WebhookEntity($this, $data);
    }


    private $_who_am_i = null;

    // Canonical facade: $client->WhoAmI()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->who_am_i()
    // resolves here too.
    public function WhoAmI($data = null)
    {
        require_once __DIR__ . '/entity/who_am_i_entity.php';
        if ($data === null) {
            if ($this->_who_am_i === null) {
                $this->_who_am_i = new WhoAmIEntity($this, null);
            }
            return $this->_who_am_i;
        }
        return new WhoAmIEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new MuxSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
