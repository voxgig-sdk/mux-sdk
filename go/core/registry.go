package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAnnotationEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewAskQuestionEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewAssetEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewAssetOrLiveStreamIdEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewAssetPlaybackIdEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewAssetShotEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewCreatePlaybackIdEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewCreateTrackEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewDirectiveEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewDirectiveRunDetailEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewDirectiveRunListEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewDrmConfigurationEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewEditCaptionEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewEngagementHeatmapEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewEngagementHotspotEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewFindBestThumbnailEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewFindKeyMomentEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewFindSceneEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewGenerateAssetShotEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewGenerateChapterEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewGenerateEngagementInsightEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewGeneratePremiumCaptionEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewGenerateTrackSubtitleEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewIncidentEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewInputInfoEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewJobSummaryEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListAllMetricValueEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListAnnotationEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListAssetEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListBreakdownValueEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListDeliveryUsageEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListDimensionEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListDimensionValueEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListDrmConfigurationEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListErrorEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListExportEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListFilterEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListFilterValueEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListIncidentEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListInsightEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListJobEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListLiveStreamEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListMonitoringDimensionEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListMonitoringMetricEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListPlaybackRestrictionEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListRealTimeDimensionEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListRealTimeMetricEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListRelatedIncidentEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListSigningKeyEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListSubviewBreakdownValueEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListSubviewComparisonValueEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListSubviewDimensionEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListSubviewDimensionValueEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListTranscriptionVocabularyEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListUploadEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListUsageExportEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListVideoViewEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListVideoViewExportEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewListWebhookEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewLiveStreamEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewLiveStreamPlaybackIdEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewMetricTimeseriesDataEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewModerateEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewMonitoringBreakdownEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewMonitoringBreakdownTimeseriesEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewMonitoringHistogramTimeseriesEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewMonitoringTimeseriesEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewOverallEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewPlaybackRestrictionEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewRealTimeBreakdownEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewRealTimeHistogramTimeseriesEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewRealTimeTimeseriesEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewSignalLiveStreamCompleteEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewSigningKeyEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewSimulcastTargetEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewStaticRenditionEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewSubviewBreakdownTimeseriesEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewSubviewOverallValueEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewSummarizeEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewTranscriptionVocabularyEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewTranslateAudioEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewTranslateCaptionEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewUpdateAssetTrackEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewUploadEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewUrlSigningKeyEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewVideoViewEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewWebhookEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

var NewWhoAmIEntityFunc func(client *MuxSDK, entopts map[string]any) MuxEntity

