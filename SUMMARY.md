# Mux API

Mux is how developers build online video. This API encompasses both Mux Video and Mux Data functionality to help you build your video-related projects better and faster than ever before.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 73 entities and 153 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Annotation

Results: Created; OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `date`: Datetime when the annotation applies
- `id`: Unique identifier for the annotation
- `note`: The annotation note content
- `sub_property_id`: Customer-defined sub-property identifier

### AskQuestion

Results: Ask questions job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### Asset

Results: Asset Created; OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `aspect_ratio`: The aspect ratio of the asset in the form of `width:height`, for example `16:9`.
- `created_at`: Time the Asset was created, defined as a Unix timestamp (seconds since epoch).
- `directives`: The Mux Robots directives applied to the asset.
- `duration`: The duration of the asset in seconds (max duration for a single asset is 12 hours).
- `encoding_tier`: This field is deprecated. Please use `video_quality` instead. The encoding tier informs the cost, quality, and available platform features for the asset. The default encoding tier for an account can be set in the Mux Dashboard. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)

### AssetOrLiveStreamId

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `id`: The Playback ID used to retrieve the corresponding asset or the live stream ID
- `object`: Describes the Asset or LiveStream object associated with the playback ID.
- `policy`: * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;` * `signed` playback IDs should be used with tokens `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;?token=&#123;TOKEN&#125;`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens. * `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).

### AssetPlaybackId

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `drm_configuration_id`: The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.
- `id`: Unique identifier for the PlaybackID
- `policy`: * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;` * `signed` playback IDs should be used with tokens `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;?token=&#123;TOKEN&#125;`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens. * `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).

### AssetShot

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `errors`: An object describing any errors encountered during the shot detection process. This field is only present when `status` is `errored`.
- `shots_manifest_url`: A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. This field is only present when `status` is `completed`.
- `status`: The status of the shot detection process

### CreatePlaybackId

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `drm_configuration_id`: The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.
- `policy`: * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;` * `signed` playback IDs should be used with tokens `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;?token=&#123;TOKEN&#125;`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens. * `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).

### CreateTrack

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `closed_captions`: Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). This parameter is only set tracks where `type` is `text` and `text_type` is `subtitles`.
- `language_code`: The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or &#39;auto&#39;. For example, `en` for English or `en-US` for the US version of English. This parameter is only set for `text` and `audio` track types. During automatic language detection for generated subtitles, this value will be set to `auto` until the language is determined.
- `name`: The name of the track containing a human-readable description. The HLS manifest will associate a subtitle `text` or `audio` track with this value. For example, the value should be &quot;English&quot; for a subtitle text track for the `language_code` value of `en-US`. This parameter is only set for `text` and `audio` track types.
- `passthrough`: Arbitrary user-supplied metadata set for the track either when creating the asset or track. This parameter is only set for `text` type tracks. Max 255 characters.
- `text_type`: This parameter is only set for `text` type tracks.

### Directive

Results: Directive run started; Directive created; List of directives; Directive; Directive deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the directive was created.
- `id`: Stable directive identifier (drv_...).
- `name`: Human-readable directive name.
- `resources`: Resource declarations.
- `updated_at`: Unix timestamp (seconds) when the directive was last updated.

### DirectiveRunDetail

Results: List of directive runs; Directive run.

SDK operations: `list`, `load`.

Key fields to recognise:

- `completed_at`: Unix timestamp (seconds) when the run reached terminal state. Null if still in progress.
- `node_states`: Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`.
- `run_id`: Unique run identifier (drvrun_...).
- `started_at`: Unix timestamp (seconds) when the run started.
- `status`: Current run status.

### DrmConfiguration

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `id`: Unique identifier for the DRM Configuration. Max 255 characters.

### EditCaption

Results: Caption editing job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### EngagementHeatmap

Results: OK.

SDK operations: `list`.

### EngagementHotspot

Results: OK.

SDK operations: `list`.

### FindBestThumbnail

Results: Find best thumbnails job queued; Find best thumbnails job state.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### FindKeyMoment

Results: Key moments job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### FindScene

Results: Find scenes job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### GenerateAssetShot

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `data`: The results of generating shots on the video

### GenerateChapter

Results: Chapters job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### GenerateEngagementInsight

Results: Engagement insights job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### GeneratePremiumCaption

Results: Caption generation job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### GenerateTrackSubtitle

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `generated_subtitles`: Generate subtitle tracks using automatic speech recognition with this configuration.

### Incident

Results: OK.

SDK operations: `list`, `load`.

### InputInfo

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `settings`: An array of objects that each describe an input file to be used to create the asset. As a shortcut, `input` can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.

### JobSummary

Results: Job cancelled successfully; List of jobs.

SDK operations: `create`, `list`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `id`: Unique job identifier.
- `links`: Hypermedia links for this job.
- `status`: Current job status.
- `updated_at`: Unix timestamp (seconds) of the job&#39;s last state transition (for example when it started processing or reached a terminal state).

### ListAllMetricValue

Results: OK.

SDK operations: `list`.

### ListBreakdownValue

Results: OK.

SDK operations: `list`.

### ListDeliveryUsage

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `asset_duration`: The duration of the asset in seconds.
- `asset_encoding_tier`: This field is deprecated. Please use `asset_video_quality` instead. The encoding tier that the asset was ingested at. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
- `asset_id`: Unique identifier for the asset.
- `asset_resolution_tier`: The resolution tier that the asset was ingested at, affecting billing for ingest &amp; storage
- `asset_state`: The state of the asset.

### ListDimensionValue

Results: OK.

SDK operations: `list`, `load`.

### ListError

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `code`: The error code
- `count`: The total number of views that experienced this error.
- `description`: Description of the error.
- `id`: A unique identifier for this error.
- `last_seen`: The last time this error was seen (ISO 8601 timestamp).

### ListExport

Results: OK.

SDK operations: `list`.

### ListFilterValue

Results: OK.

SDK operations: `list`, `load`.

### ListInsight

Results: OK.

SDK operations: `list`.

### ListMonitoringDimension

Results: OK.

SDK operations: `list`.

### ListMonitoringMetric

Results: OK.

SDK operations: `list`.

### ListRealTimeDimension

Results: OK.

SDK operations: `list`.

### ListRealTimeMetric

Results: OK.

SDK operations: `list`.

### ListRelatedIncident

Results: OK.

SDK operations: `list`.

### ListSubviewBreakdownValue

Results: OK.

SDK operations: `list`.

### ListSubviewComparisonValue

Results: OK.

SDK operations: `list`.

### ListSubviewDimension

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `total_row_count`: Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count.

### ListSubviewDimensionValue

Results: OK.

SDK operations: `load`.

### ListVideoViewExport

Results: OK.

SDK operations: `list`.

### LiveStream

Results: OK; Created; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `active_asset_id`: The Asset that is currently being created if there is an active broadcast.
- `active_ingest_protocol`: The protocol used for the active ingest stream. This is only set when the live stream is active.
- `advanced_playback_policies`: An array of playback policy objects that you want applied to this asset and available through `playback_ids`. `advanced_playback_policies` must be used instead of `playback_policies` when creating a DRM playback ID.
- `audio_only`: The live stream only processes the audio track if the value is set to true. Mux drops the video track if broadcasted.
- `created_at`: Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch).

### LiveStreamPlaybackId

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `drm_configuration_id`: The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.
- `id`: Unique identifier for the PlaybackID
- `policy`: * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;` * `signed` playback IDs should be used with tokens `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;?token=&#123;TOKEN&#125;`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens. * `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).

### MetricTimeseriesData

Results: OK.

SDK operations: `list`.

### Moderate

Results: Moderation job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### MonitoringBreakdown

Results: OK.

SDK operations: `list`.

### MonitoringBreakdownTimeseries

Results: OK.

SDK operations: `list`.

### MonitoringHistogramTimeseries

Results: OK.

SDK operations: `list`.

### MonitoringTimeseries

Results: OK.

SDK operations: `list`.

### Overall

Results: OK.

SDK operations: `list`.

### PlaybackRestriction

Results: Created; OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_at`: Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch).
- `id`: Unique identifier for the Playback Restriction. Max 255 characters.
- `referrer`: A list of domains allowed to play your videos.
- `updated_at`: Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch).
- `user_agent`: Rules that control what user agents are allowed to play your videos. Please see [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation) for more details on this feature.

### RealTimeBreakdown

Results: OK.

SDK operations: `list`.

### RealTimeHistogramTimeseries

Results: OK.

SDK operations: `list`.

### RealTimeTimeseries

Results: OK.

SDK operations: `list`.

### SignalLiveStreamComplete

Results: OK.

SDK operations: `update`.

### SigningKey

Results: Created; OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `created_at`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the Signing Key.
- `private_key`: A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). **Note that this value is only returned once when creating a URL signing key.**

### SimulcastTarget

Results: Created; OK.

SDK operations: `create`, `load`.

Key fields to recognise:

- `error_severity`: The severity of the error encountered by the simulcast target. This field is only set when the simulcast target is in the `errored` status. See the values of severities below and their descriptions. * `normal`: The simulcast target encountered an error either while attempting to connect to the third party live streaming service, or mid-broadcasting. A simulcast may transition back into the broadcasting state if a connection with the service can be re-established. * `fatal`: The simulcast target is incompatible with the current input to the parent live stream. No further attempts to this simulcast target will be made for the current live stream asset.
- `id`: ID of the Simulcast Target
- `passthrough`: Arbitrary user-supplied metadata set when creating a simulcast target.
- `status`: The current status of the simulcast target. See Statuses below for detailed description. * `idle`: Default status. When the parent live stream is in disconnected status, simulcast targets will be idle state. * `starting`: The simulcast target transitions into this state when the parent live stream transition into connected state. * `broadcasting`: The simulcast target has successfully connected to the third party live streaming service and is pushing video to that service. * `errored`: The simulcast target encountered an error either while attempting to connect to the third party live streaming service, or mid-broadcasting. When a simulcast target has this status it will have an `error_severity` field with more details about the error.
- `stream_key`: Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. Only used for RTMP(s) simulcast destinations.

### StaticRendition

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `passthrough`: Arbitrary user-supplied metadata set for the static rendition. Max 255 characters.
- `resolution`: Indicates the resolution of this specific MP4 version of this asset. Only present for static renditions created with the Static Renditions API. Not set for renditions created with the deprecated `mp4_support` option.

### SubviewBreakdownTimeseries

Results: OK.

SDK operations: `list`.

### SubviewOverallValue

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `total_row_count`: Always `null` for this endpoint, a single aggregate value has no row count.

### Summarize

Results: Summarize job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### TranscriptionVocabulary

Results: Transcription Vocabulary Created; OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_at`: Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch).
- `id`: Unique identifier for the Transcription Vocabulary
- `name`: The user-supplied name of the Transcription Vocabulary.
- `passthrough`: Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255 characters.
- `phrases`: Phrases, individual words, or proper names to include in the Transcription Vocabulary. When the Transcription Vocabulary is attached to a live stream&#39;s `generated_subtitles` configuration, the probability of successful speech recognition for these words or phrases is boosted.

### TranslateAudio

Results: Audio translation job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### TranslateCaption

Results: Caption translation job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### UpdateAssetTrack

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `auto_language_confidence`: The confidence value (0-1) of the determined language. This value only is available when automatic language detection is utilized in generated subtitles.
- `closed_captions`: Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). This parameter is only set tracks where `type` is `text` and `text_type` is `subtitles`.
- `duration`: The duration in seconds of the track media. This parameter is not set for `text` type tracks. This field is optional and may not be set. The top level `duration` field of an asset will always be set.
- `id`: Unique identifier for the Track
- `language_code`: The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or &#39;auto&#39;. For example, `en` for English or `en-US` for the US version of English. This parameter is only set for `text` and `audio` track types. During automatic language detection for generated subtitles, this value will be set to `auto` until the language is determined.

### Upload

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `asset_id`: Only set once the upload is in the `asset_created` state.
- `cors_origin`: If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers.
- `error`: Only set if an error occurred during asset creation.
- `id`: Unique identifier for the Direct Upload.
- `test`: Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset.

### UrlSigningKey

Results: No Content.

SDK operations: `remove`.

### UsageExport

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `date`: The calendar date this CSV covers, in `YYYY-MM-DD` format.
- `download_url`: A pre-signed URL to download the CSV. Valid until `download_url_expires_at`.
- `download_url_expires_at`: Unix timestamp (seconds since epoch) at which `download_url` expires.
- `file_size`: Uncompressed size of the CSV file in bytes. May be `null` if the size is unavailable.

### VideoView

Results: OK.

SDK operations: `list`, `load`.

### Webhook

Results: Created; OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `address`: The URL where Mux sends webhook notifications.
- `created_at`: Time at which the webhook was created, as an ISO 8601 UTC datetime.
- `enabled`: Whether Mux attempts to deliver notifications to this webhook.
- `id`: Unique identifier for the webhook.
- `signing_secret`: Secret used to verify that webhook payloads were sent by Mux. **Note that this value is only returned once when creating a webhook.**

### WhoAmI

Results: Information retrieved successfully.

SDK operations: `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Annotation | `create` | `POST /data/v1/annotations` | Required |
| Annotation | `list` | `GET /data/v1/annotations` | Required |
| Annotation | `load` | `GET /data/v1/annotations/{ANNOTATION_ID}` | Required |
| Annotation | `remove` | `DELETE /data/v1/annotations/{ANNOTATION_ID}` | Required |
| Annotation | `update` | `PATCH /data/v1/annotations/{ANNOTATION_ID}` | Required |
| AskQuestion | `create` | `POST /robots/v0/jobs/ask-questions` | Required |
| AskQuestion | `load` | `GET /robots/v0/jobs/ask-questions/{JOB_ID}` | Required |
| Asset | `create` | `POST /video/v1/assets` | Required |
| Asset | `list` | `GET /video/v1/assets` | Required |
| Asset | `load` | `GET /video/v1/assets/{ASSET_ID}` | Required |
| Asset | `remove` | `DELETE /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}` | Required |
| Asset | `remove` | `DELETE /video/v1/assets/{ASSET_ID}/static-renditions/{STATIC_RENDITION_ID}` | Required |
| Asset | `remove` | `DELETE /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}` | Required |
| Asset | `remove` | `DELETE /video/v1/assets/{ASSET_ID}/shots` | Required |
| Asset | `remove` | `DELETE /video/v1/assets/{ASSET_ID}/thumbnail-time` | Required |
| Asset | `remove` | `DELETE /video/v1/assets/{ASSET_ID}` | Required |
| Asset | `update` | `PUT /video/v1/assets/{ASSET_ID}/master-access` | Required |
| Asset | `update` | `PUT /video/v1/assets/{ASSET_ID}/mp4-support` | Required |
| Asset | `update` | `PATCH /video/v1/assets/{ASSET_ID}` | Required |
| AssetOrLiveStreamId | `load` | `GET /video/v1/playback-ids/{PLAYBACK_ID}` | Required |
| AssetPlaybackId | `load` | `GET /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}` | Required |
| AssetShot | `load` | `GET /video/v1/assets/{ASSET_ID}/shots` | Required |
| CreatePlaybackId | `create` | `POST /video/v1/assets/{ASSET_ID}/playback-ids` | Required |
| CreatePlaybackId | `create` | `POST /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids` | Required |
| CreateTrack | `create` | `POST /video/v1/assets/{ASSET_ID}/tracks` | Required |
| Directive | `create` | `POST /robots/v0/directives/{DIRECTIVE_ID}/runs` | Required |
| Directive | `create` | `POST /robots/v0/directives` | Required |
| Directive | `list` | `GET /robots/v0/directives` | Required |
| Directive | `load` | `GET /robots/v0/directives/{DIRECTIVE_ID}` | Required |
| Directive | `remove` | `DELETE /robots/v0/directives/{DIRECTIVE_ID}` | Required |
| DirectiveRunDetail | `list` | `GET /robots/v0/directives/{DIRECTIVE_ID}/runs` | Required |
| DirectiveRunDetail | `load` | `GET /robots/v0/directives/{DIRECTIVE_ID}/runs/{RUN_ID}` | Required |
| DrmConfiguration | `list` | `GET /video/v1/drm-configurations` | Required |
| DrmConfiguration | `load` | `GET /video/v1/drm-configurations/{DRM_CONFIGURATION_ID}` | Required |
| EditCaption | `create` | `POST /robots/v0/jobs/edit-captions` | Required |
| EditCaption | `load` | `GET /robots/v0/jobs/edit-captions/{JOB_ID}` | Required |
| EngagementHeatmap | `list` | `GET /data/v1/engagement/assets/{ASSET_ID}/heatmap` | Required |
| EngagementHeatmap | `list` | `GET /data/v1/engagement/playback-ids/{PLAYBACK_ID}/heatmap` | Required |
| EngagementHeatmap | `list` | `GET /data/v1/engagement/videos/{VIDEO_ID}/heatmap` | Required |
| EngagementHotspot | `list` | `GET /data/v1/engagement/assets/{ASSET_ID}/hotspots` | Required |
| EngagementHotspot | `list` | `GET /data/v1/engagement/playback-ids/{PLAYBACK_ID}/hotspots` | Required |
| EngagementHotspot | `list` | `GET /data/v1/engagement/videos/{VIDEO_ID}/hotspots` | Required |
| FindBestThumbnail | `create` | `POST /robots/v0/jobs/find-best-thumbnails` | Required |
| FindBestThumbnail | `load` | `GET /robots/v0/jobs/find-best-thumbnails/{JOB_ID}` | Required |
| FindKeyMoment | `create` | `POST /robots/v0/jobs/find-key-moments` | Required |
| FindKeyMoment | `load` | `GET /robots/v0/jobs/find-key-moments/{JOB_ID}` | Required |
| FindScene | `create` | `POST /robots/v0/jobs/find-scenes` | Required |
| FindScene | `load` | `GET /robots/v0/jobs/find-scenes/{JOB_ID}` | Required |
| GenerateAssetShot | `create` | `POST /video/v1/assets/{ASSET_ID}/shots` | Required |
| GenerateChapter | `create` | `POST /robots/v0/jobs/generate-chapters` | Required |
| GenerateChapter | `load` | `GET /robots/v0/jobs/generate-chapters/{JOB_ID}` | Required |
| GenerateEngagementInsight | `create` | `POST /robots/v0/jobs/generate-engagement-insights` | Required |
| GenerateEngagementInsight | `load` | `GET /robots/v0/jobs/generate-engagement-insights/{JOB_ID}` | Required |
| GeneratePremiumCaption | `create` | `POST /robots/v0/jobs/generate-premium-captions` | Required |
| GeneratePremiumCaption | `load` | `GET /robots/v0/jobs/generate-premium-captions/{JOB_ID}` | Required |
| GenerateTrackSubtitle | `create` | `POST /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles` | Required |
| Incident | `list` | `GET /data/v1/incidents` | Required |
| Incident | `load` | `GET /data/v1/incidents/{INCIDENT_ID}` | Required |
| InputInfo | `list` | `GET /video/v1/assets/{ASSET_ID}/input-info` | Required |
| JobSummary | `create` | `POST /robots/v0/jobs/{JOB_ID}/cancel` | Required |
| JobSummary | `list` | `GET /robots/v0/jobs` | Required |
| ListAllMetricValue | `list` | `GET /data/v1/metrics/comparison` | Required |
| ListBreakdownValue | `list` | `GET /data/v1/metrics/{METRIC_ID}/breakdown` | Required |
| ListDeliveryUsage | `list` | `GET /video/v1/delivery-usage` | Required |
| ListDimensionValue | `list` | `GET /data/v1/dimensions/{DIMENSION_ID}/elements` | Required |
| ListDimensionValue | `list` | `GET /data/v1/dimensions` | Required |
| ListDimensionValue | `load` | `GET /data/v1/dimensions/{DIMENSION_ID}` | Required |
| ListError | `list` | `GET /data/v1/errors` | Required |
| ListExport | `list` | `GET /data/v1/exports` | Required |
| ListFilterValue | `list` | `GET /data/v1/filters` | Required |
| ListFilterValue | `load` | `GET /data/v1/filters/{FILTER_ID}` | Required |
| ListInsight | `list` | `GET /data/v1/metrics/{METRIC_ID}/insights` | Required |
| ListMonitoringDimension | `list` | `GET /data/v1/monitoring/dimensions` | Required |
| ListMonitoringMetric | `list` | `GET /data/v1/monitoring/metrics` | Required |
| ListRealTimeDimension | `list` | `GET /data/v1/realtime/dimensions` | Required |
| ListRealTimeMetric | `list` | `GET /data/v1/realtime/metrics` | Required |
| ListRelatedIncident | `list` | `GET /data/v1/incidents/{INCIDENT_ID}/related` | Required |
| ListSubviewBreakdownValue | `list` | `GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown` | Required |
| ListSubviewComparisonValue | `list` | `GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/comparison` | Required |
| ListSubviewDimension | `load` | `GET /data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions` | Required |
| ListSubviewDimensionValue | `load` | `GET /data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions/{DIMENSION_NAME}` | Required |
| ListVideoViewExport | `list` | `GET /data/v1/exports/views` | Required |
| LiveStream | `create` | `POST /video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key` | Required |
| LiveStream | `create` | `POST /video/v1/live-streams` | Required |
| LiveStream | `list` | `GET /video/v1/live-streams` | Required |
| LiveStream | `load` | `GET /video/v1/live-streams/{LIVE_STREAM_ID}` | Required |
| LiveStream | `remove` | `DELETE /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}` | Required |
| LiveStream | `remove` | `DELETE /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}` | Required |
| LiveStream | `remove` | `DELETE /video/v1/live-streams/{LIVE_STREAM_ID}` | Required |
| LiveStream | `remove` | `DELETE /video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions` | Required |
| LiveStream | `update` | `PATCH /video/v1/live-streams/{LIVE_STREAM_ID}` | Required |
| LiveStream | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/disable` | Required |
| LiveStream | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles` | Required |
| LiveStream | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/enable` | Required |
| LiveStream | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles` | Required |
| LiveStream | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions` | Required |
| LiveStreamPlaybackId | `load` | `GET /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}` | Required |
| MetricTimeseriesData | `list` | `GET /data/v1/metrics/{METRIC_ID}/timeseries` | Required |
| Moderate | `create` | `POST /robots/v0/jobs/moderate` | Required |
| Moderate | `load` | `GET /robots/v0/jobs/moderate/{JOB_ID}` | Required |
| MonitoringBreakdown | `list` | `GET /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown` | Required |
| MonitoringBreakdownTimeseries | `list` | `GET /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries` | Required |
| MonitoringHistogramTimeseries | `list` | `GET /data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries` | Required |
| MonitoringTimeseries | `list` | `GET /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries` | Required |
| Overall | `list` | `GET /data/v1/metrics/{METRIC_ID}/overall` | Required |
| PlaybackRestriction | `create` | `POST /video/v1/playback-restrictions` | Required |
| PlaybackRestriction | `list` | `GET /video/v1/playback-restrictions` | Required |
| PlaybackRestriction | `load` | `GET /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}` | Required |
| PlaybackRestriction | `remove` | `DELETE /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}` | Required |
| PlaybackRestriction | `update` | `PUT /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer` | Required |
| PlaybackRestriction | `update` | `PUT /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent` | Required |
| RealTimeBreakdown | `list` | `GET /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown` | Required |
| RealTimeHistogramTimeseries | `list` | `GET /data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries` | Required |
| RealTimeTimeseries | `list` | `GET /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries` | Required |
| SignalLiveStreamComplete | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/complete` | Required |
| SigningKey | `create` | `POST /system/v1/signing-keys` | Required |
| SigningKey | `create` | `POST /video/v1/signing-keys` | Required |
| SigningKey | `list` | `GET /system/v1/signing-keys` | Required |
| SigningKey | `list` | `GET /video/v1/signing-keys` | Required |
| SigningKey | `load` | `GET /system/v1/signing-keys/{SIGNING_KEY_ID}` | Required |
| SigningKey | `load` | `GET /video/v1/signing-keys/{SIGNING_KEY_ID}` | Required |
| SigningKey | `remove` | `DELETE /system/v1/signing-keys/{SIGNING_KEY_ID}` | Required |
| SimulcastTarget | `create` | `POST /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets` | Required |
| SimulcastTarget | `load` | `GET /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}` | Required |
| StaticRendition | `create` | `POST /video/v1/assets/{ASSET_ID}/static-renditions` | Required |
| SubviewBreakdownTimeseries | `list` | `GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown-timeseries` | Required |
| SubviewOverallValue | `list` | `GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/overall` | Required |
| Summarize | `create` | `POST /robots/v0/jobs/summarize` | Required |
| Summarize | `load` | `GET /robots/v0/jobs/summarize/{JOB_ID}` | Required |
| TranscriptionVocabulary | `create` | `POST /video/v1/transcription-vocabularies` | Required |
| TranscriptionVocabulary | `list` | `GET /video/v1/transcription-vocabularies` | Required |
| TranscriptionVocabulary | `load` | `GET /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}` | Required |
| TranscriptionVocabulary | `remove` | `DELETE /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}` | Required |
| TranscriptionVocabulary | `update` | `PUT /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}` | Required |
| TranslateAudio | `create` | `POST /robots/v0/jobs/translate-audio` | Required |
| TranslateAudio | `load` | `GET /robots/v0/jobs/translate-audio/{JOB_ID}` | Required |
| TranslateCaption | `create` | `POST /robots/v0/jobs/translate-captions` | Required |
| TranslateCaption | `load` | `GET /robots/v0/jobs/translate-captions/{JOB_ID}` | Required |
| UpdateAssetTrack | `update` | `PATCH /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}` | Required |
| Upload | `create` | `POST /video/v1/uploads` | Required |
| Upload | `list` | `GET /video/v1/uploads` | Required |
| Upload | `load` | `GET /video/v1/uploads/{UPLOAD_ID}` | Required |
| Upload | `update` | `PUT /video/v1/uploads/{UPLOAD_ID}/cancel` | Required |
| UrlSigningKey | `remove` | `DELETE /video/v1/signing-keys/{SIGNING_KEY_ID}` | Required |
| UsageExport | `list` | `GET /system/v1/usage/exports` | Required |
| VideoView | `list` | `GET /data/v1/video-views` | Required |
| VideoView | `load` | `GET /data/v1/video-views/{VIDEO_VIEW_ID}` | Required |
| Webhook | `create` | `POST /system/v1/webhooks` | Required |
| Webhook | `list` | `GET /system/v1/webhooks` | Required |
| Webhook | `load` | `GET /system/v1/webhooks/{WEBHOOK_ID}` | Required |
| Webhook | `remove` | `DELETE /system/v1/webhooks/{WEBHOOK_ID}` | Required |
| Webhook | `update` | `PATCH /system/v1/webhooks/{WEBHOOK_ID}` | Required |
| WhoAmI | `load` | `GET /system/v1/whoami` | Required |

## Connect to the API

- Mux Production API: `https://api.mux.com`

The default credential is sent in the `Authorization` header with the `Basic` prefix.

The Mux Video API uses an Access Token and Secret Key for authentication. If you haven&#39;t already, [generate a new Access Token](https://dashboard.mux.com/settings/access-tokens) in the Access Token settings of your Mux account dashboard. Once you have an Access Token ID and Secret, you can then simply include those as the username (id) and password (secret) in the same way you use traditional basic auth.

OAuth authorization token, used as a Bearer Auth header

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `mux_list`: List records for an entity. Supported entities: `annotation`, `asset`, `directive`, `directive_run_detail`, `drm_configuration`, `engagement_heatmap`, `engagement_hotspot`, `incident`, `input_info`, `job_summary`, `list_all_metric_value`, `list_breakdown_value`, `list_delivery_usage`, `list_dimension_value`, `list_error`, `list_export`, `list_filter_value`, `list_insight`, `list_monitoring_dimension`, `list_monitoring_metric`, `list_real_time_dimension`, `list_real_time_metric`, `list_related_incident`, `list_subview_breakdown_value`, `list_subview_comparison_value`, `list_video_view_export`, `live_stream`, `metric_timeseries_data`, `monitoring_breakdown`, `monitoring_breakdown_timeseries`, `monitoring_histogram_timeseries`, `monitoring_timeseries`, `overall`, `playback_restriction`, `real_time_breakdown`, `real_time_histogram_timeseries`, `real_time_timeseries`, `signing_key`, `subview_breakdown_timeseries`, `subview_overall_value`, `transcription_vocabulary`, `upload`, `usage_export`, `video_view`, `webhook`.
- `mux_load`: Load one record for an entity. Supported entities: `annotation`, `ask_question`, `asset`, `asset_or_live_stream_id`, `asset_playback_id`, `asset_shot`, `directive`, `directive_run_detail`, `drm_configuration`, `edit_caption`, `find_best_thumbnail`, `find_key_moment`, `find_scene`, `generate_chapter`, `generate_engagement_insight`, `generate_premium_caption`, `incident`, `list_dimension_value`, `list_filter_value`, `list_subview_dimension`, `list_subview_dimension_value`, `live_stream`, `live_stream_playback_id`, `moderate`, `playback_restriction`, `signing_key`, `simulcast_target`, `summarize`, `transcription_vocabulary`, `translate_audio`, `translate_caption`, `upload`, `video_view`, `webhook`, `who_am_i`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `debug`: Request/response capture ring buffer for debugging
- `idempotency`: Idempotency keys for safe retries of mutating operations
- `metrics`: Statistics capture: per-operation counters and latency
- `paging`: Pagination signals for list operations
- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

