# Typed models for the Mux SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AnnotationRequired(TypedDict):
    date: str
    id: str
    note: str


class Annotation(AnnotationRequired, total=False):
    sub_property_id: str


class AnnotationLoadMatch(TypedDict):
    id: str


class AnnotationListMatch(TypedDict, total=False):
    limit: int
    order_direction: str
    page: int
    timeframe: list


class AnnotationCreateDataRequired(TypedDict):
    date: str
    id: str
    note: str


class AnnotationCreateData(AnnotationCreateDataRequired, total=False):
    sub_property_id: str


class AnnotationUpdateDataRequired(TypedDict):
    id: str


class AnnotationUpdateData(AnnotationUpdateDataRequired, total=False):
    date: str
    note: str
    sub_property_id: str


class AnnotationRemoveMatch(TypedDict):
    id: str


class AskQuestionRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class AskQuestion(AskQuestionRequired, total=False):
    errors: list
    passthrough: str


class AskQuestionLoadMatch(TypedDict):
    id: str


class AskQuestionCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class AskQuestionCreateData(AskQuestionCreateDataRequired, total=False):
    errors: list
    passthrough: str


class AssetRequired(TypedDict):
    created_at: str
    encoding_tier: str
    id: str
    master_access: str
    max_resolution_tier: str
    progress: dict
    shots: dict
    status: str


class Asset(AssetRequired, total=False):
    aspect_ratio: str
    data: dict
    directives: list
    duration: float
    errors: dict
    generate_shots: bool
    ingest_type: str
    is_live: bool
    live_stream_id: str
    master: dict
    max_stored_frame_rate: float
    max_stored_resolution: str
    meta: dict
    mp4_support: str
    non_standard_input_reasons: dict
    normalize_audio: bool
    passthrough: str
    playback_ids: list
    recording_times: list
    resolution_tier: str
    source_asset_id: str
    static_renditions: dict
    test: bool
    thumbnail_time: float
    tracks: list
    upload_id: str
    video_quality: str


class AssetLoadMatch(TypedDict):
    id: str


class AssetListMatch(TypedDict, total=False):
    cursor: str
    limit: int
    live_stream_id: str
    page: int
    upload_id: str


class AssetCreateDataRequired(TypedDict):
    created_at: str
    encoding_tier: str
    id: str
    master_access: str
    max_resolution_tier: str
    progress: dict
    shots: dict
    status: str


class AssetCreateData(AssetCreateDataRequired, total=False):
    aspect_ratio: str
    data: dict
    directives: list
    duration: float
    errors: dict
    generate_shots: bool
    ingest_type: str
    is_live: bool
    live_stream_id: str
    master: dict
    max_stored_frame_rate: float
    max_stored_resolution: str
    meta: dict
    mp4_support: str
    non_standard_input_reasons: dict
    normalize_audio: bool
    passthrough: str
    playback_ids: list
    recording_times: list
    resolution_tier: str
    source_asset_id: str
    static_renditions: dict
    test: bool
    thumbnail_time: float
    tracks: list
    upload_id: str
    video_quality: str


class AssetUpdateDataRequired(TypedDict):
    id: str


class AssetUpdateData(AssetUpdateDataRequired, total=False):
    aspect_ratio: str
    created_at: str
    data: dict
    directives: list
    duration: float
    encoding_tier: str
    errors: dict
    generate_shots: bool
    ingest_type: str
    is_live: bool
    live_stream_id: str
    master: dict
    master_access: str
    max_resolution_tier: str
    max_stored_frame_rate: float
    max_stored_resolution: str
    meta: dict
    mp4_support: str
    non_standard_input_reasons: dict
    normalize_audio: bool
    passthrough: str
    playback_ids: list
    progress: dict
    recording_times: list
    resolution_tier: str
    shots: dict
    source_asset_id: str
    static_renditions: dict
    status: str
    test: bool
    thumbnail_time: float
    tracks: list
    upload_id: str
    video_quality: str


class AssetRemoveMatch(TypedDict):
    id: str


class AssetOrLiveStreamId(TypedDict):
    id: str
    object: dict
    policy: str


class AssetOrLiveStreamIdLoadMatch(TypedDict):
    playback_id: str


class AssetPlaybackIdRequired(TypedDict):
    id: str
    policy: str


class AssetPlaybackId(AssetPlaybackIdRequired, total=False):
    drm_configuration_id: str


class AssetPlaybackIdLoadMatch(TypedDict):
    asset_id: str
    id: str


class AssetShotRequired(TypedDict):
    status: str


class AssetShot(AssetShotRequired, total=False):
    errors: dict
    shots_manifest_url: str


class AssetShotLoadMatch(TypedDict):
    asset_id: str


class CreatePlaybackId(TypedDict, total=False):
    drm_configuration_id: str
    policy: str


class CreatePlaybackIdCreateDataRequired(TypedDict):
    asset_id: str


class CreatePlaybackIdCreateData(CreatePlaybackIdCreateDataRequired, total=False):
    drm_configuration_id: str
    policy: str


class CreateTrackRequired(TypedDict):
    language_code: str
    type: str
    url: str


class CreateTrack(CreateTrackRequired, total=False):
    closed_captions: bool
    name: str
    passthrough: str
    text_type: str


class CreateTrackCreateDataRequired(TypedDict):
    asset_id: str
    language_code: str
    type: str
    url: str


class CreateTrackCreateData(CreateTrackCreateDataRequired, total=False):
    closed_captions: bool
    name: str
    passthrough: str
    text_type: str


class Directive(TypedDict):
    created_at: int
    id: str
    name: str
    resources: list
    subject: dict
    updated_at: int
    workflows: list


class DirectiveLoadMatch(TypedDict):
    id: str


class DirectiveListMatch(TypedDict, total=False):
    limit: int
    page: int


class DirectiveCreateData(TypedDict):
    created_at: int
    id: str
    name: str
    resources: list
    subject: dict
    updated_at: int
    workflows: list


class DirectiveRemoveMatch(TypedDict):
    id: str


class DirectiveRunDetail(TypedDict):
    completed_at: int | None
    node_states: list
    run_id: str
    started_at: int
    status: str
    subject_id: str


class DirectiveRunDetailLoadMatch(TypedDict):
    directive_id: str
    run_id: str


class DirectiveRunDetailListMatchRequired(TypedDict):
    directive_id: str


class DirectiveRunDetailListMatch(DirectiveRunDetailListMatchRequired, total=False):
    limit: int
    page: int


class DrmConfiguration(TypedDict):
    id: str


class DrmConfigurationLoadMatch(TypedDict):
    id: str


class DrmConfigurationListMatch(TypedDict, total=False):
    limit: int
    page: int


class EditCaptionRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class EditCaption(EditCaptionRequired, total=False):
    errors: list
    passthrough: str


class EditCaptionLoadMatch(TypedDict):
    id: str


class EditCaptionCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class EditCaptionCreateData(EditCaptionCreateDataRequired, total=False):
    errors: list
    passthrough: str


class EngagementHeatmap(TypedDict):
    data: dict
    timeframe: list
    total_row_count: int


class EngagementHeatmapListMatchRequired(TypedDict):
    asset_id: str


class EngagementHeatmapListMatch(EngagementHeatmapListMatchRequired, total=False):
    timeframe: list


class EngagementHotspot(TypedDict):
    data: dict
    timeframe: list
    total_row_count: int


class EngagementHotspotListMatchRequired(TypedDict):
    asset_id: str


class EngagementHotspotListMatch(EngagementHotspotListMatchRequired, total=False):
    limit: int
    order_direction: str
    timeframe: list


class FindBestThumbnailRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class FindBestThumbnail(FindBestThumbnailRequired, total=False):
    errors: list
    passthrough: str


class FindBestThumbnailLoadMatch(TypedDict):
    id: str


class FindBestThumbnailCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class FindBestThumbnailCreateData(FindBestThumbnailCreateDataRequired, total=False):
    errors: list
    passthrough: str


class FindKeyMomentRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class FindKeyMoment(FindKeyMomentRequired, total=False):
    errors: list
    passthrough: str


class FindKeyMomentLoadMatch(TypedDict):
    id: str


class FindKeyMomentCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class FindKeyMomentCreateData(FindKeyMomentCreateDataRequired, total=False):
    errors: list
    passthrough: str


class FindSceneRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class FindScene(FindSceneRequired, total=False):
    errors: list
    passthrough: str


class FindSceneLoadMatch(TypedDict):
    id: str


class FindSceneCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class FindSceneCreateData(FindSceneCreateDataRequired, total=False):
    errors: list
    passthrough: str


class GenerateAssetShot(TypedDict, total=False):
    data: dict


class GenerateAssetShotCreateDataRequired(TypedDict):
    asset_id: str


class GenerateAssetShotCreateData(GenerateAssetShotCreateDataRequired, total=False):
    data: dict


class GenerateChapterRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class GenerateChapter(GenerateChapterRequired, total=False):
    errors: list
    passthrough: str


class GenerateChapterLoadMatch(TypedDict):
    id: str


class GenerateChapterCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class GenerateChapterCreateData(GenerateChapterCreateDataRequired, total=False):
    errors: list
    passthrough: str


class GenerateEngagementInsightRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class GenerateEngagementInsight(GenerateEngagementInsightRequired, total=False):
    errors: list
    passthrough: str


class GenerateEngagementInsightLoadMatch(TypedDict):
    id: str


class GenerateEngagementInsightCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class GenerateEngagementInsightCreateData(GenerateEngagementInsightCreateDataRequired, total=False):
    errors: list
    passthrough: str


class GeneratePremiumCaptionRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class GeneratePremiumCaption(GeneratePremiumCaptionRequired, total=False):
    errors: list
    passthrough: str


class GeneratePremiumCaptionLoadMatch(TypedDict):
    id: str


class GeneratePremiumCaptionCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class GeneratePremiumCaptionCreateData(GeneratePremiumCaptionCreateDataRequired, total=False):
    errors: list
    passthrough: str


class GenerateTrackSubtitle(TypedDict):
    generated_subtitles: list


class GenerateTrackSubtitleCreateData(TypedDict):
    asset_id: str
    track_id: str
    generated_subtitles: list


class Incident(TypedDict):
    affected_views: int
    affected_views_per_hour: int
    affected_views_per_hour_on_open: int
    breakdowns: list
    data: dict
    description: str
    error_description: str
    id: str
    impact: str
    incident_key: str
    measured_value: float
    measured_value_on_close: float
    measurement: str
    notification_rules: list
    notifications: list
    resolved_at: str
    sample_size: int
    sample_size_unit: str
    severity: str
    started_at: str
    status: str
    threshold: float
    timeframe: list
    total_row_count: int


class IncidentLoadMatch(TypedDict):
    id: str


class IncidentListMatch(TypedDict, total=False):
    limit: int
    order_by: str
    order_direction: str
    page: int
    severity: str
    status: str


class InputInfo(TypedDict, total=False):
    file: dict
    settings: dict


class InputInfoListMatch(TypedDict):
    asset_id: str


class JobSummary(TypedDict):
    created_at: int
    id: str
    links: dict
    status: str
    updated_at: int
    workflow: str


class JobSummaryListMatch(TypedDict, total=False):
    asset_id: str
    limit: int
    page: int
    status: Any
    workflow: str


class JobSummaryCreateData(TypedDict):
    job_id: str
    created_at: int
    id: str
    links: dict
    status: str
    updated_at: int
    workflow: str


class ListAllMetricValueRequired(TypedDict):
    name: str


class ListAllMetricValue(ListAllMetricValueRequired, total=False):
    ended_views: int
    items: list
    metric: str
    started_views: int
    total_playing_time: int
    type: str
    unique_viewers: int
    value: float
    view_count: int
    watch_time: int


class ListAllMetricValueListMatch(TypedDict, total=False):
    dimension: str
    filter: list
    metric_filter: list
    timeframe: list
    value: str


class ListBreakdownValue(TypedDict):
    field: str
    negative_impact: int
    total_playing_time: int
    total_watch_time: int
    value: float
    views: int


class ListBreakdownValueListMatchRequired(TypedDict):
    metric_id: str


class ListBreakdownValueListMatch(ListBreakdownValueListMatchRequired, total=False):
    filter: list
    group_by: str
    limit: int
    measurement: str
    metric_filter: list
    order_by: str
    order_direction: str
    page: int
    timeframe: list


class ListDeliveryUsageRequired(TypedDict):
    asset_duration: float
    asset_encoding_tier: str
    asset_id: str
    asset_resolution_tier: str
    asset_state: str
    created_at: str
    delivered_seconds: float
    delivered_seconds_by_resolution: dict


class ListDeliveryUsage(ListDeliveryUsageRequired, total=False):
    asset_video_quality: str
    deleted_at: str
    live_stream_id: str
    passthrough: str


class ListDeliveryUsageListMatch(TypedDict, total=False):
    asset_id: str
    limit: int
    live_stream_id: str
    page: int
    timeframe: list


class ListDimensionValue(TypedDict):
    data: list
    timeframe: list
    total_count: int
    total_row_count: int
    value: str


class ListDimensionValueLoadMatchRequired(TypedDict):
    dimension_id: str


class ListDimensionValueLoadMatch(ListDimensionValueLoadMatchRequired, total=False):
    filter: list
    limit: int
    metric_filter: list
    page: int
    timeframe: list


class ListDimensionValueListMatch(TypedDict, total=False):
    data: list
    timeframe: list
    total_count: int
    total_row_count: int
    value: str


class ListError(TypedDict):
    code: int
    count: int
    description: str
    id: int
    last_seen: str
    message: str
    notes: str
    percentage: float
    player_error_code: str


class ListErrorListMatch(TypedDict, total=False):
    filter: list
    metric_filter: list
    timeframe: list


class ListExport(TypedDict):
    data: list
    timeframe: list
    total_row_count: int


class ListExportListMatch(TypedDict, total=False):
    data: list
    timeframe: list
    total_row_count: int


class ListFilterValue(TypedDict):
    data: list
    timeframe: list
    total_row_count: int


class ListFilterValueLoadMatchRequired(TypedDict):
    filter_id: str


class ListFilterValueLoadMatch(ListFilterValueLoadMatchRequired, total=False):
    filter: list
    limit: int
    page: int
    timeframe: list


class ListFilterValueListMatch(TypedDict, total=False):
    data: list
    timeframe: list
    total_row_count: int


class ListInsight(TypedDict):
    filter_column: str
    filter_value: str
    metric: float
    negative_impact_score: float
    total_playing_time: int
    total_views: int
    total_watch_time: int


class ListInsightListMatchRequired(TypedDict):
    metric_id: str


class ListInsightListMatch(ListInsightListMatchRequired, total=False):
    filter: list
    measurement: str
    metric_filter: list
    order_direction: str
    timeframe: list


class ListMonitoringDimension(TypedDict):
    display_name: str
    name: str


class ListMonitoringDimensionListMatch(TypedDict, total=False):
    display_name: str
    name: str


class ListMonitoringMetric(TypedDict):
    display_name: str
    name: str


class ListMonitoringMetricListMatch(TypedDict, total=False):
    display_name: str
    name: str


class ListRealTimeDimension(TypedDict):
    display_name: str
    name: str


class ListRealTimeDimensionListMatch(TypedDict, total=False):
    display_name: str
    name: str


class ListRealTimeMetric(TypedDict):
    display_name: str
    name: str


class ListRealTimeMetricListMatch(TypedDict, total=False):
    display_name: str
    name: str


class ListRelatedIncident(TypedDict):
    affected_views: int
    affected_views_per_hour: int
    affected_views_per_hour_on_open: int
    breakdowns: list
    description: str
    error_description: str
    id: str
    impact: str
    incident_key: str
    measured_value: float
    measured_value_on_close: float
    measurement: str
    notification_rules: list
    notifications: list
    resolved_at: str
    sample_size: int
    sample_size_unit: str
    severity: str
    started_at: str
    status: str
    threshold: float


class ListRelatedIncidentListMatchRequired(TypedDict):
    incident_id: str


class ListRelatedIncidentListMatch(ListRelatedIncidentListMatchRequired, total=False):
    limit: int
    order_by: str
    order_direction: str
    page: int


class ListSubviewBreakdownValue(TypedDict):
    breakdown_value: str
    metric_value: float


class ListSubviewBreakdownValueListMatchRequired(TypedDict):
    subview_metric_id: str
    subview_type: str


class ListSubviewBreakdownValueListMatch(ListSubviewBreakdownValueListMatchRequired, total=False):
    filter: list
    group_by: list
    limit: int
    page: int
    timeframe: list


class ListSubviewComparisonValue(TypedDict):
    dimension_value: str
    values: list


class ListSubviewComparisonValueListMatchRequired(TypedDict):
    subview_metric_id: str
    subview_type: str
    dimension: str
    value: list


class ListSubviewComparisonValueListMatch(ListSubviewComparisonValueListMatchRequired, total=False):
    breakdown_value_limit: int
    filter: list
    group_by: list
    timeframe: list


class ListSubviewDimension(TypedDict):
    data: dict
    total_row_count: int


class ListSubviewDimensionLoadMatch(TypedDict):
    subview_type: str


class ListSubviewDimensionValue(TypedDict):
    data: list
    meta: Any
    timeframe: list
    total_row_count: int


class ListSubviewDimensionValueLoadMatchRequired(TypedDict):
    dimension_name: str
    subview_metric_id: str


class ListSubviewDimensionValueLoadMatch(ListSubviewDimensionValueLoadMatchRequired, total=False):
    filter: list
    limit: int
    order_by: str
    order_direction: str
    page: int
    query: str
    timeframe: list


class ListVideoViewExport(TypedDict):
    export_date: str
    files: list


class ListVideoViewExportListMatch(TypedDict, total=False):
    export_date: str
    files: list


class LiveStreamRequired(TypedDict):
    created_at: str
    id: str
    latency_mode: str
    max_continuous_duration: int
    status: str
    stream_key: str


class LiveStream(LiveStreamRequired, total=False):
    active_asset_id: str
    active_ingest_protocol: str
    advanced_playback_policies: list
    audio_only: bool
    embedded_subtitles: list
    generated_subtitles: list
    low_latency: bool
    meta: dict
    new_asset_settings: dict
    passthrough: str
    playback_ids: list
    playback_policies: list
    playback_policy: list
    recent_asset_ids: list
    reconnect_slate_url: str
    reconnect_window: float
    reduced_latency: bool
    simulcast_targets: list
    srt_passphrase: str
    test: bool
    use_slate_for_standard_latency: bool


class LiveStreamLoadMatch(TypedDict):
    id: str


class LiveStreamListMatch(TypedDict, total=False):
    limit: int
    page: int
    status: str
    stream_key: str


class LiveStreamCreateDataRequired(TypedDict):
    created_at: str
    id: str
    latency_mode: str
    max_continuous_duration: int
    status: str
    stream_key: str


class LiveStreamCreateData(LiveStreamCreateDataRequired, total=False):
    active_asset_id: str
    active_ingest_protocol: str
    advanced_playback_policies: list
    audio_only: bool
    embedded_subtitles: list
    generated_subtitles: list
    low_latency: bool
    meta: dict
    new_asset_settings: dict
    passthrough: str
    playback_ids: list
    playback_policies: list
    playback_policy: list
    recent_asset_ids: list
    reconnect_slate_url: str
    reconnect_window: float
    reduced_latency: bool
    simulcast_targets: list
    srt_passphrase: str
    test: bool
    use_slate_for_standard_latency: bool


class LiveStreamUpdateDataRequired(TypedDict):
    id: str


class LiveStreamUpdateData(LiveStreamUpdateDataRequired, total=False):
    active_asset_id: str
    active_ingest_protocol: str
    advanced_playback_policies: list
    audio_only: bool
    created_at: str
    embedded_subtitles: list
    generated_subtitles: list
    latency_mode: str
    low_latency: bool
    max_continuous_duration: int
    meta: dict
    new_asset_settings: dict
    passthrough: str
    playback_ids: list
    playback_policies: list
    playback_policy: list
    recent_asset_ids: list
    reconnect_slate_url: str
    reconnect_window: float
    reduced_latency: bool
    simulcast_targets: list
    srt_passphrase: str
    status: str
    stream_key: str
    test: bool
    use_slate_for_standard_latency: bool


class LiveStreamRemoveMatch(TypedDict):
    id: str


class LiveStreamPlaybackIdRequired(TypedDict):
    id: str
    policy: str


class LiveStreamPlaybackId(LiveStreamPlaybackIdRequired, total=False):
    drm_configuration_id: str


class LiveStreamPlaybackIdLoadMatch(TypedDict):
    id: str
    live_stream_id: str


class MetricTimeseriesData(TypedDict):
    data: list
    meta: dict
    timeframe: list
    total_row_count: int


class MetricTimeseriesDataListMatchRequired(TypedDict):
    metric_id: str


class MetricTimeseriesDataListMatch(MetricTimeseriesDataListMatchRequired, total=False):
    filter: list
    group_by: str
    measurement: str
    metric_filter: list
    order_direction: str
    timeframe: list


class ModerateRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class Moderate(ModerateRequired, total=False):
    errors: list
    passthrough: str


class ModerateLoadMatch(TypedDict):
    id: str


class ModerateCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class ModerateCreateData(ModerateCreateDataRequired, total=False):
    errors: list
    passthrough: str


class MonitoringBreakdownRequired(TypedDict):
    concurrent_viewers: int
    metric_value: float
    negative_impact: int
    starting_up_viewers: int
    value: str


class MonitoringBreakdown(MonitoringBreakdownRequired, total=False):
    display_value: str


class MonitoringBreakdownListMatchRequired(TypedDict):
    monitoring_metric_id: str


class MonitoringBreakdownListMatch(MonitoringBreakdownListMatchRequired, total=False):
    dimension: str
    filter: list
    order_by: str
    order_direction: str
    timestamp: int


class MonitoringBreakdownTimeseries(TypedDict):
    date: str
    values: list


class MonitoringBreakdownTimeseriesListMatchRequired(TypedDict):
    monitoring_metric_id: str


class MonitoringBreakdownTimeseriesListMatch(MonitoringBreakdownTimeseriesListMatchRequired, total=False):
    dimension: str
    filter: list
    limit: int
    order_by: str
    order_direction: str
    timeframe: list


class MonitoringHistogramTimeseries(TypedDict):
    average: float
    bucket_values: list
    max_percentage: float
    median: float
    p95: float
    sum: int
    timestamp: str


class MonitoringHistogramTimeseriesListMatchRequired(TypedDict):
    monitoring_histogram_metric_id: str


class MonitoringHistogramTimeseriesListMatch(MonitoringHistogramTimeseriesListMatchRequired, total=False):
    filter: list


class MonitoringTimeseries(TypedDict):
    concurrent_viewers: int
    date: str
    value: float


class MonitoringTimeseriesListMatchRequired(TypedDict):
    monitoring_metric_id: str


class MonitoringTimeseriesListMatch(MonitoringTimeseriesListMatchRequired, total=False):
    filter: list
    timestamp: int


class Overall(TypedDict):
    data: dict
    meta: dict
    timeframe: list
    total_row_count: int


class OverallListMatchRequired(TypedDict):
    metric_id: str


class OverallListMatch(OverallListMatchRequired, total=False):
    filter: list
    measurement: str
    metric_filter: list
    timeframe: list


class PlaybackRestriction(TypedDict):
    created_at: str
    id: str
    referrer: dict
    updated_at: str
    user_agent: dict


class PlaybackRestrictionLoadMatch(TypedDict):
    id: str


class PlaybackRestrictionListMatch(TypedDict, total=False):
    limit: int
    page: int


class PlaybackRestrictionCreateData(TypedDict):
    created_at: str
    id: str
    referrer: dict
    updated_at: str
    user_agent: dict


class PlaybackRestrictionUpdateDataRequired(TypedDict):
    playback_restriction_id: str


class PlaybackRestrictionUpdateData(PlaybackRestrictionUpdateDataRequired, total=False):
    created_at: str
    id: str
    referrer: dict
    updated_at: str
    user_agent: dict


class PlaybackRestrictionRemoveMatch(TypedDict):
    id: str


class RealTimeBreakdownRequired(TypedDict):
    concurrent_viewers: int
    metric_value: float
    negative_impact: int
    starting_up_viewers: int
    value: str


class RealTimeBreakdown(RealTimeBreakdownRequired, total=False):
    display_value: str


class RealTimeBreakdownListMatchRequired(TypedDict):
    realtime_metric_id: str


class RealTimeBreakdownListMatch(RealTimeBreakdownListMatchRequired, total=False):
    dimension: str
    filter: list
    order_by: str
    order_direction: str
    timestamp: int


class RealTimeHistogramTimeseries(TypedDict):
    average: float
    bucket_values: list
    max_percentage: float
    median: float
    p95: float
    sum: int
    timestamp: str


class RealTimeHistogramTimeseriesListMatchRequired(TypedDict):
    realtime_histogram_metric_id: str


class RealTimeHistogramTimeseriesListMatch(RealTimeHistogramTimeseriesListMatchRequired, total=False):
    filter: list


class RealTimeTimeseries(TypedDict):
    concurrent_viewers: int
    date: str
    value: float


class RealTimeTimeseriesListMatchRequired(TypedDict):
    realtime_metric_id: str


class RealTimeTimeseriesListMatch(RealTimeTimeseriesListMatchRequired, total=False):
    filter: list
    timestamp: int


class SignalLiveStreamComplete(TypedDict):
    pass


class SignalLiveStreamCompleteUpdateData(TypedDict):
    live_stream_id: str


class SigningKeyRequired(TypedDict):
    created_at: str
    id: str


class SigningKey(SigningKeyRequired, total=False):
    data: dict
    private_key: str


class SigningKeyLoadMatch(TypedDict):
    id: str


class SigningKeyListMatch(TypedDict, total=False):
    limit: int
    page: int


class SigningKeyCreateDataRequired(TypedDict):
    created_at: str
    id: str


class SigningKeyCreateData(SigningKeyCreateDataRequired, total=False):
    data: dict
    private_key: str


class SigningKeyRemoveMatch(TypedDict):
    id: str


class SimulcastTargetRequired(TypedDict):
    id: str
    status: str
    url: str


class SimulcastTarget(SimulcastTargetRequired, total=False):
    error_severity: str
    passthrough: str
    stream_key: str


class SimulcastTargetLoadMatch(TypedDict):
    id: str
    live_stream_id: str


class SimulcastTargetCreateDataRequired(TypedDict):
    live_stream_id: str
    id: str
    status: str
    url: str


class SimulcastTargetCreateData(SimulcastTargetCreateDataRequired, total=False):
    error_severity: str
    passthrough: str
    stream_key: str


class StaticRenditionRequired(TypedDict):
    resolution: str


class StaticRendition(StaticRenditionRequired, total=False):
    passthrough: str


class StaticRenditionCreateDataRequired(TypedDict):
    asset_id: str
    resolution: str


class StaticRenditionCreateData(StaticRenditionCreateDataRequired, total=False):
    passthrough: str


class SubviewBreakdownTimeseries(TypedDict):
    date: str
    status: str
    values: list


class SubviewBreakdownTimeseriesListMatchRequired(TypedDict):
    subview_metric_id: str
    subview_type: str


class SubviewBreakdownTimeseriesListMatch(SubviewBreakdownTimeseriesListMatchRequired, total=False):
    breakdown_value_limit: int
    filter: list
    group_by: list
    time_granularity: str
    timeframe: list


class SubviewOverallValue(TypedDict):
    data: dict
    meta: dict
    timeframe: list
    total_row_count: int


class SubviewOverallValueListMatchRequired(TypedDict):
    subview_metric_id: str
    subview_type: str


class SubviewOverallValueListMatch(SubviewOverallValueListMatchRequired, total=False):
    filter: list
    timeframe: list


class SummarizeRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class Summarize(SummarizeRequired, total=False):
    errors: list
    passthrough: str


class SummarizeLoadMatch(TypedDict):
    id: str


class SummarizeCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    outputs: dict
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class SummarizeCreateData(SummarizeCreateDataRequired, total=False):
    errors: list
    passthrough: str


class TranscriptionVocabularyRequired(TypedDict):
    created_at: str
    id: str
    updated_at: str


class TranscriptionVocabulary(TranscriptionVocabularyRequired, total=False):
    name: str
    passthrough: str
    phrases: list


class TranscriptionVocabularyLoadMatch(TypedDict):
    id: str


class TranscriptionVocabularyListMatch(TypedDict, total=False):
    limit: int
    page: int


class TranscriptionVocabularyCreateDataRequired(TypedDict):
    created_at: str
    id: str
    updated_at: str


class TranscriptionVocabularyCreateData(TranscriptionVocabularyCreateDataRequired, total=False):
    name: str
    passthrough: str
    phrases: list


class TranscriptionVocabularyUpdateDataRequired(TypedDict):
    id: str


class TranscriptionVocabularyUpdateData(TranscriptionVocabularyUpdateDataRequired, total=False):
    created_at: str
    name: str
    passthrough: str
    phrases: list
    updated_at: str


class TranscriptionVocabularyRemoveMatch(TypedDict):
    id: str


class TranslateAudioRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class TranslateAudio(TranslateAudioRequired, total=False):
    errors: list
    outputs: dict
    passthrough: str


class TranslateAudioLoadMatch(TypedDict):
    id: str


class TranslateAudioCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class TranslateAudioCreateData(TranslateAudioCreateDataRequired, total=False):
    errors: list
    outputs: dict
    passthrough: str


class TranslateCaptionRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class TranslateCaption(TranslateCaptionRequired, total=False):
    errors: list
    outputs: dict
    passthrough: str


class TranslateCaptionLoadMatch(TypedDict):
    id: str


class TranslateCaptionCreateDataRequired(TypedDict):
    created_at: int
    directive: dict
    id: str
    parameters: dict
    resources: dict
    status: str
    units_consumed: int
    updated_at: int
    workflow: str


class TranslateCaptionCreateData(TranslateCaptionCreateDataRequired, total=False):
    errors: list
    outputs: dict
    passthrough: str


class UpdateAssetTrack(TypedDict, total=False):
    auto_language_confidence: float
    closed_captions: bool
    duration: float
    id: str
    language_code: str
    max_channels: int
    max_frame_rate: float
    max_height: int
    max_width: int
    name: str
    passthrough: str
    primary: bool
    status: str
    text_source: str
    text_type: str
    type: str


class UpdateAssetTrackUpdateDataRequired(TypedDict):
    asset_id: str
    id: str


class UpdateAssetTrackUpdateData(UpdateAssetTrackUpdateDataRequired, total=False):
    auto_language_confidence: float
    closed_captions: bool
    duration: float
    language_code: str
    max_channels: int
    max_frame_rate: float
    max_height: int
    max_width: int
    name: str
    passthrough: str
    primary: bool
    status: str
    text_source: str
    text_type: str
    type: str


class UploadRequired(TypedDict):
    cors_origin: str
    id: str
    status: str
    timeout: int


class Upload(UploadRequired, total=False):
    asset_id: str
    error: dict
    new_asset_settings: dict
    test: bool
    url: str


class UploadLoadMatch(TypedDict):
    id: str


class UploadListMatch(TypedDict, total=False):
    limit: int
    page: int


class UploadCreateDataRequired(TypedDict):
    cors_origin: str
    id: str
    status: str
    timeout: int


class UploadCreateData(UploadCreateDataRequired, total=False):
    asset_id: str
    error: dict
    new_asset_settings: dict
    test: bool
    url: str


class UploadUpdateDataRequired(TypedDict):
    upload_id: str


class UploadUpdateData(UploadUpdateDataRequired, total=False):
    asset_id: str
    cors_origin: str
    error: dict
    id: str
    new_asset_settings: dict
    status: str
    test: bool
    timeout: int
    url: str


class UrlSigningKey(TypedDict, total=False):
    id: str


class UrlSigningKeyRemoveMatch(TypedDict):
    id: str


class UsageExport(TypedDict):
    date: str
    download_url: str
    download_url_expires_at: int
    file_size: int


class UsageExportListMatch(TypedDict, total=False):
    download_url_ttl: int
    limit: int
    page: int
    timeframe: list


class VideoView(TypedDict):
    country_code: str
    data: dict
    error_type_id: int
    id: str
    playback_failure: bool
    player_error_code: str
    player_error_message: str
    timeframe: list
    total_row_count: int
    video_title: str
    view_end: str
    view_start: str
    viewer_application_name: str
    viewer_experience_score: float
    viewer_os_family: str
    watch_time: int


class VideoViewLoadMatch(TypedDict):
    id: str


class VideoViewListMatch(TypedDict, total=False):
    error_id: int
    filter: list
    limit: int
    metric_filter: list
    order_direction: str
    page: int
    timeframe: list
    viewer_id: str


class WebhookRequired(TypedDict):
    address: str
    created_at: str
    enabled: bool
    id: str


class Webhook(WebhookRequired, total=False):
    signing_secret: str


class WebhookLoadMatch(TypedDict):
    id: str


class WebhookListMatch(TypedDict, total=False):
    limit: int
    page: int


class WebhookCreateDataRequired(TypedDict):
    address: str
    created_at: str
    enabled: bool
    id: str


class WebhookCreateData(WebhookCreateDataRequired, total=False):
    signing_secret: str


class WebhookUpdateDataRequired(TypedDict):
    id: str


class WebhookUpdateData(WebhookUpdateDataRequired, total=False):
    address: str
    created_at: str
    enabled: bool
    signing_secret: str


class WebhookRemoveMatch(TypedDict):
    id: str


class WhoAmI(TypedDict):
    access_token_name: str
    environment_id: str
    environment_name: str
    environment_type: str
    organization_id: str
    organization_name: str
    permissions: list


class WhoAmILoadMatch(TypedDict, total=False):
    access_token_name: str
    environment_id: str
    environment_name: str
    environment_type: str
    organization_id: str
    organization_name: str
    permissions: list
