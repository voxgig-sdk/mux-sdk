# Mux SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'Mux_types'


class MuxSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = MuxUtility.new
    @_utility = utility

    config = MuxConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = MuxHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = MuxHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, MuxFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    MuxUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = MuxHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = MuxHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = MuxHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = MuxSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => MuxError.new(
        "#{op}_allow",
        "MuxSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue MuxError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = MuxHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = MuxHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = MuxError.new(
        "graphql_error", "MuxSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.Annotation.list / client.Annotation.load({ "id" => ... })
  def Annotation(data = nil)
    require_relative 'entity/annotation_entity'
    AnnotationEntity.new(self, data)
  end


  # Canonical facade: client.AskQuestion.list / client.AskQuestion.load({ "id" => ... })
  def AskQuestion(data = nil)
    require_relative 'entity/ask_question_entity'
    AskQuestionEntity.new(self, data)
  end


  # Canonical facade: client.Asset.list / client.Asset.load({ "id" => ... })
  def Asset(data = nil)
    require_relative 'entity/asset_entity'
    AssetEntity.new(self, data)
  end


  # Canonical facade: client.AssetOrLiveStreamId.list / client.AssetOrLiveStreamId.load({ "id" => ... })
  def AssetOrLiveStreamId(data = nil)
    require_relative 'entity/asset_or_live_stream_id_entity'
    AssetOrLiveStreamIdEntity.new(self, data)
  end


  # Canonical facade: client.AssetPlaybackId.list / client.AssetPlaybackId.load({ "id" => ... })
  def AssetPlaybackId(data = nil)
    require_relative 'entity/asset_playback_id_entity'
    AssetPlaybackIdEntity.new(self, data)
  end


  # Canonical facade: client.AssetShot.list / client.AssetShot.load({ "id" => ... })
  def AssetShot(data = nil)
    require_relative 'entity/asset_shot_entity'
    AssetShotEntity.new(self, data)
  end


  # Canonical facade: client.CreatePlaybackId.list / client.CreatePlaybackId.load({ "id" => ... })
  def CreatePlaybackId(data = nil)
    require_relative 'entity/create_playback_id_entity'
    CreatePlaybackIdEntity.new(self, data)
  end


  # Canonical facade: client.CreateTrack.list / client.CreateTrack.load({ "id" => ... })
  def CreateTrack(data = nil)
    require_relative 'entity/create_track_entity'
    CreateTrackEntity.new(self, data)
  end


  # Canonical facade: client.Directive.list / client.Directive.load({ "id" => ... })
  def Directive(data = nil)
    require_relative 'entity/directive_entity'
    DirectiveEntity.new(self, data)
  end


  # Canonical facade: client.DirectiveRunDetail.list / client.DirectiveRunDetail.load({ "id" => ... })
  def DirectiveRunDetail(data = nil)
    require_relative 'entity/directive_run_detail_entity'
    DirectiveRunDetailEntity.new(self, data)
  end


  # Canonical facade: client.DirectiveRunList.list / client.DirectiveRunList.load({ "id" => ... })
  def DirectiveRunList(data = nil)
    require_relative 'entity/directive_run_list_entity'
    DirectiveRunListEntity.new(self, data)
  end


  # Canonical facade: client.DrmConfiguration.list / client.DrmConfiguration.load({ "id" => ... })
  def DrmConfiguration(data = nil)
    require_relative 'entity/drm_configuration_entity'
    DrmConfigurationEntity.new(self, data)
  end


  # Canonical facade: client.EditCaption.list / client.EditCaption.load({ "id" => ... })
  def EditCaption(data = nil)
    require_relative 'entity/edit_caption_entity'
    EditCaptionEntity.new(self, data)
  end


  # Canonical facade: client.EngagementHeatmap.list / client.EngagementHeatmap.load({ "id" => ... })
  def EngagementHeatmap(data = nil)
    require_relative 'entity/engagement_heatmap_entity'
    EngagementHeatmapEntity.new(self, data)
  end


  # Canonical facade: client.EngagementHotspot.list / client.EngagementHotspot.load({ "id" => ... })
  def EngagementHotspot(data = nil)
    require_relative 'entity/engagement_hotspot_entity'
    EngagementHotspotEntity.new(self, data)
  end


  # Canonical facade: client.FindBestThumbnail.list / client.FindBestThumbnail.load({ "id" => ... })
  def FindBestThumbnail(data = nil)
    require_relative 'entity/find_best_thumbnail_entity'
    FindBestThumbnailEntity.new(self, data)
  end


  # Canonical facade: client.FindKeyMoment.list / client.FindKeyMoment.load({ "id" => ... })
  def FindKeyMoment(data = nil)
    require_relative 'entity/find_key_moment_entity'
    FindKeyMomentEntity.new(self, data)
  end


  # Canonical facade: client.FindScene.list / client.FindScene.load({ "id" => ... })
  def FindScene(data = nil)
    require_relative 'entity/find_scene_entity'
    FindSceneEntity.new(self, data)
  end


  # Canonical facade: client.GenerateAssetShot.list / client.GenerateAssetShot.load({ "id" => ... })
  def GenerateAssetShot(data = nil)
    require_relative 'entity/generate_asset_shot_entity'
    GenerateAssetShotEntity.new(self, data)
  end


  # Canonical facade: client.GenerateChapter.list / client.GenerateChapter.load({ "id" => ... })
  def GenerateChapter(data = nil)
    require_relative 'entity/generate_chapter_entity'
    GenerateChapterEntity.new(self, data)
  end


  # Canonical facade: client.GenerateEngagementInsight.list / client.GenerateEngagementInsight.load({ "id" => ... })
  def GenerateEngagementInsight(data = nil)
    require_relative 'entity/generate_engagement_insight_entity'
    GenerateEngagementInsightEntity.new(self, data)
  end


  # Canonical facade: client.GeneratePremiumCaption.list / client.GeneratePremiumCaption.load({ "id" => ... })
  def GeneratePremiumCaption(data = nil)
    require_relative 'entity/generate_premium_caption_entity'
    GeneratePremiumCaptionEntity.new(self, data)
  end


  # Canonical facade: client.GenerateTrackSubtitle.list / client.GenerateTrackSubtitle.load({ "id" => ... })
  def GenerateTrackSubtitle(data = nil)
    require_relative 'entity/generate_track_subtitle_entity'
    GenerateTrackSubtitleEntity.new(self, data)
  end


  # Canonical facade: client.Incident.list / client.Incident.load({ "id" => ... })
  def Incident(data = nil)
    require_relative 'entity/incident_entity'
    IncidentEntity.new(self, data)
  end


  # Canonical facade: client.InputInfo.list / client.InputInfo.load({ "id" => ... })
  def InputInfo(data = nil)
    require_relative 'entity/input_info_entity'
    InputInfoEntity.new(self, data)
  end


  # Canonical facade: client.JobSummary.list / client.JobSummary.load({ "id" => ... })
  def JobSummary(data = nil)
    require_relative 'entity/job_summary_entity'
    JobSummaryEntity.new(self, data)
  end


  # Canonical facade: client.ListAllMetricValue.list / client.ListAllMetricValue.load({ "id" => ... })
  def ListAllMetricValue(data = nil)
    require_relative 'entity/list_all_metric_value_entity'
    ListAllMetricValueEntity.new(self, data)
  end


  # Canonical facade: client.ListAnnotation.list / client.ListAnnotation.load({ "id" => ... })
  def ListAnnotation(data = nil)
    require_relative 'entity/list_annotation_entity'
    ListAnnotationEntity.new(self, data)
  end


  # Canonical facade: client.ListAsset.list / client.ListAsset.load({ "id" => ... })
  def ListAsset(data = nil)
    require_relative 'entity/list_asset_entity'
    ListAssetEntity.new(self, data)
  end


  # Canonical facade: client.ListBreakdownValue.list / client.ListBreakdownValue.load({ "id" => ... })
  def ListBreakdownValue(data = nil)
    require_relative 'entity/list_breakdown_value_entity'
    ListBreakdownValueEntity.new(self, data)
  end


  # Canonical facade: client.ListDeliveryUsage.list / client.ListDeliveryUsage.load({ "id" => ... })
  def ListDeliveryUsage(data = nil)
    require_relative 'entity/list_delivery_usage_entity'
    ListDeliveryUsageEntity.new(self, data)
  end


  # Canonical facade: client.ListDimension.list / client.ListDimension.load({ "id" => ... })
  def ListDimension(data = nil)
    require_relative 'entity/list_dimension_entity'
    ListDimensionEntity.new(self, data)
  end


  # Canonical facade: client.ListDimensionValue.list / client.ListDimensionValue.load({ "id" => ... })
  def ListDimensionValue(data = nil)
    require_relative 'entity/list_dimension_value_entity'
    ListDimensionValueEntity.new(self, data)
  end


  # Canonical facade: client.ListDrmConfiguration.list / client.ListDrmConfiguration.load({ "id" => ... })
  def ListDrmConfiguration(data = nil)
    require_relative 'entity/list_drm_configuration_entity'
    ListDrmConfigurationEntity.new(self, data)
  end


  # Canonical facade: client.ListError.list / client.ListError.load({ "id" => ... })
  def ListError(data = nil)
    require_relative 'entity/list_error_entity'
    ListErrorEntity.new(self, data)
  end


  # Canonical facade: client.ListExport.list / client.ListExport.load({ "id" => ... })
  def ListExport(data = nil)
    require_relative 'entity/list_export_entity'
    ListExportEntity.new(self, data)
  end


  # Canonical facade: client.ListFilter.list / client.ListFilter.load({ "id" => ... })
  def ListFilter(data = nil)
    require_relative 'entity/list_filter_entity'
    ListFilterEntity.new(self, data)
  end


  # Canonical facade: client.ListFilterValue.list / client.ListFilterValue.load({ "id" => ... })
  def ListFilterValue(data = nil)
    require_relative 'entity/list_filter_value_entity'
    ListFilterValueEntity.new(self, data)
  end


  # Canonical facade: client.ListIncident.list / client.ListIncident.load({ "id" => ... })
  def ListIncident(data = nil)
    require_relative 'entity/list_incident_entity'
    ListIncidentEntity.new(self, data)
  end


  # Canonical facade: client.ListInsight.list / client.ListInsight.load({ "id" => ... })
  def ListInsight(data = nil)
    require_relative 'entity/list_insight_entity'
    ListInsightEntity.new(self, data)
  end


  # Canonical facade: client.ListJob.list / client.ListJob.load({ "id" => ... })
  def ListJob(data = nil)
    require_relative 'entity/list_job_entity'
    ListJobEntity.new(self, data)
  end


  # Canonical facade: client.ListLiveStream.list / client.ListLiveStream.load({ "id" => ... })
  def ListLiveStream(data = nil)
    require_relative 'entity/list_live_stream_entity'
    ListLiveStreamEntity.new(self, data)
  end


  # Canonical facade: client.ListMonitoringDimension.list / client.ListMonitoringDimension.load({ "id" => ... })
  def ListMonitoringDimension(data = nil)
    require_relative 'entity/list_monitoring_dimension_entity'
    ListMonitoringDimensionEntity.new(self, data)
  end


  # Canonical facade: client.ListMonitoringMetric.list / client.ListMonitoringMetric.load({ "id" => ... })
  def ListMonitoringMetric(data = nil)
    require_relative 'entity/list_monitoring_metric_entity'
    ListMonitoringMetricEntity.new(self, data)
  end


  # Canonical facade: client.ListPlaybackRestriction.list / client.ListPlaybackRestriction.load({ "id" => ... })
  def ListPlaybackRestriction(data = nil)
    require_relative 'entity/list_playback_restriction_entity'
    ListPlaybackRestrictionEntity.new(self, data)
  end


  # Canonical facade: client.ListRealTimeDimension.list / client.ListRealTimeDimension.load({ "id" => ... })
  def ListRealTimeDimension(data = nil)
    require_relative 'entity/list_real_time_dimension_entity'
    ListRealTimeDimensionEntity.new(self, data)
  end


  # Canonical facade: client.ListRealTimeMetric.list / client.ListRealTimeMetric.load({ "id" => ... })
  def ListRealTimeMetric(data = nil)
    require_relative 'entity/list_real_time_metric_entity'
    ListRealTimeMetricEntity.new(self, data)
  end


  # Canonical facade: client.ListRelatedIncident.list / client.ListRelatedIncident.load({ "id" => ... })
  def ListRelatedIncident(data = nil)
    require_relative 'entity/list_related_incident_entity'
    ListRelatedIncidentEntity.new(self, data)
  end


  # Canonical facade: client.ListSigningKey.list / client.ListSigningKey.load({ "id" => ... })
  def ListSigningKey(data = nil)
    require_relative 'entity/list_signing_key_entity'
    ListSigningKeyEntity.new(self, data)
  end


  # Canonical facade: client.ListSubviewBreakdownValue.list / client.ListSubviewBreakdownValue.load({ "id" => ... })
  def ListSubviewBreakdownValue(data = nil)
    require_relative 'entity/list_subview_breakdown_value_entity'
    ListSubviewBreakdownValueEntity.new(self, data)
  end


  # Canonical facade: client.ListSubviewComparisonValue.list / client.ListSubviewComparisonValue.load({ "id" => ... })
  def ListSubviewComparisonValue(data = nil)
    require_relative 'entity/list_subview_comparison_value_entity'
    ListSubviewComparisonValueEntity.new(self, data)
  end


  # Canonical facade: client.ListSubviewDimension.list / client.ListSubviewDimension.load({ "id" => ... })
  def ListSubviewDimension(data = nil)
    require_relative 'entity/list_subview_dimension_entity'
    ListSubviewDimensionEntity.new(self, data)
  end


  # Canonical facade: client.ListSubviewDimensionValue.list / client.ListSubviewDimensionValue.load({ "id" => ... })
  def ListSubviewDimensionValue(data = nil)
    require_relative 'entity/list_subview_dimension_value_entity'
    ListSubviewDimensionValueEntity.new(self, data)
  end


  # Canonical facade: client.ListTranscriptionVocabulary.list / client.ListTranscriptionVocabulary.load({ "id" => ... })
  def ListTranscriptionVocabulary(data = nil)
    require_relative 'entity/list_transcription_vocabulary_entity'
    ListTranscriptionVocabularyEntity.new(self, data)
  end


  # Canonical facade: client.ListUpload.list / client.ListUpload.load({ "id" => ... })
  def ListUpload(data = nil)
    require_relative 'entity/list_upload_entity'
    ListUploadEntity.new(self, data)
  end


  # Canonical facade: client.ListUsageExport.list / client.ListUsageExport.load({ "id" => ... })
  def ListUsageExport(data = nil)
    require_relative 'entity/list_usage_export_entity'
    ListUsageExportEntity.new(self, data)
  end


  # Canonical facade: client.ListVideoView.list / client.ListVideoView.load({ "id" => ... })
  def ListVideoView(data = nil)
    require_relative 'entity/list_video_view_entity'
    ListVideoViewEntity.new(self, data)
  end


  # Canonical facade: client.ListVideoViewExport.list / client.ListVideoViewExport.load({ "id" => ... })
  def ListVideoViewExport(data = nil)
    require_relative 'entity/list_video_view_export_entity'
    ListVideoViewExportEntity.new(self, data)
  end


  # Canonical facade: client.ListWebhook.list / client.ListWebhook.load({ "id" => ... })
  def ListWebhook(data = nil)
    require_relative 'entity/list_webhook_entity'
    ListWebhookEntity.new(self, data)
  end


  # Canonical facade: client.LiveStream.list / client.LiveStream.load({ "id" => ... })
  def LiveStream(data = nil)
    require_relative 'entity/live_stream_entity'
    LiveStreamEntity.new(self, data)
  end


  # Canonical facade: client.LiveStreamPlaybackId.list / client.LiveStreamPlaybackId.load({ "id" => ... })
  def LiveStreamPlaybackId(data = nil)
    require_relative 'entity/live_stream_playback_id_entity'
    LiveStreamPlaybackIdEntity.new(self, data)
  end


  # Canonical facade: client.MetricTimeseriesData.list / client.MetricTimeseriesData.load({ "id" => ... })
  def MetricTimeseriesData(data = nil)
    require_relative 'entity/metric_timeseries_data_entity'
    MetricTimeseriesDataEntity.new(self, data)
  end


  # Canonical facade: client.Moderate.list / client.Moderate.load({ "id" => ... })
  def Moderate(data = nil)
    require_relative 'entity/moderate_entity'
    ModerateEntity.new(self, data)
  end


  # Canonical facade: client.MonitoringBreakdown.list / client.MonitoringBreakdown.load({ "id" => ... })
  def MonitoringBreakdown(data = nil)
    require_relative 'entity/monitoring_breakdown_entity'
    MonitoringBreakdownEntity.new(self, data)
  end


  # Canonical facade: client.MonitoringBreakdownTimeseries.list / client.MonitoringBreakdownTimeseries.load({ "id" => ... })
  def MonitoringBreakdownTimeseries(data = nil)
    require_relative 'entity/monitoring_breakdown_timeseries_entity'
    MonitoringBreakdownTimeseriesEntity.new(self, data)
  end


  # Canonical facade: client.MonitoringHistogramTimeseries.list / client.MonitoringHistogramTimeseries.load({ "id" => ... })
  def MonitoringHistogramTimeseries(data = nil)
    require_relative 'entity/monitoring_histogram_timeseries_entity'
    MonitoringHistogramTimeseriesEntity.new(self, data)
  end


  # Canonical facade: client.MonitoringTimeseries.list / client.MonitoringTimeseries.load({ "id" => ... })
  def MonitoringTimeseries(data = nil)
    require_relative 'entity/monitoring_timeseries_entity'
    MonitoringTimeseriesEntity.new(self, data)
  end


  # Canonical facade: client.Overall.list / client.Overall.load({ "id" => ... })
  def Overall(data = nil)
    require_relative 'entity/overall_entity'
    OverallEntity.new(self, data)
  end


  # Canonical facade: client.PlaybackRestriction.list / client.PlaybackRestriction.load({ "id" => ... })
  def PlaybackRestriction(data = nil)
    require_relative 'entity/playback_restriction_entity'
    PlaybackRestrictionEntity.new(self, data)
  end


  # Canonical facade: client.RealTimeBreakdown.list / client.RealTimeBreakdown.load({ "id" => ... })
  def RealTimeBreakdown(data = nil)
    require_relative 'entity/real_time_breakdown_entity'
    RealTimeBreakdownEntity.new(self, data)
  end


  # Canonical facade: client.RealTimeHistogramTimeseries.list / client.RealTimeHistogramTimeseries.load({ "id" => ... })
  def RealTimeHistogramTimeseries(data = nil)
    require_relative 'entity/real_time_histogram_timeseries_entity'
    RealTimeHistogramTimeseriesEntity.new(self, data)
  end


  # Canonical facade: client.RealTimeTimeseries.list / client.RealTimeTimeseries.load({ "id" => ... })
  def RealTimeTimeseries(data = nil)
    require_relative 'entity/real_time_timeseries_entity'
    RealTimeTimeseriesEntity.new(self, data)
  end


  # Canonical facade: client.SignalLiveStreamComplete.list / client.SignalLiveStreamComplete.load({ "id" => ... })
  def SignalLiveStreamComplete(data = nil)
    require_relative 'entity/signal_live_stream_complete_entity'
    SignalLiveStreamCompleteEntity.new(self, data)
  end


  # Canonical facade: client.SigningKey.list / client.SigningKey.load({ "id" => ... })
  def SigningKey(data = nil)
    require_relative 'entity/signing_key_entity'
    SigningKeyEntity.new(self, data)
  end


  # Canonical facade: client.SimulcastTarget.list / client.SimulcastTarget.load({ "id" => ... })
  def SimulcastTarget(data = nil)
    require_relative 'entity/simulcast_target_entity'
    SimulcastTargetEntity.new(self, data)
  end


  # Canonical facade: client.StaticRendition.list / client.StaticRendition.load({ "id" => ... })
  def StaticRendition(data = nil)
    require_relative 'entity/static_rendition_entity'
    StaticRenditionEntity.new(self, data)
  end


  # Canonical facade: client.SubviewBreakdownTimeseries.list / client.SubviewBreakdownTimeseries.load({ "id" => ... })
  def SubviewBreakdownTimeseries(data = nil)
    require_relative 'entity/subview_breakdown_timeseries_entity'
    SubviewBreakdownTimeseriesEntity.new(self, data)
  end


  # Canonical facade: client.SubviewOverallValue.list / client.SubviewOverallValue.load({ "id" => ... })
  def SubviewOverallValue(data = nil)
    require_relative 'entity/subview_overall_value_entity'
    SubviewOverallValueEntity.new(self, data)
  end


  # Canonical facade: client.Summarize.list / client.Summarize.load({ "id" => ... })
  def Summarize(data = nil)
    require_relative 'entity/summarize_entity'
    SummarizeEntity.new(self, data)
  end


  # Canonical facade: client.TranscriptionVocabulary.list / client.TranscriptionVocabulary.load({ "id" => ... })
  def TranscriptionVocabulary(data = nil)
    require_relative 'entity/transcription_vocabulary_entity'
    TranscriptionVocabularyEntity.new(self, data)
  end


  # Canonical facade: client.TranslateAudio.list / client.TranslateAudio.load({ "id" => ... })
  def TranslateAudio(data = nil)
    require_relative 'entity/translate_audio_entity'
    TranslateAudioEntity.new(self, data)
  end


  # Canonical facade: client.TranslateCaption.list / client.TranslateCaption.load({ "id" => ... })
  def TranslateCaption(data = nil)
    require_relative 'entity/translate_caption_entity'
    TranslateCaptionEntity.new(self, data)
  end


  # Canonical facade: client.UpdateAssetTrack.list / client.UpdateAssetTrack.load({ "id" => ... })
  def UpdateAssetTrack(data = nil)
    require_relative 'entity/update_asset_track_entity'
    UpdateAssetTrackEntity.new(self, data)
  end


  # Canonical facade: client.Upload.list / client.Upload.load({ "id" => ... })
  def Upload(data = nil)
    require_relative 'entity/upload_entity'
    UploadEntity.new(self, data)
  end


  # Canonical facade: client.UrlSigningKey.list / client.UrlSigningKey.load({ "id" => ... })
  def UrlSigningKey(data = nil)
    require_relative 'entity/url_signing_key_entity'
    UrlSigningKeyEntity.new(self, data)
  end


  # Canonical facade: client.VideoView.list / client.VideoView.load({ "id" => ... })
  def VideoView(data = nil)
    require_relative 'entity/video_view_entity'
    VideoViewEntity.new(self, data)
  end


  # Canonical facade: client.Webhook.list / client.Webhook.load({ "id" => ... })
  def Webhook(data = nil)
    require_relative 'entity/webhook_entity'
    WebhookEntity.new(self, data)
  end


  # Canonical facade: client.WhoAmI.list / client.WhoAmI.load({ "id" => ... })
  def WhoAmI(data = nil)
    require_relative 'entity/who_am_i_entity'
    WhoAmIEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = MuxSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
