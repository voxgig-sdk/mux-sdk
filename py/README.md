# Mux Python SDK



The Python SDK for the Mux API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Annotation()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/mux-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from mux_sdk import MuxSDK

client = MuxSDK({
    "apikey": os.environ.get("MUX_APIKEY"),
})
```

### 2. List annotation records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    annotations = client.Annotation().list()
    for annotation in annotations:
        print(annotation)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an assetplaybackid

AssetPlaybackId is nested under asset, so provide the `asset_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    assetplaybackid = client.AssetPlaybackId().load({"asset_id": "example_asset_id", "id": "example_id"})
    print(assetplaybackid)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.Annotation().create({"date": "example_date", "id": "example_id", "note": "example_note"})

# Update — the created record's id is a plain dict key
client.Annotation().update({"id": created.data_get()["id"], "date": "example_date", "note": "example_note"})

# Remove
client.Annotation().remove({"id": created.data_get()["id"]})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    realtimebreakdowns = client.RealTimeBreakdown().list()
    print(realtimebreakdowns)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = MuxSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
realtimebreakdown = client.RealTimeBreakdown().list()
# realtimebreakdown contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = MuxSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
MUX_TEST_LIVE=TRUE
MUX_APIKEY=<your-key>
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### MuxSDK

```python
from mux_sdk import MuxSDK

client = MuxSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = MuxSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### MuxSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Annotation` | `(data) -> AnnotationEntity` | Create an Annotation entity instance. |
| `AskQuestion` | `(data) -> AskQuestionEntity` | Create an AskQuestion entity instance. |
| `Asset` | `(data) -> AssetEntity` | Create an Asset entity instance. |
| `AssetOrLiveStreamId` | `(data) -> AssetOrLiveStreamIdEntity` | Create an AssetOrLiveStreamId entity instance. |
| `AssetPlaybackId` | `(data) -> AssetPlaybackIdEntity` | Create an AssetPlaybackId entity instance. |
| `AssetShot` | `(data) -> AssetShotEntity` | Create an AssetShot entity instance. |
| `CreatePlaybackId` | `(data) -> CreatePlaybackIdEntity` | Create a CreatePlaybackId entity instance. |
| `CreateTrack` | `(data) -> CreateTrackEntity` | Create a CreateTrack entity instance. |
| `Directive` | `(data) -> DirectiveEntity` | Create a Directive entity instance. |
| `DirectiveRunDetail` | `(data) -> DirectiveRunDetailEntity` | Create a DirectiveRunDetail entity instance. |
| `DrmConfiguration` | `(data) -> DrmConfigurationEntity` | Create a DrmConfiguration entity instance. |
| `EditCaption` | `(data) -> EditCaptionEntity` | Create an EditCaption entity instance. |
| `EngagementHeatmap` | `(data) -> EngagementHeatmapEntity` | Create an EngagementHeatmap entity instance. |
| `EngagementHotspot` | `(data) -> EngagementHotspotEntity` | Create an EngagementHotspot entity instance. |
| `FindBestThumbnail` | `(data) -> FindBestThumbnailEntity` | Create a FindBestThumbnail entity instance. |
| `FindKeyMoment` | `(data) -> FindKeyMomentEntity` | Create a FindKeyMoment entity instance. |
| `FindScene` | `(data) -> FindSceneEntity` | Create a FindScene entity instance. |
| `GenerateAssetShot` | `(data) -> GenerateAssetShotEntity` | Create a GenerateAssetShot entity instance. |
| `GenerateChapter` | `(data) -> GenerateChapterEntity` | Create a GenerateChapter entity instance. |
| `GenerateEngagementInsight` | `(data) -> GenerateEngagementInsightEntity` | Create a GenerateEngagementInsight entity instance. |
| `GeneratePremiumCaption` | `(data) -> GeneratePremiumCaptionEntity` | Create a GeneratePremiumCaption entity instance. |
| `GenerateTrackSubtitle` | `(data) -> GenerateTrackSubtitleEntity` | Create a GenerateTrackSubtitle entity instance. |
| `Incident` | `(data) -> IncidentEntity` | Create an Incident entity instance. |
| `InputInfo` | `(data) -> InputInfoEntity` | Create an InputInfo entity instance. |
| `JobSummary` | `(data) -> JobSummaryEntity` | Create a JobSummary entity instance. |
| `ListAllMetricValue` | `(data) -> ListAllMetricValueEntity` | Create a ListAllMetricValue entity instance. |
| `ListBreakdownValue` | `(data) -> ListBreakdownValueEntity` | Create a ListBreakdownValue entity instance. |
| `ListDeliveryUsage` | `(data) -> ListDeliveryUsageEntity` | Create a ListDeliveryUsage entity instance. |
| `ListDimensionValue` | `(data) -> ListDimensionValueEntity` | Create a ListDimensionValue entity instance. |
| `ListError` | `(data) -> ListErrorEntity` | Create a ListError entity instance. |
| `ListExport` | `(data) -> ListExportEntity` | Create a ListExport entity instance. |
| `ListFilterValue` | `(data) -> ListFilterValueEntity` | Create a ListFilterValue entity instance. |
| `ListInsight` | `(data) -> ListInsightEntity` | Create a ListInsight entity instance. |
| `ListMonitoringDimension` | `(data) -> ListMonitoringDimensionEntity` | Create a ListMonitoringDimension entity instance. |
| `ListMonitoringMetric` | `(data) -> ListMonitoringMetricEntity` | Create a ListMonitoringMetric entity instance. |
| `ListRealTimeDimension` | `(data) -> ListRealTimeDimensionEntity` | Create a ListRealTimeDimension entity instance. |
| `ListRealTimeMetric` | `(data) -> ListRealTimeMetricEntity` | Create a ListRealTimeMetric entity instance. |
| `ListRelatedIncident` | `(data) -> ListRelatedIncidentEntity` | Create a ListRelatedIncident entity instance. |
| `ListSubviewBreakdownValue` | `(data) -> ListSubviewBreakdownValueEntity` | Create a ListSubviewBreakdownValue entity instance. |
| `ListSubviewComparisonValue` | `(data) -> ListSubviewComparisonValueEntity` | Create a ListSubviewComparisonValue entity instance. |
| `ListSubviewDimension` | `(data) -> ListSubviewDimensionEntity` | Create a ListSubviewDimension entity instance. |
| `ListSubviewDimensionValue` | `(data) -> ListSubviewDimensionValueEntity` | Create a ListSubviewDimensionValue entity instance. |
| `ListVideoViewExport` | `(data) -> ListVideoViewExportEntity` | Create a ListVideoViewExport entity instance. |
| `LiveStream` | `(data) -> LiveStreamEntity` | Create a LiveStream entity instance. |
| `LiveStreamPlaybackId` | `(data) -> LiveStreamPlaybackIdEntity` | Create a LiveStreamPlaybackId entity instance. |
| `MetricTimeseriesData` | `(data) -> MetricTimeseriesDataEntity` | Create a MetricTimeseriesData entity instance. |
| `Moderate` | `(data) -> ModerateEntity` | Create a Moderate entity instance. |
| `MonitoringBreakdown` | `(data) -> MonitoringBreakdownEntity` | Create a MonitoringBreakdown entity instance. |
| `MonitoringBreakdownTimeseries` | `(data) -> MonitoringBreakdownTimeseriesEntity` | Create a MonitoringBreakdownTimeseries entity instance. |
| `MonitoringHistogramTimeseries` | `(data) -> MonitoringHistogramTimeseriesEntity` | Create a MonitoringHistogramTimeseries entity instance. |
| `MonitoringTimeseries` | `(data) -> MonitoringTimeseriesEntity` | Create a MonitoringTimeseries entity instance. |
| `Overall` | `(data) -> OverallEntity` | Create an Overall entity instance. |
| `PlaybackRestriction` | `(data) -> PlaybackRestrictionEntity` | Create a PlaybackRestriction entity instance. |
| `RealTimeBreakdown` | `(data) -> RealTimeBreakdownEntity` | Create a RealTimeBreakdown entity instance. |
| `RealTimeHistogramTimeseries` | `(data) -> RealTimeHistogramTimeseriesEntity` | Create a RealTimeHistogramTimeseries entity instance. |
| `RealTimeTimeseries` | `(data) -> RealTimeTimeseriesEntity` | Create a RealTimeTimeseries entity instance. |
| `SignalLiveStreamComplete` | `(data) -> SignalLiveStreamCompleteEntity` | Create a SignalLiveStreamComplete entity instance. |
| `SigningKey` | `(data) -> SigningKeyEntity` | Create a SigningKey entity instance. |
| `SimulcastTarget` | `(data) -> SimulcastTargetEntity` | Create a SimulcastTarget entity instance. |
| `StaticRendition` | `(data) -> StaticRenditionEntity` | Create a StaticRendition entity instance. |
| `SubviewBreakdownTimeseries` | `(data) -> SubviewBreakdownTimeseriesEntity` | Create a SubviewBreakdownTimeseries entity instance. |
| `SubviewOverallValue` | `(data) -> SubviewOverallValueEntity` | Create a SubviewOverallValue entity instance. |
| `Summarize` | `(data) -> SummarizeEntity` | Create a Summarize entity instance. |
| `TranscriptionVocabulary` | `(data) -> TranscriptionVocabularyEntity` | Create a TranscriptionVocabulary entity instance. |
| `TranslateAudio` | `(data) -> TranslateAudioEntity` | Create a TranslateAudio entity instance. |
| `TranslateCaption` | `(data) -> TranslateCaptionEntity` | Create a TranslateCaption entity instance. |
| `UpdateAssetTrack` | `(data) -> UpdateAssetTrackEntity` | Create an UpdateAssetTrack entity instance. |
| `Upload` | `(data) -> UploadEntity` | Create an Upload entity instance. |
| `UrlSigningKey` | `(data) -> UrlSigningKeyEntity` | Create an UrlSigningKey entity instance. |
| `UsageExport` | `(data) -> UsageExportEntity` | Create an UsageExport entity instance. |
| `VideoView` | `(data) -> VideoViewEntity` | Create a VideoView entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |
| `WhoAmI` | `(data) -> WhoAmIEntity` | Create a WhoAmI entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### Annotation

| Field | Description |
| --- | --- |
| `date` | Datetime when the annotation applies |
| `id` | Unique identifier for the annotation |
| `note` | The annotation note content |
| `sub_property_id` | Customer-defined sub-property identifier |

Operations: Create, List, Load, Remove, Update.

API path: `/data/v1/annotations`

#### AskQuestion

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/ask-questions`

#### Asset

| Field | Description |
| --- | --- |
| `aspect_ratio` | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `data` |  |
| `directives` | The Mux Robots directives applied to the asset. |
| `duration` | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | This field is deprecated. |
| `errors` | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | Whether to perform shot detection on this asset. |
| `id` | Unique identifier for the Asset. |
| `ingest_type` | The type of ingest used to create the asset. |
| `is_live` | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | Unique identifier for the live stream. |
| `master` | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` |  |
| `max_resolution_tier` | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | This field is deprecated. |
| `meta` | Customer provided metadata about this asset. |
| `mp4_support` | Deprecated. |
| `non_standard_input_reasons` | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | Normalize the audio track loudness level. |
| `passthrough` | You can set this field to anything you want. |
| `playback_ids` | An array of Playback ID objects. |
| `progress` | Detailed state information about the asset ingest process. |
| `recording_times` | An array of individual live stream recording sessions. |
| `resolution_tier` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | The results of generating shots on the video |
| `source_asset_id` | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | The status of the asset. |
| `test` | True means this live stream is a test asset. |
| `thumbnail_time` | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | The individual media tracks that make up an asset. |
| `upload_id` | Unique identifier for the Direct Upload. |
| `video_quality` | The video quality controls the cost, quality, and available platform features for the asset. |

Operations: Create, List, Load, Remove, Update.

API path: `/video/v1/assets`

#### AssetOrLiveStreamId

| Field | Description |
| --- | --- |
| `id` | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: Load.

API path: `/video/v1/playback-ids/{PLAYBACK_ID}`

#### AssetPlaybackId

| Field | Description |
| --- | --- |
| `drm_configuration_id` | The DRM configuration used by this playback ID. |
| `id` | Unique identifier for the PlaybackID |
| `policy` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: Load.

API path: `/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}`

#### AssetShot

| Field | Description |
| --- | --- |
| `errors` | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | The status of the shot detection process |

Operations: Load.

API path: `/video/v1/assets/{ASSET_ID}/shots`

#### CreatePlaybackId

| Field | Description |
| --- | --- |
| `drm_configuration_id` | The DRM configuration used by this playback ID. |
| `policy` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: Create.

API path: `/video/v1/assets/{ASSET_ID}/playback-ids`

#### CreateTrack

| Field | Description |
| --- | --- |
| `closed_captions` | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `language_code` | The language code of this track. |
| `name` | The name of the track containing a human-readable description. |
| `passthrough` | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `text_type` |  |
| `type` |  |
| `url` | The URL of the file that Mux should download and use. |

Operations: Create.

API path: `/video/v1/assets/{ASSET_ID}/tracks`

#### Directive

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the directive was created. |
| `id` | Stable directive identifier (drv_...). |
| `name` | Human-readable directive name. |
| `resources` | Resource declarations. |
| `subject` |  |
| `updated_at` | Unix timestamp (seconds) when the directive was last updated. |
| `workflows` | Workflow bindings. |

Operations: Create, List, Load, Remove.

API path: `/robots/v0/directives/{DIRECTIVE_ID}/runs`

#### DirectiveRunDetail

| Field | Description |
| --- | --- |
| `completed_at` | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | Unique run identifier (drvrun_...). |
| `started_at` | Unix timestamp (seconds) when the run started. |
| `status` | Current run status. |
| `subject_id` | The bare Mux asset ID this run targeted. |

Operations: List, Load.

API path: `/robots/v0/directives/{DIRECTIVE_ID}/runs`

#### DrmConfiguration

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the DRM Configuration. |

Operations: List, Load.

API path: `/video/v1/drm-configurations`

#### EditCaption

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/edit-captions`

#### EngagementHeatmap

| Field | Description |
| --- | --- |
| `data` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: List.

API path: `/data/v1/engagement/assets/{ASSET_ID}/heatmap`

#### EngagementHotspot

| Field | Description |
| --- | --- |
| `data` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: List.

API path: `/data/v1/engagement/assets/{ASSET_ID}/hotspots`

#### FindBestThumbnail

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/find-best-thumbnails`

#### FindKeyMoment

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/find-key-moments`

#### FindScene

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/find-scenes`

#### GenerateAssetShot

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Create.

API path: `/video/v1/assets/{ASSET_ID}/shots`

#### GenerateChapter

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/generate-chapters`

#### GenerateEngagementInsight

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/generate-engagement-insights`

#### GeneratePremiumCaption

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/generate-premium-captions`

#### GenerateTrackSubtitle

| Field | Description |
| --- | --- |
| `generated_subtitles` | Generate subtitle tracks using automatic speech recognition with this configuration. |

Operations: Create.

API path: `/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles`

#### Incident

| Field | Description |
| --- | --- |
| `affected_views` |  |
| `affected_views_per_hour` |  |
| `affected_views_per_hour_on_open` |  |
| `breakdowns` |  |
| `data` |  |
| `description` |  |
| `error_description` |  |
| `id` |  |
| `impact` |  |
| `incident_key` |  |
| `measured_value` |  |
| `measured_value_on_close` |  |
| `measurement` |  |
| `notification_rules` |  |
| `notifications` |  |
| `resolved_at` |  |
| `sample_size` |  |
| `sample_size_unit` |  |
| `severity` |  |
| `started_at` |  |
| `status` |  |
| `threshold` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: List, Load.

API path: `/data/v1/incidents`

#### InputInfo

| Field | Description |
| --- | --- |
| `file` |  |
| `settings` | An array of objects that each describe an input file to be used to create the asset. |

Operations: List.

API path: `/video/v1/assets/{ASSET_ID}/input-info`

#### JobSummary

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `id` | Unique job identifier. |
| `links` | Hypermedia links for this job. |
| `status` | Current job status. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | Workflow type that created this job. |

Operations: Create, List.

API path: `/robots/v0/jobs/{JOB_ID}/cancel`

#### ListAllMetricValue

| Field | Description |
| --- | --- |
| `ended_views` |  |
| `items` |  |
| `metric` |  |
| `name` |  |
| `started_views` |  |
| `total_playing_time` |  |
| `type` |  |
| `unique_viewers` |  |
| `value` |  |
| `view_count` |  |
| `watch_time` |  |

Operations: List.

API path: `/data/v1/metrics/comparison`

#### ListBreakdownValue

| Field | Description |
| --- | --- |
| `field` |  |
| `negative_impact` |  |
| `total_playing_time` |  |
| `total_watch_time` |  |
| `value` |  |
| `views` |  |

Operations: List.

API path: `/data/v1/metrics/{METRIC_ID}/breakdown`

#### ListDeliveryUsage

| Field | Description |
| --- | --- |
| `asset_duration` | The duration of the asset in seconds. |
| `asset_encoding_tier` | This field is deprecated. |
| `asset_id` | Unique identifier for the asset. |
| `asset_resolution_tier` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage |
| `asset_state` | The state of the asset. |
| `asset_video_quality` | The video quality that the asset was ingested at. |
| `created_at` | Time at which the asset was created. |
| `deleted_at` | If exists, time at which the asset was deleted. |
| `delivered_seconds` | Total number of delivered seconds during this time window. |
| `delivered_seconds_by_resolution` | Seconds delivered broken into resolution tiers. |
| `live_stream_id` | Unique identifier for the live stream that created the asset. |
| `passthrough` | The `passthrough` value for the asset. |

Operations: List.

API path: `/video/v1/delivery-usage`

#### ListDimensionValue

| Field | Description |
| --- | --- |
| `data` |  |
| `timeframe` |  |
| `total_count` |  |
| `total_row_count` |  |
| `value` |  |

Operations: List, Load.

API path: `/data/v1/dimensions/{DIMENSION_ID}/elements`

#### ListError

| Field | Description |
| --- | --- |
| `code` | The error code |
| `count` | The total number of views that experienced this error. |
| `description` | Description of the error. |
| `id` | A unique identifier for this error. |
| `last_seen` | The last time this error was seen (ISO 8601 timestamp). |
| `message` | The error message. |
| `notes` | Notes that are attached to this error. |
| `percentage` | The percentage of views that experienced this error. |
| `player_error_code` | The string version of the error code |

Operations: List.

API path: `/data/v1/errors`

#### ListExport

| Field | Description |
| --- | --- |
| `data` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: List.

API path: `/data/v1/exports`

#### ListFilterValue

| Field | Description |
| --- | --- |
| `data` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: List, Load.

API path: `/data/v1/filters`

#### ListInsight

| Field | Description |
| --- | --- |
| `filter_column` |  |
| `filter_value` |  |
| `metric` |  |
| `negative_impact_score` |  |
| `total_playing_time` |  |
| `total_views` |  |
| `total_watch_time` |  |

Operations: List.

API path: `/data/v1/metrics/{METRIC_ID}/insights`

#### ListMonitoringDimension

| Field | Description |
| --- | --- |
| `display_name` |  |
| `name` |  |

Operations: List.

API path: `/data/v1/monitoring/dimensions`

#### ListMonitoringMetric

| Field | Description |
| --- | --- |
| `display_name` |  |
| `name` |  |

Operations: List.

API path: `/data/v1/monitoring/metrics`

#### ListRealTimeDimension

| Field | Description |
| --- | --- |
| `display_name` |  |
| `name` |  |

Operations: List.

API path: `/data/v1/realtime/dimensions`

#### ListRealTimeMetric

| Field | Description |
| --- | --- |
| `display_name` |  |
| `name` |  |

Operations: List.

API path: `/data/v1/realtime/metrics`

#### ListRelatedIncident

| Field | Description |
| --- | --- |
| `affected_views` |  |
| `affected_views_per_hour` |  |
| `affected_views_per_hour_on_open` |  |
| `breakdowns` |  |
| `description` |  |
| `error_description` |  |
| `id` |  |
| `impact` |  |
| `incident_key` |  |
| `measured_value` |  |
| `measured_value_on_close` |  |
| `measurement` |  |
| `notification_rules` |  |
| `notifications` |  |
| `resolved_at` |  |
| `sample_size` |  |
| `sample_size_unit` |  |
| `severity` |  |
| `started_at` |  |
| `status` |  |
| `threshold` |  |

Operations: List.

API path: `/data/v1/incidents/{INCIDENT_ID}/related`

#### ListSubviewBreakdownValue

| Field | Description |
| --- | --- |
| `breakdown_value` |  |
| `metric_value` |  |

Operations: List.

API path: `/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown`

#### ListSubviewComparisonValue

| Field | Description |
| --- | --- |
| `dimension_value` |  |
| `values` |  |

Operations: List.

API path: `/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/comparison`

#### ListSubviewDimension

| Field | Description |
| --- | --- |
| `data` |  |
| `total_row_count` | Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count. |

Operations: Load.

API path: `/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions`

#### ListSubviewDimensionValue

| Field | Description |
| --- | --- |
| `data` |  |
| `meta` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: Load.

API path: `/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions/{DIMENSION_NAME}`

#### ListVideoViewExport

| Field | Description |
| --- | --- |
| `export_date` |  |
| `files` |  |

Operations: List.

API path: `/data/v1/exports/views`

#### LiveStream

| Field | Description |
| --- | --- |
| `active_asset_id` | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | The protocol used for the active ingest stream. |
| `advanced_playback_policies` | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `audio_only` | The live stream only processes the audio track if the value is set to true. |
| `created_at` | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | Unique identifier for the Live Stream. |
| `latency_mode` | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | This field is deprecated. |
| `max_continuous_duration` | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | Customer provided metadata about this live stream. |
| `new_asset_settings` | Updates the new asset settings to use to generate a new asset for this live stream. |
| `passthrough` | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | An array of Playback ID objects. |
| `playback_policies` | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `playback_policy` | Deprecated. |
| `recent_asset_ids` | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | This field is deprecated. |
| `simulcast_targets` | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `idle` indicates that there is no active broadcast. |
| `stream_key` | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

Operations: Create, List, Load, Remove, Update.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key`

#### LiveStreamPlaybackId

| Field | Description |
| --- | --- |
| `drm_configuration_id` | The DRM configuration used by this playback ID. |
| `id` | Unique identifier for the PlaybackID |
| `policy` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: Load.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}`

#### MetricTimeseriesData

| Field | Description |
| --- | --- |
| `data` |  |
| `meta` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: List.

API path: `/data/v1/metrics/{METRIC_ID}/timeseries`

#### Moderate

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/moderate`

#### MonitoringBreakdown

| Field | Description |
| --- | --- |
| `concurrent_viewers` |  |
| `display_value` |  |
| `metric_value` |  |
| `negative_impact` |  |
| `starting_up_viewers` |  |
| `value` |  |

Operations: List.

API path: `/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown`

#### MonitoringBreakdownTimeseries

| Field | Description |
| --- | --- |
| `date` |  |
| `values` |  |

Operations: List.

API path: `/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries`

#### MonitoringHistogramTimeseries

| Field | Description |
| --- | --- |
| `average` |  |
| `bucket_values` |  |
| `max_percentage` |  |
| `median` |  |
| `p95` |  |
| `sum` |  |
| `timestamp` |  |

Operations: List.

API path: `/data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries`

#### MonitoringTimeseries

| Field | Description |
| --- | --- |
| `concurrent_viewers` |  |
| `date` |  |
| `value` |  |

Operations: List.

API path: `/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries`

#### Overall

| Field | Description |
| --- | --- |
| `data` |  |
| `meta` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: List.

API path: `/data/v1/metrics/{METRIC_ID}/overall`

#### PlaybackRestriction

| Field | Description |
| --- | --- |
| `created_at` | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | Unique identifier for the Playback Restriction. |
| `referrer` | A list of domains allowed to play your videos. |
| `updated_at` | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | Rules that control what user agents are allowed to play your videos. |

Operations: Create, List, Load, Remove, Update.

API path: `/video/v1/playback-restrictions`

#### RealTimeBreakdown

| Field | Description |
| --- | --- |
| `concurrent_viewers` |  |
| `display_value` |  |
| `metric_value` |  |
| `negative_impact` |  |
| `starting_up_viewers` |  |
| `value` |  |

Operations: List.

API path: `/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown`

#### RealTimeHistogramTimeseries

| Field | Description |
| --- | --- |
| `average` |  |
| `bucket_values` |  |
| `max_percentage` |  |
| `median` |  |
| `p95` |  |
| `sum` |  |
| `timestamp` |  |

Operations: List.

API path: `/data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries`

#### RealTimeTimeseries

| Field | Description |
| --- | --- |
| `concurrent_viewers` |  |
| `date` |  |
| `value` |  |

Operations: List.

API path: `/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries`

#### SignalLiveStreamComplete

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/complete`

#### SigningKey

| Field | Description |
| --- | --- |
| `created_at` | Time at which the object was created. |
| `data` |  |
| `id` | Unique identifier for the Signing Key. |
| `private_key` | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

Operations: Create, List, Load, Remove.

API path: `/system/v1/signing-keys`

#### SimulcastTarget

| Field | Description |
| --- | --- |
| `error_severity` | The severity of the error encountered by the simulcast target. |
| `id` | ID of the Simulcast Target |
| `passthrough` | Arbitrary user-supplied metadata set when creating a simulcast target. |
| `status` | The current status of the simulcast target. |
| `stream_key` | Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. |
| `url` | The RTMP(s) or SRT endpoint for a simulcast destination. |

Operations: Create, Load.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets`

#### StaticRendition

| Field | Description |
| --- | --- |
| `passthrough` | Arbitrary user-supplied metadata set for the static rendition. |
| `resolution` |  |

Operations: Create.

API path: `/video/v1/assets/{ASSET_ID}/static-renditions`

#### SubviewBreakdownTimeseries

| Field | Description |
| --- | --- |
| `date` |  |
| `status` |  |
| `values` |  |

Operations: List.

API path: `/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown-timeseries`

#### SubviewOverallValue

| Field | Description |
| --- | --- |
| `data` |  |
| `meta` |  |
| `timeframe` |  |
| `total_row_count` | Always `null` for this endpoint — a single aggregate value has no row count. |

Operations: List.

API path: `/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/overall`

#### Summarize

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/summarize`

#### TranscriptionVocabulary

| Field | Description |
| --- | --- |
| `created_at` | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | Unique identifier for the Transcription Vocabulary |
| `name` | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `updated_at` | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

Operations: Create, List, Load, Remove, Update.

API path: `/video/v1/transcription-vocabularies`

#### TranslateAudio

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/translate-audio`

#### TranslateCaption

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp (seconds) when the job was created. |
| `directive` | The directive run that dispatched this job. |
| `errors` | Error details. |
| `id` | Unique job identifier. |
| `outputs` | Workflow results. |
| `parameters` |  |
| `passthrough` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | Related Mux resources linked to this job. |
| `status` | Current job status. |
| `units_consumed` | Number of Mux AI units consumed by this job. |
| `updated_at` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/translate-captions`

#### UpdateAssetTrack

| Field | Description |
| --- | --- |
| `auto_language_confidence` | The confidence value (0-1) of the determined language. |
| `closed_captions` | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `duration` | The duration in seconds of the track media. |
| `id` | Unique identifier for the Track |
| `language_code` | The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'. |
| `max_channels` | The maximum number of audio channels the track supports. |
| `max_frame_rate` | The maximum frame rate available for the track. |
| `max_height` | The maximum height in pixels available for the track. |
| `max_width` | The maximum width in pixels available for the track. |
| `name` | The name of the track containing a human-readable description. |
| `passthrough` | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `primary` | For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset. |
| `status` | The status of the track. |
| `text_source` | The source of the text contained in a Track of type `text`. |
| `text_type` | This parameter is only set for `text` type tracks. |
| `type` | The type of track |

Operations: Update.

API path: `/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}`

#### Upload

| Field | Description |
| --- | --- |
| `asset_id` | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | Only set if an error occurred during asset creation. |
| `id` | Unique identifier for the Direct Upload. |
| `new_asset_settings` |  |
| `status` |  |
| `test` | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | Max time in seconds for the signed upload URL to be valid. |
| `url` | The URL to upload the associated source media to. |

Operations: Create, List, Load, Update.

API path: `/video/v1/uploads`

#### UrlSigningKey

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/video/v1/signing-keys/{SIGNING_KEY_ID}`

#### UsageExport

| Field | Description |
| --- | --- |
| `date` | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `download_url` | A pre-signed URL to download the CSV. |
| `download_url_expires_at` | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `file_size` | Uncompressed size of the CSV file in bytes. |

Operations: List.

API path: `/system/v1/usage/exports`

#### VideoView

| Field | Description |
| --- | --- |
| `country_code` |  |
| `data` |  |
| `error_type_id` |  |
| `id` |  |
| `playback_failure` |  |
| `player_error_code` |  |
| `player_error_message` |  |
| `timeframe` |  |
| `total_row_count` |  |
| `video_title` |  |
| `view_end` |  |
| `view_start` |  |
| `viewer_application_name` |  |
| `viewer_experience_score` |  |
| `viewer_os_family` |  |
| `watch_time` |  |

Operations: List, Load.

API path: `/data/v1/video-views`

#### Webhook

| Field | Description |
| --- | --- |
| `address` | The URL where Mux sends webhook notifications. |
| `created_at` | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | Whether Mux attempts to deliver notifications to this webhook. |
| `id` | Unique identifier for the webhook. |
| `signing_secret` | Secret used to verify that webhook payloads were sent by Mux. |

Operations: Create, List, Load, Remove, Update.

API path: `/system/v1/webhooks`

#### WhoAmI

| Field | Description |
| --- | --- |
| `access_token_name` |  |
| `environment_id` |  |
| `environment_name` |  |
| `environment_type` |  |
| `organization_id` |  |
| `organization_name` |  |
| `permissions` |  |

Operations: Load.

API path: `/system/v1/whoami`



## Entities


### Annotation

Create an instance: `annotation = client.Annotation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `str` | Datetime when the annotation applies |
| `id` | `str` | Unique identifier for the annotation |
| `note` | `str` | The annotation note content |
| `sub_property_id` | `str` | Customer-defined sub-property identifier |

#### Example: Load

```python
annotation = client.Annotation().load({"id": "annotation_id"})
```

#### Example: List

```python
annotations = client.Annotation().list()
```

#### Example: Create

```python
annotation = client.Annotation().create({
    "date": "example_date",  # str
    "id": "example_id",  # str
    "note": "example_note",  # str
})
```


### AskQuestion

Create an instance: `ask_question = client.AskQuestion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
ask_question = client.AskQuestion().load({"id": "ask_question_id"})
```

#### Example: Create

```python
ask_question = client.AskQuestion().create({
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


### Asset

Create an instance: `asset = client.Asset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `str` | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `str` | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `data` | `dict` |  |
| `directives` | `list` | The Mux Robots directives applied to the asset. |
| `duration` | `float` | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `str` | This field is deprecated. |
| `errors` | `dict` | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `bool` | Whether to perform shot detection on this asset. |
| `id` | `str` | Unique identifier for the Asset. |
| `ingest_type` | `str` | The type of ingest used to create the asset. |
| `is_live` | `bool` | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `str` | Unique identifier for the live stream. |
| `master` | `dict` | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `str` |  |
| `max_resolution_tier` | `str` | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `float` | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `str` | This field is deprecated. |
| `meta` | `dict` | Customer provided metadata about this asset. |
| `mp4_support` | `str` | Deprecated. |
| `non_standard_input_reasons` | `dict` | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `bool` | Normalize the audio track loudness level. |
| `passthrough` | `str` | You can set this field to anything you want. |
| `playback_ids` | `list` | An array of Playback ID objects. |
| `progress` | `dict` | Detailed state information about the asset ingest process. |
| `recording_times` | `list` | An array of individual live stream recording sessions. |
| `resolution_tier` | `str` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `dict` | The results of generating shots on the video |
| `source_asset_id` | `str` | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `dict` | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `str` | The status of the asset. |
| `test` | `bool` | True means this live stream is a test asset. |
| `thumbnail_time` | `float` | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `list` | The individual media tracks that make up an asset. |
| `upload_id` | `str` | Unique identifier for the Direct Upload. |
| `video_quality` | `str` | The video quality controls the cost, quality, and available platform features for the asset. |

#### Example: Load

```python
asset = client.Asset().load({"id": "asset_id"})
```

#### Example: List

```python
assets = client.Asset().list()
```

#### Example: Create

```python
asset = client.Asset().create({
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


### AssetOrLiveStreamId

Create an instance: `asset_or_live_stream_id = client.AssetOrLiveStreamId()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | `dict` | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | `str` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Load

```python
asset_or_live_stream_id = client.AssetOrLiveStreamId().load({"playback_id": "playback_id"})
```


### AssetPlaybackId

Create an instance: `asset_playback_id = client.AssetPlaybackId()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drm_configuration_id` | `str` | The DRM configuration used by this playback ID. |
| `id` | `str` | Unique identifier for the PlaybackID |
| `policy` | `str` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Load

```python
asset_playback_id = client.AssetPlaybackId().load({"id": "asset_playback_id_id", "asset_id": "asset_id"})
```


### AssetShot

Create an instance: `asset_shot = client.AssetShot()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `dict` | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | `str` | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | `str` | The status of the shot detection process |

#### Example: Load

```python
asset_shot = client.AssetShot().load({"asset_id": "asset_id"})
```


### CreatePlaybackId

Create an instance: `create_playback_id = client.CreatePlaybackId()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drm_configuration_id` | `str` | The DRM configuration used by this playback ID. |
| `policy` | `str` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Create

```python
create_playback_id = client.CreatePlaybackId().create({
    "asset_id": "example_asset_id",  # str
})
```


### CreateTrack

Create an instance: `create_track = client.CreateTrack()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed_captions` | `bool` | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `language_code` | `str` | The language code of this track. |
| `name` | `str` | The name of the track containing a human-readable description. |
| `passthrough` | `str` | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `text_type` | `str` |  |
| `type` | `str` |  |
| `url` | `str` | The URL of the file that Mux should download and use. |

#### Example: Create

```python
create_track = client.CreateTrack().create({
    "asset_id": "example_asset_id",  # str
    "language_code": "example_language_code",  # str
    "type": "example_type",  # str
    "url": "example_url",  # str
})
```


### Directive

Create an instance: `directive = client.Directive()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the directive was created. |
| `id` | `str` | Stable directive identifier (drv_...). |
| `name` | `str` | Human-readable directive name. |
| `resources` | `list` | Resource declarations. |
| `subject` | `dict` |  |
| `updated_at` | `int` | Unix timestamp (seconds) when the directive was last updated. |
| `workflows` | `list` | Workflow bindings. |

#### Example: Load

```python
directive = client.Directive().load({"id": "directive_id"})
```

#### Example: List

```python
directives = client.Directive().list()
```

#### Example: Create

```python
directive = client.Directive().create({
    "created_at": 1,  # int
    "id": "example_id",  # str
    "name": "example_name",  # str
    "resources": [],  # list
    "subject": {},  # dict
    "updated_at": 1,  # int
    "workflows": [],  # list
})
```


### DirectiveRunDetail

Create an instance: `directive_run_detail = client.DirectiveRunDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `int | None` | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `list` | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `str` | Unique run identifier (drvrun_...). |
| `started_at` | `int` | Unix timestamp (seconds) when the run started. |
| `status` | `str` | Current run status. |
| `subject_id` | `str` | The bare Mux asset ID this run targeted. |

#### Example: Load

```python
directive_run_detail = client.DirectiveRunDetail().load({"directive_id": "directive_id", "run_id": "run_id"})
```

#### Example: List

```python
directive_run_details = client.DirectiveRunDetail().list({"directive_id": "example"})
```


### DrmConfiguration

Create an instance: `drm_configuration = client.DrmConfiguration()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | Unique identifier for the DRM Configuration. |

#### Example: Load

```python
drm_configuration = client.DrmConfiguration().load({"id": "drm_configuration_id"})
```

#### Example: List

```python
drm_configurations = client.DrmConfiguration().list()
```


### EditCaption

Create an instance: `edit_caption = client.EditCaption()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
edit_caption = client.EditCaption().load({"id": "edit_caption_id"})
```

#### Example: Create

```python
edit_caption = client.EditCaption().create({
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


### EngagementHeatmap

Create an instance: `engagement_heatmap = client.EngagementHeatmap()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` |  |
| `timeframe` | `list` |  |
| `total_row_count` | `int` |  |

#### Example: List

```python
engagement_heatmaps = client.EngagementHeatmap().list({"asset_id": "example"})
```


### EngagementHotspot

Create an instance: `engagement_hotspot = client.EngagementHotspot()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` |  |
| `timeframe` | `list` |  |
| `total_row_count` | `int` |  |

#### Example: List

```python
engagement_hotspots = client.EngagementHotspot().list({"asset_id": "example"})
```


### FindBestThumbnail

Create an instance: `find_best_thumbnail = client.FindBestThumbnail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
find_best_thumbnail = client.FindBestThumbnail().load({"id": "find_best_thumbnail_id"})
```

#### Example: Create

```python
find_best_thumbnail = client.FindBestThumbnail().create({
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


### FindKeyMoment

Create an instance: `find_key_moment = client.FindKeyMoment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
find_key_moment = client.FindKeyMoment().load({"id": "find_key_moment_id"})
```

#### Example: Create

```python
find_key_moment = client.FindKeyMoment().create({
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


### FindScene

Create an instance: `find_scene = client.FindScene()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
find_scene = client.FindScene().load({"id": "find_scene_id"})
```

#### Example: Create

```python
find_scene = client.FindScene().create({
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


### GenerateAssetShot

Create an instance: `generate_asset_shot = client.GenerateAssetShot()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` |  |

#### Example: Create

```python
generate_asset_shot = client.GenerateAssetShot().create({
    "asset_id": "example_asset_id",  # str
})
```


### GenerateChapter

Create an instance: `generate_chapter = client.GenerateChapter()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
generate_chapter = client.GenerateChapter().load({"id": "generate_chapter_id"})
```

#### Example: Create

```python
generate_chapter = client.GenerateChapter().create({
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


### GenerateEngagementInsight

Create an instance: `generate_engagement_insight = client.GenerateEngagementInsight()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
generate_engagement_insight = client.GenerateEngagementInsight().load({"id": "generate_engagement_insight_id"})
```

#### Example: Create

```python
generate_engagement_insight = client.GenerateEngagementInsight().create({
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


### GeneratePremiumCaption

Create an instance: `generate_premium_caption = client.GeneratePremiumCaption()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
generate_premium_caption = client.GeneratePremiumCaption().load({"id": "generate_premium_caption_id"})
```

#### Example: Create

```python
generate_premium_caption = client.GeneratePremiumCaption().create({
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


### GenerateTrackSubtitle

Create an instance: `generate_track_subtitle = client.GenerateTrackSubtitle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generated_subtitles` | `list` | Generate subtitle tracks using automatic speech recognition with this configuration. |

#### Example: Create

```python
generate_track_subtitle = client.GenerateTrackSubtitle().create({
    "asset_id": "example_asset_id",  # str
    "track_id": "example_track_id",  # str
    "generated_subtitles": [],  # list
})
```


### Incident

Create an instance: `incident = client.Incident()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affected_views` | `int` |  |
| `affected_views_per_hour` | `int` |  |
| `affected_views_per_hour_on_open` | `int` |  |
| `breakdowns` | `list` |  |
| `data` | `dict` |  |
| `description` | `str` |  |
| `error_description` | `str` |  |
| `id` | `str` |  |
| `impact` | `str` |  |
| `incident_key` | `str` |  |
| `measured_value` | `float` |  |
| `measured_value_on_close` | `float` |  |
| `measurement` | `str` |  |
| `notification_rules` | `list` |  |
| `notifications` | `list` |  |
| `resolved_at` | `str` |  |
| `sample_size` | `int` |  |
| `sample_size_unit` | `str` |  |
| `severity` | `str` |  |
| `started_at` | `str` |  |
| `status` | `str` |  |
| `threshold` | `float` |  |
| `timeframe` | `list` |  |
| `total_row_count` | `int` |  |

#### Example: Load

```python
incident = client.Incident().load({"id": "incident_id"})
```

#### Example: List

```python
incidents = client.Incident().list()
```


### InputInfo

Create an instance: `input_info = client.InputInfo()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `dict` |  |
| `settings` | `dict` | An array of objects that each describe an input file to be used to create the asset. |

#### Example: List

```python
input_infos = client.InputInfo().list({"asset_id": "example"})
```


### JobSummary

Create an instance: `job_summary = client.JobSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `id` | `str` | Unique job identifier. |
| `links` | `dict` | Hypermedia links for this job. |
| `status` | `str` | Current job status. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` | Workflow type that created this job. |

#### Example: List

```python
job_summarys = client.JobSummary().list()
```

#### Example: Create

```python
job_summary = client.JobSummary().create({
    "job_id": "example_job_id",  # str
    "created_at": 1,  # int
    "id": "example_id",  # str
    "links": {},  # dict
    "status": "example_status",  # str
    "updated_at": 1,  # int
    "workflow": "example_workflow",  # str
})
```


### ListAllMetricValue

Create an instance: `list_all_metric_value = client.ListAllMetricValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ended_views` | `int` |  |
| `items` | `list` |  |
| `metric` | `str` |  |
| `name` | `str` |  |
| `started_views` | `int` |  |
| `total_playing_time` | `int` |  |
| `type` | `str` |  |
| `unique_viewers` | `int` |  |
| `value` | `float` |  |
| `view_count` | `int` |  |
| `watch_time` | `int` |  |

#### Example: List

```python
list_all_metric_values = client.ListAllMetricValue().list()
```


### ListBreakdownValue

Create an instance: `list_breakdown_value = client.ListBreakdownValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field` | `str` |  |
| `negative_impact` | `int` |  |
| `total_playing_time` | `int` |  |
| `total_watch_time` | `int` |  |
| `value` | `float` |  |
| `views` | `int` |  |

#### Example: List

```python
list_breakdown_values = client.ListBreakdownValue().list({"metric_id": "example"})
```


### ListDeliveryUsage

Create an instance: `list_delivery_usage = client.ListDeliveryUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_duration` | `float` | The duration of the asset in seconds. |
| `asset_encoding_tier` | `str` | This field is deprecated. |
| `asset_id` | `str` | Unique identifier for the asset. |
| `asset_resolution_tier` | `str` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage |
| `asset_state` | `str` | The state of the asset. |
| `asset_video_quality` | `str` | The video quality that the asset was ingested at. |
| `created_at` | `str` | Time at which the asset was created. |
| `deleted_at` | `str` | If exists, time at which the asset was deleted. |
| `delivered_seconds` | `float` | Total number of delivered seconds during this time window. |
| `delivered_seconds_by_resolution` | `dict` | Seconds delivered broken into resolution tiers. |
| `live_stream_id` | `str` | Unique identifier for the live stream that created the asset. |
| `passthrough` | `str` | The `passthrough` value for the asset. |

#### Example: List

```python
list_delivery_usages = client.ListDeliveryUsage().list()
```


### ListDimensionValue

Create an instance: `list_dimension_value = client.ListDimensionValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `timeframe` | `list` |  |
| `total_count` | `int` |  |
| `total_row_count` | `int` |  |
| `value` | `str` |  |

#### Example: Load

```python
list_dimension_value = client.ListDimensionValue().load({"dimension_id": "dimension_id"})
```

#### Example: List

```python
list_dimension_values = client.ListDimensionValue().list()
```


### ListError

Create an instance: `list_error = client.ListError()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `int` | The error code |
| `count` | `int` | The total number of views that experienced this error. |
| `description` | `str` | Description of the error. |
| `id` | `int` | A unique identifier for this error. |
| `last_seen` | `str` | The last time this error was seen (ISO 8601 timestamp). |
| `message` | `str` | The error message. |
| `notes` | `str` | Notes that are attached to this error. |
| `percentage` | `float` | The percentage of views that experienced this error. |
| `player_error_code` | `str` | The string version of the error code |

#### Example: List

```python
list_errors = client.ListError().list()
```


### ListExport

Create an instance: `list_export = client.ListExport()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `timeframe` | `list` |  |
| `total_row_count` | `int` |  |

#### Example: List

```python
list_exports = client.ListExport().list()
```


### ListFilterValue

Create an instance: `list_filter_value = client.ListFilterValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `timeframe` | `list` |  |
| `total_row_count` | `int` |  |

#### Example: Load

```python
list_filter_value = client.ListFilterValue().load({"filter_id": "filter_id"})
```

#### Example: List

```python
list_filter_values = client.ListFilterValue().list()
```


### ListInsight

Create an instance: `list_insight = client.ListInsight()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `filter_column` | `str` |  |
| `filter_value` | `str` |  |
| `metric` | `float` |  |
| `negative_impact_score` | `float` |  |
| `total_playing_time` | `int` |  |
| `total_views` | `int` |  |
| `total_watch_time` | `int` |  |

#### Example: List

```python
list_insights = client.ListInsight().list({"metric_id": "example"})
```


### ListMonitoringDimension

Create an instance: `list_monitoring_dimension = client.ListMonitoringDimension()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `str` |  |
| `name` | `str` |  |

#### Example: List

```python
list_monitoring_dimensions = client.ListMonitoringDimension().list()
```


### ListMonitoringMetric

Create an instance: `list_monitoring_metric = client.ListMonitoringMetric()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `str` |  |
| `name` | `str` |  |

#### Example: List

```python
list_monitoring_metrics = client.ListMonitoringMetric().list()
```


### ListRealTimeDimension

Create an instance: `list_real_time_dimension = client.ListRealTimeDimension()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `str` |  |
| `name` | `str` |  |

#### Example: List

```python
list_real_time_dimensions = client.ListRealTimeDimension().list()
```


### ListRealTimeMetric

Create an instance: `list_real_time_metric = client.ListRealTimeMetric()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `str` |  |
| `name` | `str` |  |

#### Example: List

```python
list_real_time_metrics = client.ListRealTimeMetric().list()
```


### ListRelatedIncident

Create an instance: `list_related_incident = client.ListRelatedIncident()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affected_views` | `int` |  |
| `affected_views_per_hour` | `int` |  |
| `affected_views_per_hour_on_open` | `int` |  |
| `breakdowns` | `list` |  |
| `description` | `str` |  |
| `error_description` | `str` |  |
| `id` | `str` |  |
| `impact` | `str` |  |
| `incident_key` | `str` |  |
| `measured_value` | `float` |  |
| `measured_value_on_close` | `float` |  |
| `measurement` | `str` |  |
| `notification_rules` | `list` |  |
| `notifications` | `list` |  |
| `resolved_at` | `str` |  |
| `sample_size` | `int` |  |
| `sample_size_unit` | `str` |  |
| `severity` | `str` |  |
| `started_at` | `str` |  |
| `status` | `str` |  |
| `threshold` | `float` |  |

#### Example: List

```python
list_related_incidents = client.ListRelatedIncident().list({"incident_id": "example"})
```


### ListSubviewBreakdownValue

Create an instance: `list_subview_breakdown_value = client.ListSubviewBreakdownValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `breakdown_value` | `str` |  |
| `metric_value` | `float` |  |

#### Example: List

```python
list_subview_breakdown_values = client.ListSubviewBreakdownValue().list({"subview_metric_id": "example", "subview_type": "example"})
```


### ListSubviewComparisonValue

Create an instance: `list_subview_comparison_value = client.ListSubviewComparisonValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dimension_value` | `str` |  |
| `values` | `list` |  |

#### Example: List

```python
list_subview_comparison_values = client.ListSubviewComparisonValue().list({"subview_metric_id": "example", "subview_type": "example", "dimension": "example", "value": []})
```


### ListSubviewDimension

Create an instance: `list_subview_dimension = client.ListSubviewDimension()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` |  |
| `total_row_count` | `int` | Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count. |

#### Example: Load

```python
list_subview_dimension = client.ListSubviewDimension().load({"subview_type": "subview_type"})
```


### ListSubviewDimensionValue

Create an instance: `list_subview_dimension_value = client.ListSubviewDimensionValue()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `meta` | `Any` |  |
| `timeframe` | `list` |  |
| `total_row_count` | `int` |  |

#### Example: Load

```python
list_subview_dimension_value = client.ListSubviewDimensionValue().load({"dimension_name": "dimension_name", "subview_metric_id": "subview_metric_id"})
```


### ListVideoViewExport

Create an instance: `list_video_view_export = client.ListVideoViewExport()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `export_date` | `str` |  |
| `files` | `list` |  |

#### Example: List

```python
list_video_view_exports = client.ListVideoViewExport().list()
```


### LiveStream

Create an instance: `live_stream = client.LiveStream()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_asset_id` | `str` | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `str` | The protocol used for the active ingest stream. |
| `advanced_playback_policies` | `list` | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `audio_only` | `bool` | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `str` | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `list` | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `list` | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `str` | Unique identifier for the Live Stream. |
| `latency_mode` | `str` | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `bool` | This field is deprecated. |
| `max_continuous_duration` | `int` | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `dict` | Customer provided metadata about this live stream. |
| `new_asset_settings` | `dict` | Updates the new asset settings to use to generate a new asset for this live stream. |
| `passthrough` | `str` | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `list` | An array of Playback ID objects. |
| `playback_policies` | `list` | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `playback_policy` | `list` | Deprecated. |
| `recent_asset_ids` | `list` | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `str` | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `float` | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `bool` | This field is deprecated. |
| `simulcast_targets` | `list` | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | `str` | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `str` | `idle` indicates that there is no active broadcast. |
| `stream_key` | `str` | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | `bool` | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | `bool` | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

#### Example: Load

```python
live_stream = client.LiveStream().load({"id": "live_stream_id"})
```

#### Example: List

```python
live_streams = client.LiveStream().list()
```

#### Example: Create

```python
live_stream = client.LiveStream().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "latency_mode": "example_latency_mode",  # str
    "max_continuous_duration": 1,  # int
    "status": "example_status",  # str
    "stream_key": "example_stream_key",  # str
})
```


### LiveStreamPlaybackId

Create an instance: `live_stream_playback_id = client.LiveStreamPlaybackId()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drm_configuration_id` | `str` | The DRM configuration used by this playback ID. |
| `id` | `str` | Unique identifier for the PlaybackID |
| `policy` | `str` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Load

```python
live_stream_playback_id = client.LiveStreamPlaybackId().load({"id": "live_stream_playback_id_id", "live_stream_id": "live_stream_id"})
```


### MetricTimeseriesData

Create an instance: `metric_timeseries_data = client.MetricTimeseriesData()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `meta` | `dict` |  |
| `timeframe` | `list` |  |
| `total_row_count` | `int` |  |

#### Example: List

```python
metric_timeseries_datas = client.MetricTimeseriesData().list({"metric_id": "example"})
```


### Moderate

Create an instance: `moderate = client.Moderate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
moderate = client.Moderate().load({"id": "moderate_id"})
```

#### Example: Create

```python
moderate = client.Moderate().create({
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


### MonitoringBreakdown

Create an instance: `monitoring_breakdown = client.MonitoringBreakdown()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `int` |  |
| `display_value` | `str` |  |
| `metric_value` | `float` |  |
| `negative_impact` | `int` |  |
| `starting_up_viewers` | `int` |  |
| `value` | `str` |  |

#### Example: List

```python
monitoring_breakdowns = client.MonitoringBreakdown().list({"monitoring_metric_id": "example"})
```


### MonitoringBreakdownTimeseries

Create an instance: `monitoring_breakdown_timeseries = client.MonitoringBreakdownTimeseries()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `str` |  |
| `values` | `list` |  |

#### Example: List

```python
monitoring_breakdown_timeseriess = client.MonitoringBreakdownTimeseries().list({"monitoring_metric_id": "example"})
```


### MonitoringHistogramTimeseries

Create an instance: `monitoring_histogram_timeseries = client.MonitoringHistogramTimeseries()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average` | `float` |  |
| `bucket_values` | `list` |  |
| `max_percentage` | `float` |  |
| `median` | `float` |  |
| `p95` | `float` |  |
| `sum` | `int` |  |
| `timestamp` | `str` |  |

#### Example: List

```python
monitoring_histogram_timeseriess = client.MonitoringHistogramTimeseries().list({"monitoring_histogram_metric_id": "example"})
```


### MonitoringTimeseries

Create an instance: `monitoring_timeseries = client.MonitoringTimeseries()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `int` |  |
| `date` | `str` |  |
| `value` | `float` |  |

#### Example: List

```python
monitoring_timeseriess = client.MonitoringTimeseries().list({"monitoring_metric_id": "example"})
```


### Overall

Create an instance: `overall = client.Overall()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` |  |
| `meta` | `dict` |  |
| `timeframe` | `list` |  |
| `total_row_count` | `int` |  |

#### Example: List

```python
overalls = client.Overall().list({"metric_id": "example"})
```


### PlaybackRestriction

Create an instance: `playback_restriction = client.PlaybackRestriction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `str` | Unique identifier for the Playback Restriction. |
| `referrer` | `dict` | A list of domains allowed to play your videos. |
| `updated_at` | `str` | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `dict` | Rules that control what user agents are allowed to play your videos. |

#### Example: Load

```python
playback_restriction = client.PlaybackRestriction().load({"id": "playback_restriction_id"})
```

#### Example: List

```python
playback_restrictions = client.PlaybackRestriction().list()
```

#### Example: Create

```python
playback_restriction = client.PlaybackRestriction().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "referrer": {},  # dict
    "updated_at": "example_updated_at",  # str
    "user_agent": {},  # dict
})
```


### RealTimeBreakdown

Create an instance: `real_time_breakdown = client.RealTimeBreakdown()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `int` |  |
| `display_value` | `str` |  |
| `metric_value` | `float` |  |
| `negative_impact` | `int` |  |
| `starting_up_viewers` | `int` |  |
| `value` | `str` |  |

#### Example: List

```python
real_time_breakdowns = client.RealTimeBreakdown().list({"realtime_metric_id": "example"})
```


### RealTimeHistogramTimeseries

Create an instance: `real_time_histogram_timeseries = client.RealTimeHistogramTimeseries()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average` | `float` |  |
| `bucket_values` | `list` |  |
| `max_percentage` | `float` |  |
| `median` | `float` |  |
| `p95` | `float` |  |
| `sum` | `int` |  |
| `timestamp` | `str` |  |

#### Example: List

```python
real_time_histogram_timeseriess = client.RealTimeHistogramTimeseries().list({"realtime_histogram_metric_id": "example"})
```


### RealTimeTimeseries

Create an instance: `real_time_timeseries = client.RealTimeTimeseries()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `int` |  |
| `date` | `str` |  |
| `value` | `float` |  |

#### Example: List

```python
real_time_timeseriess = client.RealTimeTimeseries().list({"realtime_metric_id": "example"})
```


### SignalLiveStreamComplete

Create an instance: `signal_live_stream_complete = client.SignalLiveStreamComplete()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### SigningKey

Create an instance: `signing_key = client.SigningKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Time at which the object was created. |
| `data` | `dict` |  |
| `id` | `str` | Unique identifier for the Signing Key. |
| `private_key` | `str` | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

#### Example: Load

```python
signing_key = client.SigningKey().load({"id": "signing_key_id"})
```

#### Example: List

```python
signing_keys = client.SigningKey().list()
```

#### Example: Create

```python
signing_key = client.SigningKey().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
})
```


### SimulcastTarget

Create an instance: `simulcast_target = client.SimulcastTarget()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error_severity` | `str` | The severity of the error encountered by the simulcast target. |
| `id` | `str` | ID of the Simulcast Target |
| `passthrough` | `str` | Arbitrary user-supplied metadata set when creating a simulcast target. |
| `status` | `str` | The current status of the simulcast target. |
| `stream_key` | `str` | Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. |
| `url` | `str` | The RTMP(s) or SRT endpoint for a simulcast destination. |

#### Example: Load

```python
simulcast_target = client.SimulcastTarget().load({"id": "simulcast_target_id", "live_stream_id": "live_stream_id"})
```

#### Example: Create

```python
simulcast_target = client.SimulcastTarget().create({
    "live_stream_id": "example_live_stream_id",  # str
    "id": "example_id",  # str
    "status": "example_status",  # str
    "url": "example_url",  # str
})
```


### StaticRendition

Create an instance: `static_rendition = client.StaticRendition()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `passthrough` | `str` | Arbitrary user-supplied metadata set for the static rendition. |
| `resolution` | `str` |  |

#### Example: Create

```python
static_rendition = client.StaticRendition().create({
    "asset_id": "example_asset_id",  # str
    "resolution": "example_resolution",  # str
})
```


### SubviewBreakdownTimeseries

Create an instance: `subview_breakdown_timeseries = client.SubviewBreakdownTimeseries()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `str` |  |
| `status` | `str` |  |
| `values` | `list` |  |

#### Example: List

```python
subview_breakdown_timeseriess = client.SubviewBreakdownTimeseries().list({"subview_metric_id": "example", "subview_type": "example"})
```


### SubviewOverallValue

Create an instance: `subview_overall_value = client.SubviewOverallValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` |  |
| `meta` | `dict` |  |
| `timeframe` | `list` |  |
| `total_row_count` | `int` | Always `null` for this endpoint — a single aggregate value has no row count. |

#### Example: List

```python
subview_overall_values = client.SubviewOverallValue().list({"subview_metric_id": "example", "subview_type": "example"})
```


### Summarize

Create an instance: `summarize = client.Summarize()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
summarize = client.Summarize().load({"id": "summarize_id"})
```

#### Example: Create

```python
summarize = client.Summarize().create({
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


### TranscriptionVocabulary

Create an instance: `transcription_vocabulary = client.TranscriptionVocabulary()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `str` | Unique identifier for the Transcription Vocabulary |
| `name` | `str` | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `str` | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `list` | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `updated_at` | `str` | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

#### Example: Load

```python
transcription_vocabulary = client.TranscriptionVocabulary().load({"id": "transcription_vocabulary_id"})
```

#### Example: List

```python
transcription_vocabularys = client.TranscriptionVocabulary().list()
```

#### Example: Create

```python
transcription_vocabulary = client.TranscriptionVocabulary().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "updated_at": "example_updated_at",  # str
})
```


### TranslateAudio

Create an instance: `translate_audio = client.TranslateAudio()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
translate_audio = client.TranslateAudio().load({"id": "translate_audio_id"})
```

#### Example: Create

```python
translate_audio = client.TranslateAudio().create({
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


### TranslateCaption

Create an instance: `translate_caption = client.TranslateCaption()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `dict` | The directive run that dispatched this job. |
| `errors` | `list` | Error details. |
| `id` | `str` | Unique job identifier. |
| `outputs` | `dict` | Workflow results. |
| `parameters` | `dict` |  |
| `passthrough` | `str` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `dict` | Related Mux resources linked to this job. |
| `status` | `str` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `str` |  |

#### Example: Load

```python
translate_caption = client.TranslateCaption().load({"id": "translate_caption_id"})
```

#### Example: Create

```python
translate_caption = client.TranslateCaption().create({
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


### UpdateAssetTrack

Create an instance: `update_asset_track = client.UpdateAssetTrack()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_language_confidence` | `float` | The confidence value (0-1) of the determined language. |
| `closed_captions` | `bool` | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `duration` | `float` | The duration in seconds of the track media. |
| `id` | `str` | Unique identifier for the Track |
| `language_code` | `str` | The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'. |
| `max_channels` | `int` | The maximum number of audio channels the track supports. |
| `max_frame_rate` | `float` | The maximum frame rate available for the track. |
| `max_height` | `int` | The maximum height in pixels available for the track. |
| `max_width` | `int` | The maximum width in pixels available for the track. |
| `name` | `str` | The name of the track containing a human-readable description. |
| `passthrough` | `str` | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `primary` | `bool` | For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset. |
| `status` | `str` | The status of the track. |
| `text_source` | `str` | The source of the text contained in a Track of type `text`. |
| `text_type` | `str` | This parameter is only set for `text` type tracks. |
| `type` | `str` | The type of track |


### Upload

Create an instance: `upload = client.Upload()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_id` | `str` | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `str` | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `dict` | Only set if an error occurred during asset creation. |
| `id` | `str` | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `dict` |  |
| `status` | `str` |  |
| `test` | `bool` | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | `int` | Max time in seconds for the signed upload URL to be valid. |
| `url` | `str` | The URL to upload the associated source media to. |

#### Example: Load

```python
upload = client.Upload().load({"id": "upload_id"})
```

#### Example: List

```python
uploads = client.Upload().list()
```

#### Example: Create

```python
upload = client.Upload().create({
    "cors_origin": "example_cors_origin",  # str
    "id": "example_id",  # str
    "status": "example_status",  # str
    "timeout": 1,  # int
})
```


### UrlSigningKey

Create an instance: `url_signing_key = client.UrlSigningKey()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### UsageExport

Create an instance: `usage_export = client.UsageExport()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `str` | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `download_url` | `str` | A pre-signed URL to download the CSV. |
| `download_url_expires_at` | `int` | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `file_size` | `int` | Uncompressed size of the CSV file in bytes. |

#### Example: List

```python
usage_exports = client.UsageExport().list()
```


### VideoView

Create an instance: `video_view = client.VideoView()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country_code` | `str` |  |
| `data` | `dict` |  |
| `error_type_id` | `int` |  |
| `id` | `str` |  |
| `playback_failure` | `bool` |  |
| `player_error_code` | `str` |  |
| `player_error_message` | `str` |  |
| `timeframe` | `list` |  |
| `total_row_count` | `int` |  |
| `video_title` | `str` |  |
| `view_end` | `str` |  |
| `view_start` | `str` |  |
| `viewer_application_name` | `str` |  |
| `viewer_experience_score` | `float` |  |
| `viewer_os_family` | `str` |  |
| `watch_time` | `int` |  |

#### Example: Load

```python
video_view = client.VideoView().load({"id": "video_view_id"})
```

#### Example: List

```python
video_views = client.VideoView().list()
```


### Webhook

Create an instance: `webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `str` | The URL where Mux sends webhook notifications. |
| `created_at` | `str` | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | `bool` | Whether Mux attempts to deliver notifications to this webhook. |
| `id` | `str` | Unique identifier for the webhook. |
| `signing_secret` | `str` | Secret used to verify that webhook payloads were sent by Mux. |

#### Example: Load

```python
webhook = client.Webhook().load({"id": "webhook_id"})
```

#### Example: List

```python
webhooks = client.Webhook().list()
```

#### Example: Create

```python
webhook = client.Webhook().create({
    "address": "example_address",  # str
    "created_at": "example_created_at",  # str
    "enabled": True,  # bool
    "id": "example_id",  # str
})
```


### WhoAmI

Create an instance: `who_am_i = client.WhoAmI()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token_name` | `str` |  |
| `environment_id` | `str` |  |
| `environment_name` | `str` |  |
| `environment_type` | `str` |  |
| `organization_id` | `str` |  |
| `organization_name` | `str` |  |
| `permissions` | `list` |  |

#### Example: Load

```python
who_am_i = client.WhoAmI().load()
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

1 field is carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes it with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `metric_timeseries_data` | `data` | 3 | 2 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── mux_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`mux_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
realtimebreakdown = client.RealTimeBreakdown()
realtimebreakdown.list()

# realtimebreakdown.data_get() now returns the realtimebreakdown data from the last list
# realtimebreakdown.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
