export interface Annotation {
    date: string;
    id: string;
    note: string;
    sub_property_id?: string;
}
export interface AnnotationLoadMatch {
    id: string;
}
export interface AnnotationCreateData {
    date: string;
    id: string;
    note: string;
    sub_property_id?: string;
}
export interface AnnotationUpdateData {
    id: string;
    date?: string;
    note?: string;
    sub_property_id?: string;
}
export interface AnnotationRemoveMatch {
    id: string;
}
export interface AskQuestion {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface AskQuestionLoadMatch {
    id: string;
}
export interface AskQuestionCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface Asset {
    aspect_ratio?: string;
    created_at: string;
    data?: Record<string, any>;
    directives?: any[];
    duration?: number;
    encoding_tier: string;
    errors?: Record<string, any>;
    generate_shots?: boolean;
    id: string;
    ingest_type?: string;
    is_live?: boolean;
    live_stream_id?: string;
    master?: Record<string, any>;
    master_access: string;
    max_resolution_tier: string;
    max_stored_frame_rate?: number;
    max_stored_resolution?: string;
    meta?: Record<string, any>;
    mp4_support?: string;
    non_standard_input_reasons?: Record<string, any>;
    normalize_audio?: boolean;
    passthrough?: string;
    playback_ids?: any[];
    progress: Record<string, any>;
    recording_times?: any[];
    resolution_tier?: string;
    shots: Record<string, any>;
    source_asset_id?: string;
    static_renditions?: Record<string, any>;
    status: string;
    test?: boolean;
    thumbnail_time?: number;
    tracks?: any[];
    upload_id?: string;
    video_quality?: string;
}
export interface AssetLoadMatch {
    id: string;
}
export interface AssetCreateData {
    aspect_ratio?: string;
    created_at: string;
    data?: Record<string, any>;
    directives?: any[];
    duration?: number;
    encoding_tier: string;
    errors?: Record<string, any>;
    generate_shots?: boolean;
    id: string;
    ingest_type?: string;
    is_live?: boolean;
    live_stream_id?: string;
    master?: Record<string, any>;
    master_access: string;
    max_resolution_tier: string;
    max_stored_frame_rate?: number;
    max_stored_resolution?: string;
    meta?: Record<string, any>;
    mp4_support?: string;
    non_standard_input_reasons?: Record<string, any>;
    normalize_audio?: boolean;
    passthrough?: string;
    playback_ids?: any[];
    progress: Record<string, any>;
    recording_times?: any[];
    resolution_tier?: string;
    shots: Record<string, any>;
    source_asset_id?: string;
    static_renditions?: Record<string, any>;
    status: string;
    test?: boolean;
    thumbnail_time?: number;
    tracks?: any[];
    upload_id?: string;
    video_quality?: string;
}
export interface AssetUpdateData {
    id: string;
    aspect_ratio?: string;
    created_at?: string;
    data?: Record<string, any>;
    directives?: any[];
    duration?: number;
    encoding_tier?: string;
    errors?: Record<string, any>;
    generate_shots?: boolean;
    ingest_type?: string;
    is_live?: boolean;
    live_stream_id?: string;
    master?: Record<string, any>;
    master_access?: string;
    max_resolution_tier?: string;
    max_stored_frame_rate?: number;
    max_stored_resolution?: string;
    meta?: Record<string, any>;
    mp4_support?: string;
    non_standard_input_reasons?: Record<string, any>;
    normalize_audio?: boolean;
    passthrough?: string;
    playback_ids?: any[];
    progress?: Record<string, any>;
    recording_times?: any[];
    resolution_tier?: string;
    shots?: Record<string, any>;
    source_asset_id?: string;
    static_renditions?: Record<string, any>;
    status?: string;
    test?: boolean;
    thumbnail_time?: number;
    tracks?: any[];
    upload_id?: string;
    video_quality?: string;
    $action?: string;
    [action: string]: any;
}
export interface AssetRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AssetOrLiveStreamId {
    id: string;
    object: Record<string, any>;
    policy: string;
}
export interface AssetOrLiveStreamIdLoadMatch {
    playback_id: string;
}
export interface AssetPlaybackId {
    drm_configuration_id?: string;
    id: string;
    policy: string;
}
export interface AssetPlaybackIdLoadMatch {
    asset_id: string;
    id: string;
}
export interface AssetShot {
    errors?: Record<string, any>;
    shots_manifest_url?: string;
    status: string;
}
export interface AssetShotLoadMatch {
    asset_id: string;
}
export interface CreatePlaybackId {
    drm_configuration_id?: string;
    policy?: string;
}
export interface CreatePlaybackIdCreateData {
    asset_id: string;
    drm_configuration_id?: string;
    policy?: string;
}
export interface CreateTrack {
    closed_captions?: boolean;
    language_code: string;
    name?: string;
    passthrough?: string;
    text_type?: string;
    type: string;
    url: string;
}
export interface CreateTrackCreateData {
    asset_id: string;
    closed_captions?: boolean;
    language_code: string;
    name?: string;
    passthrough?: string;
    text_type?: string;
    type: string;
    url: string;
}
export interface Directive {
    created_at: number;
    id: string;
    name: string;
    resources: any[];
    subject: Record<string, any>;
    updated_at: number;
    workflows: any[];
}
export interface DirectiveLoadMatch {
    id: string;
}
export interface DirectiveListMatch {
    limit?: number;
    page?: number;
}
export interface DirectiveCreateData {
    created_at: number;
    id: string;
    name: string;
    resources: any[];
    subject: Record<string, any>;
    updated_at: number;
    workflows: any[];
    $action?: string;
    [action: string]: any;
}
export interface DirectiveRemoveMatch {
    id: string;
}
export interface DirectiveRunDetail {
    completed_at: number | null;
    node_states: any[];
    run_id: string;
    started_at: number;
    status: string;
    subject_id: string;
}
export interface DirectiveRunDetailLoadMatch {
    directive_id: string;
    run_id: string;
}
export interface DirectiveRunList {
    completed_at: number | null;
    node_states: any[];
    run_id: string;
    started_at: number;
    status: string;
    subject_id: string;
}
export interface DirectiveRunListListMatch {
    directive_id: string;
    limit?: number;
    page?: number;
}
export interface DrmConfiguration {
    id: string;
}
export interface DrmConfigurationLoadMatch {
    id: string;
}
export interface EditCaption {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface EditCaptionLoadMatch {
    id: string;
}
export interface EditCaptionCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface EngagementHeatmap {
    data: Record<string, any>;
    timeframe: any[];
    total_row_count: number;
}
export interface EngagementHeatmapListMatch {
    asset_id: string;
    timeframe?: any[];
}
export interface EngagementHotspot {
    data: Record<string, any>;
    timeframe: any[];
    total_row_count: number;
}
export interface EngagementHotspotListMatch {
    asset_id: string;
    limit?: number;
    order_direction?: string;
    timeframe?: any[];
}
export interface FindBestThumbnail {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface FindBestThumbnailLoadMatch {
    id: string;
}
export interface FindBestThumbnailCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface FindKeyMoment {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface FindKeyMomentLoadMatch {
    id: string;
}
export interface FindKeyMomentCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface FindScene {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface FindSceneLoadMatch {
    id: string;
}
export interface FindSceneCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface GenerateAssetShot {
    data?: Record<string, any>;
}
export interface GenerateAssetShotCreateData {
    asset_id: string;
    data?: Record<string, any>;
}
export interface GenerateChapter {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface GenerateChapterLoadMatch {
    id: string;
}
export interface GenerateChapterCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface GenerateEngagementInsight {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface GenerateEngagementInsightLoadMatch {
    id: string;
}
export interface GenerateEngagementInsightCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface GeneratePremiumCaption {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface GeneratePremiumCaptionLoadMatch {
    id: string;
}
export interface GeneratePremiumCaptionCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface GenerateTrackSubtitle {
    generated_subtitles: any[];
}
export interface GenerateTrackSubtitleCreateData {
    asset_id: string;
    track_id: string;
    generated_subtitles: any[];
}
export interface Incident {
    data: Record<string, any>;
    id?: string;
    timeframe: any[];
    total_row_count: number;
}
export interface IncidentLoadMatch {
    id: string;
}
export interface InputInfo {
    file?: Record<string, any>;
    settings?: Record<string, any>;
}
export interface InputInfoListMatch {
    asset_id: string;
}
export interface JobSummary {
    created_at: number;
    id: string;
    links: Record<string, any>;
    status: string;
    updated_at: number;
    workflow: string;
}
export interface JobSummaryCreateData {
    job_id: string;
    created_at: number;
    id: string;
    links: Record<string, any>;
    status: string;
    updated_at: number;
    workflow: string;
}
export interface ListAllMetricValue {
    ended_views?: number;
    items?: any[];
    metric?: string;
    name: string;
    started_views?: number;
    total_playing_time?: number;
    type?: string;
    unique_viewers?: number;
    value?: number;
    view_count?: number;
    watch_time?: number;
}
export interface ListAllMetricValueListMatch {
    dimension?: string;
    filter?: any[];
    metric_filter?: any[];
    timeframe?: any[];
    value?: string;
}
export interface ListAnnotation {
    date: string;
    id: string;
    note: string;
    sub_property_id?: string;
}
export interface ListAnnotationListMatch {
    limit?: number;
    order_direction?: string;
    page?: number;
    timeframe?: any[];
}
export interface ListAsset {
    aspect_ratio?: string;
    created_at: string;
    directives?: any[];
    duration?: number;
    encoding_tier: string;
    errors?: Record<string, any>;
    generate_shots?: boolean;
    id: string;
    ingest_type?: string;
    is_live?: boolean;
    live_stream_id?: string;
    master?: Record<string, any>;
    master_access: string;
    max_resolution_tier: string;
    max_stored_frame_rate?: number;
    max_stored_resolution?: string;
    meta?: Record<string, any>;
    mp4_support?: string;
    non_standard_input_reasons?: Record<string, any>;
    normalize_audio?: boolean;
    passthrough?: string;
    playback_ids?: any[];
    progress: Record<string, any>;
    recording_times?: any[];
    resolution_tier?: string;
    shots: Record<string, any>;
    source_asset_id?: string;
    static_renditions?: Record<string, any>;
    status: string;
    test?: boolean;
    thumbnail_time?: number;
    tracks?: any[];
    upload_id?: string;
    video_quality?: string;
}
export interface ListAssetListMatch {
    cursor?: string;
    limit?: number;
    live_stream_id?: string;
    page?: number;
    upload_id?: string;
}
export interface ListBreakdownValue {
    field: string;
    negative_impact: number;
    total_playing_time: number;
    total_watch_time: number;
    value: number;
    views: number;
}
export interface ListBreakdownValueListMatch {
    metric_id: string;
    filter?: any[];
    group_by?: string;
    limit?: number;
    measurement?: string;
    metric_filter?: any[];
    order_by?: string;
    order_direction?: string;
    page?: number;
    timeframe?: any[];
}
export interface ListDeliveryUsage {
    asset_duration: number;
    asset_encoding_tier: string;
    asset_id: string;
    asset_resolution_tier: string;
    asset_state: string;
    asset_video_quality?: string;
    created_at: string;
    deleted_at?: string;
    delivered_seconds: number;
    delivered_seconds_by_resolution: Record<string, any>;
    live_stream_id?: string;
    passthrough?: string;
}
export interface ListDeliveryUsageListMatch {
    asset_id?: string;
    limit?: number;
    live_stream_id?: string;
    page?: number;
    timeframe?: any[];
}
export interface ListDimension {
    data: Record<string, any>;
    timeframe: any[];
    total_row_count: number;
}
export interface ListDimensionListMatch {
    data?: Record<string, any>;
    timeframe?: any[];
    total_row_count?: number;
}
export interface ListDimensionValue {
    data: any[];
    timeframe: any[];
    total_count: number;
    total_row_count: number;
    value: string;
}
export interface ListDimensionValueLoadMatch {
    dimension_id: string;
    filter?: any[];
    limit?: number;
    metric_filter?: any[];
    page?: number;
    timeframe?: any[];
}
export interface ListDimensionValueListMatch {
    dimension_id: string;
    filter?: any[];
    limit?: number;
    metric_filter?: any[];
    order_by?: string;
    order_direction?: string;
    page?: number;
    timeframe?: any[];
}
export interface ListDrmConfiguration {
    id: string;
}
export interface ListDrmConfigurationListMatch {
    limit?: number;
    page?: number;
}
export interface ListError {
    code: number;
    count: number;
    description: string;
    id: number;
    last_seen: string;
    message: string;
    notes: string;
    percentage: number;
    player_error_code: string;
}
export interface ListErrorListMatch {
    filter?: any[];
    metric_filter?: any[];
    timeframe?: any[];
}
export interface ListExport {
    data: any[];
    timeframe: any[];
    total_row_count: number;
}
export interface ListExportListMatch {
    data?: any[];
    timeframe?: any[];
    total_row_count?: number;
}
export interface ListFilter {
    data: Record<string, any>;
    timeframe: any[];
    total_row_count: number;
}
export interface ListFilterListMatch {
    data?: Record<string, any>;
    timeframe?: any[];
    total_row_count?: number;
}
export interface ListFilterValue {
    data: any[];
    timeframe: any[];
    total_row_count: number;
}
export interface ListFilterValueLoadMatch {
    filter_id: string;
    filter?: any[];
    limit?: number;
    page?: number;
    timeframe?: any[];
}
export interface ListIncident {
    affected_views: number;
    affected_views_per_hour: number;
    affected_views_per_hour_on_open: number;
    breakdowns: any[];
    description: string;
    error_description: string;
    id: string;
    impact: string;
    incident_key: string;
    measured_value: number;
    measured_value_on_close: number;
    measurement: string;
    notification_rules: any[];
    notifications: any[];
    resolved_at: string;
    sample_size: number;
    sample_size_unit: string;
    severity: string;
    started_at: string;
    status: string;
    threshold: number;
}
export interface ListIncidentListMatch {
    limit?: number;
    order_by?: string;
    order_direction?: string;
    page?: number;
    severity?: string;
    status?: string;
}
export interface ListInsight {
    filter_column: string;
    filter_value: string;
    metric: number;
    negative_impact_score: number;
    total_playing_time: number;
    total_views: number;
    total_watch_time: number;
}
export interface ListInsightListMatch {
    metric_id: string;
    filter?: any[];
    measurement?: string;
    metric_filter?: any[];
    order_direction?: string;
    timeframe?: any[];
}
export interface ListJob {
    created_at: number;
    id: string;
    links: Record<string, any>;
    status: string;
    updated_at: number;
    workflow: string;
}
export interface ListJobListMatch {
    asset_id?: string;
    limit?: number;
    page?: number;
    status?: any;
    workflow?: string;
}
export interface ListLiveStream {
    active_asset_id?: string;
    active_ingest_protocol?: string;
    audio_only?: boolean;
    created_at: string;
    embedded_subtitles?: any[];
    generated_subtitles?: any[];
    id: string;
    latency_mode: string;
    low_latency?: boolean;
    max_continuous_duration: number;
    meta?: Record<string, any>;
    new_asset_settings?: Record<string, any>;
    passthrough?: string;
    playback_ids?: any[];
    recent_asset_ids?: any[];
    reconnect_slate_url?: string;
    reconnect_window?: number;
    reduced_latency?: boolean;
    simulcast_targets?: any[];
    srt_passphrase?: string;
    status: string;
    stream_key: string;
    test?: boolean;
    use_slate_for_standard_latency?: boolean;
}
export interface ListLiveStreamListMatch {
    limit?: number;
    page?: number;
    status?: string;
    stream_key?: string;
}
export interface ListMonitoringDimension {
    display_name: string;
    name: string;
}
export interface ListMonitoringDimensionListMatch {
    display_name?: string;
    name?: string;
}
export interface ListMonitoringMetric {
    display_name: string;
    name: string;
}
export interface ListMonitoringMetricListMatch {
    display_name?: string;
    name?: string;
}
export interface ListPlaybackRestriction {
    created_at: string;
    id: string;
    referrer: Record<string, any>;
    updated_at: string;
    user_agent: Record<string, any>;
}
export interface ListPlaybackRestrictionListMatch {
    limit?: number;
    page?: number;
}
export interface ListRealTimeDimension {
    display_name: string;
    name: string;
}
export interface ListRealTimeDimensionListMatch {
    display_name?: string;
    name?: string;
}
export interface ListRealTimeMetric {
    display_name: string;
    name: string;
}
export interface ListRealTimeMetricListMatch {
    display_name?: string;
    name?: string;
}
export interface ListRelatedIncident {
    affected_views: number;
    affected_views_per_hour: number;
    affected_views_per_hour_on_open: number;
    breakdowns: any[];
    description: string;
    error_description: string;
    id: string;
    impact: string;
    incident_key: string;
    measured_value: number;
    measured_value_on_close: number;
    measurement: string;
    notification_rules: any[];
    notifications: any[];
    resolved_at: string;
    sample_size: number;
    sample_size_unit: string;
    severity: string;
    started_at: string;
    status: string;
    threshold: number;
}
export interface ListRelatedIncidentListMatch {
    incident_id: string;
    limit?: number;
    order_by?: string;
    order_direction?: string;
    page?: number;
}
export interface ListSigningKey {
    created_at: string;
    id: string;
    private_key?: string;
}
export interface ListSigningKeyListMatch {
    limit?: number;
    page?: number;
}
export interface ListSubviewBreakdownValue {
    breakdown_value: string;
    metric_value: number;
}
export interface ListSubviewBreakdownValueListMatch {
    subview_metric_id: string;
    subview_type: string;
    filter?: any[];
    group_by?: any[];
    limit?: number;
    page?: number;
    timeframe?: any[];
}
export interface ListSubviewComparisonValue {
    dimension_value: string;
    values: any[];
}
export interface ListSubviewComparisonValueListMatch {
    subview_metric_id: string;
    subview_type: string;
    breakdown_value_limit?: number;
    dimension: string;
    filter?: any[];
    group_by?: any[];
    timeframe?: any[];
    value: any[];
}
export interface ListSubviewDimension {
    subview: any[];
    view: any[];
}
export interface ListSubviewDimensionLoadMatch {
    subview_type: string;
}
export interface ListSubviewDimensionValue {
    data: any[];
    meta: any;
    timeframe: any[];
    total_row_count: number;
}
export interface ListSubviewDimensionValueLoadMatch {
    dimension_name: string;
    subview_metric_id: string;
    filter?: any[];
    limit?: number;
    order_by?: string;
    order_direction?: string;
    page?: number;
    query?: string;
    timeframe?: any[];
}
export interface ListTranscriptionVocabulary {
    created_at: string;
    id: string;
    name?: string;
    passthrough?: string;
    phrases?: any[];
    updated_at: string;
}
export interface ListTranscriptionVocabularyListMatch {
    limit?: number;
    page?: number;
}
export interface ListUpload {
    asset_id?: string;
    cors_origin: string;
    error?: Record<string, any>;
    id: string;
    new_asset_settings?: Record<string, any>;
    status: string;
    test?: boolean;
    timeout: number;
    url?: string;
}
export interface ListUploadListMatch {
    limit?: number;
    page?: number;
}
export interface ListUsageExport {
    date: string;
    download_url: string;
    download_url_expires_at: number;
    file_size: number;
}
export interface ListUsageExportListMatch {
    download_url_ttl?: number;
    limit?: number;
    page?: number;
    timeframe?: any[];
}
export interface ListVideoView {
    country_code: string;
    error_type_id: number;
    id: string;
    playback_failure: boolean;
    player_error_code: string;
    player_error_message: string;
    total_row_count: number;
    video_title: string;
    view_end: string;
    view_start: string;
    viewer_application_name: string;
    viewer_experience_score: number;
    viewer_os_family: string;
    watch_time: number;
}
export interface ListVideoViewListMatch {
    error_id?: number;
    filter?: any[];
    limit?: number;
    metric_filter?: any[];
    order_direction?: string;
    page?: number;
    timeframe?: any[];
    viewer_id?: string;
}
export interface ListVideoViewExport {
    export_date: string;
    files: any[];
}
export interface ListVideoViewExportListMatch {
    export_date?: string;
    files?: any[];
}
export interface ListWebhook {
    address: string;
    created_at: string;
    enabled: boolean;
    id: string;
    signing_secret?: string;
}
export interface ListWebhookListMatch {
    limit?: number;
    page?: number;
}
export interface LiveStream {
    active_asset_id?: string;
    active_ingest_protocol?: string;
    advanced_playback_policies?: any[];
    audio_only?: boolean;
    created_at: string;
    embedded_subtitles?: any[];
    generated_subtitles?: any[];
    id: string;
    latency_mode: string;
    low_latency?: boolean;
    max_continuous_duration: number;
    meta?: Record<string, any>;
    new_asset_settings?: Record<string, any>;
    passthrough?: string;
    playback_ids?: any[];
    playback_policies?: any[];
    playback_policy?: any[];
    recent_asset_ids?: any[];
    reconnect_slate_url?: string;
    reconnect_window?: number;
    reduced_latency?: boolean;
    simulcast_targets?: any[];
    srt_passphrase?: string;
    status: string;
    stream_key: string;
    test?: boolean;
    use_slate_for_standard_latency?: boolean;
}
export interface LiveStreamLoadMatch {
    id: string;
}
export interface LiveStreamCreateData {
    active_asset_id?: string;
    active_ingest_protocol?: string;
    advanced_playback_policies?: any[];
    audio_only?: boolean;
    created_at: string;
    embedded_subtitles?: any[];
    generated_subtitles?: any[];
    id: string;
    latency_mode: string;
    low_latency?: boolean;
    max_continuous_duration: number;
    meta?: Record<string, any>;
    new_asset_settings?: Record<string, any>;
    passthrough?: string;
    playback_ids?: any[];
    playback_policies?: any[];
    playback_policy?: any[];
    recent_asset_ids?: any[];
    reconnect_slate_url?: string;
    reconnect_window?: number;
    reduced_latency?: boolean;
    simulcast_targets?: any[];
    srt_passphrase?: string;
    status: string;
    stream_key: string;
    test?: boolean;
    use_slate_for_standard_latency?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface LiveStreamUpdateData {
    id: string;
    active_asset_id?: string;
    active_ingest_protocol?: string;
    advanced_playback_policies?: any[];
    audio_only?: boolean;
    created_at?: string;
    embedded_subtitles?: any[];
    generated_subtitles?: any[];
    latency_mode?: string;
    low_latency?: boolean;
    max_continuous_duration?: number;
    meta?: Record<string, any>;
    new_asset_settings?: Record<string, any>;
    passthrough?: string;
    playback_ids?: any[];
    playback_policies?: any[];
    playback_policy?: any[];
    recent_asset_ids?: any[];
    reconnect_slate_url?: string;
    reconnect_window?: number;
    reduced_latency?: boolean;
    simulcast_targets?: any[];
    srt_passphrase?: string;
    status?: string;
    stream_key?: string;
    test?: boolean;
    use_slate_for_standard_latency?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface LiveStreamRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface LiveStreamPlaybackId {
    drm_configuration_id?: string;
    id: string;
    policy: string;
}
export interface LiveStreamPlaybackIdLoadMatch {
    id: string;
    live_stream_id: string;
}
export interface MetricTimeseriesData {
    data: any[];
    meta: Record<string, any>;
    timeframe: any[];
    total_row_count: number;
}
export interface MetricTimeseriesDataListMatch {
    metric_id: string;
    filter?: any[];
    group_by?: string;
    measurement?: string;
    metric_filter?: any[];
    order_direction?: string;
    timeframe?: any[];
}
export interface Moderate {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface ModerateLoadMatch {
    id: string;
}
export interface ModerateCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface MonitoringBreakdown {
    concurrent_viewers: number;
    display_value?: string;
    metric_value: number;
    negative_impact: number;
    starting_up_viewers: number;
    value: string;
}
export interface MonitoringBreakdownListMatch {
    monitoring_metric_id: string;
    dimension?: string;
    filter?: any[];
    order_by?: string;
    order_direction?: string;
    timestamp?: number;
}
export interface MonitoringBreakdownTimeseries {
    date: string;
    values: any[];
}
export interface MonitoringBreakdownTimeseriesListMatch {
    monitoring_metric_id: string;
    dimension?: string;
    filter?: any[];
    limit?: number;
    order_by?: string;
    order_direction?: string;
    timeframe?: any[];
}
export interface MonitoringHistogramTimeseries {
    average: number;
    bucket_values: any[];
    max_percentage: number;
    median: number;
    p95: number;
    sum: number;
    timestamp: string;
}
export interface MonitoringHistogramTimeseriesListMatch {
    monitoring_histogram_metric_id: string;
    filter?: any[];
}
export interface MonitoringTimeseries {
    concurrent_viewers: number;
    date: string;
    value: number;
}
export interface MonitoringTimeseriesListMatch {
    monitoring_metric_id: string;
    filter?: any[];
    timestamp?: number;
}
export interface Overall {
    data: Record<string, any>;
    meta: Record<string, any>;
    timeframe: any[];
    total_row_count: number;
}
export interface OverallListMatch {
    metric_id: string;
    filter?: any[];
    measurement?: string;
    metric_filter?: any[];
    timeframe?: any[];
}
export interface PlaybackRestriction {
    created_at: string;
    id: string;
    referrer: Record<string, any>;
    updated_at: string;
    user_agent: Record<string, any>;
}
export interface PlaybackRestrictionLoadMatch {
    id: string;
}
export interface PlaybackRestrictionCreateData {
    created_at: string;
    id: string;
    referrer: Record<string, any>;
    updated_at: string;
    user_agent: Record<string, any>;
}
export interface PlaybackRestrictionUpdateData {
    playback_restriction_id: string;
    created_at?: string;
    id?: string;
    referrer?: Record<string, any>;
    updated_at?: string;
    user_agent?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface PlaybackRestrictionRemoveMatch {
    id: string;
}
export interface RealTimeBreakdown {
    concurrent_viewers: number;
    display_value?: string;
    metric_value: number;
    negative_impact: number;
    starting_up_viewers: number;
    value: string;
}
export interface RealTimeBreakdownListMatch {
    realtime_metric_id: string;
    dimension?: string;
    filter?: any[];
    order_by?: string;
    order_direction?: string;
    timestamp?: number;
}
export interface RealTimeHistogramTimeseries {
    average: number;
    bucket_values: any[];
    max_percentage: number;
    median: number;
    p95: number;
    sum: number;
    timestamp: string;
}
export interface RealTimeHistogramTimeseriesListMatch {
    realtime_histogram_metric_id: string;
    filter?: any[];
}
export interface RealTimeTimeseries {
    concurrent_viewers: number;
    date: string;
    value: number;
}
export interface RealTimeTimeseriesListMatch {
    realtime_metric_id: string;
    filter?: any[];
    timestamp?: number;
}
export interface SignalLiveStreamComplete {
    data?: Record<string, any>;
}
export interface SignalLiveStreamCompleteUpdateData {
    live_stream_id: string;
    data?: Record<string, any>;
}
export interface SigningKey {
    created_at: string;
    data?: Record<string, any>;
    id: string;
    private_key?: string;
}
export interface SigningKeyLoadMatch {
    id: string;
}
export interface SigningKeyCreateData {
    created_at: string;
    data?: Record<string, any>;
    id: string;
    private_key?: string;
}
export interface SigningKeyRemoveMatch {
    id: string;
}
export interface SimulcastTarget {
    error_severity?: string;
    id: string;
    passthrough?: string;
    status: string;
    stream_key?: string;
    url: string;
}
export interface SimulcastTargetLoadMatch {
    id: string;
    live_stream_id: string;
}
export interface SimulcastTargetCreateData {
    live_stream_id: string;
    error_severity?: string;
    id: string;
    passthrough?: string;
    status: string;
    stream_key?: string;
    url: string;
}
export interface StaticRendition {
    passthrough?: string;
    resolution: string;
}
export interface StaticRenditionCreateData {
    asset_id: string;
    passthrough?: string;
    resolution: string;
}
export interface SubviewBreakdownTimeseries {
    date: string;
    status: string;
    values: any[];
}
export interface SubviewBreakdownTimeseriesListMatch {
    subview_metric_id: string;
    subview_type: string;
    breakdown_value_limit?: number;
    filter?: any[];
    group_by?: any[];
    time_granularity?: string;
    timeframe?: any[];
}
export interface SubviewOverallValue {
    data: Record<string, any>;
    meta: Record<string, any>;
    timeframe: any[];
    total_row_count: number;
}
export interface SubviewOverallValueListMatch {
    subview_metric_id: string;
    subview_type: string;
    filter?: any[];
    timeframe?: any[];
}
export interface Summarize {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface SummarizeLoadMatch {
    id: string;
}
export interface SummarizeCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface TranscriptionVocabulary {
    created_at: string;
    id: string;
    name?: string;
    passthrough?: string;
    phrases?: any[];
    updated_at: string;
}
export interface TranscriptionVocabularyLoadMatch {
    id: string;
}
export interface TranscriptionVocabularyCreateData {
    created_at: string;
    id: string;
    name?: string;
    passthrough?: string;
    phrases?: any[];
    updated_at: string;
}
export interface TranscriptionVocabularyUpdateData {
    id: string;
    created_at?: string;
    name?: string;
    passthrough?: string;
    phrases?: any[];
    updated_at?: string;
}
export interface TranscriptionVocabularyRemoveMatch {
    id: string;
}
export interface TranslateAudio {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs?: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface TranslateAudioLoadMatch {
    id: string;
}
export interface TranslateAudioCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs?: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface TranslateCaption {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs?: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface TranslateCaptionLoadMatch {
    id: string;
}
export interface TranslateCaptionCreateData {
    created_at: number;
    directive: Record<string, any>;
    errors?: any[];
    id: string;
    outputs?: Record<string, any>;
    parameters: Record<string, any>;
    passthrough?: string;
    resources: Record<string, any>;
    status: string;
    units_consumed: number;
    updated_at: number;
    workflow: string;
}
export interface UpdateAssetTrack {
    auto_language_confidence?: number;
    closed_captions?: boolean;
    duration?: number;
    id?: string;
    language_code?: string;
    max_channels?: number;
    max_frame_rate?: number;
    max_height?: number;
    max_width?: number;
    name?: string;
    passthrough?: string;
    primary?: boolean;
    status?: string;
    text_source?: string;
    text_type?: string;
    type?: string;
}
export interface UpdateAssetTrackUpdateData {
    asset_id: string;
    id: string;
    auto_language_confidence?: number;
    closed_captions?: boolean;
    duration?: number;
    language_code?: string;
    max_channels?: number;
    max_frame_rate?: number;
    max_height?: number;
    max_width?: number;
    name?: string;
    passthrough?: string;
    primary?: boolean;
    status?: string;
    text_source?: string;
    text_type?: string;
    type?: string;
}
export interface Upload {
    asset_id?: string;
    cors_origin: string;
    error?: Record<string, any>;
    id: string;
    new_asset_settings?: Record<string, any>;
    status: string;
    test?: boolean;
    timeout: number;
    url?: string;
}
export interface UploadLoadMatch {
    id: string;
}
export interface UploadCreateData {
    asset_id?: string;
    cors_origin: string;
    error?: Record<string, any>;
    id: string;
    new_asset_settings?: Record<string, any>;
    status: string;
    test?: boolean;
    timeout: number;
    url?: string;
}
export interface UploadUpdateData {
    upload_id: string;
    asset_id?: string;
    cors_origin?: string;
    error?: Record<string, any>;
    id?: string;
    new_asset_settings?: Record<string, any>;
    status?: string;
    test?: boolean;
    timeout?: number;
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface UrlSigningKey {
    id?: string;
}
export interface UrlSigningKeyRemoveMatch {
    id: string;
}
export interface VideoView {
    data: Record<string, any>;
    id?: string;
    timeframe: any[];
    total_row_count: number;
}
export interface VideoViewLoadMatch {
    id: string;
}
export interface Webhook {
    address: string;
    created_at: string;
    enabled: boolean;
    id: string;
    signing_secret?: string;
}
export interface WebhookLoadMatch {
    id: string;
}
export interface WebhookCreateData {
    address: string;
    created_at: string;
    enabled: boolean;
    id: string;
    signing_secret?: string;
}
export interface WebhookUpdateData {
    id: string;
    address?: string;
    created_at?: string;
    enabled?: boolean;
    signing_secret?: string;
}
export interface WebhookRemoveMatch {
    id: string;
}
export interface WhoAmI {
    access_token_name: string;
    environment_id: string;
    environment_name: string;
    environment_type: string;
    organization_id: string;
    organization_name: string;
    permissions: any[];
}
export interface WhoAmILoadMatch {
    access_token_name?: string;
    environment_id?: string;
    environment_name?: string;
    environment_type?: string;
    organization_id?: string;
    organization_name?: string;
    permissions?: any[];
}
