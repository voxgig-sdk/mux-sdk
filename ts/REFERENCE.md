# Mux TypeScript SDK Reference

Complete API reference for the Mux TypeScript SDK.


## MuxSDK

### Constructor

```ts
new MuxSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.secret` | `string` | API secret for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MuxSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = MuxSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `MuxSDK` instance in test mode.


### Instance Methods

#### `Annotation(data?: object)`

Create a new `Annotation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnnotationEntity` instance.

#### `AskQuestion(data?: object)`

Create a new `AskQuestion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AskQuestionEntity` instance.

#### `Asset(data?: object)`

Create a new `Asset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssetEntity` instance.

#### `AssetOrLiveStreamId(data?: object)`

Create a new `AssetOrLiveStreamId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssetOrLiveStreamIdEntity` instance.

#### `AssetPlaybackId(data?: object)`

Create a new `AssetPlaybackId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssetPlaybackIdEntity` instance.

#### `AssetShot(data?: object)`

Create a new `AssetShot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssetShotEntity` instance.

#### `CreatePlaybackId(data?: object)`

Create a new `CreatePlaybackId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreatePlaybackIdEntity` instance.

#### `CreateTrack(data?: object)`

Create a new `CreateTrack` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateTrackEntity` instance.

#### `Directive(data?: object)`

Create a new `Directive` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DirectiveEntity` instance.

#### `DirectiveRunDetail(data?: object)`

Create a new `DirectiveRunDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DirectiveRunDetailEntity` instance.

#### `DrmConfiguration(data?: object)`

Create a new `DrmConfiguration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DrmConfigurationEntity` instance.

#### `EditCaption(data?: object)`

Create a new `EditCaption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EditCaptionEntity` instance.

#### `EngagementHeatmap(data?: object)`

Create a new `EngagementHeatmap` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EngagementHeatmapEntity` instance.

#### `EngagementHotspot(data?: object)`

Create a new `EngagementHotspot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EngagementHotspotEntity` instance.

#### `FindBestThumbnail(data?: object)`

Create a new `FindBestThumbnail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FindBestThumbnailEntity` instance.

#### `FindKeyMoment(data?: object)`

Create a new `FindKeyMoment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FindKeyMomentEntity` instance.

#### `FindScene(data?: object)`

Create a new `FindScene` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FindSceneEntity` instance.

#### `GenerateAssetShot(data?: object)`

Create a new `GenerateAssetShot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateAssetShotEntity` instance.

#### `GenerateChapter(data?: object)`

Create a new `GenerateChapter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateChapterEntity` instance.

#### `GenerateEngagementInsight(data?: object)`

Create a new `GenerateEngagementInsight` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateEngagementInsightEntity` instance.

#### `GeneratePremiumCaption(data?: object)`

Create a new `GeneratePremiumCaption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GeneratePremiumCaptionEntity` instance.

#### `GenerateTrackSubtitle(data?: object)`

Create a new `GenerateTrackSubtitle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateTrackSubtitleEntity` instance.

#### `Incident(data?: object)`

Create a new `Incident` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentEntity` instance.

#### `InputInfo(data?: object)`

Create a new `InputInfo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InputInfoEntity` instance.

#### `JobSummary(data?: object)`

Create a new `JobSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JobSummaryEntity` instance.

#### `ListAllMetricValue(data?: object)`

Create a new `ListAllMetricValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListAllMetricValueEntity` instance.

#### `ListBreakdownValue(data?: object)`

Create a new `ListBreakdownValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListBreakdownValueEntity` instance.

#### `ListDeliveryUsage(data?: object)`

Create a new `ListDeliveryUsage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListDeliveryUsageEntity` instance.

#### `ListDimensionValue(data?: object)`

Create a new `ListDimensionValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListDimensionValueEntity` instance.

#### `ListError(data?: object)`

Create a new `ListError` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListErrorEntity` instance.

#### `ListExport(data?: object)`

Create a new `ListExport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListExportEntity` instance.

#### `ListFilterValue(data?: object)`

Create a new `ListFilterValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListFilterValueEntity` instance.

#### `ListInsight(data?: object)`

Create a new `ListInsight` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListInsightEntity` instance.

#### `ListMonitoringDimension(data?: object)`

Create a new `ListMonitoringDimension` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListMonitoringDimensionEntity` instance.

#### `ListMonitoringMetric(data?: object)`

Create a new `ListMonitoringMetric` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListMonitoringMetricEntity` instance.

#### `ListRealTimeDimension(data?: object)`

Create a new `ListRealTimeDimension` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListRealTimeDimensionEntity` instance.

#### `ListRealTimeMetric(data?: object)`

Create a new `ListRealTimeMetric` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListRealTimeMetricEntity` instance.

#### `ListRelatedIncident(data?: object)`

Create a new `ListRelatedIncident` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListRelatedIncidentEntity` instance.

#### `ListSubviewBreakdownValue(data?: object)`

Create a new `ListSubviewBreakdownValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListSubviewBreakdownValueEntity` instance.

#### `ListSubviewComparisonValue(data?: object)`

Create a new `ListSubviewComparisonValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListSubviewComparisonValueEntity` instance.

#### `ListSubviewDimension(data?: object)`

Create a new `ListSubviewDimension` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListSubviewDimensionEntity` instance.

#### `ListSubviewDimensionValue(data?: object)`

Create a new `ListSubviewDimensionValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListSubviewDimensionValueEntity` instance.

#### `ListVideoViewExport(data?: object)`

Create a new `ListVideoViewExport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListVideoViewExportEntity` instance.

#### `LiveStream(data?: object)`

Create a new `LiveStream` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LiveStreamEntity` instance.

#### `LiveStreamPlaybackId(data?: object)`

Create a new `LiveStreamPlaybackId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LiveStreamPlaybackIdEntity` instance.

#### `MetricTimeseriesData(data?: object)`

Create a new `MetricTimeseriesData` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MetricTimeseriesDataEntity` instance.

#### `Moderate(data?: object)`

Create a new `Moderate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ModerateEntity` instance.

#### `MonitoringBreakdown(data?: object)`

Create a new `MonitoringBreakdown` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MonitoringBreakdownEntity` instance.

#### `MonitoringBreakdownTimeseries(data?: object)`

Create a new `MonitoringBreakdownTimeseries` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MonitoringBreakdownTimeseriesEntity` instance.

#### `MonitoringHistogramTimeseries(data?: object)`

Create a new `MonitoringHistogramTimeseries` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MonitoringHistogramTimeseriesEntity` instance.

#### `MonitoringTimeseries(data?: object)`

Create a new `MonitoringTimeseries` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MonitoringTimeseriesEntity` instance.

#### `Overall(data?: object)`

Create a new `Overall` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OverallEntity` instance.

#### `PlaybackRestriction(data?: object)`

Create a new `PlaybackRestriction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PlaybackRestrictionEntity` instance.

#### `RealTimeBreakdown(data?: object)`

Create a new `RealTimeBreakdown` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RealTimeBreakdownEntity` instance.

#### `RealTimeHistogramTimeseries(data?: object)`

Create a new `RealTimeHistogramTimeseries` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RealTimeHistogramTimeseriesEntity` instance.

#### `RealTimeTimeseries(data?: object)`

Create a new `RealTimeTimeseries` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RealTimeTimeseriesEntity` instance.

#### `SignalLiveStreamComplete(data?: object)`

Create a new `SignalLiveStreamComplete` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SignalLiveStreamCompleteEntity` instance.

#### `SigningKey(data?: object)`

Create a new `SigningKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SigningKeyEntity` instance.

#### `SimulcastTarget(data?: object)`

Create a new `SimulcastTarget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SimulcastTargetEntity` instance.

#### `StaticRendition(data?: object)`

Create a new `StaticRendition` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StaticRenditionEntity` instance.

#### `SubviewBreakdownTimeseries(data?: object)`

Create a new `SubviewBreakdownTimeseries` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubviewBreakdownTimeseriesEntity` instance.

#### `SubviewOverallValue(data?: object)`

Create a new `SubviewOverallValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubviewOverallValueEntity` instance.

#### `Summarize(data?: object)`

Create a new `Summarize` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SummarizeEntity` instance.

#### `TranscriptionVocabulary(data?: object)`

Create a new `TranscriptionVocabulary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TranscriptionVocabularyEntity` instance.

#### `TranslateAudio(data?: object)`

Create a new `TranslateAudio` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TranslateAudioEntity` instance.

#### `TranslateCaption(data?: object)`

Create a new `TranslateCaption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TranslateCaptionEntity` instance.

#### `UpdateAssetTrack(data?: object)`

Create a new `UpdateAssetTrack` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateAssetTrackEntity` instance.

#### `Upload(data?: object)`

Create a new `Upload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UploadEntity` instance.

#### `UrlSigningKey(data?: object)`

Create a new `UrlSigningKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UrlSigningKeyEntity` instance.

#### `UsageExport(data?: object)`

Create a new `UsageExport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsageExportEntity` instance.

#### `VideoView(data?: object)`

Create a new `VideoView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VideoViewEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `WhoAmI(data?: object)`

Create a new `WhoAmI` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WhoAmIEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `MuxSDK.test()`.

**Returns:** `MuxSDK` instance in test mode.


---

## AnnotationEntity

```ts
const annotation = client.Annotation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Datetime when the annotation applies |
| `id` | `string` | Yes | Unique identifier for the annotation |
| `note` | `string` | Yes | The annotation note content |
| `sub_property_id` | `string` | No | Customer-defined sub-property identifier |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Annotation().create({
  date: 'example_date',
  id: 'example_id',
  note: 'example_note',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Annotation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Annotation().load({ id: 'annotation_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Annotation().remove({ id: 'annotation_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Annotation().update({
  id: 'annotation_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnnotationEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AskQuestionEntity

```ts
const ask_question = client.AskQuestion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | Yes | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AskQuestion().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  outputs: {},
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AskQuestion().load({ id: 'ask_question_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AskQuestionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssetEntity

```ts
const asset = client.Asset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `string` | Yes | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `data` | `Record<string, any>` | No |  |
| `directives` | `any[]` | No | The Mux Robots directives applied to the asset. |
| `duration` | `number` | No | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `string` | Yes | This field is deprecated. |
| `errors` | `Record<string, any>` | No | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `boolean` | No | Whether to perform shot detection on this asset. |
| `id` | `string` | Yes | Unique identifier for the Asset. |
| `ingest_type` | `string` | No | The type of ingest used to create the asset. |
| `is_live` | `boolean` | No | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `string` | No | Unique identifier for the live stream. |
| `master` | `Record<string, any>` | No | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `string` | Yes |  |
| `max_resolution_tier` | `string` | Yes | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `number` | No | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `string` | No | This field is deprecated. |
| `meta` | `Record<string, any>` | No | Customer provided metadata about this asset. |
| `mp4_support` | `string` | No | Deprecated. |
| `non_standard_input_reasons` | `Record<string, any>` | No | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `boolean` | No | Normalize the audio track loudness level. |
| `passthrough` | `string` | No | You can set this field to anything you want. |
| `playback_ids` | `any[]` | No | An array of Playback ID objects. |
| `progress` | `Record<string, any>` | Yes | Detailed state information about the asset ingest process. |
| `recording_times` | `any[]` | No | An array of individual live stream recording sessions. |
| `resolution_tier` | `string` | No | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `Record<string, any>` | Yes | The results of generating shots on the video |
| `source_asset_id` | `string` | No | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `Record<string, any>` | No | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `string` | Yes | The status of the asset. |
| `test` | `boolean` | No | True means this live stream is a test asset. |
| `thumbnail_time` | `number` | No | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `any[]` | No | The individual media tracks that make up an asset. |
| `upload_id` | `string` | No | Unique identifier for the Direct Upload. |
| `video_quality` | `string` | No | The video quality controls the cost, quality, and available platform features for the asset. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `shot` | `/video/v1/assets/{ASSET_ID}/shots` | `client.Asset().remove({ $action: 'shot', ... })` |
| `thumbnail_time` | `/video/v1/assets/{ASSET_ID}/thumbnail-time` | `client.Asset().remove({ $action: 'thumbnail_time', ... })` |
| `master_access` | `/video/v1/assets/{ASSET_ID}/master-access` | `client.Asset().update({ $action: 'master_access', ... })` |
| `mp4_support` | `/video/v1/assets/{ASSET_ID}/mp4-support` | `client.Asset().update({ $action: 'mp4_support', ... })` |

An action returns that action's OWN response, which is not necessarily a
Asset record — check the API definition for its shape.

```ts
const result = await client.Asset().remove({
  $action: 'shot',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Asset().create({
  created_at: 'example_created_at',
  encoding_tier: 'example_encoding_tier',
  id: 'example_id',
  master_access: 'example_master_access',
  max_resolution_tier: 'example_max_resolution_tier',
  progress: {},
  shots: {},
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Asset().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Asset().load({ id: 'asset_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Asset().remove({ id: 'asset_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Asset().update({
  id: 'asset_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssetEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssetOrLiveStreamIdEntity

```ts
const asset_or_live_stream_id = client.AssetOrLiveStreamId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | `Record<string, any>` | Yes | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssetOrLiveStreamId().load({ playback_id: 'playback_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssetOrLiveStreamIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssetPlaybackIdEntity

```ts
const asset_playback_id = client.AssetPlaybackId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `id` | `string` | Yes | Unique identifier for the PlaybackID |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssetPlaybackId().load({ id: 'asset_playback_id_id', asset_id: 'asset_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssetPlaybackIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssetShotEntity

```ts
const asset_shot = client.AssetShot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Record<string, any>` | No | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | `string` | No | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | `string` | Yes | The status of the shot detection process |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssetShot().load({ asset_id: 'asset_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssetShotEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreatePlaybackIdEntity

```ts
const create_playback_id = client.CreatePlaybackId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `policy` | `string` | No | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreatePlaybackId().create({
  asset_id: 'example_asset_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreatePlaybackIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateTrackEntity

```ts
const create_track = client.CreateTrack()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_captions` | `boolean` | No | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `language_code` | `string` | Yes | The language code of this track. |
| `name` | `string` | No | The name of the track containing a human-readable description. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `text_type` | `string` | No |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes | The URL of the file that Mux should download and use. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateTrack().create({
  asset_id: 'example_asset_id',
  language_code: 'example_language_code',
  type: 'example_type',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateTrackEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DirectiveEntity

```ts
const directive = client.Directive()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the directive was created. |
| `id` | `string` | Yes | Stable directive identifier (drv_...). |
| `name` | `string` | Yes | Human-readable directive name. |
| `resources` | `any[]` | Yes | Resource declarations. |
| `subject` | `Record<string, any>` | Yes |  |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) when the directive was last updated. |
| `workflows` | `any[]` | Yes | Workflow bindings. |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `resources` | - | - | Yes | - |
| `subject` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `workflows` | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `run` | `/robots/v0/directives/{DIRECTIVE_ID}/runs` | `client.Directive().create({ $action: 'run', ... })` |

An action returns that action's OWN response, which is not necessarily a
Directive record — check the API definition for its shape.

```ts
const result = await client.Directive().create({
  $action: 'run',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Directive().create({
  created_at: 1,
  id: 'example_id',
  name: 'example_name',
  resources: [],
  subject: {},
  updated_at: 1,
  workflows: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Directive().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Directive().load({ id: 'directive_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Directive().remove({ id: 'directive_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DirectiveEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DirectiveRunDetailEntity

```ts
const directive_run_detail = client.DirectiveRunDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `number | null` | Yes | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `any[]` | Yes | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `string` | Yes | Unique run identifier (drvrun_...). |
| `started_at` | `number` | Yes | Unix timestamp (seconds) when the run started. |
| `status` | `string` | Yes | Current run status. |
| `subject_id` | `string` | Yes | The bare Mux asset ID this run targeted. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DirectiveRunDetail().list({ directive_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DirectiveRunDetail().load({ directive_id: 'directive_id', run_id: 'run_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DirectiveRunDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DrmConfigurationEntity

```ts
const drm_configuration = client.DrmConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the DRM Configuration. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DrmConfiguration().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DrmConfiguration().load({ id: 'drm_configuration_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DrmConfigurationEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EditCaptionEntity

```ts
const edit_caption = client.EditCaption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | Yes | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EditCaption().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  outputs: {},
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EditCaption().load({ id: 'edit_caption_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EditCaptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EngagementHeatmapEntity

```ts
const engagement_heatmap = client.EngagementHeatmap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `timeframe` | `any[]` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EngagementHeatmap().list({ asset_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EngagementHeatmapEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EngagementHotspotEntity

```ts
const engagement_hotspot = client.EngagementHotspot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `timeframe` | `any[]` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EngagementHotspot().list({ asset_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EngagementHotspotEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FindBestThumbnailEntity

```ts
const find_best_thumbnail = client.FindBestThumbnail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | Yes | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FindBestThumbnail().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  outputs: {},
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FindBestThumbnail().load({ id: 'find_best_thumbnail_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FindBestThumbnailEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FindKeyMomentEntity

```ts
const find_key_moment = client.FindKeyMoment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | Yes | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FindKeyMoment().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  outputs: {},
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FindKeyMoment().load({ id: 'find_key_moment_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FindKeyMomentEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FindSceneEntity

```ts
const find_scene = client.FindScene()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | Yes | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FindScene().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  outputs: {},
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FindScene().load({ id: 'find_scene_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FindSceneEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateAssetShotEntity

```ts
const generate_asset_shot = client.GenerateAssetShot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GenerateAssetShot().create({
  asset_id: 'example_asset_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateAssetShotEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateChapterEntity

```ts
const generate_chapter = client.GenerateChapter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | Yes | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GenerateChapter().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  outputs: {},
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GenerateChapter().load({ id: 'generate_chapter_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateChapterEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateEngagementInsightEntity

```ts
const generate_engagement_insight = client.GenerateEngagementInsight()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | Yes | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GenerateEngagementInsight().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  outputs: {},
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GenerateEngagementInsight().load({ id: 'generate_engagement_insight_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateEngagementInsightEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GeneratePremiumCaptionEntity

```ts
const generate_premium_caption = client.GeneratePremiumCaption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | Yes | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GeneratePremiumCaption().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  outputs: {},
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GeneratePremiumCaption().load({ id: 'generate_premium_caption_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GeneratePremiumCaptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateTrackSubtitleEntity

```ts
const generate_track_subtitle = client.GenerateTrackSubtitle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generated_subtitles` | `any[]` | Yes | Generate subtitle tracks using automatic speech recognition with this configuration. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GenerateTrackSubtitle().create({
  asset_id: 'example_asset_id',
  track_id: 'example_track_id',
  generated_subtitles: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateTrackSubtitleEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentEntity

```ts
const incident = client.Incident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `number` | Yes |  |
| `affected_views_per_hour` | `number` | Yes |  |
| `affected_views_per_hour_on_open` | `number` | Yes |  |
| `breakdowns` | `any[]` | Yes |  |
| `data` | `Record<string, any>` | Yes |  |
| `description` | `string` | Yes |  |
| `error_description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `impact` | `string` | Yes |  |
| `incident_key` | `string` | Yes |  |
| `measured_value` | `number` | Yes |  |
| `measured_value_on_close` | `number` | Yes |  |
| `measurement` | `string` | Yes |  |
| `notification_rules` | `any[]` | Yes |  |
| `notifications` | `any[]` | Yes |  |
| `resolved_at` | `string` | Yes |  |
| `sample_size` | `number` | Yes |  |
| `sample_size_unit` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `threshold` | `number` | Yes |  |
| `timeframe` | `any[]` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Incident().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Incident().load({ id: 'incident_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InputInfoEntity

```ts
const input_info = client.InputInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `Record<string, any>` | No |  |
| `settings` | `Record<string, any>` | No | An array of objects that each describe an input file to be used to create the asset. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.InputInfo().list({ asset_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InputInfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JobSummaryEntity

```ts
const job_summary = client.JobSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `id` | `string` | Yes | Unique job identifier. |
| `links` | `Record<string, any>` | Yes | Hypermedia links for this job. |
| `status` | `string` | Yes | Current job status. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes | Workflow type that created this job. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.JobSummary().create({
  job_id: 'example_job_id',
  created_at: 1,
  id: 'example_id',
  links: {},
  status: 'example_status',
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.JobSummary().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JobSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListAllMetricValueEntity

```ts
const list_all_metric_value = client.ListAllMetricValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_views` | `number` | No |  |
| `items` | `any[]` | No |  |
| `metric` | `string` | No |  |
| `name` | `string` | Yes |  |
| `started_views` | `number` | No |  |
| `total_playing_time` | `number` | No |  |
| `type` | `string` | No |  |
| `unique_viewers` | `number` | No |  |
| `value` | `number` | No |  |
| `view_count` | `number` | No |  |
| `watch_time` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListAllMetricValue().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListAllMetricValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListBreakdownValueEntity

```ts
const list_breakdown_value = client.ListBreakdownValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field` | `string` | Yes |  |
| `negative_impact` | `number` | Yes |  |
| `total_playing_time` | `number` | Yes |  |
| `total_watch_time` | `number` | Yes |  |
| `value` | `number` | Yes |  |
| `views` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListBreakdownValue().list({ metric_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListBreakdownValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListDeliveryUsageEntity

```ts
const list_delivery_usage = client.ListDeliveryUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_duration` | `number` | Yes | The duration of the asset in seconds. |
| `asset_encoding_tier` | `string` | Yes | This field is deprecated. |
| `asset_id` | `string` | Yes | Unique identifier for the asset. |
| `asset_resolution_tier` | `string` | Yes | The resolution tier that the asset was ingested at, affecting billing for ingest & storage |
| `asset_state` | `string` | Yes | The state of the asset. |
| `asset_video_quality` | `string` | No | The video quality that the asset was ingested at. |
| `created_at` | `string` | Yes | Time at which the asset was created. |
| `deleted_at` | `string` | No | If exists, time at which the asset was deleted. |
| `delivered_seconds` | `number` | Yes | Total number of delivered seconds during this time window. |
| `delivered_seconds_by_resolution` | `Record<string, any>` | Yes | Seconds delivered broken into resolution tiers. |
| `live_stream_id` | `string` | No | Unique identifier for the live stream that created the asset. |
| `passthrough` | `string` | No | The `passthrough` value for the asset. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListDeliveryUsage().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListDeliveryUsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListDimensionValueEntity

```ts
const list_dimension_value = client.ListDimensionValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes |  |
| `timeframe` | `any[]` | Yes |  |
| `total_count` | `number` | Yes |  |
| `total_row_count` | `number` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListDimensionValue().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ListDimensionValue().load({ dimension_id: 'dimension_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListDimensionValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListErrorEntity

```ts
const list_error = client.ListError()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `number` | Yes | The error code |
| `count` | `number` | Yes | The total number of views that experienced this error. |
| `description` | `string` | Yes | Description of the error. |
| `id` | `number` | Yes | A unique identifier for this error. |
| `last_seen` | `string` | Yes | The last time this error was seen (ISO 8601 timestamp). |
| `message` | `string` | Yes | The error message. |
| `notes` | `string` | Yes | Notes that are attached to this error. |
| `percentage` | `number` | Yes | The percentage of views that experienced this error. |
| `player_error_code` | `string` | Yes | The string version of the error code |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListError().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListErrorEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListExportEntity

```ts
const list_export = client.ListExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes |  |
| `timeframe` | `any[]` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListExport().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListFilterValueEntity

```ts
const list_filter_value = client.ListFilterValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes |  |
| `timeframe` | `any[]` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListFilterValue().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ListFilterValue().load({ filter_id: 'filter_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListFilterValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListInsightEntity

```ts
const list_insight = client.ListInsight()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `filter_column` | `string` | Yes |  |
| `filter_value` | `string` | Yes |  |
| `metric` | `number` | Yes |  |
| `negative_impact_score` | `number` | Yes |  |
| `total_playing_time` | `number` | Yes |  |
| `total_views` | `number` | Yes |  |
| `total_watch_time` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListInsight().list({ metric_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListInsightEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListMonitoringDimensionEntity

```ts
const list_monitoring_dimension = client.ListMonitoringDimension()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListMonitoringDimension().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListMonitoringDimensionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListMonitoringMetricEntity

```ts
const list_monitoring_metric = client.ListMonitoringMetric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListMonitoringMetric().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListMonitoringMetricEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListRealTimeDimensionEntity

```ts
const list_real_time_dimension = client.ListRealTimeDimension()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListRealTimeDimension().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListRealTimeDimensionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListRealTimeMetricEntity

```ts
const list_real_time_metric = client.ListRealTimeMetric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListRealTimeMetric().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListRealTimeMetricEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListRelatedIncidentEntity

```ts
const list_related_incident = client.ListRelatedIncident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `number` | Yes |  |
| `affected_views_per_hour` | `number` | Yes |  |
| `affected_views_per_hour_on_open` | `number` | Yes |  |
| `breakdowns` | `any[]` | Yes |  |
| `description` | `string` | Yes |  |
| `error_description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `impact` | `string` | Yes |  |
| `incident_key` | `string` | Yes |  |
| `measured_value` | `number` | Yes |  |
| `measured_value_on_close` | `number` | Yes |  |
| `measurement` | `string` | Yes |  |
| `notification_rules` | `any[]` | Yes |  |
| `notifications` | `any[]` | Yes |  |
| `resolved_at` | `string` | Yes |  |
| `sample_size` | `number` | Yes |  |
| `sample_size_unit` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `threshold` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListRelatedIncident().list({ incident_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListRelatedIncidentEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListSubviewBreakdownValueEntity

```ts
const list_subview_breakdown_value = client.ListSubviewBreakdownValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakdown_value` | `string` | Yes |  |
| `metric_value` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListSubviewBreakdownValue().list({ subview_metric_id: "example", subview_type: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListSubviewBreakdownValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListSubviewComparisonValueEntity

```ts
const list_subview_comparison_value = client.ListSubviewComparisonValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dimension_value` | `string` | Yes |  |
| `values` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListSubviewComparisonValue().list({ subview_metric_id: "example", subview_type: "example", dimension: "example", value: [] })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListSubviewComparisonValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListSubviewDimensionEntity

```ts
const list_subview_dimension = client.ListSubviewDimension()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `total_row_count` | `number` | Yes | Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ListSubviewDimension().load({ subview_type: 'subview_type' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListSubviewDimensionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListSubviewDimensionValueEntity

```ts
const list_subview_dimension_value = client.ListSubviewDimensionValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes |  |
| `meta` | `any` | Yes |  |
| `timeframe` | `any[]` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ListSubviewDimensionValue().load({ dimension_name: 'dimension_name', subview_metric_id: 'subview_metric_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListSubviewDimensionValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListVideoViewExportEntity

```ts
const list_video_view_export = client.ListVideoViewExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `export_date` | `string` | Yes |  |
| `files` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListVideoViewExport().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListVideoViewExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LiveStreamEntity

```ts
const live_stream = client.LiveStream()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_asset_id` | `string` | No | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `string` | No | The protocol used for the active ingest stream. |
| `advanced_playback_policies` | `any[]` | No | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `audio_only` | `boolean` | No | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `string` | Yes | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `any[]` | No | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `any[]` | No | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `string` | Yes | Unique identifier for the Live Stream. |
| `latency_mode` | `string` | Yes | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `boolean` | No | This field is deprecated. |
| `max_continuous_duration` | `number` | Yes | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `Record<string, any>` | No | Customer provided metadata about this live stream. |
| `new_asset_settings` | `Record<string, any>` | No | Updates the new asset settings to use to generate a new asset for this live stream. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `any[]` | No | An array of Playback ID objects. |
| `playback_policies` | `any[]` | No | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `playback_policy` | `any[]` | No | Deprecated. |
| `recent_asset_ids` | `any[]` | No | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `string` | No | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `number` | No | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `boolean` | No | This field is deprecated. |
| `simulcast_targets` | `any[]` | No | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | `string` | No | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `string` | Yes | `idle` indicates that there is no active broadcast. |
| `stream_key` | `string` | Yes | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | `boolean` | No | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | `boolean` | No | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `active_asset_id` | - | - | - | - | - |
| `active_ingest_protocol` | - | - | - | - | - |
| `advanced_playback_policies` | - | - | - | - | - |
| `audio_only` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `embedded_subtitles` | - | - | - | - | - |
| `generated_subtitles` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `latency_mode` | - | - | Yes | Yes | - |
| `low_latency` | - | - | - | - | - |
| `max_continuous_duration` | - | - | Yes | Yes | - |
| `meta` | - | - | - | - | - |
| `new_asset_settings` | - | - | - | - | - |
| `passthrough` | - | - | - | - | - |
| `playback_ids` | - | - | - | - | - |
| `playback_policies` | - | - | - | - | - |
| `playback_policy` | - | - | - | - | - |
| `recent_asset_ids` | - | - | - | - | - |
| `reconnect_slate_url` | - | - | - | - | - |
| `reconnect_window` | - | - | - | - | - |
| `reduced_latency` | - | - | - | - | - |
| `simulcast_targets` | - | - | - | - | - |
| `srt_passphrase` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `stream_key` | - | - | - | - | - |
| `test` | - | - | - | - | - |
| `use_slate_for_standard_latency` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `reset_stream_key` | `/video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key` | `client.LiveStream().create({ $action: 'reset_stream_key', ... })` |
| `new_asset_setting_static_rendition` | `/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions` | `client.LiveStream().remove({ $action: 'new_asset_setting_static_rendition', ... })` |
| `disable` | `/video/v1/live-streams/{LIVE_STREAM_ID}/disable` | `client.LiveStream().update({ $action: 'disable', ... })` |
| `embedded_subtitle` | `/video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles` | `client.LiveStream().update({ $action: 'embedded_subtitle', ... })` |
| `enable` | `/video/v1/live-streams/{LIVE_STREAM_ID}/enable` | `client.LiveStream().update({ $action: 'enable', ... })` |
| `generated_subtitle` | `/video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles` | `client.LiveStream().update({ $action: 'generated_subtitle', ... })` |
| `new_asset_setting_static_rendition` | `/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions` | `client.LiveStream().update({ $action: 'new_asset_setting_static_rendition', ... })` |

An action returns that action's OWN response, which is not necessarily a
LiveStream record — check the API definition for its shape.

```ts
const result = await client.LiveStream().create({
  $action: 'reset_stream_key',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LiveStream().create({
  created_at: 'example_created_at',
  id: 'example_id',
  latency_mode: 'example_latency_mode',
  max_continuous_duration: 1,
  status: 'example_status',
  stream_key: 'example_stream_key',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LiveStream().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LiveStream().load({ id: 'live_stream_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.LiveStream().remove({ id: 'live_stream_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.LiveStream().update({
  id: 'live_stream_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LiveStreamEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LiveStreamPlaybackIdEntity

```ts
const live_stream_playback_id = client.LiveStreamPlaybackId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `id` | `string` | Yes | Unique identifier for the PlaybackID |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LiveStreamPlaybackId().load({ id: 'live_stream_playback_id_id', live_stream_id: 'live_stream_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LiveStreamPlaybackIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MetricTimeseriesDataEntity

```ts
const metric_timeseries_data = client.MetricTimeseriesData()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `timeframe` | `any[]` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MetricTimeseriesData().list({ metric_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MetricTimeseriesDataEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ModerateEntity

```ts
const moderate = client.Moderate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | Yes | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Moderate().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  outputs: {},
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Moderate().load({ id: 'moderate_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ModerateEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MonitoringBreakdownEntity

```ts
const monitoring_breakdown = client.MonitoringBreakdown()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `number` | Yes |  |
| `display_value` | `string` | No |  |
| `metric_value` | `number` | Yes |  |
| `negative_impact` | `number` | Yes |  |
| `starting_up_viewers` | `number` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MonitoringBreakdown().list({ monitoring_metric_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MonitoringBreakdownEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MonitoringBreakdownTimeseriesEntity

```ts
const monitoring_breakdown_timeseries = client.MonitoringBreakdownTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `values` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MonitoringBreakdownTimeseries().list({ monitoring_metric_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MonitoringBreakdownTimeseriesEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MonitoringHistogramTimeseriesEntity

```ts
const monitoring_histogram_timeseries = client.MonitoringHistogramTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `number` | Yes |  |
| `bucket_values` | `any[]` | Yes |  |
| `max_percentage` | `number` | Yes |  |
| `median` | `number` | Yes |  |
| `p95` | `number` | Yes |  |
| `sum` | `number` | Yes |  |
| `timestamp` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MonitoringHistogramTimeseries().list({ monitoring_histogram_metric_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MonitoringHistogramTimeseriesEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MonitoringTimeseriesEntity

```ts
const monitoring_timeseries = client.MonitoringTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `number` | Yes |  |
| `date` | `string` | Yes |  |
| `value` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MonitoringTimeseries().list({ monitoring_metric_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MonitoringTimeseriesEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OverallEntity

```ts
const overall = client.Overall()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `timeframe` | `any[]` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Overall().list({ metric_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OverallEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PlaybackRestrictionEntity

```ts
const playback_restriction = client.PlaybackRestriction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Yes | Unique identifier for the Playback Restriction. |
| `referrer` | `Record<string, any>` | Yes | A list of domains allowed to play your videos. |
| `updated_at` | `string` | Yes | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `Record<string, any>` | Yes | Rules that control what user agents are allowed to play your videos. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `referrer` | `/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer` | `client.PlaybackRestriction().update({ $action: 'referrer', ... })` |
| `user_agent` | `/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent` | `client.PlaybackRestriction().update({ $action: 'user_agent', ... })` |

An action returns that action's OWN response, which is not necessarily a
PlaybackRestriction record — check the API definition for its shape.

```ts
const result = await client.PlaybackRestriction().update({
  $action: 'referrer',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PlaybackRestriction().create({
  created_at: 'example_created_at',
  id: 'example_id',
  referrer: {},
  updated_at: 'example_updated_at',
  user_agent: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PlaybackRestriction().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PlaybackRestriction().load({ id: 'playback_restriction_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PlaybackRestriction().remove({ id: 'playback_restriction_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PlaybackRestriction().update({
  id: 'playback_restriction_id',
  playback_restriction_id: 'playback_restriction_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PlaybackRestrictionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RealTimeBreakdownEntity

```ts
const real_time_breakdown = client.RealTimeBreakdown()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `number` | Yes |  |
| `display_value` | `string` | No |  |
| `metric_value` | `number` | Yes |  |
| `negative_impact` | `number` | Yes |  |
| `starting_up_viewers` | `number` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RealTimeBreakdown().list({ realtime_metric_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RealTimeBreakdownEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RealTimeHistogramTimeseriesEntity

```ts
const real_time_histogram_timeseries = client.RealTimeHistogramTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `number` | Yes |  |
| `bucket_values` | `any[]` | Yes |  |
| `max_percentage` | `number` | Yes |  |
| `median` | `number` | Yes |  |
| `p95` | `number` | Yes |  |
| `sum` | `number` | Yes |  |
| `timestamp` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RealTimeHistogramTimeseries().list({ realtime_histogram_metric_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RealTimeHistogramTimeseriesEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RealTimeTimeseriesEntity

```ts
const real_time_timeseries = client.RealTimeTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `number` | Yes |  |
| `date` | `string` | Yes |  |
| `value` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RealTimeTimeseries().list({ realtime_metric_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RealTimeTimeseriesEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SignalLiveStreamCompleteEntity

```ts
const signal_live_stream_complete = client.SignalLiveStreamComplete()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SignalLiveStreamComplete().update({
  live_stream_id: 'live_stream_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SignalLiveStreamCompleteEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SigningKeyEntity

```ts
const signing_key = client.SigningKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time at which the object was created. |
| `data` | `Record<string, any>` | No |  |
| `id` | `string` | Yes | Unique identifier for the Signing Key. |
| `private_key` | `string` | No | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SigningKey().create({
  created_at: 'example_created_at',
  id: 'example_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SigningKey().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SigningKey().load({ id: 'signing_key_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SigningKey().remove({ id: 'signing_key_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SigningKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SimulcastTargetEntity

```ts
const simulcast_target = client.SimulcastTarget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error_severity` | `string` | No | The severity of the error encountered by the simulcast target. |
| `id` | `string` | Yes | ID of the Simulcast Target |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set when creating a simulcast target. |
| `status` | `string` | Yes | The current status of the simulcast target. |
| `stream_key` | `string` | No | Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. |
| `url` | `string` | Yes | The RTMP(s) or SRT endpoint for a simulcast destination. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SimulcastTarget().create({
  live_stream_id: 'example_live_stream_id',
  id: 'example_id',
  status: 'example_status',
  url: 'example_url',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SimulcastTarget().load({ id: 'simulcast_target_id', live_stream_id: 'live_stream_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SimulcastTargetEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StaticRenditionEntity

```ts
const static_rendition = client.StaticRendition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the static rendition. |
| `resolution` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.StaticRendition().create({
  asset_id: 'example_asset_id',
  resolution: 'example_resolution',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StaticRenditionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubviewBreakdownTimeseriesEntity

```ts
const subview_breakdown_timeseries = client.SubviewBreakdownTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `values` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubviewBreakdownTimeseries().list({ subview_metric_id: "example", subview_type: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubviewBreakdownTimeseriesEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubviewOverallValueEntity

```ts
const subview_overall_value = client.SubviewOverallValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `timeframe` | `any[]` | Yes |  |
| `total_row_count` | `number` | Yes | Always `null` for this endpoint — a single aggregate value has no row count. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubviewOverallValue().list({ subview_metric_id: "example", subview_type: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubviewOverallValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SummarizeEntity

```ts
const summarize = client.Summarize()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | Yes | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Summarize().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  outputs: {},
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Summarize().load({ id: 'summarize_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SummarizeEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TranscriptionVocabularyEntity

```ts
const transcription_vocabulary = client.TranscriptionVocabulary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Yes | Unique identifier for the Transcription Vocabulary |
| `name` | `string` | No | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `any[]` | No | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `updated_at` | `string` | Yes | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `passthrough` | - | - | - | - | - |
| `phrases` | - | - | Yes | Yes | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TranscriptionVocabulary().create({
  created_at: 'example_created_at',
  id: 'example_id',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TranscriptionVocabulary().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TranscriptionVocabulary().load({ id: 'transcription_vocabulary_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TranscriptionVocabulary().remove({ id: 'transcription_vocabulary_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TranscriptionVocabulary().update({
  id: 'transcription_vocabulary_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TranscriptionVocabularyEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TranslateAudioEntity

```ts
const translate_audio = client.TranslateAudio()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | No | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TranslateAudio().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TranslateAudio().load({ id: 'translate_audio_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TranslateAudioEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TranslateCaptionEntity

```ts
const translate_caption = client.TranslateCaption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | Yes | The directive run that dispatched this job. |
| `errors` | `any[]` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `Record<string, any>` | No | Workflow results. |
| `parameters` | `Record<string, any>` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TranslateCaption().create({
  created_at: 1,
  directive: {},
  id: 'example_id',
  parameters: {},
  resources: {},
  status: 'example_status',
  units_consumed: 1,
  updated_at: 1,
  workflow: 'example_workflow',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TranslateCaption().load({ id: 'translate_caption_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TranslateCaptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateAssetTrackEntity

```ts
const update_asset_track = client.UpdateAssetTrack()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_language_confidence` | `number` | No | The confidence value (0-1) of the determined language. |
| `closed_captions` | `boolean` | No | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `duration` | `number` | No | The duration in seconds of the track media. |
| `id` | `string` | No | Unique identifier for the Track |
| `language_code` | `string` | No | The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'. |
| `max_channels` | `number` | No | The maximum number of audio channels the track supports. |
| `max_frame_rate` | `number` | No | The maximum frame rate available for the track. |
| `max_height` | `number` | No | The maximum height in pixels available for the track. |
| `max_width` | `number` | No | The maximum width in pixels available for the track. |
| `name` | `string` | No | The name of the track containing a human-readable description. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `primary` | `boolean` | No | For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset. |
| `status` | `string` | No | The status of the track. |
| `text_source` | `string` | No | The source of the text contained in a Track of type `text`. |
| `text_type` | `string` | No | This parameter is only set for `text` type tracks. |
| `type` | `string` | No | The type of track |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateAssetTrack().update({
  asset_id: 'asset_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateAssetTrackEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UploadEntity

```ts
const upload = client.Upload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_id` | `string` | No | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `string` | Yes | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `Record<string, any>` | No | Only set if an error occurred during asset creation. |
| `id` | `string` | Yes | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `Record<string, any>` | No |  |
| `status` | `string` | Yes |  |
| `test` | `boolean` | No | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | `number` | Yes | Max time in seconds for the signed upload URL to be valid. |
| `url` | `string` | No | The URL to upload the associated source media to. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `asset_id` | - | - | - | - |
| `cors_origin` | - | - | - | - |
| `error` | - | - | - | - |
| `id` | - | - | - | - |
| `new_asset_settings` | - | - | - | - |
| `status` | - | - | - | - |
| `test` | - | - | - | - |
| `timeout` | - | - | Yes | - |
| `url` | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/video/v1/uploads/{UPLOAD_ID}/cancel` | `client.Upload().update({ $action: 'cancel', ... })` |

An action returns that action's OWN response, which is not necessarily a
Upload record — check the API definition for its shape.

```ts
const result = await client.Upload().update({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Upload().create({
  cors_origin: 'example_cors_origin',
  id: 'example_id',
  status: 'example_status',
  timeout: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Upload().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Upload().load({ id: 'upload_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Upload().update({
  id: 'upload_id',
  upload_id: 'upload_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UploadEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UrlSigningKeyEntity

```ts
const url_signing_key = client.UrlSigningKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.UrlSigningKey().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UrlSigningKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsageExportEntity

```ts
const usage_export = client.UsageExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `download_url` | `string` | Yes | A pre-signed URL to download the CSV. |
| `download_url_expires_at` | `number` | Yes | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `file_size` | `number` | Yes | Uncompressed size of the CSV file in bytes. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UsageExport().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsageExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VideoViewEntity

```ts
const video_view = client.VideoView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country_code` | `string` | Yes |  |
| `data` | `Record<string, any>` | Yes |  |
| `error_type_id` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `playback_failure` | `boolean` | Yes |  |
| `player_error_code` | `string` | Yes |  |
| `player_error_message` | `string` | Yes |  |
| `timeframe` | `any[]` | Yes |  |
| `total_row_count` | `number` | Yes |  |
| `video_title` | `string` | Yes |  |
| `view_end` | `string` | Yes |  |
| `view_start` | `string` | Yes |  |
| `viewer_application_name` | `string` | Yes |  |
| `viewer_experience_score` | `number` | Yes |  |
| `viewer_os_family` | `string` | Yes |  |
| `watch_time` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.VideoView().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.VideoView().load({ id: 'video_view_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VideoViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The URL where Mux sends webhook notifications. |
| `created_at` | `string` | Yes | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | `boolean` | Yes | Whether Mux attempts to deliver notifications to this webhook. |
| `id` | `string` | Yes | Unique identifier for the webhook. |
| `signing_secret` | `string` | No | Secret used to verify that webhook payloads were sent by Mux. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `address` | - | - | - | Yes | - |
| `created_at` | - | - | - | - | - |
| `enabled` | - | - | - | Yes | - |
| `id` | - | - | - | - | - |
| `signing_secret` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Webhook().create({
  address: 'example_address',
  created_at: 'example_created_at',
  enabled: true,
  id: 'example_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Webhook().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Webhook().load({ id: 'webhook_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Webhook().remove({ id: 'webhook_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Webhook().update({
  id: 'webhook_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WhoAmIEntity

```ts
const who_am_i = client.WhoAmI()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token_name` | `string` | Yes |  |
| `environment_id` | `string` | Yes |  |
| `environment_name` | `string` | Yes |  |
| `environment_type` | `string` | Yes |  |
| `organization_id` | `string` | Yes |  |
| `organization_name` | `string` | Yes |  |
| `permissions` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WhoAmI().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WhoAmIEntity` instance with the same client and
options.

#### `client()`

Return the parent `MuxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```ts
const client = new MuxSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

