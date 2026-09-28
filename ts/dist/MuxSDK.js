"use strict";
// Mux Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.MuxSDK = exports.MuxEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AnnotationEntity_1 = require("./entity/AnnotationEntity");
const AskQuestionEntity_1 = require("./entity/AskQuestionEntity");
const AssetEntity_1 = require("./entity/AssetEntity");
const AssetOrLiveStreamIdEntity_1 = require("./entity/AssetOrLiveStreamIdEntity");
const AssetPlaybackIdEntity_1 = require("./entity/AssetPlaybackIdEntity");
const AssetShotEntity_1 = require("./entity/AssetShotEntity");
const CreatePlaybackIdEntity_1 = require("./entity/CreatePlaybackIdEntity");
const CreateTrackEntity_1 = require("./entity/CreateTrackEntity");
const DirectiveEntity_1 = require("./entity/DirectiveEntity");
const DirectiveRunDetailEntity_1 = require("./entity/DirectiveRunDetailEntity");
const DirectiveRunListEntity_1 = require("./entity/DirectiveRunListEntity");
const DrmConfigurationEntity_1 = require("./entity/DrmConfigurationEntity");
const EditCaptionEntity_1 = require("./entity/EditCaptionEntity");
const EngagementHeatmapEntity_1 = require("./entity/EngagementHeatmapEntity");
const EngagementHotspotEntity_1 = require("./entity/EngagementHotspotEntity");
const FindBestThumbnailEntity_1 = require("./entity/FindBestThumbnailEntity");
const FindKeyMomentEntity_1 = require("./entity/FindKeyMomentEntity");
const FindSceneEntity_1 = require("./entity/FindSceneEntity");
const GenerateAssetShotEntity_1 = require("./entity/GenerateAssetShotEntity");
const GenerateChapterEntity_1 = require("./entity/GenerateChapterEntity");
const GenerateEngagementInsightEntity_1 = require("./entity/GenerateEngagementInsightEntity");
const GeneratePremiumCaptionEntity_1 = require("./entity/GeneratePremiumCaptionEntity");
const GenerateTrackSubtitleEntity_1 = require("./entity/GenerateTrackSubtitleEntity");
const IncidentEntity_1 = require("./entity/IncidentEntity");
const InputInfoEntity_1 = require("./entity/InputInfoEntity");
const JobSummaryEntity_1 = require("./entity/JobSummaryEntity");
const ListAllMetricValueEntity_1 = require("./entity/ListAllMetricValueEntity");
const ListAnnotationEntity_1 = require("./entity/ListAnnotationEntity");
const ListAssetEntity_1 = require("./entity/ListAssetEntity");
const ListBreakdownValueEntity_1 = require("./entity/ListBreakdownValueEntity");
const ListDeliveryUsageEntity_1 = require("./entity/ListDeliveryUsageEntity");
const ListDimensionEntity_1 = require("./entity/ListDimensionEntity");
const ListDimensionValueEntity_1 = require("./entity/ListDimensionValueEntity");
const ListDrmConfigurationEntity_1 = require("./entity/ListDrmConfigurationEntity");
const ListErrorEntity_1 = require("./entity/ListErrorEntity");
const ListExportEntity_1 = require("./entity/ListExportEntity");
const ListFilterEntity_1 = require("./entity/ListFilterEntity");
const ListFilterValueEntity_1 = require("./entity/ListFilterValueEntity");
const ListIncidentEntity_1 = require("./entity/ListIncidentEntity");
const ListInsightEntity_1 = require("./entity/ListInsightEntity");
const ListJobEntity_1 = require("./entity/ListJobEntity");
const ListLiveStreamEntity_1 = require("./entity/ListLiveStreamEntity");
const ListMonitoringDimensionEntity_1 = require("./entity/ListMonitoringDimensionEntity");
const ListMonitoringMetricEntity_1 = require("./entity/ListMonitoringMetricEntity");
const ListPlaybackRestrictionEntity_1 = require("./entity/ListPlaybackRestrictionEntity");
const ListRealTimeDimensionEntity_1 = require("./entity/ListRealTimeDimensionEntity");
const ListRealTimeMetricEntity_1 = require("./entity/ListRealTimeMetricEntity");
const ListRelatedIncidentEntity_1 = require("./entity/ListRelatedIncidentEntity");
const ListSigningKeyEntity_1 = require("./entity/ListSigningKeyEntity");
const ListSubviewBreakdownValueEntity_1 = require("./entity/ListSubviewBreakdownValueEntity");
const ListSubviewComparisonValueEntity_1 = require("./entity/ListSubviewComparisonValueEntity");
const ListSubviewDimensionEntity_1 = require("./entity/ListSubviewDimensionEntity");
const ListSubviewDimensionValueEntity_1 = require("./entity/ListSubviewDimensionValueEntity");
const ListTranscriptionVocabularyEntity_1 = require("./entity/ListTranscriptionVocabularyEntity");
const ListUploadEntity_1 = require("./entity/ListUploadEntity");
const ListUsageExportEntity_1 = require("./entity/ListUsageExportEntity");
const ListVideoViewEntity_1 = require("./entity/ListVideoViewEntity");
const ListVideoViewExportEntity_1 = require("./entity/ListVideoViewExportEntity");
const ListWebhookEntity_1 = require("./entity/ListWebhookEntity");
const LiveStreamEntity_1 = require("./entity/LiveStreamEntity");
const LiveStreamPlaybackIdEntity_1 = require("./entity/LiveStreamPlaybackIdEntity");
const MetricTimeseriesDataEntity_1 = require("./entity/MetricTimeseriesDataEntity");
const ModerateEntity_1 = require("./entity/ModerateEntity");
const MonitoringBreakdownEntity_1 = require("./entity/MonitoringBreakdownEntity");
const MonitoringBreakdownTimeseriesEntity_1 = require("./entity/MonitoringBreakdownTimeseriesEntity");
const MonitoringHistogramTimeseriesEntity_1 = require("./entity/MonitoringHistogramTimeseriesEntity");
const MonitoringTimeseriesEntity_1 = require("./entity/MonitoringTimeseriesEntity");
const OverallEntity_1 = require("./entity/OverallEntity");
const PlaybackRestrictionEntity_1 = require("./entity/PlaybackRestrictionEntity");
const RealTimeBreakdownEntity_1 = require("./entity/RealTimeBreakdownEntity");
const RealTimeHistogramTimeseriesEntity_1 = require("./entity/RealTimeHistogramTimeseriesEntity");
const RealTimeTimeseriesEntity_1 = require("./entity/RealTimeTimeseriesEntity");
const SignalLiveStreamCompleteEntity_1 = require("./entity/SignalLiveStreamCompleteEntity");
const SigningKeyEntity_1 = require("./entity/SigningKeyEntity");
const SimulcastTargetEntity_1 = require("./entity/SimulcastTargetEntity");
const StaticRenditionEntity_1 = require("./entity/StaticRenditionEntity");
const SubviewBreakdownTimeseriesEntity_1 = require("./entity/SubviewBreakdownTimeseriesEntity");
const SubviewOverallValueEntity_1 = require("./entity/SubviewOverallValueEntity");
const SummarizeEntity_1 = require("./entity/SummarizeEntity");
const TranscriptionVocabularyEntity_1 = require("./entity/TranscriptionVocabularyEntity");
const TranslateAudioEntity_1 = require("./entity/TranslateAudioEntity");
const TranslateCaptionEntity_1 = require("./entity/TranslateCaptionEntity");
const UpdateAssetTrackEntity_1 = require("./entity/UpdateAssetTrackEntity");
const UploadEntity_1 = require("./entity/UploadEntity");
const UrlSigningKeyEntity_1 = require("./entity/UrlSigningKeyEntity");
const VideoViewEntity_1 = require("./entity/VideoViewEntity");
const WebhookEntity_1 = require("./entity/WebhookEntity");
const WhoAmIEntity_1 = require("./entity/WhoAmIEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const MuxEntityBase_1 = require("./MuxEntityBase");
Object.defineProperty(exports, "MuxEntityBase", { enumerable: true, get: function () { return MuxEntityBase_1.MuxEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class MuxSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('MuxSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('MuxSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('MuxSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Annotation().list()` / `client.Annotation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Annotation(entopts) {
        const self = this;
        return new AnnotationEntity_1.AnnotationEntity(self, entopts);
    }
    // Entity access: `client.AskQuestion().list()` / `client.AskQuestion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AskQuestion(entopts) {
        const self = this;
        return new AskQuestionEntity_1.AskQuestionEntity(self, entopts);
    }
    // Entity access: `client.Asset().list()` / `client.Asset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Asset(entopts) {
        const self = this;
        return new AssetEntity_1.AssetEntity(self, entopts);
    }
    // Entity access: `client.AssetOrLiveStreamId().list()` / `client.AssetOrLiveStreamId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssetOrLiveStreamId(entopts) {
        const self = this;
        return new AssetOrLiveStreamIdEntity_1.AssetOrLiveStreamIdEntity(self, entopts);
    }
    // Entity access: `client.AssetPlaybackId().list()` / `client.AssetPlaybackId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssetPlaybackId(entopts) {
        const self = this;
        return new AssetPlaybackIdEntity_1.AssetPlaybackIdEntity(self, entopts);
    }
    // Entity access: `client.AssetShot().list()` / `client.AssetShot().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssetShot(entopts) {
        const self = this;
        return new AssetShotEntity_1.AssetShotEntity(self, entopts);
    }
    // Entity access: `client.CreatePlaybackId().list()` / `client.CreatePlaybackId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreatePlaybackId(entopts) {
        const self = this;
        return new CreatePlaybackIdEntity_1.CreatePlaybackIdEntity(self, entopts);
    }
    // Entity access: `client.CreateTrack().list()` / `client.CreateTrack().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateTrack(entopts) {
        const self = this;
        return new CreateTrackEntity_1.CreateTrackEntity(self, entopts);
    }
    // Entity access: `client.Directive().list()` / `client.Directive().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Directive(entopts) {
        const self = this;
        return new DirectiveEntity_1.DirectiveEntity(self, entopts);
    }
    // Entity access: `client.DirectiveRunDetail().list()` / `client.DirectiveRunDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DirectiveRunDetail(entopts) {
        const self = this;
        return new DirectiveRunDetailEntity_1.DirectiveRunDetailEntity(self, entopts);
    }
    // Entity access: `client.DirectiveRunList().list()` / `client.DirectiveRunList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DirectiveRunList(entopts) {
        const self = this;
        return new DirectiveRunListEntity_1.DirectiveRunListEntity(self, entopts);
    }
    // Entity access: `client.DrmConfiguration().list()` / `client.DrmConfiguration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DrmConfiguration(entopts) {
        const self = this;
        return new DrmConfigurationEntity_1.DrmConfigurationEntity(self, entopts);
    }
    // Entity access: `client.EditCaption().list()` / `client.EditCaption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EditCaption(entopts) {
        const self = this;
        return new EditCaptionEntity_1.EditCaptionEntity(self, entopts);
    }
    // Entity access: `client.EngagementHeatmap().list()` / `client.EngagementHeatmap().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EngagementHeatmap(entopts) {
        const self = this;
        return new EngagementHeatmapEntity_1.EngagementHeatmapEntity(self, entopts);
    }
    // Entity access: `client.EngagementHotspot().list()` / `client.EngagementHotspot().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EngagementHotspot(entopts) {
        const self = this;
        return new EngagementHotspotEntity_1.EngagementHotspotEntity(self, entopts);
    }
    // Entity access: `client.FindBestThumbnail().list()` / `client.FindBestThumbnail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FindBestThumbnail(entopts) {
        const self = this;
        return new FindBestThumbnailEntity_1.FindBestThumbnailEntity(self, entopts);
    }
    // Entity access: `client.FindKeyMoment().list()` / `client.FindKeyMoment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FindKeyMoment(entopts) {
        const self = this;
        return new FindKeyMomentEntity_1.FindKeyMomentEntity(self, entopts);
    }
    // Entity access: `client.FindScene().list()` / `client.FindScene().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FindScene(entopts) {
        const self = this;
        return new FindSceneEntity_1.FindSceneEntity(self, entopts);
    }
    // Entity access: `client.GenerateAssetShot().list()` / `client.GenerateAssetShot().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GenerateAssetShot(entopts) {
        const self = this;
        return new GenerateAssetShotEntity_1.GenerateAssetShotEntity(self, entopts);
    }
    // Entity access: `client.GenerateChapter().list()` / `client.GenerateChapter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GenerateChapter(entopts) {
        const self = this;
        return new GenerateChapterEntity_1.GenerateChapterEntity(self, entopts);
    }
    // Entity access: `client.GenerateEngagementInsight().list()` / `client.GenerateEngagementInsight().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GenerateEngagementInsight(entopts) {
        const self = this;
        return new GenerateEngagementInsightEntity_1.GenerateEngagementInsightEntity(self, entopts);
    }
    // Entity access: `client.GeneratePremiumCaption().list()` / `client.GeneratePremiumCaption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GeneratePremiumCaption(entopts) {
        const self = this;
        return new GeneratePremiumCaptionEntity_1.GeneratePremiumCaptionEntity(self, entopts);
    }
    // Entity access: `client.GenerateTrackSubtitle().list()` / `client.GenerateTrackSubtitle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GenerateTrackSubtitle(entopts) {
        const self = this;
        return new GenerateTrackSubtitleEntity_1.GenerateTrackSubtitleEntity(self, entopts);
    }
    // Entity access: `client.Incident().list()` / `client.Incident().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Incident(entopts) {
        const self = this;
        return new IncidentEntity_1.IncidentEntity(self, entopts);
    }
    // Entity access: `client.InputInfo().list()` / `client.InputInfo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InputInfo(entopts) {
        const self = this;
        return new InputInfoEntity_1.InputInfoEntity(self, entopts);
    }
    // Entity access: `client.JobSummary().list()` / `client.JobSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    JobSummary(entopts) {
        const self = this;
        return new JobSummaryEntity_1.JobSummaryEntity(self, entopts);
    }
    // Entity access: `client.ListAllMetricValue().list()` / `client.ListAllMetricValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListAllMetricValue(entopts) {
        const self = this;
        return new ListAllMetricValueEntity_1.ListAllMetricValueEntity(self, entopts);
    }
    // Entity access: `client.ListAnnotation().list()` / `client.ListAnnotation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListAnnotation(entopts) {
        const self = this;
        return new ListAnnotationEntity_1.ListAnnotationEntity(self, entopts);
    }
    // Entity access: `client.ListAsset().list()` / `client.ListAsset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListAsset(entopts) {
        const self = this;
        return new ListAssetEntity_1.ListAssetEntity(self, entopts);
    }
    // Entity access: `client.ListBreakdownValue().list()` / `client.ListBreakdownValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListBreakdownValue(entopts) {
        const self = this;
        return new ListBreakdownValueEntity_1.ListBreakdownValueEntity(self, entopts);
    }
    // Entity access: `client.ListDeliveryUsage().list()` / `client.ListDeliveryUsage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListDeliveryUsage(entopts) {
        const self = this;
        return new ListDeliveryUsageEntity_1.ListDeliveryUsageEntity(self, entopts);
    }
    // Entity access: `client.ListDimension().list()` / `client.ListDimension().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListDimension(entopts) {
        const self = this;
        return new ListDimensionEntity_1.ListDimensionEntity(self, entopts);
    }
    // Entity access: `client.ListDimensionValue().list()` / `client.ListDimensionValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListDimensionValue(entopts) {
        const self = this;
        return new ListDimensionValueEntity_1.ListDimensionValueEntity(self, entopts);
    }
    // Entity access: `client.ListDrmConfiguration().list()` / `client.ListDrmConfiguration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListDrmConfiguration(entopts) {
        const self = this;
        return new ListDrmConfigurationEntity_1.ListDrmConfigurationEntity(self, entopts);
    }
    // Entity access: `client.ListError().list()` / `client.ListError().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListError(entopts) {
        const self = this;
        return new ListErrorEntity_1.ListErrorEntity(self, entopts);
    }
    // Entity access: `client.ListExport().list()` / `client.ListExport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListExport(entopts) {
        const self = this;
        return new ListExportEntity_1.ListExportEntity(self, entopts);
    }
    // Entity access: `client.ListFilter().list()` / `client.ListFilter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListFilter(entopts) {
        const self = this;
        return new ListFilterEntity_1.ListFilterEntity(self, entopts);
    }
    // Entity access: `client.ListFilterValue().list()` / `client.ListFilterValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListFilterValue(entopts) {
        const self = this;
        return new ListFilterValueEntity_1.ListFilterValueEntity(self, entopts);
    }
    // Entity access: `client.ListIncident().list()` / `client.ListIncident().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListIncident(entopts) {
        const self = this;
        return new ListIncidentEntity_1.ListIncidentEntity(self, entopts);
    }
    // Entity access: `client.ListInsight().list()` / `client.ListInsight().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListInsight(entopts) {
        const self = this;
        return new ListInsightEntity_1.ListInsightEntity(self, entopts);
    }
    // Entity access: `client.ListJob().list()` / `client.ListJob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListJob(entopts) {
        const self = this;
        return new ListJobEntity_1.ListJobEntity(self, entopts);
    }
    // Entity access: `client.ListLiveStream().list()` / `client.ListLiveStream().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListLiveStream(entopts) {
        const self = this;
        return new ListLiveStreamEntity_1.ListLiveStreamEntity(self, entopts);
    }
    // Entity access: `client.ListMonitoringDimension().list()` / `client.ListMonitoringDimension().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListMonitoringDimension(entopts) {
        const self = this;
        return new ListMonitoringDimensionEntity_1.ListMonitoringDimensionEntity(self, entopts);
    }
    // Entity access: `client.ListMonitoringMetric().list()` / `client.ListMonitoringMetric().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListMonitoringMetric(entopts) {
        const self = this;
        return new ListMonitoringMetricEntity_1.ListMonitoringMetricEntity(self, entopts);
    }
    // Entity access: `client.ListPlaybackRestriction().list()` / `client.ListPlaybackRestriction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListPlaybackRestriction(entopts) {
        const self = this;
        return new ListPlaybackRestrictionEntity_1.ListPlaybackRestrictionEntity(self, entopts);
    }
    // Entity access: `client.ListRealTimeDimension().list()` / `client.ListRealTimeDimension().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListRealTimeDimension(entopts) {
        const self = this;
        return new ListRealTimeDimensionEntity_1.ListRealTimeDimensionEntity(self, entopts);
    }
    // Entity access: `client.ListRealTimeMetric().list()` / `client.ListRealTimeMetric().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListRealTimeMetric(entopts) {
        const self = this;
        return new ListRealTimeMetricEntity_1.ListRealTimeMetricEntity(self, entopts);
    }
    // Entity access: `client.ListRelatedIncident().list()` / `client.ListRelatedIncident().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListRelatedIncident(entopts) {
        const self = this;
        return new ListRelatedIncidentEntity_1.ListRelatedIncidentEntity(self, entopts);
    }
    // Entity access: `client.ListSigningKey().list()` / `client.ListSigningKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListSigningKey(entopts) {
        const self = this;
        return new ListSigningKeyEntity_1.ListSigningKeyEntity(self, entopts);
    }
    // Entity access: `client.ListSubviewBreakdownValue().list()` / `client.ListSubviewBreakdownValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListSubviewBreakdownValue(entopts) {
        const self = this;
        return new ListSubviewBreakdownValueEntity_1.ListSubviewBreakdownValueEntity(self, entopts);
    }
    // Entity access: `client.ListSubviewComparisonValue().list()` / `client.ListSubviewComparisonValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListSubviewComparisonValue(entopts) {
        const self = this;
        return new ListSubviewComparisonValueEntity_1.ListSubviewComparisonValueEntity(self, entopts);
    }
    // Entity access: `client.ListSubviewDimension().list()` / `client.ListSubviewDimension().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListSubviewDimension(entopts) {
        const self = this;
        return new ListSubviewDimensionEntity_1.ListSubviewDimensionEntity(self, entopts);
    }
    // Entity access: `client.ListSubviewDimensionValue().list()` / `client.ListSubviewDimensionValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListSubviewDimensionValue(entopts) {
        const self = this;
        return new ListSubviewDimensionValueEntity_1.ListSubviewDimensionValueEntity(self, entopts);
    }
    // Entity access: `client.ListTranscriptionVocabulary().list()` / `client.ListTranscriptionVocabulary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListTranscriptionVocabulary(entopts) {
        const self = this;
        return new ListTranscriptionVocabularyEntity_1.ListTranscriptionVocabularyEntity(self, entopts);
    }
    // Entity access: `client.ListUpload().list()` / `client.ListUpload().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListUpload(entopts) {
        const self = this;
        return new ListUploadEntity_1.ListUploadEntity(self, entopts);
    }
    // Entity access: `client.ListUsageExport().list()` / `client.ListUsageExport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListUsageExport(entopts) {
        const self = this;
        return new ListUsageExportEntity_1.ListUsageExportEntity(self, entopts);
    }
    // Entity access: `client.ListVideoView().list()` / `client.ListVideoView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListVideoView(entopts) {
        const self = this;
        return new ListVideoViewEntity_1.ListVideoViewEntity(self, entopts);
    }
    // Entity access: `client.ListVideoViewExport().list()` / `client.ListVideoViewExport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListVideoViewExport(entopts) {
        const self = this;
        return new ListVideoViewExportEntity_1.ListVideoViewExportEntity(self, entopts);
    }
    // Entity access: `client.ListWebhook().list()` / `client.ListWebhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListWebhook(entopts) {
        const self = this;
        return new ListWebhookEntity_1.ListWebhookEntity(self, entopts);
    }
    // Entity access: `client.LiveStream().list()` / `client.LiveStream().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LiveStream(entopts) {
        const self = this;
        return new LiveStreamEntity_1.LiveStreamEntity(self, entopts);
    }
    // Entity access: `client.LiveStreamPlaybackId().list()` / `client.LiveStreamPlaybackId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LiveStreamPlaybackId(entopts) {
        const self = this;
        return new LiveStreamPlaybackIdEntity_1.LiveStreamPlaybackIdEntity(self, entopts);
    }
    // Entity access: `client.MetricTimeseriesData().list()` / `client.MetricTimeseriesData().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MetricTimeseriesData(entopts) {
        const self = this;
        return new MetricTimeseriesDataEntity_1.MetricTimeseriesDataEntity(self, entopts);
    }
    // Entity access: `client.Moderate().list()` / `client.Moderate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Moderate(entopts) {
        const self = this;
        return new ModerateEntity_1.ModerateEntity(self, entopts);
    }
    // Entity access: `client.MonitoringBreakdown().list()` / `client.MonitoringBreakdown().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MonitoringBreakdown(entopts) {
        const self = this;
        return new MonitoringBreakdownEntity_1.MonitoringBreakdownEntity(self, entopts);
    }
    // Entity access: `client.MonitoringBreakdownTimeseries().list()` / `client.MonitoringBreakdownTimeseries().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MonitoringBreakdownTimeseries(entopts) {
        const self = this;
        return new MonitoringBreakdownTimeseriesEntity_1.MonitoringBreakdownTimeseriesEntity(self, entopts);
    }
    // Entity access: `client.MonitoringHistogramTimeseries().list()` / `client.MonitoringHistogramTimeseries().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MonitoringHistogramTimeseries(entopts) {
        const self = this;
        return new MonitoringHistogramTimeseriesEntity_1.MonitoringHistogramTimeseriesEntity(self, entopts);
    }
    // Entity access: `client.MonitoringTimeseries().list()` / `client.MonitoringTimeseries().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MonitoringTimeseries(entopts) {
        const self = this;
        return new MonitoringTimeseriesEntity_1.MonitoringTimeseriesEntity(self, entopts);
    }
    // Entity access: `client.Overall().list()` / `client.Overall().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Overall(entopts) {
        const self = this;
        return new OverallEntity_1.OverallEntity(self, entopts);
    }
    // Entity access: `client.PlaybackRestriction().list()` / `client.PlaybackRestriction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PlaybackRestriction(entopts) {
        const self = this;
        return new PlaybackRestrictionEntity_1.PlaybackRestrictionEntity(self, entopts);
    }
    // Entity access: `client.RealTimeBreakdown().list()` / `client.RealTimeBreakdown().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RealTimeBreakdown(entopts) {
        const self = this;
        return new RealTimeBreakdownEntity_1.RealTimeBreakdownEntity(self, entopts);
    }
    // Entity access: `client.RealTimeHistogramTimeseries().list()` / `client.RealTimeHistogramTimeseries().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RealTimeHistogramTimeseries(entopts) {
        const self = this;
        return new RealTimeHistogramTimeseriesEntity_1.RealTimeHistogramTimeseriesEntity(self, entopts);
    }
    // Entity access: `client.RealTimeTimeseries().list()` / `client.RealTimeTimeseries().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RealTimeTimeseries(entopts) {
        const self = this;
        return new RealTimeTimeseriesEntity_1.RealTimeTimeseriesEntity(self, entopts);
    }
    // Entity access: `client.SignalLiveStreamComplete().list()` / `client.SignalLiveStreamComplete().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SignalLiveStreamComplete(entopts) {
        const self = this;
        return new SignalLiveStreamCompleteEntity_1.SignalLiveStreamCompleteEntity(self, entopts);
    }
    // Entity access: `client.SigningKey().list()` / `client.SigningKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SigningKey(entopts) {
        const self = this;
        return new SigningKeyEntity_1.SigningKeyEntity(self, entopts);
    }
    // Entity access: `client.SimulcastTarget().list()` / `client.SimulcastTarget().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SimulcastTarget(entopts) {
        const self = this;
        return new SimulcastTargetEntity_1.SimulcastTargetEntity(self, entopts);
    }
    // Entity access: `client.StaticRendition().list()` / `client.StaticRendition().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StaticRendition(entopts) {
        const self = this;
        return new StaticRenditionEntity_1.StaticRenditionEntity(self, entopts);
    }
    // Entity access: `client.SubviewBreakdownTimeseries().list()` / `client.SubviewBreakdownTimeseries().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubviewBreakdownTimeseries(entopts) {
        const self = this;
        return new SubviewBreakdownTimeseriesEntity_1.SubviewBreakdownTimeseriesEntity(self, entopts);
    }
    // Entity access: `client.SubviewOverallValue().list()` / `client.SubviewOverallValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubviewOverallValue(entopts) {
        const self = this;
        return new SubviewOverallValueEntity_1.SubviewOverallValueEntity(self, entopts);
    }
    // Entity access: `client.Summarize().list()` / `client.Summarize().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Summarize(entopts) {
        const self = this;
        return new SummarizeEntity_1.SummarizeEntity(self, entopts);
    }
    // Entity access: `client.TranscriptionVocabulary().list()` / `client.TranscriptionVocabulary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TranscriptionVocabulary(entopts) {
        const self = this;
        return new TranscriptionVocabularyEntity_1.TranscriptionVocabularyEntity(self, entopts);
    }
    // Entity access: `client.TranslateAudio().list()` / `client.TranslateAudio().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TranslateAudio(entopts) {
        const self = this;
        return new TranslateAudioEntity_1.TranslateAudioEntity(self, entopts);
    }
    // Entity access: `client.TranslateCaption().list()` / `client.TranslateCaption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TranslateCaption(entopts) {
        const self = this;
        return new TranslateCaptionEntity_1.TranslateCaptionEntity(self, entopts);
    }
    // Entity access: `client.UpdateAssetTrack().list()` / `client.UpdateAssetTrack().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateAssetTrack(entopts) {
        const self = this;
        return new UpdateAssetTrackEntity_1.UpdateAssetTrackEntity(self, entopts);
    }
    // Entity access: `client.Upload().list()` / `client.Upload().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Upload(entopts) {
        const self = this;
        return new UploadEntity_1.UploadEntity(self, entopts);
    }
    // Entity access: `client.UrlSigningKey().list()` / `client.UrlSigningKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UrlSigningKey(entopts) {
        const self = this;
        return new UrlSigningKeyEntity_1.UrlSigningKeyEntity(self, entopts);
    }
    // Entity access: `client.VideoView().list()` / `client.VideoView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VideoView(entopts) {
        const self = this;
        return new VideoViewEntity_1.VideoViewEntity(self, entopts);
    }
    // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Webhook(entopts) {
        const self = this;
        return new WebhookEntity_1.WebhookEntity(self, entopts);
    }
    // Entity access: `client.WhoAmI().list()` / `client.WhoAmI().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WhoAmI(entopts) {
        const self = this;
        return new WhoAmIEntity_1.WhoAmIEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new MuxSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return MuxSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Mux' };
    }
    toString() {
        return 'Mux ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.MuxSDK = MuxSDK;
const SDK = MuxSDK;
exports.SDK = SDK;
//# sourceMappingURL=MuxSDK.js.map