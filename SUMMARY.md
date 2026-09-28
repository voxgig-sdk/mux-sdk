# Mux API

Mux is how developers build online video. This API encompasses both Mux Video and Mux Data functionality to help you build your video-related projects better and faster than ever before.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 88 entities and 153 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Annotation](docs/api/annotation.html)

Results: Created; OK; No Content.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `date`: Datetime when the annotation applies
- `id`: Unique identifier for the annotation
- `note`: The annotation note content
- `sub_property_id`: Customer-defined sub-property identifier

### [AskQuestion](docs/api/ask_question.html)

Results: Ask questions job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [Asset](docs/api/asset.html)

Results: Asset Created; OK; No Content.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `aspect_ratio`: The aspect ratio of the asset in the form of `width:height`, for example `16:9`.
- `created_at`: Time the Asset was created, defined as a Unix timestamp (seconds since epoch).
- `directives`: The Mux Robots directives applied to the asset.
- `duration`: The duration of the asset in seconds (max duration for a single asset is 12 hours).
- `encoding_tier`: This field is deprecated. Please use `video_quality` instead. The encoding tier informs the cost, quality, and available platform features for the asset. The default encoding tier for an account can be set in the Mux Dashboard. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)

### [AssetOrLiveStreamId](docs/api/asset_or_live_stream_id.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `id`: The Playback ID used to retrieve the corresponding asset or the live stream ID
- `object`: Describes the Asset or LiveStream object associated with the playback ID.
- `policy`: * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;` * `signed` playback IDs should be used with tokens `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;?token=&#123;TOKEN&#125;`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens. * `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).

### [AssetPlaybackId](docs/api/asset_playback_id.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `drm_configuration_id`: The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.
- `id`: Unique identifier for the PlaybackID
- `policy`: * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;` * `signed` playback IDs should be used with tokens `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;?token=&#123;TOKEN&#125;`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens. * `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).

### [AssetShot](docs/api/asset_shot.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `errors`: An object describing any errors encountered during the shot detection process. This field is only present when `status` is `errored`.
- `shots_manifest_url`: A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot. This field is only present when `status` is `completed`.
- `status`: The status of the shot detection process

### [CreatePlaybackId](docs/api/create_playback_id.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `drm_configuration_id`: The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.
- `policy`: * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;` * `signed` playback IDs should be used with tokens `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;?token=&#123;TOKEN&#125;`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens. * `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).

### [CreateTrack](docs/api/create_track.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `closed_captions`: Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). This parameter is only set tracks where `type` is `text` and `text_type` is `subtitles`.
- `language_code`: The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or &#39;auto&#39;. For example, `en` for English or `en-US` for the US version of English. This parameter is only set for `text` and `audio` track types. During automatic language detection for generated subtitles, this value will be set to `auto` until the language is determined.
- `name`: The name of the track containing a human-readable description. The HLS manifest will associate a subtitle `text` or `audio` track with this value. For example, the value should be &quot;English&quot; for a subtitle text track for the `language_code` value of `en-US`. This parameter is only set for `text` and `audio` track types.
- `passthrough`: Arbitrary user-supplied metadata set for the track either when creating the asset or track. This parameter is only set for `text` type tracks. Max 255 characters.
- `text_type`: This parameter is only set for `text` type tracks.

### [Directive](docs/api/directive.html)

Results: Directive run started; Directive created; List of directives; Directive; Directive deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the directive was created.
- `id`: Stable directive identifier (drv_...).
- `name`: Human-readable directive name.
- `resources`: Resource declarations.
- `updated_at`: Unix timestamp (seconds) when the directive was last updated.

### [DirectiveRunDetail](docs/api/directive_run_detail.html)

Results: Directive run.

SDK operations: `load`.

Key fields to recognise:

- `completed_at`: Unix timestamp (seconds) when the run reached terminal state. Null if still in progress.
- `node_states`: Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`.
- `run_id`: Unique run identifier (drvrun_...).
- `started_at`: Unix timestamp (seconds) when the run started.
- `status`: Current run status.

### [DirectiveRunList](docs/api/directive_run_list.html)

Results: List of directive runs.

SDK operations: `list`.

Key fields to recognise:

- `completed_at`: Unix timestamp (seconds) when the run reached terminal state. Null if still in progress.
- `node_states`: Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`.
- `run_id`: Unique run identifier (drvrun_...).
- `started_at`: Unix timestamp (seconds) when the run started.
- `status`: Current run status.

### [DrmConfiguration](docs/api/drm_configuration.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `id`: Unique identifier for the DRM Configuration. Max 255 characters.

### [EditCaption](docs/api/edit_caption.html)

Results: Caption editing job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [EngagementHeatmap](docs/api/engagement_heatmap.html)

Results: OK.

SDK operations: `list`.

### [EngagementHotspot](docs/api/engagement_hotspot.html)

Results: OK.

SDK operations: `list`.

### [FindBestThumbnail](docs/api/find_best_thumbnail.html)

Results: Find best thumbnails job queued; Find best thumbnails job state.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [FindKeyMoment](docs/api/find_key_moment.html)

Results: Key moments job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [FindScene](docs/api/find_scene.html)

Results: Find scenes job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [GenerateAssetShot](docs/api/generate_asset_shot.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `data`: The results of generating shots on the video

### [GenerateChapter](docs/api/generate_chapter.html)

Results: Chapters job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [GenerateEngagementInsight](docs/api/generate_engagement_insight.html)

Results: Engagement insights job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [GeneratePremiumCaption](docs/api/generate_premium_caption.html)

Results: Caption generation job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [GenerateTrackSubtitle](docs/api/generate_track_subtitle.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `generated_subtitles`: Generate subtitle tracks using automatic speech recognition with this configuration.

### [Incident](docs/api/incident.html)

Results: OK.

SDK operations: `load`.

### [InputInfo](docs/api/input_info.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `settings`: An array of objects that each describe an input file to be used to create the asset. As a shortcut, `input` can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.

### [JobSummary](docs/api/job_summary.html)

Results: Job cancelled successfully.

SDK operations: `create`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `id`: Unique job identifier.
- `links`: Hypermedia links for this job.
- `status`: Current job status.
- `updated_at`: Unix timestamp (seconds) of the job&#39;s last state transition (for example when it started processing or reached a terminal state).

### [ListAllMetricValue](docs/api/list_all_metric_value.html)

Results: OK.

SDK operations: `list`.

### [ListAnnotation](docs/api/list_annotation.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `date`: Datetime when the annotation applies
- `id`: Unique identifier for the annotation
- `note`: The annotation note content
- `sub_property_id`: Customer-defined sub-property identifier

### [ListAsset](docs/api/list_asset.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `aspect_ratio`: The aspect ratio of the asset in the form of `width:height`, for example `16:9`.
- `created_at`: Time the Asset was created, defined as a Unix timestamp (seconds since epoch).
- `directives`: The Mux Robots directives applied to the asset.
- `duration`: The duration of the asset in seconds (max duration for a single asset is 12 hours).
- `encoding_tier`: This field is deprecated. Please use `video_quality` instead. The encoding tier informs the cost, quality, and available platform features for the asset. The default encoding tier for an account can be set in the Mux Dashboard. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)

### [ListBreakdownValue](docs/api/list_breakdown_value.html)

Results: OK.

SDK operations: `list`.

### [ListDeliveryUsage](docs/api/list_delivery_usage.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `asset_duration`: The duration of the asset in seconds.
- `asset_encoding_tier`: This field is deprecated. Please use `asset_video_quality` instead. The encoding tier that the asset was ingested at. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)
- `asset_id`: Unique identifier for the asset.
- `asset_resolution_tier`: The resolution tier that the asset was ingested at, affecting billing for ingest &amp; storage
- `asset_state`: The state of the asset.

### [ListDimension](docs/api/list_dimension.html)

Results: OK.

SDK operations: `list`.

### [ListDimensionValue](docs/api/list_dimension_value.html)

Results: OK.

SDK operations: `list`, `load`.

### [ListDrmConfiguration](docs/api/list_drm_configuration.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `id`: Unique identifier for the DRM Configuration. Max 255 characters.

### [ListError](docs/api/list_error.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `code`: The error code
- `count`: The total number of views that experienced this error.
- `description`: Description of the error.
- `id`: A unique identifier for this error.
- `last_seen`: The last time this error was seen (ISO 8601 timestamp).

### [ListExport](docs/api/list_export.html)

Results: OK.

SDK operations: `list`.

### [ListFilter](docs/api/list_filter.html)

Results: OK.

SDK operations: `list`.

### [ListFilterValue](docs/api/list_filter_value.html)

Results: OK.

SDK operations: `load`.

### [ListIncident](docs/api/list_incident.html)

Results: OK.

SDK operations: `list`.

### [ListInsight](docs/api/list_insight.html)

Results: OK.

SDK operations: `list`.

### [ListJob](docs/api/list_job.html)

Results: List of jobs.

SDK operations: `list`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `id`: Unique job identifier.
- `links`: Hypermedia links for this job.
- `status`: Current job status.
- `updated_at`: Unix timestamp (seconds) of the job&#39;s last state transition (for example when it started processing or reached a terminal state).

### [ListLiveStream](docs/api/list_live_stream.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `active_asset_id`: The Asset that is currently being created if there is an active broadcast.
- `active_ingest_protocol`: The protocol used for the active ingest stream. This is only set when the live stream is active.
- `audio_only`: The live stream only processes the audio track if the value is set to true. Mux drops the video track if broadcasted.
- `created_at`: Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch).
- `embedded_subtitles`: Describes the embedded closed caption configuration of the incoming live stream.

### [ListMonitoringDimension](docs/api/list_monitoring_dimension.html)

Results: OK.

SDK operations: `list`.

### [ListMonitoringMetric](docs/api/list_monitoring_metric.html)

Results: OK.

SDK operations: `list`.

### [ListPlaybackRestriction](docs/api/list_playback_restriction.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `created_at`: Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch).
- `id`: Unique identifier for the Playback Restriction. Max 255 characters.
- `referrer`: A list of domains allowed to play your videos.
- `updated_at`: Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch).
- `user_agent`: Rules that control what user agents are allowed to play your videos. Please see [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation) for more details on this feature.

### [ListRealTimeDimension](docs/api/list_real_time_dimension.html)

Results: OK.

SDK operations: `list`.

### [ListRealTimeMetric](docs/api/list_real_time_metric.html)

Results: OK.

SDK operations: `list`.

### [ListRelatedIncident](docs/api/list_related_incident.html)

Results: OK.

SDK operations: `list`.

### [ListSigningKey](docs/api/list_signing_key.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `created_at`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the Signing Key.
- `private_key`: A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). **Note that this value is only returned once when creating a URL signing key.**

### [ListSubviewBreakdownValue](docs/api/list_subview_breakdown_value.html)

Results: OK.

SDK operations: `list`.

### [ListSubviewComparisonValue](docs/api/list_subview_comparison_value.html)

Results: OK.

SDK operations: `list`.

### [ListSubviewDimension](docs/api/list_subview_dimension.html)

Results: OK.

SDK operations: `load`.

### [ListSubviewDimensionValue](docs/api/list_subview_dimension_value.html)

Results: OK.

SDK operations: `load`.

### [ListTranscriptionVocabulary](docs/api/list_transcription_vocabulary.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `created_at`: Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch).
- `id`: Unique identifier for the Transcription Vocabulary
- `name`: The user-supplied name of the Transcription Vocabulary.
- `passthrough`: Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255 characters.
- `phrases`: Phrases, individual words, or proper names to include in the Transcription Vocabulary. When the Transcription Vocabulary is attached to a live stream&#39;s `generated_subtitles` configuration, the probability of successful speech recognition for these words or phrases is boosted.

### [ListUpload](docs/api/list_upload.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `asset_id`: Only set once the upload is in the `asset_created` state.
- `cors_origin`: If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers.
- `error`: Only set if an error occurred during asset creation.
- `id`: Unique identifier for the Direct Upload.
- `test`: Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset.

### [ListUsageExport](docs/api/list_usage_export.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `date`: The calendar date this CSV covers, in `YYYY-MM-DD` format.
- `download_url`: A pre-signed URL to download the CSV. Valid until `download_url_expires_at`.
- `download_url_expires_at`: Unix timestamp (seconds since epoch) at which `download_url` expires.
- `file_size`: Uncompressed size of the CSV file in bytes. May be `null` if the size is unavailable.

### [ListVideoView](docs/api/list_video_view.html)

Results: OK.

SDK operations: `list`.

### [ListVideoViewExport](docs/api/list_video_view_export.html)

Results: OK.

SDK operations: `list`.

### [ListWebhook](docs/api/list_webhook.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `address`: The URL where Mux sends webhook notifications.
- `created_at`: Time at which the webhook was created, as an ISO 8601 UTC datetime.
- `enabled`: Whether Mux attempts to deliver notifications to this webhook.
- `id`: Unique identifier for the webhook.
- `signing_secret`: Secret used to verify that webhook payloads were sent by Mux. **Note that this value is only returned once when creating a webhook.**

### [LiveStream](docs/api/live_stream.html)

Results: OK; Created; No Content.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `active_asset_id`: The Asset that is currently being created if there is an active broadcast.
- `active_ingest_protocol`: The protocol used for the active ingest stream. This is only set when the live stream is active.
- `advanced_playback_policies`: An array of playback policy objects that you want applied to this asset and available through `playback_ids`. `advanced_playback_policies` must be used instead of `playback_policies` when creating a DRM playback ID.
- `audio_only`: The live stream only processes the audio track if the value is set to true. Mux drops the video track if broadcasted.
- `created_at`: Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch).

### [LiveStreamPlaybackId](docs/api/live_stream_playback_id.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `drm_configuration_id`: The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.
- `id`: Unique identifier for the PlaybackID
- `policy`: * `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;` * `signed` playback IDs should be used with tokens `https://stream.mux.com/$&#123;PLAYBACK_ID&#125;?token=&#123;TOKEN&#125;`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens. * `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).

### [MetricTimeseriesData](docs/api/metric_timeseries_data.html)

Results: OK.

SDK operations: `list`.

### [Moderate](docs/api/moderate.html)

Results: Moderation job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [MonitoringBreakdown](docs/api/monitoring_breakdown.html)

Results: OK.

SDK operations: `list`.

### [MonitoringBreakdownTimeseries](docs/api/monitoring_breakdown_timeseries.html)

Results: OK.

SDK operations: `list`.

### [MonitoringHistogramTimeseries](docs/api/monitoring_histogram_timeseries.html)

Results: OK.

SDK operations: `list`.

### [MonitoringTimeseries](docs/api/monitoring_timeseries.html)

Results: OK.

SDK operations: `list`.

### [Overall](docs/api/overall.html)

Results: OK.

SDK operations: `list`.

### [PlaybackRestriction](docs/api/playback_restriction.html)

Results: Created; OK; No Content.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_at`: Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch).
- `id`: Unique identifier for the Playback Restriction. Max 255 characters.
- `referrer`: A list of domains allowed to play your videos.
- `updated_at`: Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch).
- `user_agent`: Rules that control what user agents are allowed to play your videos. Please see [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation) for more details on this feature.

### [RealTimeBreakdown](docs/api/real_time_breakdown.html)

Results: OK.

SDK operations: `list`.

### [RealTimeHistogramTimeseries](docs/api/real_time_histogram_timeseries.html)

Results: OK.

SDK operations: `list`.

### [RealTimeTimeseries](docs/api/real_time_timeseries.html)

Results: OK.

SDK operations: `list`.

### [SignalLiveStreamComplete](docs/api/signal_live_stream_complete.html)

Results: OK.

SDK operations: `update`.

### [SigningKey](docs/api/signing_key.html)

Results: Created; OK; No Content.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `created_at`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the Signing Key.
- `private_key`: A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). **Note that this value is only returned once when creating a URL signing key.**

### [SimulcastTarget](docs/api/simulcast_target.html)

Results: Created; OK.

SDK operations: `create`, `load`.

Key fields to recognise:

- `error_severity`: The severity of the error encountered by the simulcast target. This field is only set when the simulcast target is in the `errored` status. See the values of severities below and their descriptions. * `normal`: The simulcast target encountered an error either while attempting to connect to the third party live streaming service, or mid-broadcasting. A simulcast may transition back into the broadcasting state if a connection with the service can be re-established. * `fatal`: The simulcast target is incompatible with the current input to the parent live stream. No further attempts to this simulcast target will be made for the current live stream asset.
- `id`: ID of the Simulcast Target
- `passthrough`: Arbitrary user-supplied metadata set when creating a simulcast target.
- `status`: The current status of the simulcast target. See Statuses below for detailed description. * `idle`: Default status. When the parent live stream is in disconnected status, simulcast targets will be idle state. * `starting`: The simulcast target transitions into this state when the parent live stream transition into connected state. * `broadcasting`: The simulcast target has successfully connected to the third party live streaming service and is pushing video to that service. * `errored`: The simulcast target encountered an error either while attempting to connect to the third party live streaming service, or mid-broadcasting. When a simulcast target has this status it will have an `error_severity` field with more details about the error.
- `stream_key`: Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. Only used for RTMP(s) simulcast destinations.

### [StaticRendition](docs/api/static_rendition.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `passthrough`: Arbitrary user-supplied metadata set for the static rendition. Max 255 characters.
- `resolution`: Indicates the resolution of this specific MP4 version of this asset. Only present for static renditions created with the Static Renditions API. Not set for renditions created with the deprecated `mp4_support` option.

### [SubviewBreakdownTimeseries](docs/api/subview_breakdown_timeseries.html)

Results: OK.

SDK operations: `list`.

### [SubviewOverallValue](docs/api/subview_overall_value.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `total_row_count`: Always `null` for this endpoint, a single aggregate value has no row count.

### [Summarize](docs/api/summarize.html)

Results: Summarize job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [TranscriptionVocabulary](docs/api/transcription_vocabulary.html)

Results: Transcription Vocabulary Created; OK; No Content.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_at`: Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch).
- `id`: Unique identifier for the Transcription Vocabulary
- `name`: The user-supplied name of the Transcription Vocabulary.
- `passthrough`: Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255 characters.
- `phrases`: Phrases, individual words, or proper names to include in the Transcription Vocabulary. When the Transcription Vocabulary is attached to a live stream&#39;s `generated_subtitles` configuration, the probability of successful speech recognition for these words or phrases is boosted.

### [TranslateAudio](docs/api/translate_audio.html)

Results: Audio translation job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [TranslateCaption](docs/api/translate_caption.html)

Results: Caption translation job queued; Current status for the requested job.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp (seconds) when the job was created.
- `directive`: The directive run that dispatched this job. Absent for jobs created via direct API POST.
- `errors`: Error details. Present when status is &#39;errored&#39;.
- `id`: Unique job identifier.
- `outputs`: Workflow results. Present when status is &#39;completed&#39;.

### [UpdateAssetTrack](docs/api/update_asset_track.html)

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `auto_language_confidence`: The confidence value (0-1) of the determined language. This value only is available when automatic language detection is utilized in generated subtitles.
- `closed_captions`: Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). This parameter is only set tracks where `type` is `text` and `text_type` is `subtitles`.
- `duration`: The duration in seconds of the track media. This parameter is not set for `text` type tracks. This field is optional and may not be set. The top level `duration` field of an asset will always be set.
- `id`: Unique identifier for the Track
- `language_code`: The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or &#39;auto&#39;. For example, `en` for English or `en-US` for the US version of English. This parameter is only set for `text` and `audio` track types. During automatic language detection for generated subtitles, this value will be set to `auto` until the language is determined.

### [Upload](docs/api/upload.html)

Results: Created; OK.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `asset_id`: Only set once the upload is in the `asset_created` state.
- `cors_origin`: If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers.
- `error`: Only set if an error occurred during asset creation.
- `id`: Unique identifier for the Direct Upload.
- `test`: Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset.

### [UrlSigningKey](docs/api/url_signing_key.html)

Results: No Content.

SDK operations: `remove`.

### [VideoView](docs/api/video_view.html)

Results: OK.

SDK operations: `load`.

### [Webhook](docs/api/webhook.html)

Results: Created; OK; No Content.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `address`: The URL where Mux sends webhook notifications.
- `created_at`: Time at which the webhook was created, as an ISO 8601 UTC datetime.
- `enabled`: Whether Mux attempts to deliver notifications to this webhook.
- `id`: Unique identifier for the webhook.
- `signing_secret`: Secret used to verify that webhook payloads were sent by Mux. **Note that this value is only returned once when creating a webhook.**

### [WhoAmI](docs/api/who_am_i.html)

Results: Information retrieved successfully.

SDK operations: `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Annotation](docs/api/annotation.html) | `create` | `POST /data/v1/annotations` | Required |
| [Annotation](docs/api/annotation.html) | `load` | `GET /data/v1/annotations/{ANNOTATION_ID}` | Required |
| [Annotation](docs/api/annotation.html) | `remove` | `DELETE /data/v1/annotations/{ANNOTATION_ID}` | Required |
| [Annotation](docs/api/annotation.html) | `update` | `PATCH /data/v1/annotations/{ANNOTATION_ID}` | Required |
| [AskQuestion](docs/api/ask_question.html) | `create` | `POST /robots/v0/jobs/ask-questions` | Required |
| [AskQuestion](docs/api/ask_question.html) | `load` | `GET /robots/v0/jobs/ask-questions/{JOB_ID}` | Required |
| [Asset](docs/api/asset.html) | `create` | `POST /video/v1/assets` | Required |
| [Asset](docs/api/asset.html) | `load` | `GET /video/v1/assets/{ASSET_ID}` | Required |
| [Asset](docs/api/asset.html) | `remove` | `DELETE /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}` | Required |
| [Asset](docs/api/asset.html) | `remove` | `DELETE /video/v1/assets/{ASSET_ID}/static-renditions/{STATIC_RENDITION_ID}` | Required |
| [Asset](docs/api/asset.html) | `remove` | `DELETE /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}` | Required |
| [Asset](docs/api/asset.html) | `remove` | `DELETE /video/v1/assets/{ASSET_ID}/shots` | Required |
| [Asset](docs/api/asset.html) | `remove` | `DELETE /video/v1/assets/{ASSET_ID}/thumbnail-time` | Required |
| [Asset](docs/api/asset.html) | `remove` | `DELETE /video/v1/assets/{ASSET_ID}` | Required |
| [Asset](docs/api/asset.html) | `update` | `PUT /video/v1/assets/{ASSET_ID}/master-access` | Required |
| [Asset](docs/api/asset.html) | `update` | `PUT /video/v1/assets/{ASSET_ID}/mp4-support` | Required |
| [Asset](docs/api/asset.html) | `update` | `PATCH /video/v1/assets/{ASSET_ID}` | Required |
| [AssetOrLiveStreamId](docs/api/asset_or_live_stream_id.html) | `load` | `GET /video/v1/playback-ids/{PLAYBACK_ID}` | Required |
| [AssetPlaybackId](docs/api/asset_playback_id.html) | `load` | `GET /video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}` | Required |
| [AssetShot](docs/api/asset_shot.html) | `load` | `GET /video/v1/assets/{ASSET_ID}/shots` | Required |
| [CreatePlaybackId](docs/api/create_playback_id.html) | `create` | `POST /video/v1/assets/{ASSET_ID}/playback-ids` | Required |
| [CreatePlaybackId](docs/api/create_playback_id.html) | `create` | `POST /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids` | Required |
| [CreateTrack](docs/api/create_track.html) | `create` | `POST /video/v1/assets/{ASSET_ID}/tracks` | Required |
| [Directive](docs/api/directive.html) | `create` | `POST /robots/v0/directives/{DIRECTIVE_ID}/runs` | Required |
| [Directive](docs/api/directive.html) | `create` | `POST /robots/v0/directives` | Required |
| [Directive](docs/api/directive.html) | `list` | `GET /robots/v0/directives` | Required |
| [Directive](docs/api/directive.html) | `load` | `GET /robots/v0/directives/{DIRECTIVE_ID}` | Required |
| [Directive](docs/api/directive.html) | `remove` | `DELETE /robots/v0/directives/{DIRECTIVE_ID}` | Required |
| [DirectiveRunDetail](docs/api/directive_run_detail.html) | `load` | `GET /robots/v0/directives/{DIRECTIVE_ID}/runs/{RUN_ID}` | Required |
| [DirectiveRunList](docs/api/directive_run_list.html) | `list` | `GET /robots/v0/directives/{DIRECTIVE_ID}/runs` | Required |
| [DrmConfiguration](docs/api/drm_configuration.html) | `load` | `GET /video/v1/drm-configurations/{DRM_CONFIGURATION_ID}` | Required |
| [EditCaption](docs/api/edit_caption.html) | `create` | `POST /robots/v0/jobs/edit-captions` | Required |
| [EditCaption](docs/api/edit_caption.html) | `load` | `GET /robots/v0/jobs/edit-captions/{JOB_ID}` | Required |
| [EngagementHeatmap](docs/api/engagement_heatmap.html) | `list` | `GET /data/v1/engagement/assets/{ASSET_ID}/heatmap` | Required |
| [EngagementHeatmap](docs/api/engagement_heatmap.html) | `list` | `GET /data/v1/engagement/playback-ids/{PLAYBACK_ID}/heatmap` | Required |
| [EngagementHeatmap](docs/api/engagement_heatmap.html) | `list` | `GET /data/v1/engagement/videos/{VIDEO_ID}/heatmap` | Required |
| [EngagementHotspot](docs/api/engagement_hotspot.html) | `list` | `GET /data/v1/engagement/assets/{ASSET_ID}/hotspots` | Required |
| [EngagementHotspot](docs/api/engagement_hotspot.html) | `list` | `GET /data/v1/engagement/playback-ids/{PLAYBACK_ID}/hotspots` | Required |
| [EngagementHotspot](docs/api/engagement_hotspot.html) | `list` | `GET /data/v1/engagement/videos/{VIDEO_ID}/hotspots` | Required |
| [FindBestThumbnail](docs/api/find_best_thumbnail.html) | `create` | `POST /robots/v0/jobs/find-best-thumbnails` | Required |
| [FindBestThumbnail](docs/api/find_best_thumbnail.html) | `load` | `GET /robots/v0/jobs/find-best-thumbnails/{JOB_ID}` | Required |
| [FindKeyMoment](docs/api/find_key_moment.html) | `create` | `POST /robots/v0/jobs/find-key-moments` | Required |
| [FindKeyMoment](docs/api/find_key_moment.html) | `load` | `GET /robots/v0/jobs/find-key-moments/{JOB_ID}` | Required |
| [FindScene](docs/api/find_scene.html) | `create` | `POST /robots/v0/jobs/find-scenes` | Required |
| [FindScene](docs/api/find_scene.html) | `load` | `GET /robots/v0/jobs/find-scenes/{JOB_ID}` | Required |
| [GenerateAssetShot](docs/api/generate_asset_shot.html) | `create` | `POST /video/v1/assets/{ASSET_ID}/shots` | Required |
| [GenerateChapter](docs/api/generate_chapter.html) | `create` | `POST /robots/v0/jobs/generate-chapters` | Required |
| [GenerateChapter](docs/api/generate_chapter.html) | `load` | `GET /robots/v0/jobs/generate-chapters/{JOB_ID}` | Required |
| [GenerateEngagementInsight](docs/api/generate_engagement_insight.html) | `create` | `POST /robots/v0/jobs/generate-engagement-insights` | Required |
| [GenerateEngagementInsight](docs/api/generate_engagement_insight.html) | `load` | `GET /robots/v0/jobs/generate-engagement-insights/{JOB_ID}` | Required |
| [GeneratePremiumCaption](docs/api/generate_premium_caption.html) | `create` | `POST /robots/v0/jobs/generate-premium-captions` | Required |
| [GeneratePremiumCaption](docs/api/generate_premium_caption.html) | `load` | `GET /robots/v0/jobs/generate-premium-captions/{JOB_ID}` | Required |
| [GenerateTrackSubtitle](docs/api/generate_track_subtitle.html) | `create` | `POST /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles` | Required |
| [Incident](docs/api/incident.html) | `load` | `GET /data/v1/incidents/{INCIDENT_ID}` | Required |
| [InputInfo](docs/api/input_info.html) | `list` | `GET /video/v1/assets/{ASSET_ID}/input-info` | Required |
| [JobSummary](docs/api/job_summary.html) | `create` | `POST /robots/v0/jobs/{JOB_ID}/cancel` | Required |
| [ListAllMetricValue](docs/api/list_all_metric_value.html) | `list` | `GET /data/v1/metrics/comparison` | Required |
| [ListAnnotation](docs/api/list_annotation.html) | `list` | `GET /data/v1/annotations` | Required |
| [ListAsset](docs/api/list_asset.html) | `list` | `GET /video/v1/assets` | Required |
| [ListBreakdownValue](docs/api/list_breakdown_value.html) | `list` | `GET /data/v1/metrics/{METRIC_ID}/breakdown` | Required |
| [ListDeliveryUsage](docs/api/list_delivery_usage.html) | `list` | `GET /video/v1/delivery-usage` | Required |
| [ListDimension](docs/api/list_dimension.html) | `list` | `GET /data/v1/dimensions` | Required |
| [ListDimensionValue](docs/api/list_dimension_value.html) | `list` | `GET /data/v1/dimensions/{DIMENSION_ID}/elements` | Required |
| [ListDimensionValue](docs/api/list_dimension_value.html) | `load` | `GET /data/v1/dimensions/{DIMENSION_ID}` | Required |
| [ListDrmConfiguration](docs/api/list_drm_configuration.html) | `list` | `GET /video/v1/drm-configurations` | Required |
| [ListError](docs/api/list_error.html) | `list` | `GET /data/v1/errors` | Required |
| [ListExport](docs/api/list_export.html) | `list` | `GET /data/v1/exports` | Required |
| [ListFilter](docs/api/list_filter.html) | `list` | `GET /data/v1/filters` | Required |
| [ListFilterValue](docs/api/list_filter_value.html) | `load` | `GET /data/v1/filters/{FILTER_ID}` | Required |
| [ListIncident](docs/api/list_incident.html) | `list` | `GET /data/v1/incidents` | Required |
| [ListInsight](docs/api/list_insight.html) | `list` | `GET /data/v1/metrics/{METRIC_ID}/insights` | Required |
| [ListJob](docs/api/list_job.html) | `list` | `GET /robots/v0/jobs` | Required |
| [ListLiveStream](docs/api/list_live_stream.html) | `list` | `GET /video/v1/live-streams` | Required |
| [ListMonitoringDimension](docs/api/list_monitoring_dimension.html) | `list` | `GET /data/v1/monitoring/dimensions` | Required |
| [ListMonitoringMetric](docs/api/list_monitoring_metric.html) | `list` | `GET /data/v1/monitoring/metrics` | Required |
| [ListPlaybackRestriction](docs/api/list_playback_restriction.html) | `list` | `GET /video/v1/playback-restrictions` | Required |
| [ListRealTimeDimension](docs/api/list_real_time_dimension.html) | `list` | `GET /data/v1/realtime/dimensions` | Required |
| [ListRealTimeMetric](docs/api/list_real_time_metric.html) | `list` | `GET /data/v1/realtime/metrics` | Required |
| [ListRelatedIncident](docs/api/list_related_incident.html) | `list` | `GET /data/v1/incidents/{INCIDENT_ID}/related` | Required |
| [ListSigningKey](docs/api/list_signing_key.html) | `list` | `GET /system/v1/signing-keys` | Required |
| [ListSigningKey](docs/api/list_signing_key.html) | `list` | `GET /video/v1/signing-keys` | Required |
| [ListSubviewBreakdownValue](docs/api/list_subview_breakdown_value.html) | `list` | `GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown` | Required |
| [ListSubviewComparisonValue](docs/api/list_subview_comparison_value.html) | `list` | `GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/comparison` | Required |
| [ListSubviewDimension](docs/api/list_subview_dimension.html) | `load` | `GET /data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions` | Required |
| [ListSubviewDimensionValue](docs/api/list_subview_dimension_value.html) | `load` | `GET /data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions/{DIMENSION_NAME}` | Required |
| [ListTranscriptionVocabulary](docs/api/list_transcription_vocabulary.html) | `list` | `GET /video/v1/transcription-vocabularies` | Required |
| [ListUpload](docs/api/list_upload.html) | `list` | `GET /video/v1/uploads` | Required |
| [ListUsageExport](docs/api/list_usage_export.html) | `list` | `GET /system/v1/usage/exports` | Required |
| [ListVideoView](docs/api/list_video_view.html) | `list` | `GET /data/v1/video-views` | Required |
| [ListVideoViewExport](docs/api/list_video_view_export.html) | `list` | `GET /data/v1/exports/views` | Required |
| [ListWebhook](docs/api/list_webhook.html) | `list` | `GET /system/v1/webhooks` | Required |
| [LiveStream](docs/api/live_stream.html) | `create` | `POST /video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key` | Required |
| [LiveStream](docs/api/live_stream.html) | `create` | `POST /video/v1/live-streams` | Required |
| [LiveStream](docs/api/live_stream.html) | `load` | `GET /video/v1/live-streams/{LIVE_STREAM_ID}` | Required |
| [LiveStream](docs/api/live_stream.html) | `remove` | `DELETE /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}` | Required |
| [LiveStream](docs/api/live_stream.html) | `remove` | `DELETE /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}` | Required |
| [LiveStream](docs/api/live_stream.html) | `remove` | `DELETE /video/v1/live-streams/{LIVE_STREAM_ID}` | Required |
| [LiveStream](docs/api/live_stream.html) | `remove` | `DELETE /video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions` | Required |
| [LiveStream](docs/api/live_stream.html) | `update` | `PATCH /video/v1/live-streams/{LIVE_STREAM_ID}` | Required |
| [LiveStream](docs/api/live_stream.html) | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/disable` | Required |
| [LiveStream](docs/api/live_stream.html) | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles` | Required |
| [LiveStream](docs/api/live_stream.html) | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/enable` | Required |
| [LiveStream](docs/api/live_stream.html) | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles` | Required |
| [LiveStream](docs/api/live_stream.html) | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions` | Required |
| [LiveStreamPlaybackId](docs/api/live_stream_playback_id.html) | `load` | `GET /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}` | Required |
| [MetricTimeseriesData](docs/api/metric_timeseries_data.html) | `list` | `GET /data/v1/metrics/{METRIC_ID}/timeseries` | Required |
| [Moderate](docs/api/moderate.html) | `create` | `POST /robots/v0/jobs/moderate` | Required |
| [Moderate](docs/api/moderate.html) | `load` | `GET /robots/v0/jobs/moderate/{JOB_ID}` | Required |
| [MonitoringBreakdown](docs/api/monitoring_breakdown.html) | `list` | `GET /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown` | Required |
| [MonitoringBreakdownTimeseries](docs/api/monitoring_breakdown_timeseries.html) | `list` | `GET /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries` | Required |
| [MonitoringHistogramTimeseries](docs/api/monitoring_histogram_timeseries.html) | `list` | `GET /data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries` | Required |
| [MonitoringTimeseries](docs/api/monitoring_timeseries.html) | `list` | `GET /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries` | Required |
| [Overall](docs/api/overall.html) | `list` | `GET /data/v1/metrics/{METRIC_ID}/overall` | Required |
| [PlaybackRestriction](docs/api/playback_restriction.html) | `create` | `POST /video/v1/playback-restrictions` | Required |
| [PlaybackRestriction](docs/api/playback_restriction.html) | `load` | `GET /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}` | Required |
| [PlaybackRestriction](docs/api/playback_restriction.html) | `remove` | `DELETE /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}` | Required |
| [PlaybackRestriction](docs/api/playback_restriction.html) | `update` | `PUT /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer` | Required |
| [PlaybackRestriction](docs/api/playback_restriction.html) | `update` | `PUT /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent` | Required |
| [RealTimeBreakdown](docs/api/real_time_breakdown.html) | `list` | `GET /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown` | Required |
| [RealTimeHistogramTimeseries](docs/api/real_time_histogram_timeseries.html) | `list` | `GET /data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries` | Required |
| [RealTimeTimeseries](docs/api/real_time_timeseries.html) | `list` | `GET /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries` | Required |
| [SignalLiveStreamComplete](docs/api/signal_live_stream_complete.html) | `update` | `PUT /video/v1/live-streams/{LIVE_STREAM_ID}/complete` | Required |
| [SigningKey](docs/api/signing_key.html) | `create` | `POST /system/v1/signing-keys` | Required |
| [SigningKey](docs/api/signing_key.html) | `create` | `POST /video/v1/signing-keys` | Required |
| [SigningKey](docs/api/signing_key.html) | `load` | `GET /system/v1/signing-keys/{SIGNING_KEY_ID}` | Required |
| [SigningKey](docs/api/signing_key.html) | `load` | `GET /video/v1/signing-keys/{SIGNING_KEY_ID}` | Required |
| [SigningKey](docs/api/signing_key.html) | `remove` | `DELETE /system/v1/signing-keys/{SIGNING_KEY_ID}` | Required |
| [SimulcastTarget](docs/api/simulcast_target.html) | `create` | `POST /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets` | Required |
| [SimulcastTarget](docs/api/simulcast_target.html) | `load` | `GET /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}` | Required |
| [StaticRendition](docs/api/static_rendition.html) | `create` | `POST /video/v1/assets/{ASSET_ID}/static-renditions` | Required |
| [SubviewBreakdownTimeseries](docs/api/subview_breakdown_timeseries.html) | `list` | `GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown-timeseries` | Required |
| [SubviewOverallValue](docs/api/subview_overall_value.html) | `list` | `GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/overall` | Required |
| [Summarize](docs/api/summarize.html) | `create` | `POST /robots/v0/jobs/summarize` | Required |
| [Summarize](docs/api/summarize.html) | `load` | `GET /robots/v0/jobs/summarize/{JOB_ID}` | Required |
| [TranscriptionVocabulary](docs/api/transcription_vocabulary.html) | `create` | `POST /video/v1/transcription-vocabularies` | Required |
| [TranscriptionVocabulary](docs/api/transcription_vocabulary.html) | `load` | `GET /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}` | Required |
| [TranscriptionVocabulary](docs/api/transcription_vocabulary.html) | `remove` | `DELETE /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}` | Required |
| [TranscriptionVocabulary](docs/api/transcription_vocabulary.html) | `update` | `PUT /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}` | Required |
| [TranslateAudio](docs/api/translate_audio.html) | `create` | `POST /robots/v0/jobs/translate-audio` | Required |
| [TranslateAudio](docs/api/translate_audio.html) | `load` | `GET /robots/v0/jobs/translate-audio/{JOB_ID}` | Required |
| [TranslateCaption](docs/api/translate_caption.html) | `create` | `POST /robots/v0/jobs/translate-captions` | Required |
| [TranslateCaption](docs/api/translate_caption.html) | `load` | `GET /robots/v0/jobs/translate-captions/{JOB_ID}` | Required |
| [UpdateAssetTrack](docs/api/update_asset_track.html) | `update` | `PATCH /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}` | Required |
| [Upload](docs/api/upload.html) | `create` | `POST /video/v1/uploads` | Required |
| [Upload](docs/api/upload.html) | `load` | `GET /video/v1/uploads/{UPLOAD_ID}` | Required |
| [Upload](docs/api/upload.html) | `update` | `PUT /video/v1/uploads/{UPLOAD_ID}/cancel` | Required |
| [UrlSigningKey](docs/api/url_signing_key.html) | `remove` | `DELETE /video/v1/signing-keys/{SIGNING_KEY_ID}` | Required |
| [VideoView](docs/api/video_view.html) | `load` | `GET /data/v1/video-views/{VIDEO_VIEW_ID}` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /system/v1/webhooks` | Required |
| [Webhook](docs/api/webhook.html) | `load` | `GET /system/v1/webhooks/{WEBHOOK_ID}` | Required |
| [Webhook](docs/api/webhook.html) | `remove` | `DELETE /system/v1/webhooks/{WEBHOOK_ID}` | Required |
| [Webhook](docs/api/webhook.html) | `update` | `PATCH /system/v1/webhooks/{WEBHOOK_ID}` | Required |
| [WhoAmI](docs/api/who_am_i.html) | `load` | `GET /system/v1/whoami` | Required |

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
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `mux_list`: List records for an entity. Supported entities: `directive`, `directive_run_list`, `engagement_heatmap`, `engagement_hotspot`, `input_info`, `list_all_metric_value`, `list_annotation`, `list_asset`, `list_breakdown_value`, `list_delivery_usage`, `list_dimension`, `list_dimension_value`, `list_drm_configuration`, `list_error`, `list_export`, `list_filter`, `list_incident`, `list_insight`, `list_job`, `list_live_stream`, `list_monitoring_dimension`, `list_monitoring_metric`, `list_playback_restriction`, `list_real_time_dimension`, `list_real_time_metric`, `list_related_incident`, `list_signing_key`, `list_subview_breakdown_value`, `list_subview_comparison_value`, `list_transcription_vocabulary`, `list_upload`, `list_usage_export`, `list_video_view`, `list_video_view_export`, `list_webhook`, `metric_timeseries_data`, `monitoring_breakdown`, `monitoring_breakdown_timeseries`, `monitoring_histogram_timeseries`, `monitoring_timeseries`, `overall`, `real_time_breakdown`, `real_time_histogram_timeseries`, `real_time_timeseries`, `subview_breakdown_timeseries`, `subview_overall_value`.
- `mux_load`: Load one record for an entity. Supported entities: `annotation`, `ask_question`, `asset`, `asset_or_live_stream_id`, `asset_playback_id`, `asset_shot`, `directive`, `directive_run_detail`, `drm_configuration`, `edit_caption`, `find_best_thumbnail`, `find_key_moment`, `find_scene`, `generate_chapter`, `generate_engagement_insight`, `generate_premium_caption`, `incident`, `list_dimension_value`, `list_filter_value`, `list_subview_dimension`, `list_subview_dimension_value`, `live_stream`, `live_stream_playback_id`, `moderate`, `playback_restriction`, `signing_key`, `simulcast_target`, `summarize`, `transcription_vocabulary`, `translate_audio`, `translate_caption`, `upload`, `video_view`, `webhook`, `who_am_i`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

