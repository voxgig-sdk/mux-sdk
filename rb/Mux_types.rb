# frozen_string_literal: true

# Typed models for the Mux SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Annotation entity data model.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] note
#   @return [String]
#
# @!attribute [rw] sub_property_id
#   @return [String, nil]
Annotation = Struct.new(
  :date,
  :id,
  :note,
  :sub_property_id,
  keyword_init: true
)

# Request payload for Annotation#load.
#
# @!attribute [rw] id
#   @return [String]
AnnotationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Annotation#create.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] note
#   @return [String]
#
# @!attribute [rw] sub_property_id
#   @return [String, nil]
AnnotationCreateData = Struct.new(
  :date,
  :id,
  :note,
  :sub_property_id,
  keyword_init: true
)

# Request payload for Annotation#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] sub_property_id
#   @return [String, nil]
AnnotationUpdateData = Struct.new(
  :id,
  :date,
  :note,
  :sub_property_id,
  keyword_init: true
)

# Request payload for Annotation#remove.
#
# @!attribute [rw] id
#   @return [String]
AnnotationRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# AskQuestion entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
AskQuestion = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for AskQuestion#load.
#
# @!attribute [rw] id
#   @return [String]
AskQuestionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AskQuestion#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
AskQuestionCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Asset entity data model.
#
# @!attribute [rw] aspect_ratio
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] directives
#   @return [Array, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] encoding_tier
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Hash, nil]
#
# @!attribute [rw] generate_shots
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] ingest_type
#   @return [String, nil]
#
# @!attribute [rw] is_live
#   @return [Boolean, nil]
#
# @!attribute [rw] live_stream_id
#   @return [String, nil]
#
# @!attribute [rw] master
#   @return [Hash, nil]
#
# @!attribute [rw] master_access
#   @return [String]
#
# @!attribute [rw] max_resolution_tier
#   @return [String]
#
# @!attribute [rw] max_stored_frame_rate
#   @return [Float, nil]
#
# @!attribute [rw] max_stored_resolution
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] mp4_support
#   @return [String, nil]
#
# @!attribute [rw] non_standard_input_reasons
#   @return [Hash, nil]
#
# @!attribute [rw] normalize_audio
#   @return [Boolean, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] playback_ids
#   @return [Array, nil]
#
# @!attribute [rw] progress
#   @return [Hash]
#
# @!attribute [rw] recording_times
#   @return [Array, nil]
#
# @!attribute [rw] resolution_tier
#   @return [String, nil]
#
# @!attribute [rw] shots
#   @return [Hash]
#
# @!attribute [rw] source_asset_id
#   @return [String, nil]
#
# @!attribute [rw] static_renditions
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] thumbnail_time
#   @return [Float, nil]
#
# @!attribute [rw] tracks
#   @return [Array, nil]
#
# @!attribute [rw] upload_id
#   @return [String, nil]
#
# @!attribute [rw] video_quality
#   @return [String, nil]
Asset = Struct.new(
  :aspect_ratio,
  :created_at,
  :data,
  :directives,
  :duration,
  :encoding_tier,
  :errors,
  :generate_shots,
  :id,
  :ingest_type,
  :is_live,
  :live_stream_id,
  :master,
  :master_access,
  :max_resolution_tier,
  :max_stored_frame_rate,
  :max_stored_resolution,
  :meta,
  :mp4_support,
  :non_standard_input_reasons,
  :normalize_audio,
  :passthrough,
  :playback_ids,
  :progress,
  :recording_times,
  :resolution_tier,
  :shots,
  :source_asset_id,
  :static_renditions,
  :status,
  :test,
  :thumbnail_time,
  :tracks,
  :upload_id,
  :video_quality,
  keyword_init: true
)

# Request payload for Asset#load.
#
# @!attribute [rw] id
#   @return [String]
AssetLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Asset#create.
#
# @!attribute [rw] aspect_ratio
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] directives
#   @return [Array, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] encoding_tier
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Hash, nil]
#
# @!attribute [rw] generate_shots
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] ingest_type
#   @return [String, nil]
#
# @!attribute [rw] is_live
#   @return [Boolean, nil]
#
# @!attribute [rw] live_stream_id
#   @return [String, nil]
#
# @!attribute [rw] master
#   @return [Hash, nil]
#
# @!attribute [rw] master_access
#   @return [String]
#
# @!attribute [rw] max_resolution_tier
#   @return [String]
#
# @!attribute [rw] max_stored_frame_rate
#   @return [Float, nil]
#
# @!attribute [rw] max_stored_resolution
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] mp4_support
#   @return [String, nil]
#
# @!attribute [rw] non_standard_input_reasons
#   @return [Hash, nil]
#
# @!attribute [rw] normalize_audio
#   @return [Boolean, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] playback_ids
#   @return [Array, nil]
#
# @!attribute [rw] progress
#   @return [Hash]
#
# @!attribute [rw] recording_times
#   @return [Array, nil]
#
# @!attribute [rw] resolution_tier
#   @return [String, nil]
#
# @!attribute [rw] shots
#   @return [Hash]
#
# @!attribute [rw] source_asset_id
#   @return [String, nil]
#
# @!attribute [rw] static_renditions
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] thumbnail_time
#   @return [Float, nil]
#
# @!attribute [rw] tracks
#   @return [Array, nil]
#
# @!attribute [rw] upload_id
#   @return [String, nil]
#
# @!attribute [rw] video_quality
#   @return [String, nil]
AssetCreateData = Struct.new(
  :aspect_ratio,
  :created_at,
  :data,
  :directives,
  :duration,
  :encoding_tier,
  :errors,
  :generate_shots,
  :id,
  :ingest_type,
  :is_live,
  :live_stream_id,
  :master,
  :master_access,
  :max_resolution_tier,
  :max_stored_frame_rate,
  :max_stored_resolution,
  :meta,
  :mp4_support,
  :non_standard_input_reasons,
  :normalize_audio,
  :passthrough,
  :playback_ids,
  :progress,
  :recording_times,
  :resolution_tier,
  :shots,
  :source_asset_id,
  :static_renditions,
  :status,
  :test,
  :thumbnail_time,
  :tracks,
  :upload_id,
  :video_quality,
  keyword_init: true
)

# Request payload for Asset#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] aspect_ratio
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] directives
#   @return [Array, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] encoding_tier
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Hash, nil]
#
# @!attribute [rw] generate_shots
#   @return [Boolean, nil]
#
# @!attribute [rw] ingest_type
#   @return [String, nil]
#
# @!attribute [rw] is_live
#   @return [Boolean, nil]
#
# @!attribute [rw] live_stream_id
#   @return [String, nil]
#
# @!attribute [rw] master
#   @return [Hash, nil]
#
# @!attribute [rw] master_access
#   @return [String, nil]
#
# @!attribute [rw] max_resolution_tier
#   @return [String, nil]
#
# @!attribute [rw] max_stored_frame_rate
#   @return [Float, nil]
#
# @!attribute [rw] max_stored_resolution
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] mp4_support
#   @return [String, nil]
#
# @!attribute [rw] non_standard_input_reasons
#   @return [Hash, nil]
#
# @!attribute [rw] normalize_audio
#   @return [Boolean, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] playback_ids
#   @return [Array, nil]
#
# @!attribute [rw] progress
#   @return [Hash, nil]
#
# @!attribute [rw] recording_times
#   @return [Array, nil]
#
# @!attribute [rw] resolution_tier
#   @return [String, nil]
#
# @!attribute [rw] shots
#   @return [Hash, nil]
#
# @!attribute [rw] source_asset_id
#   @return [String, nil]
#
# @!attribute [rw] static_renditions
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] thumbnail_time
#   @return [Float, nil]
#
# @!attribute [rw] tracks
#   @return [Array, nil]
#
# @!attribute [rw] upload_id
#   @return [String, nil]
#
# @!attribute [rw] video_quality
#   @return [String, nil]
AssetUpdateData = Struct.new(
  :id,
  :aspect_ratio,
  :created_at,
  :data,
  :directives,
  :duration,
  :encoding_tier,
  :errors,
  :generate_shots,
  :ingest_type,
  :is_live,
  :live_stream_id,
  :master,
  :master_access,
  :max_resolution_tier,
  :max_stored_frame_rate,
  :max_stored_resolution,
  :meta,
  :mp4_support,
  :non_standard_input_reasons,
  :normalize_audio,
  :passthrough,
  :playback_ids,
  :progress,
  :recording_times,
  :resolution_tier,
  :shots,
  :source_asset_id,
  :static_renditions,
  :status,
  :test,
  :thumbnail_time,
  :tracks,
  :upload_id,
  :video_quality,
  keyword_init: true
)

# Request payload for Asset#remove.
#
# @!attribute [rw] id
#   @return [String]
AssetRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# AssetOrLiveStreamId entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] object
#   @return [Hash]
#
# @!attribute [rw] policy
#   @return [String]
AssetOrLiveStreamId = Struct.new(
  :id,
  :object,
  :policy,
  keyword_init: true
)

# Request payload for AssetOrLiveStreamId#load.
#
# @!attribute [rw] playback_id
#   @return [String]
AssetOrLiveStreamIdLoadMatch = Struct.new(
  :playback_id,
  keyword_init: true
)

# AssetPlaybackId entity data model.
#
# @!attribute [rw] drm_configuration_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] policy
#   @return [String]
AssetPlaybackId = Struct.new(
  :drm_configuration_id,
  :id,
  :policy,
  keyword_init: true
)

# Request payload for AssetPlaybackId#load.
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AssetPlaybackIdLoadMatch = Struct.new(
  :asset_id,
  :id,
  keyword_init: true
)

# AssetShot entity data model.
#
# @!attribute [rw] errors
#   @return [Hash, nil]
#
# @!attribute [rw] shots_manifest_url
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
AssetShot = Struct.new(
  :errors,
  :shots_manifest_url,
  :status,
  keyword_init: true
)

# Request payload for AssetShot#load.
#
# @!attribute [rw] asset_id
#   @return [String]
AssetShotLoadMatch = Struct.new(
  :asset_id,
  keyword_init: true
)

# CreatePlaybackId entity data model.
#
# @!attribute [rw] drm_configuration_id
#   @return [String, nil]
#
# @!attribute [rw] policy
#   @return [String, nil]
CreatePlaybackId = Struct.new(
  :drm_configuration_id,
  :policy,
  keyword_init: true
)

# Request payload for CreatePlaybackId#create.
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] drm_configuration_id
#   @return [String, nil]
#
# @!attribute [rw] policy
#   @return [String, nil]
CreatePlaybackIdCreateData = Struct.new(
  :asset_id,
  :drm_configuration_id,
  :policy,
  keyword_init: true
)

# CreateTrack entity data model.
#
# @!attribute [rw] closed_captions
#   @return [Boolean, nil]
#
# @!attribute [rw] language_code
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] text_type
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
CreateTrack = Struct.new(
  :closed_captions,
  :language_code,
  :name,
  :passthrough,
  :text_type,
  :type,
  :url,
  keyword_init: true
)

# Request payload for CreateTrack#create.
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] closed_captions
#   @return [Boolean, nil]
#
# @!attribute [rw] language_code
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] text_type
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
CreateTrackCreateData = Struct.new(
  :asset_id,
  :closed_captions,
  :language_code,
  :name,
  :passthrough,
  :text_type,
  :type,
  :url,
  keyword_init: true
)

# Directive entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] resources
#   @return [Array]
#
# @!attribute [rw] subject
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflows
#   @return [Array]
Directive = Struct.new(
  :created_at,
  :id,
  :name,
  :resources,
  :subject,
  :updated_at,
  :workflows,
  keyword_init: true
)

# Request payload for Directive#load.
#
# @!attribute [rw] id
#   @return [String]
DirectiveLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Directive#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
DirectiveListMatch = Struct.new(
  :limit,
  :page,
  keyword_init: true
)

# Request payload for Directive#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] resources
#   @return [Array]
#
# @!attribute [rw] subject
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflows
#   @return [Array]
DirectiveCreateData = Struct.new(
  :created_at,
  :id,
  :name,
  :resources,
  :subject,
  :updated_at,
  :workflows,
  keyword_init: true
)

# Request payload for Directive#remove.
#
# @!attribute [rw] id
#   @return [String]
DirectiveRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# DirectiveRunDetail entity data model.
#
# @!attribute [rw] completed_at
#   @return [Object]
#
# @!attribute [rw] node_states
#   @return [Array]
#
# @!attribute [rw] run_id
#   @return [String]
#
# @!attribute [rw] started_at
#   @return [Integer]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] subject_id
#   @return [String]
DirectiveRunDetail = Struct.new(
  :completed_at,
  :node_states,
  :run_id,
  :started_at,
  :status,
  :subject_id,
  keyword_init: true
)

# Request payload for DirectiveRunDetail#load.
#
# @!attribute [rw] directive_id
#   @return [String]
#
# @!attribute [rw] run_id
#   @return [String]
DirectiveRunDetailLoadMatch = Struct.new(
  :directive_id,
  :run_id,
  keyword_init: true
)

# DirectiveRunList entity data model.
#
# @!attribute [rw] completed_at
#   @return [Object]
#
# @!attribute [rw] node_states
#   @return [Array]
#
# @!attribute [rw] run_id
#   @return [String]
#
# @!attribute [rw] started_at
#   @return [Integer]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] subject_id
#   @return [String]
DirectiveRunList = Struct.new(
  :completed_at,
  :node_states,
  :run_id,
  :started_at,
  :status,
  :subject_id,
  keyword_init: true
)

# Request payload for DirectiveRunList#list.
#
# @!attribute [rw] directive_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
DirectiveRunListListMatch = Struct.new(
  :directive_id,
  :limit,
  :page,
  keyword_init: true
)

# DrmConfiguration entity data model.
#
# @!attribute [rw] id
#   @return [String]
DrmConfiguration = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for DrmConfiguration#load.
#
# @!attribute [rw] id
#   @return [String]
DrmConfigurationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# EditCaption entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
EditCaption = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for EditCaption#load.
#
# @!attribute [rw] id
#   @return [String]
EditCaptionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for EditCaption#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
EditCaptionCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# EngagementHeatmap entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
EngagementHeatmap = Struct.new(
  :data,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for EngagementHeatmap#list.
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
EngagementHeatmapListMatch = Struct.new(
  :asset_id,
  :timeframe,
  keyword_init: true
)

# EngagementHotspot entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
EngagementHotspot = Struct.new(
  :data,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for EngagementHotspot#list.
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
EngagementHotspotListMatch = Struct.new(
  :asset_id,
  :limit,
  :order_direction,
  :timeframe,
  keyword_init: true
)

# FindBestThumbnail entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
FindBestThumbnail = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for FindBestThumbnail#load.
#
# @!attribute [rw] id
#   @return [String]
FindBestThumbnailLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for FindBestThumbnail#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
FindBestThumbnailCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# FindKeyMoment entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
FindKeyMoment = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for FindKeyMoment#load.
#
# @!attribute [rw] id
#   @return [String]
FindKeyMomentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for FindKeyMoment#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
FindKeyMomentCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# FindScene entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
FindScene = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for FindScene#load.
#
# @!attribute [rw] id
#   @return [String]
FindSceneLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for FindScene#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
FindSceneCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# GenerateAssetShot entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
GenerateAssetShot = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for GenerateAssetShot#create.
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
GenerateAssetShotCreateData = Struct.new(
  :asset_id,
  :data,
  keyword_init: true
)

# GenerateChapter entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
GenerateChapter = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for GenerateChapter#load.
#
# @!attribute [rw] id
#   @return [String]
GenerateChapterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for GenerateChapter#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
GenerateChapterCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# GenerateEngagementInsight entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
GenerateEngagementInsight = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for GenerateEngagementInsight#load.
#
# @!attribute [rw] id
#   @return [String]
GenerateEngagementInsightLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for GenerateEngagementInsight#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
GenerateEngagementInsightCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# GeneratePremiumCaption entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
GeneratePremiumCaption = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for GeneratePremiumCaption#load.
#
# @!attribute [rw] id
#   @return [String]
GeneratePremiumCaptionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for GeneratePremiumCaption#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
GeneratePremiumCaptionCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# GenerateTrackSubtitle entity data model.
#
# @!attribute [rw] generated_subtitles
#   @return [Array]
GenerateTrackSubtitle = Struct.new(
  :generated_subtitles,
  keyword_init: true
)

# Request payload for GenerateTrackSubtitle#create.
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] track_id
#   @return [String]
#
# @!attribute [rw] generated_subtitles
#   @return [Array]
GenerateTrackSubtitleCreateData = Struct.new(
  :asset_id,
  :track_id,
  :generated_subtitles,
  keyword_init: true
)

# Incident entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
Incident = Struct.new(
  :data,
  :id,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for Incident#load.
#
# @!attribute [rw] id
#   @return [String]
IncidentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# InputInfo entity data model.
#
# @!attribute [rw] file
#   @return [Hash, nil]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
InputInfo = Struct.new(
  :file,
  :settings,
  keyword_init: true
)

# Request payload for InputInfo#list.
#
# @!attribute [rw] asset_id
#   @return [String]
InputInfoListMatch = Struct.new(
  :asset_id,
  keyword_init: true
)

# JobSummary entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
JobSummary = Struct.new(
  :created_at,
  :id,
  :links,
  :status,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for JobSummary#create.
#
# @!attribute [rw] job_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
JobSummaryCreateData = Struct.new(
  :job_id,
  :created_at,
  :id,
  :links,
  :status,
  :updated_at,
  :workflow,
  keyword_init: true
)

# ListAllMetricValue entity data model.
#
# @!attribute [rw] ended_views
#   @return [Integer, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] metric
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] started_views
#   @return [Integer, nil]
#
# @!attribute [rw] total_playing_time
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] unique_viewers
#   @return [Integer, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
#
# @!attribute [rw] view_count
#   @return [Integer, nil]
#
# @!attribute [rw] watch_time
#   @return [Integer, nil]
ListAllMetricValue = Struct.new(
  :ended_views,
  :items,
  :metric,
  :name,
  :started_views,
  :total_playing_time,
  :type,
  :unique_viewers,
  :value,
  :view_count,
  :watch_time,
  keyword_init: true
)

# Request payload for ListAllMetricValue#list.
#
# @!attribute [rw] dimension
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] metric_filter
#   @return [Array, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
ListAllMetricValueListMatch = Struct.new(
  :dimension,
  :filter,
  :metric_filter,
  :timeframe,
  :value,
  keyword_init: true
)

# ListAnnotation entity data model.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] note
#   @return [String]
#
# @!attribute [rw] sub_property_id
#   @return [String, nil]
ListAnnotation = Struct.new(
  :date,
  :id,
  :note,
  :sub_property_id,
  keyword_init: true
)

# Request payload for ListAnnotation#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
ListAnnotationListMatch = Struct.new(
  :limit,
  :order_direction,
  :page,
  :timeframe,
  keyword_init: true
)

# ListAsset entity data model.
#
# @!attribute [rw] aspect_ratio
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] directives
#   @return [Array, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] encoding_tier
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Hash, nil]
#
# @!attribute [rw] generate_shots
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] ingest_type
#   @return [String, nil]
#
# @!attribute [rw] is_live
#   @return [Boolean, nil]
#
# @!attribute [rw] live_stream_id
#   @return [String, nil]
#
# @!attribute [rw] master
#   @return [Hash, nil]
#
# @!attribute [rw] master_access
#   @return [String]
#
# @!attribute [rw] max_resolution_tier
#   @return [String]
#
# @!attribute [rw] max_stored_frame_rate
#   @return [Float, nil]
#
# @!attribute [rw] max_stored_resolution
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] mp4_support
#   @return [String, nil]
#
# @!attribute [rw] non_standard_input_reasons
#   @return [Hash, nil]
#
# @!attribute [rw] normalize_audio
#   @return [Boolean, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] playback_ids
#   @return [Array, nil]
#
# @!attribute [rw] progress
#   @return [Hash]
#
# @!attribute [rw] recording_times
#   @return [Array, nil]
#
# @!attribute [rw] resolution_tier
#   @return [String, nil]
#
# @!attribute [rw] shots
#   @return [Hash]
#
# @!attribute [rw] source_asset_id
#   @return [String, nil]
#
# @!attribute [rw] static_renditions
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] thumbnail_time
#   @return [Float, nil]
#
# @!attribute [rw] tracks
#   @return [Array, nil]
#
# @!attribute [rw] upload_id
#   @return [String, nil]
#
# @!attribute [rw] video_quality
#   @return [String, nil]
ListAsset = Struct.new(
  :aspect_ratio,
  :created_at,
  :directives,
  :duration,
  :encoding_tier,
  :errors,
  :generate_shots,
  :id,
  :ingest_type,
  :is_live,
  :live_stream_id,
  :master,
  :master_access,
  :max_resolution_tier,
  :max_stored_frame_rate,
  :max_stored_resolution,
  :meta,
  :mp4_support,
  :non_standard_input_reasons,
  :normalize_audio,
  :passthrough,
  :playback_ids,
  :progress,
  :recording_times,
  :resolution_tier,
  :shots,
  :source_asset_id,
  :static_renditions,
  :status,
  :test,
  :thumbnail_time,
  :tracks,
  :upload_id,
  :video_quality,
  keyword_init: true
)

# Request payload for ListAsset#list.
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] live_stream_id
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] upload_id
#   @return [String, nil]
ListAssetListMatch = Struct.new(
  :cursor,
  :limit,
  :live_stream_id,
  :page,
  :upload_id,
  keyword_init: true
)

# ListBreakdownValue entity data model.
#
# @!attribute [rw] field
#   @return [String]
#
# @!attribute [rw] negative_impact
#   @return [Integer]
#
# @!attribute [rw] total_playing_time
#   @return [Integer]
#
# @!attribute [rw] total_watch_time
#   @return [Integer]
#
# @!attribute [rw] value
#   @return [Float]
#
# @!attribute [rw] views
#   @return [Integer]
ListBreakdownValue = Struct.new(
  :field,
  :negative_impact,
  :total_playing_time,
  :total_watch_time,
  :value,
  :views,
  keyword_init: true
)

# Request payload for ListBreakdownValue#list.
#
# @!attribute [rw] metric_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] group_by
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] measurement
#   @return [String, nil]
#
# @!attribute [rw] metric_filter
#   @return [Array, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
ListBreakdownValueListMatch = Struct.new(
  :metric_id,
  :filter,
  :group_by,
  :limit,
  :measurement,
  :metric_filter,
  :order_by,
  :order_direction,
  :page,
  :timeframe,
  keyword_init: true
)

# ListDeliveryUsage entity data model.
#
# @!attribute [rw] asset_duration
#   @return [Float]
#
# @!attribute [rw] asset_encoding_tier
#   @return [String]
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] asset_resolution_tier
#   @return [String]
#
# @!attribute [rw] asset_state
#   @return [String]
#
# @!attribute [rw] asset_video_quality
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deleted_at
#   @return [String, nil]
#
# @!attribute [rw] delivered_seconds
#   @return [Float]
#
# @!attribute [rw] delivered_seconds_by_resolution
#   @return [Hash]
#
# @!attribute [rw] live_stream_id
#   @return [String, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
ListDeliveryUsage = Struct.new(
  :asset_duration,
  :asset_encoding_tier,
  :asset_id,
  :asset_resolution_tier,
  :asset_state,
  :asset_video_quality,
  :created_at,
  :deleted_at,
  :delivered_seconds,
  :delivered_seconds_by_resolution,
  :live_stream_id,
  :passthrough,
  keyword_init: true
)

# Request payload for ListDeliveryUsage#list.
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] live_stream_id
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
ListDeliveryUsageListMatch = Struct.new(
  :asset_id,
  :limit,
  :live_stream_id,
  :page,
  :timeframe,
  keyword_init: true
)

# ListDimension entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
ListDimension = Struct.new(
  :data,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for ListDimension#list.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
#
# @!attribute [rw] total_row_count
#   @return [Integer, nil]
ListDimensionListMatch = Struct.new(
  :data,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# ListDimensionValue entity data model.
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_count
#   @return [Integer]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
#
# @!attribute [rw] value
#   @return [String]
ListDimensionValue = Struct.new(
  :data,
  :timeframe,
  :total_count,
  :total_row_count,
  :value,
  keyword_init: true
)

# Request payload for ListDimensionValue#load.
#
# @!attribute [rw] dimension_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] metric_filter
#   @return [Array, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
ListDimensionValueLoadMatch = Struct.new(
  :dimension_id,
  :filter,
  :limit,
  :metric_filter,
  :page,
  :timeframe,
  keyword_init: true
)

# Request payload for ListDimensionValue#list.
#
# @!attribute [rw] dimension_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] metric_filter
#   @return [Array, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
ListDimensionValueListMatch = Struct.new(
  :dimension_id,
  :filter,
  :limit,
  :metric_filter,
  :order_by,
  :order_direction,
  :page,
  :timeframe,
  keyword_init: true
)

# ListDrmConfiguration entity data model.
#
# @!attribute [rw] id
#   @return [String]
ListDrmConfiguration = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ListDrmConfiguration#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
ListDrmConfigurationListMatch = Struct.new(
  :limit,
  :page,
  keyword_init: true
)

# ListError entity data model.
#
# @!attribute [rw] code
#   @return [Integer]
#
# @!attribute [rw] count
#   @return [Integer]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] last_seen
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] notes
#   @return [String]
#
# @!attribute [rw] percentage
#   @return [Float]
#
# @!attribute [rw] player_error_code
#   @return [String]
ListError = Struct.new(
  :code,
  :count,
  :description,
  :id,
  :last_seen,
  :message,
  :notes,
  :percentage,
  :player_error_code,
  keyword_init: true
)

# Request payload for ListError#list.
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] metric_filter
#   @return [Array, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
ListErrorListMatch = Struct.new(
  :filter,
  :metric_filter,
  :timeframe,
  keyword_init: true
)

# ListExport entity data model.
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
ListExport = Struct.new(
  :data,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for ListExport#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
#
# @!attribute [rw] total_row_count
#   @return [Integer, nil]
ListExportListMatch = Struct.new(
  :data,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# ListFilter entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
ListFilter = Struct.new(
  :data,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for ListFilter#list.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
#
# @!attribute [rw] total_row_count
#   @return [Integer, nil]
ListFilterListMatch = Struct.new(
  :data,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# ListFilterValue entity data model.
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
ListFilterValue = Struct.new(
  :data,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for ListFilterValue#load.
#
# @!attribute [rw] filter_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
ListFilterValueLoadMatch = Struct.new(
  :filter_id,
  :filter,
  :limit,
  :page,
  :timeframe,
  keyword_init: true
)

# ListIncident entity data model.
#
# @!attribute [rw] affected_views
#   @return [Integer]
#
# @!attribute [rw] affected_views_per_hour
#   @return [Integer]
#
# @!attribute [rw] affected_views_per_hour_on_open
#   @return [Integer]
#
# @!attribute [rw] breakdowns
#   @return [Array]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] error_description
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] impact
#   @return [String]
#
# @!attribute [rw] incident_key
#   @return [String]
#
# @!attribute [rw] measured_value
#   @return [Float]
#
# @!attribute [rw] measured_value_on_close
#   @return [Float]
#
# @!attribute [rw] measurement
#   @return [String]
#
# @!attribute [rw] notification_rules
#   @return [Array]
#
# @!attribute [rw] notifications
#   @return [Array]
#
# @!attribute [rw] resolved_at
#   @return [String]
#
# @!attribute [rw] sample_size
#   @return [Integer]
#
# @!attribute [rw] sample_size_unit
#   @return [String]
#
# @!attribute [rw] severity
#   @return [String]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] threshold
#   @return [Float]
ListIncident = Struct.new(
  :affected_views,
  :affected_views_per_hour,
  :affected_views_per_hour_on_open,
  :breakdowns,
  :description,
  :error_description,
  :id,
  :impact,
  :incident_key,
  :measured_value,
  :measured_value_on_close,
  :measurement,
  :notification_rules,
  :notifications,
  :resolved_at,
  :sample_size,
  :sample_size_unit,
  :severity,
  :started_at,
  :status,
  :threshold,
  keyword_init: true
)

# Request payload for ListIncident#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] severity
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
ListIncidentListMatch = Struct.new(
  :limit,
  :order_by,
  :order_direction,
  :page,
  :severity,
  :status,
  keyword_init: true
)

# ListInsight entity data model.
#
# @!attribute [rw] filter_column
#   @return [String]
#
# @!attribute [rw] filter_value
#   @return [String]
#
# @!attribute [rw] metric
#   @return [Float]
#
# @!attribute [rw] negative_impact_score
#   @return [Float]
#
# @!attribute [rw] total_playing_time
#   @return [Integer]
#
# @!attribute [rw] total_views
#   @return [Integer]
#
# @!attribute [rw] total_watch_time
#   @return [Integer]
ListInsight = Struct.new(
  :filter_column,
  :filter_value,
  :metric,
  :negative_impact_score,
  :total_playing_time,
  :total_views,
  :total_watch_time,
  keyword_init: true
)

# Request payload for ListInsight#list.
#
# @!attribute [rw] metric_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] measurement
#   @return [String, nil]
#
# @!attribute [rw] metric_filter
#   @return [Array, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
ListInsightListMatch = Struct.new(
  :metric_id,
  :filter,
  :measurement,
  :metric_filter,
  :order_direction,
  :timeframe,
  keyword_init: true
)

# ListJob entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
ListJob = Struct.new(
  :created_at,
  :id,
  :links,
  :status,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for ListJob#list.
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
#
# @!attribute [rw] workflow
#   @return [String, nil]
ListJobListMatch = Struct.new(
  :asset_id,
  :limit,
  :page,
  :status,
  :workflow,
  keyword_init: true
)

# ListLiveStream entity data model.
#
# @!attribute [rw] active_asset_id
#   @return [String, nil]
#
# @!attribute [rw] active_ingest_protocol
#   @return [String, nil]
#
# @!attribute [rw] audio_only
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] embedded_subtitles
#   @return [Array, nil]
#
# @!attribute [rw] generated_subtitles
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] latency_mode
#   @return [String]
#
# @!attribute [rw] low_latency
#   @return [Boolean, nil]
#
# @!attribute [rw] max_continuous_duration
#   @return [Integer]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] new_asset_settings
#   @return [Hash, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] playback_ids
#   @return [Array, nil]
#
# @!attribute [rw] recent_asset_ids
#   @return [Array, nil]
#
# @!attribute [rw] reconnect_slate_url
#   @return [String, nil]
#
# @!attribute [rw] reconnect_window
#   @return [Float, nil]
#
# @!attribute [rw] reduced_latency
#   @return [Boolean, nil]
#
# @!attribute [rw] simulcast_targets
#   @return [Array, nil]
#
# @!attribute [rw] srt_passphrase
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] stream_key
#   @return [String]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] use_slate_for_standard_latency
#   @return [Boolean, nil]
ListLiveStream = Struct.new(
  :active_asset_id,
  :active_ingest_protocol,
  :audio_only,
  :created_at,
  :embedded_subtitles,
  :generated_subtitles,
  :id,
  :latency_mode,
  :low_latency,
  :max_continuous_duration,
  :meta,
  :new_asset_settings,
  :passthrough,
  :playback_ids,
  :recent_asset_ids,
  :reconnect_slate_url,
  :reconnect_window,
  :reduced_latency,
  :simulcast_targets,
  :srt_passphrase,
  :status,
  :stream_key,
  :test,
  :use_slate_for_standard_latency,
  keyword_init: true
)

# Request payload for ListLiveStream#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] stream_key
#   @return [String, nil]
ListLiveStreamListMatch = Struct.new(
  :limit,
  :page,
  :status,
  :stream_key,
  keyword_init: true
)

# ListMonitoringDimension entity data model.
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
ListMonitoringDimension = Struct.new(
  :display_name,
  :name,
  keyword_init: true
)

# Request payload for ListMonitoringDimension#list.
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ListMonitoringDimensionListMatch = Struct.new(
  :display_name,
  :name,
  keyword_init: true
)

# ListMonitoringMetric entity data model.
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
ListMonitoringMetric = Struct.new(
  :display_name,
  :name,
  keyword_init: true
)

# Request payload for ListMonitoringMetric#list.
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ListMonitoringMetricListMatch = Struct.new(
  :display_name,
  :name,
  keyword_init: true
)

# ListPlaybackRestriction entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] referrer
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] user_agent
#   @return [Hash]
ListPlaybackRestriction = Struct.new(
  :created_at,
  :id,
  :referrer,
  :updated_at,
  :user_agent,
  keyword_init: true
)

# Request payload for ListPlaybackRestriction#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
ListPlaybackRestrictionListMatch = Struct.new(
  :limit,
  :page,
  keyword_init: true
)

# ListRealTimeDimension entity data model.
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
ListRealTimeDimension = Struct.new(
  :display_name,
  :name,
  keyword_init: true
)

# Request payload for ListRealTimeDimension#list.
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ListRealTimeDimensionListMatch = Struct.new(
  :display_name,
  :name,
  keyword_init: true
)

# ListRealTimeMetric entity data model.
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
ListRealTimeMetric = Struct.new(
  :display_name,
  :name,
  keyword_init: true
)

# Request payload for ListRealTimeMetric#list.
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ListRealTimeMetricListMatch = Struct.new(
  :display_name,
  :name,
  keyword_init: true
)

# ListRelatedIncident entity data model.
#
# @!attribute [rw] affected_views
#   @return [Integer]
#
# @!attribute [rw] affected_views_per_hour
#   @return [Integer]
#
# @!attribute [rw] affected_views_per_hour_on_open
#   @return [Integer]
#
# @!attribute [rw] breakdowns
#   @return [Array]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] error_description
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] impact
#   @return [String]
#
# @!attribute [rw] incident_key
#   @return [String]
#
# @!attribute [rw] measured_value
#   @return [Float]
#
# @!attribute [rw] measured_value_on_close
#   @return [Float]
#
# @!attribute [rw] measurement
#   @return [String]
#
# @!attribute [rw] notification_rules
#   @return [Array]
#
# @!attribute [rw] notifications
#   @return [Array]
#
# @!attribute [rw] resolved_at
#   @return [String]
#
# @!attribute [rw] sample_size
#   @return [Integer]
#
# @!attribute [rw] sample_size_unit
#   @return [String]
#
# @!attribute [rw] severity
#   @return [String]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] threshold
#   @return [Float]
ListRelatedIncident = Struct.new(
  :affected_views,
  :affected_views_per_hour,
  :affected_views_per_hour_on_open,
  :breakdowns,
  :description,
  :error_description,
  :id,
  :impact,
  :incident_key,
  :measured_value,
  :measured_value_on_close,
  :measurement,
  :notification_rules,
  :notifications,
  :resolved_at,
  :sample_size,
  :sample_size_unit,
  :severity,
  :started_at,
  :status,
  :threshold,
  keyword_init: true
)

# Request payload for ListRelatedIncident#list.
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
ListRelatedIncidentListMatch = Struct.new(
  :incident_id,
  :limit,
  :order_by,
  :order_direction,
  :page,
  keyword_init: true
)

# ListSigningKey entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] private_key
#   @return [String, nil]
ListSigningKey = Struct.new(
  :created_at,
  :id,
  :private_key,
  keyword_init: true
)

# Request payload for ListSigningKey#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
ListSigningKeyListMatch = Struct.new(
  :limit,
  :page,
  keyword_init: true
)

# ListSubviewBreakdownValue entity data model.
#
# @!attribute [rw] breakdown_value
#   @return [String]
#
# @!attribute [rw] metric_value
#   @return [Float]
ListSubviewBreakdownValue = Struct.new(
  :breakdown_value,
  :metric_value,
  keyword_init: true
)

# Request payload for ListSubviewBreakdownValue#list.
#
# @!attribute [rw] subview_metric_id
#   @return [String]
#
# @!attribute [rw] subview_type
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] group_by
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
ListSubviewBreakdownValueListMatch = Struct.new(
  :subview_metric_id,
  :subview_type,
  :filter,
  :group_by,
  :limit,
  :page,
  :timeframe,
  keyword_init: true
)

# ListSubviewComparisonValue entity data model.
#
# @!attribute [rw] dimension_value
#   @return [String]
#
# @!attribute [rw] values
#   @return [Array]
ListSubviewComparisonValue = Struct.new(
  :dimension_value,
  :values,
  keyword_init: true
)

# Request payload for ListSubviewComparisonValue#list.
#
# @!attribute [rw] subview_metric_id
#   @return [String]
#
# @!attribute [rw] subview_type
#   @return [String]
#
# @!attribute [rw] breakdown_value_limit
#   @return [Integer, nil]
#
# @!attribute [rw] dimension
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] group_by
#   @return [Array, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
#
# @!attribute [rw] value
#   @return [Array]
ListSubviewComparisonValueListMatch = Struct.new(
  :subview_metric_id,
  :subview_type,
  :breakdown_value_limit,
  :dimension,
  :filter,
  :group_by,
  :timeframe,
  :value,
  keyword_init: true
)

# ListSubviewDimension entity data model.
#
# @!attribute [rw] subview
#   @return [Array]
#
# @!attribute [rw] view
#   @return [Array]
ListSubviewDimension = Struct.new(
  :subview,
  :view,
  keyword_init: true
)

# Request payload for ListSubviewDimension#load.
#
# @!attribute [rw] subview_type
#   @return [String]
ListSubviewDimensionLoadMatch = Struct.new(
  :subview_type,
  keyword_init: true
)

# ListSubviewDimensionValue entity data model.
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] meta
#   @return [Object]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
ListSubviewDimensionValue = Struct.new(
  :data,
  :meta,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for ListSubviewDimensionValue#load.
#
# @!attribute [rw] dimension_name
#   @return [String]
#
# @!attribute [rw] subview_metric_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
ListSubviewDimensionValueLoadMatch = Struct.new(
  :dimension_name,
  :subview_metric_id,
  :filter,
  :limit,
  :order_by,
  :order_direction,
  :page,
  :query,
  :timeframe,
  keyword_init: true
)

# ListTranscriptionVocabulary entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] phrases
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
ListTranscriptionVocabulary = Struct.new(
  :created_at,
  :id,
  :name,
  :passthrough,
  :phrases,
  :updated_at,
  keyword_init: true
)

# Request payload for ListTranscriptionVocabulary#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
ListTranscriptionVocabularyListMatch = Struct.new(
  :limit,
  :page,
  keyword_init: true
)

# ListUpload entity data model.
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] cors_origin
#   @return [String]
#
# @!attribute [rw] error
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] new_asset_settings
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] timeout
#   @return [Integer]
#
# @!attribute [rw] url
#   @return [String, nil]
ListUpload = Struct.new(
  :asset_id,
  :cors_origin,
  :error,
  :id,
  :new_asset_settings,
  :status,
  :test,
  :timeout,
  :url,
  keyword_init: true
)

# Request payload for ListUpload#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
ListUploadListMatch = Struct.new(
  :limit,
  :page,
  keyword_init: true
)

# ListUsageExport entity data model.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] download_url
#   @return [String]
#
# @!attribute [rw] download_url_expires_at
#   @return [Integer]
#
# @!attribute [rw] file_size
#   @return [Integer]
ListUsageExport = Struct.new(
  :date,
  :download_url,
  :download_url_expires_at,
  :file_size,
  keyword_init: true
)

# Request payload for ListUsageExport#list.
#
# @!attribute [rw] download_url_ttl
#   @return [Integer, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
ListUsageExportListMatch = Struct.new(
  :download_url_ttl,
  :limit,
  :page,
  :timeframe,
  keyword_init: true
)

# ListVideoView entity data model.
#
# @!attribute [rw] country_code
#   @return [String]
#
# @!attribute [rw] error_type_id
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] playback_failure
#   @return [Boolean]
#
# @!attribute [rw] player_error_code
#   @return [String]
#
# @!attribute [rw] player_error_message
#   @return [String]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
#
# @!attribute [rw] video_title
#   @return [String]
#
# @!attribute [rw] view_end
#   @return [String]
#
# @!attribute [rw] view_start
#   @return [String]
#
# @!attribute [rw] viewer_application_name
#   @return [String]
#
# @!attribute [rw] viewer_experience_score
#   @return [Float]
#
# @!attribute [rw] viewer_os_family
#   @return [String]
#
# @!attribute [rw] watch_time
#   @return [Integer]
ListVideoView = Struct.new(
  :country_code,
  :error_type_id,
  :id,
  :playback_failure,
  :player_error_code,
  :player_error_message,
  :total_row_count,
  :video_title,
  :view_end,
  :view_start,
  :viewer_application_name,
  :viewer_experience_score,
  :viewer_os_family,
  :watch_time,
  keyword_init: true
)

# Request payload for ListVideoView#list.
#
# @!attribute [rw] error_id
#   @return [Integer, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] metric_filter
#   @return [Array, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
#
# @!attribute [rw] viewer_id
#   @return [String, nil]
ListVideoViewListMatch = Struct.new(
  :error_id,
  :filter,
  :limit,
  :metric_filter,
  :order_direction,
  :page,
  :timeframe,
  :viewer_id,
  keyword_init: true
)

# ListVideoViewExport entity data model.
#
# @!attribute [rw] export_date
#   @return [String]
#
# @!attribute [rw] files
#   @return [Array]
ListVideoViewExport = Struct.new(
  :export_date,
  :files,
  keyword_init: true
)

# Request payload for ListVideoViewExport#list.
#
# @!attribute [rw] export_date
#   @return [String, nil]
#
# @!attribute [rw] files
#   @return [Array, nil]
ListVideoViewExportListMatch = Struct.new(
  :export_date,
  :files,
  keyword_init: true
)

# ListWebhook entity data model.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] signing_secret
#   @return [String, nil]
ListWebhook = Struct.new(
  :address,
  :created_at,
  :enabled,
  :id,
  :signing_secret,
  keyword_init: true
)

# Request payload for ListWebhook#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
ListWebhookListMatch = Struct.new(
  :limit,
  :page,
  keyword_init: true
)

# LiveStream entity data model.
#
# @!attribute [rw] active_asset_id
#   @return [String, nil]
#
# @!attribute [rw] active_ingest_protocol
#   @return [String, nil]
#
# @!attribute [rw] advanced_playback_policies
#   @return [Array, nil]
#
# @!attribute [rw] audio_only
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] embedded_subtitles
#   @return [Array, nil]
#
# @!attribute [rw] generated_subtitles
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] latency_mode
#   @return [String]
#
# @!attribute [rw] low_latency
#   @return [Boolean, nil]
#
# @!attribute [rw] max_continuous_duration
#   @return [Integer]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] new_asset_settings
#   @return [Hash, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] playback_ids
#   @return [Array, nil]
#
# @!attribute [rw] playback_policies
#   @return [Array, nil]
#
# @!attribute [rw] playback_policy
#   @return [Array, nil]
#
# @!attribute [rw] recent_asset_ids
#   @return [Array, nil]
#
# @!attribute [rw] reconnect_slate_url
#   @return [String, nil]
#
# @!attribute [rw] reconnect_window
#   @return [Float, nil]
#
# @!attribute [rw] reduced_latency
#   @return [Boolean, nil]
#
# @!attribute [rw] simulcast_targets
#   @return [Array, nil]
#
# @!attribute [rw] srt_passphrase
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] stream_key
#   @return [String]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] use_slate_for_standard_latency
#   @return [Boolean, nil]
LiveStream = Struct.new(
  :active_asset_id,
  :active_ingest_protocol,
  :advanced_playback_policies,
  :audio_only,
  :created_at,
  :embedded_subtitles,
  :generated_subtitles,
  :id,
  :latency_mode,
  :low_latency,
  :max_continuous_duration,
  :meta,
  :new_asset_settings,
  :passthrough,
  :playback_ids,
  :playback_policies,
  :playback_policy,
  :recent_asset_ids,
  :reconnect_slate_url,
  :reconnect_window,
  :reduced_latency,
  :simulcast_targets,
  :srt_passphrase,
  :status,
  :stream_key,
  :test,
  :use_slate_for_standard_latency,
  keyword_init: true
)

# Request payload for LiveStream#load.
#
# @!attribute [rw] id
#   @return [String]
LiveStreamLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for LiveStream#create.
#
# @!attribute [rw] active_asset_id
#   @return [String, nil]
#
# @!attribute [rw] active_ingest_protocol
#   @return [String, nil]
#
# @!attribute [rw] advanced_playback_policies
#   @return [Array, nil]
#
# @!attribute [rw] audio_only
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] embedded_subtitles
#   @return [Array, nil]
#
# @!attribute [rw] generated_subtitles
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] latency_mode
#   @return [String]
#
# @!attribute [rw] low_latency
#   @return [Boolean, nil]
#
# @!attribute [rw] max_continuous_duration
#   @return [Integer]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] new_asset_settings
#   @return [Hash, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] playback_ids
#   @return [Array, nil]
#
# @!attribute [rw] playback_policies
#   @return [Array, nil]
#
# @!attribute [rw] playback_policy
#   @return [Array, nil]
#
# @!attribute [rw] recent_asset_ids
#   @return [Array, nil]
#
# @!attribute [rw] reconnect_slate_url
#   @return [String, nil]
#
# @!attribute [rw] reconnect_window
#   @return [Float, nil]
#
# @!attribute [rw] reduced_latency
#   @return [Boolean, nil]
#
# @!attribute [rw] simulcast_targets
#   @return [Array, nil]
#
# @!attribute [rw] srt_passphrase
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] stream_key
#   @return [String]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] use_slate_for_standard_latency
#   @return [Boolean, nil]
LiveStreamCreateData = Struct.new(
  :active_asset_id,
  :active_ingest_protocol,
  :advanced_playback_policies,
  :audio_only,
  :created_at,
  :embedded_subtitles,
  :generated_subtitles,
  :id,
  :latency_mode,
  :low_latency,
  :max_continuous_duration,
  :meta,
  :new_asset_settings,
  :passthrough,
  :playback_ids,
  :playback_policies,
  :playback_policy,
  :recent_asset_ids,
  :reconnect_slate_url,
  :reconnect_window,
  :reduced_latency,
  :simulcast_targets,
  :srt_passphrase,
  :status,
  :stream_key,
  :test,
  :use_slate_for_standard_latency,
  keyword_init: true
)

# Request payload for LiveStream#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] active_asset_id
#   @return [String, nil]
#
# @!attribute [rw] active_ingest_protocol
#   @return [String, nil]
#
# @!attribute [rw] advanced_playback_policies
#   @return [Array, nil]
#
# @!attribute [rw] audio_only
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] embedded_subtitles
#   @return [Array, nil]
#
# @!attribute [rw] generated_subtitles
#   @return [Array, nil]
#
# @!attribute [rw] latency_mode
#   @return [String, nil]
#
# @!attribute [rw] low_latency
#   @return [Boolean, nil]
#
# @!attribute [rw] max_continuous_duration
#   @return [Integer, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] new_asset_settings
#   @return [Hash, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] playback_ids
#   @return [Array, nil]
#
# @!attribute [rw] playback_policies
#   @return [Array, nil]
#
# @!attribute [rw] playback_policy
#   @return [Array, nil]
#
# @!attribute [rw] recent_asset_ids
#   @return [Array, nil]
#
# @!attribute [rw] reconnect_slate_url
#   @return [String, nil]
#
# @!attribute [rw] reconnect_window
#   @return [Float, nil]
#
# @!attribute [rw] reduced_latency
#   @return [Boolean, nil]
#
# @!attribute [rw] simulcast_targets
#   @return [Array, nil]
#
# @!attribute [rw] srt_passphrase
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] stream_key
#   @return [String, nil]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] use_slate_for_standard_latency
#   @return [Boolean, nil]
LiveStreamUpdateData = Struct.new(
  :id,
  :active_asset_id,
  :active_ingest_protocol,
  :advanced_playback_policies,
  :audio_only,
  :created_at,
  :embedded_subtitles,
  :generated_subtitles,
  :latency_mode,
  :low_latency,
  :max_continuous_duration,
  :meta,
  :new_asset_settings,
  :passthrough,
  :playback_ids,
  :playback_policies,
  :playback_policy,
  :recent_asset_ids,
  :reconnect_slate_url,
  :reconnect_window,
  :reduced_latency,
  :simulcast_targets,
  :srt_passphrase,
  :status,
  :stream_key,
  :test,
  :use_slate_for_standard_latency,
  keyword_init: true
)

# Request payload for LiveStream#remove.
#
# @!attribute [rw] id
#   @return [String]
LiveStreamRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# LiveStreamPlaybackId entity data model.
#
# @!attribute [rw] drm_configuration_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] policy
#   @return [String]
LiveStreamPlaybackId = Struct.new(
  :drm_configuration_id,
  :id,
  :policy,
  keyword_init: true
)

# Request payload for LiveStreamPlaybackId#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] live_stream_id
#   @return [String]
LiveStreamPlaybackIdLoadMatch = Struct.new(
  :id,
  :live_stream_id,
  keyword_init: true
)

# MetricTimeseriesData entity data model.
#
# @!attribute [rw] data
#   @return [Array]
#
# @!attribute [rw] meta
#   @return [Hash]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
MetricTimeseriesData = Struct.new(
  :data,
  :meta,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for MetricTimeseriesData#list.
#
# @!attribute [rw] metric_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] group_by
#   @return [String, nil]
#
# @!attribute [rw] measurement
#   @return [String, nil]
#
# @!attribute [rw] metric_filter
#   @return [Array, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
MetricTimeseriesDataListMatch = Struct.new(
  :metric_id,
  :filter,
  :group_by,
  :measurement,
  :metric_filter,
  :order_direction,
  :timeframe,
  keyword_init: true
)

# Moderate entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
Moderate = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for Moderate#load.
#
# @!attribute [rw] id
#   @return [String]
ModerateLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Moderate#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
ModerateCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# MonitoringBreakdown entity data model.
#
# @!attribute [rw] concurrent_viewers
#   @return [Integer]
#
# @!attribute [rw] display_value
#   @return [String, nil]
#
# @!attribute [rw] metric_value
#   @return [Float]
#
# @!attribute [rw] negative_impact
#   @return [Integer]
#
# @!attribute [rw] starting_up_viewers
#   @return [Integer]
#
# @!attribute [rw] value
#   @return [String]
MonitoringBreakdown = Struct.new(
  :concurrent_viewers,
  :display_value,
  :metric_value,
  :negative_impact,
  :starting_up_viewers,
  :value,
  keyword_init: true
)

# Request payload for MonitoringBreakdown#list.
#
# @!attribute [rw] monitoring_metric_id
#   @return [String]
#
# @!attribute [rw] dimension
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [Integer, nil]
MonitoringBreakdownListMatch = Struct.new(
  :monitoring_metric_id,
  :dimension,
  :filter,
  :order_by,
  :order_direction,
  :timestamp,
  keyword_init: true
)

# MonitoringBreakdownTimeseries entity data model.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] values
#   @return [Array]
MonitoringBreakdownTimeseries = Struct.new(
  :date,
  :values,
  keyword_init: true
)

# Request payload for MonitoringBreakdownTimeseries#list.
#
# @!attribute [rw] monitoring_metric_id
#   @return [String]
#
# @!attribute [rw] dimension
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
MonitoringBreakdownTimeseriesListMatch = Struct.new(
  :monitoring_metric_id,
  :dimension,
  :filter,
  :limit,
  :order_by,
  :order_direction,
  :timeframe,
  keyword_init: true
)

# MonitoringHistogramTimeseries entity data model.
#
# @!attribute [rw] average
#   @return [Float]
#
# @!attribute [rw] bucket_values
#   @return [Array]
#
# @!attribute [rw] max_percentage
#   @return [Float]
#
# @!attribute [rw] median
#   @return [Float]
#
# @!attribute [rw] p95
#   @return [Float]
#
# @!attribute [rw] sum
#   @return [Integer]
#
# @!attribute [rw] timestamp
#   @return [String]
MonitoringHistogramTimeseries = Struct.new(
  :average,
  :bucket_values,
  :max_percentage,
  :median,
  :p95,
  :sum,
  :timestamp,
  keyword_init: true
)

# Request payload for MonitoringHistogramTimeseries#list.
#
# @!attribute [rw] monitoring_histogram_metric_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
MonitoringHistogramTimeseriesListMatch = Struct.new(
  :monitoring_histogram_metric_id,
  :filter,
  keyword_init: true
)

# MonitoringTimeseries entity data model.
#
# @!attribute [rw] concurrent_viewers
#   @return [Integer]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] value
#   @return [Float]
MonitoringTimeseries = Struct.new(
  :concurrent_viewers,
  :date,
  :value,
  keyword_init: true
)

# Request payload for MonitoringTimeseries#list.
#
# @!attribute [rw] monitoring_metric_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] timestamp
#   @return [Integer, nil]
MonitoringTimeseriesListMatch = Struct.new(
  :monitoring_metric_id,
  :filter,
  :timestamp,
  keyword_init: true
)

# Overall entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] meta
#   @return [Hash]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
Overall = Struct.new(
  :data,
  :meta,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for Overall#list.
#
# @!attribute [rw] metric_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] measurement
#   @return [String, nil]
#
# @!attribute [rw] metric_filter
#   @return [Array, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
OverallListMatch = Struct.new(
  :metric_id,
  :filter,
  :measurement,
  :metric_filter,
  :timeframe,
  keyword_init: true
)

# PlaybackRestriction entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] referrer
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] user_agent
#   @return [Hash]
PlaybackRestriction = Struct.new(
  :created_at,
  :id,
  :referrer,
  :updated_at,
  :user_agent,
  keyword_init: true
)

# Request payload for PlaybackRestriction#load.
#
# @!attribute [rw] id
#   @return [String]
PlaybackRestrictionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for PlaybackRestriction#create.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] referrer
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] user_agent
#   @return [Hash]
PlaybackRestrictionCreateData = Struct.new(
  :created_at,
  :id,
  :referrer,
  :updated_at,
  :user_agent,
  keyword_init: true
)

# Request payload for PlaybackRestriction#update.
#
# @!attribute [rw] playback_restriction_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] referrer
#   @return [Hash, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user_agent
#   @return [Hash, nil]
PlaybackRestrictionUpdateData = Struct.new(
  :playback_restriction_id,
  :created_at,
  :id,
  :referrer,
  :updated_at,
  :user_agent,
  keyword_init: true
)

# Request payload for PlaybackRestriction#remove.
#
# @!attribute [rw] id
#   @return [String]
PlaybackRestrictionRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# RealTimeBreakdown entity data model.
#
# @!attribute [rw] concurrent_viewers
#   @return [Integer]
#
# @!attribute [rw] display_value
#   @return [String, nil]
#
# @!attribute [rw] metric_value
#   @return [Float]
#
# @!attribute [rw] negative_impact
#   @return [Integer]
#
# @!attribute [rw] starting_up_viewers
#   @return [Integer]
#
# @!attribute [rw] value
#   @return [String]
RealTimeBreakdown = Struct.new(
  :concurrent_viewers,
  :display_value,
  :metric_value,
  :negative_impact,
  :starting_up_viewers,
  :value,
  keyword_init: true
)

# Request payload for RealTimeBreakdown#list.
#
# @!attribute [rw] realtime_metric_id
#   @return [String]
#
# @!attribute [rw] dimension
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_direction
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [Integer, nil]
RealTimeBreakdownListMatch = Struct.new(
  :realtime_metric_id,
  :dimension,
  :filter,
  :order_by,
  :order_direction,
  :timestamp,
  keyword_init: true
)

# RealTimeHistogramTimeseries entity data model.
#
# @!attribute [rw] average
#   @return [Float]
#
# @!attribute [rw] bucket_values
#   @return [Array]
#
# @!attribute [rw] max_percentage
#   @return [Float]
#
# @!attribute [rw] median
#   @return [Float]
#
# @!attribute [rw] p95
#   @return [Float]
#
# @!attribute [rw] sum
#   @return [Integer]
#
# @!attribute [rw] timestamp
#   @return [String]
RealTimeHistogramTimeseries = Struct.new(
  :average,
  :bucket_values,
  :max_percentage,
  :median,
  :p95,
  :sum,
  :timestamp,
  keyword_init: true
)

# Request payload for RealTimeHistogramTimeseries#list.
#
# @!attribute [rw] realtime_histogram_metric_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
RealTimeHistogramTimeseriesListMatch = Struct.new(
  :realtime_histogram_metric_id,
  :filter,
  keyword_init: true
)

# RealTimeTimeseries entity data model.
#
# @!attribute [rw] concurrent_viewers
#   @return [Integer]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] value
#   @return [Float]
RealTimeTimeseries = Struct.new(
  :concurrent_viewers,
  :date,
  :value,
  keyword_init: true
)

# Request payload for RealTimeTimeseries#list.
#
# @!attribute [rw] realtime_metric_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] timestamp
#   @return [Integer, nil]
RealTimeTimeseriesListMatch = Struct.new(
  :realtime_metric_id,
  :filter,
  :timestamp,
  keyword_init: true
)

# SignalLiveStreamComplete entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
SignalLiveStreamComplete = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for SignalLiveStreamComplete#update.
#
# @!attribute [rw] live_stream_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
SignalLiveStreamCompleteUpdateData = Struct.new(
  :live_stream_id,
  :data,
  keyword_init: true
)

# SigningKey entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] private_key
#   @return [String, nil]
SigningKey = Struct.new(
  :created_at,
  :data,
  :id,
  :private_key,
  keyword_init: true
)

# Request payload for SigningKey#load.
#
# @!attribute [rw] id
#   @return [String]
SigningKeyLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for SigningKey#create.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] private_key
#   @return [String, nil]
SigningKeyCreateData = Struct.new(
  :created_at,
  :data,
  :id,
  :private_key,
  keyword_init: true
)

# Request payload for SigningKey#remove.
#
# @!attribute [rw] id
#   @return [String]
SigningKeyRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# SimulcastTarget entity data model.
#
# @!attribute [rw] error_severity
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] stream_key
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String]
SimulcastTarget = Struct.new(
  :error_severity,
  :id,
  :passthrough,
  :status,
  :stream_key,
  :url,
  keyword_init: true
)

# Request payload for SimulcastTarget#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] live_stream_id
#   @return [String]
SimulcastTargetLoadMatch = Struct.new(
  :id,
  :live_stream_id,
  keyword_init: true
)

# Request payload for SimulcastTarget#create.
#
# @!attribute [rw] live_stream_id
#   @return [String]
#
# @!attribute [rw] error_severity
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] stream_key
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String]
SimulcastTargetCreateData = Struct.new(
  :live_stream_id,
  :error_severity,
  :id,
  :passthrough,
  :status,
  :stream_key,
  :url,
  keyword_init: true
)

# StaticRendition entity data model.
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resolution
#   @return [String]
StaticRendition = Struct.new(
  :passthrough,
  :resolution,
  keyword_init: true
)

# Request payload for StaticRendition#create.
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resolution
#   @return [String]
StaticRenditionCreateData = Struct.new(
  :asset_id,
  :passthrough,
  :resolution,
  keyword_init: true
)

# SubviewBreakdownTimeseries entity data model.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] values
#   @return [Array]
SubviewBreakdownTimeseries = Struct.new(
  :date,
  :status,
  :values,
  keyword_init: true
)

# Request payload for SubviewBreakdownTimeseries#list.
#
# @!attribute [rw] subview_metric_id
#   @return [String]
#
# @!attribute [rw] subview_type
#   @return [String]
#
# @!attribute [rw] breakdown_value_limit
#   @return [Integer, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] group_by
#   @return [Array, nil]
#
# @!attribute [rw] time_granularity
#   @return [String, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
SubviewBreakdownTimeseriesListMatch = Struct.new(
  :subview_metric_id,
  :subview_type,
  :breakdown_value_limit,
  :filter,
  :group_by,
  :time_granularity,
  :timeframe,
  keyword_init: true
)

# SubviewOverallValue entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] meta
#   @return [Hash]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
SubviewOverallValue = Struct.new(
  :data,
  :meta,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for SubviewOverallValue#list.
#
# @!attribute [rw] subview_metric_id
#   @return [String]
#
# @!attribute [rw] subview_type
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] timeframe
#   @return [Array, nil]
SubviewOverallValueListMatch = Struct.new(
  :subview_metric_id,
  :subview_type,
  :filter,
  :timeframe,
  keyword_init: true
)

# Summarize entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
Summarize = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for Summarize#load.
#
# @!attribute [rw] id
#   @return [String]
SummarizeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Summarize#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
SummarizeCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# TranscriptionVocabulary entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] phrases
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
TranscriptionVocabulary = Struct.new(
  :created_at,
  :id,
  :name,
  :passthrough,
  :phrases,
  :updated_at,
  keyword_init: true
)

# Request payload for TranscriptionVocabulary#load.
#
# @!attribute [rw] id
#   @return [String]
TranscriptionVocabularyLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for TranscriptionVocabulary#create.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] phrases
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
TranscriptionVocabularyCreateData = Struct.new(
  :created_at,
  :id,
  :name,
  :passthrough,
  :phrases,
  :updated_at,
  keyword_init: true
)

# Request payload for TranscriptionVocabulary#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] phrases
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
TranscriptionVocabularyUpdateData = Struct.new(
  :id,
  :created_at,
  :name,
  :passthrough,
  :phrases,
  :updated_at,
  keyword_init: true
)

# Request payload for TranscriptionVocabulary#remove.
#
# @!attribute [rw] id
#   @return [String]
TranscriptionVocabularyRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# TranslateAudio entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash, nil]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
TranslateAudio = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for TranslateAudio#load.
#
# @!attribute [rw] id
#   @return [String]
TranslateAudioLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for TranslateAudio#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash, nil]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
TranslateAudioCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# TranslateCaption entity data model.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash, nil]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
TranslateCaption = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# Request payload for TranslateCaption#load.
#
# @!attribute [rw] id
#   @return [String]
TranslateCaptionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for TranslateCaption#create.
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] directive
#   @return [Hash]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] outputs
#   @return [Hash, nil]
#
# @!attribute [rw] parameters
#   @return [Hash]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] resources
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] units_consumed
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [String]
TranslateCaptionCreateData = Struct.new(
  :created_at,
  :directive,
  :errors,
  :id,
  :outputs,
  :parameters,
  :passthrough,
  :resources,
  :status,
  :units_consumed,
  :updated_at,
  :workflow,
  keyword_init: true
)

# UpdateAssetTrack entity data model.
#
# @!attribute [rw] auto_language_confidence
#   @return [Float, nil]
#
# @!attribute [rw] closed_captions
#   @return [Boolean, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] language_code
#   @return [String, nil]
#
# @!attribute [rw] max_channels
#   @return [Integer, nil]
#
# @!attribute [rw] max_frame_rate
#   @return [Float, nil]
#
# @!attribute [rw] max_height
#   @return [Integer, nil]
#
# @!attribute [rw] max_width
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] primary
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] text_source
#   @return [String, nil]
#
# @!attribute [rw] text_type
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
UpdateAssetTrack = Struct.new(
  :auto_language_confidence,
  :closed_captions,
  :duration,
  :id,
  :language_code,
  :max_channels,
  :max_frame_rate,
  :max_height,
  :max_width,
  :name,
  :passthrough,
  :primary,
  :status,
  :text_source,
  :text_type,
  :type,
  keyword_init: true
)

# Request payload for UpdateAssetTrack#update.
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] auto_language_confidence
#   @return [Float, nil]
#
# @!attribute [rw] closed_captions
#   @return [Boolean, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] language_code
#   @return [String, nil]
#
# @!attribute [rw] max_channels
#   @return [Integer, nil]
#
# @!attribute [rw] max_frame_rate
#   @return [Float, nil]
#
# @!attribute [rw] max_height
#   @return [Integer, nil]
#
# @!attribute [rw] max_width
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] passthrough
#   @return [String, nil]
#
# @!attribute [rw] primary
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] text_source
#   @return [String, nil]
#
# @!attribute [rw] text_type
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
UpdateAssetTrackUpdateData = Struct.new(
  :asset_id,
  :id,
  :auto_language_confidence,
  :closed_captions,
  :duration,
  :language_code,
  :max_channels,
  :max_frame_rate,
  :max_height,
  :max_width,
  :name,
  :passthrough,
  :primary,
  :status,
  :text_source,
  :text_type,
  :type,
  keyword_init: true
)

# Upload entity data model.
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] cors_origin
#   @return [String]
#
# @!attribute [rw] error
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] new_asset_settings
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] timeout
#   @return [Integer]
#
# @!attribute [rw] url
#   @return [String, nil]
Upload = Struct.new(
  :asset_id,
  :cors_origin,
  :error,
  :id,
  :new_asset_settings,
  :status,
  :test,
  :timeout,
  :url,
  keyword_init: true
)

# Request payload for Upload#load.
#
# @!attribute [rw] id
#   @return [String]
UploadLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Upload#create.
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] cors_origin
#   @return [String]
#
# @!attribute [rw] error
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] new_asset_settings
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] timeout
#   @return [Integer]
#
# @!attribute [rw] url
#   @return [String, nil]
UploadCreateData = Struct.new(
  :asset_id,
  :cors_origin,
  :error,
  :id,
  :new_asset_settings,
  :status,
  :test,
  :timeout,
  :url,
  keyword_init: true
)

# Request payload for Upload#update.
#
# @!attribute [rw] upload_id
#   @return [String]
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] cors_origin
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] new_asset_settings
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
UploadUpdateData = Struct.new(
  :upload_id,
  :asset_id,
  :cors_origin,
  :error,
  :id,
  :new_asset_settings,
  :status,
  :test,
  :timeout,
  :url,
  keyword_init: true
)

# UrlSigningKey entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
UrlSigningKey = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for UrlSigningKey#remove.
#
# @!attribute [rw] id
#   @return [String]
UrlSigningKeyRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# VideoView entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] timeframe
#   @return [Array]
#
# @!attribute [rw] total_row_count
#   @return [Integer]
VideoView = Struct.new(
  :data,
  :id,
  :timeframe,
  :total_row_count,
  keyword_init: true
)

# Request payload for VideoView#load.
#
# @!attribute [rw] id
#   @return [String]
VideoViewLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Webhook entity data model.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] signing_secret
#   @return [String, nil]
Webhook = Struct.new(
  :address,
  :created_at,
  :enabled,
  :id,
  :signing_secret,
  keyword_init: true
)

# Request payload for Webhook#load.
#
# @!attribute [rw] id
#   @return [String]
WebhookLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Webhook#create.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] signing_secret
#   @return [String, nil]
WebhookCreateData = Struct.new(
  :address,
  :created_at,
  :enabled,
  :id,
  :signing_secret,
  keyword_init: true
)

# Request payload for Webhook#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] signing_secret
#   @return [String, nil]
WebhookUpdateData = Struct.new(
  :id,
  :address,
  :created_at,
  :enabled,
  :signing_secret,
  keyword_init: true
)

# Request payload for Webhook#remove.
#
# @!attribute [rw] id
#   @return [String]
WebhookRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# WhoAmI entity data model.
#
# @!attribute [rw] access_token_name
#   @return [String]
#
# @!attribute [rw] environment_id
#   @return [String]
#
# @!attribute [rw] environment_name
#   @return [String]
#
# @!attribute [rw] environment_type
#   @return [String]
#
# @!attribute [rw] organization_id
#   @return [String]
#
# @!attribute [rw] organization_name
#   @return [String]
#
# @!attribute [rw] permissions
#   @return [Array]
WhoAmI = Struct.new(
  :access_token_name,
  :environment_id,
  :environment_name,
  :environment_type,
  :organization_id,
  :organization_name,
  :permissions,
  keyword_init: true
)

# Request payload for WhoAmI#load.
#
# @!attribute [rw] access_token_name
#   @return [String, nil]
#
# @!attribute [rw] environment_id
#   @return [String, nil]
#
# @!attribute [rw] environment_name
#   @return [String, nil]
#
# @!attribute [rw] environment_type
#   @return [String, nil]
#
# @!attribute [rw] organization_id
#   @return [String, nil]
#
# @!attribute [rw] organization_name
#   @return [String, nil]
#
# @!attribute [rw] permissions
#   @return [Array, nil]
WhoAmILoadMatch = Struct.new(
  :access_token_name,
  :environment_id,
  :environment_name,
  :environment_type,
  :organization_id,
  :organization_name,
  :permissions,
  keyword_init: true
)

