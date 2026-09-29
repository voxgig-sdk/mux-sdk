# Mux TypeScript SDK



The TypeScript SDK for the Mux API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Annotation()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/mux-sdk/releases)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/mux-sdk
npm install ./mux-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { MuxSDK } from '@voxgig-sdk/mux-sdk'

const client = new MuxSDK({
  apikey: process.env.MUX_APIKEY,
  secret: process.env.MUX_SECRET,
})
```

### 2. List annotation records

`list()` resolves to an array of Annotation ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const annotations = await client.Annotation().list()

for (const annotation of annotations) {
  console.log(annotation)
}
```

### 3. Load an assetplaybackid

AssetPlaybackId is nested under asset, so provide the `asset_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const assetplaybackid = await client.AssetPlaybackId().load({
    asset_id: 'example_asset_id',
    id: 'example_id',
  })
  console.log(assetplaybackid)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created Annotation ENTITY (.data() for the record)
const created = await client.Annotation().create({
  date: 'example_date',
  id: 'example_id',
  note: 'example_note',
})

// Update — the id comes off the returned entity's data()
const updated = await client.Annotation().update({
  id: created.data().id!,
  date: 'example_date',
  note: 'example_note',
})

// Remove
await client.Annotation().remove({
  id: created.data().id!,
})
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const realtimebreakdowns = await client.RealTimeBreakdown().list()
  console.log(realtimebreakdowns)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = MuxSDK.test()

const realtimebreakdown = await client.RealTimeBreakdown().list()
// realtimebreakdown is the entity, populated with mock response data
// — call realtimebreakdown.data() for the record itself
console.log(realtimebreakdown)
```

You can also use the instance method:

```ts
const client = new MuxSDK({ apikey: '...', secret: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.RealTimeBreakdown()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new MuxSDK({
  apikey: '...',
  secret: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
MUX_TEST_LIVE=TRUE
MUX_APIKEY=<your-key>
MUX_SECRET=<your-secret>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### MuxSDK

#### Constructor

```ts
new MuxSDK(options?: {
  apikey?: string
  secret?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `secret` | `string` | API secret for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Annotation(data?)` | `AnnotationEntity` | Create an Annotation entity instance. |
| `AskQuestion(data?)` | `AskQuestionEntity` | Create an AskQuestion entity instance. |
| `Asset(data?)` | `AssetEntity` | Create an Asset entity instance. |
| `AssetOrLiveStreamId(data?)` | `AssetOrLiveStreamIdEntity` | Create an AssetOrLiveStreamId entity instance. |
| `AssetPlaybackId(data?)` | `AssetPlaybackIdEntity` | Create an AssetPlaybackId entity instance. |
| `AssetShot(data?)` | `AssetShotEntity` | Create an AssetShot entity instance. |
| `CreatePlaybackId(data?)` | `CreatePlaybackIdEntity` | Create a CreatePlaybackId entity instance. |
| `CreateTrack(data?)` | `CreateTrackEntity` | Create a CreateTrack entity instance. |
| `Directive(data?)` | `DirectiveEntity` | Create a Directive entity instance. |
| `DirectiveRunDetail(data?)` | `DirectiveRunDetailEntity` | Create a DirectiveRunDetail entity instance. |
| `DrmConfiguration(data?)` | `DrmConfigurationEntity` | Create a DrmConfiguration entity instance. |
| `EditCaption(data?)` | `EditCaptionEntity` | Create an EditCaption entity instance. |
| `EngagementHeatmap(data?)` | `EngagementHeatmapEntity` | Create an EngagementHeatmap entity instance. |
| `EngagementHotspot(data?)` | `EngagementHotspotEntity` | Create an EngagementHotspot entity instance. |
| `FindBestThumbnail(data?)` | `FindBestThumbnailEntity` | Create a FindBestThumbnail entity instance. |
| `FindKeyMoment(data?)` | `FindKeyMomentEntity` | Create a FindKeyMoment entity instance. |
| `FindScene(data?)` | `FindSceneEntity` | Create a FindScene entity instance. |
| `GenerateAssetShot(data?)` | `GenerateAssetShotEntity` | Create a GenerateAssetShot entity instance. |
| `GenerateChapter(data?)` | `GenerateChapterEntity` | Create a GenerateChapter entity instance. |
| `GenerateEngagementInsight(data?)` | `GenerateEngagementInsightEntity` | Create a GenerateEngagementInsight entity instance. |
| `GeneratePremiumCaption(data?)` | `GeneratePremiumCaptionEntity` | Create a GeneratePremiumCaption entity instance. |
| `GenerateTrackSubtitle(data?)` | `GenerateTrackSubtitleEntity` | Create a GenerateTrackSubtitle entity instance. |
| `Incident(data?)` | `IncidentEntity` | Create an Incident entity instance. |
| `InputInfo(data?)` | `InputInfoEntity` | Create an InputInfo entity instance. |
| `JobSummary(data?)` | `JobSummaryEntity` | Create a JobSummary entity instance. |
| `ListAllMetricValue(data?)` | `ListAllMetricValueEntity` | Create a ListAllMetricValue entity instance. |
| `ListBreakdownValue(data?)` | `ListBreakdownValueEntity` | Create a ListBreakdownValue entity instance. |
| `ListDeliveryUsage(data?)` | `ListDeliveryUsageEntity` | Create a ListDeliveryUsage entity instance. |
| `ListDimensionValue(data?)` | `ListDimensionValueEntity` | Create a ListDimensionValue entity instance. |
| `ListError(data?)` | `ListErrorEntity` | Create a ListError entity instance. |
| `ListExport(data?)` | `ListExportEntity` | Create a ListExport entity instance. |
| `ListFilterValue(data?)` | `ListFilterValueEntity` | Create a ListFilterValue entity instance. |
| `ListInsight(data?)` | `ListInsightEntity` | Create a ListInsight entity instance. |
| `ListMonitoringDimension(data?)` | `ListMonitoringDimensionEntity` | Create a ListMonitoringDimension entity instance. |
| `ListMonitoringMetric(data?)` | `ListMonitoringMetricEntity` | Create a ListMonitoringMetric entity instance. |
| `ListRealTimeDimension(data?)` | `ListRealTimeDimensionEntity` | Create a ListRealTimeDimension entity instance. |
| `ListRealTimeMetric(data?)` | `ListRealTimeMetricEntity` | Create a ListRealTimeMetric entity instance. |
| `ListRelatedIncident(data?)` | `ListRelatedIncidentEntity` | Create a ListRelatedIncident entity instance. |
| `ListSubviewBreakdownValue(data?)` | `ListSubviewBreakdownValueEntity` | Create a ListSubviewBreakdownValue entity instance. |
| `ListSubviewComparisonValue(data?)` | `ListSubviewComparisonValueEntity` | Create a ListSubviewComparisonValue entity instance. |
| `ListSubviewDimension(data?)` | `ListSubviewDimensionEntity` | Create a ListSubviewDimension entity instance. |
| `ListSubviewDimensionValue(data?)` | `ListSubviewDimensionValueEntity` | Create a ListSubviewDimensionValue entity instance. |
| `ListVideoViewExport(data?)` | `ListVideoViewExportEntity` | Create a ListVideoViewExport entity instance. |
| `LiveStream(data?)` | `LiveStreamEntity` | Create a LiveStream entity instance. |
| `LiveStreamPlaybackId(data?)` | `LiveStreamPlaybackIdEntity` | Create a LiveStreamPlaybackId entity instance. |
| `MetricTimeseriesData(data?)` | `MetricTimeseriesDataEntity` | Create a MetricTimeseriesData entity instance. |
| `Moderate(data?)` | `ModerateEntity` | Create a Moderate entity instance. |
| `MonitoringBreakdown(data?)` | `MonitoringBreakdownEntity` | Create a MonitoringBreakdown entity instance. |
| `MonitoringBreakdownTimeseries(data?)` | `MonitoringBreakdownTimeseriesEntity` | Create a MonitoringBreakdownTimeseries entity instance. |
| `MonitoringHistogramTimeseries(data?)` | `MonitoringHistogramTimeseriesEntity` | Create a MonitoringHistogramTimeseries entity instance. |
| `MonitoringTimeseries(data?)` | `MonitoringTimeseriesEntity` | Create a MonitoringTimeseries entity instance. |
| `Overall(data?)` | `OverallEntity` | Create an Overall entity instance. |
| `PlaybackRestriction(data?)` | `PlaybackRestrictionEntity` | Create a PlaybackRestriction entity instance. |
| `RealTimeBreakdown(data?)` | `RealTimeBreakdownEntity` | Create a RealTimeBreakdown entity instance. |
| `RealTimeHistogramTimeseries(data?)` | `RealTimeHistogramTimeseriesEntity` | Create a RealTimeHistogramTimeseries entity instance. |
| `RealTimeTimeseries(data?)` | `RealTimeTimeseriesEntity` | Create a RealTimeTimeseries entity instance. |
| `SignalLiveStreamComplete(data?)` | `SignalLiveStreamCompleteEntity` | Create a SignalLiveStreamComplete entity instance. |
| `SigningKey(data?)` | `SigningKeyEntity` | Create a SigningKey entity instance. |
| `SimulcastTarget(data?)` | `SimulcastTargetEntity` | Create a SimulcastTarget entity instance. |
| `StaticRendition(data?)` | `StaticRenditionEntity` | Create a StaticRendition entity instance. |
| `SubviewBreakdownTimeseries(data?)` | `SubviewBreakdownTimeseriesEntity` | Create a SubviewBreakdownTimeseries entity instance. |
| `SubviewOverallValue(data?)` | `SubviewOverallValueEntity` | Create a SubviewOverallValue entity instance. |
| `Summarize(data?)` | `SummarizeEntity` | Create a Summarize entity instance. |
| `TranscriptionVocabulary(data?)` | `TranscriptionVocabularyEntity` | Create a TranscriptionVocabulary entity instance. |
| `TranslateAudio(data?)` | `TranslateAudioEntity` | Create a TranslateAudio entity instance. |
| `TranslateCaption(data?)` | `TranslateCaptionEntity` | Create a TranslateCaption entity instance. |
| `UpdateAssetTrack(data?)` | `UpdateAssetTrackEntity` | Create an UpdateAssetTrack entity instance. |
| `Upload(data?)` | `UploadEntity` | Create an Upload entity instance. |
| `UrlSigningKey(data?)` | `UrlSigningKeyEntity` | Create an UrlSigningKey entity instance. |
| `UsageExport(data?)` | `UsageExportEntity` | Create an UsageExport entity instance. |
| `VideoView(data?)` | `VideoViewEntity` | Create a VideoView entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `WhoAmI(data?)` | `WhoAmIEntity` | Create a WhoAmI entity instance. |
| `tester(testopts?, sdkopts?)` | `MuxSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `MuxSDK.test(testopts?, sdkopts?)` | `MuxSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): MuxSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Annotation

| Field | Description |
| --- | --- |
| `date` | Datetime when the annotation applies |
| `id` | Unique identifier for the annotation |
| `note` | The annotation note content |
| `sub_property_id` | Customer-defined sub-property identifier |

Operations: create, list, load, remove, update.

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

Operations: create, load.

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

Operations: create, list, load, remove, update.

API path: `/video/v1/assets`

#### AssetOrLiveStreamId

| Field | Description |
| --- | --- |
| `id` | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: load.

API path: `/video/v1/playback-ids/{PLAYBACK_ID}`

#### AssetPlaybackId

| Field | Description |
| --- | --- |
| `drm_configuration_id` | The DRM configuration used by this playback ID. |
| `id` | Unique identifier for the PlaybackID |
| `policy` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: load.

API path: `/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}`

#### AssetShot

| Field | Description |
| --- | --- |
| `errors` | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | The status of the shot detection process |

Operations: load.

API path: `/video/v1/assets/{ASSET_ID}/shots`

#### CreatePlaybackId

| Field | Description |
| --- | --- |
| `drm_configuration_id` | The DRM configuration used by this playback ID. |
| `policy` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: create.

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

Operations: create.

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

Operations: create, list, load, remove.

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

Operations: list, load.

API path: `/robots/v0/directives/{DIRECTIVE_ID}/runs`

#### DrmConfiguration

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the DRM Configuration. |

Operations: list, load.

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

Operations: create, load.

API path: `/robots/v0/jobs/edit-captions`

#### EngagementHeatmap

| Field | Description |
| --- | --- |
| `data` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: list.

API path: `/data/v1/engagement/assets/{ASSET_ID}/heatmap`

#### EngagementHotspot

| Field | Description |
| --- | --- |
| `data` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: list.

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

Operations: create, load.

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

Operations: create, load.

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

Operations: create, load.

API path: `/robots/v0/jobs/find-scenes`

#### GenerateAssetShot

| Field | Description |
| --- | --- |
| `data` |  |

Operations: create.

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

Operations: create, load.

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

Operations: create, load.

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

Operations: create, load.

API path: `/robots/v0/jobs/generate-premium-captions`

#### GenerateTrackSubtitle

| Field | Description |
| --- | --- |
| `generated_subtitles` | Generate subtitle tracks using automatic speech recognition with this configuration. |

Operations: create.

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

Operations: list, load.

API path: `/data/v1/incidents`

#### InputInfo

| Field | Description |
| --- | --- |
| `file` |  |
| `settings` | An array of objects that each describe an input file to be used to create the asset. |

Operations: list.

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

Operations: create, list.

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

Operations: list.

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

Operations: list.

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

Operations: list.

API path: `/video/v1/delivery-usage`

#### ListDimensionValue

| Field | Description |
| --- | --- |
| `data` |  |
| `timeframe` |  |
| `total_count` |  |
| `total_row_count` |  |
| `value` |  |

Operations: list, load.

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

Operations: list.

API path: `/data/v1/errors`

#### ListExport

| Field | Description |
| --- | --- |
| `data` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: list.

API path: `/data/v1/exports`

#### ListFilterValue

| Field | Description |
| --- | --- |
| `data` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: list, load.

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

Operations: list.

API path: `/data/v1/metrics/{METRIC_ID}/insights`

#### ListMonitoringDimension

| Field | Description |
| --- | --- |
| `display_name` |  |
| `name` |  |

Operations: list.

API path: `/data/v1/monitoring/dimensions`

#### ListMonitoringMetric

| Field | Description |
| --- | --- |
| `display_name` |  |
| `name` |  |

Operations: list.

API path: `/data/v1/monitoring/metrics`

#### ListRealTimeDimension

| Field | Description |
| --- | --- |
| `display_name` |  |
| `name` |  |

Operations: list.

API path: `/data/v1/realtime/dimensions`

#### ListRealTimeMetric

| Field | Description |
| --- | --- |
| `display_name` |  |
| `name` |  |

Operations: list.

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

Operations: list.

API path: `/data/v1/incidents/{INCIDENT_ID}/related`

#### ListSubviewBreakdownValue

| Field | Description |
| --- | --- |
| `breakdown_value` |  |
| `metric_value` |  |

Operations: list.

API path: `/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown`

#### ListSubviewComparisonValue

| Field | Description |
| --- | --- |
| `dimension_value` |  |
| `values` |  |

Operations: list.

API path: `/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/comparison`

#### ListSubviewDimension

| Field | Description |
| --- | --- |
| `data` |  |
| `total_row_count` | Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count. |

Operations: load.

API path: `/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions`

#### ListSubviewDimensionValue

| Field | Description |
| --- | --- |
| `data` |  |
| `meta` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: load.

API path: `/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions/{DIMENSION_NAME}`

#### ListVideoViewExport

| Field | Description |
| --- | --- |
| `export_date` |  |
| `files` |  |

Operations: list.

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

Operations: create, list, load, remove, update.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key`

#### LiveStreamPlaybackId

| Field | Description |
| --- | --- |
| `drm_configuration_id` | The DRM configuration used by this playback ID. |
| `id` | Unique identifier for the PlaybackID |
| `policy` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: load.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}`

#### MetricTimeseriesData

| Field | Description |
| --- | --- |
| `data` |  |
| `meta` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: list.

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

Operations: create, load.

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

Operations: list.

API path: `/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown`

#### MonitoringBreakdownTimeseries

| Field | Description |
| --- | --- |
| `date` |  |
| `values` |  |

Operations: list.

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

Operations: list.

API path: `/data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries`

#### MonitoringTimeseries

| Field | Description |
| --- | --- |
| `concurrent_viewers` |  |
| `date` |  |
| `value` |  |

Operations: list.

API path: `/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries`

#### Overall

| Field | Description |
| --- | --- |
| `data` |  |
| `meta` |  |
| `timeframe` |  |
| `total_row_count` |  |

Operations: list.

API path: `/data/v1/metrics/{METRIC_ID}/overall`

#### PlaybackRestriction

| Field | Description |
| --- | --- |
| `created_at` | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | Unique identifier for the Playback Restriction. |
| `referrer` | A list of domains allowed to play your videos. |
| `updated_at` | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | Rules that control what user agents are allowed to play your videos. |

Operations: create, list, load, remove, update.

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

Operations: list.

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

Operations: list.

API path: `/data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries`

#### RealTimeTimeseries

| Field | Description |
| --- | --- |
| `concurrent_viewers` |  |
| `date` |  |
| `value` |  |

Operations: list.

API path: `/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries`

#### SignalLiveStreamComplete

| Field | Description |
| --- | --- |

Operations: update.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/complete`

#### SigningKey

| Field | Description |
| --- | --- |
| `created_at` | Time at which the object was created. |
| `data` |  |
| `id` | Unique identifier for the Signing Key. |
| `private_key` | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

Operations: create, list, load, remove.

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

Operations: create, load.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets`

#### StaticRendition

| Field | Description |
| --- | --- |
| `passthrough` | Arbitrary user-supplied metadata set for the static rendition. |
| `resolution` |  |

Operations: create.

API path: `/video/v1/assets/{ASSET_ID}/static-renditions`

#### SubviewBreakdownTimeseries

| Field | Description |
| --- | --- |
| `date` |  |
| `status` |  |
| `values` |  |

Operations: list.

API path: `/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown-timeseries`

#### SubviewOverallValue

| Field | Description |
| --- | --- |
| `data` |  |
| `meta` |  |
| `timeframe` |  |
| `total_row_count` | Always `null` for this endpoint — a single aggregate value has no row count. |

Operations: list.

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

Operations: create, load.

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

Operations: create, list, load, remove, update.

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

Operations: create, load.

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

Operations: create, load.

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

Operations: update.

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

Operations: create, list, load, update.

API path: `/video/v1/uploads`

#### UrlSigningKey

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/video/v1/signing-keys/{SIGNING_KEY_ID}`

#### UsageExport

| Field | Description |
| --- | --- |
| `date` | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `download_url` | A pre-signed URL to download the CSV. |
| `download_url_expires_at` | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `file_size` | Uncompressed size of the CSV file in bytes. |

Operations: list.

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

Operations: list, load.

API path: `/data/v1/video-views`

#### Webhook

| Field | Description |
| --- | --- |
| `address` | The URL where Mux sends webhook notifications. |
| `created_at` | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | Whether Mux attempts to deliver notifications to this webhook. |
| `id` | Unique identifier for the webhook. |
| `signing_secret` | Secret used to verify that webhook payloads were sent by Mux. |

Operations: create, list, load, remove, update.

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

Operations: load.

API path: `/system/v1/whoami`



## Entities


### Annotation

Create an instance: `const annotation = client.Annotation()`

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

```ts
const annotation = await client.Annotation().load({ id: 'annotation_id' })
```

#### Example: List

```ts
const annotations = await client.Annotation().list()
```

#### Example: Create

```ts
const annotation = await client.Annotation().create({
  date: 'example_date',
  id: 'example_id',
  note: 'example_note',
})
```


### AskQuestion

Create an instance: `const ask_question = client.AskQuestion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const ask_question = await client.AskQuestion().load({ id: 'ask_question_id' })
```

#### Example: Create

```ts
const ask_question = await client.AskQuestion().create({
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


### Asset

Create an instance: `const asset = client.Asset()`

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
| `data` | `Record<string, any>` |  |
| `directives` | `any[]` | The Mux Robots directives applied to the asset. |
| `duration` | `number` | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `string` | This field is deprecated. |
| `errors` | `Record<string, any>` | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `boolean` | Whether to perform shot detection on this asset. |
| `id` | `string` | Unique identifier for the Asset. |
| `ingest_type` | `string` | The type of ingest used to create the asset. |
| `is_live` | `boolean` | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `string` | Unique identifier for the live stream. |
| `master` | `Record<string, any>` | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `string` |  |
| `max_resolution_tier` | `string` | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `number` | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `string` | This field is deprecated. |
| `meta` | `Record<string, any>` | Customer provided metadata about this asset. |
| `mp4_support` | `string` | Deprecated. |
| `non_standard_input_reasons` | `Record<string, any>` | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `boolean` | Normalize the audio track loudness level. |
| `passthrough` | `string` | You can set this field to anything you want. |
| `playback_ids` | `any[]` | An array of Playback ID objects. |
| `progress` | `Record<string, any>` | Detailed state information about the asset ingest process. |
| `recording_times` | `any[]` | An array of individual live stream recording sessions. |
| `resolution_tier` | `string` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `Record<string, any>` | The results of generating shots on the video |
| `source_asset_id` | `string` | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `Record<string, any>` | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `string` | The status of the asset. |
| `test` | `boolean` | True means this live stream is a test asset. |
| `thumbnail_time` | `number` | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `any[]` | The individual media tracks that make up an asset. |
| `upload_id` | `string` | Unique identifier for the Direct Upload. |
| `video_quality` | `string` | The video quality controls the cost, quality, and available platform features for the asset. |

#### Example: Load

```ts
const asset = await client.Asset().load({ id: 'asset_id' })
```

#### Example: List

```ts
const assets = await client.Asset().list()
```

#### Example: Create

```ts
const asset = await client.Asset().create({
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


### AssetOrLiveStreamId

Create an instance: `const asset_or_live_stream_id = client.AssetOrLiveStreamId()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | `Record<string, any>` | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | `string` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Load

```ts
const asset_or_live_stream_id = await client.AssetOrLiveStreamId().load({ playback_id: 'playback_id' })
```


### AssetPlaybackId

Create an instance: `const asset_playback_id = client.AssetPlaybackId()`

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

```ts
const asset_playback_id = await client.AssetPlaybackId().load({ id: 'asset_playback_id_id', asset_id: 'asset_id' })
```


### AssetShot

Create an instance: `const asset_shot = client.AssetShot()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Record<string, any>` | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | `string` | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | `string` | The status of the shot detection process |

#### Example: Load

```ts
const asset_shot = await client.AssetShot().load({ asset_id: 'asset_id' })
```


### CreatePlaybackId

Create an instance: `const create_playback_id = client.CreatePlaybackId()`

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

```ts
const create_playback_id = await client.CreatePlaybackId().create({
  asset_id: 'example_asset_id',
})
```


### CreateTrack

Create an instance: `const create_track = client.CreateTrack()`

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

```ts
const create_track = await client.CreateTrack().create({
  asset_id: 'example_asset_id',
  language_code: 'example_language_code',
  type: 'example_type',
  url: 'example_url',
})
```


### Directive

Create an instance: `const directive = client.Directive()`

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
| `resources` | `any[]` | Resource declarations. |
| `subject` | `Record<string, any>` |  |
| `updated_at` | `number` | Unix timestamp (seconds) when the directive was last updated. |
| `workflows` | `any[]` | Workflow bindings. |

#### Example: Load

```ts
const directive = await client.Directive().load({ id: 'directive_id' })
```

#### Example: List

```ts
const directives = await client.Directive().list()
```

#### Example: Create

```ts
const directive = await client.Directive().create({
  created_at: 1,
  id: 'example_id',
  name: 'example_name',
  resources: [],
  subject: {},
  updated_at: 1,
  workflows: [],
})
```


### DirectiveRunDetail

Create an instance: `const directive_run_detail = client.DirectiveRunDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `number | null` | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `any[]` | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `string` | Unique run identifier (drvrun_...). |
| `started_at` | `number` | Unix timestamp (seconds) when the run started. |
| `status` | `string` | Current run status. |
| `subject_id` | `string` | The bare Mux asset ID this run targeted. |

#### Example: Load

```ts
const directive_run_detail = await client.DirectiveRunDetail().load({ directive_id: 'directive_id', run_id: 'run_id' })
```

#### Example: List

```ts
const directive_run_details = await client.DirectiveRunDetail().list({ directive_id: "example" })
```


### DrmConfiguration

Create an instance: `const drm_configuration = client.DrmConfiguration()`

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

```ts
const drm_configuration = await client.DrmConfiguration().load({ id: 'drm_configuration_id' })
```

#### Example: List

```ts
const drm_configurations = await client.DrmConfiguration().list()
```


### EditCaption

Create an instance: `const edit_caption = client.EditCaption()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const edit_caption = await client.EditCaption().load({ id: 'edit_caption_id' })
```

#### Example: Create

```ts
const edit_caption = await client.EditCaption().create({
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


### EngagementHeatmap

Create an instance: `const engagement_heatmap = client.EngagementHeatmap()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `timeframe` | `any[]` |  |
| `total_row_count` | `number` |  |

#### Example: List

```ts
const engagement_heatmaps = await client.EngagementHeatmap().list({ asset_id: "example" })
```


### EngagementHotspot

Create an instance: `const engagement_hotspot = client.EngagementHotspot()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `timeframe` | `any[]` |  |
| `total_row_count` | `number` |  |

#### Example: List

```ts
const engagement_hotspots = await client.EngagementHotspot().list({ asset_id: "example" })
```


### FindBestThumbnail

Create an instance: `const find_best_thumbnail = client.FindBestThumbnail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const find_best_thumbnail = await client.FindBestThumbnail().load({ id: 'find_best_thumbnail_id' })
```

#### Example: Create

```ts
const find_best_thumbnail = await client.FindBestThumbnail().create({
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


### FindKeyMoment

Create an instance: `const find_key_moment = client.FindKeyMoment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const find_key_moment = await client.FindKeyMoment().load({ id: 'find_key_moment_id' })
```

#### Example: Create

```ts
const find_key_moment = await client.FindKeyMoment().create({
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


### FindScene

Create an instance: `const find_scene = client.FindScene()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const find_scene = await client.FindScene().load({ id: 'find_scene_id' })
```

#### Example: Create

```ts
const find_scene = await client.FindScene().create({
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


### GenerateAssetShot

Create an instance: `const generate_asset_shot = client.GenerateAssetShot()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |

#### Example: Create

```ts
const generate_asset_shot = await client.GenerateAssetShot().create({
  asset_id: 'example_asset_id',
})
```


### GenerateChapter

Create an instance: `const generate_chapter = client.GenerateChapter()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const generate_chapter = await client.GenerateChapter().load({ id: 'generate_chapter_id' })
```

#### Example: Create

```ts
const generate_chapter = await client.GenerateChapter().create({
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


### GenerateEngagementInsight

Create an instance: `const generate_engagement_insight = client.GenerateEngagementInsight()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const generate_engagement_insight = await client.GenerateEngagementInsight().load({ id: 'generate_engagement_insight_id' })
```

#### Example: Create

```ts
const generate_engagement_insight = await client.GenerateEngagementInsight().create({
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


### GeneratePremiumCaption

Create an instance: `const generate_premium_caption = client.GeneratePremiumCaption()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const generate_premium_caption = await client.GeneratePremiumCaption().load({ id: 'generate_premium_caption_id' })
```

#### Example: Create

```ts
const generate_premium_caption = await client.GeneratePremiumCaption().create({
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


### GenerateTrackSubtitle

Create an instance: `const generate_track_subtitle = client.GenerateTrackSubtitle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generated_subtitles` | `any[]` | Generate subtitle tracks using automatic speech recognition with this configuration. |

#### Example: Create

```ts
const generate_track_subtitle = await client.GenerateTrackSubtitle().create({
  asset_id: 'example_asset_id',
  track_id: 'example_track_id',
  generated_subtitles: [],
})
```


### Incident

Create an instance: `const incident = client.Incident()`

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
| `breakdowns` | `any[]` |  |
| `data` | `Record<string, any>` |  |
| `description` | `string` |  |
| `error_description` | `string` |  |
| `id` | `string` |  |
| `impact` | `string` |  |
| `incident_key` | `string` |  |
| `measured_value` | `number` |  |
| `measured_value_on_close` | `number` |  |
| `measurement` | `string` |  |
| `notification_rules` | `any[]` |  |
| `notifications` | `any[]` |  |
| `resolved_at` | `string` |  |
| `sample_size` | `number` |  |
| `sample_size_unit` | `string` |  |
| `severity` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `threshold` | `number` |  |
| `timeframe` | `any[]` |  |
| `total_row_count` | `number` |  |

#### Example: Load

```ts
const incident = await client.Incident().load({ id: 'incident_id' })
```

#### Example: List

```ts
const incidents = await client.Incident().list()
```


### InputInfo

Create an instance: `const input_info = client.InputInfo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `Record<string, any>` |  |
| `settings` | `Record<string, any>` | An array of objects that each describe an input file to be used to create the asset. |

#### Example: List

```ts
const input_infos = await client.InputInfo().list({ asset_id: "example" })
```


### JobSummary

Create an instance: `const job_summary = client.JobSummary()`

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
| `links` | `Record<string, any>` | Hypermedia links for this job. |
| `status` | `string` | Current job status. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Workflow type that created this job. |

#### Example: List

```ts
const job_summarys = await client.JobSummary().list()
```

#### Example: Create

```ts
const job_summary = await client.JobSummary().create({
  job_id: 'example_job_id',
  created_at: 1,
  id: 'example_id',
  links: {},
  status: 'example_status',
  updated_at: 1,
  workflow: 'example_workflow',
})
```


### ListAllMetricValue

Create an instance: `const list_all_metric_value = client.ListAllMetricValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ended_views` | `number` |  |
| `items` | `any[]` |  |
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

```ts
const list_all_metric_values = await client.ListAllMetricValue().list()
```


### ListBreakdownValue

Create an instance: `const list_breakdown_value = client.ListBreakdownValue()`

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

```ts
const list_breakdown_values = await client.ListBreakdownValue().list({ metric_id: "example" })
```


### ListDeliveryUsage

Create an instance: `const list_delivery_usage = client.ListDeliveryUsage()`

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
| `delivered_seconds_by_resolution` | `Record<string, any>` | Seconds delivered broken into resolution tiers. |
| `live_stream_id` | `string` | Unique identifier for the live stream that created the asset. |
| `passthrough` | `string` | The `passthrough` value for the asset. |

#### Example: List

```ts
const list_delivery_usages = await client.ListDeliveryUsage().list()
```


### ListDimensionValue

Create an instance: `const list_dimension_value = client.ListDimensionValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `timeframe` | `any[]` |  |
| `total_count` | `number` |  |
| `total_row_count` | `number` |  |
| `value` | `string` |  |

#### Example: Load

```ts
const list_dimension_value = await client.ListDimensionValue().load({ dimension_id: 'dimension_id' })
```

#### Example: List

```ts
const list_dimension_values = await client.ListDimensionValue().list()
```


### ListError

Create an instance: `const list_error = client.ListError()`

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

```ts
const list_errors = await client.ListError().list()
```


### ListExport

Create an instance: `const list_export = client.ListExport()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `timeframe` | `any[]` |  |
| `total_row_count` | `number` |  |

#### Example: List

```ts
const list_exports = await client.ListExport().list()
```


### ListFilterValue

Create an instance: `const list_filter_value = client.ListFilterValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `timeframe` | `any[]` |  |
| `total_row_count` | `number` |  |

#### Example: Load

```ts
const list_filter_value = await client.ListFilterValue().load({ filter_id: 'filter_id' })
```

#### Example: List

```ts
const list_filter_values = await client.ListFilterValue().list()
```


### ListInsight

Create an instance: `const list_insight = client.ListInsight()`

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

```ts
const list_insights = await client.ListInsight().list({ metric_id: "example" })
```


### ListMonitoringDimension

Create an instance: `const list_monitoring_dimension = client.ListMonitoringDimension()`

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

```ts
const list_monitoring_dimensions = await client.ListMonitoringDimension().list()
```


### ListMonitoringMetric

Create an instance: `const list_monitoring_metric = client.ListMonitoringMetric()`

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

```ts
const list_monitoring_metrics = await client.ListMonitoringMetric().list()
```


### ListRealTimeDimension

Create an instance: `const list_real_time_dimension = client.ListRealTimeDimension()`

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

```ts
const list_real_time_dimensions = await client.ListRealTimeDimension().list()
```


### ListRealTimeMetric

Create an instance: `const list_real_time_metric = client.ListRealTimeMetric()`

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

```ts
const list_real_time_metrics = await client.ListRealTimeMetric().list()
```


### ListRelatedIncident

Create an instance: `const list_related_incident = client.ListRelatedIncident()`

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
| `breakdowns` | `any[]` |  |
| `description` | `string` |  |
| `error_description` | `string` |  |
| `id` | `string` |  |
| `impact` | `string` |  |
| `incident_key` | `string` |  |
| `measured_value` | `number` |  |
| `measured_value_on_close` | `number` |  |
| `measurement` | `string` |  |
| `notification_rules` | `any[]` |  |
| `notifications` | `any[]` |  |
| `resolved_at` | `string` |  |
| `sample_size` | `number` |  |
| `sample_size_unit` | `string` |  |
| `severity` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `threshold` | `number` |  |

#### Example: List

```ts
const list_related_incidents = await client.ListRelatedIncident().list({ incident_id: "example" })
```


### ListSubviewBreakdownValue

Create an instance: `const list_subview_breakdown_value = client.ListSubviewBreakdownValue()`

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

```ts
const list_subview_breakdown_values = await client.ListSubviewBreakdownValue().list({ subview_metric_id: "example", subview_type: "example" })
```


### ListSubviewComparisonValue

Create an instance: `const list_subview_comparison_value = client.ListSubviewComparisonValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dimension_value` | `string` |  |
| `values` | `any[]` |  |

#### Example: List

```ts
const list_subview_comparison_values = await client.ListSubviewComparisonValue().list({ subview_metric_id: "example", subview_type: "example", dimension: "example", value: [] })
```


### ListSubviewDimension

Create an instance: `const list_subview_dimension = client.ListSubviewDimension()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `total_row_count` | `number` | Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count. |

#### Example: Load

```ts
const list_subview_dimension = await client.ListSubviewDimension().load({ subview_type: 'subview_type' })
```


### ListSubviewDimensionValue

Create an instance: `const list_subview_dimension_value = client.ListSubviewDimensionValue()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `meta` | `any` |  |
| `timeframe` | `any[]` |  |
| `total_row_count` | `number` |  |

#### Example: Load

```ts
const list_subview_dimension_value = await client.ListSubviewDimensionValue().load({ dimension_name: 'dimension_name', subview_metric_id: 'subview_metric_id' })
```


### ListVideoViewExport

Create an instance: `const list_video_view_export = client.ListVideoViewExport()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `export_date` | `string` |  |
| `files` | `any[]` |  |

#### Example: List

```ts
const list_video_view_exports = await client.ListVideoViewExport().list()
```


### LiveStream

Create an instance: `const live_stream = client.LiveStream()`

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
| `advanced_playback_policies` | `any[]` | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `audio_only` | `boolean` | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `string` | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `any[]` | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `any[]` | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `string` | Unique identifier for the Live Stream. |
| `latency_mode` | `string` | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `boolean` | This field is deprecated. |
| `max_continuous_duration` | `number` | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `Record<string, any>` | Customer provided metadata about this live stream. |
| `new_asset_settings` | `Record<string, any>` | Updates the new asset settings to use to generate a new asset for this live stream. |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `any[]` | An array of Playback ID objects. |
| `playback_policies` | `any[]` | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `playback_policy` | `any[]` | Deprecated. |
| `recent_asset_ids` | `any[]` | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `string` | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `number` | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `boolean` | This field is deprecated. |
| `simulcast_targets` | `any[]` | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | `string` | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `string` | `idle` indicates that there is no active broadcast. |
| `stream_key` | `string` | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | `boolean` | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | `boolean` | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

#### Example: Load

```ts
const live_stream = await client.LiveStream().load({ id: 'live_stream_id' })
```

#### Example: List

```ts
const live_streams = await client.LiveStream().list()
```

#### Example: Create

```ts
const live_stream = await client.LiveStream().create({
  created_at: 'example_created_at',
  id: 'example_id',
  latency_mode: 'example_latency_mode',
  max_continuous_duration: 1,
  status: 'example_status',
  stream_key: 'example_stream_key',
})
```


### LiveStreamPlaybackId

Create an instance: `const live_stream_playback_id = client.LiveStreamPlaybackId()`

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

```ts
const live_stream_playback_id = await client.LiveStreamPlaybackId().load({ id: 'live_stream_playback_id_id', live_stream_id: 'live_stream_id' })
```


### MetricTimeseriesData

Create an instance: `const metric_timeseries_data = client.MetricTimeseriesData()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `meta` | `Record<string, any>` |  |
| `timeframe` | `any[]` |  |
| `total_row_count` | `number` |  |

#### Example: List

```ts
const metric_timeseries_datas = await client.MetricTimeseriesData().list({ metric_id: "example" })
```


### Moderate

Create an instance: `const moderate = client.Moderate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const moderate = await client.Moderate().load({ id: 'moderate_id' })
```

#### Example: Create

```ts
const moderate = await client.Moderate().create({
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


### MonitoringBreakdown

Create an instance: `const monitoring_breakdown = client.MonitoringBreakdown()`

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

```ts
const monitoring_breakdowns = await client.MonitoringBreakdown().list({ monitoring_metric_id: "example" })
```


### MonitoringBreakdownTimeseries

Create an instance: `const monitoring_breakdown_timeseries = client.MonitoringBreakdownTimeseries()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `values` | `any[]` |  |

#### Example: List

```ts
const monitoring_breakdown_timeseriess = await client.MonitoringBreakdownTimeseries().list({ monitoring_metric_id: "example" })
```


### MonitoringHistogramTimeseries

Create an instance: `const monitoring_histogram_timeseries = client.MonitoringHistogramTimeseries()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average` | `number` |  |
| `bucket_values` | `any[]` |  |
| `max_percentage` | `number` |  |
| `median` | `number` |  |
| `p95` | `number` |  |
| `sum` | `number` |  |
| `timestamp` | `string` |  |

#### Example: List

```ts
const monitoring_histogram_timeseriess = await client.MonitoringHistogramTimeseries().list({ monitoring_histogram_metric_id: "example" })
```


### MonitoringTimeseries

Create an instance: `const monitoring_timeseries = client.MonitoringTimeseries()`

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

```ts
const monitoring_timeseriess = await client.MonitoringTimeseries().list({ monitoring_metric_id: "example" })
```


### Overall

Create an instance: `const overall = client.Overall()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `meta` | `Record<string, any>` |  |
| `timeframe` | `any[]` |  |
| `total_row_count` | `number` |  |

#### Example: List

```ts
const overalls = await client.Overall().list({ metric_id: "example" })
```


### PlaybackRestriction

Create an instance: `const playback_restriction = client.PlaybackRestriction()`

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
| `referrer` | `Record<string, any>` | A list of domains allowed to play your videos. |
| `updated_at` | `string` | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `Record<string, any>` | Rules that control what user agents are allowed to play your videos. |

#### Example: Load

```ts
const playback_restriction = await client.PlaybackRestriction().load({ id: 'playback_restriction_id' })
```

#### Example: List

```ts
const playback_restrictions = await client.PlaybackRestriction().list()
```

#### Example: Create

```ts
const playback_restriction = await client.PlaybackRestriction().create({
  created_at: 'example_created_at',
  id: 'example_id',
  referrer: {},
  updated_at: 'example_updated_at',
  user_agent: {},
})
```


### RealTimeBreakdown

Create an instance: `const real_time_breakdown = client.RealTimeBreakdown()`

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

```ts
const real_time_breakdowns = await client.RealTimeBreakdown().list({ realtime_metric_id: "example" })
```


### RealTimeHistogramTimeseries

Create an instance: `const real_time_histogram_timeseries = client.RealTimeHistogramTimeseries()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average` | `number` |  |
| `bucket_values` | `any[]` |  |
| `max_percentage` | `number` |  |
| `median` | `number` |  |
| `p95` | `number` |  |
| `sum` | `number` |  |
| `timestamp` | `string` |  |

#### Example: List

```ts
const real_time_histogram_timeseriess = await client.RealTimeHistogramTimeseries().list({ realtime_histogram_metric_id: "example" })
```


### RealTimeTimeseries

Create an instance: `const real_time_timeseries = client.RealTimeTimeseries()`

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

```ts
const real_time_timeseriess = await client.RealTimeTimeseries().list({ realtime_metric_id: "example" })
```


### SignalLiveStreamComplete

Create an instance: `const signal_live_stream_complete = client.SignalLiveStreamComplete()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### SigningKey

Create an instance: `const signing_key = client.SigningKey()`

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
| `data` | `Record<string, any>` |  |
| `id` | `string` | Unique identifier for the Signing Key. |
| `private_key` | `string` | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

#### Example: Load

```ts
const signing_key = await client.SigningKey().load({ id: 'signing_key_id' })
```

#### Example: List

```ts
const signing_keys = await client.SigningKey().list()
```

#### Example: Create

```ts
const signing_key = await client.SigningKey().create({
  created_at: 'example_created_at',
  id: 'example_id',
})
```


### SimulcastTarget

Create an instance: `const simulcast_target = client.SimulcastTarget()`

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

```ts
const simulcast_target = await client.SimulcastTarget().load({ id: 'simulcast_target_id', live_stream_id: 'live_stream_id' })
```

#### Example: Create

```ts
const simulcast_target = await client.SimulcastTarget().create({
  live_stream_id: 'example_live_stream_id',
  id: 'example_id',
  status: 'example_status',
  url: 'example_url',
})
```


### StaticRendition

Create an instance: `const static_rendition = client.StaticRendition()`

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

```ts
const static_rendition = await client.StaticRendition().create({
  asset_id: 'example_asset_id',
  resolution: 'example_resolution',
})
```


### SubviewBreakdownTimeseries

Create an instance: `const subview_breakdown_timeseries = client.SubviewBreakdownTimeseries()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `status` | `string` |  |
| `values` | `any[]` |  |

#### Example: List

```ts
const subview_breakdown_timeseriess = await client.SubviewBreakdownTimeseries().list({ subview_metric_id: "example", subview_type: "example" })
```


### SubviewOverallValue

Create an instance: `const subview_overall_value = client.SubviewOverallValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `meta` | `Record<string, any>` |  |
| `timeframe` | `any[]` |  |
| `total_row_count` | `number` | Always `null` for this endpoint — a single aggregate value has no row count. |

#### Example: List

```ts
const subview_overall_values = await client.SubviewOverallValue().list({ subview_metric_id: "example", subview_type: "example" })
```


### Summarize

Create an instance: `const summarize = client.Summarize()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const summarize = await client.Summarize().load({ id: 'summarize_id' })
```

#### Example: Create

```ts
const summarize = await client.Summarize().create({
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


### TranscriptionVocabulary

Create an instance: `const transcription_vocabulary = client.TranscriptionVocabulary()`

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
| `phrases` | `any[]` | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `updated_at` | `string` | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

#### Example: Load

```ts
const transcription_vocabulary = await client.TranscriptionVocabulary().load({ id: 'transcription_vocabulary_id' })
```

#### Example: List

```ts
const transcription_vocabularys = await client.TranscriptionVocabulary().list()
```

#### Example: Create

```ts
const transcription_vocabulary = await client.TranscriptionVocabulary().create({
  created_at: 'example_created_at',
  id: 'example_id',
  updated_at: 'example_updated_at',
})
```


### TranslateAudio

Create an instance: `const translate_audio = client.TranslateAudio()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const translate_audio = await client.TranslateAudio().load({ id: 'translate_audio_id' })
```

#### Example: Create

```ts
const translate_audio = await client.TranslateAudio().create({
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


### TranslateCaption

Create an instance: `const translate_caption = client.TranslateCaption()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp (seconds) when the job was created. |
| `directive` | `Record<string, any>` | The directive run that dispatched this job. |
| `errors` | `any[]` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `Record<string, any>` | Workflow results. |
| `parameters` | `Record<string, any>` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `Record<string, any>` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `number` | Number of Mux AI units consumed by this job. |
| `updated_at` | `number` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```ts
const translate_caption = await client.TranslateCaption().load({ id: 'translate_caption_id' })
```

#### Example: Create

```ts
const translate_caption = await client.TranslateCaption().create({
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


### UpdateAssetTrack

Create an instance: `const update_asset_track = client.UpdateAssetTrack()`

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

Create an instance: `const upload = client.Upload()`

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
| `error` | `Record<string, any>` | Only set if an error occurred during asset creation. |
| `id` | `string` | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `Record<string, any>` |  |
| `status` | `string` |  |
| `test` | `boolean` | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | `number` | Max time in seconds for the signed upload URL to be valid. |
| `url` | `string` | The URL to upload the associated source media to. |

#### Example: Load

```ts
const upload = await client.Upload().load({ id: 'upload_id' })
```

#### Example: List

```ts
const uploads = await client.Upload().list()
```

#### Example: Create

```ts
const upload = await client.Upload().create({
  cors_origin: 'example_cors_origin',
  id: 'example_id',
  status: 'example_status',
  timeout: 1,
})
```


### UrlSigningKey

Create an instance: `const url_signing_key = client.UrlSigningKey()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### UsageExport

Create an instance: `const usage_export = client.UsageExport()`

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

```ts
const usage_exports = await client.UsageExport().list()
```


### VideoView

Create an instance: `const video_view = client.VideoView()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country_code` | `string` |  |
| `data` | `Record<string, any>` |  |
| `error_type_id` | `number` |  |
| `id` | `string` |  |
| `playback_failure` | `boolean` |  |
| `player_error_code` | `string` |  |
| `player_error_message` | `string` |  |
| `timeframe` | `any[]` |  |
| `total_row_count` | `number` |  |
| `video_title` | `string` |  |
| `view_end` | `string` |  |
| `view_start` | `string` |  |
| `viewer_application_name` | `string` |  |
| `viewer_experience_score` | `number` |  |
| `viewer_os_family` | `string` |  |
| `watch_time` | `number` |  |

#### Example: Load

```ts
const video_view = await client.VideoView().load({ id: 'video_view_id' })
```

#### Example: List

```ts
const video_views = await client.VideoView().list()
```


### Webhook

Create an instance: `const webhook = client.Webhook()`

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

```ts
const webhook = await client.Webhook().load({ id: 'webhook_id' })
```

#### Example: List

```ts
const webhooks = await client.Webhook().list()
```

#### Example: Create

```ts
const webhook = await client.Webhook().create({
  address: 'example_address',
  created_at: 'example_created_at',
  enabled: true,
  id: 'example_id',
})
```


### WhoAmI

Create an instance: `const who_am_i = client.WhoAmI()`

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
| `permissions` | `any[]` |  |

#### Example: Load

```ts
const who_am_i = await client.WhoAmI().load()
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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

### Module structure

```
mux/
├── src/
│   ├── MuxSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { MuxSDK } from '@voxgig-sdk/mux-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const realtimebreakdown = client.RealTimeBreakdown()
await realtimebreakdown.list()

// realtimebreakdown.data() now returns the realtimebreakdown data from the last `list`
// realtimebreakdown.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
