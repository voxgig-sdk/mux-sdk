# Mux SDK

from mux_sdk.utility.voxgig_struct import voxgig_struct as vs
from mux_sdk.core.utility_type import MuxUtility
from mux_sdk.core.spec import MuxSpec
from mux_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from mux_sdk.utility import register

# Load features
from mux_sdk.feature.base_feature import MuxBaseFeature
from mux_sdk.features import _has_feature, _make_feature


class MuxSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = MuxUtility()
        self._utility = utility

        from mux_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return MuxUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = MuxSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "MuxSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("MuxSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Annotation(self, data=None) -> "AnnotationEntity":
        """Entity factory: client.Annotation().list() / client.Annotation().load({"id": ...})."""
        from mux_sdk.entity.annotation_entity import AnnotationEntity
        return AnnotationEntity(self, data)


    def AskQuestion(self, data=None) -> "AskQuestionEntity":
        """Entity factory: client.AskQuestion().list() / client.AskQuestion().load({"id": ...})."""
        from mux_sdk.entity.ask_question_entity import AskQuestionEntity
        return AskQuestionEntity(self, data)


    def Asset(self, data=None) -> "AssetEntity":
        """Entity factory: client.Asset().list() / client.Asset().load({"id": ...})."""
        from mux_sdk.entity.asset_entity import AssetEntity
        return AssetEntity(self, data)


    def AssetOrLiveStreamId(self, data=None) -> "AssetOrLiveStreamIdEntity":
        """Entity factory: client.AssetOrLiveStreamId().list() / client.AssetOrLiveStreamId().load({"id": ...})."""
        from mux_sdk.entity.asset_or_live_stream_id_entity import AssetOrLiveStreamIdEntity
        return AssetOrLiveStreamIdEntity(self, data)


    def AssetPlaybackId(self, data=None) -> "AssetPlaybackIdEntity":
        """Entity factory: client.AssetPlaybackId().list() / client.AssetPlaybackId().load({"id": ...})."""
        from mux_sdk.entity.asset_playback_id_entity import AssetPlaybackIdEntity
        return AssetPlaybackIdEntity(self, data)


    def AssetShot(self, data=None) -> "AssetShotEntity":
        """Entity factory: client.AssetShot().list() / client.AssetShot().load({"id": ...})."""
        from mux_sdk.entity.asset_shot_entity import AssetShotEntity
        return AssetShotEntity(self, data)


    def CreatePlaybackId(self, data=None) -> "CreatePlaybackIdEntity":
        """Entity factory: client.CreatePlaybackId().list() / client.CreatePlaybackId().load({"id": ...})."""
        from mux_sdk.entity.create_playback_id_entity import CreatePlaybackIdEntity
        return CreatePlaybackIdEntity(self, data)


    def CreateTrack(self, data=None) -> "CreateTrackEntity":
        """Entity factory: client.CreateTrack().list() / client.CreateTrack().load({"id": ...})."""
        from mux_sdk.entity.create_track_entity import CreateTrackEntity
        return CreateTrackEntity(self, data)


    def Directive(self, data=None) -> "DirectiveEntity":
        """Entity factory: client.Directive().list() / client.Directive().load({"id": ...})."""
        from mux_sdk.entity.directive_entity import DirectiveEntity
        return DirectiveEntity(self, data)


    def DirectiveRunDetail(self, data=None) -> "DirectiveRunDetailEntity":
        """Entity factory: client.DirectiveRunDetail().list() / client.DirectiveRunDetail().load({"id": ...})."""
        from mux_sdk.entity.directive_run_detail_entity import DirectiveRunDetailEntity
        return DirectiveRunDetailEntity(self, data)


    def DrmConfiguration(self, data=None) -> "DrmConfigurationEntity":
        """Entity factory: client.DrmConfiguration().list() / client.DrmConfiguration().load({"id": ...})."""
        from mux_sdk.entity.drm_configuration_entity import DrmConfigurationEntity
        return DrmConfigurationEntity(self, data)


    def EditCaption(self, data=None) -> "EditCaptionEntity":
        """Entity factory: client.EditCaption().list() / client.EditCaption().load({"id": ...})."""
        from mux_sdk.entity.edit_caption_entity import EditCaptionEntity
        return EditCaptionEntity(self, data)


    def EngagementHeatmap(self, data=None) -> "EngagementHeatmapEntity":
        """Entity factory: client.EngagementHeatmap().list() / client.EngagementHeatmap().load({"id": ...})."""
        from mux_sdk.entity.engagement_heatmap_entity import EngagementHeatmapEntity
        return EngagementHeatmapEntity(self, data)


    def EngagementHotspot(self, data=None) -> "EngagementHotspotEntity":
        """Entity factory: client.EngagementHotspot().list() / client.EngagementHotspot().load({"id": ...})."""
        from mux_sdk.entity.engagement_hotspot_entity import EngagementHotspotEntity
        return EngagementHotspotEntity(self, data)


    def FindBestThumbnail(self, data=None) -> "FindBestThumbnailEntity":
        """Entity factory: client.FindBestThumbnail().list() / client.FindBestThumbnail().load({"id": ...})."""
        from mux_sdk.entity.find_best_thumbnail_entity import FindBestThumbnailEntity
        return FindBestThumbnailEntity(self, data)


    def FindKeyMoment(self, data=None) -> "FindKeyMomentEntity":
        """Entity factory: client.FindKeyMoment().list() / client.FindKeyMoment().load({"id": ...})."""
        from mux_sdk.entity.find_key_moment_entity import FindKeyMomentEntity
        return FindKeyMomentEntity(self, data)


    def FindScene(self, data=None) -> "FindSceneEntity":
        """Entity factory: client.FindScene().list() / client.FindScene().load({"id": ...})."""
        from mux_sdk.entity.find_scene_entity import FindSceneEntity
        return FindSceneEntity(self, data)


    def GenerateAssetShot(self, data=None) -> "GenerateAssetShotEntity":
        """Entity factory: client.GenerateAssetShot().list() / client.GenerateAssetShot().load({"id": ...})."""
        from mux_sdk.entity.generate_asset_shot_entity import GenerateAssetShotEntity
        return GenerateAssetShotEntity(self, data)


    def GenerateChapter(self, data=None) -> "GenerateChapterEntity":
        """Entity factory: client.GenerateChapter().list() / client.GenerateChapter().load({"id": ...})."""
        from mux_sdk.entity.generate_chapter_entity import GenerateChapterEntity
        return GenerateChapterEntity(self, data)


    def GenerateEngagementInsight(self, data=None) -> "GenerateEngagementInsightEntity":
        """Entity factory: client.GenerateEngagementInsight().list() / client.GenerateEngagementInsight().load({"id": ...})."""
        from mux_sdk.entity.generate_engagement_insight_entity import GenerateEngagementInsightEntity
        return GenerateEngagementInsightEntity(self, data)


    def GeneratePremiumCaption(self, data=None) -> "GeneratePremiumCaptionEntity":
        """Entity factory: client.GeneratePremiumCaption().list() / client.GeneratePremiumCaption().load({"id": ...})."""
        from mux_sdk.entity.generate_premium_caption_entity import GeneratePremiumCaptionEntity
        return GeneratePremiumCaptionEntity(self, data)


    def GenerateTrackSubtitle(self, data=None) -> "GenerateTrackSubtitleEntity":
        """Entity factory: client.GenerateTrackSubtitle().list() / client.GenerateTrackSubtitle().load({"id": ...})."""
        from mux_sdk.entity.generate_track_subtitle_entity import GenerateTrackSubtitleEntity
        return GenerateTrackSubtitleEntity(self, data)


    def Incident(self, data=None) -> "IncidentEntity":
        """Entity factory: client.Incident().list() / client.Incident().load({"id": ...})."""
        from mux_sdk.entity.incident_entity import IncidentEntity
        return IncidentEntity(self, data)


    def InputInfo(self, data=None) -> "InputInfoEntity":
        """Entity factory: client.InputInfo().list() / client.InputInfo().load({"id": ...})."""
        from mux_sdk.entity.input_info_entity import InputInfoEntity
        return InputInfoEntity(self, data)


    def JobSummary(self, data=None) -> "JobSummaryEntity":
        """Entity factory: client.JobSummary().list() / client.JobSummary().load({"id": ...})."""
        from mux_sdk.entity.job_summary_entity import JobSummaryEntity
        return JobSummaryEntity(self, data)


    def ListAllMetricValue(self, data=None) -> "ListAllMetricValueEntity":
        """Entity factory: client.ListAllMetricValue().list() / client.ListAllMetricValue().load({"id": ...})."""
        from mux_sdk.entity.list_all_metric_value_entity import ListAllMetricValueEntity
        return ListAllMetricValueEntity(self, data)


    def ListBreakdownValue(self, data=None) -> "ListBreakdownValueEntity":
        """Entity factory: client.ListBreakdownValue().list() / client.ListBreakdownValue().load({"id": ...})."""
        from mux_sdk.entity.list_breakdown_value_entity import ListBreakdownValueEntity
        return ListBreakdownValueEntity(self, data)


    def ListDeliveryUsage(self, data=None) -> "ListDeliveryUsageEntity":
        """Entity factory: client.ListDeliveryUsage().list() / client.ListDeliveryUsage().load({"id": ...})."""
        from mux_sdk.entity.list_delivery_usage_entity import ListDeliveryUsageEntity
        return ListDeliveryUsageEntity(self, data)


    def ListDimensionValue(self, data=None) -> "ListDimensionValueEntity":
        """Entity factory: client.ListDimensionValue().list() / client.ListDimensionValue().load({"id": ...})."""
        from mux_sdk.entity.list_dimension_value_entity import ListDimensionValueEntity
        return ListDimensionValueEntity(self, data)


    def ListError(self, data=None) -> "ListErrorEntity":
        """Entity factory: client.ListError().list() / client.ListError().load({"id": ...})."""
        from mux_sdk.entity.list_error_entity import ListErrorEntity
        return ListErrorEntity(self, data)


    def ListExport(self, data=None) -> "ListExportEntity":
        """Entity factory: client.ListExport().list() / client.ListExport().load({"id": ...})."""
        from mux_sdk.entity.list_export_entity import ListExportEntity
        return ListExportEntity(self, data)


    def ListFilterValue(self, data=None) -> "ListFilterValueEntity":
        """Entity factory: client.ListFilterValue().list() / client.ListFilterValue().load({"id": ...})."""
        from mux_sdk.entity.list_filter_value_entity import ListFilterValueEntity
        return ListFilterValueEntity(self, data)


    def ListInsight(self, data=None) -> "ListInsightEntity":
        """Entity factory: client.ListInsight().list() / client.ListInsight().load({"id": ...})."""
        from mux_sdk.entity.list_insight_entity import ListInsightEntity
        return ListInsightEntity(self, data)


    def ListMonitoringDimension(self, data=None) -> "ListMonitoringDimensionEntity":
        """Entity factory: client.ListMonitoringDimension().list() / client.ListMonitoringDimension().load({"id": ...})."""
        from mux_sdk.entity.list_monitoring_dimension_entity import ListMonitoringDimensionEntity
        return ListMonitoringDimensionEntity(self, data)


    def ListMonitoringMetric(self, data=None) -> "ListMonitoringMetricEntity":
        """Entity factory: client.ListMonitoringMetric().list() / client.ListMonitoringMetric().load({"id": ...})."""
        from mux_sdk.entity.list_monitoring_metric_entity import ListMonitoringMetricEntity
        return ListMonitoringMetricEntity(self, data)


    def ListRealTimeDimension(self, data=None) -> "ListRealTimeDimensionEntity":
        """Entity factory: client.ListRealTimeDimension().list() / client.ListRealTimeDimension().load({"id": ...})."""
        from mux_sdk.entity.list_real_time_dimension_entity import ListRealTimeDimensionEntity
        return ListRealTimeDimensionEntity(self, data)


    def ListRealTimeMetric(self, data=None) -> "ListRealTimeMetricEntity":
        """Entity factory: client.ListRealTimeMetric().list() / client.ListRealTimeMetric().load({"id": ...})."""
        from mux_sdk.entity.list_real_time_metric_entity import ListRealTimeMetricEntity
        return ListRealTimeMetricEntity(self, data)


    def ListRelatedIncident(self, data=None) -> "ListRelatedIncidentEntity":
        """Entity factory: client.ListRelatedIncident().list() / client.ListRelatedIncident().load({"id": ...})."""
        from mux_sdk.entity.list_related_incident_entity import ListRelatedIncidentEntity
        return ListRelatedIncidentEntity(self, data)


    def ListSubviewBreakdownValue(self, data=None) -> "ListSubviewBreakdownValueEntity":
        """Entity factory: client.ListSubviewBreakdownValue().list() / client.ListSubviewBreakdownValue().load({"id": ...})."""
        from mux_sdk.entity.list_subview_breakdown_value_entity import ListSubviewBreakdownValueEntity
        return ListSubviewBreakdownValueEntity(self, data)


    def ListSubviewComparisonValue(self, data=None) -> "ListSubviewComparisonValueEntity":
        """Entity factory: client.ListSubviewComparisonValue().list() / client.ListSubviewComparisonValue().load({"id": ...})."""
        from mux_sdk.entity.list_subview_comparison_value_entity import ListSubviewComparisonValueEntity
        return ListSubviewComparisonValueEntity(self, data)


    def ListSubviewDimension(self, data=None) -> "ListSubviewDimensionEntity":
        """Entity factory: client.ListSubviewDimension().list() / client.ListSubviewDimension().load({"id": ...})."""
        from mux_sdk.entity.list_subview_dimension_entity import ListSubviewDimensionEntity
        return ListSubviewDimensionEntity(self, data)


    def ListSubviewDimensionValue(self, data=None) -> "ListSubviewDimensionValueEntity":
        """Entity factory: client.ListSubviewDimensionValue().list() / client.ListSubviewDimensionValue().load({"id": ...})."""
        from mux_sdk.entity.list_subview_dimension_value_entity import ListSubviewDimensionValueEntity
        return ListSubviewDimensionValueEntity(self, data)


    def ListVideoViewExport(self, data=None) -> "ListVideoViewExportEntity":
        """Entity factory: client.ListVideoViewExport().list() / client.ListVideoViewExport().load({"id": ...})."""
        from mux_sdk.entity.list_video_view_export_entity import ListVideoViewExportEntity
        return ListVideoViewExportEntity(self, data)


    def LiveStream(self, data=None) -> "LiveStreamEntity":
        """Entity factory: client.LiveStream().list() / client.LiveStream().load({"id": ...})."""
        from mux_sdk.entity.live_stream_entity import LiveStreamEntity
        return LiveStreamEntity(self, data)


    def LiveStreamPlaybackId(self, data=None) -> "LiveStreamPlaybackIdEntity":
        """Entity factory: client.LiveStreamPlaybackId().list() / client.LiveStreamPlaybackId().load({"id": ...})."""
        from mux_sdk.entity.live_stream_playback_id_entity import LiveStreamPlaybackIdEntity
        return LiveStreamPlaybackIdEntity(self, data)


    def MetricTimeseriesData(self, data=None) -> "MetricTimeseriesDataEntity":
        """Entity factory: client.MetricTimeseriesData().list() / client.MetricTimeseriesData().load({"id": ...})."""
        from mux_sdk.entity.metric_timeseries_data_entity import MetricTimeseriesDataEntity
        return MetricTimeseriesDataEntity(self, data)


    def Moderate(self, data=None) -> "ModerateEntity":
        """Entity factory: client.Moderate().list() / client.Moderate().load({"id": ...})."""
        from mux_sdk.entity.moderate_entity import ModerateEntity
        return ModerateEntity(self, data)


    def MonitoringBreakdown(self, data=None) -> "MonitoringBreakdownEntity":
        """Entity factory: client.MonitoringBreakdown().list() / client.MonitoringBreakdown().load({"id": ...})."""
        from mux_sdk.entity.monitoring_breakdown_entity import MonitoringBreakdownEntity
        return MonitoringBreakdownEntity(self, data)


    def MonitoringBreakdownTimeseries(self, data=None) -> "MonitoringBreakdownTimeseriesEntity":
        """Entity factory: client.MonitoringBreakdownTimeseries().list() / client.MonitoringBreakdownTimeseries().load({"id": ...})."""
        from mux_sdk.entity.monitoring_breakdown_timeseries_entity import MonitoringBreakdownTimeseriesEntity
        return MonitoringBreakdownTimeseriesEntity(self, data)


    def MonitoringHistogramTimeseries(self, data=None) -> "MonitoringHistogramTimeseriesEntity":
        """Entity factory: client.MonitoringHistogramTimeseries().list() / client.MonitoringHistogramTimeseries().load({"id": ...})."""
        from mux_sdk.entity.monitoring_histogram_timeseries_entity import MonitoringHistogramTimeseriesEntity
        return MonitoringHistogramTimeseriesEntity(self, data)


    def MonitoringTimeseries(self, data=None) -> "MonitoringTimeseriesEntity":
        """Entity factory: client.MonitoringTimeseries().list() / client.MonitoringTimeseries().load({"id": ...})."""
        from mux_sdk.entity.monitoring_timeseries_entity import MonitoringTimeseriesEntity
        return MonitoringTimeseriesEntity(self, data)


    def Overall(self, data=None) -> "OverallEntity":
        """Entity factory: client.Overall().list() / client.Overall().load({"id": ...})."""
        from mux_sdk.entity.overall_entity import OverallEntity
        return OverallEntity(self, data)


    def PlaybackRestriction(self, data=None) -> "PlaybackRestrictionEntity":
        """Entity factory: client.PlaybackRestriction().list() / client.PlaybackRestriction().load({"id": ...})."""
        from mux_sdk.entity.playback_restriction_entity import PlaybackRestrictionEntity
        return PlaybackRestrictionEntity(self, data)


    def RealTimeBreakdown(self, data=None) -> "RealTimeBreakdownEntity":
        """Entity factory: client.RealTimeBreakdown().list() / client.RealTimeBreakdown().load({"id": ...})."""
        from mux_sdk.entity.real_time_breakdown_entity import RealTimeBreakdownEntity
        return RealTimeBreakdownEntity(self, data)


    def RealTimeHistogramTimeseries(self, data=None) -> "RealTimeHistogramTimeseriesEntity":
        """Entity factory: client.RealTimeHistogramTimeseries().list() / client.RealTimeHistogramTimeseries().load({"id": ...})."""
        from mux_sdk.entity.real_time_histogram_timeseries_entity import RealTimeHistogramTimeseriesEntity
        return RealTimeHistogramTimeseriesEntity(self, data)


    def RealTimeTimeseries(self, data=None) -> "RealTimeTimeseriesEntity":
        """Entity factory: client.RealTimeTimeseries().list() / client.RealTimeTimeseries().load({"id": ...})."""
        from mux_sdk.entity.real_time_timeseries_entity import RealTimeTimeseriesEntity
        return RealTimeTimeseriesEntity(self, data)


    def SignalLiveStreamComplete(self, data=None) -> "SignalLiveStreamCompleteEntity":
        """Entity factory: client.SignalLiveStreamComplete().list() / client.SignalLiveStreamComplete().load({"id": ...})."""
        from mux_sdk.entity.signal_live_stream_complete_entity import SignalLiveStreamCompleteEntity
        return SignalLiveStreamCompleteEntity(self, data)


    def SigningKey(self, data=None) -> "SigningKeyEntity":
        """Entity factory: client.SigningKey().list() / client.SigningKey().load({"id": ...})."""
        from mux_sdk.entity.signing_key_entity import SigningKeyEntity
        return SigningKeyEntity(self, data)


    def SimulcastTarget(self, data=None) -> "SimulcastTargetEntity":
        """Entity factory: client.SimulcastTarget().list() / client.SimulcastTarget().load({"id": ...})."""
        from mux_sdk.entity.simulcast_target_entity import SimulcastTargetEntity
        return SimulcastTargetEntity(self, data)


    def StaticRendition(self, data=None) -> "StaticRenditionEntity":
        """Entity factory: client.StaticRendition().list() / client.StaticRendition().load({"id": ...})."""
        from mux_sdk.entity.static_rendition_entity import StaticRenditionEntity
        return StaticRenditionEntity(self, data)


    def SubviewBreakdownTimeseries(self, data=None) -> "SubviewBreakdownTimeseriesEntity":
        """Entity factory: client.SubviewBreakdownTimeseries().list() / client.SubviewBreakdownTimeseries().load({"id": ...})."""
        from mux_sdk.entity.subview_breakdown_timeseries_entity import SubviewBreakdownTimeseriesEntity
        return SubviewBreakdownTimeseriesEntity(self, data)


    def SubviewOverallValue(self, data=None) -> "SubviewOverallValueEntity":
        """Entity factory: client.SubviewOverallValue().list() / client.SubviewOverallValue().load({"id": ...})."""
        from mux_sdk.entity.subview_overall_value_entity import SubviewOverallValueEntity
        return SubviewOverallValueEntity(self, data)


    def Summarize(self, data=None) -> "SummarizeEntity":
        """Entity factory: client.Summarize().list() / client.Summarize().load({"id": ...})."""
        from mux_sdk.entity.summarize_entity import SummarizeEntity
        return SummarizeEntity(self, data)


    def TranscriptionVocabulary(self, data=None) -> "TranscriptionVocabularyEntity":
        """Entity factory: client.TranscriptionVocabulary().list() / client.TranscriptionVocabulary().load({"id": ...})."""
        from mux_sdk.entity.transcription_vocabulary_entity import TranscriptionVocabularyEntity
        return TranscriptionVocabularyEntity(self, data)


    def TranslateAudio(self, data=None) -> "TranslateAudioEntity":
        """Entity factory: client.TranslateAudio().list() / client.TranslateAudio().load({"id": ...})."""
        from mux_sdk.entity.translate_audio_entity import TranslateAudioEntity
        return TranslateAudioEntity(self, data)


    def TranslateCaption(self, data=None) -> "TranslateCaptionEntity":
        """Entity factory: client.TranslateCaption().list() / client.TranslateCaption().load({"id": ...})."""
        from mux_sdk.entity.translate_caption_entity import TranslateCaptionEntity
        return TranslateCaptionEntity(self, data)


    def UpdateAssetTrack(self, data=None) -> "UpdateAssetTrackEntity":
        """Entity factory: client.UpdateAssetTrack().list() / client.UpdateAssetTrack().load({"id": ...})."""
        from mux_sdk.entity.update_asset_track_entity import UpdateAssetTrackEntity
        return UpdateAssetTrackEntity(self, data)


    def Upload(self, data=None) -> "UploadEntity":
        """Entity factory: client.Upload().list() / client.Upload().load({"id": ...})."""
        from mux_sdk.entity.upload_entity import UploadEntity
        return UploadEntity(self, data)


    def UrlSigningKey(self, data=None) -> "UrlSigningKeyEntity":
        """Entity factory: client.UrlSigningKey().list() / client.UrlSigningKey().load({"id": ...})."""
        from mux_sdk.entity.url_signing_key_entity import UrlSigningKeyEntity
        return UrlSigningKeyEntity(self, data)


    def UsageExport(self, data=None) -> "UsageExportEntity":
        """Entity factory: client.UsageExport().list() / client.UsageExport().load({"id": ...})."""
        from mux_sdk.entity.usage_export_entity import UsageExportEntity
        return UsageExportEntity(self, data)


    def VideoView(self, data=None) -> "VideoViewEntity":
        """Entity factory: client.VideoView().list() / client.VideoView().load({"id": ...})."""
        from mux_sdk.entity.video_view_entity import VideoViewEntity
        return VideoViewEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from mux_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)


    def WhoAmI(self, data=None) -> "WhoAmIEntity":
        """Entity factory: client.WhoAmI().list() / client.WhoAmI().load({"id": ...})."""
        from mux_sdk.entity.who_am_i_entity import WhoAmIEntity
        return WhoAmIEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "MuxSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from mux_sdk.entity.annotation_entity import AnnotationEntity
    from mux_sdk.entity.ask_question_entity import AskQuestionEntity
    from mux_sdk.entity.asset_entity import AssetEntity
    from mux_sdk.entity.asset_or_live_stream_id_entity import AssetOrLiveStreamIdEntity
    from mux_sdk.entity.asset_playback_id_entity import AssetPlaybackIdEntity
    from mux_sdk.entity.asset_shot_entity import AssetShotEntity
    from mux_sdk.entity.create_playback_id_entity import CreatePlaybackIdEntity
    from mux_sdk.entity.create_track_entity import CreateTrackEntity
    from mux_sdk.entity.directive_entity import DirectiveEntity
    from mux_sdk.entity.directive_run_detail_entity import DirectiveRunDetailEntity
    from mux_sdk.entity.drm_configuration_entity import DrmConfigurationEntity
    from mux_sdk.entity.edit_caption_entity import EditCaptionEntity
    from mux_sdk.entity.engagement_heatmap_entity import EngagementHeatmapEntity
    from mux_sdk.entity.engagement_hotspot_entity import EngagementHotspotEntity
    from mux_sdk.entity.find_best_thumbnail_entity import FindBestThumbnailEntity
    from mux_sdk.entity.find_key_moment_entity import FindKeyMomentEntity
    from mux_sdk.entity.find_scene_entity import FindSceneEntity
    from mux_sdk.entity.generate_asset_shot_entity import GenerateAssetShotEntity
    from mux_sdk.entity.generate_chapter_entity import GenerateChapterEntity
    from mux_sdk.entity.generate_engagement_insight_entity import GenerateEngagementInsightEntity
    from mux_sdk.entity.generate_premium_caption_entity import GeneratePremiumCaptionEntity
    from mux_sdk.entity.generate_track_subtitle_entity import GenerateTrackSubtitleEntity
    from mux_sdk.entity.incident_entity import IncidentEntity
    from mux_sdk.entity.input_info_entity import InputInfoEntity
    from mux_sdk.entity.job_summary_entity import JobSummaryEntity
    from mux_sdk.entity.list_all_metric_value_entity import ListAllMetricValueEntity
    from mux_sdk.entity.list_breakdown_value_entity import ListBreakdownValueEntity
    from mux_sdk.entity.list_delivery_usage_entity import ListDeliveryUsageEntity
    from mux_sdk.entity.list_dimension_value_entity import ListDimensionValueEntity
    from mux_sdk.entity.list_error_entity import ListErrorEntity
    from mux_sdk.entity.list_export_entity import ListExportEntity
    from mux_sdk.entity.list_filter_value_entity import ListFilterValueEntity
    from mux_sdk.entity.list_insight_entity import ListInsightEntity
    from mux_sdk.entity.list_monitoring_dimension_entity import ListMonitoringDimensionEntity
    from mux_sdk.entity.list_monitoring_metric_entity import ListMonitoringMetricEntity
    from mux_sdk.entity.list_real_time_dimension_entity import ListRealTimeDimensionEntity
    from mux_sdk.entity.list_real_time_metric_entity import ListRealTimeMetricEntity
    from mux_sdk.entity.list_related_incident_entity import ListRelatedIncidentEntity
    from mux_sdk.entity.list_subview_breakdown_value_entity import ListSubviewBreakdownValueEntity
    from mux_sdk.entity.list_subview_comparison_value_entity import ListSubviewComparisonValueEntity
    from mux_sdk.entity.list_subview_dimension_entity import ListSubviewDimensionEntity
    from mux_sdk.entity.list_subview_dimension_value_entity import ListSubviewDimensionValueEntity
    from mux_sdk.entity.list_video_view_export_entity import ListVideoViewExportEntity
    from mux_sdk.entity.live_stream_entity import LiveStreamEntity
    from mux_sdk.entity.live_stream_playback_id_entity import LiveStreamPlaybackIdEntity
    from mux_sdk.entity.metric_timeseries_data_entity import MetricTimeseriesDataEntity
    from mux_sdk.entity.moderate_entity import ModerateEntity
    from mux_sdk.entity.monitoring_breakdown_entity import MonitoringBreakdownEntity
    from mux_sdk.entity.monitoring_breakdown_timeseries_entity import MonitoringBreakdownTimeseriesEntity
    from mux_sdk.entity.monitoring_histogram_timeseries_entity import MonitoringHistogramTimeseriesEntity
    from mux_sdk.entity.monitoring_timeseries_entity import MonitoringTimeseriesEntity
    from mux_sdk.entity.overall_entity import OverallEntity
    from mux_sdk.entity.playback_restriction_entity import PlaybackRestrictionEntity
    from mux_sdk.entity.real_time_breakdown_entity import RealTimeBreakdownEntity
    from mux_sdk.entity.real_time_histogram_timeseries_entity import RealTimeHistogramTimeseriesEntity
    from mux_sdk.entity.real_time_timeseries_entity import RealTimeTimeseriesEntity
    from mux_sdk.entity.signal_live_stream_complete_entity import SignalLiveStreamCompleteEntity
    from mux_sdk.entity.signing_key_entity import SigningKeyEntity
    from mux_sdk.entity.simulcast_target_entity import SimulcastTargetEntity
    from mux_sdk.entity.static_rendition_entity import StaticRenditionEntity
    from mux_sdk.entity.subview_breakdown_timeseries_entity import SubviewBreakdownTimeseriesEntity
    from mux_sdk.entity.subview_overall_value_entity import SubviewOverallValueEntity
    from mux_sdk.entity.summarize_entity import SummarizeEntity
    from mux_sdk.entity.transcription_vocabulary_entity import TranscriptionVocabularyEntity
    from mux_sdk.entity.translate_audio_entity import TranslateAudioEntity
    from mux_sdk.entity.translate_caption_entity import TranslateCaptionEntity
    from mux_sdk.entity.update_asset_track_entity import UpdateAssetTrackEntity
    from mux_sdk.entity.upload_entity import UploadEntity
    from mux_sdk.entity.url_signing_key_entity import UrlSigningKeyEntity
    from mux_sdk.entity.usage_export_entity import UsageExportEntity
    from mux_sdk.entity.video_view_entity import VideoViewEntity
    from mux_sdk.entity.webhook_entity import WebhookEntity
    from mux_sdk.entity.who_am_i_entity import WhoAmIEntity
