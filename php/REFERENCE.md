# Mux PHP SDK Reference

Complete API reference for the Mux PHP SDK.


## MuxSDK

### Constructor

```php
require_once __DIR__ . '/mux_sdk.php';

$client = new MuxSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MuxSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = MuxSDK::test();
```


### Instance Methods

#### `Annotation($data = null)`

Create a new `AnnotationEntity` instance. Pass `null` for no initial data.

#### `AskQuestion($data = null)`

Create a new `AskQuestionEntity` instance. Pass `null` for no initial data.

#### `Asset($data = null)`

Create a new `AssetEntity` instance. Pass `null` for no initial data.

#### `AssetOrLiveStreamId($data = null)`

Create a new `AssetOrLiveStreamIdEntity` instance. Pass `null` for no initial data.

#### `AssetPlaybackId($data = null)`

Create a new `AssetPlaybackIdEntity` instance. Pass `null` for no initial data.

#### `AssetShot($data = null)`

Create a new `AssetShotEntity` instance. Pass `null` for no initial data.

#### `CreatePlaybackId($data = null)`

Create a new `CreatePlaybackIdEntity` instance. Pass `null` for no initial data.

#### `CreateTrack($data = null)`

Create a new `CreateTrackEntity` instance. Pass `null` for no initial data.

#### `Directive($data = null)`

Create a new `DirectiveEntity` instance. Pass `null` for no initial data.

#### `DirectiveRunDetail($data = null)`

Create a new `DirectiveRunDetailEntity` instance. Pass `null` for no initial data.

#### `DrmConfiguration($data = null)`

Create a new `DrmConfigurationEntity` instance. Pass `null` for no initial data.

#### `EditCaption($data = null)`

Create a new `EditCaptionEntity` instance. Pass `null` for no initial data.

#### `EngagementHeatmap($data = null)`

Create a new `EngagementHeatmapEntity` instance. Pass `null` for no initial data.

#### `EngagementHotspot($data = null)`

Create a new `EngagementHotspotEntity` instance. Pass `null` for no initial data.

#### `FindBestThumbnail($data = null)`

Create a new `FindBestThumbnailEntity` instance. Pass `null` for no initial data.

#### `FindKeyMoment($data = null)`

Create a new `FindKeyMomentEntity` instance. Pass `null` for no initial data.

#### `FindScene($data = null)`

Create a new `FindSceneEntity` instance. Pass `null` for no initial data.

#### `GenerateAssetShot($data = null)`

Create a new `GenerateAssetShotEntity` instance. Pass `null` for no initial data.

#### `GenerateChapter($data = null)`

Create a new `GenerateChapterEntity` instance. Pass `null` for no initial data.

#### `GenerateEngagementInsight($data = null)`

Create a new `GenerateEngagementInsightEntity` instance. Pass `null` for no initial data.

#### `GeneratePremiumCaption($data = null)`

Create a new `GeneratePremiumCaptionEntity` instance. Pass `null` for no initial data.

#### `GenerateTrackSubtitle($data = null)`

Create a new `GenerateTrackSubtitleEntity` instance. Pass `null` for no initial data.

#### `Incident($data = null)`

Create a new `IncidentEntity` instance. Pass `null` for no initial data.

#### `InputInfo($data = null)`

Create a new `InputInfoEntity` instance. Pass `null` for no initial data.

#### `JobSummary($data = null)`

Create a new `JobSummaryEntity` instance. Pass `null` for no initial data.

#### `ListAllMetricValue($data = null)`

Create a new `ListAllMetricValueEntity` instance. Pass `null` for no initial data.

#### `ListBreakdownValue($data = null)`

Create a new `ListBreakdownValueEntity` instance. Pass `null` for no initial data.

#### `ListDeliveryUsage($data = null)`

Create a new `ListDeliveryUsageEntity` instance. Pass `null` for no initial data.

#### `ListDimensionValue($data = null)`

Create a new `ListDimensionValueEntity` instance. Pass `null` for no initial data.

#### `ListError($data = null)`

Create a new `ListErrorEntity` instance. Pass `null` for no initial data.

#### `ListExport($data = null)`

Create a new `ListExportEntity` instance. Pass `null` for no initial data.

#### `ListFilterValue($data = null)`

Create a new `ListFilterValueEntity` instance. Pass `null` for no initial data.

#### `ListInsight($data = null)`

Create a new `ListInsightEntity` instance. Pass `null` for no initial data.

#### `ListMonitoringDimension($data = null)`

Create a new `ListMonitoringDimensionEntity` instance. Pass `null` for no initial data.

#### `ListMonitoringMetric($data = null)`

Create a new `ListMonitoringMetricEntity` instance. Pass `null` for no initial data.

#### `ListRealTimeDimension($data = null)`

Create a new `ListRealTimeDimensionEntity` instance. Pass `null` for no initial data.

#### `ListRealTimeMetric($data = null)`

Create a new `ListRealTimeMetricEntity` instance. Pass `null` for no initial data.

#### `ListRelatedIncident($data = null)`

Create a new `ListRelatedIncidentEntity` instance. Pass `null` for no initial data.

#### `ListSubviewBreakdownValue($data = null)`

Create a new `ListSubviewBreakdownValueEntity` instance. Pass `null` for no initial data.

#### `ListSubviewComparisonValue($data = null)`

Create a new `ListSubviewComparisonValueEntity` instance. Pass `null` for no initial data.

#### `ListSubviewDimension($data = null)`

Create a new `ListSubviewDimensionEntity` instance. Pass `null` for no initial data.

#### `ListSubviewDimensionValue($data = null)`

Create a new `ListSubviewDimensionValueEntity` instance. Pass `null` for no initial data.

#### `ListVideoViewExport($data = null)`

Create a new `ListVideoViewExportEntity` instance. Pass `null` for no initial data.

#### `LiveStream($data = null)`

Create a new `LiveStreamEntity` instance. Pass `null` for no initial data.

#### `LiveStreamPlaybackId($data = null)`

Create a new `LiveStreamPlaybackIdEntity` instance. Pass `null` for no initial data.

#### `MetricTimeseriesData($data = null)`

Create a new `MetricTimeseriesDataEntity` instance. Pass `null` for no initial data.

#### `Moderate($data = null)`

Create a new `ModerateEntity` instance. Pass `null` for no initial data.

#### `MonitoringBreakdown($data = null)`

Create a new `MonitoringBreakdownEntity` instance. Pass `null` for no initial data.

#### `MonitoringBreakdownTimeseries($data = null)`

Create a new `MonitoringBreakdownTimeseriesEntity` instance. Pass `null` for no initial data.

#### `MonitoringHistogramTimeseries($data = null)`

Create a new `MonitoringHistogramTimeseriesEntity` instance. Pass `null` for no initial data.

#### `MonitoringTimeseries($data = null)`

Create a new `MonitoringTimeseriesEntity` instance. Pass `null` for no initial data.

#### `Overall($data = null)`

Create a new `OverallEntity` instance. Pass `null` for no initial data.

#### `PlaybackRestriction($data = null)`

Create a new `PlaybackRestrictionEntity` instance. Pass `null` for no initial data.

#### `RealTimeBreakdown($data = null)`

Create a new `RealTimeBreakdownEntity` instance. Pass `null` for no initial data.

#### `RealTimeHistogramTimeseries($data = null)`

Create a new `RealTimeHistogramTimeseriesEntity` instance. Pass `null` for no initial data.

#### `RealTimeTimeseries($data = null)`

Create a new `RealTimeTimeseriesEntity` instance. Pass `null` for no initial data.

#### `SignalLiveStreamComplete($data = null)`

Create a new `SignalLiveStreamCompleteEntity` instance. Pass `null` for no initial data.

#### `SigningKey($data = null)`

Create a new `SigningKeyEntity` instance. Pass `null` for no initial data.

#### `SimulcastTarget($data = null)`

Create a new `SimulcastTargetEntity` instance. Pass `null` for no initial data.

#### `StaticRendition($data = null)`

Create a new `StaticRenditionEntity` instance. Pass `null` for no initial data.

#### `SubviewBreakdownTimeseries($data = null)`

Create a new `SubviewBreakdownTimeseriesEntity` instance. Pass `null` for no initial data.

#### `SubviewOverallValue($data = null)`

Create a new `SubviewOverallValueEntity` instance. Pass `null` for no initial data.

#### `Summarize($data = null)`

Create a new `SummarizeEntity` instance. Pass `null` for no initial data.

#### `TranscriptionVocabulary($data = null)`

Create a new `TranscriptionVocabularyEntity` instance. Pass `null` for no initial data.

#### `TranslateAudio($data = null)`

Create a new `TranslateAudioEntity` instance. Pass `null` for no initial data.

#### `TranslateCaption($data = null)`

Create a new `TranslateCaptionEntity` instance. Pass `null` for no initial data.

#### `UpdateAssetTrack($data = null)`

Create a new `UpdateAssetTrackEntity` instance. Pass `null` for no initial data.

#### `Upload($data = null)`

Create a new `UploadEntity` instance. Pass `null` for no initial data.

#### `UrlSigningKey($data = null)`

Create a new `UrlSigningKeyEntity` instance. Pass `null` for no initial data.

#### `UsageExport($data = null)`

Create a new `UsageExportEntity` instance. Pass `null` for no initial data.

#### `VideoView($data = null)`

Create a new `VideoViewEntity` instance. Pass `null` for no initial data.

#### `Webhook($data = null)`

Create a new `WebhookEntity` instance. Pass `null` for no initial data.

#### `WhoAmI($data = null)`

Create a new `WhoAmIEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): MuxUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AnnotationEntity

```php
$annotation = $client->Annotation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Datetime when the annotation applies |
| `id` | `string` | Yes | Unique identifier for the annotation |
| `note` | `string` | Yes | The annotation note content |
| `sub_property_id` | `string` | No | Customer-defined sub-property identifier |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Annotation()->create([
  "date" => null, // string
  "id" => null, // string
  "note" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Annotation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Annotation()->load(["id" => "annotation_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Annotation()->remove(["id" => "annotation_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Annotation()->update([
  "id" => "annotation_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnnotationEntity`

Create a new `AnnotationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AskQuestionEntity

```php
$ask_question = $client->AskQuestion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | Yes | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AskQuestion()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "outputs" => null, // array
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AskQuestion()->load(["id" => "ask_question_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AskQuestionEntity`

Create a new `AskQuestionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AssetEntity

```php
$asset = $client->Asset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `string` | Yes | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `data` | `array` | No |  |
| `directives` | `array` | No | The Mux Robots directives applied to the asset. |
| `duration` | `float` | No | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `string` | Yes | This field is deprecated. |
| `errors` | `array` | No | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `bool` | No | Whether to perform shot detection on this asset. |
| `id` | `string` | Yes | Unique identifier for the Asset. |
| `ingest_type` | `string` | No | The type of ingest used to create the asset. |
| `is_live` | `bool` | No | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `string` | No | Unique identifier for the live stream. |
| `master` | `array` | No | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `string` | Yes |  |
| `max_resolution_tier` | `string` | Yes | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `float` | No | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `string` | No | This field is deprecated. |
| `meta` | `array` | No | Customer provided metadata about this asset. |
| `mp4_support` | `string` | No | Deprecated. |
| `non_standard_input_reasons` | `array` | No | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `bool` | No | Normalize the audio track loudness level. |
| `passthrough` | `string` | No | You can set this field to anything you want. |
| `playback_ids` | `array` | No | An array of Playback ID objects. |
| `progress` | `array` | Yes | Detailed state information about the asset ingest process. |
| `recording_times` | `array` | No | An array of individual live stream recording sessions. |
| `resolution_tier` | `string` | No | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `array` | Yes | The results of generating shots on the video |
| `source_asset_id` | `string` | No | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `array` | No | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `string` | Yes | The status of the asset. |
| `test` | `bool` | No | True means this live stream is a test asset. |
| `thumbnail_time` | `float` | No | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `array` | No | The individual media tracks that make up an asset. |
| `upload_id` | `string` | No | Unique identifier for the Direct Upload. |
| `video_quality` | `string` | No | The video quality controls the cost, quality, and available platform features for the asset. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Asset()->create([
  "created_at" => null, // string
  "encoding_tier" => null, // string
  "id" => null, // string
  "master_access" => null, // string
  "max_resolution_tier" => null, // string
  "progress" => null, // array
  "shots" => null, // array
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Asset()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Asset()->load(["id" => "asset_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Asset()->remove(["id" => "asset_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Asset()->update([
  "id" => "asset_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssetEntity`

Create a new `AssetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AssetOrLiveStreamIdEntity

```php
$asset_or_live_stream_id = $client->AssetOrLiveStreamId();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | `array` | Yes | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AssetOrLiveStreamId()->load(["playback_id" => "playback_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssetOrLiveStreamIdEntity`

Create a new `AssetOrLiveStreamIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AssetPlaybackIdEntity

```php
$asset_playback_id = $client->AssetPlaybackId();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `id` | `string` | Yes | Unique identifier for the PlaybackID |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AssetPlaybackId()->load(["id" => "asset_playback_id_id", "asset_id" => "asset_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssetPlaybackIdEntity`

Create a new `AssetPlaybackIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AssetShotEntity

```php
$asset_shot = $client->AssetShot();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | No | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | `string` | No | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | `string` | Yes | The status of the shot detection process |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AssetShot()->load(["asset_id" => "asset_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssetShotEntity`

Create a new `AssetShotEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreatePlaybackIdEntity

```php
$create_playback_id = $client->CreatePlaybackId();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `policy` | `string` | No | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreatePlaybackId()->create([
  "asset_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreatePlaybackIdEntity`

Create a new `CreatePlaybackIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateTrackEntity

```php
$create_track = $client->CreateTrack();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateTrack()->create([
  "asset_id" => null, // string
  "language_code" => null, // string
  "type" => null, // string
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateTrackEntity`

Create a new `CreateTrackEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DirectiveEntity

```php
$directive = $client->Directive();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the directive was created. |
| `id` | `string` | Yes | Stable directive identifier (drv_...). |
| `name` | `string` | Yes | Human-readable directive name. |
| `resources` | `array` | Yes | Resource declarations. |
| `subject` | `array` | Yes |  |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) when the directive was last updated. |
| `workflows` | `array` | Yes | Workflow bindings. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Directive()->create([
  "created_at" => null, // int
  "id" => null, // string
  "name" => null, // string
  "resources" => null, // array
  "subject" => null, // array
  "updated_at" => null, // int
  "workflows" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Directive()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Directive()->load(["id" => "directive_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Directive()->remove(["id" => "directive_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DirectiveEntity`

Create a new `DirectiveEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DirectiveRunDetailEntity

```php
$directive_run_detail = $client->DirectiveRunDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `mixed` | Yes | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `array` | Yes | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `string` | Yes | Unique run identifier (drvrun_...). |
| `started_at` | `int` | Yes | Unix timestamp (seconds) when the run started. |
| `status` | `string` | Yes | Current run status. |
| `subject_id` | `string` | Yes | The bare Mux asset ID this run targeted. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DirectiveRunDetail()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DirectiveRunDetail()->load(["directive_id" => "directive_id", "run_id" => "run_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DirectiveRunDetailEntity`

Create a new `DirectiveRunDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DrmConfigurationEntity

```php
$drm_configuration = $client->DrmConfiguration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the DRM Configuration. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DrmConfiguration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DrmConfiguration()->load(["id" => "drm_configuration_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DrmConfigurationEntity`

Create a new `DrmConfigurationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EditCaptionEntity

```php
$edit_caption = $client->EditCaption();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | Yes | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EditCaption()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "outputs" => null, // array
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EditCaption()->load(["id" => "edit_caption_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EditCaptionEntity`

Create a new `EditCaptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EngagementHeatmapEntity

```php
$engagement_heatmap = $client->EngagementHeatmap();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EngagementHeatmap()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EngagementHeatmapEntity`

Create a new `EngagementHeatmapEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EngagementHotspotEntity

```php
$engagement_hotspot = $client->EngagementHotspot();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EngagementHotspot()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EngagementHotspotEntity`

Create a new `EngagementHotspotEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FindBestThumbnailEntity

```php
$find_best_thumbnail = $client->FindBestThumbnail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | Yes | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FindBestThumbnail()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "outputs" => null, // array
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FindBestThumbnail()->load(["id" => "find_best_thumbnail_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FindBestThumbnailEntity`

Create a new `FindBestThumbnailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FindKeyMomentEntity

```php
$find_key_moment = $client->FindKeyMoment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | Yes | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FindKeyMoment()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "outputs" => null, // array
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FindKeyMoment()->load(["id" => "find_key_moment_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FindKeyMomentEntity`

Create a new `FindKeyMomentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FindSceneEntity

```php
$find_scene = $client->FindScene();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | Yes | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FindScene()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "outputs" => null, // array
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FindScene()->load(["id" => "find_scene_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FindSceneEntity`

Create a new `FindSceneEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerateAssetShotEntity

```php
$generate_asset_shot = $client->GenerateAssetShot();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GenerateAssetShot()->create([
  "asset_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerateAssetShotEntity`

Create a new `GenerateAssetShotEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerateChapterEntity

```php
$generate_chapter = $client->GenerateChapter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | Yes | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GenerateChapter()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "outputs" => null, // array
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GenerateChapter()->load(["id" => "generate_chapter_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerateChapterEntity`

Create a new `GenerateChapterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerateEngagementInsightEntity

```php
$generate_engagement_insight = $client->GenerateEngagementInsight();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | Yes | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GenerateEngagementInsight()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "outputs" => null, // array
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GenerateEngagementInsight()->load(["id" => "generate_engagement_insight_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerateEngagementInsightEntity`

Create a new `GenerateEngagementInsightEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GeneratePremiumCaptionEntity

```php
$generate_premium_caption = $client->GeneratePremiumCaption();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | Yes | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GeneratePremiumCaption()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "outputs" => null, // array
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GeneratePremiumCaption()->load(["id" => "generate_premium_caption_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GeneratePremiumCaptionEntity`

Create a new `GeneratePremiumCaptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerateTrackSubtitleEntity

```php
$generate_track_subtitle = $client->GenerateTrackSubtitle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generated_subtitles` | `array` | Yes | Generate subtitle tracks using automatic speech recognition with this configuration. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GenerateTrackSubtitle()->create([
  "asset_id" => null, // string
  "track_id" => null, // string
  "generated_subtitles" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerateTrackSubtitleEntity`

Create a new `GenerateTrackSubtitleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentEntity

```php
$incident = $client->Incident();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `int` | Yes |  |
| `affected_views_per_hour` | `int` | Yes |  |
| `affected_views_per_hour_on_open` | `int` | Yes |  |
| `breakdowns` | `array` | Yes |  |
| `data` | `array` | Yes |  |
| `description` | `string` | Yes |  |
| `error_description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `impact` | `string` | Yes |  |
| `incident_key` | `string` | Yes |  |
| `measured_value` | `float` | Yes |  |
| `measured_value_on_close` | `float` | Yes |  |
| `measurement` | `string` | Yes |  |
| `notification_rules` | `array` | Yes |  |
| `notifications` | `array` | Yes |  |
| `resolved_at` | `string` | Yes |  |
| `sample_size` | `int` | Yes |  |
| `sample_size_unit` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `threshold` | `float` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Incident()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Incident()->load(["id" => "incident_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentEntity`

Create a new `IncidentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InputInfoEntity

```php
$input_info = $client->InputInfo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `array` | No |  |
| `settings` | `array` | No | An array of objects that each describe an input file to be used to create the asset. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->InputInfo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InputInfoEntity`

Create a new `InputInfoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## JobSummaryEntity

```php
$job_summary = $client->JobSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `id` | `string` | Yes | Unique job identifier. |
| `links` | `array` | Yes | Hypermedia links for this job. |
| `status` | `string` | Yes | Current job status. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes | Workflow type that created this job. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->JobSummary()->create([
  "job_id" => null, // string
  "created_at" => null, // int
  "id" => null, // string
  "links" => null, // array
  "status" => null, // string
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->JobSummary()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): JobSummaryEntity`

Create a new `JobSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListAllMetricValueEntity

```php
$list_all_metric_value = $client->ListAllMetricValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_views` | `int` | No |  |
| `items` | `array` | No |  |
| `metric` | `string` | No |  |
| `name` | `string` | Yes |  |
| `started_views` | `int` | No |  |
| `total_playing_time` | `int` | No |  |
| `type` | `string` | No |  |
| `unique_viewers` | `int` | No |  |
| `value` | `float` | No |  |
| `view_count` | `int` | No |  |
| `watch_time` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListAllMetricValue()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListAllMetricValueEntity`

Create a new `ListAllMetricValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListBreakdownValueEntity

```php
$list_breakdown_value = $client->ListBreakdownValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field` | `string` | Yes |  |
| `negative_impact` | `int` | Yes |  |
| `total_playing_time` | `int` | Yes |  |
| `total_watch_time` | `int` | Yes |  |
| `value` | `float` | Yes |  |
| `views` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListBreakdownValue()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListBreakdownValueEntity`

Create a new `ListBreakdownValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListDeliveryUsageEntity

```php
$list_delivery_usage = $client->ListDeliveryUsage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_duration` | `float` | Yes | The duration of the asset in seconds. |
| `asset_encoding_tier` | `string` | Yes | This field is deprecated. |
| `asset_id` | `string` | Yes | Unique identifier for the asset. |
| `asset_resolution_tier` | `string` | Yes | The resolution tier that the asset was ingested at, affecting billing for ingest & storage |
| `asset_state` | `string` | Yes | The state of the asset. |
| `asset_video_quality` | `string` | No | The video quality that the asset was ingested at. |
| `created_at` | `string` | Yes | Time at which the asset was created. |
| `deleted_at` | `string` | No | If exists, time at which the asset was deleted. |
| `delivered_seconds` | `float` | Yes | Total number of delivered seconds during this time window. |
| `delivered_seconds_by_resolution` | `array` | Yes | Seconds delivered broken into resolution tiers. |
| `live_stream_id` | `string` | No | Unique identifier for the live stream that created the asset. |
| `passthrough` | `string` | No | The `passthrough` value for the asset. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListDeliveryUsage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListDeliveryUsageEntity`

Create a new `ListDeliveryUsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListDimensionValueEntity

```php
$list_dimension_value = $client->ListDimensionValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `total_count` | `int` | Yes |  |
| `total_row_count` | `int` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListDimensionValue()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ListDimensionValue()->load(["dimension_id" => "dimension_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListDimensionValueEntity`

Create a new `ListDimensionValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListErrorEntity

```php
$list_error = $client->ListError();
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
| `percentage` | `float` | Yes | The percentage of views that experienced this error. |
| `player_error_code` | `string` | Yes | The string version of the error code |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListError()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListErrorEntity`

Create a new `ListErrorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListExportEntity

```php
$list_export = $client->ListExport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListExport()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListExportEntity`

Create a new `ListExportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListFilterValueEntity

```php
$list_filter_value = $client->ListFilterValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListFilterValue()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ListFilterValue()->load(["filter_id" => "filter_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListFilterValueEntity`

Create a new `ListFilterValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListInsightEntity

```php
$list_insight = $client->ListInsight();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `filter_column` | `string` | Yes |  |
| `filter_value` | `string` | Yes |  |
| `metric` | `float` | Yes |  |
| `negative_impact_score` | `float` | Yes |  |
| `total_playing_time` | `int` | Yes |  |
| `total_views` | `int` | Yes |  |
| `total_watch_time` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListInsight()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListInsightEntity`

Create a new `ListInsightEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListMonitoringDimensionEntity

```php
$list_monitoring_dimension = $client->ListMonitoringDimension();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListMonitoringDimension()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListMonitoringDimensionEntity`

Create a new `ListMonitoringDimensionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListMonitoringMetricEntity

```php
$list_monitoring_metric = $client->ListMonitoringMetric();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListMonitoringMetric()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListMonitoringMetricEntity`

Create a new `ListMonitoringMetricEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListRealTimeDimensionEntity

```php
$list_real_time_dimension = $client->ListRealTimeDimension();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListRealTimeDimension()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListRealTimeDimensionEntity`

Create a new `ListRealTimeDimensionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListRealTimeMetricEntity

```php
$list_real_time_metric = $client->ListRealTimeMetric();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListRealTimeMetric()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListRealTimeMetricEntity`

Create a new `ListRealTimeMetricEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListRelatedIncidentEntity

```php
$list_related_incident = $client->ListRelatedIncident();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `int` | Yes |  |
| `affected_views_per_hour` | `int` | Yes |  |
| `affected_views_per_hour_on_open` | `int` | Yes |  |
| `breakdowns` | `array` | Yes |  |
| `description` | `string` | Yes |  |
| `error_description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `impact` | `string` | Yes |  |
| `incident_key` | `string` | Yes |  |
| `measured_value` | `float` | Yes |  |
| `measured_value_on_close` | `float` | Yes |  |
| `measurement` | `string` | Yes |  |
| `notification_rules` | `array` | Yes |  |
| `notifications` | `array` | Yes |  |
| `resolved_at` | `string` | Yes |  |
| `sample_size` | `int` | Yes |  |
| `sample_size_unit` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `threshold` | `float` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListRelatedIncident()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListRelatedIncidentEntity`

Create a new `ListRelatedIncidentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListSubviewBreakdownValueEntity

```php
$list_subview_breakdown_value = $client->ListSubviewBreakdownValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakdown_value` | `string` | Yes |  |
| `metric_value` | `float` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListSubviewBreakdownValue()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListSubviewBreakdownValueEntity`

Create a new `ListSubviewBreakdownValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListSubviewComparisonValueEntity

```php
$list_subview_comparison_value = $client->ListSubviewComparisonValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dimension_value` | `string` | Yes |  |
| `values` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListSubviewComparisonValue()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListSubviewComparisonValueEntity`

Create a new `ListSubviewComparisonValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListSubviewDimensionEntity

```php
$list_subview_dimension = $client->ListSubviewDimension();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes |  |
| `total_row_count` | `int` | Yes | Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ListSubviewDimension()->load(["subview_type" => "subview_type"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListSubviewDimensionEntity`

Create a new `ListSubviewDimensionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListSubviewDimensionValueEntity

```php
$list_subview_dimension_value = $client->ListSubviewDimensionValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes |  |
| `meta` | `mixed` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ListSubviewDimensionValue()->load(["dimension_name" => "dimension_name", "subview_metric_id" => "subview_metric_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListSubviewDimensionValueEntity`

Create a new `ListSubviewDimensionValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListVideoViewExportEntity

```php
$list_video_view_export = $client->ListVideoViewExport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `export_date` | `string` | Yes |  |
| `files` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListVideoViewExport()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListVideoViewExportEntity`

Create a new `ListVideoViewExportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LiveStreamEntity

```php
$live_stream = $client->LiveStream();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_asset_id` | `string` | No | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `string` | No | The protocol used for the active ingest stream. |
| `advanced_playback_policies` | `array` | No | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `audio_only` | `bool` | No | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `string` | Yes | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `array` | No | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `array` | No | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `string` | Yes | Unique identifier for the Live Stream. |
| `latency_mode` | `string` | Yes | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `bool` | No | This field is deprecated. |
| `max_continuous_duration` | `int` | Yes | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `array` | No | Customer provided metadata about this live stream. |
| `new_asset_settings` | `array` | No | Updates the new asset settings to use to generate a new asset for this live stream. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `array` | No | An array of Playback ID objects. |
| `playback_policies` | `array` | No | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `playback_policy` | `array` | No | Deprecated. |
| `recent_asset_ids` | `array` | No | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `string` | No | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `float` | No | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `bool` | No | This field is deprecated. |
| `simulcast_targets` | `array` | No | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LiveStream()->create([
  "created_at" => null, // string
  "id" => null, // string
  "latency_mode" => null, // string
  "max_continuous_duration" => null, // int
  "status" => null, // string
  "stream_key" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LiveStream()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LiveStream()->load(["id" => "live_stream_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->LiveStream()->remove(["id" => "live_stream_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->LiveStream()->update([
  "id" => "live_stream_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LiveStreamEntity`

Create a new `LiveStreamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LiveStreamPlaybackIdEntity

```php
$live_stream_playback_id = $client->LiveStreamPlaybackId();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `string` | No | The DRM configuration used by this playback ID. |
| `id` | `string` | Yes | Unique identifier for the PlaybackID |
| `policy` | `string` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LiveStreamPlaybackId()->load(["id" => "live_stream_playback_id_id", "live_stream_id" => "live_stream_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LiveStreamPlaybackIdEntity`

Create a new `LiveStreamPlaybackIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MetricTimeseriesDataEntity

```php
$metric_timeseries_data = $client->MetricTimeseriesData();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes |  |
| `meta` | `array` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MetricTimeseriesData()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MetricTimeseriesDataEntity`

Create a new `MetricTimeseriesDataEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ModerateEntity

```php
$moderate = $client->Moderate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | Yes | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Moderate()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "outputs" => null, // array
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Moderate()->load(["id" => "moderate_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ModerateEntity`

Create a new `ModerateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MonitoringBreakdownEntity

```php
$monitoring_breakdown = $client->MonitoringBreakdown();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `display_value` | `string` | No |  |
| `metric_value` | `float` | Yes |  |
| `negative_impact` | `int` | Yes |  |
| `starting_up_viewers` | `int` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MonitoringBreakdown()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MonitoringBreakdownEntity`

Create a new `MonitoringBreakdownEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MonitoringBreakdownTimeseriesEntity

```php
$monitoring_breakdown_timeseries = $client->MonitoringBreakdownTimeseries();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `values` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MonitoringBreakdownTimeseries()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MonitoringBreakdownTimeseriesEntity`

Create a new `MonitoringBreakdownTimeseriesEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MonitoringHistogramTimeseriesEntity

```php
$monitoring_histogram_timeseries = $client->MonitoringHistogramTimeseries();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `float` | Yes |  |
| `bucket_values` | `array` | Yes |  |
| `max_percentage` | `float` | Yes |  |
| `median` | `float` | Yes |  |
| `p95` | `float` | Yes |  |
| `sum` | `int` | Yes |  |
| `timestamp` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MonitoringHistogramTimeseries()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MonitoringHistogramTimeseriesEntity`

Create a new `MonitoringHistogramTimeseriesEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MonitoringTimeseriesEntity

```php
$monitoring_timeseries = $client->MonitoringTimeseries();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `date` | `string` | Yes |  |
| `value` | `float` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MonitoringTimeseries()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MonitoringTimeseriesEntity`

Create a new `MonitoringTimeseriesEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OverallEntity

```php
$overall = $client->Overall();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes |  |
| `meta` | `array` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Overall()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OverallEntity`

Create a new `OverallEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PlaybackRestrictionEntity

```php
$playback_restriction = $client->PlaybackRestriction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Yes | Unique identifier for the Playback Restriction. |
| `referrer` | `array` | Yes | A list of domains allowed to play your videos. |
| `updated_at` | `string` | Yes | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `array` | Yes | Rules that control what user agents are allowed to play your videos. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PlaybackRestriction()->create([
  "created_at" => null, // string
  "id" => null, // string
  "referrer" => null, // array
  "updated_at" => null, // string
  "user_agent" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PlaybackRestriction()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PlaybackRestriction()->load(["id" => "playback_restriction_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PlaybackRestriction()->remove(["id" => "playback_restriction_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PlaybackRestriction()->update([
  "id" => "playback_restriction_id",
  "playback_restriction_id" => "playback_restriction_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PlaybackRestrictionEntity`

Create a new `PlaybackRestrictionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RealTimeBreakdownEntity

```php
$real_time_breakdown = $client->RealTimeBreakdown();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `display_value` | `string` | No |  |
| `metric_value` | `float` | Yes |  |
| `negative_impact` | `int` | Yes |  |
| `starting_up_viewers` | `int` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RealTimeBreakdown()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RealTimeBreakdownEntity`

Create a new `RealTimeBreakdownEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RealTimeHistogramTimeseriesEntity

```php
$real_time_histogram_timeseries = $client->RealTimeHistogramTimeseries();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `float` | Yes |  |
| `bucket_values` | `array` | Yes |  |
| `max_percentage` | `float` | Yes |  |
| `median` | `float` | Yes |  |
| `p95` | `float` | Yes |  |
| `sum` | `int` | Yes |  |
| `timestamp` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RealTimeHistogramTimeseries()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RealTimeHistogramTimeseriesEntity`

Create a new `RealTimeHistogramTimeseriesEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RealTimeTimeseriesEntity

```php
$real_time_timeseries = $client->RealTimeTimeseries();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `date` | `string` | Yes |  |
| `value` | `float` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RealTimeTimeseries()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RealTimeTimeseriesEntity`

Create a new `RealTimeTimeseriesEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SignalLiveStreamCompleteEntity

```php
$signal_live_stream_complete = $client->SignalLiveStreamComplete();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SignalLiveStreamComplete()->update([
  "live_stream_id" => "live_stream_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SignalLiveStreamCompleteEntity`

Create a new `SignalLiveStreamCompleteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SigningKeyEntity

```php
$signing_key = $client->SigningKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time at which the object was created. |
| `data` | `array` | No |  |
| `id` | `string` | Yes | Unique identifier for the Signing Key. |
| `private_key` | `string` | No | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SigningKey()->create([
  "created_at" => null, // string
  "id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SigningKey()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SigningKey()->load(["id" => "signing_key_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SigningKey()->remove(["id" => "signing_key_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SigningKeyEntity`

Create a new `SigningKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SimulcastTargetEntity

```php
$simulcast_target = $client->SimulcastTarget();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SimulcastTarget()->create([
  "live_stream_id" => null, // string
  "id" => null, // string
  "status" => null, // string
  "url" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SimulcastTarget()->load(["id" => "simulcast_target_id", "live_stream_id" => "live_stream_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SimulcastTargetEntity`

Create a new `SimulcastTargetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StaticRenditionEntity

```php
$static_rendition = $client->StaticRendition();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the static rendition. |
| `resolution` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->StaticRendition()->create([
  "asset_id" => null, // string
  "resolution" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StaticRenditionEntity`

Create a new `StaticRenditionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubviewBreakdownTimeseriesEntity

```php
$subview_breakdown_timeseries = $client->SubviewBreakdownTimeseries();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `values` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubviewBreakdownTimeseries()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubviewBreakdownTimeseriesEntity`

Create a new `SubviewBreakdownTimeseriesEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubviewOverallValueEntity

```php
$subview_overall_value = $client->SubviewOverallValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes |  |
| `meta` | `array` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `total_row_count` | `int` | Yes | Always `null` for this endpoint — a single aggregate value has no row count. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubviewOverallValue()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubviewOverallValueEntity`

Create a new `SubviewOverallValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SummarizeEntity

```php
$summarize = $client->Summarize();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | Yes | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Summarize()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "outputs" => null, // array
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Summarize()->load(["id" => "summarize_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SummarizeEntity`

Create a new `SummarizeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TranscriptionVocabularyEntity

```php
$transcription_vocabulary = $client->TranscriptionVocabulary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Yes | Unique identifier for the Transcription Vocabulary |
| `name` | `string` | No | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `string` | No | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `array` | No | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TranscriptionVocabulary()->create([
  "created_at" => null, // string
  "id" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TranscriptionVocabulary()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TranscriptionVocabulary()->load(["id" => "transcription_vocabulary_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TranscriptionVocabulary()->remove(["id" => "transcription_vocabulary_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TranscriptionVocabulary()->update([
  "id" => "transcription_vocabulary_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TranscriptionVocabularyEntity`

Create a new `TranscriptionVocabularyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TranslateAudioEntity

```php
$translate_audio = $client->TranslateAudio();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | No | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TranslateAudio()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TranslateAudio()->load(["id" => "translate_audio_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TranslateAudioEntity`

Create a new `TranslateAudioEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TranslateCaptionEntity

```php
$translate_caption = $client->TranslateCaption();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `array` | Yes | The directive run that dispatched this job. |
| `errors` | `array` | No | Error details. |
| `id` | `string` | Yes | Unique job identifier. |
| `outputs` | `array` | No | Workflow results. |
| `parameters` | `array` | Yes |  |
| `passthrough` | `string` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `array` | Yes | Related Mux resources linked to this job. |
| `status` | `string` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TranslateCaption()->create([
  "created_at" => null, // int
  "directive" => null, // array
  "id" => null, // string
  "parameters" => null, // array
  "resources" => null, // array
  "status" => null, // string
  "units_consumed" => null, // int
  "updated_at" => null, // int
  "workflow" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TranslateCaption()->load(["id" => "translate_caption_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TranslateCaptionEntity`

Create a new `TranslateCaptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UpdateAssetTrackEntity

```php
$update_asset_track = $client->UpdateAssetTrack();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_language_confidence` | `float` | No | The confidence value (0-1) of the determined language. |
| `closed_captions` | `bool` | No | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `duration` | `float` | No | The duration in seconds of the track media. |
| `id` | `string` | No | Unique identifier for the Track |
| `language_code` | `string` | No | The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'. |
| `max_channels` | `int` | No | The maximum number of audio channels the track supports. |
| `max_frame_rate` | `float` | No | The maximum frame rate available for the track. |
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

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UpdateAssetTrack()->update([
  "asset_id" => "asset_id",
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UpdateAssetTrackEntity`

Create a new `UpdateAssetTrackEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UploadEntity

```php
$upload = $client->Upload();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_id` | `string` | No | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `string` | Yes | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `array` | No | Only set if an error occurred during asset creation. |
| `id` | `string` | Yes | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Upload()->create([
  "cors_origin" => null, // string
  "id" => null, // string
  "status" => null, // string
  "timeout" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Upload()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Upload()->load(["id" => "upload_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Upload()->update([
  "id" => "upload_id",
  "upload_id" => "upload_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UploadEntity`

Create a new `UploadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UrlSigningKeyEntity

```php
$url_signing_key = $client->UrlSigningKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->UrlSigningKey()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UrlSigningKeyEntity`

Create a new `UrlSigningKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsageExportEntity

```php
$usage_export = $client->UsageExport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `download_url` | `string` | Yes | A pre-signed URL to download the CSV. |
| `download_url_expires_at` | `int` | Yes | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `file_size` | `int` | Yes | Uncompressed size of the CSV file in bytes. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UsageExport()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsageExportEntity`

Create a new `UsageExportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VideoViewEntity

```php
$video_view = $client->VideoView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country_code` | `string` | Yes |  |
| `data` | `array` | Yes |  |
| `error_type_id` | `int` | Yes |  |
| `id` | `string` | Yes |  |
| `playback_failure` | `bool` | Yes |  |
| `player_error_code` | `string` | Yes |  |
| `player_error_message` | `string` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `total_row_count` | `int` | Yes |  |
| `video_title` | `string` | Yes |  |
| `view_end` | `string` | Yes |  |
| `view_start` | `string` | Yes |  |
| `viewer_application_name` | `string` | Yes |  |
| `viewer_experience_score` | `float` | Yes |  |
| `viewer_os_family` | `string` | Yes |  |
| `watch_time` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->VideoView()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->VideoView()->load(["id" => "video_view_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VideoViewEntity`

Create a new `VideoViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEntity

```php
$webhook = $client->Webhook();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Webhook()->create([
  "address" => null, // string
  "created_at" => null, // string
  "enabled" => null, // bool
  "id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Webhook()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->load(["id" => "webhook_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->remove(["id" => "webhook_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Webhook()->update([
  "id" => "webhook_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEntity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WhoAmIEntity

```php
$who_am_i = $client->WhoAmI();
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
| `permissions` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WhoAmI()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WhoAmIEntity`

Create a new `WhoAmIEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new MuxSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

