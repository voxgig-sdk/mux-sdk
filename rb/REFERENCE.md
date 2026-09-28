# Mux Ruby SDK Reference

Complete API reference for the Mux Ruby SDK.


## MuxSDK

### Constructor

```ruby
require_relative 'Mux_sdk'

client = MuxSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MuxSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = MuxSDK.test
```


### Instance Methods

#### `Annotation(data = nil)`

Create a new `Annotation` entity instance. Pass `nil` for no initial data.

#### `AskQuestion(data = nil)`

Create a new `AskQuestion` entity instance. Pass `nil` for no initial data.

#### `Asset(data = nil)`

Create a new `Asset` entity instance. Pass `nil` for no initial data.

#### `AssetOrLiveStreamId(data = nil)`

Create a new `AssetOrLiveStreamId` entity instance. Pass `nil` for no initial data.

#### `AssetPlaybackId(data = nil)`

Create a new `AssetPlaybackId` entity instance. Pass `nil` for no initial data.

#### `AssetShot(data = nil)`

Create a new `AssetShot` entity instance. Pass `nil` for no initial data.

#### `CreatePlaybackId(data = nil)`

Create a new `CreatePlaybackId` entity instance. Pass `nil` for no initial data.

#### `CreateTrack(data = nil)`

Create a new `CreateTrack` entity instance. Pass `nil` for no initial data.

#### `Directive(data = nil)`

Create a new `Directive` entity instance. Pass `nil` for no initial data.

#### `DirectiveRunDetail(data = nil)`

Create a new `DirectiveRunDetail` entity instance. Pass `nil` for no initial data.

#### `DirectiveRunList(data = nil)`

Create a new `DirectiveRunList` entity instance. Pass `nil` for no initial data.

#### `DrmConfiguration(data = nil)`

Create a new `DrmConfiguration` entity instance. Pass `nil` for no initial data.

#### `EditCaption(data = nil)`

Create a new `EditCaption` entity instance. Pass `nil` for no initial data.

#### `EngagementHeatmap(data = nil)`

Create a new `EngagementHeatmap` entity instance. Pass `nil` for no initial data.

#### `EngagementHotspot(data = nil)`

Create a new `EngagementHotspot` entity instance. Pass `nil` for no initial data.

#### `FindBestThumbnail(data = nil)`

Create a new `FindBestThumbnail` entity instance. Pass `nil` for no initial data.

#### `FindKeyMoment(data = nil)`

Create a new `FindKeyMoment` entity instance. Pass `nil` for no initial data.

#### `FindScene(data = nil)`

Create a new `FindScene` entity instance. Pass `nil` for no initial data.

#### `GenerateAssetShot(data = nil)`

Create a new `GenerateAssetShot` entity instance. Pass `nil` for no initial data.

#### `GenerateChapter(data = nil)`

Create a new `GenerateChapter` entity instance. Pass `nil` for no initial data.

#### `GenerateEngagementInsight(data = nil)`

Create a new `GenerateEngagementInsight` entity instance. Pass `nil` for no initial data.

#### `GeneratePremiumCaption(data = nil)`

Create a new `GeneratePremiumCaption` entity instance. Pass `nil` for no initial data.

#### `GenerateTrackSubtitle(data = nil)`

Create a new `GenerateTrackSubtitle` entity instance. Pass `nil` for no initial data.

#### `Incident(data = nil)`

Create a new `Incident` entity instance. Pass `nil` for no initial data.

#### `InputInfo(data = nil)`

Create a new `InputInfo` entity instance. Pass `nil` for no initial data.

#### `JobSummary(data = nil)`

Create a new `JobSummary` entity instance. Pass `nil` for no initial data.

#### `ListAllMetricValue(data = nil)`

Create a new `ListAllMetricValue` entity instance. Pass `nil` for no initial data.

#### `ListAnnotation(data = nil)`

Create a new `ListAnnotation` entity instance. Pass `nil` for no initial data.

#### `ListAsset(data = nil)`

Create a new `ListAsset` entity instance. Pass `nil` for no initial data.

#### `ListBreakdownValue(data = nil)`

Create a new `ListBreakdownValue` entity instance. Pass `nil` for no initial data.

#### `ListDeliveryUsage(data = nil)`

Create a new `ListDeliveryUsage` entity instance. Pass `nil` for no initial data.

#### `ListDimension(data = nil)`

Create a new `ListDimension` entity instance. Pass `nil` for no initial data.

#### `ListDimensionValue(data = nil)`

Create a new `ListDimensionValue` entity instance. Pass `nil` for no initial data.

#### `ListDrmConfiguration(data = nil)`

Create a new `ListDrmConfiguration` entity instance. Pass `nil` for no initial data.

#### `ListError(data = nil)`

Create a new `ListError` entity instance. Pass `nil` for no initial data.

#### `ListExport(data = nil)`

Create a new `ListExport` entity instance. Pass `nil` for no initial data.

#### `ListFilter(data = nil)`

Create a new `ListFilter` entity instance. Pass `nil` for no initial data.

#### `ListFilterValue(data = nil)`

Create a new `ListFilterValue` entity instance. Pass `nil` for no initial data.

#### `ListIncident(data = nil)`

Create a new `ListIncident` entity instance. Pass `nil` for no initial data.

#### `ListInsight(data = nil)`

Create a new `ListInsight` entity instance. Pass `nil` for no initial data.

#### `ListJob(data = nil)`

Create a new `ListJob` entity instance. Pass `nil` for no initial data.

#### `ListLiveStream(data = nil)`

Create a new `ListLiveStream` entity instance. Pass `nil` for no initial data.

#### `ListMonitoringDimension(data = nil)`

Create a new `ListMonitoringDimension` entity instance. Pass `nil` for no initial data.

#### `ListMonitoringMetric(data = nil)`

Create a new `ListMonitoringMetric` entity instance. Pass `nil` for no initial data.

#### `ListPlaybackRestriction(data = nil)`

Create a new `ListPlaybackRestriction` entity instance. Pass `nil` for no initial data.

#### `ListRealTimeDimension(data = nil)`

Create a new `ListRealTimeDimension` entity instance. Pass `nil` for no initial data.

#### `ListRealTimeMetric(data = nil)`

Create a new `ListRealTimeMetric` entity instance. Pass `nil` for no initial data.

#### `ListRelatedIncident(data = nil)`

Create a new `ListRelatedIncident` entity instance. Pass `nil` for no initial data.

#### `ListSigningKey(data = nil)`

Create a new `ListSigningKey` entity instance. Pass `nil` for no initial data.

#### `ListSubviewBreakdownValue(data = nil)`

Create a new `ListSubviewBreakdownValue` entity instance. Pass `nil` for no initial data.

#### `ListSubviewComparisonValue(data = nil)`

Create a new `ListSubviewComparisonValue` entity instance. Pass `nil` for no initial data.

#### `ListSubviewDimension(data = nil)`

Create a new `ListSubviewDimension` entity instance. Pass `nil` for no initial data.

#### `ListSubviewDimensionValue(data = nil)`

Create a new `ListSubviewDimensionValue` entity instance. Pass `nil` for no initial data.

#### `ListTranscriptionVocabulary(data = nil)`

Create a new `ListTranscriptionVocabulary` entity instance. Pass `nil` for no initial data.

#### `ListUpload(data = nil)`

Create a new `ListUpload` entity instance. Pass `nil` for no initial data.

#### `ListUsageExport(data = nil)`

Create a new `ListUsageExport` entity instance. Pass `nil` for no initial data.

#### `ListVideoView(data = nil)`

Create a new `ListVideoView` entity instance. Pass `nil` for no initial data.

#### `ListVideoViewExport(data = nil)`

Create a new `ListVideoViewExport` entity instance. Pass `nil` for no initial data.

#### `ListWebhook(data = nil)`

Create a new `ListWebhook` entity instance. Pass `nil` for no initial data.

#### `LiveStream(data = nil)`

Create a new `LiveStream` entity instance. Pass `nil` for no initial data.

#### `LiveStreamPlaybackId(data = nil)`

Create a new `LiveStreamPlaybackId` entity instance. Pass `nil` for no initial data.

#### `MetricTimeseriesData(data = nil)`

Create a new `MetricTimeseriesData` entity instance. Pass `nil` for no initial data.

#### `Moderate(data = nil)`

Create a new `Moderate` entity instance. Pass `nil` for no initial data.

#### `MonitoringBreakdown(data = nil)`

Create a new `MonitoringBreakdown` entity instance. Pass `nil` for no initial data.

#### `MonitoringBreakdownTimeseries(data = nil)`

Create a new `MonitoringBreakdownTimeseries` entity instance. Pass `nil` for no initial data.

#### `MonitoringHistogramTimeseries(data = nil)`

Create a new `MonitoringHistogramTimeseries` entity instance. Pass `nil` for no initial data.

#### `MonitoringTimeseries(data = nil)`

Create a new `MonitoringTimeseries` entity instance. Pass `nil` for no initial data.

#### `Overall(data = nil)`

Create a new `Overall` entity instance. Pass `nil` for no initial data.

#### `PlaybackRestriction(data = nil)`

Create a new `PlaybackRestriction` entity instance. Pass `nil` for no initial data.

#### `RealTimeBreakdown(data = nil)`

Create a new `RealTimeBreakdown` entity instance. Pass `nil` for no initial data.

#### `RealTimeHistogramTimeseries(data = nil)`

Create a new `RealTimeHistogramTimeseries` entity instance. Pass `nil` for no initial data.

#### `RealTimeTimeseries(data = nil)`

Create a new `RealTimeTimeseries` entity instance. Pass `nil` for no initial data.

#### `SignalLiveStreamComplete(data = nil)`

Create a new `SignalLiveStreamComplete` entity instance. Pass `nil` for no initial data.

#### `SigningKey(data = nil)`

Create a new `SigningKey` entity instance. Pass `nil` for no initial data.

#### `SimulcastTarget(data = nil)`

Create a new `SimulcastTarget` entity instance. Pass `nil` for no initial data.

#### `StaticRendition(data = nil)`

Create a new `StaticRendition` entity instance. Pass `nil` for no initial data.

#### `SubviewBreakdownTimeseries(data = nil)`

Create a new `SubviewBreakdownTimeseries` entity instance. Pass `nil` for no initial data.

#### `SubviewOverallValue(data = nil)`

Create a new `SubviewOverallValue` entity instance. Pass `nil` for no initial data.

#### `Summarize(data = nil)`

Create a new `Summarize` entity instance. Pass `nil` for no initial data.

#### `TranscriptionVocabulary(data = nil)`

Create a new `TranscriptionVocabulary` entity instance. Pass `nil` for no initial data.

#### `TranslateAudio(data = nil)`

Create a new `TranslateAudio` entity instance. Pass `nil` for no initial data.

#### `TranslateCaption(data = nil)`

Create a new `TranslateCaption` entity instance. Pass `nil` for no initial data.

#### `UpdateAssetTrack(data = nil)`

Create a new `UpdateAssetTrack` entity instance. Pass `nil` for no initial data.

#### `Upload(data = nil)`

Create a new `Upload` entity instance. Pass `nil` for no initial data.

#### `UrlSigningKey(data = nil)`

Create a new `UrlSigningKey` entity instance. Pass `nil` for no initial data.

#### `VideoView(data = nil)`

Create a new `VideoView` entity instance. Pass `nil` for no initial data.

#### `Webhook(data = nil)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `WhoAmI(data = nil)`

Create a new `WhoAmI` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AnnotationEntity

```ruby
annotation = client.Annotation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `String` | Yes | Datetime when the annotation applies |
| `id` | `String` | Yes | Unique identifier for the annotation |
| `note` | `String` | Yes | The annotation note content |
| `sub_property_id` | `String` | No | Customer-defined sub-property identifier |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Annotation.create({
  "date" => "example_date", # String
  "id" => "example_id", # String
  "note" => "example_note", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Annotation.load({ "id" => "annotation_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Annotation.remove({ "id" => "annotation_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Annotation.update({
  "id" => "annotation_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnnotationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AskQuestionEntity

```ruby
ask_question = client.AskQuestion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | Yes | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AskQuestion.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "outputs" => {}, # Hash
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AskQuestion.load({ "id" => "ask_question_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AskQuestionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AssetEntity

```ruby
asset = client.Asset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `String` | No | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `String` | Yes | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `data` | `Hash` | No |  |
| `directives` | `Array` | No | The Mux Robots directives applied to the asset. |
| `duration` | `Float` | No | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `String` | Yes | This field is deprecated. |
| `errors` | `Hash` | No | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `Boolean` | No | Whether to perform shot detection on this asset. |
| `id` | `String` | Yes | Unique identifier for the Asset. |
| `ingest_type` | `String` | No | The type of ingest used to create the asset. |
| `is_live` | `Boolean` | No | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `String` | No | Unique identifier for the live stream. |
| `master` | `Hash` | No | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `String` | Yes |  |
| `max_resolution_tier` | `String` | Yes | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `Float` | No | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `String` | No | This field is deprecated. |
| `meta` | `Hash` | No | Customer provided metadata about this asset. |
| `mp4_support` | `String` | No | Deprecated. |
| `non_standard_input_reasons` | `Hash` | No | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `Boolean` | No | Normalize the audio track loudness level. |
| `passthrough` | `String` | No | You can set this field to anything you want. |
| `playback_ids` | `Array` | No | An array of Playback ID objects. |
| `progress` | `Hash` | Yes | Detailed state information about the asset ingest process. |
| `recording_times` | `Array` | No | An array of individual live stream recording sessions. |
| `resolution_tier` | `String` | No | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `Hash` | Yes | The results of generating shots on the video |
| `source_asset_id` | `String` | No | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `Hash` | No | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `String` | Yes | The status of the asset. |
| `test` | `Boolean` | No | True means this live stream is a test asset. |
| `thumbnail_time` | `Float` | No | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `Array` | No | The individual media tracks that make up an asset. |
| `upload_id` | `String` | No | Unique identifier for the Direct Upload. |
| `video_quality` | `String` | No | The video quality controls the cost, quality, and available platform features for the asset. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Asset.create({
  "created_at" => "example_created_at", # String
  "encoding_tier" => "example_encoding_tier", # String
  "id" => "example_id", # String
  "master_access" => "example_master_access", # String
  "max_resolution_tier" => "example_max_resolution_tier", # String
  "progress" => {}, # Hash
  "shots" => {}, # Hash
  "status" => "example_status", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Asset.load({ "id" => "asset_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Asset.remove({ "id" => "asset_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Asset.update({
  "id" => "asset_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AssetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AssetOrLiveStreamIdEntity

```ruby
asset_or_live_stream_id = client.AssetOrLiveStreamId
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | `Hash` | Yes | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | `String` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AssetOrLiveStreamId.load({ "playback_id" => "playback_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AssetOrLiveStreamIdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AssetPlaybackIdEntity

```ruby
asset_playback_id = client.AssetPlaybackId
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `String` | No | The DRM configuration used by this playback ID. |
| `id` | `String` | Yes | Unique identifier for the PlaybackID |
| `policy` | `String` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AssetPlaybackId.load({ "id" => "asset_playback_id_id", "asset_id" => "asset_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AssetPlaybackIdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AssetShotEntity

```ruby
asset_shot = client.AssetShot
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Hash` | No | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | `String` | No | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | `String` | Yes | The status of the shot detection process |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AssetShot.load({ "asset_id" => "asset_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AssetShotEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreatePlaybackIdEntity

```ruby
create_playback_id = client.CreatePlaybackId
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `String` | No | The DRM configuration used by this playback ID. |
| `policy` | `String` | No | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CreatePlaybackId.create({
  "asset_id" => "example_asset_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreatePlaybackIdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateTrackEntity

```ruby
create_track = client.CreateTrack
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_captions` | `Boolean` | No | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `language_code` | `String` | Yes | The language code of this track. |
| `name` | `String` | No | The name of the track containing a human-readable description. |
| `passthrough` | `String` | No | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `text_type` | `String` | No |  |
| `type` | `String` | Yes |  |
| `url` | `String` | Yes | The URL of the file that Mux should download and use. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CreateTrack.create({
  "asset_id" => "example_asset_id", # String
  "language_code" => "example_language_code", # String
  "type" => "example_type", # String
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateTrackEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DirectiveEntity

```ruby
directive = client.Directive
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the directive was created. |
| `id` | `String` | Yes | Stable directive identifier (drv_...). |
| `name` | `String` | Yes | Human-readable directive name. |
| `resources` | `Array` | Yes | Resource declarations. |
| `subject` | `Hash` | Yes |  |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) when the directive was last updated. |
| `workflows` | `Array` | Yes | Workflow bindings. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Directive.create({
  "created_at" => 1, # Integer
  "id" => "example_id", # String
  "name" => "example_name", # String
  "resources" => [], # Array
  "subject" => {}, # Hash
  "updated_at" => 1, # Integer
  "workflows" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Directive.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Directive.load({ "id" => "directive_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Directive.remove({ "id" => "directive_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DirectiveEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DirectiveRunDetailEntity

```ruby
directive_run_detail = client.DirectiveRunDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `Object` | Yes | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `Array` | Yes | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `String` | Yes | Unique run identifier (drvrun_...). |
| `started_at` | `Integer` | Yes | Unix timestamp (seconds) when the run started. |
| `status` | `String` | Yes | Current run status. |
| `subject_id` | `String` | Yes | The bare Mux asset ID this run targeted. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DirectiveRunDetail.load({ "directive_id" => "directive_id", "run_id" => "run_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DirectiveRunDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DirectiveRunListEntity

```ruby
directive_run_list = client.DirectiveRunList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `Object` | Yes | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `Array` | Yes | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `String` | Yes | Unique run identifier (drvrun_...). |
| `started_at` | `Integer` | Yes | Unix timestamp (seconds) when the run started. |
| `status` | `String` | Yes | Current run status. |
| `subject_id` | `String` | Yes | The bare Mux asset ID this run targeted. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DirectiveRunList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DirectiveRunListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DrmConfigurationEntity

```ruby
drm_configuration = client.DrmConfiguration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes | Unique identifier for the DRM Configuration. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DrmConfiguration.load({ "id" => "drm_configuration_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DrmConfigurationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EditCaptionEntity

```ruby
edit_caption = client.EditCaption
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | Yes | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EditCaption.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "outputs" => {}, # Hash
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.EditCaption.load({ "id" => "edit_caption_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EditCaptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EngagementHeatmapEntity

```ruby
engagement_heatmap = client.EngagementHeatmap
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | Yes |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EngagementHeatmap.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EngagementHeatmapEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EngagementHotspotEntity

```ruby
engagement_hotspot = client.EngagementHotspot
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | Yes |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EngagementHotspot.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EngagementHotspotEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FindBestThumbnailEntity

```ruby
find_best_thumbnail = client.FindBestThumbnail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | Yes | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.FindBestThumbnail.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "outputs" => {}, # Hash
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FindBestThumbnail.load({ "id" => "find_best_thumbnail_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FindBestThumbnailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FindKeyMomentEntity

```ruby
find_key_moment = client.FindKeyMoment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | Yes | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.FindKeyMoment.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "outputs" => {}, # Hash
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FindKeyMoment.load({ "id" => "find_key_moment_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FindKeyMomentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FindSceneEntity

```ruby
find_scene = client.FindScene
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | Yes | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.FindScene.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "outputs" => {}, # Hash
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FindScene.load({ "id" => "find_scene_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FindSceneEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerateAssetShotEntity

```ruby
generate_asset_shot = client.GenerateAssetShot
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GenerateAssetShot.create({
  "asset_id" => "example_asset_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateAssetShotEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerateChapterEntity

```ruby
generate_chapter = client.GenerateChapter
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | Yes | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GenerateChapter.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "outputs" => {}, # Hash
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GenerateChapter.load({ "id" => "generate_chapter_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateChapterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerateEngagementInsightEntity

```ruby
generate_engagement_insight = client.GenerateEngagementInsight
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | Yes | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GenerateEngagementInsight.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "outputs" => {}, # Hash
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GenerateEngagementInsight.load({ "id" => "generate_engagement_insight_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateEngagementInsightEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GeneratePremiumCaptionEntity

```ruby
generate_premium_caption = client.GeneratePremiumCaption
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | Yes | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GeneratePremiumCaption.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "outputs" => {}, # Hash
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GeneratePremiumCaption.load({ "id" => "generate_premium_caption_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GeneratePremiumCaptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerateTrackSubtitleEntity

```ruby
generate_track_subtitle = client.GenerateTrackSubtitle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generated_subtitles` | `Array` | Yes | Generate subtitle tracks using automatic speech recognition with this configuration. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GenerateTrackSubtitle.create({
  "asset_id" => "example_asset_id", # String
  "track_id" => "example_track_id", # String
  "generated_subtitles" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateTrackSubtitleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentEntity

```ruby
incident = client.Incident
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | Yes |  |
| `id` | `String` | No |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Incident.load({ "id" => "incident_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InputInfoEntity

```ruby
input_info = client.InputInfo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `Hash` | No |  |
| `settings` | `Hash` | No | An array of objects that each describe an input file to be used to create the asset. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.InputInfo.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InputInfoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## JobSummaryEntity

```ruby
job_summary = client.JobSummary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `id` | `String` | Yes | Unique job identifier. |
| `links` | `Hash` | Yes | Hypermedia links for this job. |
| `status` | `String` | Yes | Current job status. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes | Workflow type that created this job. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.JobSummary.create({
  "job_id" => "example_job_id", # String
  "created_at" => 1, # Integer
  "id" => "example_id", # String
  "links" => {}, # Hash
  "status" => "example_status", # String
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `JobSummaryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListAllMetricValueEntity

```ruby
list_all_metric_value = client.ListAllMetricValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_views` | `Integer` | No |  |
| `items` | `Array` | No |  |
| `metric` | `String` | No |  |
| `name` | `String` | Yes |  |
| `started_views` | `Integer` | No |  |
| `total_playing_time` | `Integer` | No |  |
| `type` | `String` | No |  |
| `unique_viewers` | `Integer` | No |  |
| `value` | `Float` | No |  |
| `view_count` | `Integer` | No |  |
| `watch_time` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListAllMetricValue.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListAllMetricValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListAnnotationEntity

```ruby
list_annotation = client.ListAnnotation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `String` | Yes | Datetime when the annotation applies |
| `id` | `String` | Yes | Unique identifier for the annotation |
| `note` | `String` | Yes | The annotation note content |
| `sub_property_id` | `String` | No | Customer-defined sub-property identifier |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListAnnotation.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListAnnotationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListAssetEntity

```ruby
list_asset = client.ListAsset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `String` | No | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `String` | Yes | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `directives` | `Array` | No | The Mux Robots directives applied to the asset. |
| `duration` | `Float` | No | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `String` | Yes | This field is deprecated. |
| `errors` | `Hash` | No | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `Boolean` | No | Whether to perform shot detection on this asset. |
| `id` | `String` | Yes | Unique identifier for the Asset. |
| `ingest_type` | `String` | No | The type of ingest used to create the asset. |
| `is_live` | `Boolean` | No | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `String` | No | Unique identifier for the live stream. |
| `master` | `Hash` | No | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `String` | Yes |  |
| `max_resolution_tier` | `String` | Yes | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `Float` | No | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `String` | No | This field is deprecated. |
| `meta` | `Hash` | No | Customer provided metadata about this asset. |
| `mp4_support` | `String` | No | Deprecated. |
| `non_standard_input_reasons` | `Hash` | No | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `Boolean` | No | Normalize the audio track loudness level. |
| `passthrough` | `String` | No | You can set this field to anything you want. |
| `playback_ids` | `Array` | No | An array of Playback ID objects. |
| `progress` | `Hash` | Yes | Detailed state information about the asset ingest process. |
| `recording_times` | `Array` | No | An array of individual live stream recording sessions. |
| `resolution_tier` | `String` | No | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `Hash` | Yes | The results of generating shots on the video |
| `source_asset_id` | `String` | No | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `Hash` | No | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `String` | Yes | The status of the asset. |
| `test` | `Boolean` | No | True means this live stream is a test asset. |
| `thumbnail_time` | `Float` | No | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `Array` | No | The individual media tracks that make up an asset. |
| `upload_id` | `String` | No | Unique identifier for the Direct Upload. |
| `video_quality` | `String` | No | The video quality controls the cost, quality, and available platform features for the asset. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListAsset.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListAssetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListBreakdownValueEntity

```ruby
list_breakdown_value = client.ListBreakdownValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field` | `String` | Yes |  |
| `negative_impact` | `Integer` | Yes |  |
| `total_playing_time` | `Integer` | Yes |  |
| `total_watch_time` | `Integer` | Yes |  |
| `value` | `Float` | Yes |  |
| `views` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListBreakdownValue.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListBreakdownValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListDeliveryUsageEntity

```ruby
list_delivery_usage = client.ListDeliveryUsage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_duration` | `Float` | Yes | The duration of the asset in seconds. |
| `asset_encoding_tier` | `String` | Yes | This field is deprecated. |
| `asset_id` | `String` | Yes | Unique identifier for the asset. |
| `asset_resolution_tier` | `String` | Yes | The resolution tier that the asset was ingested at, affecting billing for ingest & storage |
| `asset_state` | `String` | Yes | The state of the asset. |
| `asset_video_quality` | `String` | No | The video quality that the asset was ingested at. |
| `created_at` | `String` | Yes | Time at which the asset was created. |
| `deleted_at` | `String` | No | If exists, time at which the asset was deleted. |
| `delivered_seconds` | `Float` | Yes | Total number of delivered seconds during this time window. |
| `delivered_seconds_by_resolution` | `Hash` | Yes | Seconds delivered broken into resolution tiers. |
| `live_stream_id` | `String` | No | Unique identifier for the live stream that created the asset. |
| `passthrough` | `String` | No | The `passthrough` value for the asset. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListDeliveryUsage.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListDeliveryUsageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListDimensionEntity

```ruby
list_dimension = client.ListDimension
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | Yes |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListDimension.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListDimensionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListDimensionValueEntity

```ruby
list_dimension_value = client.ListDimensionValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | Yes |  |
| `timeframe` | `Array` | Yes |  |
| `total_count` | `Integer` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |
| `value` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListDimensionValue.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ListDimensionValue.load({ "dimension_id" => "dimension_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListDimensionValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListDrmConfigurationEntity

```ruby
list_drm_configuration = client.ListDrmConfiguration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes | Unique identifier for the DRM Configuration. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListDrmConfiguration.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListDrmConfigurationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListErrorEntity

```ruby
list_error = client.ListError
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `Integer` | Yes | The error code |
| `count` | `Integer` | Yes | The total number of views that experienced this error. |
| `description` | `String` | Yes | Description of the error. |
| `id` | `Integer` | Yes | A unique identifier for this error. |
| `last_seen` | `String` | Yes | The last time this error was seen (ISO 8601 timestamp). |
| `message` | `String` | Yes | The error message. |
| `notes` | `String` | Yes | Notes that are attached to this error. |
| `percentage` | `Float` | Yes | The percentage of views that experienced this error. |
| `player_error_code` | `String` | Yes | The string version of the error code |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListError.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListErrorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListExportEntity

```ruby
list_export = client.ListExport
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | Yes |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListExport.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListExportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListFilterEntity

```ruby
list_filter = client.ListFilter
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | Yes |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListFilter.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListFilterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListFilterValueEntity

```ruby
list_filter_value = client.ListFilterValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | Yes |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ListFilterValue.load({ "filter_id" => "filter_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListFilterValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListIncidentEntity

```ruby
list_incident = client.ListIncident
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `Integer` | Yes |  |
| `affected_views_per_hour` | `Integer` | Yes |  |
| `affected_views_per_hour_on_open` | `Integer` | Yes |  |
| `breakdowns` | `Array` | Yes |  |
| `description` | `String` | Yes |  |
| `error_description` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `impact` | `String` | Yes |  |
| `incident_key` | `String` | Yes |  |
| `measured_value` | `Float` | Yes |  |
| `measured_value_on_close` | `Float` | Yes |  |
| `measurement` | `String` | Yes |  |
| `notification_rules` | `Array` | Yes |  |
| `notifications` | `Array` | Yes |  |
| `resolved_at` | `String` | Yes |  |
| `sample_size` | `Integer` | Yes |  |
| `sample_size_unit` | `String` | Yes |  |
| `severity` | `String` | Yes |  |
| `started_at` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `threshold` | `Float` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListIncident.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListIncidentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListInsightEntity

```ruby
list_insight = client.ListInsight
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `filter_column` | `String` | Yes |  |
| `filter_value` | `String` | Yes |  |
| `metric` | `Float` | Yes |  |
| `negative_impact_score` | `Float` | Yes |  |
| `total_playing_time` | `Integer` | Yes |  |
| `total_views` | `Integer` | Yes |  |
| `total_watch_time` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListInsight.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListInsightEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListJobEntity

```ruby
list_job = client.ListJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `id` | `String` | Yes | Unique job identifier. |
| `links` | `Hash` | Yes | Hypermedia links for this job. |
| `status` | `String` | Yes | Current job status. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes | Workflow type that created this job. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListJob.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListJobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListLiveStreamEntity

```ruby
list_live_stream = client.ListLiveStream
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_asset_id` | `String` | No | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `String` | No | The protocol used for the active ingest stream. |
| `audio_only` | `Boolean` | No | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `String` | Yes | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `Array` | No | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `Array` | No | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `String` | Yes | Unique identifier for the Live Stream. |
| `latency_mode` | `String` | Yes | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `Boolean` | No | This field is deprecated. |
| `max_continuous_duration` | `Integer` | Yes | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `Hash` | No | Customer provided metadata about this live stream. |
| `new_asset_settings` | `Hash` | No |  |
| `passthrough` | `String` | No | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `Array` | No | An array of Playback ID objects. |
| `recent_asset_ids` | `Array` | No | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `String` | No | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `Float` | No | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `Boolean` | No | This field is deprecated. |
| `simulcast_targets` | `Array` | No | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | `String` | No | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `String` | Yes | `idle` indicates that there is no active broadcast. |
| `stream_key` | `String` | Yes | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | `Boolean` | No | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | `Boolean` | No | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListLiveStream.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListLiveStreamEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListMonitoringDimensionEntity

```ruby
list_monitoring_dimension = client.ListMonitoringDimension
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `String` | Yes |  |
| `name` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListMonitoringDimension.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListMonitoringDimensionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListMonitoringMetricEntity

```ruby
list_monitoring_metric = client.ListMonitoringMetric
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `String` | Yes |  |
| `name` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListMonitoringMetric.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListMonitoringMetricEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListPlaybackRestrictionEntity

```ruby
list_playback_restriction = client.ListPlaybackRestriction
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `String` | Yes | Unique identifier for the Playback Restriction. |
| `referrer` | `Hash` | Yes | A list of domains allowed to play your videos. |
| `updated_at` | `String` | Yes | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `Hash` | Yes | Rules that control what user agents are allowed to play your videos. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListPlaybackRestriction.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListPlaybackRestrictionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListRealTimeDimensionEntity

```ruby
list_real_time_dimension = client.ListRealTimeDimension
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `String` | Yes |  |
| `name` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListRealTimeDimension.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListRealTimeDimensionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListRealTimeMetricEntity

```ruby
list_real_time_metric = client.ListRealTimeMetric
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `String` | Yes |  |
| `name` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListRealTimeMetric.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListRealTimeMetricEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListRelatedIncidentEntity

```ruby
list_related_incident = client.ListRelatedIncident
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `Integer` | Yes |  |
| `affected_views_per_hour` | `Integer` | Yes |  |
| `affected_views_per_hour_on_open` | `Integer` | Yes |  |
| `breakdowns` | `Array` | Yes |  |
| `description` | `String` | Yes |  |
| `error_description` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `impact` | `String` | Yes |  |
| `incident_key` | `String` | Yes |  |
| `measured_value` | `Float` | Yes |  |
| `measured_value_on_close` | `Float` | Yes |  |
| `measurement` | `String` | Yes |  |
| `notification_rules` | `Array` | Yes |  |
| `notifications` | `Array` | Yes |  |
| `resolved_at` | `String` | Yes |  |
| `sample_size` | `Integer` | Yes |  |
| `sample_size_unit` | `String` | Yes |  |
| `severity` | `String` | Yes |  |
| `started_at` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `threshold` | `Float` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListRelatedIncident.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListRelatedIncidentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListSigningKeyEntity

```ruby
list_signing_key = client.ListSigningKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | Time at which the object was created. |
| `id` | `String` | Yes | Unique identifier for the Signing Key. |
| `private_key` | `String` | No | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListSigningKey.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListSigningKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListSubviewBreakdownValueEntity

```ruby
list_subview_breakdown_value = client.ListSubviewBreakdownValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakdown_value` | `String` | Yes |  |
| `metric_value` | `Float` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListSubviewBreakdownValue.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListSubviewBreakdownValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListSubviewComparisonValueEntity

```ruby
list_subview_comparison_value = client.ListSubviewComparisonValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dimension_value` | `String` | Yes |  |
| `values` | `Array` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListSubviewComparisonValue.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListSubviewComparisonValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListSubviewDimensionEntity

```ruby
list_subview_dimension = client.ListSubviewDimension
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subview` | `Array` | Yes |  |
| `view` | `Array` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ListSubviewDimension.load({ "subview_type" => "subview_type" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListSubviewDimensionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListSubviewDimensionValueEntity

```ruby
list_subview_dimension_value = client.ListSubviewDimensionValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | Yes |  |
| `meta` | `Object` | Yes |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ListSubviewDimensionValue.load({ "dimension_name" => "dimension_name", "subview_metric_id" => "subview_metric_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListSubviewDimensionValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListTranscriptionVocabularyEntity

```ruby
list_transcription_vocabulary = client.ListTranscriptionVocabulary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `String` | Yes | Unique identifier for the Transcription Vocabulary |
| `name` | `String` | No | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `String` | No | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `Array` | No | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `updated_at` | `String` | Yes | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListTranscriptionVocabulary.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListTranscriptionVocabularyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListUploadEntity

```ruby
list_upload = client.ListUpload
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_id` | `String` | No | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `String` | Yes | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `Hash` | No | Only set if an error occurred during asset creation. |
| `id` | `String` | Yes | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `Hash` | No |  |
| `status` | `String` | Yes |  |
| `test` | `Boolean` | No | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | `Integer` | Yes | Max time in seconds for the signed upload URL to be valid. |
| `url` | `String` | No | The URL to upload the associated source media to. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListUpload.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListUploadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListUsageExportEntity

```ruby
list_usage_export = client.ListUsageExport
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `String` | Yes | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `download_url` | `String` | Yes | A pre-signed URL to download the CSV. |
| `download_url_expires_at` | `Integer` | Yes | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `file_size` | `Integer` | Yes | Uncompressed size of the CSV file in bytes. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListUsageExport.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListUsageExportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListVideoViewEntity

```ruby
list_video_view = client.ListVideoView
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country_code` | `String` | Yes |  |
| `error_type_id` | `Integer` | Yes |  |
| `id` | `String` | Yes |  |
| `playback_failure` | `Boolean` | Yes |  |
| `player_error_code` | `String` | Yes |  |
| `player_error_message` | `String` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |
| `video_title` | `String` | Yes |  |
| `view_end` | `String` | Yes |  |
| `view_start` | `String` | Yes |  |
| `viewer_application_name` | `String` | Yes |  |
| `viewer_experience_score` | `Float` | Yes |  |
| `viewer_os_family` | `String` | Yes |  |
| `watch_time` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListVideoView.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListVideoViewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListVideoViewExportEntity

```ruby
list_video_view_export = client.ListVideoViewExport
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `export_date` | `String` | Yes |  |
| `files` | `Array` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListVideoViewExport.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListVideoViewExportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListWebhookEntity

```ruby
list_webhook = client.ListWebhook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | Yes | The URL where Mux sends webhook notifications. |
| `created_at` | `String` | Yes | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | `Boolean` | Yes | Whether Mux attempts to deliver notifications to this webhook. |
| `id` | `String` | Yes | Unique identifier for the webhook. |
| `signing_secret` | `String` | No | Secret used to verify that webhook payloads were sent by Mux. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListWebhook.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListWebhookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LiveStreamEntity

```ruby
live_stream = client.LiveStream
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_asset_id` | `String` | No | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `String` | No | The protocol used for the active ingest stream. |
| `advanced_playback_policies` | `Array` | No | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `audio_only` | `Boolean` | No | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `String` | Yes | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `Array` | No | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `Array` | No | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `String` | Yes | Unique identifier for the Live Stream. |
| `latency_mode` | `String` | Yes | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `Boolean` | No | This field is deprecated. |
| `max_continuous_duration` | `Integer` | Yes | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `Hash` | No | Customer provided metadata about this live stream. |
| `new_asset_settings` | `Hash` | No | Updates the new asset settings to use to generate a new asset for this live stream. |
| `passthrough` | `String` | No | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `Array` | No | An array of Playback ID objects. |
| `playback_policies` | `Array` | No | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `playback_policy` | `Array` | No | Deprecated. |
| `recent_asset_ids` | `Array` | No | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `String` | No | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `Float` | No | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `Boolean` | No | This field is deprecated. |
| `simulcast_targets` | `Array` | No | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | `String` | No | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `String` | Yes | `idle` indicates that there is no active broadcast. |
| `stream_key` | `String` | Yes | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | `Boolean` | No | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | `Boolean` | No | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `active_asset_id` | - | - | - | - |
| `active_ingest_protocol` | - | - | - | - |
| `advanced_playback_policies` | - | - | - | - |
| `audio_only` | - | - | - | - |
| `created_at` | - | - | - | - |
| `embedded_subtitles` | - | - | - | - |
| `generated_subtitles` | - | - | - | - |
| `id` | - | - | - | - |
| `latency_mode` | - | Yes | Yes | - |
| `low_latency` | - | - | - | - |
| `max_continuous_duration` | - | Yes | Yes | - |
| `meta` | - | - | - | - |
| `new_asset_settings` | - | - | - | - |
| `passthrough` | - | - | - | - |
| `playback_ids` | - | - | - | - |
| `playback_policies` | - | - | - | - |
| `playback_policy` | - | - | - | - |
| `recent_asset_ids` | - | - | - | - |
| `reconnect_slate_url` | - | - | - | - |
| `reconnect_window` | - | - | - | - |
| `reduced_latency` | - | - | - | - |
| `simulcast_targets` | - | - | - | - |
| `srt_passphrase` | - | - | - | - |
| `status` | - | - | - | - |
| `stream_key` | - | - | - | - |
| `test` | - | - | - | - |
| `use_slate_for_standard_latency` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LiveStream.create({
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "latency_mode" => "example_latency_mode", # String
  "max_continuous_duration" => 1, # Integer
  "status" => "example_status", # String
  "stream_key" => "example_stream_key", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.LiveStream.load({ "id" => "live_stream_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.LiveStream.remove({ "id" => "live_stream_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.LiveStream.update({
  "id" => "live_stream_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LiveStreamEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LiveStreamPlaybackIdEntity

```ruby
live_stream_playback_id = client.LiveStreamPlaybackId
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `String` | No | The DRM configuration used by this playback ID. |
| `id` | `String` | Yes | Unique identifier for the PlaybackID |
| `policy` | `String` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.LiveStreamPlaybackId.load({ "id" => "live_stream_playback_id_id", "live_stream_id" => "live_stream_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LiveStreamPlaybackIdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MetricTimeseriesDataEntity

```ruby
metric_timeseries_data = client.MetricTimeseriesData
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | Yes |  |
| `meta` | `Hash` | Yes |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.MetricTimeseriesData.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MetricTimeseriesDataEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ModerateEntity

```ruby
moderate = client.Moderate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | Yes | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Moderate.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "outputs" => {}, # Hash
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Moderate.load({ "id" => "moderate_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ModerateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MonitoringBreakdownEntity

```ruby
monitoring_breakdown = client.MonitoringBreakdown
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `Integer` | Yes |  |
| `display_value` | `String` | No |  |
| `metric_value` | `Float` | Yes |  |
| `negative_impact` | `Integer` | Yes |  |
| `starting_up_viewers` | `Integer` | Yes |  |
| `value` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.MonitoringBreakdown.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MonitoringBreakdownEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MonitoringBreakdownTimeseriesEntity

```ruby
monitoring_breakdown_timeseries = client.MonitoringBreakdownTimeseries
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `String` | Yes |  |
| `values` | `Array` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.MonitoringBreakdownTimeseries.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MonitoringBreakdownTimeseriesEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MonitoringHistogramTimeseriesEntity

```ruby
monitoring_histogram_timeseries = client.MonitoringHistogramTimeseries
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `Float` | Yes |  |
| `bucket_values` | `Array` | Yes |  |
| `max_percentage` | `Float` | Yes |  |
| `median` | `Float` | Yes |  |
| `p95` | `Float` | Yes |  |
| `sum` | `Integer` | Yes |  |
| `timestamp` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.MonitoringHistogramTimeseries.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MonitoringHistogramTimeseriesEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MonitoringTimeseriesEntity

```ruby
monitoring_timeseries = client.MonitoringTimeseries
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `Integer` | Yes |  |
| `date` | `String` | Yes |  |
| `value` | `Float` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.MonitoringTimeseries.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MonitoringTimeseriesEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OverallEntity

```ruby
overall = client.Overall
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | Yes |  |
| `meta` | `Hash` | Yes |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Overall.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OverallEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PlaybackRestrictionEntity

```ruby
playback_restriction = client.PlaybackRestriction
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `String` | Yes | Unique identifier for the Playback Restriction. |
| `referrer` | `Hash` | Yes | A list of domains allowed to play your videos. |
| `updated_at` | `String` | Yes | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `Hash` | Yes | Rules that control what user agents are allowed to play your videos. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PlaybackRestriction.create({
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "referrer" => {}, # Hash
  "updated_at" => "example_updated_at", # String
  "user_agent" => {}, # Hash
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PlaybackRestriction.load({ "id" => "playback_restriction_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.PlaybackRestriction.remove({ "id" => "playback_restriction_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.PlaybackRestriction.update({
  "id" => "playback_restriction_id",
  "playback_restriction_id" => "playback_restriction_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PlaybackRestrictionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RealTimeBreakdownEntity

```ruby
real_time_breakdown = client.RealTimeBreakdown
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `Integer` | Yes |  |
| `display_value` | `String` | No |  |
| `metric_value` | `Float` | Yes |  |
| `negative_impact` | `Integer` | Yes |  |
| `starting_up_viewers` | `Integer` | Yes |  |
| `value` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RealTimeBreakdown.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RealTimeBreakdownEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RealTimeHistogramTimeseriesEntity

```ruby
real_time_histogram_timeseries = client.RealTimeHistogramTimeseries
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `Float` | Yes |  |
| `bucket_values` | `Array` | Yes |  |
| `max_percentage` | `Float` | Yes |  |
| `median` | `Float` | Yes |  |
| `p95` | `Float` | Yes |  |
| `sum` | `Integer` | Yes |  |
| `timestamp` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RealTimeHistogramTimeseries.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RealTimeHistogramTimeseriesEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RealTimeTimeseriesEntity

```ruby
real_time_timeseries = client.RealTimeTimeseries
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `Integer` | Yes |  |
| `date` | `String` | Yes |  |
| `value` | `Float` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RealTimeTimeseries.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RealTimeTimeseriesEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SignalLiveStreamCompleteEntity

```ruby
signal_live_stream_complete = client.SignalLiveStreamComplete
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | No |  |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SignalLiveStreamComplete.update({
  "live_stream_id" => "live_stream_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SignalLiveStreamCompleteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SigningKeyEntity

```ruby
signing_key = client.SigningKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | Time at which the object was created. |
| `data` | `Hash` | No |  |
| `id` | `String` | Yes | Unique identifier for the Signing Key. |
| `private_key` | `String` | No | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SigningKey.create({
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SigningKey.load({ "id" => "signing_key_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SigningKey.remove({ "id" => "signing_key_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SigningKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SimulcastTargetEntity

```ruby
simulcast_target = client.SimulcastTarget
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error_severity` | `String` | No | The severity of the error encountered by the simulcast target. |
| `id` | `String` | Yes | ID of the Simulcast Target |
| `passthrough` | `String` | No | Arbitrary user-supplied metadata set when creating a simulcast target. |
| `status` | `String` | Yes | The current status of the simulcast target. |
| `stream_key` | `String` | No | Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. |
| `url` | `String` | Yes | The RTMP(s) or SRT endpoint for a simulcast destination. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SimulcastTarget.create({
  "live_stream_id" => "example_live_stream_id", # String
  "id" => "example_id", # String
  "status" => "example_status", # String
  "url" => "example_url", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SimulcastTarget.load({ "id" => "simulcast_target_id", "live_stream_id" => "live_stream_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SimulcastTargetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StaticRenditionEntity

```ruby
static_rendition = client.StaticRendition
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `passthrough` | `String` | No | Arbitrary user-supplied metadata set for the static rendition. |
| `resolution` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.StaticRendition.create({
  "asset_id" => "example_asset_id", # String
  "resolution" => "example_resolution", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StaticRenditionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubviewBreakdownTimeseriesEntity

```ruby
subview_breakdown_timeseries = client.SubviewBreakdownTimeseries
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `values` | `Array` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubviewBreakdownTimeseries.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubviewBreakdownTimeseriesEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubviewOverallValueEntity

```ruby
subview_overall_value = client.SubviewOverallValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | Yes |  |
| `meta` | `Hash` | Yes |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes | Always `null` for this endpoint — a single aggregate value has no row count. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubviewOverallValue.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubviewOverallValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SummarizeEntity

```ruby
summarize = client.Summarize
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | Yes | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Summarize.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "outputs" => {}, # Hash
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Summarize.load({ "id" => "summarize_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SummarizeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TranscriptionVocabularyEntity

```ruby
transcription_vocabulary = client.TranscriptionVocabulary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `String` | Yes | Unique identifier for the Transcription Vocabulary |
| `name` | `String` | No | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `String` | No | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `Array` | No | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `updated_at` | `String` | Yes | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `passthrough` | - | - | - | - |
| `phrases` | - | Yes | Yes | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TranscriptionVocabulary.create({
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "updated_at" => "example_updated_at", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TranscriptionVocabulary.load({ "id" => "transcription_vocabulary_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TranscriptionVocabulary.remove({ "id" => "transcription_vocabulary_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TranscriptionVocabulary.update({
  "id" => "transcription_vocabulary_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TranscriptionVocabularyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TranslateAudioEntity

```ruby
translate_audio = client.TranslateAudio
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | No | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TranslateAudio.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TranslateAudio.load({ "id" => "translate_audio_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TranslateAudioEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TranslateCaptionEntity

```ruby
translate_caption = client.TranslateCaption
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Integer` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `Hash` | Yes | The directive run that dispatched this job. |
| `errors` | `Array` | No | Error details. |
| `id` | `String` | Yes | Unique job identifier. |
| `outputs` | `Hash` | No | Workflow results. |
| `parameters` | `Hash` | Yes |  |
| `passthrough` | `String` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Hash` | Yes | Related Mux resources linked to this job. |
| `status` | `String` | Yes | Current job status. |
| `units_consumed` | `Integer` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `Integer` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TranslateCaption.create({
  "created_at" => 1, # Integer
  "directive" => {}, # Hash
  "id" => "example_id", # String
  "parameters" => {}, # Hash
  "resources" => {}, # Hash
  "status" => "example_status", # String
  "units_consumed" => 1, # Integer
  "updated_at" => 1, # Integer
  "workflow" => "example_workflow", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TranslateCaption.load({ "id" => "translate_caption_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TranslateCaptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UpdateAssetTrackEntity

```ruby
update_asset_track = client.UpdateAssetTrack
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_language_confidence` | `Float` | No | The confidence value (0-1) of the determined language. |
| `closed_captions` | `Boolean` | No | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `duration` | `Float` | No | The duration in seconds of the track media. |
| `id` | `String` | No | Unique identifier for the Track |
| `language_code` | `String` | No | The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'. |
| `max_channels` | `Integer` | No | The maximum number of audio channels the track supports. |
| `max_frame_rate` | `Float` | No | The maximum frame rate available for the track. |
| `max_height` | `Integer` | No | The maximum height in pixels available for the track. |
| `max_width` | `Integer` | No | The maximum width in pixels available for the track. |
| `name` | `String` | No | The name of the track containing a human-readable description. |
| `passthrough` | `String` | No | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `primary` | `Boolean` | No | For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset. |
| `status` | `String` | No | The status of the track. |
| `text_source` | `String` | No | The source of the text contained in a Track of type `text`. |
| `text_type` | `String` | No | This parameter is only set for `text` type tracks. |
| `type` | `String` | No | The type of track |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.UpdateAssetTrack.update({
  "asset_id" => "asset_id",
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UpdateAssetTrackEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UploadEntity

```ruby
upload = client.Upload
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_id` | `String` | No | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `String` | Yes | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `Hash` | No | Only set if an error occurred during asset creation. |
| `id` | `String` | Yes | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `Hash` | No |  |
| `status` | `String` | Yes |  |
| `test` | `Boolean` | No | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | `Integer` | Yes | Max time in seconds for the signed upload URL to be valid. |
| `url` | `String` | No | The URL to upload the associated source media to. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `asset_id` | - | - | - |
| `cors_origin` | - | - | - |
| `error` | - | - | - |
| `id` | - | - | - |
| `new_asset_settings` | - | - | - |
| `status` | - | - | - |
| `test` | - | - | - |
| `timeout` | - | Yes | - |
| `url` | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Upload.create({
  "cors_origin" => "example_cors_origin", # String
  "id" => "example_id", # String
  "status" => "example_status", # String
  "timeout" => 1, # Integer
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Upload.load({ "id" => "upload_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Upload.update({
  "id" => "upload_id",
  "upload_id" => "upload_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UploadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UrlSigningKeyEntity

```ruby
url_signing_key = client.UrlSigningKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.UrlSigningKey.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UrlSigningKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VideoViewEntity

```ruby
video_view = client.VideoView
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | Yes |  |
| `id` | `String` | No |  |
| `timeframe` | `Array` | Yes |  |
| `total_row_count` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.VideoView.load({ "id" => "video_view_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VideoViewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebhookEntity

```ruby
webhook = client.Webhook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | Yes | The URL where Mux sends webhook notifications. |
| `created_at` | `String` | Yes | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | `Boolean` | Yes | Whether Mux attempts to deliver notifications to this webhook. |
| `id` | `String` | Yes | Unique identifier for the webhook. |
| `signing_secret` | `String` | No | Secret used to verify that webhook payloads were sent by Mux. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `address` | - | - | Yes | - |
| `created_at` | - | - | - | - |
| `enabled` | - | - | Yes | - |
| `id` | - | - | - | - |
| `signing_secret` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Webhook.create({
  "address" => "example_address", # String
  "created_at" => "example_created_at", # String
  "enabled" => true, # Boolean
  "id" => "example_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Webhook.load({ "id" => "webhook_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Webhook.remove({ "id" => "webhook_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Webhook.update({
  "id" => "webhook_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WhoAmIEntity

```ruby
who_am_i = client.WhoAmI
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token_name` | `String` | Yes |  |
| `environment_id` | `String` | Yes |  |
| `environment_name` | `String` | Yes |  |
| `environment_type` | `String` | Yes |  |
| `organization_id` | `String` | Yes |  |
| `organization_name` | `String` | Yes |  |
| `permissions` | `Array` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WhoAmI.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WhoAmIEntity` instance with the same client and
options.

#### `get_name -> String`

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

```ruby
client = MuxSDK.new({
  "feature" => {
    "debug" => { "active" => true },
    "idempotency" => { "active" => true },
    "metrics" => { "active" => true },
    "paging" => { "active" => true },
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
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

