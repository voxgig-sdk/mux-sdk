-- Typed models for the Mux SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Annotation
---@field date string
---@field id string
---@field note string
---@field sub_property_id? string

---@class AnnotationLoadMatch
---@field id string

---@class AnnotationCreateData
---@field date string
---@field id string
---@field note string
---@field sub_property_id? string

---@class AnnotationUpdateData
---@field id string
---@field date? string
---@field note? string
---@field sub_property_id? string

---@class AnnotationRemoveMatch
---@field id string

---@class AskQuestion
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class AskQuestionLoadMatch
---@field id string

---@class AskQuestionCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class Asset
---@field aspect_ratio? string
---@field created_at string
---@field data? table
---@field directives? table
---@field duration? number
---@field encoding_tier string
---@field errors? table
---@field generate_shots? boolean
---@field id string
---@field ingest_type? string
---@field is_live? boolean
---@field live_stream_id? string
---@field master? table
---@field master_access string
---@field max_resolution_tier string
---@field max_stored_frame_rate? number
---@field max_stored_resolution? string
---@field meta? table
---@field mp4_support? string
---@field non_standard_input_reasons? table
---@field normalize_audio? boolean
---@field passthrough? string
---@field playback_ids? table
---@field progress table
---@field recording_times? table
---@field resolution_tier? string
---@field shots table
---@field source_asset_id? string
---@field static_renditions? table
---@field status string
---@field test? boolean
---@field thumbnail_time? number
---@field tracks? table
---@field upload_id? string
---@field video_quality? string

---@class AssetLoadMatch
---@field id string

---@class AssetCreateData
---@field aspect_ratio? string
---@field created_at string
---@field data? table
---@field directives? table
---@field duration? number
---@field encoding_tier string
---@field errors? table
---@field generate_shots? boolean
---@field id string
---@field ingest_type? string
---@field is_live? boolean
---@field live_stream_id? string
---@field master? table
---@field master_access string
---@field max_resolution_tier string
---@field max_stored_frame_rate? number
---@field max_stored_resolution? string
---@field meta? table
---@field mp4_support? string
---@field non_standard_input_reasons? table
---@field normalize_audio? boolean
---@field passthrough? string
---@field playback_ids? table
---@field progress table
---@field recording_times? table
---@field resolution_tier? string
---@field shots table
---@field source_asset_id? string
---@field static_renditions? table
---@field status string
---@field test? boolean
---@field thumbnail_time? number
---@field tracks? table
---@field upload_id? string
---@field video_quality? string

---@class AssetUpdateData
---@field id string
---@field aspect_ratio? string
---@field created_at? string
---@field data? table
---@field directives? table
---@field duration? number
---@field encoding_tier? string
---@field errors? table
---@field generate_shots? boolean
---@field ingest_type? string
---@field is_live? boolean
---@field live_stream_id? string
---@field master? table
---@field master_access? string
---@field max_resolution_tier? string
---@field max_stored_frame_rate? number
---@field max_stored_resolution? string
---@field meta? table
---@field mp4_support? string
---@field non_standard_input_reasons? table
---@field normalize_audio? boolean
---@field passthrough? string
---@field playback_ids? table
---@field progress? table
---@field recording_times? table
---@field resolution_tier? string
---@field shots? table
---@field source_asset_id? string
---@field static_renditions? table
---@field status? string
---@field test? boolean
---@field thumbnail_time? number
---@field tracks? table
---@field upload_id? string
---@field video_quality? string

---@class AssetRemoveMatch
---@field id string

---@class AssetOrLiveStreamId
---@field id string
---@field object table
---@field policy string

---@class AssetOrLiveStreamIdLoadMatch
---@field playback_id string

---@class AssetPlaybackId
---@field drm_configuration_id? string
---@field id string
---@field policy string

---@class AssetPlaybackIdLoadMatch
---@field asset_id string
---@field id string

---@class AssetShot
---@field errors? table
---@field shots_manifest_url? string
---@field status string

---@class AssetShotLoadMatch
---@field asset_id string

---@class CreatePlaybackId
---@field drm_configuration_id? string
---@field policy? string

---@class CreatePlaybackIdCreateData
---@field asset_id string
---@field drm_configuration_id? string
---@field policy? string

---@class CreateTrack
---@field closed_captions? boolean
---@field language_code string
---@field name? string
---@field passthrough? string
---@field text_type? string
---@field type string
---@field url string

---@class CreateTrackCreateData
---@field asset_id string
---@field closed_captions? boolean
---@field language_code string
---@field name? string
---@field passthrough? string
---@field text_type? string
---@field type string
---@field url string

---@class Directive
---@field created_at number
---@field id string
---@field name string
---@field resources table
---@field subject table
---@field updated_at number
---@field workflows table

---@class DirectiveLoadMatch
---@field id string

---@class DirectiveListMatch
---@field limit? number
---@field page? number

---@class DirectiveCreateData
---@field created_at number
---@field id string
---@field name string
---@field resources table
---@field subject table
---@field updated_at number
---@field workflows table

---@class DirectiveRemoveMatch
---@field id string

---@class DirectiveRunDetail
---@field completed_at number|nil
---@field node_states table
---@field run_id string
---@field started_at number
---@field status string
---@field subject_id string

---@class DirectiveRunDetailLoadMatch
---@field directive_id string
---@field run_id string

---@class DirectiveRunList
---@field completed_at number|nil
---@field node_states table
---@field run_id string
---@field started_at number
---@field status string
---@field subject_id string

---@class DirectiveRunListListMatch
---@field directive_id string
---@field limit? number
---@field page? number

---@class DrmConfiguration
---@field id string

---@class DrmConfigurationLoadMatch
---@field id string

---@class EditCaption
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class EditCaptionLoadMatch
---@field id string

---@class EditCaptionCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class EngagementHeatmap
---@field data table
---@field timeframe table
---@field total_row_count number

---@class EngagementHeatmapListMatch
---@field asset_id string
---@field timeframe? table

---@class EngagementHotspot
---@field data table
---@field timeframe table
---@field total_row_count number

---@class EngagementHotspotListMatch
---@field asset_id string
---@field limit? number
---@field order_direction? string
---@field timeframe? table

---@class FindBestThumbnail
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class FindBestThumbnailLoadMatch
---@field id string

---@class FindBestThumbnailCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class FindKeyMoment
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class FindKeyMomentLoadMatch
---@field id string

---@class FindKeyMomentCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class FindScene
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class FindSceneLoadMatch
---@field id string

---@class FindSceneCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class GenerateAssetShot
---@field data? table

---@class GenerateAssetShotCreateData
---@field asset_id string
---@field data? table

---@class GenerateChapter
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class GenerateChapterLoadMatch
---@field id string

---@class GenerateChapterCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class GenerateEngagementInsight
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class GenerateEngagementInsightLoadMatch
---@field id string

---@class GenerateEngagementInsightCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class GeneratePremiumCaption
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class GeneratePremiumCaptionLoadMatch
---@field id string

---@class GeneratePremiumCaptionCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class GenerateTrackSubtitle
---@field generated_subtitles table

---@class GenerateTrackSubtitleCreateData
---@field asset_id string
---@field track_id string
---@field generated_subtitles table

---@class Incident
---@field data table
---@field id? string
---@field timeframe table
---@field total_row_count number

---@class IncidentLoadMatch
---@field id string

---@class InputInfo
---@field file? table
---@field settings? table

---@class InputInfoListMatch
---@field asset_id string

---@class JobSummary
---@field created_at number
---@field id string
---@field links table
---@field status string
---@field updated_at number
---@field workflow string

---@class JobSummaryCreateData
---@field job_id string
---@field created_at number
---@field id string
---@field links table
---@field status string
---@field updated_at number
---@field workflow string

---@class ListAllMetricValue
---@field ended_views? number
---@field items? table
---@field metric? string
---@field name string
---@field started_views? number
---@field total_playing_time? number
---@field type? string
---@field unique_viewers? number
---@field value? number
---@field view_count? number
---@field watch_time? number

---@class ListAllMetricValueListMatch
---@field dimension? string
---@field filter? table
---@field metric_filter? table
---@field timeframe? table
---@field value? string

---@class ListAnnotation
---@field date string
---@field id string
---@field note string
---@field sub_property_id? string

---@class ListAnnotationListMatch
---@field limit? number
---@field order_direction? string
---@field page? number
---@field timeframe? table

---@class ListAsset
---@field aspect_ratio? string
---@field created_at string
---@field directives? table
---@field duration? number
---@field encoding_tier string
---@field errors? table
---@field generate_shots? boolean
---@field id string
---@field ingest_type? string
---@field is_live? boolean
---@field live_stream_id? string
---@field master? table
---@field master_access string
---@field max_resolution_tier string
---@field max_stored_frame_rate? number
---@field max_stored_resolution? string
---@field meta? table
---@field mp4_support? string
---@field non_standard_input_reasons? table
---@field normalize_audio? boolean
---@field passthrough? string
---@field playback_ids? table
---@field progress table
---@field recording_times? table
---@field resolution_tier? string
---@field shots table
---@field source_asset_id? string
---@field static_renditions? table
---@field status string
---@field test? boolean
---@field thumbnail_time? number
---@field tracks? table
---@field upload_id? string
---@field video_quality? string

---@class ListAssetListMatch
---@field cursor? string
---@field limit? number
---@field live_stream_id? string
---@field page? number
---@field upload_id? string

---@class ListBreakdownValue
---@field field string
---@field negative_impact number
---@field total_playing_time number
---@field total_watch_time number
---@field value number
---@field views number

---@class ListBreakdownValueListMatch
---@field metric_id string
---@field filter? table
---@field group_by? string
---@field limit? number
---@field measurement? string
---@field metric_filter? table
---@field order_by? string
---@field order_direction? string
---@field page? number
---@field timeframe? table

---@class ListDeliveryUsage
---@field asset_duration number
---@field asset_encoding_tier string
---@field asset_id string
---@field asset_resolution_tier string
---@field asset_state string
---@field asset_video_quality? string
---@field created_at string
---@field deleted_at? string
---@field delivered_seconds number
---@field delivered_seconds_by_resolution table
---@field live_stream_id? string
---@field passthrough? string

---@class ListDeliveryUsageListMatch
---@field asset_id? string
---@field limit? number
---@field live_stream_id? string
---@field page? number
---@field timeframe? table

---@class ListDimension
---@field data table
---@field timeframe table
---@field total_row_count number

---@class ListDimensionListMatch
---@field data? table
---@field timeframe? table
---@field total_row_count? number

---@class ListDimensionValue
---@field data table
---@field timeframe table
---@field total_count number
---@field total_row_count number
---@field value string

---@class ListDimensionValueLoadMatch
---@field dimension_id string
---@field filter? table
---@field limit? number
---@field metric_filter? table
---@field page? number
---@field timeframe? table

---@class ListDimensionValueListMatch
---@field dimension_id string
---@field filter? table
---@field limit? number
---@field metric_filter? table
---@field order_by? string
---@field order_direction? string
---@field page? number
---@field timeframe? table

---@class ListDrmConfiguration
---@field id string

---@class ListDrmConfigurationListMatch
---@field limit? number
---@field page? number

---@class ListError
---@field code number
---@field count number
---@field description string
---@field id number
---@field last_seen string
---@field message string
---@field notes string
---@field percentage number
---@field player_error_code string

---@class ListErrorListMatch
---@field filter? table
---@field metric_filter? table
---@field timeframe? table

---@class ListExport
---@field data table
---@field timeframe table
---@field total_row_count number

---@class ListExportListMatch
---@field data? table
---@field timeframe? table
---@field total_row_count? number

---@class ListFilter
---@field data table
---@field timeframe table
---@field total_row_count number

---@class ListFilterListMatch
---@field data? table
---@field timeframe? table
---@field total_row_count? number

---@class ListFilterValue
---@field data table
---@field timeframe table
---@field total_row_count number

---@class ListFilterValueLoadMatch
---@field filter_id string
---@field filter? table
---@field limit? number
---@field page? number
---@field timeframe? table

---@class ListIncident
---@field affected_views number
---@field affected_views_per_hour number
---@field affected_views_per_hour_on_open number
---@field breakdowns table
---@field description string
---@field error_description string
---@field id string
---@field impact string
---@field incident_key string
---@field measured_value number
---@field measured_value_on_close number
---@field measurement string
---@field notification_rules table
---@field notifications table
---@field resolved_at string
---@field sample_size number
---@field sample_size_unit string
---@field severity string
---@field started_at string
---@field status string
---@field threshold number

---@class ListIncidentListMatch
---@field limit? number
---@field order_by? string
---@field order_direction? string
---@field page? number
---@field severity? string
---@field status? string

---@class ListInsight
---@field filter_column string
---@field filter_value string
---@field metric number
---@field negative_impact_score number
---@field total_playing_time number
---@field total_views number
---@field total_watch_time number

---@class ListInsightListMatch
---@field metric_id string
---@field filter? table
---@field measurement? string
---@field metric_filter? table
---@field order_direction? string
---@field timeframe? table

---@class ListJob
---@field created_at number
---@field id string
---@field links table
---@field status string
---@field updated_at number
---@field workflow string

---@class ListJobListMatch
---@field asset_id? string
---@field limit? number
---@field page? number
---@field status? any
---@field workflow? string

---@class ListLiveStream
---@field active_asset_id? string
---@field active_ingest_protocol? string
---@field audio_only? boolean
---@field created_at string
---@field embedded_subtitles? table
---@field generated_subtitles? table
---@field id string
---@field latency_mode string
---@field low_latency? boolean
---@field max_continuous_duration number
---@field meta? table
---@field new_asset_settings? table
---@field passthrough? string
---@field playback_ids? table
---@field recent_asset_ids? table
---@field reconnect_slate_url? string
---@field reconnect_window? number
---@field reduced_latency? boolean
---@field simulcast_targets? table
---@field srt_passphrase? string
---@field status string
---@field stream_key string
---@field test? boolean
---@field use_slate_for_standard_latency? boolean

---@class ListLiveStreamListMatch
---@field limit? number
---@field page? number
---@field status? string
---@field stream_key? string

---@class ListMonitoringDimension
---@field display_name string
---@field name string

---@class ListMonitoringDimensionListMatch
---@field display_name? string
---@field name? string

---@class ListMonitoringMetric
---@field display_name string
---@field name string

---@class ListMonitoringMetricListMatch
---@field display_name? string
---@field name? string

---@class ListPlaybackRestriction
---@field created_at string
---@field id string
---@field referrer table
---@field updated_at string
---@field user_agent table

---@class ListPlaybackRestrictionListMatch
---@field limit? number
---@field page? number

---@class ListRealTimeDimension
---@field display_name string
---@field name string

---@class ListRealTimeDimensionListMatch
---@field display_name? string
---@field name? string

---@class ListRealTimeMetric
---@field display_name string
---@field name string

---@class ListRealTimeMetricListMatch
---@field display_name? string
---@field name? string

---@class ListRelatedIncident
---@field affected_views number
---@field affected_views_per_hour number
---@field affected_views_per_hour_on_open number
---@field breakdowns table
---@field description string
---@field error_description string
---@field id string
---@field impact string
---@field incident_key string
---@field measured_value number
---@field measured_value_on_close number
---@field measurement string
---@field notification_rules table
---@field notifications table
---@field resolved_at string
---@field sample_size number
---@field sample_size_unit string
---@field severity string
---@field started_at string
---@field status string
---@field threshold number

---@class ListRelatedIncidentListMatch
---@field incident_id string
---@field limit? number
---@field order_by? string
---@field order_direction? string
---@field page? number

---@class ListSigningKey
---@field created_at string
---@field id string
---@field private_key? string

---@class ListSigningKeyListMatch
---@field limit? number
---@field page? number

---@class ListSubviewBreakdownValue
---@field breakdown_value string
---@field metric_value number

---@class ListSubviewBreakdownValueListMatch
---@field subview_metric_id string
---@field subview_type string
---@field filter? table
---@field group_by? table
---@field limit? number
---@field page? number
---@field timeframe? table

---@class ListSubviewComparisonValue
---@field dimension_value string
---@field values table

---@class ListSubviewComparisonValueListMatch
---@field subview_metric_id string
---@field subview_type string
---@field breakdown_value_limit? number
---@field dimension string
---@field filter? table
---@field group_by? table
---@field timeframe? table
---@field value table

---@class ListSubviewDimension
---@field subview table
---@field view table

---@class ListSubviewDimensionLoadMatch
---@field subview_type string

---@class ListSubviewDimensionValue
---@field data table
---@field meta any
---@field timeframe table
---@field total_row_count number

---@class ListSubviewDimensionValueLoadMatch
---@field dimension_name string
---@field subview_metric_id string
---@field filter? table
---@field limit? number
---@field order_by? string
---@field order_direction? string
---@field page? number
---@field query? string
---@field timeframe? table

---@class ListTranscriptionVocabulary
---@field created_at string
---@field id string
---@field name? string
---@field passthrough? string
---@field phrases? table
---@field updated_at string

---@class ListTranscriptionVocabularyListMatch
---@field limit? number
---@field page? number

---@class ListUpload
---@field asset_id? string
---@field cors_origin string
---@field error? table
---@field id string
---@field new_asset_settings? table
---@field status string
---@field test? boolean
---@field timeout number
---@field url? string

---@class ListUploadListMatch
---@field limit? number
---@field page? number

---@class ListUsageExport
---@field date string
---@field download_url string
---@field download_url_expires_at number
---@field file_size number

---@class ListUsageExportListMatch
---@field download_url_ttl? number
---@field limit? number
---@field page? number
---@field timeframe? table

---@class ListVideoView
---@field country_code string
---@field error_type_id number
---@field id string
---@field playback_failure boolean
---@field player_error_code string
---@field player_error_message string
---@field total_row_count number
---@field video_title string
---@field view_end string
---@field view_start string
---@field viewer_application_name string
---@field viewer_experience_score number
---@field viewer_os_family string
---@field watch_time number

---@class ListVideoViewListMatch
---@field error_id? number
---@field filter? table
---@field limit? number
---@field metric_filter? table
---@field order_direction? string
---@field page? number
---@field timeframe? table
---@field viewer_id? string

---@class ListVideoViewExport
---@field export_date string
---@field files table

---@class ListVideoViewExportListMatch
---@field export_date? string
---@field files? table

---@class ListWebhook
---@field address string
---@field created_at string
---@field enabled boolean
---@field id string
---@field signing_secret? string

---@class ListWebhookListMatch
---@field limit? number
---@field page? number

---@class LiveStream
---@field active_asset_id? string
---@field active_ingest_protocol? string
---@field advanced_playback_policies? table
---@field audio_only? boolean
---@field created_at string
---@field embedded_subtitles? table
---@field generated_subtitles? table
---@field id string
---@field latency_mode string
---@field low_latency? boolean
---@field max_continuous_duration number
---@field meta? table
---@field new_asset_settings? table
---@field passthrough? string
---@field playback_ids? table
---@field playback_policies? table
---@field playback_policy? table
---@field recent_asset_ids? table
---@field reconnect_slate_url? string
---@field reconnect_window? number
---@field reduced_latency? boolean
---@field simulcast_targets? table
---@field srt_passphrase? string
---@field status string
---@field stream_key string
---@field test? boolean
---@field use_slate_for_standard_latency? boolean

---@class LiveStreamLoadMatch
---@field id string

---@class LiveStreamCreateData
---@field active_asset_id? string
---@field active_ingest_protocol? string
---@field advanced_playback_policies? table
---@field audio_only? boolean
---@field created_at string
---@field embedded_subtitles? table
---@field generated_subtitles? table
---@field id string
---@field latency_mode string
---@field low_latency? boolean
---@field max_continuous_duration number
---@field meta? table
---@field new_asset_settings? table
---@field passthrough? string
---@field playback_ids? table
---@field playback_policies? table
---@field playback_policy? table
---@field recent_asset_ids? table
---@field reconnect_slate_url? string
---@field reconnect_window? number
---@field reduced_latency? boolean
---@field simulcast_targets? table
---@field srt_passphrase? string
---@field status string
---@field stream_key string
---@field test? boolean
---@field use_slate_for_standard_latency? boolean

---@class LiveStreamUpdateData
---@field id string
---@field active_asset_id? string
---@field active_ingest_protocol? string
---@field advanced_playback_policies? table
---@field audio_only? boolean
---@field created_at? string
---@field embedded_subtitles? table
---@field generated_subtitles? table
---@field latency_mode? string
---@field low_latency? boolean
---@field max_continuous_duration? number
---@field meta? table
---@field new_asset_settings? table
---@field passthrough? string
---@field playback_ids? table
---@field playback_policies? table
---@field playback_policy? table
---@field recent_asset_ids? table
---@field reconnect_slate_url? string
---@field reconnect_window? number
---@field reduced_latency? boolean
---@field simulcast_targets? table
---@field srt_passphrase? string
---@field status? string
---@field stream_key? string
---@field test? boolean
---@field use_slate_for_standard_latency? boolean

---@class LiveStreamRemoveMatch
---@field id string

---@class LiveStreamPlaybackId
---@field drm_configuration_id? string
---@field id string
---@field policy string

---@class LiveStreamPlaybackIdLoadMatch
---@field id string
---@field live_stream_id string

---@class MetricTimeseriesData
---@field data table
---@field meta table
---@field timeframe table
---@field total_row_count number

---@class MetricTimeseriesDataListMatch
---@field metric_id string
---@field filter? table
---@field group_by? string
---@field measurement? string
---@field metric_filter? table
---@field order_direction? string
---@field timeframe? table

---@class Moderate
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class ModerateLoadMatch
---@field id string

---@class ModerateCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class MonitoringBreakdown
---@field concurrent_viewers number
---@field display_value? string
---@field metric_value number
---@field negative_impact number
---@field starting_up_viewers number
---@field value string

---@class MonitoringBreakdownListMatch
---@field monitoring_metric_id string
---@field dimension? string
---@field filter? table
---@field order_by? string
---@field order_direction? string
---@field timestamp? number

---@class MonitoringBreakdownTimeseries
---@field date string
---@field values table

---@class MonitoringBreakdownTimeseriesListMatch
---@field monitoring_metric_id string
---@field dimension? string
---@field filter? table
---@field limit? number
---@field order_by? string
---@field order_direction? string
---@field timeframe? table

---@class MonitoringHistogramTimeseries
---@field average number
---@field bucket_values table
---@field max_percentage number
---@field median number
---@field p95 number
---@field sum number
---@field timestamp string

---@class MonitoringHistogramTimeseriesListMatch
---@field monitoring_histogram_metric_id string
---@field filter? table

---@class MonitoringTimeseries
---@field concurrent_viewers number
---@field date string
---@field value number

---@class MonitoringTimeseriesListMatch
---@field monitoring_metric_id string
---@field filter? table
---@field timestamp? number

---@class Overall
---@field data table
---@field meta table
---@field timeframe table
---@field total_row_count number

---@class OverallListMatch
---@field metric_id string
---@field filter? table
---@field measurement? string
---@field metric_filter? table
---@field timeframe? table

---@class PlaybackRestriction
---@field created_at string
---@field id string
---@field referrer table
---@field updated_at string
---@field user_agent table

---@class PlaybackRestrictionLoadMatch
---@field id string

---@class PlaybackRestrictionCreateData
---@field created_at string
---@field id string
---@field referrer table
---@field updated_at string
---@field user_agent table

---@class PlaybackRestrictionUpdateData
---@field playback_restriction_id string
---@field created_at? string
---@field id? string
---@field referrer? table
---@field updated_at? string
---@field user_agent? table

---@class PlaybackRestrictionRemoveMatch
---@field id string

---@class RealTimeBreakdown
---@field concurrent_viewers number
---@field display_value? string
---@field metric_value number
---@field negative_impact number
---@field starting_up_viewers number
---@field value string

---@class RealTimeBreakdownListMatch
---@field realtime_metric_id string
---@field dimension? string
---@field filter? table
---@field order_by? string
---@field order_direction? string
---@field timestamp? number

---@class RealTimeHistogramTimeseries
---@field average number
---@field bucket_values table
---@field max_percentage number
---@field median number
---@field p95 number
---@field sum number
---@field timestamp string

---@class RealTimeHistogramTimeseriesListMatch
---@field realtime_histogram_metric_id string
---@field filter? table

---@class RealTimeTimeseries
---@field concurrent_viewers number
---@field date string
---@field value number

---@class RealTimeTimeseriesListMatch
---@field realtime_metric_id string
---@field filter? table
---@field timestamp? number

---@class SignalLiveStreamComplete
---@field data? table

---@class SignalLiveStreamCompleteUpdateData
---@field live_stream_id string
---@field data? table

---@class SigningKey
---@field created_at string
---@field data? table
---@field id string
---@field private_key? string

---@class SigningKeyLoadMatch
---@field id string

---@class SigningKeyCreateData
---@field created_at string
---@field data? table
---@field id string
---@field private_key? string

---@class SigningKeyRemoveMatch
---@field id string

---@class SimulcastTarget
---@field error_severity? string
---@field id string
---@field passthrough? string
---@field status string
---@field stream_key? string
---@field url string

---@class SimulcastTargetLoadMatch
---@field id string
---@field live_stream_id string

---@class SimulcastTargetCreateData
---@field live_stream_id string
---@field error_severity? string
---@field id string
---@field passthrough? string
---@field status string
---@field stream_key? string
---@field url string

---@class StaticRendition
---@field passthrough? string
---@field resolution string

---@class StaticRenditionCreateData
---@field asset_id string
---@field passthrough? string
---@field resolution string

---@class SubviewBreakdownTimeseries
---@field date string
---@field status string
---@field values table

---@class SubviewBreakdownTimeseriesListMatch
---@field subview_metric_id string
---@field subview_type string
---@field breakdown_value_limit? number
---@field filter? table
---@field group_by? table
---@field time_granularity? string
---@field timeframe? table

---@class SubviewOverallValue
---@field data table
---@field meta table
---@field timeframe table
---@field total_row_count number

---@class SubviewOverallValueListMatch
---@field subview_metric_id string
---@field subview_type string
---@field filter? table
---@field timeframe? table

---@class Summarize
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class SummarizeLoadMatch
---@field id string

---@class SummarizeCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class TranscriptionVocabulary
---@field created_at string
---@field id string
---@field name? string
---@field passthrough? string
---@field phrases? table
---@field updated_at string

---@class TranscriptionVocabularyLoadMatch
---@field id string

---@class TranscriptionVocabularyCreateData
---@field created_at string
---@field id string
---@field name? string
---@field passthrough? string
---@field phrases? table
---@field updated_at string

---@class TranscriptionVocabularyUpdateData
---@field id string
---@field created_at? string
---@field name? string
---@field passthrough? string
---@field phrases? table
---@field updated_at? string

---@class TranscriptionVocabularyRemoveMatch
---@field id string

---@class TranslateAudio
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs? table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class TranslateAudioLoadMatch
---@field id string

---@class TranslateAudioCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs? table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class TranslateCaption
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs? table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class TranslateCaptionLoadMatch
---@field id string

---@class TranslateCaptionCreateData
---@field created_at number
---@field directive table
---@field errors? table
---@field id string
---@field outputs? table
---@field parameters table
---@field passthrough? string
---@field resources table
---@field status string
---@field units_consumed number
---@field updated_at number
---@field workflow string

---@class UpdateAssetTrack
---@field auto_language_confidence? number
---@field closed_captions? boolean
---@field duration? number
---@field id? string
---@field language_code? string
---@field max_channels? number
---@field max_frame_rate? number
---@field max_height? number
---@field max_width? number
---@field name? string
---@field passthrough? string
---@field primary? boolean
---@field status? string
---@field text_source? string
---@field text_type? string
---@field type? string

---@class UpdateAssetTrackUpdateData
---@field asset_id string
---@field id string
---@field auto_language_confidence? number
---@field closed_captions? boolean
---@field duration? number
---@field language_code? string
---@field max_channels? number
---@field max_frame_rate? number
---@field max_height? number
---@field max_width? number
---@field name? string
---@field passthrough? string
---@field primary? boolean
---@field status? string
---@field text_source? string
---@field text_type? string
---@field type? string

---@class Upload
---@field asset_id? string
---@field cors_origin string
---@field error? table
---@field id string
---@field new_asset_settings? table
---@field status string
---@field test? boolean
---@field timeout number
---@field url? string

---@class UploadLoadMatch
---@field id string

---@class UploadCreateData
---@field asset_id? string
---@field cors_origin string
---@field error? table
---@field id string
---@field new_asset_settings? table
---@field status string
---@field test? boolean
---@field timeout number
---@field url? string

---@class UploadUpdateData
---@field upload_id string
---@field asset_id? string
---@field cors_origin? string
---@field error? table
---@field id? string
---@field new_asset_settings? table
---@field status? string
---@field test? boolean
---@field timeout? number
---@field url? string

---@class UrlSigningKey
---@field id? string

---@class UrlSigningKeyRemoveMatch
---@field id string

---@class VideoView
---@field data table
---@field id? string
---@field timeframe table
---@field total_row_count number

---@class VideoViewLoadMatch
---@field id string

---@class Webhook
---@field address string
---@field created_at string
---@field enabled boolean
---@field id string
---@field signing_secret? string

---@class WebhookLoadMatch
---@field id string

---@class WebhookCreateData
---@field address string
---@field created_at string
---@field enabled boolean
---@field id string
---@field signing_secret? string

---@class WebhookUpdateData
---@field id string
---@field address? string
---@field created_at? string
---@field enabled? boolean
---@field signing_secret? string

---@class WebhookRemoveMatch
---@field id string

---@class WhoAmI
---@field access_token_name string
---@field environment_id string
---@field environment_name string
---@field environment_type string
---@field organization_id string
---@field organization_name string
---@field permissions table

---@class WhoAmILoadMatch
---@field access_token_name? string
---@field environment_id? string
---@field environment_name? string
---@field environment_type? string
---@field organization_id? string
---@field organization_name? string
---@field permissions? table

local M = {}

return M
