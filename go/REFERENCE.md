# Mux Golang SDK Reference

Complete API reference for the Mux Golang SDK.


## MuxSDK

### Constructor

```go
func NewMuxSDK(options map[string]any) *MuxSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *MuxSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *MuxSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Annotation(data map[string]any) MuxEntity`

Create a new `Annotation` entity instance. Pass `nil` for no initial data.

#### `AskQuestion(data map[string]any) MuxEntity`

Create a new `AskQuestion` entity instance. Pass `nil` for no initial data.

#### `Asset(data map[string]any) MuxEntity`

Create a new `Asset` entity instance. Pass `nil` for no initial data.

#### `AssetOrLiveStreamId(data map[string]any) MuxEntity`

Create a new `AssetOrLiveStreamId` entity instance. Pass `nil` for no initial data.

#### `AssetPlaybackId(data map[string]any) MuxEntity`

Create a new `AssetPlaybackId` entity instance. Pass `nil` for no initial data.

#### `AssetShot(data map[string]any) MuxEntity`

Create a new `AssetShot` entity instance. Pass `nil` for no initial data.

#### `CreatePlaybackId(data map[string]any) MuxEntity`

Create a new `CreatePlaybackId` entity instance. Pass `nil` for no initial data.

#### `CreateTrack(data map[string]any) MuxEntity`

Create a new `CreateTrack` entity instance. Pass `nil` for no initial data.

#### `Directive(data map[string]any) MuxEntity`

Create a new `Directive` entity instance. Pass `nil` for no initial data.

#### `DirectiveRunDetail(data map[string]any) MuxEntity`

Create a new `DirectiveRunDetail` entity instance. Pass `nil` for no initial data.

#### `DrmConfiguration(data map[string]any) MuxEntity`

Create a new `DrmConfiguration` entity instance. Pass `nil` for no initial data.

#### `EditCaption(data map[string]any) MuxEntity`

Create a new `EditCaption` entity instance. Pass `nil` for no initial data.

#### `EngagementHeatmap(data map[string]any) MuxEntity`

Create a new `EngagementHeatmap` entity instance. Pass `nil` for no initial data.

#### `EngagementHotspot(data map[string]any) MuxEntity`

Create a new `EngagementHotspot` entity instance. Pass `nil` for no initial data.

#### `FindBestThumbnail(data map[string]any) MuxEntity`

Create a new `FindBestThumbnail` entity instance. Pass `nil` for no initial data.

#### `FindKeyMoment(data map[string]any) MuxEntity`

Create a new `FindKeyMoment` entity instance. Pass `nil` for no initial data.

#### `FindScene(data map[string]any) MuxEntity`

Create a new `FindScene` entity instance. Pass `nil` for no initial data.

#### `GenerateAssetShot(data map[string]any) MuxEntity`

Create a new `GenerateAssetShot` entity instance. Pass `nil` for no initial data.

#### `GenerateChapter(data map[string]any) MuxEntity`

Create a new `GenerateChapter` entity instance. Pass `nil` for no initial data.

#### `GenerateEngagementInsight(data map[string]any) MuxEntity`

Create a new `GenerateEngagementInsight` entity instance. Pass `nil` for no initial data.

#### `GeneratePremiumCaption(data map[string]any) MuxEntity`

Create a new `GeneratePremiumCaption` entity instance. Pass `nil` for no initial data.

#### `GenerateTrackSubtitle(data map[string]any) MuxEntity`

Create a new `GenerateTrackSubtitle` entity instance. Pass `nil` for no initial data.

#### `Incident(data map[string]any) MuxEntity`

Create a new `Incident` entity instance. Pass `nil` for no initial data.

#### `InputInfo(data map[string]any) MuxEntity`

Create a new `InputInfo` entity instance. Pass `nil` for no initial data.

#### `JobSummary(data map[string]any) MuxEntity`

Create a new `JobSummary` entity instance. Pass `nil` for no initial data.

#### `ListAllMetricValue(data map[string]any) MuxEntity`

Create a new `ListAllMetricValue` entity instance. Pass `nil` for no initial data.

#### `ListBreakdownValue(data map[string]any) MuxEntity`

Create a new `ListBreakdownValue` entity instance. Pass `nil` for no initial data.

#### `ListDeliveryUsage(data map[string]any) MuxEntity`

Create a new `ListDeliveryUsage` entity instance. Pass `nil` for no initial data.

#### `ListDimensionValue(data map[string]any) MuxEntity`

Create a new `ListDimensionValue` entity instance. Pass `nil` for no initial data.

#### `ListError(data map[string]any) MuxEntity`

Create a new `ListError` entity instance. Pass `nil` for no initial data.

#### `ListExport(data map[string]any) MuxEntity`

Create a new `ListExport` entity instance. Pass `nil` for no initial data.

#### `ListFilterValue(data map[string]any) MuxEntity`

Create a new `ListFilterValue` entity instance. Pass `nil` for no initial data.

#### `ListInsight(data map[string]any) MuxEntity`

Create a new `ListInsight` entity instance. Pass `nil` for no initial data.

#### `ListMonitoringDimension(data map[string]any) MuxEntity`

Create a new `ListMonitoringDimension` entity instance. Pass `nil` for no initial data.

#### `ListMonitoringMetric(data map[string]any) MuxEntity`

Create a new `ListMonitoringMetric` entity instance. Pass `nil` for no initial data.

#### `ListRealTimeDimension(data map[string]any) MuxEntity`

Create a new `ListRealTimeDimension` entity instance. Pass `nil` for no initial data.

#### `ListRealTimeMetric(data map[string]any) MuxEntity`

Create a new `ListRealTimeMetric` entity instance. Pass `nil` for no initial data.

#### `ListRelatedIncident(data map[string]any) MuxEntity`

Create a new `ListRelatedIncident` entity instance. Pass `nil` for no initial data.

#### `ListSubviewBreakdownValue(data map[string]any) MuxEntity`

Create a new `ListSubviewBreakdownValue` entity instance. Pass `nil` for no initial data.

#### `ListSubviewComparisonValue(data map[string]any) MuxEntity`

Create a new `ListSubviewComparisonValue` entity instance. Pass `nil` for no initial data.

#### `ListSubviewDimension(data map[string]any) MuxEntity`

Create a new `ListSubviewDimension` entity instance. Pass `nil` for no initial data.

#### `ListSubviewDimensionValue(data map[string]any) MuxEntity`

Create a new `ListSubviewDimensionValue` entity instance. Pass `nil` for no initial data.

#### `ListVideoViewExport(data map[string]any) MuxEntity`

Create a new `ListVideoViewExport` entity instance. Pass `nil` for no initial data.

#### `LiveStream(data map[string]any) MuxEntity`

Create a new `LiveStream` entity instance. Pass `nil` for no initial data.

#### `LiveStreamPlaybackId(data map[string]any) MuxEntity`

Create a new `LiveStreamPlaybackId` entity instance. Pass `nil` for no initial data.

#### `MetricTimeseriesData(data map[string]any) MuxEntity`

Create a new `MetricTimeseriesData` entity instance. Pass `nil` for no initial data.

#### `Moderate(data map[string]any) MuxEntity`

Create a new `Moderate` entity instance. Pass `nil` for no initial data.

#### `MonitoringBreakdown(data map[string]any) MuxEntity`

Create a new `MonitoringBreakdown` entity instance. Pass `nil` for no initial data.

#### `MonitoringBreakdownTimeseries(data map[string]any) MuxEntity`

Create a new `MonitoringBreakdownTimeseries` entity instance. Pass `nil` for no initial data.

#### `MonitoringHistogramTimeseries(data map[string]any) MuxEntity`

Create a new `MonitoringHistogramTimeseries` entity instance. Pass `nil` for no initial data.

#### `MonitoringTimeseries(data map[string]any) MuxEntity`

Create a new `MonitoringTimeseries` entity instance. Pass `nil` for no initial data.

#### `Overall(data map[string]any) MuxEntity`

Create a new `Overall` entity instance. Pass `nil` for no initial data.

#### `PlaybackRestriction(data map[string]any) MuxEntity`

Create a new `PlaybackRestriction` entity instance. Pass `nil` for no initial data.

#### `RealTimeBreakdown(data map[string]any) MuxEntity`

Create a new `RealTimeBreakdown` entity instance. Pass `nil` for no initial data.

#### `RealTimeHistogramTimeseries(data map[string]any) MuxEntity`

Create a new `RealTimeHistogramTimeseries` entity instance. Pass `nil` for no initial data.

#### `RealTimeTimeseries(data map[string]any) MuxEntity`

Create a new `RealTimeTimeseries` entity instance. Pass `nil` for no initial data.

#### `SignalLiveStreamComplete(data map[string]any) MuxEntity`

Create a new `SignalLiveStreamComplete` entity instance. Pass `nil` for no initial data.

#### `SigningKey(data map[string]any) MuxEntity`

Create a new `SigningKey` entity instance. Pass `nil` for no initial data.

#### `SimulcastTarget(data map[string]any) MuxEntity`

Create a new `SimulcastTarget` entity instance. Pass `nil` for no initial data.

#### `StaticRendition(data map[string]any) MuxEntity`

Create a new `StaticRendition` entity instance. Pass `nil` for no initial data.

#### `SubviewBreakdownTimeseries(data map[string]any) MuxEntity`

Create a new `SubviewBreakdownTimeseries` entity instance. Pass `nil` for no initial data.

#### `SubviewOverallValue(data map[string]any) MuxEntity`

Create a new `SubviewOverallValue` entity instance. Pass `nil` for no initial data.

#### `Summarize(data map[string]any) MuxEntity`

Create a new `Summarize` entity instance. Pass `nil` for no initial data.

#### `TranscriptionVocabulary(data map[string]any) MuxEntity`

Create a new `TranscriptionVocabulary` entity instance. Pass `nil` for no initial data.

#### `TranslateAudio(data map[string]any) MuxEntity`

Create a new `TranslateAudio` entity instance. Pass `nil` for no initial data.

#### `TranslateCaption(data map[string]any) MuxEntity`

Create a new `TranslateCaption` entity instance. Pass `nil` for no initial data.

#### `UpdateAssetTrack(data map[string]any) MuxEntity`

Create a new `UpdateAssetTrack` entity instance. Pass `nil` for no initial data.

#### `Upload(data map[string]any) MuxEntity`

Create a new `Upload` entity instance. Pass `nil` for no initial data.

#### `UrlSigningKey(data map[string]any) MuxEntity`

Create a new `UrlSigningKey` entity instance. Pass `nil` for no initial data.

#### `UsageExport(data map[string]any) MuxEntity`

Create a new `UsageExport` entity instance. Pass `nil` for no initial data.

#### `VideoView(data map[string]any) MuxEntity`

Create a new `VideoView` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) MuxEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `WhoAmI(data map[string]any) MuxEntity`

Create a new `WhoAmI` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AnnotationEntity

```go
annotation := client.Annotation(nil)
fmt.Println(annotation.GetName()) // "annotation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Datetime when the annotation applies |
| `id` | `string` | Yes | Unique identifier for the annotation |
| `note` | `string` | Yes | The annotation note content |
| `sub_property_id` | `string` | No | Customer-defined sub-property identifier |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Annotation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Annotation(nil).Load(map[string]any{"id": "annotation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Annotation(nil).Create(map[string]any{
    "date": "example_date",
    "id": "example_id",
    "note": "example_note",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Annotation(nil).Update(map[string]any{
    "id": "annotation_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Annotation(nil).Remove(map[string]any{"id": "annotation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnnotationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AskQuestionEntity

```go
askQuestion := client.AskQuestion(nil)
fmt.Println(askQuestion.GetName()) // "ask_question"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | Yes | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AskQuestion(nil).Load(map[string]any{"id": "ask_question_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AskQuestion(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "outputs": map[string]any{},
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AskQuestionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssetEntity

```go
asset := client.Asset(nil)
fmt.Println(asset.GetName()) // "asset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `string` | Yes | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `data` | `map[string]any` | No |  |
| `directives` | `[]any` | No | The Mux Robots directives applied to the asset. |
| `duration` | `float64` | No | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `string` | Yes | This field is deprecated. |
| `errors` | `map[string]any` | No | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `bool` | No | Whether to perform shot detection on this asset. |
| `id` | `string` | Yes | Unique identifier for the Asset. |
| `ingest_type` | `string` | No | The type of ingest used to create the asset. |
| `is_live` | `bool` | No | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `string` | No | Unique identifier for the live stream. |
| `master` | `map[string]any` | No | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `string` | Yes |  |
| `max_resolution_tier` | `string` | Yes | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `float64` | No | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `string` | No | This field is deprecated. |
| `meta` | `map[string]any` | No | Customer provided metadata about this asset. |
| `mp4_support` | `string` | No | Deprecated. |
| `non_standard_input_reasons` | `map[string]any` | No | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `bool` | No | Normalize the audio track loudness level. |
| `passthrough` | `string` | No | You can set this field to anything you want. |
| `playback_ids` | `[]any` | No | An array of Playback ID objects. |
| `progress` | `map[string]any` | Yes | Detailed state information about the asset ingest process. |
| `recording_times` | `[]any` | No | An array of individual live stream recording sessions. |
| `resolution_tier` | `string` | No | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `map[string]any` | Yes | The results of generating shots on the video |
| `source_asset_id` | `string` | No | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `map[string]any` | No | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `string` | Yes | The status of the asset. |
| `test` | `bool` | No | True means this live stream is a test asset. |
| `thumbnail_time` | `float64` | No | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `[]any` | No | The individual media tracks that make up an asset. |
| `upload_id` | `string` | No | Unique identifier for the Direct Upload. |
| `video_quality` | `string` | No | The video quality controls the cost, quality, and available platform features for the asset. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Asset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Asset(nil).Load(map[string]any{"id": "asset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Asset(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "encoding_tier": "example_encoding_tier",
    "id": "example_id",
    "master_access": "example_master_access",
    "max_resolution_tier": "example_max_resolution_tier",
    "progress": map[string]any{},
    "shots": map[string]any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Asset(nil).Update(map[string]any{
    "id": "asset_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Asset(nil).Remove(map[string]any{"id": "asset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssetOrLiveStreamIdEntity

```go
assetOrLiveStreamId := client.AssetOrLiveStreamId(nil)
fmt.Println(assetOrLiveStreamId.GetName()) // "asset_or_live_stream_id"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | `map[string]any` | Yes | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssetOrLiveStreamId(nil).Load(map[string]any{"playback_id": "playback_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssetOrLiveStreamIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssetPlaybackIdEntity

```go
assetPlaybackId := client.AssetPlaybackId(nil)
fmt.Println(assetPlaybackId.GetName()) // "asset_playback_id"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `id` | `string` | Yes | Unique identifier for the PlaybackID |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssetPlaybackId(nil).Load(map[string]any{"id": "asset_playback_id_id", "asset_id": "asset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssetPlaybackIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssetShotEntity

```go
assetShot := client.AssetShot(nil)
fmt.Println(assetShot.GetName()) // "asset_shot"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `map[string]any` | No | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | `string` | No | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | `string` | Yes | The status of the shot detection process |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssetShot(nil).Load(map[string]any{"asset_id": "asset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssetShotEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreatePlaybackIdEntity

```go
createPlaybackId := client.CreatePlaybackId(nil)
fmt.Println(createPlaybackId.GetName()) // "create_playback_id"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `policy` | `string` | No | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreatePlaybackId(nil).Create(map[string]any{
    "asset_id": "example_asset_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreatePlaybackIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateTrackEntity

```go
createTrack := client.CreateTrack(nil)
fmt.Println(createTrack.GetName()) // "create_track"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_captions` | `bool` | No | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `language_code` | `string` | Yes | The language code of this track. |
| `name` | `string` | No | The name of the track containing a human-readable description. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `text_type` | `string` | No |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes | The URL of the file that Mux should download and use. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreateTrack(nil).Create(map[string]any{
    "asset_id": "example_asset_id",
    "language_code": "example_language_code",
    "type": "example_type",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateTrackEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DirectiveEntity

```go
directive := client.Directive(nil)
fmt.Println(directive.GetName()) // "directive"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the directive was created. |
| `id` | `string` | Yes | Stable directive identifier (drv_...). |
| `name` | `string` | Yes | Human-readable directive name. |
| `resources` | `[]any` | Yes | Resource declarations. |
| `subject` | `map[string]any` | Yes |  |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) when the directive was last updated. |
| `workflows` | `[]any` | Yes | Workflow bindings. |

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

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Directive(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Directive(nil).Load(map[string]any{"id": "directive_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Directive(nil).Create(map[string]any{
    "created_at": 1,
    "id": "example_id",
    "name": "example_name",
    "resources": []any{},
    "subject": map[string]any{},
    "updated_at": 1,
    "workflows": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Directive(nil).Remove(map[string]any{"id": "directive_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DirectiveEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DirectiveRunDetailEntity

```go
directiveRunDetail := client.DirectiveRunDetail(nil)
fmt.Println(directiveRunDetail.GetName()) // "directive_run_detail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `any` | Yes | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `[]any` | Yes | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `string` | Yes | Unique run identifier (drvrun_...). |
| `started_at` | `int` | Yes | Unix timestamp (seconds) when the run started. |
| `status` | `string` | Yes | Current run status. |
| `subject_id` | `string` | Yes | The bare Mux asset ID this run targeted. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DirectiveRunDetail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DirectiveRunDetail(nil).Load(map[string]any{"directive_id": "directive_id", "run_id": "run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DirectiveRunDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DrmConfigurationEntity

```go
drmConfiguration := client.DrmConfiguration(nil)
fmt.Println(drmConfiguration.GetName()) // "drm_configuration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the DRM Configuration. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DrmConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DrmConfiguration(nil).Load(map[string]any{"id": "drm_configuration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DrmConfigurationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EditCaptionEntity

```go
editCaption := client.EditCaption(nil)
fmt.Println(editCaption.GetName()) // "edit_caption"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | Yes | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EditCaption(nil).Load(map[string]any{"id": "edit_caption_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EditCaption(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "outputs": map[string]any{},
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EditCaptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EngagementHeatmapEntity

```go
engagementHeatmap := client.EngagementHeatmap(nil)
fmt.Println(engagementHeatmap.GetName()) // "engagement_heatmap"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `timeframe` | `[]any` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EngagementHeatmap(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EngagementHeatmapEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EngagementHotspotEntity

```go
engagementHotspot := client.EngagementHotspot(nil)
fmt.Println(engagementHotspot.GetName()) // "engagement_hotspot"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `timeframe` | `[]any` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EngagementHotspot(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EngagementHotspotEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FindBestThumbnailEntity

```go
findBestThumbnail := client.FindBestThumbnail(nil)
fmt.Println(findBestThumbnail.GetName()) // "find_best_thumbnail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | Yes | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FindBestThumbnail(nil).Load(map[string]any{"id": "find_best_thumbnail_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.FindBestThumbnail(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "outputs": map[string]any{},
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FindBestThumbnailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FindKeyMomentEntity

```go
findKeyMoment := client.FindKeyMoment(nil)
fmt.Println(findKeyMoment.GetName()) // "find_key_moment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | Yes | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FindKeyMoment(nil).Load(map[string]any{"id": "find_key_moment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.FindKeyMoment(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "outputs": map[string]any{},
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FindKeyMomentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FindSceneEntity

```go
findScene := client.FindScene(nil)
fmt.Println(findScene.GetName()) // "find_scene"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | Yes | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FindScene(nil).Load(map[string]any{"id": "find_scene_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.FindScene(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "outputs": map[string]any{},
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FindSceneEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenerateAssetShotEntity

```go
generateAssetShot := client.GenerateAssetShot(nil)
fmt.Println(generateAssetShot.GetName()) // "generate_asset_shot"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GenerateAssetShot(nil).Create(map[string]any{
    "asset_id": "example_asset_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerateAssetShotEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenerateChapterEntity

```go
generateChapter := client.GenerateChapter(nil)
fmt.Println(generateChapter.GetName()) // "generate_chapter"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | Yes | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GenerateChapter(nil).Load(map[string]any{"id": "generate_chapter_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GenerateChapter(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "outputs": map[string]any{},
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerateChapterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenerateEngagementInsightEntity

```go
generateEngagementInsight := client.GenerateEngagementInsight(nil)
fmt.Println(generateEngagementInsight.GetName()) // "generate_engagement_insight"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | Yes | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GenerateEngagementInsight(nil).Load(map[string]any{"id": "generate_engagement_insight_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GenerateEngagementInsight(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "outputs": map[string]any{},
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerateEngagementInsightEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GeneratePremiumCaptionEntity

```go
generatePremiumCaption := client.GeneratePremiumCaption(nil)
fmt.Println(generatePremiumCaption.GetName()) // "generate_premium_caption"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | Yes | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GeneratePremiumCaption(nil).Load(map[string]any{"id": "generate_premium_caption_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GeneratePremiumCaption(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "outputs": map[string]any{},
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GeneratePremiumCaptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenerateTrackSubtitleEntity

```go
generateTrackSubtitle := client.GenerateTrackSubtitle(nil)
fmt.Println(generateTrackSubtitle.GetName()) // "generate_track_subtitle"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generated_subtitles` | `[]any` | Yes | Generate subtitle tracks using automatic speech recognition with this configuration. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GenerateTrackSubtitle(nil).Create(map[string]any{
    "asset_id": "example_asset_id",
    "track_id": "example_track_id",
    "generated_subtitles": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerateTrackSubtitleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IncidentEntity

```go
incident := client.Incident(nil)
fmt.Println(incident.GetName()) // "incident"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `int` | Yes |  |
| `affected_views_per_hour` | `int` | Yes |  |
| `affected_views_per_hour_on_open` | `int` | Yes |  |
| `breakdowns` | `[]any` | Yes |  |
| `data` | `map[string]any` | Yes |  |
| `description` | `string` | Yes |  |
| `error_description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `impact` | `string` | Yes |  |
| `incident_key` | `string` | Yes |  |
| `measured_value` | `float64` | Yes |  |
| `measured_value_on_close` | `float64` | Yes |  |
| `measurement` | `string` | Yes |  |
| `notification_rules` | `[]any` | Yes |  |
| `notifications` | `[]any` | Yes |  |
| `resolved_at` | `string` | Yes |  |
| `sample_size` | `int` | Yes |  |
| `sample_size_unit` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `threshold` | `float64` | Yes |  |
| `timeframe` | `[]any` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Incident(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Incident(nil).Load(map[string]any{"id": "incident_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InputInfoEntity

```go
inputInfo := client.InputInfo(nil)
fmt.Println(inputInfo.GetName()) // "input_info"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `map[string]any` | No |  |
| `settings` | `map[string]any` | No | An array of objects that each describe an input file to be used to create the asset. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.InputInfo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InputInfoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## JobSummaryEntity

```go
jobSummary := client.JobSummary(nil)
fmt.Println(jobSummary.GetName()) // "job_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `id` | `string` | Yes | Unique job identifier. |
| `links` | `map[string]any` | Yes | Hypermedia links for this job. |
| `status` | `string` | Yes | Current job status. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes | Workflow type that created this job. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.JobSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.JobSummary(nil).Create(map[string]any{
    "job_id": "example_job_id",
    "created_at": 1,
    "id": "example_id",
    "links": map[string]any{},
    "status": "example_status",
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `JobSummaryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListAllMetricValueEntity

```go
listAllMetricValue := client.ListAllMetricValue(nil)
fmt.Println(listAllMetricValue.GetName()) // "list_all_metric_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_views` | `int` | No |  |
| `items` | `[]any` | No |  |
| `metric` | `string` | No |  |
| `name` | `string` | Yes |  |
| `started_views` | `int` | No |  |
| `total_playing_time` | `int` | No |  |
| `type` | `string` | No |  |
| `unique_viewers` | `int` | No |  |
| `value` | `float64` | No |  |
| `view_count` | `int` | No |  |
| `watch_time` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListAllMetricValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListAllMetricValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListBreakdownValueEntity

```go
listBreakdownValue := client.ListBreakdownValue(nil)
fmt.Println(listBreakdownValue.GetName()) // "list_breakdown_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field` | `string` | Yes |  |
| `negative_impact` | `int` | Yes |  |
| `total_playing_time` | `int` | Yes |  |
| `total_watch_time` | `int` | Yes |  |
| `value` | `float64` | Yes |  |
| `views` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListBreakdownValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListBreakdownValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListDeliveryUsageEntity

```go
listDeliveryUsage := client.ListDeliveryUsage(nil)
fmt.Println(listDeliveryUsage.GetName()) // "list_delivery_usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_duration` | `float64` | Yes | The duration of the asset in seconds. |
| `asset_encoding_tier` | `string` | Yes | This field is deprecated. |
| `asset_id` | `string` | Yes | Unique identifier for the asset. |
| `asset_resolution_tier` | `string` | Yes | The resolution tier that the asset was ingested at, affecting billing for ingest & storage |
| `asset_state` | `string` | Yes | The state of the asset. |
| `asset_video_quality` | `string` | No | The video quality that the asset was ingested at. |
| `created_at` | `string` | Yes | Time at which the asset was created. |
| `deleted_at` | `string` | No | If exists, time at which the asset was deleted. |
| `delivered_seconds` | `float64` | Yes | Total number of delivered seconds during this time window. |
| `delivered_seconds_by_resolution` | `map[string]any` | Yes | Seconds delivered broken into resolution tiers. |
| `live_stream_id` | `string` | No | Unique identifier for the live stream that created the asset. |
| `passthrough` | `string` | No | The `passthrough` value for the asset. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListDeliveryUsage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListDeliveryUsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListDimensionValueEntity

```go
listDimensionValue := client.ListDimensionValue(nil)
fmt.Println(listDimensionValue.GetName()) // "list_dimension_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | Yes |  |
| `timeframe` | `[]any` | Yes |  |
| `total_count` | `int` | Yes |  |
| `total_row_count` | `int` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListDimensionValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ListDimensionValue(nil).Load(map[string]any{"dimension_id": "dimension_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListDimensionValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListErrorEntity

```go
listError := client.ListError(nil)
fmt.Println(listError.GetName()) // "list_error"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `int` | Yes | The error code |
| `count` | `int` | Yes | The total number of views that experienced this error. |
| `description` | `string` | Yes | Description of the error. |
| `id` | `int` | Yes | A unique identifier for this error. |
| `last_seen` | `string` | Yes | The last time this error was seen (ISO 8601 timestamp). |
| `message` | `string` | Yes | The error message. |
| `notes` | `string` | Yes | Notes that are attached to this error. |
| `percentage` | `float64` | Yes | The percentage of views that experienced this error. |
| `player_error_code` | `string` | Yes | The string version of the error code |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListError(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListErrorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListExportEntity

```go
listExport := client.ListExport(nil)
fmt.Println(listExport.GetName()) // "list_export"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | Yes |  |
| `timeframe` | `[]any` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListExport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListExportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListFilterValueEntity

```go
listFilterValue := client.ListFilterValue(nil)
fmt.Println(listFilterValue.GetName()) // "list_filter_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | Yes |  |
| `timeframe` | `[]any` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListFilterValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ListFilterValue(nil).Load(map[string]any{"filter_id": "filter_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListFilterValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListInsightEntity

```go
listInsight := client.ListInsight(nil)
fmt.Println(listInsight.GetName()) // "list_insight"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `filter_column` | `string` | Yes |  |
| `filter_value` | `string` | Yes |  |
| `metric` | `float64` | Yes |  |
| `negative_impact_score` | `float64` | Yes |  |
| `total_playing_time` | `int` | Yes |  |
| `total_views` | `int` | Yes |  |
| `total_watch_time` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListInsight(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListInsightEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListMonitoringDimensionEntity

```go
listMonitoringDimension := client.ListMonitoringDimension(nil)
fmt.Println(listMonitoringDimension.GetName()) // "list_monitoring_dimension"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListMonitoringDimension(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListMonitoringDimensionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListMonitoringMetricEntity

```go
listMonitoringMetric := client.ListMonitoringMetric(nil)
fmt.Println(listMonitoringMetric.GetName()) // "list_monitoring_metric"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListMonitoringMetric(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListMonitoringMetricEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListRealTimeDimensionEntity

```go
listRealTimeDimension := client.ListRealTimeDimension(nil)
fmt.Println(listRealTimeDimension.GetName()) // "list_real_time_dimension"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListRealTimeDimension(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListRealTimeDimensionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListRealTimeMetricEntity

```go
listRealTimeMetric := client.ListRealTimeMetric(nil)
fmt.Println(listRealTimeMetric.GetName()) // "list_real_time_metric"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListRealTimeMetric(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListRealTimeMetricEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListRelatedIncidentEntity

```go
listRelatedIncident := client.ListRelatedIncident(nil)
fmt.Println(listRelatedIncident.GetName()) // "list_related_incident"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `int` | Yes |  |
| `affected_views_per_hour` | `int` | Yes |  |
| `affected_views_per_hour_on_open` | `int` | Yes |  |
| `breakdowns` | `[]any` | Yes |  |
| `description` | `string` | Yes |  |
| `error_description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `impact` | `string` | Yes |  |
| `incident_key` | `string` | Yes |  |
| `measured_value` | `float64` | Yes |  |
| `measured_value_on_close` | `float64` | Yes |  |
| `measurement` | `string` | Yes |  |
| `notification_rules` | `[]any` | Yes |  |
| `notifications` | `[]any` | Yes |  |
| `resolved_at` | `string` | Yes |  |
| `sample_size` | `int` | Yes |  |
| `sample_size_unit` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `threshold` | `float64` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListRelatedIncident(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListRelatedIncidentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListSubviewBreakdownValueEntity

```go
listSubviewBreakdownValue := client.ListSubviewBreakdownValue(nil)
fmt.Println(listSubviewBreakdownValue.GetName()) // "list_subview_breakdown_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakdown_value` | `string` | Yes |  |
| `metric_value` | `float64` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListSubviewBreakdownValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListSubviewBreakdownValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListSubviewComparisonValueEntity

```go
listSubviewComparisonValue := client.ListSubviewComparisonValue(nil)
fmt.Println(listSubviewComparisonValue.GetName()) // "list_subview_comparison_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dimension_value` | `string` | Yes |  |
| `values` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListSubviewComparisonValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListSubviewComparisonValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListSubviewDimensionEntity

```go
listSubviewDimension := client.ListSubviewDimension(nil)
fmt.Println(listSubviewDimension.GetName()) // "list_subview_dimension"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `total_row_count` | `int` | Yes | Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ListSubviewDimension(nil).Load(map[string]any{"subview_type": "subview_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListSubviewDimensionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListSubviewDimensionValueEntity

```go
listSubviewDimensionValue := client.ListSubviewDimensionValue(nil)
fmt.Println(listSubviewDimensionValue.GetName()) // "list_subview_dimension_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | Yes |  |
| `meta` | `any` | Yes |  |
| `timeframe` | `[]any` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ListSubviewDimensionValue(nil).Load(map[string]any{"dimension_name": "dimension_name", "subview_metric_id": "subview_metric_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListSubviewDimensionValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListVideoViewExportEntity

```go
listVideoViewExport := client.ListVideoViewExport(nil)
fmt.Println(listVideoViewExport.GetName()) // "list_video_view_export"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `export_date` | `string` | Yes |  |
| `files` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListVideoViewExport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListVideoViewExportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LiveStreamEntity

```go
liveStream := client.LiveStream(nil)
fmt.Println(liveStream.GetName()) // "live_stream"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_asset_id` | `string` | No | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `string` | No | The protocol used for the active ingest stream. |
| `advanced_playback_policies` | `[]any` | No | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `audio_only` | `bool` | No | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `string` | Yes | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `[]any` | No | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `[]any` | No | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `string` | Yes | Unique identifier for the Live Stream. |
| `latency_mode` | `string` | Yes | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `bool` | No | This field is deprecated. |
| `max_continuous_duration` | `int` | Yes | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `map[string]any` | No | Customer provided metadata about this live stream. |
| `new_asset_settings` | `map[string]any` | No | Updates the new asset settings to use to generate a new asset for this live stream. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `[]any` | No | An array of Playback ID objects. |
| `playback_policies` | `[]any` | No | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `playback_policy` | `[]any` | No | Deprecated. |
| `recent_asset_ids` | `[]any` | No | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `string` | No | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `float64` | No | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `bool` | No | This field is deprecated. |
| `simulcast_targets` | `[]any` | No | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | `string` | No | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `string` | Yes | `idle` indicates that there is no active broadcast. |
| `stream_key` | `string` | Yes | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | `bool` | No | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | `bool` | No | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

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

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LiveStream(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LiveStream(nil).Load(map[string]any{"id": "live_stream_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LiveStream(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "latency_mode": "example_latency_mode",
    "max_continuous_duration": 1,
    "status": "example_status",
    "stream_key": "example_stream_key",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.LiveStream(nil).Update(map[string]any{
    "id": "live_stream_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.LiveStream(nil).Remove(map[string]any{"id": "live_stream_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LiveStreamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LiveStreamPlaybackIdEntity

```go
liveStreamPlaybackId := client.LiveStreamPlaybackId(nil)
fmt.Println(liveStreamPlaybackId.GetName()) // "live_stream_playback_id"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `id` | `string` | Yes | Unique identifier for the PlaybackID |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LiveStreamPlaybackId(nil).Load(map[string]any{"id": "live_stream_playback_id_id", "live_stream_id": "live_stream_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LiveStreamPlaybackIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MetricTimeseriesDataEntity

```go
metricTimeseriesData := client.MetricTimeseriesData(nil)
fmt.Println(metricTimeseriesData.GetName()) // "metric_timeseries_data"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `timeframe` | `[]any` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MetricTimeseriesData(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MetricTimeseriesDataEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ModerateEntity

```go
moderate := client.Moderate(nil)
fmt.Println(moderate.GetName()) // "moderate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | Yes | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Moderate(nil).Load(map[string]any{"id": "moderate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Moderate(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "outputs": map[string]any{},
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ModerateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MonitoringBreakdownEntity

```go
monitoringBreakdown := client.MonitoringBreakdown(nil)
fmt.Println(monitoringBreakdown.GetName()) // "monitoring_breakdown"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `display_value` | `string` | No |  |
| `metric_value` | `float64` | Yes |  |
| `negative_impact` | `int` | Yes |  |
| `starting_up_viewers` | `int` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MonitoringBreakdown(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MonitoringBreakdownEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MonitoringBreakdownTimeseriesEntity

```go
monitoringBreakdownTimeseries := client.MonitoringBreakdownTimeseries(nil)
fmt.Println(monitoringBreakdownTimeseries.GetName()) // "monitoring_breakdown_timeseries"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `values` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MonitoringBreakdownTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MonitoringBreakdownTimeseriesEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MonitoringHistogramTimeseriesEntity

```go
monitoringHistogramTimeseries := client.MonitoringHistogramTimeseries(nil)
fmt.Println(monitoringHistogramTimeseries.GetName()) // "monitoring_histogram_timeseries"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `float64` | Yes |  |
| `bucket_values` | `[]any` | Yes |  |
| `max_percentage` | `float64` | Yes |  |
| `median` | `float64` | Yes |  |
| `p95` | `float64` | Yes |  |
| `sum` | `int` | Yes |  |
| `timestamp` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MonitoringHistogramTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MonitoringHistogramTimeseriesEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MonitoringTimeseriesEntity

```go
monitoringTimeseries := client.MonitoringTimeseries(nil)
fmt.Println(monitoringTimeseries.GetName()) // "monitoring_timeseries"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `date` | `string` | Yes |  |
| `value` | `float64` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MonitoringTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MonitoringTimeseriesEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OverallEntity

```go
overall := client.Overall(nil)
fmt.Println(overall.GetName()) // "overall"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `timeframe` | `[]any` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Overall(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OverallEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PlaybackRestrictionEntity

```go
playbackRestriction := client.PlaybackRestriction(nil)
fmt.Println(playbackRestriction.GetName()) // "playback_restriction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Yes | Unique identifier for the Playback Restriction. |
| `referrer` | `map[string]any` | Yes | A list of domains allowed to play your videos. |
| `updated_at` | `string` | Yes | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `map[string]any` | Yes | Rules that control what user agents are allowed to play your videos. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PlaybackRestriction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PlaybackRestriction(nil).Load(map[string]any{"id": "playback_restriction_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PlaybackRestriction(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "referrer": map[string]any{},
    "updated_at": "example_updated_at",
    "user_agent": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PlaybackRestriction(nil).Update(map[string]any{
    "id": "playback_restriction_id",
    "playback_restriction_id": "playback_restriction_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PlaybackRestriction(nil).Remove(map[string]any{"id": "playback_restriction_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PlaybackRestrictionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RealTimeBreakdownEntity

```go
realTimeBreakdown := client.RealTimeBreakdown(nil)
fmt.Println(realTimeBreakdown.GetName()) // "real_time_breakdown"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `display_value` | `string` | No |  |
| `metric_value` | `float64` | Yes |  |
| `negative_impact` | `int` | Yes |  |
| `starting_up_viewers` | `int` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RealTimeBreakdown(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RealTimeBreakdownEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RealTimeHistogramTimeseriesEntity

```go
realTimeHistogramTimeseries := client.RealTimeHistogramTimeseries(nil)
fmt.Println(realTimeHistogramTimeseries.GetName()) // "real_time_histogram_timeseries"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `float64` | Yes |  |
| `bucket_values` | `[]any` | Yes |  |
| `max_percentage` | `float64` | Yes |  |
| `median` | `float64` | Yes |  |
| `p95` | `float64` | Yes |  |
| `sum` | `int` | Yes |  |
| `timestamp` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RealTimeHistogramTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RealTimeHistogramTimeseriesEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RealTimeTimeseriesEntity

```go
realTimeTimeseries := client.RealTimeTimeseries(nil)
fmt.Println(realTimeTimeseries.GetName()) // "real_time_timeseries"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `date` | `string` | Yes |  |
| `value` | `float64` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RealTimeTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RealTimeTimeseriesEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SignalLiveStreamCompleteEntity

```go
signalLiveStreamComplete := client.SignalLiveStreamComplete(nil)
fmt.Println(signalLiveStreamComplete.GetName()) // "signal_live_stream_complete"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SignalLiveStreamComplete(nil).Update(map[string]any{
    "live_stream_id": "live_stream_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SignalLiveStreamCompleteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SigningKeyEntity

```go
signingKey := client.SigningKey(nil)
fmt.Println(signingKey.GetName()) // "signing_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time at which the object was created. |
| `data` | `map[string]any` | No |  |
| `id` | `string` | Yes | Unique identifier for the Signing Key. |
| `private_key` | `string` | No | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SigningKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SigningKey(nil).Load(map[string]any{"id": "signing_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SigningKey(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SigningKey(nil).Remove(map[string]any{"id": "signing_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SigningKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SimulcastTargetEntity

```go
simulcastTarget := client.SimulcastTarget(nil)
fmt.Println(simulcastTarget.GetName()) // "simulcast_target"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SimulcastTarget(nil).Load(map[string]any{"id": "simulcast_target_id", "live_stream_id": "live_stream_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SimulcastTarget(nil).Create(map[string]any{
    "live_stream_id": "example_live_stream_id",
    "id": "example_id",
    "status": "example_status",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SimulcastTargetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StaticRenditionEntity

```go
staticRendition := client.StaticRendition(nil)
fmt.Println(staticRendition.GetName()) // "static_rendition"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the static rendition. |
| `resolution` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.StaticRendition(nil).Create(map[string]any{
    "asset_id": "example_asset_id",
    "resolution": "example_resolution",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StaticRenditionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubviewBreakdownTimeseriesEntity

```go
subviewBreakdownTimeseries := client.SubviewBreakdownTimeseries(nil)
fmt.Println(subviewBreakdownTimeseries.GetName()) // "subview_breakdown_timeseries"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `values` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubviewBreakdownTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubviewBreakdownTimeseriesEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubviewOverallValueEntity

```go
subviewOverallValue := client.SubviewOverallValue(nil)
fmt.Println(subviewOverallValue.GetName()) // "subview_overall_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `timeframe` | `[]any` | Yes |  |
| `total_row_count` | `int` | Yes | Always `null` for this endpoint — a single aggregate value has no row count. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubviewOverallValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubviewOverallValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SummarizeEntity

```go
summarize := client.Summarize(nil)
fmt.Println(summarize.GetName()) // "summarize"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | Yes | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Summarize(nil).Load(map[string]any{"id": "summarize_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Summarize(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "outputs": map[string]any{},
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SummarizeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TranscriptionVocabularyEntity

```go
transcriptionVocabulary := client.TranscriptionVocabulary(nil)
fmt.Println(transcriptionVocabulary.GetName()) // "transcription_vocabulary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Yes | Unique identifier for the Transcription Vocabulary |
| `name` | `string` | No | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `[]any` | No | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TranscriptionVocabulary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TranscriptionVocabulary(nil).Load(map[string]any{"id": "transcription_vocabulary_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TranscriptionVocabulary(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TranscriptionVocabulary(nil).Update(map[string]any{
    "id": "transcription_vocabulary_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TranscriptionVocabulary(nil).Remove(map[string]any{"id": "transcription_vocabulary_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TranscriptionVocabularyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TranslateAudioEntity

```go
translateAudio := client.TranslateAudio(nil)
fmt.Println(translateAudio.GetName()) // "translate_audio"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | No | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TranslateAudio(nil).Load(map[string]any{"id": "translate_audio_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TranslateAudio(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TranslateAudioEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TranslateCaptionEntity

```go
translateCaption := client.TranslateCaption(nil)
fmt.Println(translateCaption.GetName()) // "translate_caption"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | Yes | The directive run that dispatched this job. |
| `errors` | `[]any` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `map[string]any` | No | Workflow results. |
| `parameters` | `map[string]any` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TranslateCaption(nil).Load(map[string]any{"id": "translate_caption_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TranslateCaption(nil).Create(map[string]any{
    "created_at": 1,
    "directive": map[string]any{},
    "id": "example_id",
    "parameters": map[string]any{},
    "resources": map[string]any{},
    "status": "example_status",
    "units_consumed": 1,
    "updated_at": 1,
    "workflow": "example_workflow",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TranslateCaptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UpdateAssetTrackEntity

```go
updateAssetTrack := client.UpdateAssetTrack(nil)
fmt.Println(updateAssetTrack.GetName()) // "update_asset_track"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_language_confidence` | `float64` | No | The confidence value (0-1) of the determined language. |
| `closed_captions` | `bool` | No | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `duration` | `float64` | No | The duration in seconds of the track media. |
| `id` | `string` | No | Unique identifier for the Track |
| `language_code` | `string` | No | The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'. |
| `max_channels` | `int` | No | The maximum number of audio channels the track supports. |
| `max_frame_rate` | `float64` | No | The maximum frame rate available for the track. |
| `max_height` | `int` | No | The maximum height in pixels available for the track. |
| `max_width` | `int` | No | The maximum width in pixels available for the track. |
| `name` | `string` | No | The name of the track containing a human-readable description. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `primary` | `bool` | No | For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset. |
| `status` | `string` | No | The status of the track. |
| `text_source` | `string` | No | The source of the text contained in a Track of type `text`. |
| `text_type` | `string` | No | This parameter is only set for `text` type tracks. |
| `type` | `string` | No | The type of track |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UpdateAssetTrack(nil).Update(map[string]any{
    "asset_id": "asset_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpdateAssetTrackEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UploadEntity

```go
upload := client.Upload(nil)
fmt.Println(upload.GetName()) // "upload"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_id` | `string` | No | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `string` | Yes | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `map[string]any` | No | Only set if an error occurred during asset creation. |
| `id` | `string` | Yes | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `map[string]any` | No |  |
| `status` | `string` | Yes |  |
| `test` | `bool` | No | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | `int` | Yes | Max time in seconds for the signed upload URL to be valid. |
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

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Upload(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Upload(nil).Load(map[string]any{"id": "upload_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Upload(nil).Create(map[string]any{
    "cors_origin": "example_cors_origin",
    "id": "example_id",
    "status": "example_status",
    "timeout": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Upload(nil).Update(map[string]any{
    "id": "upload_id",
    "upload_id": "upload_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UploadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UrlSigningKeyEntity

```go
urlSigningKey := client.UrlSigningKey(nil)
fmt.Println(urlSigningKey.GetName()) // "url_signing_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.UrlSigningKey(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UrlSigningKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsageExportEntity

```go
usageExport := client.UsageExport(nil)
fmt.Println(usageExport.GetName()) // "usage_export"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `download_url` | `string` | Yes | A pre-signed URL to download the CSV. |
| `download_url_expires_at` | `int` | Yes | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `file_size` | `int` | Yes | Uncompressed size of the CSV file in bytes. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UsageExport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsageExportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VideoViewEntity

```go
videoView := client.VideoView(nil)
fmt.Println(videoView.GetName()) // "video_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country_code` | `string` | Yes |  |
| `data` | `map[string]any` | Yes |  |
| `error_type_id` | `int` | Yes |  |
| `id` | `string` | Yes |  |
| `playback_failure` | `bool` | Yes |  |
| `player_error_code` | `string` | Yes |  |
| `player_error_message` | `string` | Yes |  |
| `timeframe` | `[]any` | Yes |  |
| `total_row_count` | `int` | Yes |  |
| `video_title` | `string` | Yes |  |
| `view_end` | `string` | Yes |  |
| `view_start` | `string` | Yes |  |
| `viewer_application_name` | `string` | Yes |  |
| `viewer_experience_score` | `float64` | Yes |  |
| `viewer_os_family` | `string` | Yes |  |
| `watch_time` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.VideoView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.VideoView(nil).Load(map[string]any{"id": "video_view_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VideoViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The URL where Mux sends webhook notifications. |
| `created_at` | `string` | Yes | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | `bool` | Yes | Whether Mux attempts to deliver notifications to this webhook. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Webhook(nil).Load(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Webhook(nil).Create(map[string]any{
    "address": "example_address",
    "created_at": "example_created_at",
    "enabled": true,
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Webhook(nil).Update(map[string]any{
    "id": "webhook_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Webhook(nil).Remove(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WhoAmIEntity

```go
whoAmI := client.WhoAmI(nil)
fmt.Println(whoAmI.GetName()) // "who_am_i"
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
| `permissions` | `[]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WhoAmI(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WhoAmIEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


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

```go
client := sdk.NewMuxSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
    },
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

