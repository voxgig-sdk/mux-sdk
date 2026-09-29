# Mux Lua SDK



The Lua SDK for the Mux API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Annotation()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/mux-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("mux_sdk")

local client = sdk.new({
  apikey = os.getenv("MUX_APIKEY"),
})
```

### 2. List annotation records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local annotations, err = client:Annotation():list()
if err then error(err) end

for _, item in ipairs(annotations) do
  print(item["id"])
end
```

### 3. Load an assetplaybackid

AssetPlaybackId is nested under asset, so provide the `asset_id`.

```lua
local assetplaybackid, err = client:AssetPlaybackId():load({ asset_id = "example_asset_id", id = "example_id" })
if err then error(err) end
print(assetplaybackid)
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:Annotation():create({ date = "example_date", id = "example_id", note = "example_note" })
if err then error(err) end

-- Update
client:Annotation():update({ id = created:data_get()["id"], date = "example_date", note = "example_note" })

-- Remove
client:Annotation():remove({ id = created:data_get()["id"] })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local realtimebreakdowns, err = client:RealTimeBreakdown():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:RealTimeBreakdown():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### MuxSDK

```lua
local sdk = require("mux_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### MuxSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local annotation, err = client:Annotation():load({ id = "example_id" })
    if err then error(err) end
    -- annotation is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local annotation = client:Annotation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | Datetime when the annotation applies |
| `id` | `string` | Unique identifier for the annotation |
| `note` | `string` | The annotation note content |
| `sub_property_id` | `string` | Customer-defined sub-property identifier |

#### Example: Load

```lua
local annotation, err = client:Annotation():load({ id = "annotation_id" })
```

#### Example: List

```lua
local annotations, err = client:Annotation():list()
```

#### Example: Create

```lua
local annotation, err = client:Annotation():create({
  date = "example_date", -- string
  id = "example_id", -- string
  note = "example_note", -- string
})
```


### AskQuestion

Create an instance: `local ask_question = client:AskQuestion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local ask_question, err = client:AskQuestion():load({ id = "ask_question_id" })
```

#### Example: Create

```lua
local ask_question, err = client:AskQuestion():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  outputs = {}, -- table
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### Asset

Create an instance: `local asset = client:Asset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `string` | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `string` | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `data` | `table` |  |
| `directives` | `table` | The Mux Robots directives applied to the asset. |
| `duration` | `number` | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `string` | This field is deprecated. |
| `errors` | `table` | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `boolean` | Whether to perform shot detection on this asset. |
| `id` | `string` | Unique identifier for the Asset. |
| `ingest_type` | `string` | The type of ingest used to create the asset. |
| `is_live` | `boolean` | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `string` | Unique identifier for the live stream. |
| `master` | `table` | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `string` |  |
| `max_resolution_tier` | `string` | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `number` | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `string` | This field is deprecated. |
| `meta` | `table` | Customer provided metadata about this asset. |
| `mp4_support` | `string` | Deprecated. |
| `non_standard_input_reasons` | `table` | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `boolean` | Normalize the audio track loudness level. |
| `passthrough` | `string` | You can set this field to anything you want. |
| `playback_ids` | `table` | An array of Playback ID objects. |
| `progress` | `table` | Detailed state information about the asset ingest process. |
| `recording_times` | `table` | An array of individual live stream recording sessions. |
| `resolution_tier` | `string` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `table` | The results of generating shots on the video |
| `source_asset_id` | `string` | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `table` | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `string` | The status of the asset. |
| `test` | `boolean` | True means this live stream is a test asset. |
| `thumbnail_time` | `number` | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `table` | The individual media tracks that make up an asset. |
| `upload_id` | `string` | Unique identifier for the Direct Upload. |
| `video_quality` | `string` | The video quality controls the cost, quality, and available platform features for the asset. |

#### Example: Load

```lua
local asset, err = client:Asset():load({ id = "asset_id" })
```

#### Example: List

```lua
local assets, err = client:Asset():list()
```

#### Example: Create

```lua
local asset, err = client:Asset():create({
  created_at = "example_created_at", -- string
  encoding_tier = "example_encoding_tier", -- string
  id = "example_id", -- string
  master_access = "example_master_access", -- string
  max_resolution_tier = "example_max_resolution_tier", -- string
  progress = {}, -- table
  shots = {}, -- table
  status = "example_status", -- string
})
```


### AssetOrLiveStreamId

Create an instance: `local asset_or_live_stream_id = client:AssetOrLiveStreamId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | `table` | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | `string` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Load

```lua
local asset_or_live_stream_id, err = client:AssetOrLiveStreamId():load({ playback_id = "playback_id" })
```


### AssetPlaybackId

Create an instance: `local asset_playback_id = client:AssetPlaybackId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drm_configuration_id` | `string` | The DRM configuration used by this playback ID. |
| `id` | `string` | Unique identifier for the PlaybackID |
| `policy` | `string` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Load

```lua
local asset_playback_id, err = client:AssetPlaybackId():load({ id = "asset_playback_id_id", asset_id = "asset_id" })
```


### AssetShot

Create an instance: `local asset_shot = client:AssetShot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | `string` | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | `string` | The status of the shot detection process |

#### Example: Load

```lua
local asset_shot, err = client:AssetShot():load({ asset_id = "asset_id" })
```


### CreatePlaybackId

Create an instance: `local create_playback_id = client:CreatePlaybackId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drm_configuration_id` | `string` | The DRM configuration used by this playback ID. |
| `policy` | `string` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Create

```lua
local create_playback_id, err = client:CreatePlaybackId():create({
  asset_id = "example_asset_id", -- string
})
```


### CreateTrack

Create an instance: `local create_track = client:CreateTrack(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed_captions` | `boolean` | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `language_code` | `string` | The language code of this track. |
| `name` | `string` | The name of the track containing a human-readable description. |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `text_type` | `string` |  |
| `type` | `string` |  |
| `url` | `string` | The URL of the file that Mux should download and use. |

#### Example: Create

```lua
local create_track, err = client:CreateTrack():create({
  asset_id = "example_asset_id", -- string
  language_code = "example_language_code", -- string
  type = "example_type", -- string
  url = "example_url", -- string
})
```


### Directive

Create an instance: `local directive = client:Directive(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the directive was created. |
| `id` | `string` | Stable directive identifier (drv_...). |
| `name` | `string` | Human-readable directive name. |
| `resources` | `table` | Resource declarations. |
| `subject` | `table` |  |
| `updated_at` | `number` | Unix timestamp (seconds) when the directive was last updated. |
| `workflows` | `table` | Workflow bindings. |

#### Example: Load

```lua
local directive, err = client:Directive():load({ id = "directive_id" })
```

#### Example: List

```lua
local directives, err = client:Directive():list()
```

#### Example: Create

```lua
local directive, err = client:Directive():create({
  created_at = 1, -- number
  id = "example_id", -- string
  name = "example_name", -- string
  resources = {}, -- table
  subject = {}, -- table
  updated_at = 1, -- number
  workflows = {}, -- table
})
```


### DirectiveRunDetail

Create an instance: `local directive_run_detail = client:DirectiveRunDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `number|nil` | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `table` | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `string` | Unique run identifier (drvrun_...). |
| `started_at` | `number` | Unix timestamp (seconds) when the run started. |
| `status` | `string` | Current run status. |
| `subject_id` | `string` | The bare Mux asset ID this run targeted. |

#### Example: Load

```lua
local directive_run_detail, err = client:DirectiveRunDetail():load({ directive_id = "directive_id", run_id = "run_id" })
```

#### Example: List

```lua
local directive_run_details, err = client:DirectiveRunDetail():list()
```


### DrmConfiguration

Create an instance: `local drm_configuration = client:DrmConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the DRM Configuration. |

#### Example: Load

```lua
local drm_configuration, err = client:DrmConfiguration():load({ id = "drm_configuration_id" })
```

#### Example: List

```lua
local drm_configurations, err = client:DrmConfiguration():list()
```


### EditCaption

Create an instance: `local edit_caption = client:EditCaption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local edit_caption, err = client:EditCaption():load({ id = "edit_caption_id" })
```

#### Example: Create

```lua
local edit_caption, err = client:EditCaption():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  outputs = {}, -- table
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### EngagementHeatmap

Create an instance: `local engagement_heatmap = client:EngagementHeatmap(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `timeframe` | `table` |  |
| `total_row_count` | `number` |  |

#### Example: List

```lua
local engagement_heatmaps, err = client:EngagementHeatmap():list()
```


### EngagementHotspot

Create an instance: `local engagement_hotspot = client:EngagementHotspot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `timeframe` | `table` |  |
| `total_row_count` | `number` |  |

#### Example: List

```lua
local engagement_hotspots, err = client:EngagementHotspot():list()
```


### FindBestThumbnail

Create an instance: `local find_best_thumbnail = client:FindBestThumbnail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local find_best_thumbnail, err = client:FindBestThumbnail():load({ id = "find_best_thumbnail_id" })
```

#### Example: Create

```lua
local find_best_thumbnail, err = client:FindBestThumbnail():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  outputs = {}, -- table
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### FindKeyMoment

Create an instance: `local find_key_moment = client:FindKeyMoment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local find_key_moment, err = client:FindKeyMoment():load({ id = "find_key_moment_id" })
```

#### Example: Create

```lua
local find_key_moment, err = client:FindKeyMoment():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  outputs = {}, -- table
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### FindScene

Create an instance: `local find_scene = client:FindScene(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local find_scene, err = client:FindScene():load({ id = "find_scene_id" })
```

#### Example: Create

```lua
local find_scene, err = client:FindScene():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  outputs = {}, -- table
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### GenerateAssetShot

Create an instance: `local generate_asset_shot = client:GenerateAssetShot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |

#### Example: Create

```lua
local generate_asset_shot, err = client:GenerateAssetShot():create({
  asset_id = "example_asset_id", -- string
})
```


### GenerateChapter

Create an instance: `local generate_chapter = client:GenerateChapter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local generate_chapter, err = client:GenerateChapter():load({ id = "generate_chapter_id" })
```

#### Example: Create

```lua
local generate_chapter, err = client:GenerateChapter():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  outputs = {}, -- table
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### GenerateEngagementInsight

Create an instance: `local generate_engagement_insight = client:GenerateEngagementInsight(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local generate_engagement_insight, err = client:GenerateEngagementInsight():load({ id = "generate_engagement_insight_id" })
```

#### Example: Create

```lua
local generate_engagement_insight, err = client:GenerateEngagementInsight():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  outputs = {}, -- table
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### GeneratePremiumCaption

Create an instance: `local generate_premium_caption = client:GeneratePremiumCaption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local generate_premium_caption, err = client:GeneratePremiumCaption():load({ id = "generate_premium_caption_id" })
```

#### Example: Create

```lua
local generate_premium_caption, err = client:GeneratePremiumCaption():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  outputs = {}, -- table
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### GenerateTrackSubtitle

Create an instance: `local generate_track_subtitle = client:GenerateTrackSubtitle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generated_subtitles` | `table` | Generate subtitle tracks using automatic speech recognition with this configuration. |

#### Example: Create

```lua
local generate_track_subtitle, err = client:GenerateTrackSubtitle():create({
  asset_id = "example_asset_id", -- string
  track_id = "example_track_id", -- string
  generated_subtitles = {}, -- table
})
```


### Incident

Create an instance: `local incident = client:Incident(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affected_views` | `number` |  |
| `affected_views_per_hour` | `number` |  |
| `affected_views_per_hour_on_open` | `number` |  |
| `breakdowns` | `table` |  |
| `data` | `table` |  |
| `description` | `string` |  |
| `error_description` | `string` |  |
| `id` | `string` |  |
| `impact` | `string` |  |
| `incident_key` | `string` |  |
| `measured_value` | `number` |  |
| `measured_value_on_close` | `number` |  |
| `measurement` | `string` |  |
| `notification_rules` | `table` |  |
| `notifications` | `table` |  |
| `resolved_at` | `string` |  |
| `sample_size` | `number` |  |
| `sample_size_unit` | `string` |  |
| `severity` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `threshold` | `number` |  |
| `timeframe` | `table` |  |
| `total_row_count` | `number` |  |

#### Example: Load

```lua
local incident, err = client:Incident():load({ id = "incident_id" })
```

#### Example: List

```lua
local incidents, err = client:Incident():list()
```


### InputInfo

Create an instance: `local input_info = client:InputInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `table` |  |
| `settings` | `table` | An array of objects that each describe an input file to be used to create the asset. |

#### Example: List

```lua
local input_infos, err = client:InputInfo():list()
```


### JobSummary

Create an instance: `local job_summary = client:JobSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `id` | `string` | Unique job identifier. |
| `links` | `table` | Hypermedia links for this job. |
| `status` | `string` | Current job status. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Workflow type that created this job. |

#### Example: List

```lua
local job_summarys, err = client:JobSummary():list()
```

#### Example: Create

```lua
local job_summary, err = client:JobSummary():create({
  job_id = "example_job_id", -- string
  created_at = 1, -- number
  id = "example_id", -- string
  links = {}, -- table
  status = "example_status", -- string
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### ListAllMetricValue

Create an instance: `local list_all_metric_value = client:ListAllMetricValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ended_views` | `number` |  |
| `items` | `table` |  |
| `metric` | `string` |  |
| `name` | `string` |  |
| `started_views` | `number` |  |
| `total_playing_time` | `number` |  |
| `type` | `string` |  |
| `unique_viewers` | `number` |  |
| `value` | `number` |  |
| `view_count` | `number` |  |
| `watch_time` | `number` |  |

#### Example: List

```lua
local list_all_metric_values, err = client:ListAllMetricValue():list()
```


### ListBreakdownValue

Create an instance: `local list_breakdown_value = client:ListBreakdownValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field` | `string` |  |
| `negative_impact` | `number` |  |
| `total_playing_time` | `number` |  |
| `total_watch_time` | `number` |  |
| `value` | `number` |  |
| `views` | `number` |  |

#### Example: List

```lua
local list_breakdown_values, err = client:ListBreakdownValue():list()
```


### ListDeliveryUsage

Create an instance: `local list_delivery_usage = client:ListDeliveryUsage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_duration` | `number` | The duration of the asset in seconds. |
| `asset_encoding_tier` | `string` | This field is deprecated. |
| `asset_id` | `string` | Unique identifier for the asset. |
| `asset_resolution_tier` | `string` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage |
| `asset_state` | `string` | The state of the asset. |
| `asset_video_quality` | `string` | The video quality that the asset was ingested at. |
| `created_at` | `string` | Time at which the asset was created. |
| `deleted_at` | `string` | If exists, time at which the asset was deleted. |
| `delivered_seconds` | `number` | Total number of delivered seconds during this time window. |
| `delivered_seconds_by_resolution` | `table` | Seconds delivered broken into resolution tiers. |
| `live_stream_id` | `string` | Unique identifier for the live stream that created the asset. |
| `passthrough` | `string` | The `passthrough` value for the asset. |

#### Example: List

```lua
local list_delivery_usages, err = client:ListDeliveryUsage():list()
```


### ListDimensionValue

Create an instance: `local list_dimension_value = client:ListDimensionValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `timeframe` | `table` |  |
| `total_count` | `number` |  |
| `total_row_count` | `number` |  |
| `value` | `string` |  |

#### Example: Load

```lua
local list_dimension_value, err = client:ListDimensionValue():load({ dimension_id = "dimension_id" })
```

#### Example: List

```lua
local list_dimension_values, err = client:ListDimensionValue():list()
```


### ListError

Create an instance: `local list_error = client:ListError(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `number` | The error code |
| `count` | `number` | The total number of views that experienced this error. |
| `description` | `string` | Description of the error. |
| `id` | `number` | A unique identifier for this error. |
| `last_seen` | `string` | The last time this error was seen (ISO 8601 timestamp). |
| `message` | `string` | The error message. |
| `notes` | `string` | Notes that are attached to this error. |
| `percentage` | `number` | The percentage of views that experienced this error. |
| `player_error_code` | `string` | The string version of the error code |

#### Example: List

```lua
local list_errors, err = client:ListError():list()
```


### ListExport

Create an instance: `local list_export = client:ListExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `timeframe` | `table` |  |
| `total_row_count` | `number` |  |

#### Example: List

```lua
local list_exports, err = client:ListExport():list()
```


### ListFilterValue

Create an instance: `local list_filter_value = client:ListFilterValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `timeframe` | `table` |  |
| `total_row_count` | `number` |  |

#### Example: Load

```lua
local list_filter_value, err = client:ListFilterValue():load({ filter_id = "filter_id" })
```

#### Example: List

```lua
local list_filter_values, err = client:ListFilterValue():list()
```


### ListInsight

Create an instance: `local list_insight = client:ListInsight(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `filter_column` | `string` |  |
| `filter_value` | `string` |  |
| `metric` | `number` |  |
| `negative_impact_score` | `number` |  |
| `total_playing_time` | `number` |  |
| `total_views` | `number` |  |
| `total_watch_time` | `number` |  |

#### Example: List

```lua
local list_insights, err = client:ListInsight():list()
```


### ListMonitoringDimension

Create an instance: `local list_monitoring_dimension = client:ListMonitoringDimension(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` |  |
| `name` | `string` |  |

#### Example: List

```lua
local list_monitoring_dimensions, err = client:ListMonitoringDimension():list()
```


### ListMonitoringMetric

Create an instance: `local list_monitoring_metric = client:ListMonitoringMetric(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` |  |
| `name` | `string` |  |

#### Example: List

```lua
local list_monitoring_metrics, err = client:ListMonitoringMetric():list()
```


### ListRealTimeDimension

Create an instance: `local list_real_time_dimension = client:ListRealTimeDimension(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` |  |
| `name` | `string` |  |

#### Example: List

```lua
local list_real_time_dimensions, err = client:ListRealTimeDimension():list()
```


### ListRealTimeMetric

Create an instance: `local list_real_time_metric = client:ListRealTimeMetric(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` |  |
| `name` | `string` |  |

#### Example: List

```lua
local list_real_time_metrics, err = client:ListRealTimeMetric():list()
```


### ListRelatedIncident

Create an instance: `local list_related_incident = client:ListRelatedIncident(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affected_views` | `number` |  |
| `affected_views_per_hour` | `number` |  |
| `affected_views_per_hour_on_open` | `number` |  |
| `breakdowns` | `table` |  |
| `description` | `string` |  |
| `error_description` | `string` |  |
| `id` | `string` |  |
| `impact` | `string` |  |
| `incident_key` | `string` |  |
| `measured_value` | `number` |  |
| `measured_value_on_close` | `number` |  |
| `measurement` | `string` |  |
| `notification_rules` | `table` |  |
| `notifications` | `table` |  |
| `resolved_at` | `string` |  |
| `sample_size` | `number` |  |
| `sample_size_unit` | `string` |  |
| `severity` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `threshold` | `number` |  |

#### Example: List

```lua
local list_related_incidents, err = client:ListRelatedIncident():list()
```


### ListSubviewBreakdownValue

Create an instance: `local list_subview_breakdown_value = client:ListSubviewBreakdownValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `breakdown_value` | `string` |  |
| `metric_value` | `number` |  |

#### Example: List

```lua
local list_subview_breakdown_values, err = client:ListSubviewBreakdownValue():list()
```


### ListSubviewComparisonValue

Create an instance: `local list_subview_comparison_value = client:ListSubviewComparisonValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dimension_value` | `string` |  |
| `values` | `table` |  |

#### Example: List

```lua
local list_subview_comparison_values, err = client:ListSubviewComparisonValue():list()
```


### ListSubviewDimension

Create an instance: `local list_subview_dimension = client:ListSubviewDimension(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `total_row_count` | `number` | Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count. |

#### Example: Load

```lua
local list_subview_dimension, err = client:ListSubviewDimension():load({ subview_type = "subview_type" })
```


### ListSubviewDimensionValue

Create an instance: `local list_subview_dimension_value = client:ListSubviewDimensionValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `meta` | `any` |  |
| `timeframe` | `table` |  |
| `total_row_count` | `number` |  |

#### Example: Load

```lua
local list_subview_dimension_value, err = client:ListSubviewDimensionValue():load({ dimension_name = "dimension_name", subview_metric_id = "subview_metric_id" })
```


### ListVideoViewExport

Create an instance: `local list_video_view_export = client:ListVideoViewExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `export_date` | `string` |  |
| `files` | `table` |  |

#### Example: List

```lua
local list_video_view_exports, err = client:ListVideoViewExport():list()
```


### LiveStream

Create an instance: `local live_stream = client:LiveStream(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_asset_id` | `string` | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `string` | The protocol used for the active ingest stream. |
| `advanced_playback_policies` | `table` | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `audio_only` | `boolean` | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `string` | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `table` | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `table` | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `string` | Unique identifier for the Live Stream. |
| `latency_mode` | `string` | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `boolean` | This field is deprecated. |
| `max_continuous_duration` | `number` | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `table` | Customer provided metadata about this live stream. |
| `new_asset_settings` | `table` | Updates the new asset settings to use to generate a new asset for this live stream. |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `table` | An array of Playback ID objects. |
| `playback_policies` | `table` | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `playback_policy` | `table` | Deprecated. |
| `recent_asset_ids` | `table` | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `string` | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `number` | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `boolean` | This field is deprecated. |
| `simulcast_targets` | `table` | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | `string` | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `string` | `idle` indicates that there is no active broadcast. |
| `stream_key` | `string` | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | `boolean` | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | `boolean` | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

#### Example: Load

```lua
local live_stream, err = client:LiveStream():load({ id = "live_stream_id" })
```

#### Example: List

```lua
local live_streams, err = client:LiveStream():list()
```

#### Example: Create

```lua
local live_stream, err = client:LiveStream():create({
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  latency_mode = "example_latency_mode", -- string
  max_continuous_duration = 1, -- number
  status = "example_status", -- string
  stream_key = "example_stream_key", -- string
})
```


### LiveStreamPlaybackId

Create an instance: `local live_stream_playback_id = client:LiveStreamPlaybackId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drm_configuration_id` | `string` | The DRM configuration used by this playback ID. |
| `id` | `string` | Unique identifier for the PlaybackID |
| `policy` | `string` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Load

```lua
local live_stream_playback_id, err = client:LiveStreamPlaybackId():load({ id = "live_stream_playback_id_id", live_stream_id = "live_stream_id" })
```


### MetricTimeseriesData

Create an instance: `local metric_timeseries_data = client:MetricTimeseriesData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `meta` | `table` |  |
| `timeframe` | `table` |  |
| `total_row_count` | `number` |  |

#### Example: List

```lua
local metric_timeseries_datas, err = client:MetricTimeseriesData():list()
```


### Moderate

Create an instance: `local moderate = client:Moderate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local moderate, err = client:Moderate():load({ id = "moderate_id" })
```

#### Example: Create

```lua
local moderate, err = client:Moderate():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  outputs = {}, -- table
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### MonitoringBreakdown

Create an instance: `local monitoring_breakdown = client:MonitoringBreakdown(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `number` |  |
| `display_value` | `string` |  |
| `metric_value` | `number` |  |
| `negative_impact` | `number` |  |
| `starting_up_viewers` | `number` |  |
| `value` | `string` |  |

#### Example: List

```lua
local monitoring_breakdowns, err = client:MonitoringBreakdown():list()
```


### MonitoringBreakdownTimeseries

Create an instance: `local monitoring_breakdown_timeseries = client:MonitoringBreakdownTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `values` | `table` |  |

#### Example: List

```lua
local monitoring_breakdown_timeseriess, err = client:MonitoringBreakdownTimeseries():list()
```


### MonitoringHistogramTimeseries

Create an instance: `local monitoring_histogram_timeseries = client:MonitoringHistogramTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average` | `number` |  |
| `bucket_values` | `table` |  |
| `max_percentage` | `number` |  |
| `median` | `number` |  |
| `p95` | `number` |  |
| `sum` | `number` |  |
| `timestamp` | `string` |  |

#### Example: List

```lua
local monitoring_histogram_timeseriess, err = client:MonitoringHistogramTimeseries():list()
```


### MonitoringTimeseries

Create an instance: `local monitoring_timeseries = client:MonitoringTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `number` |  |
| `date` | `string` |  |
| `value` | `number` |  |

#### Example: List

```lua
local monitoring_timeseriess, err = client:MonitoringTimeseries():list()
```


### Overall

Create an instance: `local overall = client:Overall(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `meta` | `table` |  |
| `timeframe` | `table` |  |
| `total_row_count` | `number` |  |

#### Example: List

```lua
local overalls, err = client:Overall():list()
```


### PlaybackRestriction

Create an instance: `local playback_restriction = client:PlaybackRestriction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Unique identifier for the Playback Restriction. |
| `referrer` | `table` | A list of domains allowed to play your videos. |
| `updated_at` | `string` | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `table` | Rules that control what user agents are allowed to play your videos. |

#### Example: Load

```lua
local playback_restriction, err = client:PlaybackRestriction():load({ id = "playback_restriction_id" })
```

#### Example: List

```lua
local playback_restrictions, err = client:PlaybackRestriction():list()
```

#### Example: Create

```lua
local playback_restriction, err = client:PlaybackRestriction():create({
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  referrer = {}, -- table
  updated_at = "example_updated_at", -- string
  user_agent = {}, -- table
})
```


### RealTimeBreakdown

Create an instance: `local real_time_breakdown = client:RealTimeBreakdown(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `number` |  |
| `display_value` | `string` |  |
| `metric_value` | `number` |  |
| `negative_impact` | `number` |  |
| `starting_up_viewers` | `number` |  |
| `value` | `string` |  |

#### Example: List

```lua
local real_time_breakdowns, err = client:RealTimeBreakdown():list()
```


### RealTimeHistogramTimeseries

Create an instance: `local real_time_histogram_timeseries = client:RealTimeHistogramTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average` | `number` |  |
| `bucket_values` | `table` |  |
| `max_percentage` | `number` |  |
| `median` | `number` |  |
| `p95` | `number` |  |
| `sum` | `number` |  |
| `timestamp` | `string` |  |

#### Example: List

```lua
local real_time_histogram_timeseriess, err = client:RealTimeHistogramTimeseries():list()
```


### RealTimeTimeseries

Create an instance: `local real_time_timeseries = client:RealTimeTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `number` |  |
| `date` | `string` |  |
| `value` | `number` |  |

#### Example: List

```lua
local real_time_timeseriess, err = client:RealTimeTimeseries():list()
```


### SignalLiveStreamComplete

Create an instance: `local signal_live_stream_complete = client:SignalLiveStreamComplete(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### SigningKey

Create an instance: `local signing_key = client:SigningKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Time at which the object was created. |
| `data` | `table` |  |
| `id` | `string` | Unique identifier for the Signing Key. |
| `private_key` | `string` | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

#### Example: Load

```lua
local signing_key, err = client:SigningKey():load({ id = "signing_key_id" })
```

#### Example: List

```lua
local signing_keys, err = client:SigningKey():list()
```

#### Example: Create

```lua
local signing_key, err = client:SigningKey():create({
  created_at = "example_created_at", -- string
  id = "example_id", -- string
})
```


### SimulcastTarget

Create an instance: `local simulcast_target = client:SimulcastTarget(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error_severity` | `string` | The severity of the error encountered by the simulcast target. |
| `id` | `string` | ID of the Simulcast Target |
| `passthrough` | `string` | Arbitrary user-supplied metadata set when creating a simulcast target. |
| `status` | `string` | The current status of the simulcast target. |
| `stream_key` | `string` | Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. |
| `url` | `string` | The RTMP(s) or SRT endpoint for a simulcast destination. |

#### Example: Load

```lua
local simulcast_target, err = client:SimulcastTarget():load({ id = "simulcast_target_id", live_stream_id = "live_stream_id" })
```

#### Example: Create

```lua
local simulcast_target, err = client:SimulcastTarget():create({
  live_stream_id = "example_live_stream_id", -- string
  id = "example_id", -- string
  status = "example_status", -- string
  url = "example_url", -- string
})
```


### StaticRendition

Create an instance: `local static_rendition = client:StaticRendition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the static rendition. |
| `resolution` | `string` |  |

#### Example: Create

```lua
local static_rendition, err = client:StaticRendition():create({
  asset_id = "example_asset_id", -- string
  resolution = "example_resolution", -- string
})
```


### SubviewBreakdownTimeseries

Create an instance: `local subview_breakdown_timeseries = client:SubviewBreakdownTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `status` | `string` |  |
| `values` | `table` |  |

#### Example: List

```lua
local subview_breakdown_timeseriess, err = client:SubviewBreakdownTimeseries():list()
```


### SubviewOverallValue

Create an instance: `local subview_overall_value = client:SubviewOverallValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `meta` | `table` |  |
| `timeframe` | `table` |  |
| `total_row_count` | `number` | Always `null` for this endpoint — a single aggregate value has no row count. |

#### Example: List

```lua
local subview_overall_values, err = client:SubviewOverallValue():list()
```


### Summarize

Create an instance: `local summarize = client:Summarize(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local summarize, err = client:Summarize():load({ id = "summarize_id" })
```

#### Example: Create

```lua
local summarize, err = client:Summarize():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  outputs = {}, -- table
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### TranscriptionVocabulary

Create an instance: `local transcription_vocabulary = client:TranscriptionVocabulary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Unique identifier for the Transcription Vocabulary |
| `name` | `string` | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `table` | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `updated_at` | `string` | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

#### Example: Load

```lua
local transcription_vocabulary, err = client:TranscriptionVocabulary():load({ id = "transcription_vocabulary_id" })
```

#### Example: List

```lua
local transcription_vocabularys, err = client:TranscriptionVocabulary():list()
```

#### Example: Create

```lua
local transcription_vocabulary, err = client:TranscriptionVocabulary():create({
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  updated_at = "example_updated_at", -- string
})
```


### TranslateAudio

Create an instance: `local translate_audio = client:TranslateAudio(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local translate_audio, err = client:TranslateAudio():load({ id = "translate_audio_id" })
```

#### Example: Create

```lua
local translate_audio, err = client:TranslateAudio():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### TranslateCaption

Create an instance: `local translate_caption = client:TranslateCaption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `table` | The directive run that dispatched this job. |
| `errors` | `table` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `table` | Workflow results. |
| `parameters` | `table` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `table` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```lua
local translate_caption, err = client:TranslateCaption():load({ id = "translate_caption_id" })
```

#### Example: Create

```lua
local translate_caption, err = client:TranslateCaption():create({
  created_at = 1, -- number
  directive = {}, -- table
  id = "example_id", -- string
  parameters = {}, -- table
  resources = {}, -- table
  status = "example_status", -- string
  units_consumed = 1, -- number
  updated_at = 1, -- number
  workflow = "example_workflow", -- string
})
```


### UpdateAssetTrack

Create an instance: `local update_asset_track = client:UpdateAssetTrack(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_language_confidence` | `number` | The confidence value (0-1) of the determined language. |
| `closed_captions` | `boolean` | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `duration` | `number` | The duration in seconds of the track media. |
| `id` | `string` | Unique identifier for the Track |
| `language_code` | `string` | The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'. |
| `max_channels` | `number` | The maximum number of audio channels the track supports. |
| `max_frame_rate` | `number` | The maximum frame rate available for the track. |
| `max_height` | `number` | The maximum height in pixels available for the track. |
| `max_width` | `number` | The maximum width in pixels available for the track. |
| `name` | `string` | The name of the track containing a human-readable description. |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `primary` | `boolean` | For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset. |
| `status` | `string` | The status of the track. |
| `text_source` | `string` | The source of the text contained in a Track of type `text`. |
| `text_type` | `string` | This parameter is only set for `text` type tracks. |
| `type` | `string` | The type of track |


### Upload

Create an instance: `local upload = client:Upload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_id` | `string` | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `string` | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `table` | Only set if an error occurred during asset creation. |
| `id` | `string` | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `table` |  |
| `status` | `string` |  |
| `test` | `boolean` | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | `number` | Max time in seconds for the signed upload URL to be valid. |
| `url` | `string` | The URL to upload the associated source media to. |

#### Example: Load

```lua
local upload, err = client:Upload():load({ id = "upload_id" })
```

#### Example: List

```lua
local uploads, err = client:Upload():list()
```

#### Example: Create

```lua
local upload, err = client:Upload():create({
  cors_origin = "example_cors_origin", -- string
  id = "example_id", -- string
  status = "example_status", -- string
  timeout = 1, -- number
})
```


### UrlSigningKey

Create an instance: `local url_signing_key = client:UrlSigningKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### UsageExport

Create an instance: `local usage_export = client:UsageExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `download_url` | `string` | A pre-signed URL to download the CSV. |
| `download_url_expires_at` | `number` | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `file_size` | `number` | Uncompressed size of the CSV file in bytes. |

#### Example: List

```lua
local usage_exports, err = client:UsageExport():list()
```


### VideoView

Create an instance: `local video_view = client:VideoView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country_code` | `string` |  |
| `data` | `table` |  |
| `error_type_id` | `number` |  |
| `id` | `string` |  |
| `playback_failure` | `boolean` |  |
| `player_error_code` | `string` |  |
| `player_error_message` | `string` |  |
| `timeframe` | `table` |  |
| `total_row_count` | `number` |  |
| `video_title` | `string` |  |
| `view_end` | `string` |  |
| `view_start` | `string` |  |
| `viewer_application_name` | `string` |  |
| `viewer_experience_score` | `number` |  |
| `viewer_os_family` | `string` |  |
| `watch_time` | `number` |  |

#### Example: Load

```lua
local video_view, err = client:VideoView():load({ id = "video_view_id" })
```

#### Example: List

```lua
local video_views, err = client:VideoView():list()
```


### Webhook

Create an instance: `local webhook = client:Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The URL where Mux sends webhook notifications. |
| `created_at` | `string` | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | `boolean` | Whether Mux attempts to deliver notifications to this webhook. |
| `id` | `string` | Unique identifier for the webhook. |
| `signing_secret` | `string` | Secret used to verify that webhook payloads were sent by Mux. |

#### Example: Load

```lua
local webhook, err = client:Webhook():load({ id = "webhook_id" })
```

#### Example: List

```lua
local webhooks, err = client:Webhook():list()
```

#### Example: Create

```lua
local webhook, err = client:Webhook():create({
  address = "example_address", -- string
  created_at = "example_created_at", -- string
  enabled = true, -- boolean
  id = "example_id", -- string
})
```


### WhoAmI

Create an instance: `local who_am_i = client:WhoAmI(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token_name` | `string` |  |
| `environment_id` | `string` |  |
| `environment_name` | `string` |  |
| `environment_type` | `string` |  |
| `organization_id` | `string` |  |
| `organization_name` | `string` |  |
| `permissions` | `table` |  |

#### Example: Load

```lua
local who_am_i, err = client:WhoAmI():load()
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

Features are the extension mechanism. A feature is a Lua table
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

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── mux_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`mux_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local realtimebreakdown = client:RealTimeBreakdown()
realtimebreakdown:list()

-- realtimebreakdown:data_get() now returns the realtimebreakdown data from the last list
-- realtimebreakdown:match_get() returns the last match criteria
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
