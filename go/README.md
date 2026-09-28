# Mux Golang SDK



The Golang SDK for the Mux API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Annotation(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/mux-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/mux-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/mux-sdk/go=../mux-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/mux-sdk/go"
)

func main() {
    client := sdk.NewMuxSDK(map[string]any{
        "apikey": os.Getenv("MUX_APIKEY"),
    })

    // Load a single annotation — the value is the loaded record.
    annotation, err := client.Annotation(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(annotation)

    // Create a annotation.
    created, err := client.Annotation(nil).Create(map[string]any{"date": "example_date", "id": "example_id", "note": "example_note"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)

    // Update a annotation.
    updated, err := client.Annotation(nil).Update(map[string]any{"id": "example_id", "date": "example_date", "note": "example_note"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)

    // Remove a annotation.
    removed, err := client.Annotation(nil).Remove(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
listdimensionvalues, err := client.ListDimensionValue(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = listdimensionvalues
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

listDimensionValue, err := client.ListDimensionValue(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(listDimensionValue) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewMuxSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewMuxSDK

```go
func NewMuxSDK(options map[string]any) *MuxSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *MuxSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### MuxSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Annotation` | `(data map[string]any) MuxEntity` | Create an Annotation entity instance. |
| `AskQuestion` | `(data map[string]any) MuxEntity` | Create an AskQuestion entity instance. |
| `Asset` | `(data map[string]any) MuxEntity` | Create an Asset entity instance. |
| `AssetOrLiveStreamId` | `(data map[string]any) MuxEntity` | Create an AssetOrLiveStreamId entity instance. |
| `AssetPlaybackId` | `(data map[string]any) MuxEntity` | Create an AssetPlaybackId entity instance. |
| `AssetShot` | `(data map[string]any) MuxEntity` | Create an AssetShot entity instance. |
| `CreatePlaybackId` | `(data map[string]any) MuxEntity` | Create a CreatePlaybackId entity instance. |
| `CreateTrack` | `(data map[string]any) MuxEntity` | Create a CreateTrack entity instance. |
| `Directive` | `(data map[string]any) MuxEntity` | Create a Directive entity instance. |
| `DirectiveRunDetail` | `(data map[string]any) MuxEntity` | Create a DirectiveRunDetail entity instance. |
| `DirectiveRunList` | `(data map[string]any) MuxEntity` | Create a DirectiveRunList entity instance. |
| `DrmConfiguration` | `(data map[string]any) MuxEntity` | Create a DrmConfiguration entity instance. |
| `EditCaption` | `(data map[string]any) MuxEntity` | Create an EditCaption entity instance. |
| `EngagementHeatmap` | `(data map[string]any) MuxEntity` | Create an EngagementHeatmap entity instance. |
| `EngagementHotspot` | `(data map[string]any) MuxEntity` | Create an EngagementHotspot entity instance. |
| `FindBestThumbnail` | `(data map[string]any) MuxEntity` | Create a FindBestThumbnail entity instance. |
| `FindKeyMoment` | `(data map[string]any) MuxEntity` | Create a FindKeyMoment entity instance. |
| `FindScene` | `(data map[string]any) MuxEntity` | Create a FindScene entity instance. |
| `GenerateAssetShot` | `(data map[string]any) MuxEntity` | Create a GenerateAssetShot entity instance. |
| `GenerateChapter` | `(data map[string]any) MuxEntity` | Create a GenerateChapter entity instance. |
| `GenerateEngagementInsight` | `(data map[string]any) MuxEntity` | Create a GenerateEngagementInsight entity instance. |
| `GeneratePremiumCaption` | `(data map[string]any) MuxEntity` | Create a GeneratePremiumCaption entity instance. |
| `GenerateTrackSubtitle` | `(data map[string]any) MuxEntity` | Create a GenerateTrackSubtitle entity instance. |
| `Incident` | `(data map[string]any) MuxEntity` | Create an Incident entity instance. |
| `InputInfo` | `(data map[string]any) MuxEntity` | Create an InputInfo entity instance. |
| `JobSummary` | `(data map[string]any) MuxEntity` | Create a JobSummary entity instance. |
| `ListAllMetricValue` | `(data map[string]any) MuxEntity` | Create a ListAllMetricValue entity instance. |
| `ListAnnotation` | `(data map[string]any) MuxEntity` | Create a ListAnnotation entity instance. |
| `ListAsset` | `(data map[string]any) MuxEntity` | Create a ListAsset entity instance. |
| `ListBreakdownValue` | `(data map[string]any) MuxEntity` | Create a ListBreakdownValue entity instance. |
| `ListDeliveryUsage` | `(data map[string]any) MuxEntity` | Create a ListDeliveryUsage entity instance. |
| `ListDimension` | `(data map[string]any) MuxEntity` | Create a ListDimension entity instance. |
| `ListDimensionValue` | `(data map[string]any) MuxEntity` | Create a ListDimensionValue entity instance. |
| `ListDrmConfiguration` | `(data map[string]any) MuxEntity` | Create a ListDrmConfiguration entity instance. |
| `ListError` | `(data map[string]any) MuxEntity` | Create a ListError entity instance. |
| `ListExport` | `(data map[string]any) MuxEntity` | Create a ListExport entity instance. |
| `ListFilter` | `(data map[string]any) MuxEntity` | Create a ListFilter entity instance. |
| `ListFilterValue` | `(data map[string]any) MuxEntity` | Create a ListFilterValue entity instance. |
| `ListIncident` | `(data map[string]any) MuxEntity` | Create a ListIncident entity instance. |
| `ListInsight` | `(data map[string]any) MuxEntity` | Create a ListInsight entity instance. |
| `ListJob` | `(data map[string]any) MuxEntity` | Create a ListJob entity instance. |
| `ListLiveStream` | `(data map[string]any) MuxEntity` | Create a ListLiveStream entity instance. |
| `ListMonitoringDimension` | `(data map[string]any) MuxEntity` | Create a ListMonitoringDimension entity instance. |
| `ListMonitoringMetric` | `(data map[string]any) MuxEntity` | Create a ListMonitoringMetric entity instance. |
| `ListPlaybackRestriction` | `(data map[string]any) MuxEntity` | Create a ListPlaybackRestriction entity instance. |
| `ListRealTimeDimension` | `(data map[string]any) MuxEntity` | Create a ListRealTimeDimension entity instance. |
| `ListRealTimeMetric` | `(data map[string]any) MuxEntity` | Create a ListRealTimeMetric entity instance. |
| `ListRelatedIncident` | `(data map[string]any) MuxEntity` | Create a ListRelatedIncident entity instance. |
| `ListSigningKey` | `(data map[string]any) MuxEntity` | Create a ListSigningKey entity instance. |
| `ListSubviewBreakdownValue` | `(data map[string]any) MuxEntity` | Create a ListSubviewBreakdownValue entity instance. |
| `ListSubviewComparisonValue` | `(data map[string]any) MuxEntity` | Create a ListSubviewComparisonValue entity instance. |
| `ListSubviewDimension` | `(data map[string]any) MuxEntity` | Create a ListSubviewDimension entity instance. |
| `ListSubviewDimensionValue` | `(data map[string]any) MuxEntity` | Create a ListSubviewDimensionValue entity instance. |
| `ListTranscriptionVocabulary` | `(data map[string]any) MuxEntity` | Create a ListTranscriptionVocabulary entity instance. |
| `ListUpload` | `(data map[string]any) MuxEntity` | Create a ListUpload entity instance. |
| `ListUsageExport` | `(data map[string]any) MuxEntity` | Create a ListUsageExport entity instance. |
| `ListVideoView` | `(data map[string]any) MuxEntity` | Create a ListVideoView entity instance. |
| `ListVideoViewExport` | `(data map[string]any) MuxEntity` | Create a ListVideoViewExport entity instance. |
| `ListWebhook` | `(data map[string]any) MuxEntity` | Create a ListWebhook entity instance. |
| `LiveStream` | `(data map[string]any) MuxEntity` | Create a LiveStream entity instance. |
| `LiveStreamPlaybackId` | `(data map[string]any) MuxEntity` | Create a LiveStreamPlaybackId entity instance. |
| `MetricTimeseriesData` | `(data map[string]any) MuxEntity` | Create a MetricTimeseriesData entity instance. |
| `Moderate` | `(data map[string]any) MuxEntity` | Create a Moderate entity instance. |
| `MonitoringBreakdown` | `(data map[string]any) MuxEntity` | Create a MonitoringBreakdown entity instance. |
| `MonitoringBreakdownTimeseries` | `(data map[string]any) MuxEntity` | Create a MonitoringBreakdownTimeseries entity instance. |
| `MonitoringHistogramTimeseries` | `(data map[string]any) MuxEntity` | Create a MonitoringHistogramTimeseries entity instance. |
| `MonitoringTimeseries` | `(data map[string]any) MuxEntity` | Create a MonitoringTimeseries entity instance. |
| `Overall` | `(data map[string]any) MuxEntity` | Create an Overall entity instance. |
| `PlaybackRestriction` | `(data map[string]any) MuxEntity` | Create a PlaybackRestriction entity instance. |
| `RealTimeBreakdown` | `(data map[string]any) MuxEntity` | Create a RealTimeBreakdown entity instance. |
| `RealTimeHistogramTimeseries` | `(data map[string]any) MuxEntity` | Create a RealTimeHistogramTimeseries entity instance. |
| `RealTimeTimeseries` | `(data map[string]any) MuxEntity` | Create a RealTimeTimeseries entity instance. |
| `SignalLiveStreamComplete` | `(data map[string]any) MuxEntity` | Create a SignalLiveStreamComplete entity instance. |
| `SigningKey` | `(data map[string]any) MuxEntity` | Create a SigningKey entity instance. |
| `SimulcastTarget` | `(data map[string]any) MuxEntity` | Create a SimulcastTarget entity instance. |
| `StaticRendition` | `(data map[string]any) MuxEntity` | Create a StaticRendition entity instance. |
| `SubviewBreakdownTimeseries` | `(data map[string]any) MuxEntity` | Create a SubviewBreakdownTimeseries entity instance. |
| `SubviewOverallValue` | `(data map[string]any) MuxEntity` | Create a SubviewOverallValue entity instance. |
| `Summarize` | `(data map[string]any) MuxEntity` | Create a Summarize entity instance. |
| `TranscriptionVocabulary` | `(data map[string]any) MuxEntity` | Create a TranscriptionVocabulary entity instance. |
| `TranslateAudio` | `(data map[string]any) MuxEntity` | Create a TranslateAudio entity instance. |
| `TranslateCaption` | `(data map[string]any) MuxEntity` | Create a TranslateCaption entity instance. |
| `UpdateAssetTrack` | `(data map[string]any) MuxEntity` | Create an UpdateAssetTrack entity instance. |
| `Upload` | `(data map[string]any) MuxEntity` | Create an Upload entity instance. |
| `UrlSigningKey` | `(data map[string]any) MuxEntity` | Create an UrlSigningKey entity instance. |
| `VideoView` | `(data map[string]any) MuxEntity` | Create a VideoView entity instance. |
| `Webhook` | `(data map[string]any) MuxEntity` | Create a Webhook entity instance. |
| `WhoAmI` | `(data map[string]any) MuxEntity` | Create a WhoAmI entity instance. |

### Entity interface (MuxEntity)

All entities implement the `MuxEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    annotation, err := client.Annotation(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // annotation is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Annotation

| Field | Description |
| --- | --- |
| `"date"` | Datetime when the annotation applies |
| `"id"` | Unique identifier for the annotation |
| `"note"` | The annotation note content |
| `"sub_property_id"` | Customer-defined sub-property identifier |

Operations: Create, Load, Remove, Update.

API path: `/data/v1/annotations`

#### AskQuestion

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/ask-questions`

#### Asset

| Field | Description |
| --- | --- |
| `"aspect_ratio"` | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `"created_at"` | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `"data"` |  |
| `"directives"` | The Mux Robots directives applied to the asset. |
| `"duration"` | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `"encoding_tier"` | This field is deprecated. |
| `"errors"` | Object that describes any errors that happened when processing this asset. |
| `"generate_shots"` | Whether to perform shot detection on this asset. |
| `"id"` | Unique identifier for the Asset. |
| `"ingest_type"` | The type of ingest used to create the asset. |
| `"is_live"` | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `"live_stream_id"` | Unique identifier for the live stream. |
| `"master"` | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `"master_access"` |  |
| `"max_resolution_tier"` | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `"max_stored_frame_rate"` | The maximum frame rate that has been stored for the asset. |
| `"max_stored_resolution"` | This field is deprecated. |
| `"meta"` | Customer provided metadata about this asset. |
| `"mp4_support"` | Deprecated. |
| `"non_standard_input_reasons"` | An object containing one or more reasons the input file is non-standard. |
| `"normalize_audio"` | Normalize the audio track loudness level. |
| `"passthrough"` | You can set this field to anything you want. |
| `"playback_ids"` | An array of Playback ID objects. |
| `"progress"` | Detailed state information about the asset ingest process. |
| `"recording_times"` | An array of individual live stream recording sessions. |
| `"resolution_tier"` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `"shots"` | The results of generating shots on the video |
| `"source_asset_id"` | Asset Identifier of the video used as the source for creating the clip. |
| `"static_renditions"` | An object containing the current status of any static renditions (MP4s) for this asset. |
| `"status"` | The status of the asset. |
| `"test"` | True means this live stream is a test asset. |
| `"thumbnail_time"` | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `"tracks"` | The individual media tracks that make up an asset. |
| `"upload_id"` | Unique identifier for the Direct Upload. |
| `"video_quality"` | The video quality controls the cost, quality, and available platform features for the asset. |

Operations: Create, Load, Remove, Update.

API path: `/video/v1/assets`

#### AssetOrLiveStreamId

| Field | Description |
| --- | --- |
| `"id"` | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `"object"` | Describes the Asset or LiveStream object associated with the playback ID. |
| `"policy"` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: Load.

API path: `/video/v1/playback-ids/{PLAYBACK_ID}`

#### AssetPlaybackId

| Field | Description |
| --- | --- |
| `"drm_configuration_id"` | The DRM configuration used by this playback ID. |
| `"id"` | Unique identifier for the PlaybackID |
| `"policy"` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: Load.

API path: `/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}`

#### AssetShot

| Field | Description |
| --- | --- |
| `"errors"` | An object describing any errors encountered during the shot detection process. |
| `"shots_manifest_url"` | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `"status"` | The status of the shot detection process |

Operations: Load.

API path: `/video/v1/assets/{ASSET_ID}/shots`

#### CreatePlaybackId

| Field | Description |
| --- | --- |
| `"drm_configuration_id"` | The DRM configuration used by this playback ID. |
| `"policy"` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: Create.

API path: `/video/v1/assets/{ASSET_ID}/playback-ids`

#### CreateTrack

| Field | Description |
| --- | --- |
| `"closed_captions"` | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `"language_code"` | The language code of this track. |
| `"name"` | The name of the track containing a human-readable description. |
| `"passthrough"` | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `"text_type"` |  |
| `"type"` |  |
| `"url"` | The URL of the file that Mux should download and use. |

Operations: Create.

API path: `/video/v1/assets/{ASSET_ID}/tracks`

#### Directive

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the directive was created. |
| `"id"` | Stable directive identifier (drv_...). |
| `"name"` | Human-readable directive name. |
| `"resources"` | Resource declarations. |
| `"subject"` |  |
| `"updated_at"` | Unix timestamp (seconds) when the directive was last updated. |
| `"workflows"` | Workflow bindings. |

Operations: Create, List, Load, Remove.

API path: `/robots/v0/directives/{DIRECTIVE_ID}/runs`

#### DirectiveRunDetail

| Field | Description |
| --- | --- |
| `"completed_at"` | Unix timestamp (seconds) when the run reached terminal state. |
| `"node_states"` | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `"run_id"` | Unique run identifier (drvrun_...). |
| `"started_at"` | Unix timestamp (seconds) when the run started. |
| `"status"` | Current run status. |
| `"subject_id"` | The bare Mux asset ID this run targeted. |

Operations: Load.

API path: `/robots/v0/directives/{DIRECTIVE_ID}/runs/{RUN_ID}`

#### DirectiveRunList

| Field | Description |
| --- | --- |
| `"completed_at"` | Unix timestamp (seconds) when the run reached terminal state. |
| `"node_states"` | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `"run_id"` | Unique run identifier (drvrun_...). |
| `"started_at"` | Unix timestamp (seconds) when the run started. |
| `"status"` | Current run status. |
| `"subject_id"` | The bare Mux asset ID this run targeted. |

Operations: List.

API path: `/robots/v0/directives/{DIRECTIVE_ID}/runs`

#### DrmConfiguration

| Field | Description |
| --- | --- |
| `"id"` | Unique identifier for the DRM Configuration. |

Operations: Load.

API path: `/video/v1/drm-configurations/{DRM_CONFIGURATION_ID}`

#### EditCaption

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/edit-captions`

#### EngagementHeatmap

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"timeframe"` |  |
| `"total_row_count"` |  |

Operations: List.

API path: `/data/v1/engagement/assets/{ASSET_ID}/heatmap`

#### EngagementHotspot

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"timeframe"` |  |
| `"total_row_count"` |  |

Operations: List.

API path: `/data/v1/engagement/assets/{ASSET_ID}/hotspots`

#### FindBestThumbnail

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/find-best-thumbnails`

#### FindKeyMoment

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/find-key-moments`

#### FindScene

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/find-scenes`

#### GenerateAssetShot

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: Create.

API path: `/video/v1/assets/{ASSET_ID}/shots`

#### GenerateChapter

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/generate-chapters`

#### GenerateEngagementInsight

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/generate-engagement-insights`

#### GeneratePremiumCaption

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/generate-premium-captions`

#### GenerateTrackSubtitle

| Field | Description |
| --- | --- |
| `"generated_subtitles"` | Generate subtitle tracks using automatic speech recognition with this configuration. |

Operations: Create.

API path: `/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles`

#### Incident

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"id"` |  |
| `"timeframe"` |  |
| `"total_row_count"` |  |

Operations: Load.

API path: `/data/v1/incidents/{INCIDENT_ID}`

#### InputInfo

| Field | Description |
| --- | --- |
| `"file"` |  |
| `"settings"` | An array of objects that each describe an input file to be used to create the asset. |

Operations: List.

API path: `/video/v1/assets/{ASSET_ID}/input-info`

#### JobSummary

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"id"` | Unique job identifier. |
| `"links"` | Hypermedia links for this job. |
| `"status"` | Current job status. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` | Workflow type that created this job. |

Operations: Create.

API path: `/robots/v0/jobs/{JOB_ID}/cancel`

#### ListAllMetricValue

| Field | Description |
| --- | --- |
| `"ended_views"` |  |
| `"items"` |  |
| `"metric"` |  |
| `"name"` |  |
| `"started_views"` |  |
| `"total_playing_time"` |  |
| `"type"` |  |
| `"unique_viewers"` |  |
| `"value"` |  |
| `"view_count"` |  |
| `"watch_time"` |  |

Operations: List.

API path: `/data/v1/metrics/comparison`

#### ListAnnotation

| Field | Description |
| --- | --- |
| `"date"` | Datetime when the annotation applies |
| `"id"` | Unique identifier for the annotation |
| `"note"` | The annotation note content |
| `"sub_property_id"` | Customer-defined sub-property identifier |

Operations: List.

API path: `/data/v1/annotations`

#### ListAsset

| Field | Description |
| --- | --- |
| `"aspect_ratio"` | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `"created_at"` | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `"directives"` | The Mux Robots directives applied to the asset. |
| `"duration"` | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `"encoding_tier"` | This field is deprecated. |
| `"errors"` | Object that describes any errors that happened when processing this asset. |
| `"generate_shots"` | Whether to perform shot detection on this asset. |
| `"id"` | Unique identifier for the Asset. |
| `"ingest_type"` | The type of ingest used to create the asset. |
| `"is_live"` | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `"live_stream_id"` | Unique identifier for the live stream. |
| `"master"` | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `"master_access"` |  |
| `"max_resolution_tier"` | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `"max_stored_frame_rate"` | The maximum frame rate that has been stored for the asset. |
| `"max_stored_resolution"` | This field is deprecated. |
| `"meta"` | Customer provided metadata about this asset. |
| `"mp4_support"` | Deprecated. |
| `"non_standard_input_reasons"` | An object containing one or more reasons the input file is non-standard. |
| `"normalize_audio"` | Normalize the audio track loudness level. |
| `"passthrough"` | You can set this field to anything you want. |
| `"playback_ids"` | An array of Playback ID objects. |
| `"progress"` | Detailed state information about the asset ingest process. |
| `"recording_times"` | An array of individual live stream recording sessions. |
| `"resolution_tier"` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `"shots"` | The results of generating shots on the video |
| `"source_asset_id"` | Asset Identifier of the video used as the source for creating the clip. |
| `"static_renditions"` | An object containing the current status of any static renditions (MP4s) for this asset. |
| `"status"` | The status of the asset. |
| `"test"` | True means this live stream is a test asset. |
| `"thumbnail_time"` | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `"tracks"` | The individual media tracks that make up an asset. |
| `"upload_id"` | Unique identifier for the Direct Upload. |
| `"video_quality"` | The video quality controls the cost, quality, and available platform features for the asset. |

Operations: List.

API path: `/video/v1/assets`

#### ListBreakdownValue

| Field | Description |
| --- | --- |
| `"field"` |  |
| `"negative_impact"` |  |
| `"total_playing_time"` |  |
| `"total_watch_time"` |  |
| `"value"` |  |
| `"views"` |  |

Operations: List.

API path: `/data/v1/metrics/{METRIC_ID}/breakdown`

#### ListDeliveryUsage

| Field | Description |
| --- | --- |
| `"asset_duration"` | The duration of the asset in seconds. |
| `"asset_encoding_tier"` | This field is deprecated. |
| `"asset_id"` | Unique identifier for the asset. |
| `"asset_resolution_tier"` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage |
| `"asset_state"` | The state of the asset. |
| `"asset_video_quality"` | The video quality that the asset was ingested at. |
| `"created_at"` | Time at which the asset was created. |
| `"deleted_at"` | If exists, time at which the asset was deleted. |
| `"delivered_seconds"` | Total number of delivered seconds during this time window. |
| `"delivered_seconds_by_resolution"` | Seconds delivered broken into resolution tiers. |
| `"live_stream_id"` | Unique identifier for the live stream that created the asset. |
| `"passthrough"` | The `passthrough` value for the asset. |

Operations: List.

API path: `/video/v1/delivery-usage`

#### ListDimension

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"timeframe"` |  |
| `"total_row_count"` |  |

Operations: List.

API path: `/data/v1/dimensions`

#### ListDimensionValue

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"timeframe"` |  |
| `"total_count"` |  |
| `"total_row_count"` |  |
| `"value"` |  |

Operations: List, Load.

API path: `/data/v1/dimensions/{DIMENSION_ID}/elements`

#### ListDrmConfiguration

| Field | Description |
| --- | --- |
| `"id"` | Unique identifier for the DRM Configuration. |

Operations: List.

API path: `/video/v1/drm-configurations`

#### ListError

| Field | Description |
| --- | --- |
| `"code"` | The error code |
| `"count"` | The total number of views that experienced this error. |
| `"description"` | Description of the error. |
| `"id"` | A unique identifier for this error. |
| `"last_seen"` | The last time this error was seen (ISO 8601 timestamp). |
| `"message"` | The error message. |
| `"notes"` | Notes that are attached to this error. |
| `"percentage"` | The percentage of views that experienced this error. |
| `"player_error_code"` | The string version of the error code |

Operations: List.

API path: `/data/v1/errors`

#### ListExport

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"timeframe"` |  |
| `"total_row_count"` |  |

Operations: List.

API path: `/data/v1/exports`

#### ListFilter

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"timeframe"` |  |
| `"total_row_count"` |  |

Operations: List.

API path: `/data/v1/filters`

#### ListFilterValue

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"timeframe"` |  |
| `"total_row_count"` |  |

Operations: Load.

API path: `/data/v1/filters/{FILTER_ID}`

#### ListIncident

| Field | Description |
| --- | --- |
| `"affected_views"` |  |
| `"affected_views_per_hour"` |  |
| `"affected_views_per_hour_on_open"` |  |
| `"breakdowns"` |  |
| `"description"` |  |
| `"error_description"` |  |
| `"id"` |  |
| `"impact"` |  |
| `"incident_key"` |  |
| `"measured_value"` |  |
| `"measured_value_on_close"` |  |
| `"measurement"` |  |
| `"notification_rules"` |  |
| `"notifications"` |  |
| `"resolved_at"` |  |
| `"sample_size"` |  |
| `"sample_size_unit"` |  |
| `"severity"` |  |
| `"started_at"` |  |
| `"status"` |  |
| `"threshold"` |  |

Operations: List.

API path: `/data/v1/incidents`

#### ListInsight

| Field | Description |
| --- | --- |
| `"filter_column"` |  |
| `"filter_value"` |  |
| `"metric"` |  |
| `"negative_impact_score"` |  |
| `"total_playing_time"` |  |
| `"total_views"` |  |
| `"total_watch_time"` |  |

Operations: List.

API path: `/data/v1/metrics/{METRIC_ID}/insights`

#### ListJob

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"id"` | Unique job identifier. |
| `"links"` | Hypermedia links for this job. |
| `"status"` | Current job status. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` | Workflow type that created this job. |

Operations: List.

API path: `/robots/v0/jobs`

#### ListLiveStream

| Field | Description |
| --- | --- |
| `"active_asset_id"` | The Asset that is currently being created if there is an active broadcast. |
| `"active_ingest_protocol"` | The protocol used for the active ingest stream. |
| `"audio_only"` | The live stream only processes the audio track if the value is set to true. |
| `"created_at"` | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `"embedded_subtitles"` | Describes the embedded closed caption configuration of the incoming live stream. |
| `"generated_subtitles"` | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `"id"` | Unique identifier for the Live Stream. |
| `"latency_mode"` | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `"low_latency"` | This field is deprecated. |
| `"max_continuous_duration"` | The time in seconds a live stream may be continuously active before being disconnected. |
| `"meta"` | Customer provided metadata about this live stream. |
| `"new_asset_settings"` |  |
| `"passthrough"` | Arbitrary user-supplied metadata set for the asset. |
| `"playback_ids"` | An array of Playback ID objects. |
| `"recent_asset_ids"` | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `"reconnect_slate_url"` | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `"reconnect_window"` | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `"reduced_latency"` | This field is deprecated. |
| `"simulcast_targets"` | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `"srt_passphrase"` | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `"status"` | `idle` indicates that there is no active broadcast. |
| `"stream_key"` | Unique key used for streaming to a Mux RTMP endpoint. |
| `"test"` | True means this live stream is a test live stream. |
| `"use_slate_for_standard_latency"` | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

Operations: List.

API path: `/video/v1/live-streams`

#### ListMonitoringDimension

| Field | Description |
| --- | --- |
| `"display_name"` |  |
| `"name"` |  |

Operations: List.

API path: `/data/v1/monitoring/dimensions`

#### ListMonitoringMetric

| Field | Description |
| --- | --- |
| `"display_name"` |  |
| `"name"` |  |

Operations: List.

API path: `/data/v1/monitoring/metrics`

#### ListPlaybackRestriction

| Field | Description |
| --- | --- |
| `"created_at"` | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `"id"` | Unique identifier for the Playback Restriction. |
| `"referrer"` | A list of domains allowed to play your videos. |
| `"updated_at"` | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `"user_agent"` | Rules that control what user agents are allowed to play your videos. |

Operations: List.

API path: `/video/v1/playback-restrictions`

#### ListRealTimeDimension

| Field | Description |
| --- | --- |
| `"display_name"` |  |
| `"name"` |  |

Operations: List.

API path: `/data/v1/realtime/dimensions`

#### ListRealTimeMetric

| Field | Description |
| --- | --- |
| `"display_name"` |  |
| `"name"` |  |

Operations: List.

API path: `/data/v1/realtime/metrics`

#### ListRelatedIncident

| Field | Description |
| --- | --- |
| `"affected_views"` |  |
| `"affected_views_per_hour"` |  |
| `"affected_views_per_hour_on_open"` |  |
| `"breakdowns"` |  |
| `"description"` |  |
| `"error_description"` |  |
| `"id"` |  |
| `"impact"` |  |
| `"incident_key"` |  |
| `"measured_value"` |  |
| `"measured_value_on_close"` |  |
| `"measurement"` |  |
| `"notification_rules"` |  |
| `"notifications"` |  |
| `"resolved_at"` |  |
| `"sample_size"` |  |
| `"sample_size_unit"` |  |
| `"severity"` |  |
| `"started_at"` |  |
| `"status"` |  |
| `"threshold"` |  |

Operations: List.

API path: `/data/v1/incidents/{INCIDENT_ID}/related`

#### ListSigningKey

| Field | Description |
| --- | --- |
| `"created_at"` | Time at which the object was created. |
| `"id"` | Unique identifier for the Signing Key. |
| `"private_key"` | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

Operations: List.

API path: `/system/v1/signing-keys`

#### ListSubviewBreakdownValue

| Field | Description |
| --- | --- |
| `"breakdown_value"` |  |
| `"metric_value"` |  |

Operations: List.

API path: `/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown`

#### ListSubviewComparisonValue

| Field | Description |
| --- | --- |
| `"dimension_value"` |  |
| `"values"` |  |

Operations: List.

API path: `/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/comparison`

#### ListSubviewDimension

| Field | Description |
| --- | --- |
| `"subview"` |  |
| `"view"` |  |

Operations: Load.

API path: `/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions`

#### ListSubviewDimensionValue

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"meta"` |  |
| `"timeframe"` |  |
| `"total_row_count"` |  |

Operations: Load.

API path: `/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions/{DIMENSION_NAME}`

#### ListTranscriptionVocabulary

| Field | Description |
| --- | --- |
| `"created_at"` | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `"id"` | Unique identifier for the Transcription Vocabulary |
| `"name"` | The user-supplied name of the Transcription Vocabulary. |
| `"passthrough"` | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `"phrases"` | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `"updated_at"` | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

Operations: List.

API path: `/video/v1/transcription-vocabularies`

#### ListUpload

| Field | Description |
| --- | --- |
| `"asset_id"` | Only set once the upload is in the `asset_created` state. |
| `"cors_origin"` | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `"error"` | Only set if an error occurred during asset creation. |
| `"id"` | Unique identifier for the Direct Upload. |
| `"new_asset_settings"` |  |
| `"status"` |  |
| `"test"` | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `"timeout"` | Max time in seconds for the signed upload URL to be valid. |
| `"url"` | The URL to upload the associated source media to. |

Operations: List.

API path: `/video/v1/uploads`

#### ListUsageExport

| Field | Description |
| --- | --- |
| `"date"` | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `"download_url"` | A pre-signed URL to download the CSV. |
| `"download_url_expires_at"` | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `"file_size"` | Uncompressed size of the CSV file in bytes. |

Operations: List.

API path: `/system/v1/usage/exports`

#### ListVideoView

| Field | Description |
| --- | --- |
| `"country_code"` |  |
| `"error_type_id"` |  |
| `"id"` |  |
| `"playback_failure"` |  |
| `"player_error_code"` |  |
| `"player_error_message"` |  |
| `"total_row_count"` |  |
| `"video_title"` |  |
| `"view_end"` |  |
| `"view_start"` |  |
| `"viewer_application_name"` |  |
| `"viewer_experience_score"` |  |
| `"viewer_os_family"` |  |
| `"watch_time"` |  |

Operations: List.

API path: `/data/v1/video-views`

#### ListVideoViewExport

| Field | Description |
| --- | --- |
| `"export_date"` |  |
| `"files"` |  |

Operations: List.

API path: `/data/v1/exports/views`

#### ListWebhook

| Field | Description |
| --- | --- |
| `"address"` | The URL where Mux sends webhook notifications. |
| `"created_at"` | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `"enabled"` | Whether Mux attempts to deliver notifications to this webhook. |
| `"id"` | Unique identifier for the webhook. |
| `"signing_secret"` | Secret used to verify that webhook payloads were sent by Mux. |

Operations: List.

API path: `/system/v1/webhooks`

#### LiveStream

| Field | Description |
| --- | --- |
| `"active_asset_id"` | The Asset that is currently being created if there is an active broadcast. |
| `"active_ingest_protocol"` | The protocol used for the active ingest stream. |
| `"advanced_playback_policies"` | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `"audio_only"` | The live stream only processes the audio track if the value is set to true. |
| `"created_at"` | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `"embedded_subtitles"` | Describes the embedded closed caption configuration of the incoming live stream. |
| `"generated_subtitles"` | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `"id"` | Unique identifier for the Live Stream. |
| `"latency_mode"` | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `"low_latency"` | This field is deprecated. |
| `"max_continuous_duration"` | The time in seconds a live stream may be continuously active before being disconnected. |
| `"meta"` | Customer provided metadata about this live stream. |
| `"new_asset_settings"` | Updates the new asset settings to use to generate a new asset for this live stream. |
| `"passthrough"` | Arbitrary user-supplied metadata set for the asset. |
| `"playback_ids"` | An array of Playback ID objects. |
| `"playback_policies"` | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `"playback_policy"` | Deprecated. |
| `"recent_asset_ids"` | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `"reconnect_slate_url"` | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `"reconnect_window"` | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `"reduced_latency"` | This field is deprecated. |
| `"simulcast_targets"` | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `"srt_passphrase"` | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `"status"` | `idle` indicates that there is no active broadcast. |
| `"stream_key"` | Unique key used for streaming to a Mux RTMP endpoint. |
| `"test"` | True means this live stream is a test live stream. |
| `"use_slate_for_standard_latency"` | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

Operations: Create, Load, Remove, Update.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key`

#### LiveStreamPlaybackId

| Field | Description |
| --- | --- |
| `"drm_configuration_id"` | The DRM configuration used by this playback ID. |
| `"id"` | Unique identifier for the PlaybackID |
| `"policy"` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

Operations: Load.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}`

#### MetricTimeseriesData

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"meta"` |  |
| `"timeframe"` |  |
| `"total_row_count"` |  |

Operations: List.

API path: `/data/v1/metrics/{METRIC_ID}/timeseries`

#### Moderate

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/moderate`

#### MonitoringBreakdown

| Field | Description |
| --- | --- |
| `"concurrent_viewers"` |  |
| `"display_value"` |  |
| `"metric_value"` |  |
| `"negative_impact"` |  |
| `"starting_up_viewers"` |  |
| `"value"` |  |

Operations: List.

API path: `/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown`

#### MonitoringBreakdownTimeseries

| Field | Description |
| --- | --- |
| `"date"` |  |
| `"values"` |  |

Operations: List.

API path: `/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries`

#### MonitoringHistogramTimeseries

| Field | Description |
| --- | --- |
| `"average"` |  |
| `"bucket_values"` |  |
| `"max_percentage"` |  |
| `"median"` |  |
| `"p95"` |  |
| `"sum"` |  |
| `"timestamp"` |  |

Operations: List.

API path: `/data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries`

#### MonitoringTimeseries

| Field | Description |
| --- | --- |
| `"concurrent_viewers"` |  |
| `"date"` |  |
| `"value"` |  |

Operations: List.

API path: `/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries`

#### Overall

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"meta"` |  |
| `"timeframe"` |  |
| `"total_row_count"` |  |

Operations: List.

API path: `/data/v1/metrics/{METRIC_ID}/overall`

#### PlaybackRestriction

| Field | Description |
| --- | --- |
| `"created_at"` | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `"id"` | Unique identifier for the Playback Restriction. |
| `"referrer"` | A list of domains allowed to play your videos. |
| `"updated_at"` | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `"user_agent"` | Rules that control what user agents are allowed to play your videos. |

Operations: Create, Load, Remove, Update.

API path: `/video/v1/playback-restrictions`

#### RealTimeBreakdown

| Field | Description |
| --- | --- |
| `"concurrent_viewers"` |  |
| `"display_value"` |  |
| `"metric_value"` |  |
| `"negative_impact"` |  |
| `"starting_up_viewers"` |  |
| `"value"` |  |

Operations: List.

API path: `/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown`

#### RealTimeHistogramTimeseries

| Field | Description |
| --- | --- |
| `"average"` |  |
| `"bucket_values"` |  |
| `"max_percentage"` |  |
| `"median"` |  |
| `"p95"` |  |
| `"sum"` |  |
| `"timestamp"` |  |

Operations: List.

API path: `/data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries`

#### RealTimeTimeseries

| Field | Description |
| --- | --- |
| `"concurrent_viewers"` |  |
| `"date"` |  |
| `"value"` |  |

Operations: List.

API path: `/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries`

#### SignalLiveStreamComplete

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: Update.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/complete`

#### SigningKey

| Field | Description |
| --- | --- |
| `"created_at"` | Time at which the object was created. |
| `"data"` |  |
| `"id"` | Unique identifier for the Signing Key. |
| `"private_key"` | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

Operations: Create, Load, Remove.

API path: `/system/v1/signing-keys`

#### SimulcastTarget

| Field | Description |
| --- | --- |
| `"error_severity"` | The severity of the error encountered by the simulcast target. |
| `"id"` | ID of the Simulcast Target |
| `"passthrough"` | Arbitrary user-supplied metadata set when creating a simulcast target. |
| `"status"` | The current status of the simulcast target. |
| `"stream_key"` | Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. |
| `"url"` | The RTMP(s) or SRT endpoint for a simulcast destination. |

Operations: Create, Load.

API path: `/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets`

#### StaticRendition

| Field | Description |
| --- | --- |
| `"passthrough"` | Arbitrary user-supplied metadata set for the static rendition. |
| `"resolution"` |  |

Operations: Create.

API path: `/video/v1/assets/{ASSET_ID}/static-renditions`

#### SubviewBreakdownTimeseries

| Field | Description |
| --- | --- |
| `"date"` |  |
| `"status"` |  |
| `"values"` |  |

Operations: List.

API path: `/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown-timeseries`

#### SubviewOverallValue

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"meta"` |  |
| `"timeframe"` |  |
| `"total_row_count"` | Always `null` for this endpoint — a single aggregate value has no row count. |

Operations: List.

API path: `/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/overall`

#### Summarize

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/summarize`

#### TranscriptionVocabulary

| Field | Description |
| --- | --- |
| `"created_at"` | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `"id"` | Unique identifier for the Transcription Vocabulary |
| `"name"` | The user-supplied name of the Transcription Vocabulary. |
| `"passthrough"` | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `"phrases"` | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `"updated_at"` | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

Operations: Create, Load, Remove, Update.

API path: `/video/v1/transcription-vocabularies`

#### TranslateAudio

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/translate-audio`

#### TranslateCaption

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp (seconds) when the job was created. |
| `"directive"` | The directive run that dispatched this job. |
| `"errors"` | Error details. |
| `"id"` | Unique job identifier. |
| `"outputs"` | Workflow results. |
| `"parameters"` |  |
| `"passthrough"` | Arbitrary string supplied at creation, returned as-is. |
| `"resources"` | Related Mux resources linked to this job. |
| `"status"` | Current job status. |
| `"units_consumed"` | Number of Mux AI units consumed by this job. |
| `"updated_at"` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `"workflow"` |  |

Operations: Create, Load.

API path: `/robots/v0/jobs/translate-captions`

#### UpdateAssetTrack

| Field | Description |
| --- | --- |
| `"auto_language_confidence"` | The confidence value (0-1) of the determined language. |
| `"closed_captions"` | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `"duration"` | The duration in seconds of the track media. |
| `"id"` | Unique identifier for the Track |
| `"language_code"` | The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'. |
| `"max_channels"` | The maximum number of audio channels the track supports. |
| `"max_frame_rate"` | The maximum frame rate available for the track. |
| `"max_height"` | The maximum height in pixels available for the track. |
| `"max_width"` | The maximum width in pixels available for the track. |
| `"name"` | The name of the track containing a human-readable description. |
| `"passthrough"` | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `"primary"` | For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset. |
| `"status"` | The status of the track. |
| `"text_source"` | The source of the text contained in a Track of type `text`. |
| `"text_type"` | This parameter is only set for `text` type tracks. |
| `"type"` | The type of track |

Operations: Update.

API path: `/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}`

#### Upload

| Field | Description |
| --- | --- |
| `"asset_id"` | Only set once the upload is in the `asset_created` state. |
| `"cors_origin"` | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `"error"` | Only set if an error occurred during asset creation. |
| `"id"` | Unique identifier for the Direct Upload. |
| `"new_asset_settings"` |  |
| `"status"` |  |
| `"test"` | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `"timeout"` | Max time in seconds for the signed upload URL to be valid. |
| `"url"` | The URL to upload the associated source media to. |

Operations: Create, Load, Update.

API path: `/video/v1/uploads`

#### UrlSigningKey

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/video/v1/signing-keys/{SIGNING_KEY_ID}`

#### VideoView

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"id"` |  |
| `"timeframe"` |  |
| `"total_row_count"` |  |

Operations: Load.

API path: `/data/v1/video-views/{VIDEO_VIEW_ID}`

#### Webhook

| Field | Description |
| --- | --- |
| `"address"` | The URL where Mux sends webhook notifications. |
| `"created_at"` | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `"enabled"` | Whether Mux attempts to deliver notifications to this webhook. |
| `"id"` | Unique identifier for the webhook. |
| `"signing_secret"` | Secret used to verify that webhook payloads were sent by Mux. |

Operations: Create, Load, Remove, Update.

API path: `/system/v1/webhooks`

#### WhoAmI

| Field | Description |
| --- | --- |
| `"access_token_name"` |  |
| `"environment_id"` |  |
| `"environment_name"` |  |
| `"environment_type"` |  |
| `"organization_id"` |  |
| `"organization_name"` |  |
| `"permissions"` |  |

Operations: Load.

API path: `/system/v1/whoami`



## Entities


### Annotation

Create an instance: `annotation := client.Annotation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | Datetime when the annotation applies |
| `id` | `string` | Unique identifier for the annotation |
| `note` | `string` | The annotation note content |
| `sub_property_id` | `string` | Customer-defined sub-property identifier |

#### Example: Load

```go
annotation, err := client.Annotation(nil).Load(map[string]any{"id": "annotation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(annotation) // the loaded record
```

#### Example: Create

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


### AskQuestion

Create an instance: `askQuestion := client.AskQuestion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
askQuestion, err := client.AskQuestion(nil).Load(map[string]any{"id": "ask_question_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(askQuestion) // the loaded record
```

#### Example: Create

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


### Asset

Create an instance: `asset := client.Asset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `string` | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `string` | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `data` | `map[string]any` |  |
| `directives` | `[]any` | The Mux Robots directives applied to the asset. |
| `duration` | `float64` | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `string` | This field is deprecated. |
| `errors` | `map[string]any` | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `bool` | Whether to perform shot detection on this asset. |
| `id` | `string` | Unique identifier for the Asset. |
| `ingest_type` | `string` | The type of ingest used to create the asset. |
| `is_live` | `bool` | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `string` | Unique identifier for the live stream. |
| `master` | `map[string]any` | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `string` |  |
| `max_resolution_tier` | `string` | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `float64` | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `string` | This field is deprecated. |
| `meta` | `map[string]any` | Customer provided metadata about this asset. |
| `mp4_support` | `string` | Deprecated. |
| `non_standard_input_reasons` | `map[string]any` | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `bool` | Normalize the audio track loudness level. |
| `passthrough` | `string` | You can set this field to anything you want. |
| `playback_ids` | `[]any` | An array of Playback ID objects. |
| `progress` | `map[string]any` | Detailed state information about the asset ingest process. |
| `recording_times` | `[]any` | An array of individual live stream recording sessions. |
| `resolution_tier` | `string` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `map[string]any` | The results of generating shots on the video |
| `source_asset_id` | `string` | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `map[string]any` | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `string` | The status of the asset. |
| `test` | `bool` | True means this live stream is a test asset. |
| `thumbnail_time` | `float64` | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `[]any` | The individual media tracks that make up an asset. |
| `upload_id` | `string` | Unique identifier for the Direct Upload. |
| `video_quality` | `string` | The video quality controls the cost, quality, and available platform features for the asset. |

#### Example: Load

```go
asset, err := client.Asset(nil).Load(map[string]any{"id": "asset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(asset) // the loaded record
```

#### Example: Create

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


### AssetOrLiveStreamId

Create an instance: `assetOrLiveStreamId := client.AssetOrLiveStreamId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The Playback ID used to retrieve the corresponding asset or the live stream ID |
| `object` | `map[string]any` | Describes the Asset or LiveStream object associated with the playback ID. |
| `policy` | `string` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Load

```go
assetOrLiveStreamId, err := client.AssetOrLiveStreamId(nil).Load(map[string]any{"playback_id": "playback_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assetOrLiveStreamId) // the loaded record
```


### AssetPlaybackId

Create an instance: `assetPlaybackId := client.AssetPlaybackId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drm_configuration_id` | `string` | The DRM configuration used by this playback ID. |
| `id` | `string` | Unique identifier for the PlaybackID |
| `policy` | `string` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Load

```go
assetPlaybackId, err := client.AssetPlaybackId(nil).Load(map[string]any{"id": "asset_playback_id_id", "asset_id": "asset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assetPlaybackId) // the loaded record
```


### AssetShot

Create an instance: `assetShot := client.AssetShot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `map[string]any` | An object describing any errors encountered during the shot detection process. |
| `shots_manifest_url` | `string` | A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. |
| `status` | `string` | The status of the shot detection process |

#### Example: Load

```go
assetShot, err := client.AssetShot(nil).Load(map[string]any{"asset_id": "asset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assetShot) // the loaded record
```


### CreatePlaybackId

Create an instance: `createPlaybackId := client.CreatePlaybackId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drm_configuration_id` | `string` | The DRM configuration used by this playback ID. |
| `policy` | `string` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Create

```go
result, err := client.CreatePlaybackId(nil).Create(map[string]any{
    "asset_id": "example_asset_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CreateTrack

Create an instance: `createTrack := client.CreateTrack(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed_captions` | `bool` | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `language_code` | `string` | The language code of this track. |
| `name` | `string` | The name of the track containing a human-readable description. |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `text_type` | `string` |  |
| `type` | `string` |  |
| `url` | `string` | The URL of the file that Mux should download and use. |

#### Example: Create

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


### Directive

Create an instance: `directive := client.Directive(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the directive was created. |
| `id` | `string` | Stable directive identifier (drv_...). |
| `name` | `string` | Human-readable directive name. |
| `resources` | `[]any` | Resource declarations. |
| `subject` | `map[string]any` |  |
| `updated_at` | `int` | Unix timestamp (seconds) when the directive was last updated. |
| `workflows` | `[]any` | Workflow bindings. |

#### Example: Load

```go
directive, err := client.Directive(nil).Load(map[string]any{"id": "directive_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(directive) // the loaded record
```

#### Example: List

```go
directives, err := client.Directive(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(directives) // the array of records
```

#### Example: Create

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


### DirectiveRunDetail

Create an instance: `directiveRunDetail := client.DirectiveRunDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `any` | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `[]any` | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `string` | Unique run identifier (drvrun_...). |
| `started_at` | `int` | Unix timestamp (seconds) when the run started. |
| `status` | `string` | Current run status. |
| `subject_id` | `string` | The bare Mux asset ID this run targeted. |

#### Example: Load

```go
directiveRunDetail, err := client.DirectiveRunDetail(nil).Load(map[string]any{"directive_id": "directive_id", "run_id": "run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(directiveRunDetail) // the loaded record
```


### DirectiveRunList

Create an instance: `directiveRunList := client.DirectiveRunList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `any` | Unix timestamp (seconds) when the run reached terminal state. |
| `node_states` | `[]any` | Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`. |
| `run_id` | `string` | Unique run identifier (drvrun_...). |
| `started_at` | `int` | Unix timestamp (seconds) when the run started. |
| `status` | `string` | Current run status. |
| `subject_id` | `string` | The bare Mux asset ID this run targeted. |

#### Example: List

```go
directiveRunLists, err := client.DirectiveRunList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(directiveRunLists) // the array of records
```


### DrmConfiguration

Create an instance: `drmConfiguration := client.DrmConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the DRM Configuration. |

#### Example: Load

```go
drmConfiguration, err := client.DrmConfiguration(nil).Load(map[string]any{"id": "drm_configuration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(drmConfiguration) // the loaded record
```


### EditCaption

Create an instance: `editCaption := client.EditCaption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
editCaption, err := client.EditCaption(nil).Load(map[string]any{"id": "edit_caption_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(editCaption) // the loaded record
```

#### Example: Create

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


### EngagementHeatmap

Create an instance: `engagementHeatmap := client.EngagementHeatmap(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` |  |

#### Example: List

```go
engagementHeatmaps, err := client.EngagementHeatmap(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(engagementHeatmaps) // the array of records
```


### EngagementHotspot

Create an instance: `engagementHotspot := client.EngagementHotspot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` |  |

#### Example: List

```go
engagementHotspots, err := client.EngagementHotspot(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(engagementHotspots) // the array of records
```


### FindBestThumbnail

Create an instance: `findBestThumbnail := client.FindBestThumbnail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
findBestThumbnail, err := client.FindBestThumbnail(nil).Load(map[string]any{"id": "find_best_thumbnail_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(findBestThumbnail) // the loaded record
```

#### Example: Create

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


### FindKeyMoment

Create an instance: `findKeyMoment := client.FindKeyMoment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
findKeyMoment, err := client.FindKeyMoment(nil).Load(map[string]any{"id": "find_key_moment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(findKeyMoment) // the loaded record
```

#### Example: Create

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


### FindScene

Create an instance: `findScene := client.FindScene(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
findScene, err := client.FindScene(nil).Load(map[string]any{"id": "find_scene_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(findScene) // the loaded record
```

#### Example: Create

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


### GenerateAssetShot

Create an instance: `generateAssetShot := client.GenerateAssetShot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.GenerateAssetShot(nil).Create(map[string]any{
    "asset_id": "example_asset_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GenerateChapter

Create an instance: `generateChapter := client.GenerateChapter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
generateChapter, err := client.GenerateChapter(nil).Load(map[string]any{"id": "generate_chapter_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(generateChapter) // the loaded record
```

#### Example: Create

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


### GenerateEngagementInsight

Create an instance: `generateEngagementInsight := client.GenerateEngagementInsight(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
generateEngagementInsight, err := client.GenerateEngagementInsight(nil).Load(map[string]any{"id": "generate_engagement_insight_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(generateEngagementInsight) // the loaded record
```

#### Example: Create

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


### GeneratePremiumCaption

Create an instance: `generatePremiumCaption := client.GeneratePremiumCaption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
generatePremiumCaption, err := client.GeneratePremiumCaption(nil).Load(map[string]any{"id": "generate_premium_caption_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(generatePremiumCaption) // the loaded record
```

#### Example: Create

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


### GenerateTrackSubtitle

Create an instance: `generateTrackSubtitle := client.GenerateTrackSubtitle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generated_subtitles` | `[]any` | Generate subtitle tracks using automatic speech recognition with this configuration. |

#### Example: Create

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


### Incident

Create an instance: `incident := client.Incident(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `id` | `string` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` |  |

#### Example: Load

```go
incident, err := client.Incident(nil).Load(map[string]any{"id": "incident_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incident) // the loaded record
```


### InputInfo

Create an instance: `inputInfo := client.InputInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `map[string]any` |  |
| `settings` | `map[string]any` | An array of objects that each describe an input file to be used to create the asset. |

#### Example: List

```go
inputInfos, err := client.InputInfo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(inputInfos) // the array of records
```


### JobSummary

Create an instance: `jobSummary := client.JobSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `id` | `string` | Unique job identifier. |
| `links` | `map[string]any` | Hypermedia links for this job. |
| `status` | `string` | Current job status. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Workflow type that created this job. |

#### Example: Create

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


### ListAllMetricValue

Create an instance: `listAllMetricValue := client.ListAllMetricValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ended_views` | `int` |  |
| `items` | `[]any` |  |
| `metric` | `string` |  |
| `name` | `string` |  |
| `started_views` | `int` |  |
| `total_playing_time` | `int` |  |
| `type` | `string` |  |
| `unique_viewers` | `int` |  |
| `value` | `float64` |  |
| `view_count` | `int` |  |
| `watch_time` | `int` |  |

#### Example: List

```go
listAllMetricValues, err := client.ListAllMetricValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listAllMetricValues) // the array of records
```


### ListAnnotation

Create an instance: `listAnnotation := client.ListAnnotation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | Datetime when the annotation applies |
| `id` | `string` | Unique identifier for the annotation |
| `note` | `string` | The annotation note content |
| `sub_property_id` | `string` | Customer-defined sub-property identifier |

#### Example: List

```go
listAnnotations, err := client.ListAnnotation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listAnnotations) // the array of records
```


### ListAsset

Create an instance: `listAsset := client.ListAsset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `string` | The aspect ratio of the asset in the form of `width:height`, for example `16:9`. |
| `created_at` | `string` | Time the Asset was created, defined as a Unix timestamp (seconds since epoch). |
| `directives` | `[]any` | The Mux Robots directives applied to the asset. |
| `duration` | `float64` | The duration of the asset in seconds (max duration for a single asset is 12 hours). |
| `encoding_tier` | `string` | This field is deprecated. |
| `errors` | `map[string]any` | Object that describes any errors that happened when processing this asset. |
| `generate_shots` | `bool` | Whether to perform shot detection on this asset. |
| `id` | `string` | Unique identifier for the Asset. |
| `ingest_type` | `string` | The type of ingest used to create the asset. |
| `is_live` | `bool` | Indicates whether the live stream that created this asset is currently `active` and not in `idle` state. |
| `live_stream_id` | `string` | Unique identifier for the live stream. |
| `master` | `map[string]any` | An object containing the current status of Master Access and the link to the Master MP4 file when ready. |
| `master_access` | `string` |  |
| `max_resolution_tier` | `string` | Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. |
| `max_stored_frame_rate` | `float64` | The maximum frame rate that has been stored for the asset. |
| `max_stored_resolution` | `string` | This field is deprecated. |
| `meta` | `map[string]any` | Customer provided metadata about this asset. |
| `mp4_support` | `string` | Deprecated. |
| `non_standard_input_reasons` | `map[string]any` | An object containing one or more reasons the input file is non-standard. |
| `normalize_audio` | `bool` | Normalize the audio track loudness level. |
| `passthrough` | `string` | You can set this field to anything you want. |
| `playback_ids` | `[]any` | An array of Playback ID objects. |
| `progress` | `map[string]any` | Detailed state information about the asset ingest process. |
| `recording_times` | `[]any` | An array of individual live stream recording sessions. |
| `resolution_tier` | `string` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage. |
| `shots` | `map[string]any` | The results of generating shots on the video |
| `source_asset_id` | `string` | Asset Identifier of the video used as the source for creating the clip. |
| `static_renditions` | `map[string]any` | An object containing the current status of any static renditions (MP4s) for this asset. |
| `status` | `string` | The status of the asset. |
| `test` | `bool` | True means this live stream is a test asset. |
| `thumbnail_time` | `float64` | The media time within the asset used when a thumbnail without an explicit time is requested. |
| `tracks` | `[]any` | The individual media tracks that make up an asset. |
| `upload_id` | `string` | Unique identifier for the Direct Upload. |
| `video_quality` | `string` | The video quality controls the cost, quality, and available platform features for the asset. |

#### Example: List

```go
listAssets, err := client.ListAsset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listAssets) // the array of records
```


### ListBreakdownValue

Create an instance: `listBreakdownValue := client.ListBreakdownValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field` | `string` |  |
| `negative_impact` | `int` |  |
| `total_playing_time` | `int` |  |
| `total_watch_time` | `int` |  |
| `value` | `float64` |  |
| `views` | `int` |  |

#### Example: List

```go
listBreakdownValues, err := client.ListBreakdownValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listBreakdownValues) // the array of records
```


### ListDeliveryUsage

Create an instance: `listDeliveryUsage := client.ListDeliveryUsage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_duration` | `float64` | The duration of the asset in seconds. |
| `asset_encoding_tier` | `string` | This field is deprecated. |
| `asset_id` | `string` | Unique identifier for the asset. |
| `asset_resolution_tier` | `string` | The resolution tier that the asset was ingested at, affecting billing for ingest & storage |
| `asset_state` | `string` | The state of the asset. |
| `asset_video_quality` | `string` | The video quality that the asset was ingested at. |
| `created_at` | `string` | Time at which the asset was created. |
| `deleted_at` | `string` | If exists, time at which the asset was deleted. |
| `delivered_seconds` | `float64` | Total number of delivered seconds during this time window. |
| `delivered_seconds_by_resolution` | `map[string]any` | Seconds delivered broken into resolution tiers. |
| `live_stream_id` | `string` | Unique identifier for the live stream that created the asset. |
| `passthrough` | `string` | The `passthrough` value for the asset. |

#### Example: List

```go
listDeliveryUsages, err := client.ListDeliveryUsage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listDeliveryUsages) // the array of records
```


### ListDimension

Create an instance: `listDimension := client.ListDimension(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` |  |

#### Example: List

```go
listDimensions, err := client.ListDimension(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listDimensions) // the array of records
```


### ListDimensionValue

Create an instance: `listDimensionValue := client.ListDimensionValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `timeframe` | `[]any` |  |
| `total_count` | `int` |  |
| `total_row_count` | `int` |  |
| `value` | `string` |  |

#### Example: Load

```go
listDimensionValue, err := client.ListDimensionValue(nil).Load(map[string]any{"dimension_id": "dimension_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(listDimensionValue) // the loaded record
```

#### Example: List

```go
listDimensionValues, err := client.ListDimensionValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listDimensionValues) // the array of records
```


### ListDrmConfiguration

Create an instance: `listDrmConfiguration := client.ListDrmConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the DRM Configuration. |

#### Example: List

```go
listDrmConfigurations, err := client.ListDrmConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listDrmConfigurations) // the array of records
```


### ListError

Create an instance: `listError := client.ListError(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `int` | The error code |
| `count` | `int` | The total number of views that experienced this error. |
| `description` | `string` | Description of the error. |
| `id` | `int` | A unique identifier for this error. |
| `last_seen` | `string` | The last time this error was seen (ISO 8601 timestamp). |
| `message` | `string` | The error message. |
| `notes` | `string` | Notes that are attached to this error. |
| `percentage` | `float64` | The percentage of views that experienced this error. |
| `player_error_code` | `string` | The string version of the error code |

#### Example: List

```go
listErrors, err := client.ListError(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listErrors) // the array of records
```


### ListExport

Create an instance: `listExport := client.ListExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` |  |

#### Example: List

```go
listExports, err := client.ListExport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listExports) // the array of records
```


### ListFilter

Create an instance: `listFilter := client.ListFilter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` |  |

#### Example: List

```go
listFilters, err := client.ListFilter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listFilters) // the array of records
```


### ListFilterValue

Create an instance: `listFilterValue := client.ListFilterValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` |  |

#### Example: Load

```go
listFilterValue, err := client.ListFilterValue(nil).Load(map[string]any{"filter_id": "filter_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(listFilterValue) // the loaded record
```


### ListIncident

Create an instance: `listIncident := client.ListIncident(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affected_views` | `int` |  |
| `affected_views_per_hour` | `int` |  |
| `affected_views_per_hour_on_open` | `int` |  |
| `breakdowns` | `[]any` |  |
| `description` | `string` |  |
| `error_description` | `string` |  |
| `id` | `string` |  |
| `impact` | `string` |  |
| `incident_key` | `string` |  |
| `measured_value` | `float64` |  |
| `measured_value_on_close` | `float64` |  |
| `measurement` | `string` |  |
| `notification_rules` | `[]any` |  |
| `notifications` | `[]any` |  |
| `resolved_at` | `string` |  |
| `sample_size` | `int` |  |
| `sample_size_unit` | `string` |  |
| `severity` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `threshold` | `float64` |  |

#### Example: List

```go
listIncidents, err := client.ListIncident(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listIncidents) // the array of records
```


### ListInsight

Create an instance: `listInsight := client.ListInsight(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `filter_column` | `string` |  |
| `filter_value` | `string` |  |
| `metric` | `float64` |  |
| `negative_impact_score` | `float64` |  |
| `total_playing_time` | `int` |  |
| `total_views` | `int` |  |
| `total_watch_time` | `int` |  |

#### Example: List

```go
listInsights, err := client.ListInsight(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listInsights) // the array of records
```


### ListJob

Create an instance: `listJob := client.ListJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `id` | `string` | Unique job identifier. |
| `links` | `map[string]any` | Hypermedia links for this job. |
| `status` | `string` | Current job status. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` | Workflow type that created this job. |

#### Example: List

```go
listJobs, err := client.ListJob(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listJobs) // the array of records
```


### ListLiveStream

Create an instance: `listLiveStream := client.ListLiveStream(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_asset_id` | `string` | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `string` | The protocol used for the active ingest stream. |
| `audio_only` | `bool` | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `string` | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `[]any` | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `[]any` | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `string` | Unique identifier for the Live Stream. |
| `latency_mode` | `string` | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `bool` | This field is deprecated. |
| `max_continuous_duration` | `int` | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `map[string]any` | Customer provided metadata about this live stream. |
| `new_asset_settings` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `[]any` | An array of Playback ID objects. |
| `recent_asset_ids` | `[]any` | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `string` | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `float64` | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `bool` | This field is deprecated. |
| `simulcast_targets` | `[]any` | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | `string` | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `string` | `idle` indicates that there is no active broadcast. |
| `stream_key` | `string` | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | `bool` | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | `bool` | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

#### Example: List

```go
listLiveStreams, err := client.ListLiveStream(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listLiveStreams) // the array of records
```


### ListMonitoringDimension

Create an instance: `listMonitoringDimension := client.ListMonitoringDimension(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` |  |
| `name` | `string` |  |

#### Example: List

```go
listMonitoringDimensions, err := client.ListMonitoringDimension(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listMonitoringDimensions) // the array of records
```


### ListMonitoringMetric

Create an instance: `listMonitoringMetric := client.ListMonitoringMetric(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` |  |
| `name` | `string` |  |

#### Example: List

```go
listMonitoringMetrics, err := client.ListMonitoringMetric(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listMonitoringMetrics) // the array of records
```


### ListPlaybackRestriction

Create an instance: `listPlaybackRestriction := client.ListPlaybackRestriction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Unique identifier for the Playback Restriction. |
| `referrer` | `map[string]any` | A list of domains allowed to play your videos. |
| `updated_at` | `string` | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `map[string]any` | Rules that control what user agents are allowed to play your videos. |

#### Example: List

```go
listPlaybackRestrictions, err := client.ListPlaybackRestriction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listPlaybackRestrictions) // the array of records
```


### ListRealTimeDimension

Create an instance: `listRealTimeDimension := client.ListRealTimeDimension(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` |  |
| `name` | `string` |  |

#### Example: List

```go
listRealTimeDimensions, err := client.ListRealTimeDimension(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listRealTimeDimensions) // the array of records
```


### ListRealTimeMetric

Create an instance: `listRealTimeMetric := client.ListRealTimeMetric(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` |  |
| `name` | `string` |  |

#### Example: List

```go
listRealTimeMetrics, err := client.ListRealTimeMetric(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listRealTimeMetrics) // the array of records
```


### ListRelatedIncident

Create an instance: `listRelatedIncident := client.ListRelatedIncident(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affected_views` | `int` |  |
| `affected_views_per_hour` | `int` |  |
| `affected_views_per_hour_on_open` | `int` |  |
| `breakdowns` | `[]any` |  |
| `description` | `string` |  |
| `error_description` | `string` |  |
| `id` | `string` |  |
| `impact` | `string` |  |
| `incident_key` | `string` |  |
| `measured_value` | `float64` |  |
| `measured_value_on_close` | `float64` |  |
| `measurement` | `string` |  |
| `notification_rules` | `[]any` |  |
| `notifications` | `[]any` |  |
| `resolved_at` | `string` |  |
| `sample_size` | `int` |  |
| `sample_size_unit` | `string` |  |
| `severity` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `threshold` | `float64` |  |

#### Example: List

```go
listRelatedIncidents, err := client.ListRelatedIncident(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listRelatedIncidents) // the array of records
```


### ListSigningKey

Create an instance: `listSigningKey := client.ListSigningKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the Signing Key. |
| `private_key` | `string` | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

#### Example: List

```go
listSigningKeys, err := client.ListSigningKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listSigningKeys) // the array of records
```


### ListSubviewBreakdownValue

Create an instance: `listSubviewBreakdownValue := client.ListSubviewBreakdownValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `breakdown_value` | `string` |  |
| `metric_value` | `float64` |  |

#### Example: List

```go
listSubviewBreakdownValues, err := client.ListSubviewBreakdownValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listSubviewBreakdownValues) // the array of records
```


### ListSubviewComparisonValue

Create an instance: `listSubviewComparisonValue := client.ListSubviewComparisonValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dimension_value` | `string` |  |
| `values` | `[]any` |  |

#### Example: List

```go
listSubviewComparisonValues, err := client.ListSubviewComparisonValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listSubviewComparisonValues) // the array of records
```


### ListSubviewDimension

Create an instance: `listSubviewDimension := client.ListSubviewDimension(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `subview` | `[]any` |  |
| `view` | `[]any` |  |

#### Example: Load

```go
listSubviewDimension, err := client.ListSubviewDimension(nil).Load(map[string]any{"subview_type": "subview_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(listSubviewDimension) // the loaded record
```


### ListSubviewDimensionValue

Create an instance: `listSubviewDimensionValue := client.ListSubviewDimensionValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `meta` | `any` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` |  |

#### Example: Load

```go
listSubviewDimensionValue, err := client.ListSubviewDimensionValue(nil).Load(map[string]any{"dimension_name": "dimension_name", "subview_metric_id": "subview_metric_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(listSubviewDimensionValue) // the loaded record
```


### ListTranscriptionVocabulary

Create an instance: `listTranscriptionVocabulary := client.ListTranscriptionVocabulary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Unique identifier for the Transcription Vocabulary |
| `name` | `string` | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `[]any` | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `updated_at` | `string` | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

#### Example: List

```go
listTranscriptionVocabularys, err := client.ListTranscriptionVocabulary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listTranscriptionVocabularys) // the array of records
```


### ListUpload

Create an instance: `listUpload := client.ListUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_id` | `string` | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `string` | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `map[string]any` | Only set if an error occurred during asset creation. |
| `id` | `string` | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `map[string]any` |  |
| `status` | `string` |  |
| `test` | `bool` | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | `int` | Max time in seconds for the signed upload URL to be valid. |
| `url` | `string` | The URL to upload the associated source media to. |

#### Example: List

```go
listUploads, err := client.ListUpload(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listUploads) // the array of records
```


### ListUsageExport

Create an instance: `listUsageExport := client.ListUsageExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | The calendar date this CSV covers, in `YYYY-MM-DD` format. |
| `download_url` | `string` | A pre-signed URL to download the CSV. |
| `download_url_expires_at` | `int` | Unix timestamp (seconds since epoch) at which `download_url` expires. |
| `file_size` | `int` | Uncompressed size of the CSV file in bytes. |

#### Example: List

```go
listUsageExports, err := client.ListUsageExport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listUsageExports) // the array of records
```


### ListVideoView

Create an instance: `listVideoView := client.ListVideoView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country_code` | `string` |  |
| `error_type_id` | `int` |  |
| `id` | `string` |  |
| `playback_failure` | `bool` |  |
| `player_error_code` | `string` |  |
| `player_error_message` | `string` |  |
| `total_row_count` | `int` |  |
| `video_title` | `string` |  |
| `view_end` | `string` |  |
| `view_start` | `string` |  |
| `viewer_application_name` | `string` |  |
| `viewer_experience_score` | `float64` |  |
| `viewer_os_family` | `string` |  |
| `watch_time` | `int` |  |

#### Example: List

```go
listVideoViews, err := client.ListVideoView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listVideoViews) // the array of records
```


### ListVideoViewExport

Create an instance: `listVideoViewExport := client.ListVideoViewExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `export_date` | `string` |  |
| `files` | `[]any` |  |

#### Example: List

```go
listVideoViewExports, err := client.ListVideoViewExport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listVideoViewExports) // the array of records
```


### ListWebhook

Create an instance: `listWebhook := client.ListWebhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The URL where Mux sends webhook notifications. |
| `created_at` | `string` | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | `bool` | Whether Mux attempts to deliver notifications to this webhook. |
| `id` | `string` | Unique identifier for the webhook. |
| `signing_secret` | `string` | Secret used to verify that webhook payloads were sent by Mux. |

#### Example: List

```go
listWebhooks, err := client.ListWebhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listWebhooks) // the array of records
```


### LiveStream

Create an instance: `liveStream := client.LiveStream(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_asset_id` | `string` | The Asset that is currently being created if there is an active broadcast. |
| `active_ingest_protocol` | `string` | The protocol used for the active ingest stream. |
| `advanced_playback_policies` | `[]any` | An array of playback policy objects that you want applied on this live stream and available through `playback_ids`. |
| `audio_only` | `bool` | The live stream only processes the audio track if the value is set to true. |
| `created_at` | `string` | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). |
| `embedded_subtitles` | `[]any` | Describes the embedded closed caption configuration of the incoming live stream. |
| `generated_subtitles` | `[]any` | Configure the incoming live stream to include subtitles created with automatic speech recognition. |
| `id` | `string` | Unique identifier for the Live Stream. |
| `latency_mode` | `string` | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. |
| `low_latency` | `bool` | This field is deprecated. |
| `max_continuous_duration` | `int` | The time in seconds a live stream may be continuously active before being disconnected. |
| `meta` | `map[string]any` | Customer provided metadata about this live stream. |
| `new_asset_settings` | `map[string]any` | Updates the new asset settings to use to generate a new asset for this live stream. |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the asset. |
| `playback_ids` | `[]any` | An array of Playback ID objects. |
| `playback_policies` | `[]any` | An array of playback policy names that you want applied to this live stream and available through `playback_ids`. |
| `playback_policy` | `[]any` | Deprecated. |
| `recent_asset_ids` | `[]any` | An array of strings with the most recent Asset IDs that were created from this Live Stream. |
| `reconnect_slate_url` | `string` | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. |
| `reconnect_window` | `float64` | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s… |
| `reduced_latency` | `bool` | This field is deprecated. |
| `simulcast_targets` | `[]any` | Each Simulcast Target contains configuration details to broadcast (or "restream") a live stream to a third-party streaming service. |
| `srt_passphrase` | `string` | Unique key used for encrypting a stream to a Mux SRT endpoint. |
| `status` | `string` | `idle` indicates that there is no active broadcast. |
| `stream_key` | `string` | Unique key used for streaming to a Mux RTMP endpoint. |
| `test` | `bool` | True means this live stream is a test live stream. |
| `use_slate_for_standard_latency` | `bool` | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. |

#### Example: Load

```go
liveStream, err := client.LiveStream(nil).Load(map[string]any{"id": "live_stream_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(liveStream) // the loaded record
```

#### Example: Create

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


### LiveStreamPlaybackId

Create an instance: `liveStreamPlaybackId := client.LiveStreamPlaybackId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drm_configuration_id` | `string` | The DRM configuration used by this playback ID. |
| `id` | `string` | Unique identifier for the PlaybackID |
| `policy` | `string` | * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. |

#### Example: Load

```go
liveStreamPlaybackId, err := client.LiveStreamPlaybackId(nil).Load(map[string]any{"id": "live_stream_playback_id_id", "live_stream_id": "live_stream_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(liveStreamPlaybackId) // the loaded record
```


### MetricTimeseriesData

Create an instance: `metricTimeseriesData := client.MetricTimeseriesData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `meta` | `map[string]any` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` |  |

#### Example: List

```go
metricTimeseriesDatas, err := client.MetricTimeseriesData(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(metricTimeseriesDatas) // the array of records
```


### Moderate

Create an instance: `moderate := client.Moderate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
moderate, err := client.Moderate(nil).Load(map[string]any{"id": "moderate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(moderate) // the loaded record
```

#### Example: Create

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


### MonitoringBreakdown

Create an instance: `monitoringBreakdown := client.MonitoringBreakdown(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `int` |  |
| `display_value` | `string` |  |
| `metric_value` | `float64` |  |
| `negative_impact` | `int` |  |
| `starting_up_viewers` | `int` |  |
| `value` | `string` |  |

#### Example: List

```go
monitoringBreakdowns, err := client.MonitoringBreakdown(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(monitoringBreakdowns) // the array of records
```


### MonitoringBreakdownTimeseries

Create an instance: `monitoringBreakdownTimeseries := client.MonitoringBreakdownTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `values` | `[]any` |  |

#### Example: List

```go
monitoringBreakdownTimeseriess, err := client.MonitoringBreakdownTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(monitoringBreakdownTimeseriess) // the array of records
```


### MonitoringHistogramTimeseries

Create an instance: `monitoringHistogramTimeseries := client.MonitoringHistogramTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average` | `float64` |  |
| `bucket_values` | `[]any` |  |
| `max_percentage` | `float64` |  |
| `median` | `float64` |  |
| `p95` | `float64` |  |
| `sum` | `int` |  |
| `timestamp` | `string` |  |

#### Example: List

```go
monitoringHistogramTimeseriess, err := client.MonitoringHistogramTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(monitoringHistogramTimeseriess) // the array of records
```


### MonitoringTimeseries

Create an instance: `monitoringTimeseries := client.MonitoringTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `int` |  |
| `date` | `string` |  |
| `value` | `float64` |  |

#### Example: List

```go
monitoringTimeseriess, err := client.MonitoringTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(monitoringTimeseriess) // the array of records
```


### Overall

Create an instance: `overall := client.Overall(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `meta` | `map[string]any` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` |  |

#### Example: List

```go
overalls, err := client.Overall(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(overalls) // the array of records
```


### PlaybackRestriction

Create an instance: `playbackRestriction := client.PlaybackRestriction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Unique identifier for the Playback Restriction. |
| `referrer` | `map[string]any` | A list of domains allowed to play your videos. |
| `updated_at` | `string` | Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch). |
| `user_agent` | `map[string]any` | Rules that control what user agents are allowed to play your videos. |

#### Example: Load

```go
playbackRestriction, err := client.PlaybackRestriction(nil).Load(map[string]any{"id": "playback_restriction_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(playbackRestriction) // the loaded record
```

#### Example: Create

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


### RealTimeBreakdown

Create an instance: `realTimeBreakdown := client.RealTimeBreakdown(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `int` |  |
| `display_value` | `string` |  |
| `metric_value` | `float64` |  |
| `negative_impact` | `int` |  |
| `starting_up_viewers` | `int` |  |
| `value` | `string` |  |

#### Example: List

```go
realTimeBreakdowns, err := client.RealTimeBreakdown(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(realTimeBreakdowns) // the array of records
```


### RealTimeHistogramTimeseries

Create an instance: `realTimeHistogramTimeseries := client.RealTimeHistogramTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average` | `float64` |  |
| `bucket_values` | `[]any` |  |
| `max_percentage` | `float64` |  |
| `median` | `float64` |  |
| `p95` | `float64` |  |
| `sum` | `int` |  |
| `timestamp` | `string` |  |

#### Example: List

```go
realTimeHistogramTimeseriess, err := client.RealTimeHistogramTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(realTimeHistogramTimeseriess) // the array of records
```


### RealTimeTimeseries

Create an instance: `realTimeTimeseries := client.RealTimeTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `concurrent_viewers` | `int` |  |
| `date` | `string` |  |
| `value` | `float64` |  |

#### Example: List

```go
realTimeTimeseriess, err := client.RealTimeTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(realTimeTimeseriess) // the array of records
```


### SignalLiveStreamComplete

Create an instance: `signalLiveStreamComplete := client.SignalLiveStreamComplete(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |


### SigningKey

Create an instance: `signingKey := client.SigningKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Time at which the object was created. |
| `data` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the Signing Key. |
| `private_key` | `string` | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). |

#### Example: Load

```go
signingKey, err := client.SigningKey(nil).Load(map[string]any{"id": "signing_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(signingKey) // the loaded record
```

#### Example: Create

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


### SimulcastTarget

Create an instance: `simulcastTarget := client.SimulcastTarget(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
simulcastTarget, err := client.SimulcastTarget(nil).Load(map[string]any{"id": "simulcast_target_id", "live_stream_id": "live_stream_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(simulcastTarget) // the loaded record
```

#### Example: Create

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


### StaticRendition

Create an instance: `staticRendition := client.StaticRendition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the static rendition. |
| `resolution` | `string` |  |

#### Example: Create

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


### SubviewBreakdownTimeseries

Create an instance: `subviewBreakdownTimeseries := client.SubviewBreakdownTimeseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `status` | `string` |  |
| `values` | `[]any` |  |

#### Example: List

```go
subviewBreakdownTimeseriess, err := client.SubviewBreakdownTimeseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subviewBreakdownTimeseriess) // the array of records
```


### SubviewOverallValue

Create an instance: `subviewOverallValue := client.SubviewOverallValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `meta` | `map[string]any` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` | Always `null` for this endpoint — a single aggregate value has no row count. |

#### Example: List

```go
subviewOverallValues, err := client.SubviewOverallValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subviewOverallValues) // the array of records
```


### Summarize

Create an instance: `summarize := client.Summarize(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
summarize, err := client.Summarize(nil).Load(map[string]any{"id": "summarize_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(summarize) // the loaded record
```

#### Example: Create

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


### TranscriptionVocabulary

Create an instance: `transcriptionVocabulary := client.TranscriptionVocabulary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). |
| `id` | `string` | Unique identifier for the Transcription Vocabulary |
| `name` | `string` | The user-supplied name of the Transcription Vocabulary. |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the Transcription Vocabulary. |
| `phrases` | `[]any` | Phrases, individual words, or proper names to include in the Transcription Vocabulary. |
| `updated_at` | `string` | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). |

#### Example: Load

```go
transcriptionVocabulary, err := client.TranscriptionVocabulary(nil).Load(map[string]any{"id": "transcription_vocabulary_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(transcriptionVocabulary) // the loaded record
```

#### Example: Create

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


### TranslateAudio

Create an instance: `translateAudio := client.TranslateAudio(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
translateAudio, err := client.TranslateAudio(nil).Load(map[string]any{"id": "translate_audio_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(translateAudio) // the loaded record
```

#### Example: Create

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


### TranslateCaption

Create an instance: `translateCaption := client.TranslateCaption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp (seconds) when the job was created. |
| `directive` | `map[string]any` | The directive run that dispatched this job. |
| `errors` | `[]any` | Error details. |
| `id` | `string` | Unique job identifier. |
| `outputs` | `map[string]any` | Workflow results. |
| `parameters` | `map[string]any` |  |
| `passthrough` | `string` | Arbitrary string supplied at creation, returned as-is. |
| `resources` | `map[string]any` | Related Mux resources linked to this job. |
| `status` | `string` | Current job status. |
| `units_consumed` | `int` | Number of Mux AI units consumed by this job. |
| `updated_at` | `int` | Unix timestamp (seconds) of the job's last state transition (e.g. |
| `workflow` | `string` |  |

#### Example: Load

```go
translateCaption, err := client.TranslateCaption(nil).Load(map[string]any{"id": "translate_caption_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(translateCaption) // the loaded record
```

#### Example: Create

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


### UpdateAssetTrack

Create an instance: `updateAssetTrack := client.UpdateAssetTrack(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_language_confidence` | `float64` | The confidence value (0-1) of the determined language. |
| `closed_captions` | `bool` | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). |
| `duration` | `float64` | The duration in seconds of the track media. |
| `id` | `string` | Unique identifier for the Track |
| `language_code` | `string` | The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'. |
| `max_channels` | `int` | The maximum number of audio channels the track supports. |
| `max_frame_rate` | `float64` | The maximum frame rate available for the track. |
| `max_height` | `int` | The maximum height in pixels available for the track. |
| `max_width` | `int` | The maximum width in pixels available for the track. |
| `name` | `string` | The name of the track containing a human-readable description. |
| `passthrough` | `string` | Arbitrary user-supplied metadata set for the track either when creating the asset or track. |
| `primary` | `bool` | For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset. |
| `status` | `string` | The status of the track. |
| `text_source` | `string` | The source of the text contained in a Track of type `text`. |
| `text_type` | `string` | This parameter is only set for `text` type tracks. |
| `type` | `string` | The type of track |


### Upload

Create an instance: `upload := client.Upload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_id` | `string` | Only set once the upload is in the `asset_created` state. |
| `cors_origin` | `string` | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. |
| `error` | `map[string]any` | Only set if an error occurred during asset creation. |
| `id` | `string` | Unique identifier for the Direct Upload. |
| `new_asset_settings` | `map[string]any` |  |
| `status` | `string` |  |
| `test` | `bool` | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset. |
| `timeout` | `int` | Max time in seconds for the signed upload URL to be valid. |
| `url` | `string` | The URL to upload the associated source media to. |

#### Example: Load

```go
upload, err := client.Upload(nil).Load(map[string]any{"id": "upload_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(upload) // the loaded record
```

#### Example: Create

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


### UrlSigningKey

Create an instance: `urlSigningKey := client.UrlSigningKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### VideoView

Create an instance: `videoView := client.VideoView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `id` | `string` |  |
| `timeframe` | `[]any` |  |
| `total_row_count` | `int` |  |

#### Example: Load

```go
videoView, err := client.VideoView(nil).Load(map[string]any{"id": "video_view_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(videoView) // the loaded record
```


### Webhook

Create an instance: `webhook := client.Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The URL where Mux sends webhook notifications. |
| `created_at` | `string` | Time at which the webhook was created, as an ISO 8601 UTC datetime. |
| `enabled` | `bool` | Whether Mux attempts to deliver notifications to this webhook. |
| `id` | `string` | Unique identifier for the webhook. |
| `signing_secret` | `string` | Secret used to verify that webhook payloads were sent by Mux. |

#### Example: Load

```go
webhook, err := client.Webhook(nil).Load(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhook) // the loaded record
```

#### Example: Create

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


### WhoAmI

Create an instance: `whoAmI := client.WhoAmI(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token_name` | `string` |  |
| `environment_id` | `string` |  |
| `environment_name` | `string` |  |
| `environment_type` | `string` |  |
| `organization_id` | `string` |  |
| `organization_name` | `string` |  |
| `permissions` | `[]any` |  |

#### Example: Load

```go
whoAmI, err := client.WhoAmI(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(whoAmI) // the loaded record
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/mux-sdk/go/
├── mux.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/mux-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
listdimensionvalue := client.ListDimensionValue(nil)
listdimensionvalue.List(nil, nil)

// listdimensionvalue.Data() now returns the listdimensionvalue data from the last list
// listdimensionvalue.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
