# Mux Python SDK Reference

Complete API reference for the Mux Python SDK.


## MuxSDK

### Constructor

```python
from mux_sdk import MuxSDK

client = MuxSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MuxSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = MuxSDK.test()
```


### Instance Methods

#### `Annotation(data=None)`

Create a new `AnnotationEntity` instance. Pass `None` for no initial data.

#### `AskQuestion(data=None)`

Create a new `AskQuestionEntity` instance. Pass `None` for no initial data.

#### `Asset(data=None)`

Create a new `AssetEntity` instance. Pass `None` for no initial data.

#### `AssetOrLiveStreamId(data=None)`

Create a new `AssetOrLiveStreamIdEntity` instance. Pass `None` for no initial data.

#### `AssetPlaybackId(data=None)`

Create a new `AssetPlaybackIdEntity` instance. Pass `None` for no initial data.

#### `AssetShot(data=None)`

Create a new `AssetShotEntity` instance. Pass `None` for no initial data.

#### `CreatePlaybackId(data=None)`

Create a new `CreatePlaybackIdEntity` instance. Pass `None` for no initial data.

#### `CreateTrack(data=None)`

Create a new `CreateTrackEntity` instance. Pass `None` for no initial data.

#### `Directive(data=None)`

Create a new `DirectiveEntity` instance. Pass `None` for no initial data.

#### `DirectiveRunDetail(data=None)`

Create a new `DirectiveRunDetailEntity` instance. Pass `None` for no initial data.

#### `DirectiveRunList(data=None)`

Create a new `DirectiveRunListEntity` instance. Pass `None` for no initial data.

#### `DrmConfiguration(data=None)`

Create a new `DrmConfigurationEntity` instance. Pass `None` for no initial data.

#### `EditCaption(data=None)`

Create a new `EditCaptionEntity` instance. Pass `None` for no initial data.

#### `EngagementHeatmap(data=None)`

Create a new `EngagementHeatmapEntity` instance. Pass `None` for no initial data.

#### `EngagementHotspot(data=None)`

Create a new `EngagementHotspotEntity` instance. Pass `None` for no initial data.

#### `FindBestThumbnail(data=None)`

Create a new `FindBestThumbnailEntity` instance. Pass `None` for no initial data.

#### `FindKeyMoment(data=None)`

Create a new `FindKeyMomentEntity` instance. Pass `None` for no initial data.

#### `FindScene(data=None)`

Create a new `FindSceneEntity` instance. Pass `None` for no initial data.

#### `GenerateAssetShot(data=None)`

Create a new `GenerateAssetShotEntity` instance. Pass `None` for no initial data.

#### `GenerateChapter(data=None)`

Create a new `GenerateChapterEntity` instance. Pass `None` for no initial data.

#### `GenerateEngagementInsight(data=None)`

Create a new `GenerateEngagementInsightEntity` instance. Pass `None` for no initial data.

#### `GeneratePremiumCaption(data=None)`

Create a new `GeneratePremiumCaptionEntity` instance. Pass `None` for no initial data.

#### `GenerateTrackSubtitle(data=None)`

Create a new `GenerateTrackSubtitleEntity` instance. Pass `None` for no initial data.

#### `Incident(data=None)`

Create a new `IncidentEntity` instance. Pass `None` for no initial data.

#### `InputInfo(data=None)`

Create a new `InputInfoEntity` instance. Pass `None` for no initial data.

#### `JobSummary(data=None)`

Create a new `JobSummaryEntity` instance. Pass `None` for no initial data.

#### `ListAllMetricValue(data=None)`

Create a new `ListAllMetricValueEntity` instance. Pass `None` for no initial data.

#### `ListAnnotation(data=None)`

Create a new `ListAnnotationEntity` instance. Pass `None` for no initial data.

#### `ListAsset(data=None)`

Create a new `ListAssetEntity` instance. Pass `None` for no initial data.

#### `ListBreakdownValue(data=None)`

Create a new `ListBreakdownValueEntity` instance. Pass `None` for no initial data.

#### `ListDeliveryUsage(data=None)`

Create a new `ListDeliveryUsageEntity` instance. Pass `None` for no initial data.

#### `ListDimension(data=None)`

Create a new `ListDimensionEntity` instance. Pass `None` for no initial data.

#### `ListDimensionValue(data=None)`

Create a new `ListDimensionValueEntity` instance. Pass `None` for no initial data.

#### `ListDrmConfiguration(data=None)`

Create a new `ListDrmConfigurationEntity` instance. Pass `None` for no initial data.

#### `ListError(data=None)`

Create a new `ListErrorEntity` instance. Pass `None` for no initial data.

#### `ListExport(data=None)`

Create a new `ListExportEntity` instance. Pass `None` for no initial data.

#### `ListFilter(data=None)`

Create a new `ListFilterEntity` instance. Pass `None` for no initial data.

#### `ListFilterValue(data=None)`

Create a new `ListFilterValueEntity` instance. Pass `None` for no initial data.

#### `ListIncident(data=None)`

Create a new `ListIncidentEntity` instance. Pass `None` for no initial data.

#### `ListInsight(data=None)`

Create a new `ListInsightEntity` instance. Pass `None` for no initial data.

#### `ListJob(data=None)`

Create a new `ListJobEntity` instance. Pass `None` for no initial data.

#### `ListLiveStream(data=None)`

Create a new `ListLiveStreamEntity` instance. Pass `None` for no initial data.

#### `ListMonitoringDimension(data=None)`

Create a new `ListMonitoringDimensionEntity` instance. Pass `None` for no initial data.

#### `ListMonitoringMetric(data=None)`

Create a new `ListMonitoringMetricEntity` instance. Pass `None` for no initial data.

#### `ListPlaybackRestriction(data=None)`

Create a new `ListPlaybackRestrictionEntity` instance. Pass `None` for no initial data.

#### `ListRealTimeDimension(data=None)`

Create a new `ListRealTimeDimensionEntity` instance. Pass `None` for no initial data.

#### `ListRealTimeMetric(data=None)`

Create a new `ListRealTimeMetricEntity` instance. Pass `None` for no initial data.

#### `ListRelatedIncident(data=None)`

Create a new `ListRelatedIncidentEntity` instance. Pass `None` for no initial data.

#### `ListSigningKey(data=None)`

Create a new `ListSigningKeyEntity` instance. Pass `None` for no initial data.

#### `ListSubviewBreakdownValue(data=None)`

Create a new `ListSubviewBreakdownValueEntity` instance. Pass `None` for no initial data.

#### `ListSubviewComparisonValue(data=None)`

Create a new `ListSubviewComparisonValueEntity` instance. Pass `None` for no initial data.

#### `ListSubviewDimension(data=None)`

Create a new `ListSubviewDimensionEntity` instance. Pass `None` for no initial data.

#### `ListSubviewDimensionValue(data=None)`

Create a new `ListSubviewDimensionValueEntity` instance. Pass `None` for no initial data.

#### `ListTranscriptionVocabulary(data=None)`

Create a new `ListTranscriptionVocabularyEntity` instance. Pass `None` for no initial data.

#### `ListUpload(data=None)`

Create a new `ListUploadEntity` instance. Pass `None` for no initial data.

#### `ListUsageExport(data=None)`

Create a new `ListUsageExportEntity` instance. Pass `None` for no initial data.

#### `ListVideoView(data=None)`

Create a new `ListVideoViewEntity` instance. Pass `None` for no initial data.

#### `ListVideoViewExport(data=None)`

Create a new `ListVideoViewExportEntity` instance. Pass `None` for no initial data.

#### `ListWebhook(data=None)`

Create a new `ListWebhookEntity` instance. Pass `None` for no initial data.

#### `LiveStream(data=None)`

Create a new `LiveStreamEntity` instance. Pass `None` for no initial data.

#### `LiveStreamPlaybackId(data=None)`

Create a new `LiveStreamPlaybackIdEntity` instance. Pass `None` for no initial data.

#### `MetricTimeseriesData(data=None)`

Create a new `MetricTimeseriesDataEntity` instance. Pass `None` for no initial data.

#### `Moderate(data=None)`

Create a new `ModerateEntity` instance. Pass `None` for no initial data.

#### `MonitoringBreakdown(data=None)`

Create a new `MonitoringBreakdownEntity` instance. Pass `None` for no initial data.

#### `MonitoringBreakdownTimeseries(data=None)`

Create a new `MonitoringBreakdownTimeseriesEntity` instance. Pass `None` for no initial data.

#### `MonitoringHistogramTimeseries(data=None)`

Create a new `MonitoringHistogramTimeseriesEntity` instance. Pass `None` for no initial data.

#### `MonitoringTimeseries(data=None)`

Create a new `MonitoringTimeseriesEntity` instance. Pass `None` for no initial data.

#### `Overall(data=None)`

Create a new `OverallEntity` instance. Pass `None` for no initial data.

#### `PlaybackRestriction(data=None)`

Create a new `PlaybackRestrictionEntity` instance. Pass `None` for no initial data.

#### `RealTimeBreakdown(data=None)`

Create a new `RealTimeBreakdownEntity` instance. Pass `None` for no initial data.

#### `RealTimeHistogramTimeseries(data=None)`

Create a new `RealTimeHistogramTimeseriesEntity` instance. Pass `None` for no initial data.

#### `RealTimeTimeseries(data=None)`

Create a new `RealTimeTimeseriesEntity` instance. Pass `None` for no initial data.

#### `SignalLiveStreamComplete(data=None)`

Create a new `SignalLiveStreamCompleteEntity` instance. Pass `None` for no initial data.

#### `SigningKey(data=None)`

Create a new `SigningKeyEntity` instance. Pass `None` for no initial data.

#### `SimulcastTarget(data=None)`

Create a new `SimulcastTargetEntity` instance. Pass `None` for no initial data.

#### `StaticRendition(data=None)`

Create a new `StaticRenditionEntity` instance. Pass `None` for no initial data.

#### `SubviewBreakdownTimeseries(data=None)`

Create a new `SubviewBreakdownTimeseriesEntity` instance. Pass `None` for no initial data.

#### `SubviewOverallValue(data=None)`

Create a new `SubviewOverallValueEntity` instance. Pass `None` for no initial data.

#### `Summarize(data=None)`

Create a new `SummarizeEntity` instance. Pass `None` for no initial data.

#### `TranscriptionVocabulary(data=None)`

Create a new `TranscriptionVocabularyEntity` instance. Pass `None` for no initial data.

#### `TranslateAudio(data=None)`

Create a new `TranslateAudioEntity` instance. Pass `None` for no initial data.

#### `TranslateCaption(data=None)`

Create a new `TranslateCaptionEntity` instance. Pass `None` for no initial data.

#### `UpdateAssetTrack(data=None)`

Create a new `UpdateAssetTrackEntity` instance. Pass `None` for no initial data.

#### `Upload(data=None)`

Create a new `UploadEntity` instance. Pass `None` for no initial data.

#### `UrlSigningKey(data=None)`

Create a new `UrlSigningKeyEntity` instance. Pass `None` for no initial data.

#### `VideoView(data=None)`

Create a new `VideoViewEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `WhoAmI(data=None)`

Create a new `WhoAmIEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AnnotationEntity

```python
annotation = client.Annotation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | Yes | Datetime when the annotation applies |
| `id` | `str` | Yes | Unique identifier for the annotation |
| `note` | `str` | Yes | The annotation note content |
| `sub_property_id` | `str` | No | Customer-defined sub-property identifier |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Annotation().create({
    "date": "example_date",  # str
    "id": "example_id",  # str
    "note": "example_note",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Annotation().load({"id": "annotation_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Annotation().remove({"id": "annotation_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Annotation().update({
    "id": "annotation_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnnotationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AskQuestionEntity

```python
ask_question = client.AskQuestion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | Yes | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AskQuestion().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "outputs": {},  # dict
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AskQuestion().load({"id": "ask_question_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AskQuestionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AssetEntity

```python
asset = client.Asset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `str` | No | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `str` | Yes | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `data` | `dict` | No |  |
| `directives` | `list` | No | The Mux Robots directives applied to the asset. |
| `duration` | `float` | No | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `str` | Yes | This field is deprecated. |
| `errors` | `dict` | No | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `bool` | No | Whether to perform shot detection on this asset. |
| `id` | `str` | Yes | Unique identifier for the Asset. |
| `ingest_type` | `str` | No | The type of ingest used to create the asset. |
| `is_live` | `bool` | No | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `str` | No | Unique identifier for the live stream. |
| `master` | `dict` | No | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `str` | Yes |  |
| `max_resolution_tier` | `str` | Yes | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `float` | No | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `str` | No | This field is deprecated. |
| `meta` | `dict` | No | Customer provided metadata about this asset. |
| `mp4_support` | `str` | No | Deprecated. |
| `non_standard_input_reasons` | `dict` | No | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `bool` | No | Normalize the audio track loudness level. |
| `passthrough` | `str` | No | You can set this field to anything you want. |
| `playback_ids` | `list` | No | An array of Playback ID objects. |
| `progress` | `dict` | Yes | Detailed state information about the asset ingest process. |
| `recording_times` | `list` | No | An array of individual live stream recording sessions. |
| `resolution_tier` | `str` | No | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `dict` | Yes | The results of generating shots on the video |
| `source_asset_id` | `str` | No | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `dict` | No | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `str` | Yes | The status of the asset. |
| `test` | `bool` | No | True means this live stream is a test asset. |
| `thumbnail_time` | `float` | No | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `list` | No | The individual media tracks that make up an asset. |
| `upload_id` | `str` | No | Unique identifier for the Direct Upload. |
| `video_quality` | `str` | No | The video quality controls the cost, quality, and available platform features for the asset. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Asset().create({
    "created_at": "example_created_at",  # str
    "encoding_tier": "example_encoding_tier",  # str
    "id": "example_id",  # str
    "master_access": "example_master_access",  # str
    "max_resolution_tier": "example_max_resolution_tier",  # str
    "progress": {},  # dict
    "shots": {},  # dict
    "status": "example_status",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Asset().load({"id": "asset_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Asset().remove({"id": "asset_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Asset().update({
    "id": "asset_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AssetOrLiveStreamIdEntity

```python
asset_or_live_stream_id = client.AssetOrLiveStreamId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | `dict` | Yes | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | `str` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AssetOrLiveStreamId().load({"playback_id": "playback_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssetOrLiveStreamIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AssetPlaybackIdEntity

```python
asset_playback_id = client.AssetPlaybackId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `str` | No | The DRM configuration used by this playback ID. |
| `id` | `str` | Yes | Unique identifier for the PlaybackID |
| `policy` | `str` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AssetPlaybackId().load({"id": "asset_playback_id_id", "asset_id": "asset_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssetPlaybackIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AssetShotEntity

```python
asset_shot = client.AssetShot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `dict` | No | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | `str` | No | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | `str` | Yes | The status of the shot detection process |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AssetShot().load({"asset_id": "asset_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssetShotEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreatePlaybackIdEntity

```python
create_playback_id = client.CreatePlaybackId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `str` | No | The DRM configuration used by this playback ID. |
| `policy` | `str` | No | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreatePlaybackId().create({
    "asset_id": "example_asset_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreatePlaybackIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateTrackEntity

```python
create_track = client.CreateTrack()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_captions` | `bool` | No | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `language_code` | `str` | Yes | The language code of this track. |
| `name` | `str` | No | The name of the track containing a human-readable description. |
| `passthrough` | `str` | No | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `text_type` | `str` | No |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes | The URL of the file that Mux should download and use. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateTrack().create({
    "asset_id": "example_asset_id",  # str
    "language_code": "example_language_code",  # str
    "type": "example_type",  # str
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateTrackEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DirectiveEntity

```python
directive = client.Directive()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the directive was created. |
| `id` | `str` | Yes | Stable directive identifier (drv_...). |
| `name` | `str` | Yes | Human-readable directive name. |
| `resources` | `list` | Yes | Resource declarations. |
| `subject` | `dict` | Yes |  |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) when the directive was last updated. |
| `workflows` | `list` | Yes | Workflow bindings. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Directive().create({
    "created_at": 1,  # int
    "id": "example_id",  # str
    "name": "example_name",  # str
    "resources": [],  # list
    "subject": {},  # dict
    "updated_at": 1,  # int
    "workflows": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Directive().list()
for directive in results:
    print(directive)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Directive().load({"id": "directive_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Directive().remove({"id": "directive_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DirectiveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DirectiveRunDetailEntity

```python
directive_run_detail = client.DirectiveRunDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `int | None` | Yes | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `list` | Yes | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `str` | Yes | Unique run identifier (drvrun_...). |
| `started_at` | `int` | Yes | Unix timestamp (seconds) when the run started. |
| `status` | `str` | Yes | Current run status. |
| `subject_id` | `str` | Yes | The bare Mux asset ID this run targeted. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DirectiveRunDetail().load({"directive_id": "directive_id", "run_id": "run_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DirectiveRunDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DirectiveRunListEntity

```python
directive_run_list = client.DirectiveRunList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `int | None` | Yes | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `list` | Yes | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `str` | Yes | Unique run identifier (drvrun_...). |
| `started_at` | `int` | Yes | Unix timestamp (seconds) when the run started. |
| `status` | `str` | Yes | Current run status. |
| `subject_id` | `str` | Yes | The bare Mux asset ID this run targeted. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DirectiveRunList().list({"directive_id": "example"})
for directive_run_list in results:
    print(directive_run_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DirectiveRunListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DrmConfigurationEntity

```python
drm_configuration = client.DrmConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Unique identifier for the DRM Configuration. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DrmConfiguration().load({"id": "drm_configuration_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DrmConfigurationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EditCaptionEntity

```python
edit_caption = client.EditCaption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | Yes | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EditCaption().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "outputs": {},  # dict
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EditCaption().load({"id": "edit_caption_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EditCaptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EngagementHeatmapEntity

```python
engagement_heatmap = client.EngagementHeatmap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EngagementHeatmap().list({"asset_id": "example"})
for engagement_heatmap in results:
    print(engagement_heatmap)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EngagementHeatmapEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EngagementHotspotEntity

```python
engagement_hotspot = client.EngagementHotspot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EngagementHotspot().list({"asset_id": "example"})
for engagement_hotspot in results:
    print(engagement_hotspot)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EngagementHotspotEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FindBestThumbnailEntity

```python
find_best_thumbnail = client.FindBestThumbnail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | Yes | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FindBestThumbnail().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "outputs": {},  # dict
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FindBestThumbnail().load({"id": "find_best_thumbnail_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FindBestThumbnailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FindKeyMomentEntity

```python
find_key_moment = client.FindKeyMoment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | Yes | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FindKeyMoment().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "outputs": {},  # dict
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FindKeyMoment().load({"id": "find_key_moment_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FindKeyMomentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FindSceneEntity

```python
find_scene = client.FindScene()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | Yes | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FindScene().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "outputs": {},  # dict
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FindScene().load({"id": "find_scene_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FindSceneEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenerateAssetShotEntity

```python
generate_asset_shot = client.GenerateAssetShot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GenerateAssetShot().create({
    "asset_id": "example_asset_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateAssetShotEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenerateChapterEntity

```python
generate_chapter = client.GenerateChapter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | Yes | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GenerateChapter().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "outputs": {},  # dict
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GenerateChapter().load({"id": "generate_chapter_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateChapterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenerateEngagementInsightEntity

```python
generate_engagement_insight = client.GenerateEngagementInsight()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | Yes | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GenerateEngagementInsight().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "outputs": {},  # dict
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GenerateEngagementInsight().load({"id": "generate_engagement_insight_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateEngagementInsightEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GeneratePremiumCaptionEntity

```python
generate_premium_caption = client.GeneratePremiumCaption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | Yes | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GeneratePremiumCaption().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "outputs": {},  # dict
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GeneratePremiumCaption().load({"id": "generate_premium_caption_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeneratePremiumCaptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenerateTrackSubtitleEntity

```python
generate_track_subtitle = client.GenerateTrackSubtitle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generated_subtitles` | `list` | Yes | Generate subtitle tracks using automatic speech recognition with this configuration. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GenerateTrackSubtitle().create({
    "asset_id": "example_asset_id",  # str
    "track_id": "example_track_id",  # str
    "generated_subtitles": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateTrackSubtitleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentEntity

```python
incident = client.Incident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |
| `id` | `str` | No |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Incident().load({"id": "incident_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InputInfoEntity

```python
input_info = client.InputInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `dict` | No |  |
| `settings` | `dict` | No | An array of objects that each describe an input file to be used to create the asset. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.InputInfo().list({"asset_id": "example"})
for input_info in results:
    print(input_info)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InputInfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JobSummaryEntity

```python
job_summary = client.JobSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `id` | `str` | Yes | Unique job identifier. |
| `links` | `dict` | Yes | Hypermedia links for this job. |
| `status` | `str` | Yes | Current job status. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes | Workflow type that created this job. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.JobSummary().create({
    "job_id": "example_job_id",  # str
    "created_at": 1,  # int
    "id": "example_id",  # str
    "links": {},  # dict
    "status": "example_status",  # str
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListAllMetricValueEntity

```python
list_all_metric_value = client.ListAllMetricValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_views` | `int` | No |  |
| `items` | `list` | No |  |
| `metric` | `str` | No |  |
| `name` | `str` | Yes |  |
| `started_views` | `int` | No |  |
| `total_playing_time` | `int` | No |  |
| `type` | `str` | No |  |
| `unique_viewers` | `int` | No |  |
| `value` | `float` | No |  |
| `view_count` | `int` | No |  |
| `watch_time` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListAllMetricValue().list()
for list_all_metric_value in results:
    print(list_all_metric_value)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListAllMetricValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListAnnotationEntity

```python
list_annotation = client.ListAnnotation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | Yes | Datetime when the annotation applies |
| `id` | `str` | Yes | Unique identifier for the annotation |
| `note` | `str` | Yes | The annotation note content |
| `sub_property_id` | `str` | No | Customer-defined sub-property identifier |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListAnnotation().list()
for list_annotation in results:
    print(list_annotation)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListAnnotationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListAssetEntity

```python
list_asset = client.ListAsset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `str` | No | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `str` | Yes | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `directives` | `list` | No | The Mux Robots directives applied to the asset. |
| `duration` | `float` | No | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `str` | Yes | This field is deprecated. |
| `errors` | `dict` | No | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `bool` | No | Whether to perform shot detection on this asset. |
| `id` | `str` | Yes | Unique identifier for the Asset. |
| `ingest_type` | `str` | No | The type of ingest used to create the asset. |
| `is_live` | `bool` | No | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `str` | No | Unique identifier for the live stream. |
| `master` | `dict` | No | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `str` | Yes |  |
| `max_resolution_tier` | `str` | Yes | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `float` | No | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `str` | No | This field is deprecated. |
| `meta` | `dict` | No | Customer provided metadata about this asset. |
| `mp4_support` | `str` | No | Deprecated. |
| `non_standard_input_reasons` | `dict` | No | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `bool` | No | Normalize the audio track loudness level. |
| `passthrough` | `str` | No | You can set this field to anything you want. |
| `playback_ids` | `list` | No | An array of Playback ID objects. |
| `progress` | `dict` | Yes | Detailed state information about the asset ingest process. |
| `recording_times` | `list` | No | An array of individual live stream recording sessions. |
| `resolution_tier` | `str` | No | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `dict` | Yes | The results of generating shots on the video |
| `source_asset_id` | `str` | No | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `dict` | No | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `str` | Yes | The status of the asset. |
| `test` | `bool` | No | True means this live stream is a test asset. |
| `thumbnail_time` | `float` | No | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `list` | No | The individual media tracks that make up an asset. |
| `upload_id` | `str` | No | Unique identifier for the Direct Upload. |
| `video_quality` | `str` | No | The video quality controls the cost, quality, and available platform features for the asset. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListAsset().list()
for list_asset in results:
    print(list_asset)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListAssetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListBreakdownValueEntity

```python
list_breakdown_value = client.ListBreakdownValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field` | `str` | Yes |  |
| `negative_impact` | `int` | Yes |  |
| `total_playing_time` | `int` | Yes |  |
| `total_watch_time` | `int` | Yes |  |
| `value` | `float` | Yes |  |
| `views` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListBreakdownValue().list({"metric_id": "example"})
for list_breakdown_value in results:
    print(list_breakdown_value)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListBreakdownValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListDeliveryUsageEntity

```python
list_delivery_usage = client.ListDeliveryUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_duration` | `float` | Yes | The duration of the asset in seconds. |
| `asset_encoding_tier` | `str` | Yes | This field is deprecated. |
| `asset_id` | `str` | Yes | Unique identifier for the asset. |
| `asset_resolution_tier` | `str` | Yes | The resolution tier that the asset was ingested at, affecting billing for ingest & storage |
| `asset_state` | `str` | Yes | The state of the asset. |
| `asset_video_quality` | `str` | No | The video quality that the asset was ingested at. |
| `created_at` | `str` | Yes | Time at which the asset was created. |
| `deleted_at` | `str` | No | If exists, time at which the asset was deleted. |
| `delivered_seconds` | `float` | Yes | Total number of delivered seconds during this time window. |
| `delivered_seconds_by_resolution` | `dict` | Yes | Seconds delivered broken into resolution tiers. |
| `live_stream_id` | `str` | No | Unique identifier for the live stream that created the asset. |
| `passthrough` | `str` | No | The `passthrough` value for the asset. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListDeliveryUsage().list()
for list_delivery_usage in results:
    print(list_delivery_usage)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListDeliveryUsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListDimensionEntity

```python
list_dimension = client.ListDimension()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListDimension().list()
for list_dimension in results:
    print(list_dimension)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListDimensionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListDimensionValueEntity

```python
list_dimension_value = client.ListDimensionValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | Yes |  |
| `timeframe` | `list` | Yes |  |
| `total_count` | `int` | Yes |  |
| `total_row_count` | `int` | Yes |  |
| `value` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListDimensionValue().list({"dimension_id": "example"})
for list_dimension_value in results:
    print(list_dimension_value)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ListDimensionValue().load({"dimension_id": "dimension_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListDimensionValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListDrmConfigurationEntity

```python
list_drm_configuration = client.ListDrmConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Unique identifier for the DRM Configuration. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListDrmConfiguration().list()
for list_drm_configuration in results:
    print(list_drm_configuration)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListDrmConfigurationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListErrorEntity

```python
list_error = client.ListError()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `int` | Yes | The error code |
| `count` | `int` | Yes | The total number of views that experienced this error. |
| `description` | `str` | Yes | Description of the error. |
| `id` | `int` | Yes | A unique identifier for this error. |
| `last_seen` | `str` | Yes | The last time this error was seen (ISO 8601 timestamp). |
| `message` | `str` | Yes | The error message. |
| `notes` | `str` | Yes | Notes that are attached to this error. |
| `percentage` | `float` | Yes | The percentage of views that experienced this error. |
| `player_error_code` | `str` | Yes | The string version of the error code |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListError().list()
for list_error in results:
    print(list_error)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListErrorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListExportEntity

```python
list_export = client.ListExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | Yes |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListExport().list()
for list_export in results:
    print(list_export)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListExportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListFilterEntity

```python
list_filter = client.ListFilter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListFilter().list()
for list_filter in results:
    print(list_filter)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListFilterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListFilterValueEntity

```python
list_filter_value = client.ListFilterValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | Yes |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ListFilterValue().load({"filter_id": "filter_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListFilterValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListIncidentEntity

```python
list_incident = client.ListIncident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `int` | Yes |  |
| `affected_views_per_hour` | `int` | Yes |  |
| `affected_views_per_hour_on_open` | `int` | Yes |  |
| `breakdowns` | `list` | Yes |  |
| `description` | `str` | Yes |  |
| `error_description` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `impact` | `str` | Yes |  |
| `incident_key` | `str` | Yes |  |
| `measured_value` | `float` | Yes |  |
| `measured_value_on_close` | `float` | Yes |  |
| `measurement` | `str` | Yes |  |
| `notification_rules` | `list` | Yes |  |
| `notifications` | `list` | Yes |  |
| `resolved_at` | `str` | Yes |  |
| `sample_size` | `int` | Yes |  |
| `sample_size_unit` | `str` | Yes |  |
| `severity` | `str` | Yes |  |
| `started_at` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `threshold` | `float` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListIncident().list()
for list_incident in results:
    print(list_incident)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListIncidentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListInsightEntity

```python
list_insight = client.ListInsight()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `filter_column` | `str` | Yes |  |
| `filter_value` | `str` | Yes |  |
| `metric` | `float` | Yes |  |
| `negative_impact_score` | `float` | Yes |  |
| `total_playing_time` | `int` | Yes |  |
| `total_views` | `int` | Yes |  |
| `total_watch_time` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListInsight().list({"metric_id": "example"})
for list_insight in results:
    print(list_insight)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListInsightEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListJobEntity

```python
list_job = client.ListJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `id` | `str` | Yes | Unique job identifier. |
| `links` | `dict` | Yes | Hypermedia links for this job. |
| `status` | `str` | Yes | Current job status. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes | Workflow type that created this job. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListJob().list()
for list_job in results:
    print(list_job)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListJobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListLiveStreamEntity

```python
list_live_stream = client.ListLiveStream()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_asset_id` | `str` | No | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `str` | No | The protocol used for the active ingest stream. |
| `audio_only` | `bool` | No | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `str` | Yes | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `list` | No | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `list` | No | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `str` | Yes | Unique identifier for the Live Stream. |
| `latency_mode` | `str` | Yes | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `bool` | No | This field is deprecated. |
| `max_continuous_duration` | `int` | Yes | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `dict` | No | Customer provided metadata about this live stream. |
| `new_asset_settings` | `dict` | No |  |
| `passthrough` | `str` | No | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `list` | No | An array of Playback ID objects. |
| `recent_asset_ids` | `list` | No | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `str` | No | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `float` | No | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `bool` | No | This field is deprecated. |
| `simulcast_targets` | `list` | No | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | `str` | No | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `str` | Yes | `idle` indicates that there is no active broadcast. |
| `stream_key` | `str` | Yes | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | `bool` | No | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | `bool` | No | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListLiveStream().list()
for list_live_stream in results:
    print(list_live_stream)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListLiveStreamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListMonitoringDimensionEntity

```python
list_monitoring_dimension = client.ListMonitoringDimension()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `str` | Yes |  |
| `name` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListMonitoringDimension().list()
for list_monitoring_dimension in results:
    print(list_monitoring_dimension)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListMonitoringDimensionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListMonitoringMetricEntity

```python
list_monitoring_metric = client.ListMonitoringMetric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `str` | Yes |  |
| `name` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListMonitoringMetric().list()
for list_monitoring_metric in results:
    print(list_monitoring_metric)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListMonitoringMetricEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListPlaybackRestrictionEntity

```python
list_playback_restriction = client.ListPlaybackRestriction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `str` | Yes | Unique identifier for the Playback Restriction. |
| `referrer` | `dict` | Yes | A list of domains allowed to play your videos. |
| `updated_at` | `str` | Yes | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `dict` | Yes | Rules that control what user agents are allowed to play your videos. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListPlaybackRestriction().list()
for list_playback_restriction in results:
    print(list_playback_restriction)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListPlaybackRestrictionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListRealTimeDimensionEntity

```python
list_real_time_dimension = client.ListRealTimeDimension()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `str` | Yes |  |
| `name` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListRealTimeDimension().list()
for list_real_time_dimension in results:
    print(list_real_time_dimension)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListRealTimeDimensionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListRealTimeMetricEntity

```python
list_real_time_metric = client.ListRealTimeMetric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `str` | Yes |  |
| `name` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListRealTimeMetric().list()
for list_real_time_metric in results:
    print(list_real_time_metric)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListRealTimeMetricEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListRelatedIncidentEntity

```python
list_related_incident = client.ListRelatedIncident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_views` | `int` | Yes |  |
| `affected_views_per_hour` | `int` | Yes |  |
| `affected_views_per_hour_on_open` | `int` | Yes |  |
| `breakdowns` | `list` | Yes |  |
| `description` | `str` | Yes |  |
| `error_description` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `impact` | `str` | Yes |  |
| `incident_key` | `str` | Yes |  |
| `measured_value` | `float` | Yes |  |
| `measured_value_on_close` | `float` | Yes |  |
| `measurement` | `str` | Yes |  |
| `notification_rules` | `list` | Yes |  |
| `notifications` | `list` | Yes |  |
| `resolved_at` | `str` | Yes |  |
| `sample_size` | `int` | Yes |  |
| `sample_size_unit` | `str` | Yes |  |
| `severity` | `str` | Yes |  |
| `started_at` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `threshold` | `float` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListRelatedIncident().list({"incident_id": "example"})
for list_related_incident in results:
    print(list_related_incident)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListRelatedIncidentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListSigningKeyEntity

```python
list_signing_key = client.ListSigningKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | Time at which the object was created. |
| `id` | `str` | Yes | Unique identifier for the Signing Key. |
| `private_key` | `str` | No | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListSigningKey().list()
for list_signing_key in results:
    print(list_signing_key)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSigningKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListSubviewBreakdownValueEntity

```python
list_subview_breakdown_value = client.ListSubviewBreakdownValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakdown_value` | `str` | Yes |  |
| `metric_value` | `float` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListSubviewBreakdownValue().list({"subview_metric_id": "example", "subview_type": "example"})
for list_subview_breakdown_value in results:
    print(list_subview_breakdown_value)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSubviewBreakdownValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListSubviewComparisonValueEntity

```python
list_subview_comparison_value = client.ListSubviewComparisonValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dimension_value` | `str` | Yes |  |
| `values` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListSubviewComparisonValue().list({"subview_metric_id": "example", "subview_type": "example", "dimension": "example", "value": []})
for list_subview_comparison_value in results:
    print(list_subview_comparison_value)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSubviewComparisonValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListSubviewDimensionEntity

```python
list_subview_dimension = client.ListSubviewDimension()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subview` | `list` | Yes |  |
| `view` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ListSubviewDimension().load({"subview_type": "subview_type"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSubviewDimensionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListSubviewDimensionValueEntity

```python
list_subview_dimension_value = client.ListSubviewDimensionValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | Yes |  |
| `meta` | `Any` | Yes |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ListSubviewDimensionValue().load({"dimension_name": "dimension_name", "subview_metric_id": "subview_metric_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSubviewDimensionValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListTranscriptionVocabularyEntity

```python
list_transcription_vocabulary = client.ListTranscriptionVocabulary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `str` | Yes | Unique identifier for the Transcription Vocabulary |
| `name` | `str` | No | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `str` | No | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `list` | No | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `updated_at` | `str` | Yes | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListTranscriptionVocabulary().list()
for list_transcription_vocabulary in results:
    print(list_transcription_vocabulary)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListTranscriptionVocabularyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListUploadEntity

```python
list_upload = client.ListUpload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_id` | `str` | No | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `str` | Yes | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `dict` | No | Only set if an error occurred during asset creation. |
| `id` | `str` | Yes | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `dict` | No |  |
| `status` | `str` | Yes |  |
| `test` | `bool` | No | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | `int` | Yes | Max time in seconds for the signed upload URL to be valid. |
| `url` | `str` | No | The URL to upload the associated source media to. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListUpload().list()
for list_upload in results:
    print(list_upload)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListUploadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListUsageExportEntity

```python
list_usage_export = client.ListUsageExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | Yes | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `download_url` | `str` | Yes | A pre-signed URL to download the CSV. |
| `download_url_expires_at` | `int` | Yes | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `file_size` | `int` | Yes | Uncompressed size of the CSV file in bytes. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListUsageExport().list()
for list_usage_export in results:
    print(list_usage_export)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListUsageExportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListVideoViewEntity

```python
list_video_view = client.ListVideoView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country_code` | `str` | Yes |  |
| `error_type_id` | `int` | Yes |  |
| `id` | `str` | Yes |  |
| `playback_failure` | `bool` | Yes |  |
| `player_error_code` | `str` | Yes |  |
| `player_error_message` | `str` | Yes |  |
| `total_row_count` | `int` | Yes |  |
| `video_title` | `str` | Yes |  |
| `view_end` | `str` | Yes |  |
| `view_start` | `str` | Yes |  |
| `viewer_application_name` | `str` | Yes |  |
| `viewer_experience_score` | `float` | Yes |  |
| `viewer_os_family` | `str` | Yes |  |
| `watch_time` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListVideoView().list()
for list_video_view in results:
    print(list_video_view)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListVideoViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListVideoViewExportEntity

```python
list_video_view_export = client.ListVideoViewExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `export_date` | `str` | Yes |  |
| `files` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListVideoViewExport().list()
for list_video_view_export in results:
    print(list_video_view_export)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListVideoViewExportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListWebhookEntity

```python
list_webhook = client.ListWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | Yes | The URL where Mux sends webhook notifications. |
| `created_at` | `str` | Yes | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | `bool` | Yes | Whether Mux attempts to deliver notifications to this webhook. |
| `id` | `str` | Yes | Unique identifier for the webhook. |
| `signing_secret` | `str` | No | Secret used to verify that webhook payloads were sent by Mux. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListWebhook().list()
for list_webhook in results:
    print(list_webhook)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListWebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LiveStreamEntity

```python
live_stream = client.LiveStream()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_asset_id` | `str` | No | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `str` | No | The protocol used for the active ingest stream. |
| `advanced_playback_policies` | `list` | No | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `audio_only` | `bool` | No | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `str` | Yes | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `list` | No | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `list` | No | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `str` | Yes | Unique identifier for the Live Stream. |
| `latency_mode` | `str` | Yes | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `bool` | No | This field is deprecated. |
| `max_continuous_duration` | `int` | Yes | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `dict` | No | Customer provided metadata about this live stream. |
| `new_asset_settings` | `dict` | No | Updates the new asset settings to use to generate a new asset for this live stream. |
| `passthrough` | `str` | No | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `list` | No | An array of Playback ID objects. |
| `playback_policies` | `list` | No | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `playback_policy` | `list` | No | Deprecated. |
| `recent_asset_ids` | `list` | No | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `str` | No | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `float` | No | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `bool` | No | This field is deprecated. |
| `simulcast_targets` | `list` | No | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | `str` | No | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `str` | Yes | `idle` indicates that there is no active broadcast. |
| `stream_key` | `str` | Yes | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | `bool` | No | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | `bool` | No | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LiveStream().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "latency_mode": "example_latency_mode",  # str
    "max_continuous_duration": 1,  # int
    "status": "example_status",  # str
    "stream_key": "example_stream_key",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LiveStream().load({"id": "live_stream_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.LiveStream().remove({"id": "live_stream_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.LiveStream().update({
    "id": "live_stream_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LiveStreamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LiveStreamPlaybackIdEntity

```python
live_stream_playback_id = client.LiveStreamPlaybackId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drm_configuration_id` | `str` | No | The DRM configuration used by this playback ID. |
| `id` | `str` | Yes | Unique identifier for the PlaybackID |
| `policy` | `str` | Yes | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LiveStreamPlaybackId().load({"id": "live_stream_playback_id_id", "live_stream_id": "live_stream_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LiveStreamPlaybackIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MetricTimeseriesDataEntity

```python
metric_timeseries_data = client.MetricTimeseriesData()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | Yes |  |
| `meta` | `dict` | Yes |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MetricTimeseriesData().list({"metric_id": "example"})
for metric_timeseries_data in results:
    print(metric_timeseries_data)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetricTimeseriesDataEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ModerateEntity

```python
moderate = client.Moderate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | Yes | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Moderate().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "outputs": {},  # dict
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Moderate().load({"id": "moderate_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ModerateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MonitoringBreakdownEntity

```python
monitoring_breakdown = client.MonitoringBreakdown()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `display_value` | `str` | No |  |
| `metric_value` | `float` | Yes |  |
| `negative_impact` | `int` | Yes |  |
| `starting_up_viewers` | `int` | Yes |  |
| `value` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MonitoringBreakdown().list({"monitoring_metric_id": "example"})
for monitoring_breakdown in results:
    print(monitoring_breakdown)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonitoringBreakdownEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MonitoringBreakdownTimeseriesEntity

```python
monitoring_breakdown_timeseries = client.MonitoringBreakdownTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | Yes |  |
| `values` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MonitoringBreakdownTimeseries().list({"monitoring_metric_id": "example"})
for monitoring_breakdown_timeseries in results:
    print(monitoring_breakdown_timeseries)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonitoringBreakdownTimeseriesEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MonitoringHistogramTimeseriesEntity

```python
monitoring_histogram_timeseries = client.MonitoringHistogramTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `float` | Yes |  |
| `bucket_values` | `list` | Yes |  |
| `max_percentage` | `float` | Yes |  |
| `median` | `float` | Yes |  |
| `p95` | `float` | Yes |  |
| `sum` | `int` | Yes |  |
| `timestamp` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MonitoringHistogramTimeseries().list({"monitoring_histogram_metric_id": "example"})
for monitoring_histogram_timeseries in results:
    print(monitoring_histogram_timeseries)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonitoringHistogramTimeseriesEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MonitoringTimeseriesEntity

```python
monitoring_timeseries = client.MonitoringTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `date` | `str` | Yes |  |
| `value` | `float` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MonitoringTimeseries().list({"monitoring_metric_id": "example"})
for monitoring_timeseries in results:
    print(monitoring_timeseries)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonitoringTimeseriesEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OverallEntity

```python
overall = client.Overall()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |
| `meta` | `dict` | Yes |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Overall().list({"metric_id": "example"})
for overall in results:
    print(overall)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OverallEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PlaybackRestrictionEntity

```python
playback_restriction = client.PlaybackRestriction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `str` | Yes | Unique identifier for the Playback Restriction. |
| `referrer` | `dict` | Yes | A list of domains allowed to play your videos. |
| `updated_at` | `str` | Yes | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `dict` | Yes | Rules that control what user agents are allowed to play your videos. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PlaybackRestriction().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "referrer": {},  # dict
    "updated_at": "example_updated_at",  # str
    "user_agent": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PlaybackRestriction().load({"id": "playback_restriction_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PlaybackRestriction().remove({"id": "playback_restriction_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PlaybackRestriction().update({
    "id": "playback_restriction_id",
    "playback_restriction_id": "playback_restriction_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PlaybackRestrictionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RealTimeBreakdownEntity

```python
real_time_breakdown = client.RealTimeBreakdown()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `display_value` | `str` | No |  |
| `metric_value` | `float` | Yes |  |
| `negative_impact` | `int` | Yes |  |
| `starting_up_viewers` | `int` | Yes |  |
| `value` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RealTimeBreakdown().list({"realtime_metric_id": "example"})
for real_time_breakdown in results:
    print(real_time_breakdown)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RealTimeBreakdownEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RealTimeHistogramTimeseriesEntity

```python
real_time_histogram_timeseries = client.RealTimeHistogramTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average` | `float` | Yes |  |
| `bucket_values` | `list` | Yes |  |
| `max_percentage` | `float` | Yes |  |
| `median` | `float` | Yes |  |
| `p95` | `float` | Yes |  |
| `sum` | `int` | Yes |  |
| `timestamp` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RealTimeHistogramTimeseries().list({"realtime_histogram_metric_id": "example"})
for real_time_histogram_timeseries in results:
    print(real_time_histogram_timeseries)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RealTimeHistogramTimeseriesEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RealTimeTimeseriesEntity

```python
real_time_timeseries = client.RealTimeTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `concurrent_viewers` | `int` | Yes |  |
| `date` | `str` | Yes |  |
| `value` | `float` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RealTimeTimeseries().list({"realtime_metric_id": "example"})
for real_time_timeseries in results:
    print(real_time_timeseries)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RealTimeTimeseriesEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SignalLiveStreamCompleteEntity

```python
signal_live_stream_complete = client.SignalLiveStreamComplete()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SignalLiveStreamComplete().update({
    "live_stream_id": "live_stream_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SignalLiveStreamCompleteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SigningKeyEntity

```python
signing_key = client.SigningKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | Time at which the object was created. |
| `data` | `dict` | No |  |
| `id` | `str` | Yes | Unique identifier for the Signing Key. |
| `private_key` | `str` | No | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SigningKey().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SigningKey().load({"id": "signing_key_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SigningKey().remove({"id": "signing_key_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SigningKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SimulcastTargetEntity

```python
simulcast_target = client.SimulcastTarget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error_severity` | `str` | No | The severity of the error encountered by the simulcast target. |
| `id` | `str` | Yes | ID of the Simulcast Target |
| `passthrough` | `str` | No | Arbitrary user-supplied metadata set when creating a simulcast target. |
| `status` | `str` | Yes | The current status of the simulcast target. |
| `stream_key` | `str` | No | Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. |
| `url` | `str` | Yes | The RTMP(s) or SRT endpoint for a simulcast destination. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SimulcastTarget().create({
    "live_stream_id": "example_live_stream_id",  # str
    "id": "example_id",  # str
    "status": "example_status",  # str
    "url": "example_url",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SimulcastTarget().load({"id": "simulcast_target_id", "live_stream_id": "live_stream_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimulcastTargetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StaticRenditionEntity

```python
static_rendition = client.StaticRendition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `passthrough` | `str` | No | Arbitrary user-supplied metadata set for the static rendition. |
| `resolution` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.StaticRendition().create({
    "asset_id": "example_asset_id",  # str
    "resolution": "example_resolution",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StaticRenditionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubviewBreakdownTimeseriesEntity

```python
subview_breakdown_timeseries = client.SubviewBreakdownTimeseries()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `values` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubviewBreakdownTimeseries().list({"subview_metric_id": "example", "subview_type": "example"})
for subview_breakdown_timeseries in results:
    print(subview_breakdown_timeseries)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubviewBreakdownTimeseriesEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubviewOverallValueEntity

```python
subview_overall_value = client.SubviewOverallValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |
| `meta` | `dict` | Yes |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes | Always `null` for this endpoint — a single aggregate value has no row count. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubviewOverallValue().list({"subview_metric_id": "example", "subview_type": "example"})
for subview_overall_value in results:
    print(subview_overall_value)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubviewOverallValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SummarizeEntity

```python
summarize = client.Summarize()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | Yes | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Summarize().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "outputs": {},  # dict
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Summarize().load({"id": "summarize_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SummarizeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TranscriptionVocabularyEntity

```python
transcription_vocabulary = client.TranscriptionVocabulary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `str` | Yes | Unique identifier for the Transcription Vocabulary |
| `name` | `str` | No | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `str` | No | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `list` | No | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `updated_at` | `str` | Yes | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TranscriptionVocabulary().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TranscriptionVocabulary().load({"id": "transcription_vocabulary_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TranscriptionVocabulary().remove({"id": "transcription_vocabulary_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TranscriptionVocabulary().update({
    "id": "transcription_vocabulary_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranscriptionVocabularyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TranslateAudioEntity

```python
translate_audio = client.TranslateAudio()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | No | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TranslateAudio().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TranslateAudio().load({"id": "translate_audio_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranslateAudioEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TranslateCaptionEntity

```python
translate_caption = client.TranslateCaption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | Yes | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | Yes | The directive run that dispatched this job. |
| `errors` | `list` | No | Error details. |
| `id` | `str` | Yes | Unique job identifier. |
| `outputs` | `dict` | No | Workflow results. |
| `parameters` | `dict` | Yes |  |
| `passthrough` | `str` | No | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Yes | Related Mux resources linked to this job. |
| `status` | `str` | Yes | Current job status. |
| `units_consumed` | `int` | Yes | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Yes | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TranslateCaption().create({
    "created_at": 1,  # int
    "directive": {},  # dict
    "id": "example_id",  # str
    "parameters": {},  # dict
    "resources": {},  # dict
    "status": "example_status",  # str
    "units_consumed": 1,  # int
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TranslateCaption().load({"id": "translate_caption_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TranslateCaptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateAssetTrackEntity

```python
update_asset_track = client.UpdateAssetTrack()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_language_confidence` | `float` | No | The confidence value (0-1) of the determined language. |
| `closed_captions` | `bool` | No | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `duration` | `float` | No | The duration in seconds of the track media. |
| `id` | `str` | No | Unique identifier for the Track |
| `language_code` | `str` | No | The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'. |
| `max_channels` | `int` | No | The maximum number of audio channels the track supports. |
| `max_frame_rate` | `float` | No | The maximum frame rate available for the track. |
| `max_height` | `int` | No | The maximum height in pixels available for the track. |
| `max_width` | `int` | No | The maximum width in pixels available for the track. |
| `name` | `str` | No | The name of the track containing a human-readable description. |
| `passthrough` | `str` | No | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `primary` | `bool` | No | For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset. |
| `status` | `str` | No | The status of the track. |
| `text_source` | `str` | No | The source of the text contained in a Track of type `text`. |
| `text_type` | `str` | No | This parameter is only set for `text` type tracks. |
| `type` | `str` | No | The type of track |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateAssetTrack().update({
    "asset_id": "asset_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateAssetTrackEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UploadEntity

```python
upload = client.Upload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_id` | `str` | No | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `str` | Yes | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `dict` | No | Only set if an error occurred during asset creation. |
| `id` | `str` | Yes | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `dict` | No |  |
| `status` | `str` | Yes |  |
| `test` | `bool` | No | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | `int` | Yes | Max time in seconds for the signed upload URL to be valid. |
| `url` | `str` | No | The URL to upload the associated source media to. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Upload().create({
    "cors_origin": "example_cors_origin",  # str
    "id": "example_id",  # str
    "status": "example_status",  # str
    "timeout": 1,  # int
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Upload().load({"id": "upload_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Upload().update({
    "id": "upload_id",
    "upload_id": "upload_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UrlSigningKeyEntity

```python
url_signing_key = client.UrlSigningKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.UrlSigningKey().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UrlSigningKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VideoViewEntity

```python
video_view = client.VideoView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | Yes |  |
| `id` | `str` | No |  |
| `timeframe` | `list` | Yes |  |
| `total_row_count` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.VideoView().load({"id": "video_view_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | Yes | The URL where Mux sends webhook notifications. |
| `created_at` | `str` | Yes | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | `bool` | Yes | Whether Mux attempts to deliver notifications to this webhook. |
| `id` | `str` | Yes | Unique identifier for the webhook. |
| `signing_secret` | `str` | No | Secret used to verify that webhook payloads were sent by Mux. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `address` | - | - | Yes | - |
| `created_at` | - | - | - | - |
| `enabled` | - | - | Yes | - |
| `id` | - | - | - | - |
| `signing_secret` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Webhook().create({
    "address": "example_address",  # str
    "created_at": "example_created_at",  # str
    "enabled": True,  # bool
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Webhook().load({"id": "webhook_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Webhook().remove({"id": "webhook_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Webhook().update({
    "id": "webhook_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WhoAmIEntity

```python
who_am_i = client.WhoAmI()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token_name` | `str` | Yes |  |
| `environment_id` | `str` | Yes |  |
| `environment_name` | `str` | Yes |  |
| `environment_type` | `str` | Yes |  |
| `organization_id` | `str` | Yes |  |
| `organization_name` | `str` | Yes |  |
| `permissions` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WhoAmI().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhoAmIEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = MuxSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

