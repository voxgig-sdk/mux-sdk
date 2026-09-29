// Typed models for the Mux SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/mux-sdk/go/core"
)

// Annotation is the typed data model for the annotation entity.
type Annotation struct {
}

// AnnotationLoadMatch is the typed request payload for Annotation.LoadTyped.
type AnnotationLoadMatch struct {
	Id string `json:"id"`
}

// AnnotationListMatch is the typed request payload for Annotation.ListTyped.
type AnnotationListMatch struct {
	Limit *int `json:"limit,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Page *int `json:"page,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// AnnotationCreateData is the typed request payload for Annotation.CreateTyped.
type AnnotationCreateData struct {
	Date string `json:"date"`
	Id string `json:"id"`
	Note string `json:"note"`
	SubPropertyId *string `json:"sub_property_id,omitempty"`
}

// AnnotationUpdateData is the typed request payload for Annotation.UpdateTyped.
type AnnotationUpdateData struct {
	Id string `json:"id"`
	Date *string `json:"date,omitempty"`
	Note *string `json:"note,omitempty"`
	SubPropertyId *string `json:"sub_property_id,omitempty"`
}

// AnnotationRemoveMatch is the typed request payload for Annotation.RemoveTyped.
type AnnotationRemoveMatch struct {
	Id string `json:"id"`
}

// AskQuestion is the typed data model for the ask_question entity.
type AskQuestion struct {
}

// AskQuestionLoadMatch is the typed request payload for AskQuestion.LoadTyped.
type AskQuestionLoadMatch struct {
	Id string `json:"id"`
}

// AskQuestionCreateData is the typed request payload for AskQuestion.CreateTyped.
type AskQuestionCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs map[string]any `json:"outputs"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// Asset is the typed data model for the asset entity.
type Asset struct {
}

// AssetLoadMatch is the typed request payload for Asset.LoadTyped.
type AssetLoadMatch struct {
	Id string `json:"id"`
}

// AssetListMatch is the typed request payload for Asset.ListTyped.
type AssetListMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LiveStreamId *string `json:"live_stream_id,omitempty"`
	Page *int `json:"page,omitempty"`
	UploadId *string `json:"upload_id,omitempty"`
}

// AssetCreateData is the typed request payload for Asset.CreateTyped.
type AssetCreateData struct {
	AspectRatio *string `json:"aspect_ratio,omitempty"`
	CreatedAt string `json:"created_at"`
	Data *map[string]any `json:"data,omitempty"`
	Directives *[]any `json:"directives,omitempty"`
	Duration *float64 `json:"duration,omitempty"`
	EncodingTier string `json:"encoding_tier"`
	Errors *map[string]any `json:"errors,omitempty"`
	GenerateShots *bool `json:"generate_shots,omitempty"`
	Id string `json:"id"`
	IngestType *string `json:"ingest_type,omitempty"`
	IsLive *bool `json:"is_live,omitempty"`
	LiveStreamId *string `json:"live_stream_id,omitempty"`
	Master *map[string]any `json:"master,omitempty"`
	MasterAccess string `json:"master_access"`
	MaxResolutionTier string `json:"max_resolution_tier"`
	MaxStoredFrameRate *float64 `json:"max_stored_frame_rate,omitempty"`
	MaxStoredResolution *string `json:"max_stored_resolution,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Mp4Support *string `json:"mp4_support,omitempty"`
	NonStandardInputReasons *map[string]any `json:"non_standard_input_reasons,omitempty"`
	NormalizeAudio *bool `json:"normalize_audio,omitempty"`
	Passthrough *string `json:"passthrough,omitempty"`
	PlaybackIds *[]any `json:"playback_ids,omitempty"`
	Progress map[string]any `json:"progress"`
	RecordingTimes *[]any `json:"recording_times,omitempty"`
	ResolutionTier *string `json:"resolution_tier,omitempty"`
	Shots map[string]any `json:"shots"`
	SourceAssetId *string `json:"source_asset_id,omitempty"`
	StaticRenditions *map[string]any `json:"static_renditions,omitempty"`
	Status string `json:"status"`
	Test *bool `json:"test,omitempty"`
	ThumbnailTime *float64 `json:"thumbnail_time,omitempty"`
	Tracks *[]any `json:"tracks,omitempty"`
	UploadId *string `json:"upload_id,omitempty"`
	VideoQuality *string `json:"video_quality,omitempty"`
}

// AssetUpdateData is the typed request payload for Asset.UpdateTyped.
type AssetUpdateData struct {
	Id string `json:"id"`
	AspectRatio *string `json:"aspect_ratio,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Directives *[]any `json:"directives,omitempty"`
	Duration *float64 `json:"duration,omitempty"`
	EncodingTier *string `json:"encoding_tier,omitempty"`
	Errors *map[string]any `json:"errors,omitempty"`
	GenerateShots *bool `json:"generate_shots,omitempty"`
	IngestType *string `json:"ingest_type,omitempty"`
	IsLive *bool `json:"is_live,omitempty"`
	LiveStreamId *string `json:"live_stream_id,omitempty"`
	Master *map[string]any `json:"master,omitempty"`
	MasterAccess *string `json:"master_access,omitempty"`
	MaxResolutionTier *string `json:"max_resolution_tier,omitempty"`
	MaxStoredFrameRate *float64 `json:"max_stored_frame_rate,omitempty"`
	MaxStoredResolution *string `json:"max_stored_resolution,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Mp4Support *string `json:"mp4_support,omitempty"`
	NonStandardInputReasons *map[string]any `json:"non_standard_input_reasons,omitempty"`
	NormalizeAudio *bool `json:"normalize_audio,omitempty"`
	Passthrough *string `json:"passthrough,omitempty"`
	PlaybackIds *[]any `json:"playback_ids,omitempty"`
	Progress *map[string]any `json:"progress,omitempty"`
	RecordingTimes *[]any `json:"recording_times,omitempty"`
	ResolutionTier *string `json:"resolution_tier,omitempty"`
	Shots *map[string]any `json:"shots,omitempty"`
	SourceAssetId *string `json:"source_asset_id,omitempty"`
	StaticRenditions *map[string]any `json:"static_renditions,omitempty"`
	Status *string `json:"status,omitempty"`
	Test *bool `json:"test,omitempty"`
	ThumbnailTime *float64 `json:"thumbnail_time,omitempty"`
	Tracks *[]any `json:"tracks,omitempty"`
	UploadId *string `json:"upload_id,omitempty"`
	VideoQuality *string `json:"video_quality,omitempty"`
}

// AssetRemoveMatch is the typed request payload for Asset.RemoveTyped.
type AssetRemoveMatch struct {
	Id string `json:"id"`
}

// AssetOrLiveStreamId is the typed data model for the asset_or_live_stream_id entity.
type AssetOrLiveStreamId struct {
}

// AssetOrLiveStreamIdLoadMatch is the typed request payload for AssetOrLiveStreamId.LoadTyped.
type AssetOrLiveStreamIdLoadMatch struct {
	PlaybackId string `json:"playback_id"`
}

// AssetPlaybackId is the typed data model for the asset_playback_id entity.
type AssetPlaybackId struct {
}

// AssetPlaybackIdLoadMatch is the typed request payload for AssetPlaybackId.LoadTyped.
type AssetPlaybackIdLoadMatch struct {
	AssetId string `json:"asset_id"`
	Id string `json:"id"`
}

// AssetShot is the typed data model for the asset_shot entity.
type AssetShot struct {
}

// AssetShotLoadMatch is the typed request payload for AssetShot.LoadTyped.
type AssetShotLoadMatch struct {
	AssetId string `json:"asset_id"`
}

// CreatePlaybackId is the typed data model for the create_playback_id entity.
type CreatePlaybackId struct {
}

// CreatePlaybackIdCreateData is the typed request payload for CreatePlaybackId.CreateTyped.
type CreatePlaybackIdCreateData struct {
	AssetId string `json:"asset_id"`
	DrmConfigurationId *string `json:"drm_configuration_id,omitempty"`
	Policy *string `json:"policy,omitempty"`
}

// CreateTrack is the typed data model for the create_track entity.
type CreateTrack struct {
}

// CreateTrackCreateData is the typed request payload for CreateTrack.CreateTyped.
type CreateTrackCreateData struct {
	AssetId string `json:"asset_id"`
	ClosedCaptions *bool `json:"closed_captions,omitempty"`
	LanguageCode string `json:"language_code"`
	Name *string `json:"name,omitempty"`
	Passthrough *string `json:"passthrough,omitempty"`
	TextType *string `json:"text_type,omitempty"`
	Type string `json:"type"`
	Url string `json:"url"`
}

// Directive is the typed data model for the directive entity.
type Directive struct {
}

// DirectiveLoadMatch is the typed request payload for Directive.LoadTyped.
type DirectiveLoadMatch struct {
	Id string `json:"id"`
}

// DirectiveListMatch is the typed request payload for Directive.ListTyped.
type DirectiveListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// DirectiveCreateData is the typed request payload for Directive.CreateTyped.
type DirectiveCreateData struct {
	CreatedAt int `json:"created_at"`
	Id string `json:"id"`
	Name string `json:"name"`
	Resources []any `json:"resources"`
	Subject map[string]any `json:"subject"`
	UpdatedAt int `json:"updated_at"`
	Workflows []any `json:"workflows"`
}

// DirectiveRemoveMatch is the typed request payload for Directive.RemoveTyped.
type DirectiveRemoveMatch struct {
	Id string `json:"id"`
}

// DirectiveRunDetail is the typed data model for the directive_run_detail entity.
type DirectiveRunDetail struct {
}

// DirectiveRunDetailLoadMatch is the typed request payload for DirectiveRunDetail.LoadTyped.
type DirectiveRunDetailLoadMatch struct {
	DirectiveId string `json:"directive_id"`
	RunId string `json:"run_id"`
}

// DirectiveRunDetailListMatch is the typed request payload for DirectiveRunDetail.ListTyped.
type DirectiveRunDetailListMatch struct {
	DirectiveId string `json:"directive_id"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// DrmConfiguration is the typed data model for the drm_configuration entity.
type DrmConfiguration struct {
}

// DrmConfigurationLoadMatch is the typed request payload for DrmConfiguration.LoadTyped.
type DrmConfigurationLoadMatch struct {
	Id string `json:"id"`
}

// DrmConfigurationListMatch is the typed request payload for DrmConfiguration.ListTyped.
type DrmConfigurationListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// EditCaption is the typed data model for the edit_caption entity.
type EditCaption struct {
}

// EditCaptionLoadMatch is the typed request payload for EditCaption.LoadTyped.
type EditCaptionLoadMatch struct {
	Id string `json:"id"`
}

// EditCaptionCreateData is the typed request payload for EditCaption.CreateTyped.
type EditCaptionCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs map[string]any `json:"outputs"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// EngagementHeatmap is the typed data model for the engagement_heatmap entity.
type EngagementHeatmap struct {
}

// EngagementHeatmapListMatch is the typed request payload for EngagementHeatmap.ListTyped.
type EngagementHeatmapListMatch struct {
	AssetId string `json:"asset_id"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// EngagementHotspot is the typed data model for the engagement_hotspot entity.
type EngagementHotspot struct {
}

// EngagementHotspotListMatch is the typed request payload for EngagementHotspot.ListTyped.
type EngagementHotspotListMatch struct {
	AssetId string `json:"asset_id"`
	Limit *int `json:"limit,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// FindBestThumbnail is the typed data model for the find_best_thumbnail entity.
type FindBestThumbnail struct {
}

// FindBestThumbnailLoadMatch is the typed request payload for FindBestThumbnail.LoadTyped.
type FindBestThumbnailLoadMatch struct {
	Id string `json:"id"`
}

// FindBestThumbnailCreateData is the typed request payload for FindBestThumbnail.CreateTyped.
type FindBestThumbnailCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs map[string]any `json:"outputs"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// FindKeyMoment is the typed data model for the find_key_moment entity.
type FindKeyMoment struct {
}

// FindKeyMomentLoadMatch is the typed request payload for FindKeyMoment.LoadTyped.
type FindKeyMomentLoadMatch struct {
	Id string `json:"id"`
}

// FindKeyMomentCreateData is the typed request payload for FindKeyMoment.CreateTyped.
type FindKeyMomentCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs map[string]any `json:"outputs"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// FindScene is the typed data model for the find_scene entity.
type FindScene struct {
}

// FindSceneLoadMatch is the typed request payload for FindScene.LoadTyped.
type FindSceneLoadMatch struct {
	Id string `json:"id"`
}

// FindSceneCreateData is the typed request payload for FindScene.CreateTyped.
type FindSceneCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs map[string]any `json:"outputs"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// GenerateAssetShot is the typed data model for the generate_asset_shot entity.
type GenerateAssetShot struct {
}

// GenerateAssetShotCreateData is the typed request payload for GenerateAssetShot.CreateTyped.
type GenerateAssetShotCreateData struct {
	AssetId string `json:"asset_id"`
	Data *map[string]any `json:"data,omitempty"`
}

// GenerateChapter is the typed data model for the generate_chapter entity.
type GenerateChapter struct {
}

// GenerateChapterLoadMatch is the typed request payload for GenerateChapter.LoadTyped.
type GenerateChapterLoadMatch struct {
	Id string `json:"id"`
}

// GenerateChapterCreateData is the typed request payload for GenerateChapter.CreateTyped.
type GenerateChapterCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs map[string]any `json:"outputs"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// GenerateEngagementInsight is the typed data model for the generate_engagement_insight entity.
type GenerateEngagementInsight struct {
}

// GenerateEngagementInsightLoadMatch is the typed request payload for GenerateEngagementInsight.LoadTyped.
type GenerateEngagementInsightLoadMatch struct {
	Id string `json:"id"`
}

// GenerateEngagementInsightCreateData is the typed request payload for GenerateEngagementInsight.CreateTyped.
type GenerateEngagementInsightCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs map[string]any `json:"outputs"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// GeneratePremiumCaption is the typed data model for the generate_premium_caption entity.
type GeneratePremiumCaption struct {
}

// GeneratePremiumCaptionLoadMatch is the typed request payload for GeneratePremiumCaption.LoadTyped.
type GeneratePremiumCaptionLoadMatch struct {
	Id string `json:"id"`
}

// GeneratePremiumCaptionCreateData is the typed request payload for GeneratePremiumCaption.CreateTyped.
type GeneratePremiumCaptionCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs map[string]any `json:"outputs"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// GenerateTrackSubtitle is the typed data model for the generate_track_subtitle entity.
type GenerateTrackSubtitle struct {
}

// GenerateTrackSubtitleCreateData is the typed request payload for GenerateTrackSubtitle.CreateTyped.
type GenerateTrackSubtitleCreateData struct {
	AssetId string `json:"asset_id"`
	TrackId string `json:"track_id"`
	GeneratedSubtitles []any `json:"generated_subtitles"`
}

// Incident is the typed data model for the incident entity.
type Incident struct {
}

// IncidentLoadMatch is the typed request payload for Incident.LoadTyped.
type IncidentLoadMatch struct {
	Id string `json:"id"`
}

// IncidentListMatch is the typed request payload for Incident.ListTyped.
type IncidentListMatch struct {
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Page *int `json:"page,omitempty"`
	Severity *string `json:"severity,omitempty"`
	Status *string `json:"status,omitempty"`
}

// InputInfo is the typed data model for the input_info entity.
type InputInfo struct {
}

// InputInfoListMatch is the typed request payload for InputInfo.ListTyped.
type InputInfoListMatch struct {
	AssetId string `json:"asset_id"`
}

// JobSummary is the typed data model for the job_summary entity.
type JobSummary struct {
}

// JobSummaryListMatch is the typed request payload for JobSummary.ListTyped.
type JobSummaryListMatch struct {
	AssetId *string `json:"asset_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Status *any `json:"status,omitempty"`
	Workflow *string `json:"workflow,omitempty"`
}

// JobSummaryCreateData is the typed request payload for JobSummary.CreateTyped.
type JobSummaryCreateData struct {
	JobId string `json:"job_id"`
	CreatedAt int `json:"created_at"`
	Id string `json:"id"`
	Links map[string]any `json:"links"`
	Status string `json:"status"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// ListAllMetricValue is the typed data model for the list_all_metric_value entity.
type ListAllMetricValue struct {
}

// ListAllMetricValueListMatch is the typed request payload for ListAllMetricValue.ListTyped.
type ListAllMetricValueListMatch struct {
	Dimension *string `json:"dimension,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	MetricFilter *[]any `json:"metric_filter,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
	Value *string `json:"value,omitempty"`
}

// ListBreakdownValue is the typed data model for the list_breakdown_value entity.
type ListBreakdownValue struct {
}

// ListBreakdownValueListMatch is the typed request payload for ListBreakdownValue.ListTyped.
type ListBreakdownValueListMatch struct {
	MetricId string `json:"metric_id"`
	Filter *[]any `json:"filter,omitempty"`
	GroupBy *string `json:"group_by,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Measurement *string `json:"measurement,omitempty"`
	MetricFilter *[]any `json:"metric_filter,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Page *int `json:"page,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// ListDeliveryUsage is the typed data model for the list_delivery_usage entity.
type ListDeliveryUsage struct {
}

// ListDeliveryUsageListMatch is the typed request payload for ListDeliveryUsage.ListTyped.
type ListDeliveryUsageListMatch struct {
	AssetId *string `json:"asset_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LiveStreamId *string `json:"live_stream_id,omitempty"`
	Page *int `json:"page,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// ListDimensionValue is the typed data model for the list_dimension_value entity.
type ListDimensionValue struct {
}

// ListDimensionValueLoadMatch is the typed request payload for ListDimensionValue.LoadTyped.
type ListDimensionValueLoadMatch struct {
	DimensionId string `json:"dimension_id"`
	Filter *[]any `json:"filter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	MetricFilter *[]any `json:"metric_filter,omitempty"`
	Page *int `json:"page,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// ListDimensionValueListMatch is the typed request payload for ListDimensionValue.ListTyped.
type ListDimensionValueListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	TotalRowCount *int `json:"total_row_count,omitempty"`
	Value *string `json:"value,omitempty"`
}

// ListError is the typed data model for the list_error entity.
type ListError struct {
}

// ListErrorListMatch is the typed request payload for ListError.ListTyped.
type ListErrorListMatch struct {
	Filter *[]any `json:"filter,omitempty"`
	MetricFilter *[]any `json:"metric_filter,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// ListExport is the typed data model for the list_export entity.
type ListExport struct {
}

// ListExportListMatch is the typed request payload for ListExport.ListTyped.
type ListExportListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
	TotalRowCount *int `json:"total_row_count,omitempty"`
}

// ListFilterValue is the typed data model for the list_filter_value entity.
type ListFilterValue struct {
}

// ListFilterValueLoadMatch is the typed request payload for ListFilterValue.LoadTyped.
type ListFilterValueLoadMatch struct {
	FilterId string `json:"filter_id"`
	Filter *[]any `json:"filter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// ListFilterValueListMatch is the typed request payload for ListFilterValue.ListTyped.
type ListFilterValueListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
	TotalRowCount *int `json:"total_row_count,omitempty"`
}

// ListInsight is the typed data model for the list_insight entity.
type ListInsight struct {
}

// ListInsightListMatch is the typed request payload for ListInsight.ListTyped.
type ListInsightListMatch struct {
	MetricId string `json:"metric_id"`
	Filter *[]any `json:"filter,omitempty"`
	Measurement *string `json:"measurement,omitempty"`
	MetricFilter *[]any `json:"metric_filter,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// ListMonitoringDimension is the typed data model for the list_monitoring_dimension entity.
type ListMonitoringDimension struct {
}

// ListMonitoringDimensionListMatch is the typed request payload for ListMonitoringDimension.ListTyped.
type ListMonitoringDimensionListMatch struct {
	DisplayName *string `json:"display_name,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ListMonitoringMetric is the typed data model for the list_monitoring_metric entity.
type ListMonitoringMetric struct {
}

// ListMonitoringMetricListMatch is the typed request payload for ListMonitoringMetric.ListTyped.
type ListMonitoringMetricListMatch struct {
	DisplayName *string `json:"display_name,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ListRealTimeDimension is the typed data model for the list_real_time_dimension entity.
type ListRealTimeDimension struct {
}

// ListRealTimeDimensionListMatch is the typed request payload for ListRealTimeDimension.ListTyped.
type ListRealTimeDimensionListMatch struct {
	DisplayName *string `json:"display_name,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ListRealTimeMetric is the typed data model for the list_real_time_metric entity.
type ListRealTimeMetric struct {
}

// ListRealTimeMetricListMatch is the typed request payload for ListRealTimeMetric.ListTyped.
type ListRealTimeMetricListMatch struct {
	DisplayName *string `json:"display_name,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ListRelatedIncident is the typed data model for the list_related_incident entity.
type ListRelatedIncident struct {
}

// ListRelatedIncidentListMatch is the typed request payload for ListRelatedIncident.ListTyped.
type ListRelatedIncidentListMatch struct {
	IncidentId string `json:"incident_id"`
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Page *int `json:"page,omitempty"`
}

// ListSubviewBreakdownValue is the typed data model for the list_subview_breakdown_value entity.
type ListSubviewBreakdownValue struct {
}

// ListSubviewBreakdownValueListMatch is the typed request payload for ListSubviewBreakdownValue.ListTyped.
type ListSubviewBreakdownValueListMatch struct {
	SubviewMetricId string `json:"subview_metric_id"`
	SubviewType string `json:"subview_type"`
	Filter *[]any `json:"filter,omitempty"`
	GroupBy *[]any `json:"group_by,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// ListSubviewComparisonValue is the typed data model for the list_subview_comparison_value entity.
type ListSubviewComparisonValue struct {
}

// ListSubviewComparisonValueListMatch is the typed request payload for ListSubviewComparisonValue.ListTyped.
type ListSubviewComparisonValueListMatch struct {
	SubviewMetricId string `json:"subview_metric_id"`
	SubviewType string `json:"subview_type"`
	BreakdownValueLimit *int `json:"breakdown_value_limit,omitempty"`
	Dimension string `json:"dimension"`
	Filter *[]any `json:"filter,omitempty"`
	GroupBy *[]any `json:"group_by,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
	Value []any `json:"value"`
}

// ListSubviewDimension is the typed data model for the list_subview_dimension entity.
type ListSubviewDimension struct {
}

// ListSubviewDimensionLoadMatch is the typed request payload for ListSubviewDimension.LoadTyped.
type ListSubviewDimensionLoadMatch struct {
	SubviewType string `json:"subview_type"`
}

// ListSubviewDimensionValue is the typed data model for the list_subview_dimension_value entity.
type ListSubviewDimensionValue struct {
}

// ListSubviewDimensionValueLoadMatch is the typed request payload for ListSubviewDimensionValue.LoadTyped.
type ListSubviewDimensionValueLoadMatch struct {
	DimensionName string `json:"dimension_name"`
	SubviewMetricId string `json:"subview_metric_id"`
	Filter *[]any `json:"filter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Page *int `json:"page,omitempty"`
	Query *string `json:"query,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// ListVideoViewExport is the typed data model for the list_video_view_export entity.
type ListVideoViewExport struct {
}

// ListVideoViewExportListMatch is the typed request payload for ListVideoViewExport.ListTyped.
type ListVideoViewExportListMatch struct {
	ExportDate *string `json:"export_date,omitempty"`
	Files *[]any `json:"files,omitempty"`
}

// LiveStream is the typed data model for the live_stream entity.
type LiveStream struct {
}

// LiveStreamLoadMatch is the typed request payload for LiveStream.LoadTyped.
type LiveStreamLoadMatch struct {
	Id string `json:"id"`
}

// LiveStreamListMatch is the typed request payload for LiveStream.ListTyped.
type LiveStreamListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Status *string `json:"status,omitempty"`
	StreamKey *string `json:"stream_key,omitempty"`
}

// LiveStreamCreateData is the typed request payload for LiveStream.CreateTyped.
type LiveStreamCreateData struct {
	ActiveAssetId *string `json:"active_asset_id,omitempty"`
	ActiveIngestProtocol *string `json:"active_ingest_protocol,omitempty"`
	AdvancedPlaybackPolicies *[]any `json:"advanced_playback_policies,omitempty"`
	AudioOnly *bool `json:"audio_only,omitempty"`
	CreatedAt string `json:"created_at"`
	EmbeddedSubtitles *[]any `json:"embedded_subtitles,omitempty"`
	GeneratedSubtitles *[]any `json:"generated_subtitles,omitempty"`
	Id string `json:"id"`
	LatencyMode string `json:"latency_mode"`
	LowLatency *bool `json:"low_latency,omitempty"`
	MaxContinuousDuration int `json:"max_continuous_duration"`
	Meta *map[string]any `json:"meta,omitempty"`
	NewAssetSettings *map[string]any `json:"new_asset_settings,omitempty"`
	Passthrough *string `json:"passthrough,omitempty"`
	PlaybackIds *[]any `json:"playback_ids,omitempty"`
	PlaybackPolicies *[]any `json:"playback_policies,omitempty"`
	PlaybackPolicy *[]any `json:"playback_policy,omitempty"`
	RecentAssetIds *[]any `json:"recent_asset_ids,omitempty"`
	ReconnectSlateUrl *string `json:"reconnect_slate_url,omitempty"`
	ReconnectWindow *float64 `json:"reconnect_window,omitempty"`
	ReducedLatency *bool `json:"reduced_latency,omitempty"`
	SimulcastTargets *[]any `json:"simulcast_targets,omitempty"`
	SrtPassphrase *string `json:"srt_passphrase,omitempty"`
	Status string `json:"status"`
	StreamKey string `json:"stream_key"`
	Test *bool `json:"test,omitempty"`
	UseSlateForStandardLatency *bool `json:"use_slate_for_standard_latency,omitempty"`
}

// LiveStreamUpdateData is the typed request payload for LiveStream.UpdateTyped.
type LiveStreamUpdateData struct {
	Id string `json:"id"`
	ActiveAssetId *string `json:"active_asset_id,omitempty"`
	ActiveIngestProtocol *string `json:"active_ingest_protocol,omitempty"`
	AdvancedPlaybackPolicies *[]any `json:"advanced_playback_policies,omitempty"`
	AudioOnly *bool `json:"audio_only,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EmbeddedSubtitles *[]any `json:"embedded_subtitles,omitempty"`
	GeneratedSubtitles *[]any `json:"generated_subtitles,omitempty"`
	LatencyMode *string `json:"latency_mode,omitempty"`
	LowLatency *bool `json:"low_latency,omitempty"`
	MaxContinuousDuration *int `json:"max_continuous_duration,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	NewAssetSettings *map[string]any `json:"new_asset_settings,omitempty"`
	Passthrough *string `json:"passthrough,omitempty"`
	PlaybackIds *[]any `json:"playback_ids,omitempty"`
	PlaybackPolicies *[]any `json:"playback_policies,omitempty"`
	PlaybackPolicy *[]any `json:"playback_policy,omitempty"`
	RecentAssetIds *[]any `json:"recent_asset_ids,omitempty"`
	ReconnectSlateUrl *string `json:"reconnect_slate_url,omitempty"`
	ReconnectWindow *float64 `json:"reconnect_window,omitempty"`
	ReducedLatency *bool `json:"reduced_latency,omitempty"`
	SimulcastTargets *[]any `json:"simulcast_targets,omitempty"`
	SrtPassphrase *string `json:"srt_passphrase,omitempty"`
	Status *string `json:"status,omitempty"`
	StreamKey *string `json:"stream_key,omitempty"`
	Test *bool `json:"test,omitempty"`
	UseSlateForStandardLatency *bool `json:"use_slate_for_standard_latency,omitempty"`
}

// LiveStreamRemoveMatch is the typed request payload for LiveStream.RemoveTyped.
type LiveStreamRemoveMatch struct {
	Id string `json:"id"`
}

// LiveStreamPlaybackId is the typed data model for the live_stream_playback_id entity.
type LiveStreamPlaybackId struct {
}

// LiveStreamPlaybackIdLoadMatch is the typed request payload for LiveStreamPlaybackId.LoadTyped.
type LiveStreamPlaybackIdLoadMatch struct {
	Id string `json:"id"`
	LiveStreamId string `json:"live_stream_id"`
}

// MetricTimeseriesData is the typed data model for the metric_timeseries_data entity.
type MetricTimeseriesData struct {
}

// MetricTimeseriesDataListMatch is the typed request payload for MetricTimeseriesData.ListTyped.
type MetricTimeseriesDataListMatch struct {
	MetricId string `json:"metric_id"`
	Filter *[]any `json:"filter,omitempty"`
	GroupBy *string `json:"group_by,omitempty"`
	Measurement *string `json:"measurement,omitempty"`
	MetricFilter *[]any `json:"metric_filter,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// Moderate is the typed data model for the moderate entity.
type Moderate struct {
}

// ModerateLoadMatch is the typed request payload for Moderate.LoadTyped.
type ModerateLoadMatch struct {
	Id string `json:"id"`
}

// ModerateCreateData is the typed request payload for Moderate.CreateTyped.
type ModerateCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs map[string]any `json:"outputs"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// MonitoringBreakdown is the typed data model for the monitoring_breakdown entity.
type MonitoringBreakdown struct {
}

// MonitoringBreakdownListMatch is the typed request payload for MonitoringBreakdown.ListTyped.
type MonitoringBreakdownListMatch struct {
	MonitoringMetricId string `json:"monitoring_metric_id"`
	Dimension *string `json:"dimension,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Timestamp *int `json:"timestamp,omitempty"`
}

// MonitoringBreakdownTimeseries is the typed data model for the monitoring_breakdown_timeseries entity.
type MonitoringBreakdownTimeseries struct {
}

// MonitoringBreakdownTimeseriesListMatch is the typed request payload for MonitoringBreakdownTimeseries.ListTyped.
type MonitoringBreakdownTimeseriesListMatch struct {
	MonitoringMetricId string `json:"monitoring_metric_id"`
	Dimension *string `json:"dimension,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// MonitoringHistogramTimeseries is the typed data model for the monitoring_histogram_timeseries entity.
type MonitoringHistogramTimeseries struct {
}

// MonitoringHistogramTimeseriesListMatch is the typed request payload for MonitoringHistogramTimeseries.ListTyped.
type MonitoringHistogramTimeseriesListMatch struct {
	MonitoringHistogramMetricId string `json:"monitoring_histogram_metric_id"`
	Filter *[]any `json:"filter,omitempty"`
}

// MonitoringTimeseries is the typed data model for the monitoring_timeseries entity.
type MonitoringTimeseries struct {
}

// MonitoringTimeseriesListMatch is the typed request payload for MonitoringTimeseries.ListTyped.
type MonitoringTimeseriesListMatch struct {
	MonitoringMetricId string `json:"monitoring_metric_id"`
	Filter *[]any `json:"filter,omitempty"`
	Timestamp *int `json:"timestamp,omitempty"`
}

// Overall is the typed data model for the overall entity.
type Overall struct {
}

// OverallListMatch is the typed request payload for Overall.ListTyped.
type OverallListMatch struct {
	MetricId string `json:"metric_id"`
	Filter *[]any `json:"filter,omitempty"`
	Measurement *string `json:"measurement,omitempty"`
	MetricFilter *[]any `json:"metric_filter,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// PlaybackRestriction is the typed data model for the playback_restriction entity.
type PlaybackRestriction struct {
}

// PlaybackRestrictionLoadMatch is the typed request payload for PlaybackRestriction.LoadTyped.
type PlaybackRestrictionLoadMatch struct {
	Id string `json:"id"`
}

// PlaybackRestrictionListMatch is the typed request payload for PlaybackRestriction.ListTyped.
type PlaybackRestrictionListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// PlaybackRestrictionCreateData is the typed request payload for PlaybackRestriction.CreateTyped.
type PlaybackRestrictionCreateData struct {
	CreatedAt string `json:"created_at"`
	Id string `json:"id"`
	Referrer map[string]any `json:"referrer"`
	UpdatedAt string `json:"updated_at"`
	UserAgent map[string]any `json:"user_agent"`
}

// PlaybackRestrictionUpdateData is the typed request payload for PlaybackRestriction.UpdateTyped.
type PlaybackRestrictionUpdateData struct {
	PlaybackRestrictionId string `json:"playback_restriction_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Referrer *map[string]any `json:"referrer,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UserAgent *map[string]any `json:"user_agent,omitempty"`
}

// PlaybackRestrictionRemoveMatch is the typed request payload for PlaybackRestriction.RemoveTyped.
type PlaybackRestrictionRemoveMatch struct {
	Id string `json:"id"`
}

// RealTimeBreakdown is the typed data model for the real_time_breakdown entity.
type RealTimeBreakdown struct {
}

// RealTimeBreakdownListMatch is the typed request payload for RealTimeBreakdown.ListTyped.
type RealTimeBreakdownListMatch struct {
	RealtimeMetricId string `json:"realtime_metric_id"`
	Dimension *string `json:"dimension,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Timestamp *int `json:"timestamp,omitempty"`
}

// RealTimeHistogramTimeseries is the typed data model for the real_time_histogram_timeseries entity.
type RealTimeHistogramTimeseries struct {
}

// RealTimeHistogramTimeseriesListMatch is the typed request payload for RealTimeHistogramTimeseries.ListTyped.
type RealTimeHistogramTimeseriesListMatch struct {
	RealtimeHistogramMetricId string `json:"realtime_histogram_metric_id"`
	Filter *[]any `json:"filter,omitempty"`
}

// RealTimeTimeseries is the typed data model for the real_time_timeseries entity.
type RealTimeTimeseries struct {
}

// RealTimeTimeseriesListMatch is the typed request payload for RealTimeTimeseries.ListTyped.
type RealTimeTimeseriesListMatch struct {
	RealtimeMetricId string `json:"realtime_metric_id"`
	Filter *[]any `json:"filter,omitempty"`
	Timestamp *int `json:"timestamp,omitempty"`
}

// SignalLiveStreamComplete is the typed data model for the signal_live_stream_complete entity.
type SignalLiveStreamComplete struct {
}

// SignalLiveStreamCompleteUpdateData is the typed request payload for SignalLiveStreamComplete.UpdateTyped.
type SignalLiveStreamCompleteUpdateData struct {
	LiveStreamId string `json:"live_stream_id"`
}

// SigningKey is the typed data model for the signing_key entity.
type SigningKey struct {
}

// SigningKeyLoadMatch is the typed request payload for SigningKey.LoadTyped.
type SigningKeyLoadMatch struct {
	Id string `json:"id"`
}

// SigningKeyListMatch is the typed request payload for SigningKey.ListTyped.
type SigningKeyListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// SigningKeyCreateData is the typed request payload for SigningKey.CreateTyped.
type SigningKeyCreateData struct {
	CreatedAt string `json:"created_at"`
	Data *map[string]any `json:"data,omitempty"`
	Id string `json:"id"`
	PrivateKey *string `json:"private_key,omitempty"`
}

// SigningKeyRemoveMatch is the typed request payload for SigningKey.RemoveTyped.
type SigningKeyRemoveMatch struct {
	Id string `json:"id"`
}

// SimulcastTarget is the typed data model for the simulcast_target entity.
type SimulcastTarget struct {
}

// SimulcastTargetLoadMatch is the typed request payload for SimulcastTarget.LoadTyped.
type SimulcastTargetLoadMatch struct {
	Id string `json:"id"`
	LiveStreamId string `json:"live_stream_id"`
}

// SimulcastTargetCreateData is the typed request payload for SimulcastTarget.CreateTyped.
type SimulcastTargetCreateData struct {
	LiveStreamId string `json:"live_stream_id"`
	ErrorSeverity *string `json:"error_severity,omitempty"`
	Id string `json:"id"`
	Passthrough *string `json:"passthrough,omitempty"`
	Status string `json:"status"`
	StreamKey *string `json:"stream_key,omitempty"`
	Url string `json:"url"`
}

// StaticRendition is the typed data model for the static_rendition entity.
type StaticRendition struct {
}

// StaticRenditionCreateData is the typed request payload for StaticRendition.CreateTyped.
type StaticRenditionCreateData struct {
	AssetId string `json:"asset_id"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resolution string `json:"resolution"`
}

// SubviewBreakdownTimeseries is the typed data model for the subview_breakdown_timeseries entity.
type SubviewBreakdownTimeseries struct {
}

// SubviewBreakdownTimeseriesListMatch is the typed request payload for SubviewBreakdownTimeseries.ListTyped.
type SubviewBreakdownTimeseriesListMatch struct {
	SubviewMetricId string `json:"subview_metric_id"`
	SubviewType string `json:"subview_type"`
	BreakdownValueLimit *int `json:"breakdown_value_limit,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	GroupBy *[]any `json:"group_by,omitempty"`
	TimeGranularity *string `json:"time_granularity,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// SubviewOverallValue is the typed data model for the subview_overall_value entity.
type SubviewOverallValue struct {
}

// SubviewOverallValueListMatch is the typed request payload for SubviewOverallValue.ListTyped.
type SubviewOverallValueListMatch struct {
	SubviewMetricId string `json:"subview_metric_id"`
	SubviewType string `json:"subview_type"`
	Filter *[]any `json:"filter,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// Summarize is the typed data model for the summarize entity.
type Summarize struct {
}

// SummarizeLoadMatch is the typed request payload for Summarize.LoadTyped.
type SummarizeLoadMatch struct {
	Id string `json:"id"`
}

// SummarizeCreateData is the typed request payload for Summarize.CreateTyped.
type SummarizeCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs map[string]any `json:"outputs"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// TranscriptionVocabulary is the typed data model for the transcription_vocabulary entity.
type TranscriptionVocabulary struct {
}

// TranscriptionVocabularyLoadMatch is the typed request payload for TranscriptionVocabulary.LoadTyped.
type TranscriptionVocabularyLoadMatch struct {
	Id string `json:"id"`
}

// TranscriptionVocabularyListMatch is the typed request payload for TranscriptionVocabulary.ListTyped.
type TranscriptionVocabularyListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// TranscriptionVocabularyCreateData is the typed request payload for TranscriptionVocabulary.CreateTyped.
type TranscriptionVocabularyCreateData struct {
	CreatedAt string `json:"created_at"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	Passthrough *string `json:"passthrough,omitempty"`
	Phrases *[]any `json:"phrases,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// TranscriptionVocabularyUpdateData is the typed request payload for TranscriptionVocabulary.UpdateTyped.
type TranscriptionVocabularyUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"created_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Passthrough *string `json:"passthrough,omitempty"`
	Phrases *[]any `json:"phrases,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// TranscriptionVocabularyRemoveMatch is the typed request payload for TranscriptionVocabulary.RemoveTyped.
type TranscriptionVocabularyRemoveMatch struct {
	Id string `json:"id"`
}

// TranslateAudio is the typed data model for the translate_audio entity.
type TranslateAudio struct {
}

// TranslateAudioLoadMatch is the typed request payload for TranslateAudio.LoadTyped.
type TranslateAudioLoadMatch struct {
	Id string `json:"id"`
}

// TranslateAudioCreateData is the typed request payload for TranslateAudio.CreateTyped.
type TranslateAudioCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs *map[string]any `json:"outputs,omitempty"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// TranslateCaption is the typed data model for the translate_caption entity.
type TranslateCaption struct {
}

// TranslateCaptionLoadMatch is the typed request payload for TranslateCaption.LoadTyped.
type TranslateCaptionLoadMatch struct {
	Id string `json:"id"`
}

// TranslateCaptionCreateData is the typed request payload for TranslateCaption.CreateTyped.
type TranslateCaptionCreateData struct {
	CreatedAt int `json:"created_at"`
	Directive map[string]any `json:"directive"`
	Errors *[]any `json:"errors,omitempty"`
	Id string `json:"id"`
	Outputs *map[string]any `json:"outputs,omitempty"`
	Parameters map[string]any `json:"parameters"`
	Passthrough *string `json:"passthrough,omitempty"`
	Resources map[string]any `json:"resources"`
	Status string `json:"status"`
	UnitsConsumed int `json:"units_consumed"`
	UpdatedAt int `json:"updated_at"`
	Workflow string `json:"workflow"`
}

// UpdateAssetTrack is the typed data model for the update_asset_track entity.
type UpdateAssetTrack struct {
}

// UpdateAssetTrackUpdateData is the typed request payload for UpdateAssetTrack.UpdateTyped.
type UpdateAssetTrackUpdateData struct {
	AssetId string `json:"asset_id"`
	Id string `json:"id"`
	AutoLanguageConfidence *float64 `json:"auto_language_confidence,omitempty"`
	ClosedCaptions *bool `json:"closed_captions,omitempty"`
	Duration *float64 `json:"duration,omitempty"`
	LanguageCode *string `json:"language_code,omitempty"`
	MaxChannels *int `json:"max_channels,omitempty"`
	MaxFrameRate *float64 `json:"max_frame_rate,omitempty"`
	MaxHeight *int `json:"max_height,omitempty"`
	MaxWidth *int `json:"max_width,omitempty"`
	Name *string `json:"name,omitempty"`
	Passthrough *string `json:"passthrough,omitempty"`
	Primary *bool `json:"primary,omitempty"`
	Status *string `json:"status,omitempty"`
	TextSource *string `json:"text_source,omitempty"`
	TextType *string `json:"text_type,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Upload is the typed data model for the upload entity.
type Upload struct {
}

// UploadLoadMatch is the typed request payload for Upload.LoadTyped.
type UploadLoadMatch struct {
	Id string `json:"id"`
}

// UploadListMatch is the typed request payload for Upload.ListTyped.
type UploadListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// UploadCreateData is the typed request payload for Upload.CreateTyped.
type UploadCreateData struct {
	AssetId *string `json:"asset_id,omitempty"`
	CorsOrigin string `json:"cors_origin"`
	Error *map[string]any `json:"error,omitempty"`
	Id string `json:"id"`
	NewAssetSettings *map[string]any `json:"new_asset_settings,omitempty"`
	Status string `json:"status"`
	Test *bool `json:"test,omitempty"`
	Timeout int `json:"timeout"`
	Url *string `json:"url,omitempty"`
}

// UploadUpdateData is the typed request payload for Upload.UpdateTyped.
type UploadUpdateData struct {
	UploadId string `json:"upload_id"`
	AssetId *string `json:"asset_id,omitempty"`
	CorsOrigin *string `json:"cors_origin,omitempty"`
	Error *map[string]any `json:"error,omitempty"`
	Id *string `json:"id,omitempty"`
	NewAssetSettings *map[string]any `json:"new_asset_settings,omitempty"`
	Status *string `json:"status,omitempty"`
	Test *bool `json:"test,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
	Url *string `json:"url,omitempty"`
}

// UrlSigningKey is the typed data model for the url_signing_key entity.
type UrlSigningKey struct {
}

// UrlSigningKeyRemoveMatch is the typed request payload for UrlSigningKey.RemoveTyped.
type UrlSigningKeyRemoveMatch struct {
	Id string `json:"id"`
}

// UsageExport is the typed data model for the usage_export entity.
type UsageExport struct {
}

// UsageExportListMatch is the typed request payload for UsageExport.ListTyped.
type UsageExportListMatch struct {
	DownloadUrlTtl *int `json:"download_url_ttl,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
}

// VideoView is the typed data model for the video_view entity.
type VideoView struct {
}

// VideoViewLoadMatch is the typed request payload for VideoView.LoadTyped.
type VideoViewLoadMatch struct {
	Id string `json:"id"`
}

// VideoViewListMatch is the typed request payload for VideoView.ListTyped.
type VideoViewListMatch struct {
	ErrorId *int `json:"error_id,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	MetricFilter *[]any `json:"metric_filter,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Page *int `json:"page,omitempty"`
	Timeframe *[]any `json:"timeframe,omitempty"`
	ViewerId *string `json:"viewer_id,omitempty"`
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
}

// WebhookLoadMatch is the typed request payload for Webhook.LoadTyped.
type WebhookLoadMatch struct {
	Id string `json:"id"`
}

// WebhookListMatch is the typed request payload for Webhook.ListTyped.
type WebhookListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// WebhookCreateData is the typed request payload for Webhook.CreateTyped.
type WebhookCreateData struct {
	Address string `json:"address"`
	CreatedAt string `json:"created_at"`
	Enabled bool `json:"enabled"`
	Id string `json:"id"`
	SigningSecret *string `json:"signing_secret,omitempty"`
}

// WebhookUpdateData is the typed request payload for Webhook.UpdateTyped.
type WebhookUpdateData struct {
	Id string `json:"id"`
	Address *string `json:"address,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	SigningSecret *string `json:"signing_secret,omitempty"`
}

// WebhookRemoveMatch is the typed request payload for Webhook.RemoveTyped.
type WebhookRemoveMatch struct {
	Id string `json:"id"`
}

// WhoAmI is the typed data model for the who_am_i entity.
type WhoAmI struct {
}

// WhoAmILoadMatch is the typed request payload for WhoAmI.LoadTyped.
type WhoAmILoadMatch struct {
	AccessTokenName *string `json:"access_token_name,omitempty"`
	EnvironmentId *string `json:"environment_id,omitempty"`
	EnvironmentName *string `json:"environment_name,omitempty"`
	EnvironmentType *string `json:"environment_type,omitempty"`
	OrganizationId *string `json:"organization_id,omitempty"`
	OrganizationName *string `json:"organization_name,omitempty"`
	Permissions *[]any `json:"permissions,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
