package voxgigmuxsdk

import (
	"github.com/voxgig-sdk/mux-sdk/go/core"
	"github.com/voxgig-sdk/mux-sdk/go/entity"
	"github.com/voxgig-sdk/mux-sdk/go/feature"
	_ "github.com/voxgig-sdk/mux-sdk/go/utility"
)

// Type aliases preserve external API.
type MuxSDK = core.MuxSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MuxEntity = core.MuxEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MuxError = core.MuxError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAnnotationEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewAnnotationEntity(client, entopts)
	}
	core.NewAskQuestionEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewAskQuestionEntity(client, entopts)
	}
	core.NewAssetEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewAssetEntity(client, entopts)
	}
	core.NewAssetOrLiveStreamIdEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewAssetOrLiveStreamIdEntity(client, entopts)
	}
	core.NewAssetPlaybackIdEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewAssetPlaybackIdEntity(client, entopts)
	}
	core.NewAssetShotEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewAssetShotEntity(client, entopts)
	}
	core.NewCreatePlaybackIdEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewCreatePlaybackIdEntity(client, entopts)
	}
	core.NewCreateTrackEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewCreateTrackEntity(client, entopts)
	}
	core.NewDirectiveEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewDirectiveEntity(client, entopts)
	}
	core.NewDirectiveRunDetailEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewDirectiveRunDetailEntity(client, entopts)
	}
	core.NewDrmConfigurationEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewDrmConfigurationEntity(client, entopts)
	}
	core.NewEditCaptionEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewEditCaptionEntity(client, entopts)
	}
	core.NewEngagementHeatmapEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewEngagementHeatmapEntity(client, entopts)
	}
	core.NewEngagementHotspotEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewEngagementHotspotEntity(client, entopts)
	}
	core.NewFindBestThumbnailEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewFindBestThumbnailEntity(client, entopts)
	}
	core.NewFindKeyMomentEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewFindKeyMomentEntity(client, entopts)
	}
	core.NewFindSceneEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewFindSceneEntity(client, entopts)
	}
	core.NewGenerateAssetShotEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewGenerateAssetShotEntity(client, entopts)
	}
	core.NewGenerateChapterEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewGenerateChapterEntity(client, entopts)
	}
	core.NewGenerateEngagementInsightEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewGenerateEngagementInsightEntity(client, entopts)
	}
	core.NewGeneratePremiumCaptionEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewGeneratePremiumCaptionEntity(client, entopts)
	}
	core.NewGenerateTrackSubtitleEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewGenerateTrackSubtitleEntity(client, entopts)
	}
	core.NewIncidentEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewIncidentEntity(client, entopts)
	}
	core.NewInputInfoEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewInputInfoEntity(client, entopts)
	}
	core.NewJobSummaryEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewJobSummaryEntity(client, entopts)
	}
	core.NewListAllMetricValueEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListAllMetricValueEntity(client, entopts)
	}
	core.NewListBreakdownValueEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListBreakdownValueEntity(client, entopts)
	}
	core.NewListDeliveryUsageEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListDeliveryUsageEntity(client, entopts)
	}
	core.NewListDimensionValueEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListDimensionValueEntity(client, entopts)
	}
	core.NewListErrorEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListErrorEntity(client, entopts)
	}
	core.NewListExportEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListExportEntity(client, entopts)
	}
	core.NewListFilterValueEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListFilterValueEntity(client, entopts)
	}
	core.NewListInsightEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListInsightEntity(client, entopts)
	}
	core.NewListMonitoringDimensionEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListMonitoringDimensionEntity(client, entopts)
	}
	core.NewListMonitoringMetricEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListMonitoringMetricEntity(client, entopts)
	}
	core.NewListRealTimeDimensionEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListRealTimeDimensionEntity(client, entopts)
	}
	core.NewListRealTimeMetricEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListRealTimeMetricEntity(client, entopts)
	}
	core.NewListRelatedIncidentEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListRelatedIncidentEntity(client, entopts)
	}
	core.NewListSubviewBreakdownValueEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListSubviewBreakdownValueEntity(client, entopts)
	}
	core.NewListSubviewComparisonValueEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListSubviewComparisonValueEntity(client, entopts)
	}
	core.NewListSubviewDimensionEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListSubviewDimensionEntity(client, entopts)
	}
	core.NewListSubviewDimensionValueEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListSubviewDimensionValueEntity(client, entopts)
	}
	core.NewListVideoViewExportEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewListVideoViewExportEntity(client, entopts)
	}
	core.NewLiveStreamEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewLiveStreamEntity(client, entopts)
	}
	core.NewLiveStreamPlaybackIdEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewLiveStreamPlaybackIdEntity(client, entopts)
	}
	core.NewMetricTimeseriesDataEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewMetricTimeseriesDataEntity(client, entopts)
	}
	core.NewModerateEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewModerateEntity(client, entopts)
	}
	core.NewMonitoringBreakdownEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewMonitoringBreakdownEntity(client, entopts)
	}
	core.NewMonitoringBreakdownTimeseriesEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewMonitoringBreakdownTimeseriesEntity(client, entopts)
	}
	core.NewMonitoringHistogramTimeseriesEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewMonitoringHistogramTimeseriesEntity(client, entopts)
	}
	core.NewMonitoringTimeseriesEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewMonitoringTimeseriesEntity(client, entopts)
	}
	core.NewOverallEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewOverallEntity(client, entopts)
	}
	core.NewPlaybackRestrictionEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewPlaybackRestrictionEntity(client, entopts)
	}
	core.NewRealTimeBreakdownEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewRealTimeBreakdownEntity(client, entopts)
	}
	core.NewRealTimeHistogramTimeseriesEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewRealTimeHistogramTimeseriesEntity(client, entopts)
	}
	core.NewRealTimeTimeseriesEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewRealTimeTimeseriesEntity(client, entopts)
	}
	core.NewSignalLiveStreamCompleteEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewSignalLiveStreamCompleteEntity(client, entopts)
	}
	core.NewSigningKeyEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewSigningKeyEntity(client, entopts)
	}
	core.NewSimulcastTargetEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewSimulcastTargetEntity(client, entopts)
	}
	core.NewStaticRenditionEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewStaticRenditionEntity(client, entopts)
	}
	core.NewSubviewBreakdownTimeseriesEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewSubviewBreakdownTimeseriesEntity(client, entopts)
	}
	core.NewSubviewOverallValueEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewSubviewOverallValueEntity(client, entopts)
	}
	core.NewSummarizeEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewSummarizeEntity(client, entopts)
	}
	core.NewTranscriptionVocabularyEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewTranscriptionVocabularyEntity(client, entopts)
	}
	core.NewTranslateAudioEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewTranslateAudioEntity(client, entopts)
	}
	core.NewTranslateCaptionEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewTranslateCaptionEntity(client, entopts)
	}
	core.NewUpdateAssetTrackEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewUpdateAssetTrackEntity(client, entopts)
	}
	core.NewUploadEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewUploadEntity(client, entopts)
	}
	core.NewUrlSigningKeyEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewUrlSigningKeyEntity(client, entopts)
	}
	core.NewUsageExportEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewUsageExportEntity(client, entopts)
	}
	core.NewVideoViewEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewVideoViewEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
	core.NewWhoAmIEntityFunc = func(client *core.MuxSDK, entopts map[string]any) core.MuxEntity {
		return entity.NewWhoAmIEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMuxSDK = core.NewMuxSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewMuxSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *MuxSDK  { return NewMuxSDK(nil) }
func Test() *MuxSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
