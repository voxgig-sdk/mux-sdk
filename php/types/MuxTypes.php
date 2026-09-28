<?php
declare(strict_types=1);

// Typed models for the Mux SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Annotation entity data model. */
class Annotation
{
    public string $date;
    public string $id;
    public string $note;
    public ?string $sub_property_id = null;
}

/** Request payload for Annotation#load. */
class AnnotationLoadMatch
{
    public string $id;
}

/** Request payload for Annotation#create. */
class AnnotationCreateData
{
    public string $date;
    public string $id;
    public string $note;
    public ?string $sub_property_id = null;
}

/** Request payload for Annotation#update. */
class AnnotationUpdateData
{
    public string $id;
    public ?string $date = null;
    public ?string $note = null;
    public ?string $sub_property_id = null;
}

/** Request payload for Annotation#remove. */
class AnnotationRemoveMatch
{
    public string $id;
}

/** AskQuestion entity data model. */
class AskQuestion
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for AskQuestion#load. */
class AskQuestionLoadMatch
{
    public string $id;
}

/** Request payload for AskQuestion#create. */
class AskQuestionCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Asset entity data model. */
class Asset
{
    public ?string $aspect_ratio = null;
    public string $created_at;
    public ?array $data = null;
    public ?array $directives = null;
    public ?float $duration = null;
    public string $encoding_tier;
    public ?array $errors = null;
    public ?bool $generate_shots = null;
    public string $id;
    public ?string $ingest_type = null;
    public ?bool $is_live = null;
    public ?string $live_stream_id = null;
    public ?array $master = null;
    public string $master_access;
    public string $max_resolution_tier;
    public ?float $max_stored_frame_rate = null;
    public ?string $max_stored_resolution = null;
    public ?array $meta = null;
    public ?string $mp4_support = null;
    public ?array $non_standard_input_reasons = null;
    public ?bool $normalize_audio = null;
    public ?string $passthrough = null;
    public ?array $playback_ids = null;
    public array $progress;
    public ?array $recording_times = null;
    public ?string $resolution_tier = null;
    public array $shots;
    public ?string $source_asset_id = null;
    public ?array $static_renditions = null;
    public string $status;
    public ?bool $test = null;
    public ?float $thumbnail_time = null;
    public ?array $tracks = null;
    public ?string $upload_id = null;
    public ?string $video_quality = null;
}

/** Request payload for Asset#load. */
class AssetLoadMatch
{
    public string $id;
}

/** Request payload for Asset#create. */
class AssetCreateData
{
    public ?string $aspect_ratio = null;
    public string $created_at;
    public ?array $data = null;
    public ?array $directives = null;
    public ?float $duration = null;
    public string $encoding_tier;
    public ?array $errors = null;
    public ?bool $generate_shots = null;
    public string $id;
    public ?string $ingest_type = null;
    public ?bool $is_live = null;
    public ?string $live_stream_id = null;
    public ?array $master = null;
    public string $master_access;
    public string $max_resolution_tier;
    public ?float $max_stored_frame_rate = null;
    public ?string $max_stored_resolution = null;
    public ?array $meta = null;
    public ?string $mp4_support = null;
    public ?array $non_standard_input_reasons = null;
    public ?bool $normalize_audio = null;
    public ?string $passthrough = null;
    public ?array $playback_ids = null;
    public array $progress;
    public ?array $recording_times = null;
    public ?string $resolution_tier = null;
    public array $shots;
    public ?string $source_asset_id = null;
    public ?array $static_renditions = null;
    public string $status;
    public ?bool $test = null;
    public ?float $thumbnail_time = null;
    public ?array $tracks = null;
    public ?string $upload_id = null;
    public ?string $video_quality = null;
}

/** Request payload for Asset#update. */
class AssetUpdateData
{
    public string $id;
    public ?string $aspect_ratio = null;
    public ?string $created_at = null;
    public ?array $data = null;
    public ?array $directives = null;
    public ?float $duration = null;
    public ?string $encoding_tier = null;
    public ?array $errors = null;
    public ?bool $generate_shots = null;
    public ?string $ingest_type = null;
    public ?bool $is_live = null;
    public ?string $live_stream_id = null;
    public ?array $master = null;
    public ?string $master_access = null;
    public ?string $max_resolution_tier = null;
    public ?float $max_stored_frame_rate = null;
    public ?string $max_stored_resolution = null;
    public ?array $meta = null;
    public ?string $mp4_support = null;
    public ?array $non_standard_input_reasons = null;
    public ?bool $normalize_audio = null;
    public ?string $passthrough = null;
    public ?array $playback_ids = null;
    public ?array $progress = null;
    public ?array $recording_times = null;
    public ?string $resolution_tier = null;
    public ?array $shots = null;
    public ?string $source_asset_id = null;
    public ?array $static_renditions = null;
    public ?string $status = null;
    public ?bool $test = null;
    public ?float $thumbnail_time = null;
    public ?array $tracks = null;
    public ?string $upload_id = null;
    public ?string $video_quality = null;
}

/** Request payload for Asset#remove. */
class AssetRemoveMatch
{
    public string $id;
}

/** AssetOrLiveStreamId entity data model. */
class AssetOrLiveStreamId
{
    public string $id;
    public array $object;
    public string $policy;
}

/** Request payload for AssetOrLiveStreamId#load. */
class AssetOrLiveStreamIdLoadMatch
{
    public string $playback_id;
}

/** AssetPlaybackId entity data model. */
class AssetPlaybackId
{
    public ?string $drm_configuration_id = null;
    public string $id;
    public string $policy;
}

/** Request payload for AssetPlaybackId#load. */
class AssetPlaybackIdLoadMatch
{
    public string $asset_id;
    public string $id;
}

/** AssetShot entity data model. */
class AssetShot
{
    public ?array $errors = null;
    public ?string $shots_manifest_url = null;
    public string $status;
}

/** Request payload for AssetShot#load. */
class AssetShotLoadMatch
{
    public string $asset_id;
}

/** CreatePlaybackId entity data model. */
class CreatePlaybackId
{
    public ?string $drm_configuration_id = null;
    public ?string $policy = null;
}

/** Request payload for CreatePlaybackId#create. */
class CreatePlaybackIdCreateData
{
    public string $asset_id;
    public ?string $drm_configuration_id = null;
    public ?string $policy = null;
}

/** CreateTrack entity data model. */
class CreateTrack
{
    public ?bool $closed_captions = null;
    public string $language_code;
    public ?string $name = null;
    public ?string $passthrough = null;
    public ?string $text_type = null;
    public string $type;
    public string $url;
}

/** Request payload for CreateTrack#create. */
class CreateTrackCreateData
{
    public string $asset_id;
    public ?bool $closed_captions = null;
    public string $language_code;
    public ?string $name = null;
    public ?string $passthrough = null;
    public ?string $text_type = null;
    public string $type;
    public string $url;
}

/** Directive entity data model. */
class Directive
{
    public int $created_at;
    public string $id;
    public string $name;
    public array $resources;
    public array $subject;
    public int $updated_at;
    public array $workflows;
}

/** Request payload for Directive#load. */
class DirectiveLoadMatch
{
    public string $id;
}

/** Request payload for Directive#list. */
class DirectiveListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
}

/** Request payload for Directive#create. */
class DirectiveCreateData
{
    public int $created_at;
    public string $id;
    public string $name;
    public array $resources;
    public array $subject;
    public int $updated_at;
    public array $workflows;
}

/** Request payload for Directive#remove. */
class DirectiveRemoveMatch
{
    public string $id;
}

/** DirectiveRunDetail entity data model. */
class DirectiveRunDetail
{
    public mixed $completed_at;
    public array $node_states;
    public string $run_id;
    public int $started_at;
    public string $status;
    public string $subject_id;
}

/** Request payload for DirectiveRunDetail#load. */
class DirectiveRunDetailLoadMatch
{
    public string $directive_id;
    public string $run_id;
}

/** DirectiveRunList entity data model. */
class DirectiveRunList
{
    public mixed $completed_at;
    public array $node_states;
    public string $run_id;
    public int $started_at;
    public string $status;
    public string $subject_id;
}

/** Request payload for DirectiveRunList#list. */
class DirectiveRunListListMatch
{
    public string $directive_id;
    public ?int $limit = null;
    public ?int $page = null;
}

/** DrmConfiguration entity data model. */
class DrmConfiguration
{
    public string $id;
}

/** Request payload for DrmConfiguration#load. */
class DrmConfigurationLoadMatch
{
    public string $id;
}

/** EditCaption entity data model. */
class EditCaption
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for EditCaption#load. */
class EditCaptionLoadMatch
{
    public string $id;
}

/** Request payload for EditCaption#create. */
class EditCaptionCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** EngagementHeatmap entity data model. */
class EngagementHeatmap
{
    public array $data;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for EngagementHeatmap#list. */
class EngagementHeatmapListMatch
{
    public string $asset_id;
    public ?array $timeframe = null;
}

/** EngagementHotspot entity data model. */
class EngagementHotspot
{
    public array $data;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for EngagementHotspot#list. */
class EngagementHotspotListMatch
{
    public string $asset_id;
    public ?int $limit = null;
    public ?string $order_direction = null;
    public ?array $timeframe = null;
}

/** FindBestThumbnail entity data model. */
class FindBestThumbnail
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for FindBestThumbnail#load. */
class FindBestThumbnailLoadMatch
{
    public string $id;
}

/** Request payload for FindBestThumbnail#create. */
class FindBestThumbnailCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** FindKeyMoment entity data model. */
class FindKeyMoment
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for FindKeyMoment#load. */
class FindKeyMomentLoadMatch
{
    public string $id;
}

/** Request payload for FindKeyMoment#create. */
class FindKeyMomentCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** FindScene entity data model. */
class FindScene
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for FindScene#load. */
class FindSceneLoadMatch
{
    public string $id;
}

/** Request payload for FindScene#create. */
class FindSceneCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** GenerateAssetShot entity data model. */
class GenerateAssetShot
{
    public ?array $data = null;
}

/** Request payload for GenerateAssetShot#create. */
class GenerateAssetShotCreateData
{
    public string $asset_id;
    public ?array $data = null;
}

/** GenerateChapter entity data model. */
class GenerateChapter
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for GenerateChapter#load. */
class GenerateChapterLoadMatch
{
    public string $id;
}

/** Request payload for GenerateChapter#create. */
class GenerateChapterCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** GenerateEngagementInsight entity data model. */
class GenerateEngagementInsight
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for GenerateEngagementInsight#load. */
class GenerateEngagementInsightLoadMatch
{
    public string $id;
}

/** Request payload for GenerateEngagementInsight#create. */
class GenerateEngagementInsightCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** GeneratePremiumCaption entity data model. */
class GeneratePremiumCaption
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for GeneratePremiumCaption#load. */
class GeneratePremiumCaptionLoadMatch
{
    public string $id;
}

/** Request payload for GeneratePremiumCaption#create. */
class GeneratePremiumCaptionCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** GenerateTrackSubtitle entity data model. */
class GenerateTrackSubtitle
{
    public array $generated_subtitles;
}

/** Request payload for GenerateTrackSubtitle#create. */
class GenerateTrackSubtitleCreateData
{
    public string $asset_id;
    public string $track_id;
    public array $generated_subtitles;
}

/** Incident entity data model. */
class Incident
{
    public array $data;
    public ?string $id = null;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for Incident#load. */
class IncidentLoadMatch
{
    public string $id;
}

/** InputInfo entity data model. */
class InputInfo
{
    public ?array $file = null;
    public ?array $settings = null;
}

/** Request payload for InputInfo#list. */
class InputInfoListMatch
{
    public string $asset_id;
}

/** JobSummary entity data model. */
class JobSummary
{
    public int $created_at;
    public string $id;
    public array $links;
    public string $status;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for JobSummary#create. */
class JobSummaryCreateData
{
    public string $job_id;
    public int $created_at;
    public string $id;
    public array $links;
    public string $status;
    public int $updated_at;
    public string $workflow;
}

/** ListAllMetricValue entity data model. */
class ListAllMetricValue
{
    public ?int $ended_views = null;
    public ?array $items = null;
    public ?string $metric = null;
    public string $name;
    public ?int $started_views = null;
    public ?int $total_playing_time = null;
    public ?string $type = null;
    public ?int $unique_viewers = null;
    public ?float $value = null;
    public ?int $view_count = null;
    public ?int $watch_time = null;
}

/** Request payload for ListAllMetricValue#list. */
class ListAllMetricValueListMatch
{
    public ?string $dimension = null;
    public ?array $filter = null;
    public ?array $metric_filter = null;
    public ?array $timeframe = null;
    public ?string $value = null;
}

/** ListAnnotation entity data model. */
class ListAnnotation
{
    public string $date;
    public string $id;
    public string $note;
    public ?string $sub_property_id = null;
}

/** Request payload for ListAnnotation#list. */
class ListAnnotationListMatch
{
    public ?int $limit = null;
    public ?string $order_direction = null;
    public ?int $page = null;
    public ?array $timeframe = null;
}

/** ListAsset entity data model. */
class ListAsset
{
    public ?string $aspect_ratio = null;
    public string $created_at;
    public ?array $directives = null;
    public ?float $duration = null;
    public string $encoding_tier;
    public ?array $errors = null;
    public ?bool $generate_shots = null;
    public string $id;
    public ?string $ingest_type = null;
    public ?bool $is_live = null;
    public ?string $live_stream_id = null;
    public ?array $master = null;
    public string $master_access;
    public string $max_resolution_tier;
    public ?float $max_stored_frame_rate = null;
    public ?string $max_stored_resolution = null;
    public ?array $meta = null;
    public ?string $mp4_support = null;
    public ?array $non_standard_input_reasons = null;
    public ?bool $normalize_audio = null;
    public ?string $passthrough = null;
    public ?array $playback_ids = null;
    public array $progress;
    public ?array $recording_times = null;
    public ?string $resolution_tier = null;
    public array $shots;
    public ?string $source_asset_id = null;
    public ?array $static_renditions = null;
    public string $status;
    public ?bool $test = null;
    public ?float $thumbnail_time = null;
    public ?array $tracks = null;
    public ?string $upload_id = null;
    public ?string $video_quality = null;
}

/** Request payload for ListAsset#list. */
class ListAssetListMatch
{
    public ?string $cursor = null;
    public ?int $limit = null;
    public ?string $live_stream_id = null;
    public ?int $page = null;
    public ?string $upload_id = null;
}

/** ListBreakdownValue entity data model. */
class ListBreakdownValue
{
    public string $field;
    public int $negative_impact;
    public int $total_playing_time;
    public int $total_watch_time;
    public float $value;
    public int $views;
}

/** Request payload for ListBreakdownValue#list. */
class ListBreakdownValueListMatch
{
    public string $metric_id;
    public ?array $filter = null;
    public ?string $group_by = null;
    public ?int $limit = null;
    public ?string $measurement = null;
    public ?array $metric_filter = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?int $page = null;
    public ?array $timeframe = null;
}

/** ListDeliveryUsage entity data model. */
class ListDeliveryUsage
{
    public float $asset_duration;
    public string $asset_encoding_tier;
    public string $asset_id;
    public string $asset_resolution_tier;
    public string $asset_state;
    public ?string $asset_video_quality = null;
    public string $created_at;
    public ?string $deleted_at = null;
    public float $delivered_seconds;
    public array $delivered_seconds_by_resolution;
    public ?string $live_stream_id = null;
    public ?string $passthrough = null;
}

/** Request payload for ListDeliveryUsage#list. */
class ListDeliveryUsageListMatch
{
    public ?string $asset_id = null;
    public ?int $limit = null;
    public ?string $live_stream_id = null;
    public ?int $page = null;
    public ?array $timeframe = null;
}

/** ListDimension entity data model. */
class ListDimension
{
    public array $data;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for ListDimension#list. */
class ListDimensionListMatch
{
    public ?array $data = null;
    public ?array $timeframe = null;
    public ?int $total_row_count = null;
}

/** ListDimensionValue entity data model. */
class ListDimensionValue
{
    public array $data;
    public array $timeframe;
    public int $total_count;
    public int $total_row_count;
    public string $value;
}

/** Request payload for ListDimensionValue#load. */
class ListDimensionValueLoadMatch
{
    public string $dimension_id;
    public ?array $filter = null;
    public ?int $limit = null;
    public ?array $metric_filter = null;
    public ?int $page = null;
    public ?array $timeframe = null;
}

/** Request payload for ListDimensionValue#list. */
class ListDimensionValueListMatch
{
    public string $dimension_id;
    public ?array $filter = null;
    public ?int $limit = null;
    public ?array $metric_filter = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?int $page = null;
    public ?array $timeframe = null;
}

/** ListDrmConfiguration entity data model. */
class ListDrmConfiguration
{
    public string $id;
}

/** Request payload for ListDrmConfiguration#list. */
class ListDrmConfigurationListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
}

/** ListError entity data model. */
class ListError
{
    public int $code;
    public int $count;
    public string $description;
    public int $id;
    public string $last_seen;
    public string $message;
    public string $notes;
    public float $percentage;
    public string $player_error_code;
}

/** Request payload for ListError#list. */
class ListErrorListMatch
{
    public ?array $filter = null;
    public ?array $metric_filter = null;
    public ?array $timeframe = null;
}

/** ListExport entity data model. */
class ListExport
{
    public array $data;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for ListExport#list. */
class ListExportListMatch
{
    public ?array $data = null;
    public ?array $timeframe = null;
    public ?int $total_row_count = null;
}

/** ListFilter entity data model. */
class ListFilter
{
    public array $data;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for ListFilter#list. */
class ListFilterListMatch
{
    public ?array $data = null;
    public ?array $timeframe = null;
    public ?int $total_row_count = null;
}

/** ListFilterValue entity data model. */
class ListFilterValue
{
    public array $data;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for ListFilterValue#load. */
class ListFilterValueLoadMatch
{
    public string $filter_id;
    public ?array $filter = null;
    public ?int $limit = null;
    public ?int $page = null;
    public ?array $timeframe = null;
}

/** ListIncident entity data model. */
class ListIncident
{
    public int $affected_views;
    public int $affected_views_per_hour;
    public int $affected_views_per_hour_on_open;
    public array $breakdowns;
    public string $description;
    public string $error_description;
    public string $id;
    public string $impact;
    public string $incident_key;
    public float $measured_value;
    public float $measured_value_on_close;
    public string $measurement;
    public array $notification_rules;
    public array $notifications;
    public string $resolved_at;
    public int $sample_size;
    public string $sample_size_unit;
    public string $severity;
    public string $started_at;
    public string $status;
    public float $threshold;
}

/** Request payload for ListIncident#list. */
class ListIncidentListMatch
{
    public ?int $limit = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?int $page = null;
    public ?string $severity = null;
    public ?string $status = null;
}

/** ListInsight entity data model. */
class ListInsight
{
    public string $filter_column;
    public string $filter_value;
    public float $metric;
    public float $negative_impact_score;
    public int $total_playing_time;
    public int $total_views;
    public int $total_watch_time;
}

/** Request payload for ListInsight#list. */
class ListInsightListMatch
{
    public string $metric_id;
    public ?array $filter = null;
    public ?string $measurement = null;
    public ?array $metric_filter = null;
    public ?string $order_direction = null;
    public ?array $timeframe = null;
}

/** ListJob entity data model. */
class ListJob
{
    public int $created_at;
    public string $id;
    public array $links;
    public string $status;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for ListJob#list. */
class ListJobListMatch
{
    public ?string $asset_id = null;
    public ?int $limit = null;
    public ?int $page = null;
    public mixed $status = null;
    public ?string $workflow = null;
}

/** ListLiveStream entity data model. */
class ListLiveStream
{
    public ?string $active_asset_id = null;
    public ?string $active_ingest_protocol = null;
    public ?bool $audio_only = null;
    public string $created_at;
    public ?array $embedded_subtitles = null;
    public ?array $generated_subtitles = null;
    public string $id;
    public string $latency_mode;
    public ?bool $low_latency = null;
    public int $max_continuous_duration;
    public ?array $meta = null;
    public ?array $new_asset_settings = null;
    public ?string $passthrough = null;
    public ?array $playback_ids = null;
    public ?array $recent_asset_ids = null;
    public ?string $reconnect_slate_url = null;
    public ?float $reconnect_window = null;
    public ?bool $reduced_latency = null;
    public ?array $simulcast_targets = null;
    public ?string $srt_passphrase = null;
    public string $status;
    public string $stream_key;
    public ?bool $test = null;
    public ?bool $use_slate_for_standard_latency = null;
}

/** Request payload for ListLiveStream#list. */
class ListLiveStreamListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
    public ?string $status = null;
    public ?string $stream_key = null;
}

/** ListMonitoringDimension entity data model. */
class ListMonitoringDimension
{
    public string $display_name;
    public string $name;
}

/** Request payload for ListMonitoringDimension#list. */
class ListMonitoringDimensionListMatch
{
    public ?string $display_name = null;
    public ?string $name = null;
}

/** ListMonitoringMetric entity data model. */
class ListMonitoringMetric
{
    public string $display_name;
    public string $name;
}

/** Request payload for ListMonitoringMetric#list. */
class ListMonitoringMetricListMatch
{
    public ?string $display_name = null;
    public ?string $name = null;
}

/** ListPlaybackRestriction entity data model. */
class ListPlaybackRestriction
{
    public string $created_at;
    public string $id;
    public array $referrer;
    public string $updated_at;
    public array $user_agent;
}

/** Request payload for ListPlaybackRestriction#list. */
class ListPlaybackRestrictionListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
}

/** ListRealTimeDimension entity data model. */
class ListRealTimeDimension
{
    public string $display_name;
    public string $name;
}

/** Request payload for ListRealTimeDimension#list. */
class ListRealTimeDimensionListMatch
{
    public ?string $display_name = null;
    public ?string $name = null;
}

/** ListRealTimeMetric entity data model. */
class ListRealTimeMetric
{
    public string $display_name;
    public string $name;
}

/** Request payload for ListRealTimeMetric#list. */
class ListRealTimeMetricListMatch
{
    public ?string $display_name = null;
    public ?string $name = null;
}

/** ListRelatedIncident entity data model. */
class ListRelatedIncident
{
    public int $affected_views;
    public int $affected_views_per_hour;
    public int $affected_views_per_hour_on_open;
    public array $breakdowns;
    public string $description;
    public string $error_description;
    public string $id;
    public string $impact;
    public string $incident_key;
    public float $measured_value;
    public float $measured_value_on_close;
    public string $measurement;
    public array $notification_rules;
    public array $notifications;
    public string $resolved_at;
    public int $sample_size;
    public string $sample_size_unit;
    public string $severity;
    public string $started_at;
    public string $status;
    public float $threshold;
}

/** Request payload for ListRelatedIncident#list. */
class ListRelatedIncidentListMatch
{
    public string $incident_id;
    public ?int $limit = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?int $page = null;
}

/** ListSigningKey entity data model. */
class ListSigningKey
{
    public string $created_at;
    public string $id;
    public ?string $private_key = null;
}

/** Request payload for ListSigningKey#list. */
class ListSigningKeyListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
}

/** ListSubviewBreakdownValue entity data model. */
class ListSubviewBreakdownValue
{
    public string $breakdown_value;
    public float $metric_value;
}

/** Request payload for ListSubviewBreakdownValue#list. */
class ListSubviewBreakdownValueListMatch
{
    public string $subview_metric_id;
    public string $subview_type;
    public ?array $filter = null;
    public ?array $group_by = null;
    public ?int $limit = null;
    public ?int $page = null;
    public ?array $timeframe = null;
}

/** ListSubviewComparisonValue entity data model. */
class ListSubviewComparisonValue
{
    public string $dimension_value;
    public array $values;
}

/** Request payload for ListSubviewComparisonValue#list. */
class ListSubviewComparisonValueListMatch
{
    public string $subview_metric_id;
    public string $subview_type;
    public ?int $breakdown_value_limit = null;
    public string $dimension;
    public ?array $filter = null;
    public ?array $group_by = null;
    public ?array $timeframe = null;
    public array $value;
}

/** ListSubviewDimension entity data model. */
class ListSubviewDimension
{
    public array $subview;
    public array $view;
}

/** Request payload for ListSubviewDimension#load. */
class ListSubviewDimensionLoadMatch
{
    public string $subview_type;
}

/** ListSubviewDimensionValue entity data model. */
class ListSubviewDimensionValue
{
    public array $data;
    public mixed $meta;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for ListSubviewDimensionValue#load. */
class ListSubviewDimensionValueLoadMatch
{
    public string $dimension_name;
    public string $subview_metric_id;
    public ?array $filter = null;
    public ?int $limit = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?int $page = null;
    public ?string $query = null;
    public ?array $timeframe = null;
}

/** ListTranscriptionVocabulary entity data model. */
class ListTranscriptionVocabulary
{
    public string $created_at;
    public string $id;
    public ?string $name = null;
    public ?string $passthrough = null;
    public ?array $phrases = null;
    public string $updated_at;
}

/** Request payload for ListTranscriptionVocabulary#list. */
class ListTranscriptionVocabularyListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
}

/** ListUpload entity data model. */
class ListUpload
{
    public ?string $asset_id = null;
    public string $cors_origin;
    public ?array $error = null;
    public string $id;
    public ?array $new_asset_settings = null;
    public string $status;
    public ?bool $test = null;
    public int $timeout;
    public ?string $url = null;
}

/** Request payload for ListUpload#list. */
class ListUploadListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
}

/** ListUsageExport entity data model. */
class ListUsageExport
{
    public string $date;
    public string $download_url;
    public int $download_url_expires_at;
    public int $file_size;
}

/** Request payload for ListUsageExport#list. */
class ListUsageExportListMatch
{
    public ?int $download_url_ttl = null;
    public ?int $limit = null;
    public ?int $page = null;
    public ?array $timeframe = null;
}

/** ListVideoView entity data model. */
class ListVideoView
{
    public string $country_code;
    public int $error_type_id;
    public string $id;
    public bool $playback_failure;
    public string $player_error_code;
    public string $player_error_message;
    public int $total_row_count;
    public string $video_title;
    public string $view_end;
    public string $view_start;
    public string $viewer_application_name;
    public float $viewer_experience_score;
    public string $viewer_os_family;
    public int $watch_time;
}

/** Request payload for ListVideoView#list. */
class ListVideoViewListMatch
{
    public ?int $error_id = null;
    public ?array $filter = null;
    public ?int $limit = null;
    public ?array $metric_filter = null;
    public ?string $order_direction = null;
    public ?int $page = null;
    public ?array $timeframe = null;
    public ?string $viewer_id = null;
}

/** ListVideoViewExport entity data model. */
class ListVideoViewExport
{
    public string $export_date;
    public array $files;
}

/** Request payload for ListVideoViewExport#list. */
class ListVideoViewExportListMatch
{
    public ?string $export_date = null;
    public ?array $files = null;
}

/** ListWebhook entity data model. */
class ListWebhook
{
    public string $address;
    public string $created_at;
    public bool $enabled;
    public string $id;
    public ?string $signing_secret = null;
}

/** Request payload for ListWebhook#list. */
class ListWebhookListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
}

/** LiveStream entity data model. */
class LiveStream
{
    public ?string $active_asset_id = null;
    public ?string $active_ingest_protocol = null;
    public ?array $advanced_playback_policies = null;
    public ?bool $audio_only = null;
    public string $created_at;
    public ?array $embedded_subtitles = null;
    public ?array $generated_subtitles = null;
    public string $id;
    public string $latency_mode;
    public ?bool $low_latency = null;
    public int $max_continuous_duration;
    public ?array $meta = null;
    public ?array $new_asset_settings = null;
    public ?string $passthrough = null;
    public ?array $playback_ids = null;
    public ?array $playback_policies = null;
    public ?array $playback_policy = null;
    public ?array $recent_asset_ids = null;
    public ?string $reconnect_slate_url = null;
    public ?float $reconnect_window = null;
    public ?bool $reduced_latency = null;
    public ?array $simulcast_targets = null;
    public ?string $srt_passphrase = null;
    public string $status;
    public string $stream_key;
    public ?bool $test = null;
    public ?bool $use_slate_for_standard_latency = null;
}

/** Request payload for LiveStream#load. */
class LiveStreamLoadMatch
{
    public string $id;
}

/** Request payload for LiveStream#create. */
class LiveStreamCreateData
{
    public ?string $active_asset_id = null;
    public ?string $active_ingest_protocol = null;
    public ?array $advanced_playback_policies = null;
    public ?bool $audio_only = null;
    public string $created_at;
    public ?array $embedded_subtitles = null;
    public ?array $generated_subtitles = null;
    public string $id;
    public string $latency_mode;
    public ?bool $low_latency = null;
    public int $max_continuous_duration;
    public ?array $meta = null;
    public ?array $new_asset_settings = null;
    public ?string $passthrough = null;
    public ?array $playback_ids = null;
    public ?array $playback_policies = null;
    public ?array $playback_policy = null;
    public ?array $recent_asset_ids = null;
    public ?string $reconnect_slate_url = null;
    public ?float $reconnect_window = null;
    public ?bool $reduced_latency = null;
    public ?array $simulcast_targets = null;
    public ?string $srt_passphrase = null;
    public string $status;
    public string $stream_key;
    public ?bool $test = null;
    public ?bool $use_slate_for_standard_latency = null;
}

/** Request payload for LiveStream#update. */
class LiveStreamUpdateData
{
    public string $id;
    public ?string $active_asset_id = null;
    public ?string $active_ingest_protocol = null;
    public ?array $advanced_playback_policies = null;
    public ?bool $audio_only = null;
    public ?string $created_at = null;
    public ?array $embedded_subtitles = null;
    public ?array $generated_subtitles = null;
    public ?string $latency_mode = null;
    public ?bool $low_latency = null;
    public ?int $max_continuous_duration = null;
    public ?array $meta = null;
    public ?array $new_asset_settings = null;
    public ?string $passthrough = null;
    public ?array $playback_ids = null;
    public ?array $playback_policies = null;
    public ?array $playback_policy = null;
    public ?array $recent_asset_ids = null;
    public ?string $reconnect_slate_url = null;
    public ?float $reconnect_window = null;
    public ?bool $reduced_latency = null;
    public ?array $simulcast_targets = null;
    public ?string $srt_passphrase = null;
    public ?string $status = null;
    public ?string $stream_key = null;
    public ?bool $test = null;
    public ?bool $use_slate_for_standard_latency = null;
}

/** Request payload for LiveStream#remove. */
class LiveStreamRemoveMatch
{
    public string $id;
}

/** LiveStreamPlaybackId entity data model. */
class LiveStreamPlaybackId
{
    public ?string $drm_configuration_id = null;
    public string $id;
    public string $policy;
}

/** Request payload for LiveStreamPlaybackId#load. */
class LiveStreamPlaybackIdLoadMatch
{
    public string $id;
    public string $live_stream_id;
}

/** MetricTimeseriesData entity data model. */
class MetricTimeseriesData
{
    public array $data;
    public array $meta;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for MetricTimeseriesData#list. */
class MetricTimeseriesDataListMatch
{
    public string $metric_id;
    public ?array $filter = null;
    public ?string $group_by = null;
    public ?string $measurement = null;
    public ?array $metric_filter = null;
    public ?string $order_direction = null;
    public ?array $timeframe = null;
}

/** Moderate entity data model. */
class Moderate
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for Moderate#load. */
class ModerateLoadMatch
{
    public string $id;
}

/** Request payload for Moderate#create. */
class ModerateCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** MonitoringBreakdown entity data model. */
class MonitoringBreakdown
{
    public int $concurrent_viewers;
    public ?string $display_value = null;
    public float $metric_value;
    public int $negative_impact;
    public int $starting_up_viewers;
    public string $value;
}

/** Request payload for MonitoringBreakdown#list. */
class MonitoringBreakdownListMatch
{
    public string $monitoring_metric_id;
    public ?string $dimension = null;
    public ?array $filter = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?int $timestamp = null;
}

/** MonitoringBreakdownTimeseries entity data model. */
class MonitoringBreakdownTimeseries
{
    public string $date;
    public array $values;
}

/** Request payload for MonitoringBreakdownTimeseries#list. */
class MonitoringBreakdownTimeseriesListMatch
{
    public string $monitoring_metric_id;
    public ?string $dimension = null;
    public ?array $filter = null;
    public ?int $limit = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?array $timeframe = null;
}

/** MonitoringHistogramTimeseries entity data model. */
class MonitoringHistogramTimeseries
{
    public float $average;
    public array $bucket_values;
    public float $max_percentage;
    public float $median;
    public float $p95;
    public int $sum;
    public string $timestamp;
}

/** Request payload for MonitoringHistogramTimeseries#list. */
class MonitoringHistogramTimeseriesListMatch
{
    public string $monitoring_histogram_metric_id;
    public ?array $filter = null;
}

/** MonitoringTimeseries entity data model. */
class MonitoringTimeseries
{
    public int $concurrent_viewers;
    public string $date;
    public float $value;
}

/** Request payload for MonitoringTimeseries#list. */
class MonitoringTimeseriesListMatch
{
    public string $monitoring_metric_id;
    public ?array $filter = null;
    public ?int $timestamp = null;
}

/** Overall entity data model. */
class Overall
{
    public array $data;
    public array $meta;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for Overall#list. */
class OverallListMatch
{
    public string $metric_id;
    public ?array $filter = null;
    public ?string $measurement = null;
    public ?array $metric_filter = null;
    public ?array $timeframe = null;
}

/** PlaybackRestriction entity data model. */
class PlaybackRestriction
{
    public string $created_at;
    public string $id;
    public array $referrer;
    public string $updated_at;
    public array $user_agent;
}

/** Request payload for PlaybackRestriction#load. */
class PlaybackRestrictionLoadMatch
{
    public string $id;
}

/** Request payload for PlaybackRestriction#create. */
class PlaybackRestrictionCreateData
{
    public string $created_at;
    public string $id;
    public array $referrer;
    public string $updated_at;
    public array $user_agent;
}

/** Request payload for PlaybackRestriction#update. */
class PlaybackRestrictionUpdateData
{
    public string $playback_restriction_id;
    public ?string $created_at = null;
    public ?string $id = null;
    public ?array $referrer = null;
    public ?string $updated_at = null;
    public ?array $user_agent = null;
}

/** Request payload for PlaybackRestriction#remove. */
class PlaybackRestrictionRemoveMatch
{
    public string $id;
}

/** RealTimeBreakdown entity data model. */
class RealTimeBreakdown
{
    public int $concurrent_viewers;
    public ?string $display_value = null;
    public float $metric_value;
    public int $negative_impact;
    public int $starting_up_viewers;
    public string $value;
}

/** Request payload for RealTimeBreakdown#list. */
class RealTimeBreakdownListMatch
{
    public string $realtime_metric_id;
    public ?string $dimension = null;
    public ?array $filter = null;
    public ?string $order_by = null;
    public ?string $order_direction = null;
    public ?int $timestamp = null;
}

/** RealTimeHistogramTimeseries entity data model. */
class RealTimeHistogramTimeseries
{
    public float $average;
    public array $bucket_values;
    public float $max_percentage;
    public float $median;
    public float $p95;
    public int $sum;
    public string $timestamp;
}

/** Request payload for RealTimeHistogramTimeseries#list. */
class RealTimeHistogramTimeseriesListMatch
{
    public string $realtime_histogram_metric_id;
    public ?array $filter = null;
}

/** RealTimeTimeseries entity data model. */
class RealTimeTimeseries
{
    public int $concurrent_viewers;
    public string $date;
    public float $value;
}

/** Request payload for RealTimeTimeseries#list. */
class RealTimeTimeseriesListMatch
{
    public string $realtime_metric_id;
    public ?array $filter = null;
    public ?int $timestamp = null;
}

/** SignalLiveStreamComplete entity data model. */
class SignalLiveStreamComplete
{
    public ?array $data = null;
}

/** Request payload for SignalLiveStreamComplete#update. */
class SignalLiveStreamCompleteUpdateData
{
    public string $live_stream_id;
    public ?array $data = null;
}

/** SigningKey entity data model. */
class SigningKey
{
    public string $created_at;
    public ?array $data = null;
    public string $id;
    public ?string $private_key = null;
}

/** Request payload for SigningKey#load. */
class SigningKeyLoadMatch
{
    public string $id;
}

/** Request payload for SigningKey#create. */
class SigningKeyCreateData
{
    public string $created_at;
    public ?array $data = null;
    public string $id;
    public ?string $private_key = null;
}

/** Request payload for SigningKey#remove. */
class SigningKeyRemoveMatch
{
    public string $id;
}

/** SimulcastTarget entity data model. */
class SimulcastTarget
{
    public ?string $error_severity = null;
    public string $id;
    public ?string $passthrough = null;
    public string $status;
    public ?string $stream_key = null;
    public string $url;
}

/** Request payload for SimulcastTarget#load. */
class SimulcastTargetLoadMatch
{
    public string $id;
    public string $live_stream_id;
}

/** Request payload for SimulcastTarget#create. */
class SimulcastTargetCreateData
{
    public string $live_stream_id;
    public ?string $error_severity = null;
    public string $id;
    public ?string $passthrough = null;
    public string $status;
    public ?string $stream_key = null;
    public string $url;
}

/** StaticRendition entity data model. */
class StaticRendition
{
    public ?string $passthrough = null;
    public string $resolution;
}

/** Request payload for StaticRendition#create. */
class StaticRenditionCreateData
{
    public string $asset_id;
    public ?string $passthrough = null;
    public string $resolution;
}

/** SubviewBreakdownTimeseries entity data model. */
class SubviewBreakdownTimeseries
{
    public string $date;
    public string $status;
    public array $values;
}

/** Request payload for SubviewBreakdownTimeseries#list. */
class SubviewBreakdownTimeseriesListMatch
{
    public string $subview_metric_id;
    public string $subview_type;
    public ?int $breakdown_value_limit = null;
    public ?array $filter = null;
    public ?array $group_by = null;
    public ?string $time_granularity = null;
    public ?array $timeframe = null;
}

/** SubviewOverallValue entity data model. */
class SubviewOverallValue
{
    public array $data;
    public array $meta;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for SubviewOverallValue#list. */
class SubviewOverallValueListMatch
{
    public string $subview_metric_id;
    public string $subview_type;
    public ?array $filter = null;
    public ?array $timeframe = null;
}

/** Summarize entity data model. */
class Summarize
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for Summarize#load. */
class SummarizeLoadMatch
{
    public string $id;
}

/** Request payload for Summarize#create. */
class SummarizeCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public array $outputs;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** TranscriptionVocabulary entity data model. */
class TranscriptionVocabulary
{
    public string $created_at;
    public string $id;
    public ?string $name = null;
    public ?string $passthrough = null;
    public ?array $phrases = null;
    public string $updated_at;
}

/** Request payload for TranscriptionVocabulary#load. */
class TranscriptionVocabularyLoadMatch
{
    public string $id;
}

/** Request payload for TranscriptionVocabulary#create. */
class TranscriptionVocabularyCreateData
{
    public string $created_at;
    public string $id;
    public ?string $name = null;
    public ?string $passthrough = null;
    public ?array $phrases = null;
    public string $updated_at;
}

/** Request payload for TranscriptionVocabulary#update. */
class TranscriptionVocabularyUpdateData
{
    public string $id;
    public ?string $created_at = null;
    public ?string $name = null;
    public ?string $passthrough = null;
    public ?array $phrases = null;
    public ?string $updated_at = null;
}

/** Request payload for TranscriptionVocabulary#remove. */
class TranscriptionVocabularyRemoveMatch
{
    public string $id;
}

/** TranslateAudio entity data model. */
class TranslateAudio
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public ?array $outputs = null;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for TranslateAudio#load. */
class TranslateAudioLoadMatch
{
    public string $id;
}

/** Request payload for TranslateAudio#create. */
class TranslateAudioCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public ?array $outputs = null;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** TranslateCaption entity data model. */
class TranslateCaption
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public ?array $outputs = null;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** Request payload for TranslateCaption#load. */
class TranslateCaptionLoadMatch
{
    public string $id;
}

/** Request payload for TranslateCaption#create. */
class TranslateCaptionCreateData
{
    public int $created_at;
    public array $directive;
    public ?array $errors = null;
    public string $id;
    public ?array $outputs = null;
    public array $parameters;
    public ?string $passthrough = null;
    public array $resources;
    public string $status;
    public int $units_consumed;
    public int $updated_at;
    public string $workflow;
}

/** UpdateAssetTrack entity data model. */
class UpdateAssetTrack
{
    public ?float $auto_language_confidence = null;
    public ?bool $closed_captions = null;
    public ?float $duration = null;
    public ?string $id = null;
    public ?string $language_code = null;
    public ?int $max_channels = null;
    public ?float $max_frame_rate = null;
    public ?int $max_height = null;
    public ?int $max_width = null;
    public ?string $name = null;
    public ?string $passthrough = null;
    public ?bool $primary = null;
    public ?string $status = null;
    public ?string $text_source = null;
    public ?string $text_type = null;
    public ?string $type = null;
}

/** Request payload for UpdateAssetTrack#update. */
class UpdateAssetTrackUpdateData
{
    public string $asset_id;
    public string $id;
    public ?float $auto_language_confidence = null;
    public ?bool $closed_captions = null;
    public ?float $duration = null;
    public ?string $language_code = null;
    public ?int $max_channels = null;
    public ?float $max_frame_rate = null;
    public ?int $max_height = null;
    public ?int $max_width = null;
    public ?string $name = null;
    public ?string $passthrough = null;
    public ?bool $primary = null;
    public ?string $status = null;
    public ?string $text_source = null;
    public ?string $text_type = null;
    public ?string $type = null;
}

/** Upload entity data model. */
class Upload
{
    public ?string $asset_id = null;
    public string $cors_origin;
    public ?array $error = null;
    public string $id;
    public ?array $new_asset_settings = null;
    public string $status;
    public ?bool $test = null;
    public int $timeout;
    public ?string $url = null;
}

/** Request payload for Upload#load. */
class UploadLoadMatch
{
    public string $id;
}

/** Request payload for Upload#create. */
class UploadCreateData
{
    public ?string $asset_id = null;
    public string $cors_origin;
    public ?array $error = null;
    public string $id;
    public ?array $new_asset_settings = null;
    public string $status;
    public ?bool $test = null;
    public int $timeout;
    public ?string $url = null;
}

/** Request payload for Upload#update. */
class UploadUpdateData
{
    public string $upload_id;
    public ?string $asset_id = null;
    public ?string $cors_origin = null;
    public ?array $error = null;
    public ?string $id = null;
    public ?array $new_asset_settings = null;
    public ?string $status = null;
    public ?bool $test = null;
    public ?int $timeout = null;
    public ?string $url = null;
}

/** UrlSigningKey entity data model. */
class UrlSigningKey
{
    public ?string $id = null;
}

/** Request payload for UrlSigningKey#remove. */
class UrlSigningKeyRemoveMatch
{
    public string $id;
}

/** VideoView entity data model. */
class VideoView
{
    public array $data;
    public ?string $id = null;
    public array $timeframe;
    public int $total_row_count;
}

/** Request payload for VideoView#load. */
class VideoViewLoadMatch
{
    public string $id;
}

/** Webhook entity data model. */
class Webhook
{
    public string $address;
    public string $created_at;
    public bool $enabled;
    public string $id;
    public ?string $signing_secret = null;
}

/** Request payload for Webhook#load. */
class WebhookLoadMatch
{
    public string $id;
}

/** Request payload for Webhook#create. */
class WebhookCreateData
{
    public string $address;
    public string $created_at;
    public bool $enabled;
    public string $id;
    public ?string $signing_secret = null;
}

/** Request payload for Webhook#update. */
class WebhookUpdateData
{
    public string $id;
    public ?string $address = null;
    public ?string $created_at = null;
    public ?bool $enabled = null;
    public ?string $signing_secret = null;
}

/** Request payload for Webhook#remove. */
class WebhookRemoveMatch
{
    public string $id;
}

/** WhoAmI entity data model. */
class WhoAmI
{
    public string $access_token_name;
    public string $environment_id;
    public string $environment_name;
    public string $environment_type;
    public string $organization_id;
    public string $organization_name;
    public array $permissions;
}

/** Request payload for WhoAmI#load. */
class WhoAmILoadMatch
{
    public ?string $access_token_name = null;
    public ?string $environment_id = null;
    public ?string $environment_name = null;
    public ?string $environment_type = null;
    public ?string $organization_id = null;
    public ?string $organization_name = null;
    public ?array $permissions = null;
}

