# Mux Lua SDK Reference

Complete API reference for the Mux Lua SDK.


## MuxSDK

### Constructor

```lua
local sdk = require("mux_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Annotation(data)`

Create a new `Annotation` entity instance. Pass `nil` for no initial data.

#### `AskQuestion(data)`

Create a new `AskQuestion` entity instance. Pass `nil` for no initial data.

#### `Asset(data)`

Create a new `Asset` entity instance. Pass `nil` for no initial data.

#### `AssetOrLiveStreamId(data)`

Create a new `AssetOrLiveStreamId` entity instance. Pass `nil` for no initial data.

#### `AssetPlaybackId(data)`

Create a new `AssetPlaybackId` entity instance. Pass `nil` for no initial data.

#### `AssetShot(data)`

Create a new `AssetShot` entity instance. Pass `nil` for no initial data.

#### `CreatePlaybackId(data)`

Create a new `CreatePlaybackId` entity instance. Pass `nil` for no initial data.

#### `CreateTrack(data)`

Create a new `CreateTrack` entity instance. Pass `nil` for no initial data.

#### `Directive(data)`

Create a new `Directive` entity instance. Pass `nil` for no initial data.

#### `DirectiveRunDetail(data)`

Create a new `DirectiveRunDetail` entity instance. Pass `nil` for no initial data.

#### `DrmConfiguration(data)`

Create a new `DrmConfiguration` entity instance. Pass `nil` for no initial data.

#### `EditCaption(data)`

Create a new `EditCaption` entity instance. Pass `nil` for no initial data.

#### `EngagementHeatmap(data)`

Create a new `EngagementHeatmap` entity instance. Pass `nil` for no initial data.

#### `EngagementHotspot(data)`

Create a new `EngagementHotspot` entity instance. Pass `nil` for no initial data.

#### `FindBestThumbnail(data)`

Create a new `FindBestThumbnail` entity instance. Pass `nil` for no initial data.

#### `FindKeyMoment(data)`

Create a new `FindKeyMoment` entity instance. Pass `nil` for no initial data.

#### `FindScene(data)`

Create a new `FindScene` entity instance. Pass `nil` for no initial data.

#### `GenerateAssetShot(data)`

Create a new `GenerateAssetShot` entity instance. Pass `nil` for no initial data.

#### `GenerateChapter(data)`

Create a new `GenerateChapter` entity instance. Pass `nil` for no initial data.

#### `GenerateEngagementInsight(data)`

Create a new `GenerateEngagementInsight` entity instance. Pass `nil` for no initial data.

#### `GeneratePremiumCaption(data)`

Create a new `GeneratePremiumCaption` entity instance. Pass `nil` for no initial data.

#### `GenerateTrackSubtitle(data)`

Create a new `GenerateTrackSubtitle` entity instance. Pass `nil` for no initial data.

#### `Incident(data)`

Create a new `Incident` entity instance. Pass `nil` for no initial data.

#### `InputInfo(data)`

Create a new `InputInfo` entity instance. Pass `nil` for no initial data.

#### `JobSummary(data)`

Create a new `JobSummary` entity instance. Pass `nil` for no initial data.

#### `ListAllMetricValue(data)`

Create a new `ListAllMetricValue` entity instance. Pass `nil` for no initial data.

#### `ListBreakdownValue(data)`

Create a new `ListBreakdownValue` entity instance. Pass `nil` for no initial data.

#### `ListDeliveryUsage(data)`

Create a new `ListDeliveryUsage` entity instance. Pass `nil` for no initial data.

#### `ListDimensionValue(data)`

Create a new `ListDimensionValue` entity instance. Pass `nil` for no initial data.

#### `ListError(data)`

Create a new `ListError` entity instance. Pass `nil` for no initial data.

#### `ListExport(data)`

Create a new `ListExport` entity instance. Pass `nil` for no initial data.

#### `ListFilterValue(data)`

Create a new `ListFilterValue` entity instance. Pass `nil` for no initial data.

#### `ListInsight(data)`

Create a new `ListInsight` entity instance. Pass `nil` for no initial data.

#### `ListMonitoringDimension(data)`

Create a new `ListMonitoringDimension` entity instance. Pass `nil` for no initial data.

#### `ListMonitoringMetric(data)`

Create a new `ListMonitoringMetric` entity instance. Pass `nil` for no initial data.

#### `ListRealTimeDimension(data)`

Create a new `ListRealTimeDimension` entity instance. Pass `nil` for no initial data.

#### `ListRealTimeMetric(data)`

Create a new `ListRealTimeMetric` entity instance. Pass `nil` for no initial data.

#### `ListRelatedIncident(data)`

Create a new `ListRelatedIncident` entity instance. Pass `nil` for no initial data.

#### `ListSubviewBreakdownValue(data)`

Create a new `ListSubviewBreakdownValue` entity instance. Pass `nil` for no initial data.

#### `ListSubviewComparisonValue(data)`

Create a new `ListSubviewComparisonValue` entity instance. Pass `nil` for no initial data.

#### `ListSubviewDimension(data)`

Create a new `ListSubviewDimension` entity instance. Pass `nil` for no initial data.

#### `ListSubviewDimensionValue(data)`

Create a new `ListSubviewDimensionValue` entity instance. Pass `nil` for no initial data.

#### `ListVideoViewExport(data)`

Create a new `ListVideoViewExport` entity instance. Pass `nil` for no initial data.

#### `LiveStream(data)`

Create a new `LiveStream` entity instance. Pass `nil` for no initial data.

#### `LiveStreamPlaybackId(data)`

Create a new `LiveStreamPlaybackId` entity instance. Pass `nil` for no initial data.

#### `MetricTimeseriesData(data)`

Create a new `MetricTimeseriesData` entity instance. Pass `nil` for no initial data.

#### `Moderate(data)`

Create a new `Moderate` entity instance. Pass `nil` for no initial data.

#### `MonitoringBreakdown(data)`

Create a new `MonitoringBreakdown` entity instance. Pass `nil` for no initial data.

#### `MonitoringBreakdownTimeseries(data)`

Create a new `MonitoringBreakdownTimeseries` entity instance. Pass `nil` for no initial data.

#### `MonitoringHistogramTimeseries(data)`

Create a new `MonitoringHistogramTimeseries` entity instance. Pass `nil` for no initial data.

#### `MonitoringTimeseries(data)`

Create a new `MonitoringTimeseries` entity instance. Pass `nil` for no initial data.

#### `Overall(data)`

Create a new `Overall` entity instance. Pass `nil` for no initial data.

#### `PlaybackRestriction(data)`

Create a new `PlaybackRestriction` entity instance. Pass `nil` for no initial data.

#### `RealTimeBreakdown(data)`

Create a new `RealTimeBreakdown` entity instance. Pass `nil` for no initial data.

#### `RealTimeHistogramTimeseries(data)`

Create a new `RealTimeHistogramTimeseries` entity instance. Pass `nil` for no initial data.

#### `RealTimeTimeseries(data)`

Create a new `RealTimeTimeseries` entity instance. Pass `nil` for no initial data.

#### `SignalLiveStreamComplete(data)`

Create a new `SignalLiveStreamComplete` entity instance. Pass `nil` for no initial data.

#### `SigningKey(data)`

Create a new `SigningKey` entity instance. Pass `nil` for no initial data.

#### `SimulcastTarget(data)`

Create a new `SimulcastTarget` entity instance. Pass `nil` for no initial data.

#### `StaticRendition(data)`

Create a new `StaticRendition` entity instance. Pass `nil` for no initial data.

#### `SubviewBreakdownTimeseries(data)`

Create a new `SubviewBreakdownTimeseries` entity instance. Pass `nil` for no initial data.

#### `SubviewOverallValue(data)`

Create a new `SubviewOverallValue` entity instance. Pass `nil` for no initial data.

#### `Summarize(data)`

Create a new `Summarize` entity instance. Pass `nil` for no initial data.

#### `TranscriptionVocabulary(data)`

Create a new `TranscriptionVocabulary` entity instance. Pass `nil` for no initial data.

#### `TranslateAudio(data)`

Create a new `TranslateAudio` entity instance. Pass `nil` for no initial data.

#### `TranslateCaption(data)`

Create a new `TranslateCaption` entity instance. Pass `nil` for no initial data.

#### `UpdateAssetTrack(data)`

Create a new `UpdateAssetTrack` entity instance. Pass `nil` for no initial data.

#### `Upload(data)`

Create a new `Upload` entity instance. Pass `nil` for no initial data.

#### `UrlSigningKey(data)`

Create a new `UrlSigningKey` entity instance. Pass `nil` for no initial data.

#### `UsageExport(data)`

Create a new `UsageExport` entity instance. Pass `nil` for no initial data.

#### `VideoView(data)`

Create a new `VideoView` entity instance. Pass `nil` for no initial data.

#### `Webhook(data)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `WhoAmI(data)`

Create a new `WhoAmI` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AnnotationEntity

```lua
local annotation = client:Annotation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Datetime when the annotation applies |
| `id` | `string` | Yes | Unique identifier for the annotation |
| `note` | `string` | Yes | The annotation note content |
| `sub_property_id` | `string` | No | Customer-defined sub-property identifier |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Annotation():create({
  date = --[[ string ]],
  id = --[[ string ]],
  note = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Annotation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Annotation():load({ id = "annotation_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Annotation():remove({ id = "annotation_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Annotation():update({
  id = "annotation_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnnotationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AskQuestionEntity

```lua
local ask_question = client:AskQuestion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | Yes | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AskQuestion():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  outputs = --[[ table ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AskQuestion():load({ id = "ask_question_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AskQuestionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AssetEntity

```lua
local asset = client:Asset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `string` | Yes | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `data` | `table` | No |  |
| `directives` | `table` | No | The Mux Robots directives applied to the asset. |
| `duration` | `number` | No | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `string` | Yes | This field is deprecated. |
| `errors` | `table` | No | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `boolean` | No | Whether to perform shot detection on this asset. |
| `id` | `string` | Yes | Unique identifier for the Asset. |
| `ingest_type` | `string` | No | The type of ingest used to create the asset. |
| `is_live` | `boolean` | No | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `string` | No | Unique identifier for the live stream. |
| `master` | `table` | No | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `string` | Yes |  |
| `max_resolution_tier` | `string` | Yes | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `number` | No | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `string` | No | This field is deprecated. |
| `meta` | `table` | No | Customer provided metadata about this asset. |
| `mp4_support` | `string` | No | Deprecated. |
| `non_standard_input_reasons` | `table` | No | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `boolean` | No | Normalize the audio track loudness level. |
| `passthrough` | `string` | No | You can set this field to anything you want. |
| `playback_ids` | `table` | No | An array of Playback ID objects. |
| `progress` | `table` | Yes | Detailed state information about the asset ingest process. |
| `recording_times` | `table` | No | An array of individual live stream recording sessions. |
| `resolution_tier` | `string` | No | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `table` | Yes | The results of generating shots on the video |
| `source_asset_id` | `string` | No | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `table` | No | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `string` | Yes | The status of the asset. |
| `test` | `boolean` | No | True means this live stream is a test asset. |
| `thumbnail_time` | `number` | No | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `table` | No | The individual media tracks that make up an asset. |
| `upload_id` | `string` | No | Unique identifier for the Direct Upload. |
| `video_quality` | `string` | No | The video quality controls the cost, quality, and available platform features for the asset. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Asset():create({
  created_at = --[[ string ]],
  encoding_tier = --[[ string ]],
  id = --[[ string ]],
  master_access = --[[ string ]],
  max_resolution_tier = --[[ string ]],
  progress = --[[ table ]],
  shots = --[[ table ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Asset():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Asset():load({ id = "asset_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Asset():remove({ id = "asset_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Asset():update({
  id = "asset_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AssetOrLiveStreamIdEntity

```lua
local asset_or_live_stream_id = client:AssetOrLiveStreamId(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | `table` | Yes | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AssetOrLiveStreamId():load({ playback_id = "playback_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssetOrLiveStreamIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AssetPlaybackIdEntity

```lua
local asset_playback_id = client:AssetPlaybackId(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `id` | `string` | Yes | Unique identifier for the PlaybackID |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AssetPlaybackId():load({ id = "asset_playback_id_id", asset_id = "asset_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssetPlaybackIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AssetShotEntity

```lua
local asset_shot = client:AssetShot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | No | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | `string` | No | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | `string` | Yes | The status of the shot detection process |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AssetShot():load({ asset_id = "asset_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssetShotEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreatePlaybackIdEntity

```lua
local create_playback_id = client:CreatePlaybackId(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `policy` | `string` | No | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreatePlaybackId():create({
  asset_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreatePlaybackIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateTrackEntity

```lua
local create_track = client:CreateTrack(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreateTrack():create({
  asset_id = --[[ string ]],
  language_code = --[[ string ]],
  type = --[[ string ]],
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateTrackEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DirectiveEntity

```lua
local directive = client:Directive(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the directive was created. |
| `id` | `string` | Yes | Stable directive identifier (drv_...). |
| `name` | `string` | Yes | Human-readable directive name. |
| `resources` | `table` | Yes | Resource declarations. |
| `subject` | `table` | Yes |  |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) when the directive was last updated. |
| `workflows` | `table` | Yes | Workflow bindings. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Directive():create({
  created_at = --[[ number ]],
  id = --[[ string ]],
  name = --[[ string ]],
  resources = --[[ table ]],
  subject = --[[ table ]],
  updated_at = --[[ number ]],
  workflows = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Directive():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Directive():load({ id = "directive_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Directive():remove({ id = "directive_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DirectiveEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DirectiveRunDetailEntity

```lua
local directive_run_detail = client:DirectiveRunDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `number|nil` | Yes | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `table` | Yes | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `string` | Yes | Unique run identifier (drvrun_...). |
| `started_at` | `number` | Yes | Unix timestamp (seconds) when the run started. |
| `status` | `string` | Yes | Current run status. |
| `subject_id` | `string` | Yes | The bare Mux asset ID this run targeted. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DirectiveRunDetail():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DirectiveRunDetail():load({ directive_id = "directive_id", run_id = "run_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DirectiveRunDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DrmConfigurationEntity

```lua
local drm_configuration = client:DrmConfiguration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the DRM Configuration. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DrmConfiguration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DrmConfiguration():load({ id = "drm_configuration_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DrmConfigurationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EditCaptionEntity

```lua
local edit_caption = client:EditCaption(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | Yes | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EditCaption():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  outputs = --[[ table ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EditCaption():load({ id = "edit_caption_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EditCaptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EngagementHeatmapEntity

```lua
local engagement_heatmap = client:EngagementHeatmap(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EngagementHeatmap():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EngagementHeatmapEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EngagementHotspotEntity

```lua
local engagement_hotspot = client:EngagementHotspot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EngagementHotspot():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EngagementHotspotEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FindBestThumbnailEntity

```lua
local find_best_thumbnail = client:FindBestThumbnail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | Yes | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FindBestThumbnail():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  outputs = --[[ table ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FindBestThumbnail():load({ id = "find_best_thumbnail_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FindBestThumbnailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FindKeyMomentEntity

```lua
local find_key_moment = client:FindKeyMoment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | Yes | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FindKeyMoment():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  outputs = --[[ table ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FindKeyMoment():load({ id = "find_key_moment_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FindKeyMomentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FindSceneEntity

```lua
local find_scene = client:FindScene(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | Yes | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FindScene():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  outputs = --[[ table ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FindScene():load({ id = "find_scene_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FindSceneEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerateAssetShotEntity

```lua
local generate_asset_shot = client:GenerateAssetShot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GenerateAssetShot():create({
  asset_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateAssetShotEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerateChapterEntity

```lua
local generate_chapter = client:GenerateChapter(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | Yes | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GenerateChapter():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  outputs = --[[ table ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GenerateChapter():load({ id = "generate_chapter_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateChapterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerateEngagementInsightEntity

```lua
local generate_engagement_insight = client:GenerateEngagementInsight(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | Yes | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GenerateEngagementInsight():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  outputs = --[[ table ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GenerateEngagementInsight():load({ id = "generate_engagement_insight_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateEngagementInsightEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GeneratePremiumCaptionEntity

```lua
local generate_premium_caption = client:GeneratePremiumCaption(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | Yes | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GeneratePremiumCaption():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  outputs = --[[ table ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GeneratePremiumCaption():load({ id = "generate_premium_caption_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeneratePremiumCaptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerateTrackSubtitleEntity

```lua
local generate_track_subtitle = client:GenerateTrackSubtitle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generated_subtitles` | `table` | Yes | Generate subtitle tracks using automatic speech recognition with this configuration. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GenerateTrackSubtitle():create({
  asset_id = --[[ string ]],
  track_id = --[[ string ]],
  generated_subtitles = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateTrackSubtitleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentEntity

```lua
local incident = client:Incident(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `number` | Yes |  |
| `affected_views_per_hour` | `number` | Yes |  |
| `affected_views_per_hour_on_open` | `number` | Yes |  |
| `breakdowns` | `table` | Yes |  |
| `data` | `table` | Yes |  |
| `description` | `string` | Yes |  |
| `error_description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `impact` | `string` | Yes |  |
| `incident_key` | `string` | Yes |  |
| `measured_value` | `number` | Yes |  |
| `measured_value_on_close` | `number` | Yes |  |
| `measurement` | `string` | Yes |  |
| `notification_rules` | `table` | Yes |  |
| `notifications` | `table` | Yes |  |
| `resolved_at` | `string` | Yes |  |
| `sample_size` | `number` | Yes |  |
| `sample_size_unit` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `threshold` | `number` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Incident():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Incident():load({ id = "incident_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InputInfoEntity

```lua
local input_info = client:InputInfo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `table` | No |  |
| `settings` | `table` | No | An array of objects that each describe an input file to be used to create the asset. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:InputInfo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InputInfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## JobSummaryEntity

```lua
local job_summary = client:JobSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `id` | `string` | Yes | Unique job identifier. |
| `links` | `table` | Yes | Hypermedia links for this job. |
| `status` | `string` | Yes | Current job status. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes | Workflow type that created this job. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:JobSummary():create({
  job_id = --[[ string ]],
  created_at = --[[ number ]],
  id = --[[ string ]],
  links = --[[ table ]],
  status = --[[ string ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:JobSummary():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListAllMetricValueEntity

```lua
local list_all_metric_value = client:ListAllMetricValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_views` | `number` | No |  |
| `items` | `table` | No |  |
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListAllMetricValue():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListAllMetricValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListBreakdownValueEntity

```lua
local list_breakdown_value = client:ListBreakdownValue(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListBreakdownValue():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListBreakdownValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListDeliveryUsageEntity

```lua
local list_delivery_usage = client:ListDeliveryUsage(nil)
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
| `delivered_seconds_by_resolution` | `table` | Yes | Seconds delivered broken into resolution tiers. |
| `live_stream_id` | `string` | No | Unique identifier for the live stream that created the asset. |
| `passthrough` | `string` | No | The `passthrough` value for the asset. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListDeliveryUsage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListDeliveryUsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListDimensionValueEntity

```lua
local list_dimension_value = client:ListDimensionValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `total_count` | `number` | Yes |  |
| `total_row_count` | `number` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListDimensionValue():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ListDimensionValue():load({ dimension_id = "dimension_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListDimensionValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListErrorEntity

```lua
local list_error = client:ListError(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListError():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListErrorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListExportEntity

```lua
local list_export = client:ListExport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListExport():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListExportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListFilterValueEntity

```lua
local list_filter_value = client:ListFilterValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListFilterValue():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ListFilterValue():load({ filter_id = "filter_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListFilterValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListInsightEntity

```lua
local list_insight = client:ListInsight(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListInsight():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListInsightEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListMonitoringDimensionEntity

```lua
local list_monitoring_dimension = client:ListMonitoringDimension(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListMonitoringDimension():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListMonitoringDimensionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListMonitoringMetricEntity

```lua
local list_monitoring_metric = client:ListMonitoringMetric(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListMonitoringMetric():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListMonitoringMetricEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListRealTimeDimensionEntity

```lua
local list_real_time_dimension = client:ListRealTimeDimension(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListRealTimeDimension():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListRealTimeDimensionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListRealTimeMetricEntity

```lua
local list_real_time_metric = client:ListRealTimeMetric(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListRealTimeMetric():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListRealTimeMetricEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListRelatedIncidentEntity

```lua
local list_related_incident = client:ListRelatedIncident(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `number` | Yes |  |
| `affected_views_per_hour` | `number` | Yes |  |
| `affected_views_per_hour_on_open` | `number` | Yes |  |
| `breakdowns` | `table` | Yes |  |
| `description` | `string` | Yes |  |
| `error_description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `impact` | `string` | Yes |  |
| `incident_key` | `string` | Yes |  |
| `measured_value` | `number` | Yes |  |
| `measured_value_on_close` | `number` | Yes |  |
| `measurement` | `string` | Yes |  |
| `notification_rules` | `table` | Yes |  |
| `notifications` | `table` | Yes |  |
| `resolved_at` | `string` | Yes |  |
| `sample_size` | `number` | Yes |  |
| `sample_size_unit` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `threshold` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListRelatedIncident():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListRelatedIncidentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListSubviewBreakdownValueEntity

```lua
local list_subview_breakdown_value = client:ListSubviewBreakdownValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakdown_value` | `string` | Yes |  |
| `metric_value` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListSubviewBreakdownValue():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSubviewBreakdownValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListSubviewComparisonValueEntity

```lua
local list_subview_comparison_value = client:ListSubviewComparisonValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dimension_value` | `string` | Yes |  |
| `values` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListSubviewComparisonValue():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSubviewComparisonValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListSubviewDimensionEntity

```lua
local list_subview_dimension = client:ListSubviewDimension(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `total_row_count` | `number` | Yes | Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ListSubviewDimension():load({ subview_type = "subview_type" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSubviewDimensionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListSubviewDimensionValueEntity

```lua
local list_subview_dimension_value = client:ListSubviewDimensionValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `meta` | `any` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ListSubviewDimensionValue():load({ dimension_name = "dimension_name", subview_metric_id = "subview_metric_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSubviewDimensionValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListVideoViewExportEntity

```lua
local list_video_view_export = client:ListVideoViewExport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `export_date` | `string` | Yes |  |
| `files` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListVideoViewExport():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListVideoViewExportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LiveStreamEntity

```lua
local live_stream = client:LiveStream(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_asset_id` | `string` | No | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `string` | No | The protocol used for the active ingest stream. |
| `advanced_playback_policies` | `table` | No | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `audio_only` | `boolean` | No | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `string` | Yes | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `table` | No | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `table` | No | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `string` | Yes | Unique identifier for the Live Stream. |
| `latency_mode` | `string` | Yes | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `boolean` | No | This field is deprecated. |
| `max_continuous_duration` | `number` | Yes | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `table` | No | Customer provided metadata about this live stream. |
| `new_asset_settings` | `table` | No | Updates the new asset settings to use to generate a new asset for this live stream. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `table` | No | An array of Playback ID objects. |
| `playback_policies` | `table` | No | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `playback_policy` | `table` | No | Deprecated. |
| `recent_asset_ids` | `table` | No | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `string` | No | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `number` | No | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `boolean` | No | This field is deprecated. |
| `simulcast_targets` | `table` | No | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LiveStream():create({
  created_at = --[[ string ]],
  id = --[[ string ]],
  latency_mode = --[[ string ]],
  max_continuous_duration = --[[ number ]],
  status = --[[ string ]],
  stream_key = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LiveStream():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LiveStream():load({ id = "live_stream_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:LiveStream():remove({ id = "live_stream_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:LiveStream():update({
  id = "live_stream_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LiveStreamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LiveStreamPlaybackIdEntity

```lua
local live_stream_playback_id = client:LiveStreamPlaybackId(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `id` | `string` | Yes | Unique identifier for the PlaybackID |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LiveStreamPlaybackId():load({ id = "live_stream_playback_id_id", live_stream_id = "live_stream_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LiveStreamPlaybackIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MetricTimeseriesDataEntity

```lua
local metric_timeseries_data = client:MetricTimeseriesData(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `meta` | `table` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MetricTimeseriesData():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetricTimeseriesDataEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ModerateEntity

```lua
local moderate = client:Moderate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | Yes | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Moderate():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  outputs = --[[ table ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Moderate():load({ id = "moderate_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ModerateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MonitoringBreakdownEntity

```lua
local monitoring_breakdown = client:MonitoringBreakdown(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MonitoringBreakdown():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonitoringBreakdownEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MonitoringBreakdownTimeseriesEntity

```lua
local monitoring_breakdown_timeseries = client:MonitoringBreakdownTimeseries(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `values` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MonitoringBreakdownTimeseries():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonitoringBreakdownTimeseriesEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MonitoringHistogramTimeseriesEntity

```lua
local monitoring_histogram_timeseries = client:MonitoringHistogramTimeseries(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `number` | Yes |  |
| `bucket_values` | `table` | Yes |  |
| `max_percentage` | `number` | Yes |  |
| `median` | `number` | Yes |  |
| `p95` | `number` | Yes |  |
| `sum` | `number` | Yes |  |
| `timestamp` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MonitoringHistogramTimeseries():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonitoringHistogramTimeseriesEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MonitoringTimeseriesEntity

```lua
local monitoring_timeseries = client:MonitoringTimeseries(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `number` | Yes |  |
| `date` | `string` | Yes |  |
| `value` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MonitoringTimeseries():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonitoringTimeseriesEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OverallEntity

```lua
local overall = client:Overall(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `meta` | `table` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `total_row_count` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Overall():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OverallEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PlaybackRestrictionEntity

```lua
local playback_restriction = client:PlaybackRestriction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Yes | Unique identifier for the Playback Restriction. |
| `referrer` | `table` | Yes | A list of domains allowed to play your videos. |
| `updated_at` | `string` | Yes | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `table` | Yes | Rules that control what user agents are allowed to play your videos. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PlaybackRestriction():create({
  created_at = --[[ string ]],
  id = --[[ string ]],
  referrer = --[[ table ]],
  updated_at = --[[ string ]],
  user_agent = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PlaybackRestriction():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PlaybackRestriction():load({ id = "playback_restriction_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PlaybackRestriction():remove({ id = "playback_restriction_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PlaybackRestriction():update({
  id = "playback_restriction_id",
  playback_restriction_id = "playback_restriction_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PlaybackRestrictionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RealTimeBreakdownEntity

```lua
local real_time_breakdown = client:RealTimeBreakdown(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RealTimeBreakdown():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RealTimeBreakdownEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RealTimeHistogramTimeseriesEntity

```lua
local real_time_histogram_timeseries = client:RealTimeHistogramTimeseries(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `number` | Yes |  |
| `bucket_values` | `table` | Yes |  |
| `max_percentage` | `number` | Yes |  |
| `median` | `number` | Yes |  |
| `p95` | `number` | Yes |  |
| `sum` | `number` | Yes |  |
| `timestamp` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RealTimeHistogramTimeseries():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RealTimeHistogramTimeseriesEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RealTimeTimeseriesEntity

```lua
local real_time_timeseries = client:RealTimeTimeseries(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `number` | Yes |  |
| `date` | `string` | Yes |  |
| `value` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RealTimeTimeseries():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RealTimeTimeseriesEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SignalLiveStreamCompleteEntity

```lua
local signal_live_stream_complete = client:SignalLiveStreamComplete(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SignalLiveStreamComplete():update({
  live_stream_id = "live_stream_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SignalLiveStreamCompleteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SigningKeyEntity

```lua
local signing_key = client:SigningKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time at which the object was created. |
| `data` | `table` | No |  |
| `id` | `string` | Yes | Unique identifier for the Signing Key. |
| `private_key` | `string` | No | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SigningKey():create({
  created_at = --[[ string ]],
  id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SigningKey():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SigningKey():load({ id = "signing_key_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SigningKey():remove({ id = "signing_key_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SigningKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SimulcastTargetEntity

```lua
local simulcast_target = client:SimulcastTarget(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SimulcastTarget():create({
  live_stream_id = --[[ string ]],
  id = --[[ string ]],
  status = --[[ string ]],
  url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SimulcastTarget():load({ id = "simulcast_target_id", live_stream_id = "live_stream_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimulcastTargetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StaticRenditionEntity

```lua
local static_rendition = client:StaticRendition(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the static rendition. |
| `resolution` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StaticRendition():create({
  asset_id = --[[ string ]],
  resolution = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StaticRenditionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubviewBreakdownTimeseriesEntity

```lua
local subview_breakdown_timeseries = client:SubviewBreakdownTimeseries(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `values` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubviewBreakdownTimeseries():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubviewBreakdownTimeseriesEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubviewOverallValueEntity

```lua
local subview_overall_value = client:SubviewOverallValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes |  |
| `meta` | `table` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `total_row_count` | `number` | Yes | Always `null` for this endpoint — a single aggregate value has no row count. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubviewOverallValue():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubviewOverallValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SummarizeEntity

```lua
local summarize = client:Summarize(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | Yes | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Summarize():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  outputs = --[[ table ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Summarize():load({ id = "summarize_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SummarizeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TranscriptionVocabularyEntity

```lua
local transcription_vocabulary = client:TranscriptionVocabulary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Yes | Unique identifier for the Transcription Vocabulary |
| `name` | `string` | No | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `table` | No | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TranscriptionVocabulary():create({
  created_at = --[[ string ]],
  id = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TranscriptionVocabulary():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TranscriptionVocabulary():load({ id = "transcription_vocabulary_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TranscriptionVocabulary():remove({ id = "transcription_vocabulary_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TranscriptionVocabulary():update({
  id = "transcription_vocabulary_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranscriptionVocabularyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TranslateAudioEntity

```lua
local translate_audio = client:TranslateAudio(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | No | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TranslateAudio():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TranslateAudio():load({ id = "translate_audio_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranslateAudioEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TranslateCaptionEntity

```lua
local translate_caption = client:TranslateCaption(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | Yes | The directive run that dispatched this job. |
| `errors` | `table` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `table` | No | Workflow results. |
| `parameters` | `table` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `number` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TranslateCaption():create({
  created_at = --[[ number ]],
  directive = --[[ table ]],
  id = --[[ string ]],
  parameters = --[[ table ]],
  resources = --[[ table ]],
  status = --[[ string ]],
  units_consumed = --[[ number ]],
  updated_at = --[[ number ]],
  workflow = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TranslateCaption():load({ id = "translate_caption_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranslateCaptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpdateAssetTrackEntity

```lua
local update_asset_track = client:UpdateAssetTrack(nil)
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

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UpdateAssetTrack():update({
  asset_id = "asset_id",
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateAssetTrackEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UploadEntity

```lua
local upload = client:Upload(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_id` | `string` | No | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `string` | Yes | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `table` | No | Only set if an error occurred during asset creation. |
| `id` | `string` | Yes | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `table` | No |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Upload():create({
  cors_origin = --[[ string ]],
  id = --[[ string ]],
  status = --[[ string ]],
  timeout = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Upload():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Upload():load({ id = "upload_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Upload():update({
  id = "upload_id",
  upload_id = "upload_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UrlSigningKeyEntity

```lua
local url_signing_key = client:UrlSigningKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:UrlSigningKey():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UrlSigningKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsageExportEntity

```lua
local usage_export = client:UsageExport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `download_url` | `string` | Yes | A pre-signed URL to download the CSV. |
| `download_url_expires_at` | `number` | Yes | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `file_size` | `number` | Yes | Uncompressed size of the CSV file in bytes. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UsageExport():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageExportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VideoViewEntity

```lua
local video_view = client:VideoView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country_code` | `string` | Yes |  |
| `data` | `table` | Yes |  |
| `error_type_id` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `playback_failure` | `boolean` | Yes |  |
| `player_error_code` | `string` | Yes |  |
| `player_error_message` | `string` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `total_row_count` | `number` | Yes |  |
| `video_title` | `string` | Yes |  |
| `view_end` | `string` | Yes |  |
| `view_start` | `string` | Yes |  |
| `viewer_application_name` | `string` | Yes |  |
| `viewer_experience_score` | `number` | Yes |  |
| `viewer_os_family` | `string` | Yes |  |
| `watch_time` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:VideoView():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:VideoView():load({ id = "video_view_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEntity

```lua
local webhook = client:Webhook(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Webhook():create({
  address = --[[ string ]],
  created_at = --[[ string ]],
  enabled = --[[ boolean ]],
  id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Webhook():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Webhook():load({ id = "webhook_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Webhook():remove({ id = "webhook_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Webhook():update({
  id = "webhook_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WhoAmIEntity

```lua
local who_am_i = client:WhoAmI(nil)
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
| `permissions` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WhoAmI():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhoAmIEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
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

