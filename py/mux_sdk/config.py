# Mux SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Mux",
            "slug": "mux",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.mux.com",
            "auth": {
                "prefix": "Basic",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "annotation": {},
                "ask_question": {},
                "asset": {},
                "asset_or_live_stream_id": {},
                "asset_playback_id": {},
                "asset_shot": {},
                "create_playback_id": {},
                "create_track": {},
                "directive": {},
                "directive_run_detail": {},
                "drm_configuration": {},
                "edit_caption": {},
                "engagement_heatmap": {},
                "engagement_hotspot": {},
                "find_best_thumbnail": {},
                "find_key_moment": {},
                "find_scene": {},
                "generate_asset_shot": {},
                "generate_chapter": {},
                "generate_engagement_insight": {},
                "generate_premium_caption": {},
                "generate_track_subtitle": {},
                "incident": {},
                "input_info": {},
                "job_summary": {},
                "list_all_metric_value": {},
                "list_breakdown_value": {},
                "list_delivery_usage": {},
                "list_dimension_value": {},
                "list_error": {},
                "list_export": {},
                "list_filter_value": {},
                "list_insight": {},
                "list_monitoring_dimension": {},
                "list_monitoring_metric": {},
                "list_real_time_dimension": {},
                "list_real_time_metric": {},
                "list_related_incident": {},
                "list_subview_breakdown_value": {},
                "list_subview_comparison_value": {},
                "list_subview_dimension": {},
                "list_subview_dimension_value": {},
                "list_video_view_export": {},
                "live_stream": {},
                "live_stream_playback_id": {},
                "metric_timeseries_data": {},
                "moderate": {},
                "monitoring_breakdown": {},
                "monitoring_breakdown_timeseries": {},
                "monitoring_histogram_timeseries": {},
                "monitoring_timeseries": {},
                "overall": {},
                "playback_restriction": {},
                "real_time_breakdown": {},
                "real_time_histogram_timeseries": {},
                "real_time_timeseries": {},
                "signal_live_stream_complete": {},
                "signing_key": {},
                "simulcast_target": {},
                "static_rendition": {},
                "subview_breakdown_timeseries": {},
                "subview_overall_value": {},
                "summarize": {},
                "transcription_vocabulary": {},
                "translate_audio": {},
                "translate_caption": {},
                "update_asset_track": {},
                "upload": {},
                "url_signing_key": {},
                "usage_export": {},
                "video_view": {},
                "webhook": {},
                "who_am_i": {},
            },
        },
        "entity": {
      "annotation": {
        "fields": [
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Datetime when the annotation applies",
            "format": "date-time",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the annotation",
            "format": "uuid",
          },
          {
            "name": "note",
            "title": "Note",
            "type": "`$STRING`",
            "req": True,
            "short": "The annotation note content",
          },
          {
            "name": "sub_property_id",
            "title": "Sub Property Id",
            "type": "`$STRING`",
            "short": "Customer-defined sub-property identifier",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "annotation",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/data/v1/annotations",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "annotations",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "annotations",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/annotations",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "annotations",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "annotations",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "order_direction",
                    "page",
                    "timeframe",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/annotations/{ANNOTATION_ID}",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "annotations",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "annotations",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ANNOTATION_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "ANNOTATION_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/data/v1/annotations/{ANNOTATION_ID}",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "annotations",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "annotations",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ANNOTATION_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "ANNOTATION_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PATCH",
                "orig": "/data/v1/annotations/{ANNOTATION_ID}",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "annotations",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "annotations",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ANNOTATION_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "ANNOTATION_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "ask_question": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "ask_question",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/ask-questions",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "ask-questions",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "ask-questions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/ask-questions/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "ask-questions",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "ask-questions",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "asset": {
        "fields": [
          {
            "name": "aspect_ratio",
            "title": "Aspect Ratio",
            "type": "`$STRING`",
            "short": "The aspect ratio of the asset in the form of `width:height`, for example `16:9`.",
          },
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
            "req": True,
            "short": "Time the Asset was created, defined as a Unix timestamp (seconds since epoch).",
            "format": "int64",
          },
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
          },
          {
            "name": "directives",
            "title": "Directives",
            "type": "`$ARRAY`",
            "short": "The Mux Robots directives applied to the asset.",
          },
          {
            "name": "duration",
            "title": "Duration",
            "type": "`$NUMBER`",
            "short": "The duration of the asset in seconds (max duration for a single asset is 12 hours).",
            "format": "double",
          },
          {
            "name": "encoding_tier",
            "title": "Encoding Tier",
            "type": "`$STRING`",
            "req": True,
            "short": "This field is deprecated.",
            "deprecated": True,
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$OBJECT`",
            "short": "Object that describes any errors that happened when processing this asset.",
          },
          {
            "name": "generate_shots",
            "title": "Generate Shots",
            "type": "`$BOOLEAN`",
            "short": "Whether to perform shot detection on this asset.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the Asset.",
          },
          {
            "name": "ingest_type",
            "title": "Ingest Type",
            "type": "`$STRING`",
            "short": "The type of ingest used to create the asset.",
          },
          {
            "name": "is_live",
            "title": "Is Live",
            "type": "`$BOOLEAN`",
            "short": "Indicates whether the live stream that created this asset is currently `active` and not in `idle` state.",
            "format": "boolean",
          },
          {
            "name": "live_stream_id",
            "title": "Live Stream Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the live stream.",
          },
          {
            "name": "master",
            "title": "Master",
            "type": "`$OBJECT`",
            "short": "An object containing the current status of Master Access and the link to the Master MP4 file when ready.",
          },
          {
            "name": "master_access",
            "title": "Master Access",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "max_resolution_tier",
            "title": "Max Resolution Tier",
            "type": "`$STRING`",
            "req": True,
            "short": "Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at.",
          },
          {
            "name": "max_stored_frame_rate",
            "title": "Max Stored Frame Rate",
            "type": "`$NUMBER`",
            "short": "The maximum frame rate that has been stored for the asset.",
            "format": "double",
          },
          {
            "name": "max_stored_resolution",
            "title": "Max Stored Resolution",
            "type": "`$STRING`",
            "short": "This field is deprecated.",
            "deprecated": True,
          },
          {
            "name": "meta",
            "title": "Meta",
            "type": "`$OBJECT`",
            "short": "Customer provided metadata about this asset.",
          },
          {
            "name": "mp4_support",
            "title": "Mp4 Support",
            "type": "`$STRING`",
            "short": "Deprecated.",
            "deprecated": True,
          },
          {
            "name": "non_standard_input_reasons",
            "title": "Non Standard Input Reasons",
            "type": "`$OBJECT`",
            "short": "An object containing one or more reasons the input file is non-standard.",
          },
          {
            "name": "normalize_audio",
            "title": "Normalize Audio",
            "type": "`$BOOLEAN`",
            "short": "Normalize the audio track loudness level.",
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "You can set this field to anything you want.",
          },
          {
            "name": "playback_ids",
            "title": "Playback Ids",
            "type": "`$ARRAY`",
            "short": "An array of Playback ID objects.",
          },
          {
            "name": "progress",
            "title": "Progress",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Detailed state information about the asset ingest process.",
          },
          {
            "name": "recording_times",
            "title": "Recording Times",
            "type": "`$ARRAY`",
            "short": "An array of individual live stream recording sessions.",
          },
          {
            "name": "resolution_tier",
            "title": "Resolution Tier",
            "type": "`$STRING`",
            "short": "The resolution tier that the asset was ingested at, affecting billing for ingest & storage.",
          },
          {
            "name": "shots",
            "title": "Shots",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The results of generating shots on the video",
          },
          {
            "name": "source_asset_id",
            "title": "Source Asset Id",
            "type": "`$STRING`",
            "short": "Asset Identifier of the video used as the source for creating the clip.",
          },
          {
            "name": "static_renditions",
            "title": "Static Renditions",
            "type": "`$OBJECT`",
            "short": "An object containing the current status of any static renditions (MP4s) for this asset.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "The status of the asset.",
          },
          {
            "name": "test",
            "title": "Test",
            "type": "`$BOOLEAN`",
            "short": "True means this live stream is a test asset.",
            "format": "boolean",
          },
          {
            "name": "thumbnail_time",
            "title": "Thumbnail Time",
            "type": "`$NUMBER`",
            "short": "The media time within the asset used when a thumbnail without an explicit time is requested.",
            "format": "float",
          },
          {
            "name": "tracks",
            "title": "Tracks",
            "type": "`$ARRAY`",
            "short": "The individual media tracks that make up an asset.",
          },
          {
            "name": "upload_id",
            "title": "Upload Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the Direct Upload.",
          },
          {
            "name": "video_quality",
            "title": "Video Quality",
            "type": "`$STRING`",
            "short": "The video quality controls the cost, quality, and available platform features for the asset.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "asset",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/assets",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/assets",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "live_stream_id",
                      "orig": "live_stream_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "upload_id",
                      "orig": "upload_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "live_stream_id",
                    "page",
                    "upload_id",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/assets/{ASSET_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "playback-ids",
                  },
                  {
                    "var": "playback_id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "playback-ids",
                  "{playback_id}",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                    "PLAYBACK_ID": "playback_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "playback_id",
                      "orig": "PLAYBACK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                    "playback_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/assets/{ASSET_ID}/static-renditions/{STATIC_RENDITION_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "static-renditions",
                  },
                  {
                    "var": "static_rendition_id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "static-renditions",
                  "{static_rendition_id}",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                    "STATIC_RENDITION_ID": "static_rendition_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "static_rendition_id",
                      "orig": "STATIC_RENDITION_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                    "static_rendition_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "tracks",
                  },
                  {
                    "var": "track_id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "tracks",
                  "{track_id}",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                    "TRACK_ID": "track_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "track_id",
                      "orig": "TRACK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                    "track_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/assets/{ASSET_ID}/shots",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "shots",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "shots",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "shot",
                  "exist": [
                    "asset_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/assets/{ASSET_ID}/thumbnail-time",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "thumbnail-time",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "thumbnail-time",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "thumbnail_time",
                  "exist": [
                    "asset_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/assets/{ASSET_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/assets/{ASSET_ID}/master-access",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "master-access",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "master-access",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "master_access",
                  "exist": [
                    "asset_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/assets/{ASSET_ID}/mp4-support",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "mp4-support",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "mp4-support",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "mp4_support",
                  "exist": [
                    "asset_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "PATCH",
                "orig": "/video/v1/assets/{ASSET_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.static_rendition",
            ],
          ],
        },
      },
      "asset_or_live_stream_id": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Playback ID used to retrieve the corresponding asset or the live stream ID",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Describes the Asset or LiveStream object associated with the playback ID.",
          },
          {
            "name": "policy",
            "title": "Policy",
            "type": "`$STRING`",
            "req": True,
            "short": "* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "asset_or_live_stream_id",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/playback-ids/{PLAYBACK_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "playback-ids",
                  },
                  {
                    "var": "playback_id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "playback-ids",
                  "{playback_id}",
                ],
                "rename": {
                  "param": {
                    "PLAYBACK_ID": "playback_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "playback_id",
                      "orig": "PLAYBACK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "playback_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "asset_playback_id": {
        "fields": [
          {
            "name": "drm_configuration_id",
            "title": "Drm Configuration Id",
            "type": "`$STRING`",
            "short": "The DRM configuration used by this playback ID.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the PlaybackID",
          },
          {
            "name": "policy",
            "title": "Policy",
            "type": "`$STRING`",
            "req": True,
            "short": "* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "asset_playback_id",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "playback-ids",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "playback-ids",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                    "PLAYBACK_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "id",
                      "orig": "PLAYBACK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.asset",
            ],
          ],
        },
      },
      "asset_shot": {
        "fields": [
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$OBJECT`",
            "short": "An object describing any errors encountered during the shot detection process.",
          },
          {
            "name": "shots_manifest_url",
            "title": "Shots Manifest Url",
            "type": "`$STRING`",
            "short": "A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "The status of the shot detection process",
          },
        ],
        "name": "asset_shot",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/assets/{ASSET_ID}/shots",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "shots",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "shots",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.asset",
            ],
          ],
        },
      },
      "create_playback_id": {
        "fields": [
          {
            "name": "drm_configuration_id",
            "title": "Drm Configuration Id",
            "type": "`$STRING`",
            "short": "The DRM configuration used by this playback ID.",
          },
          {
            "name": "policy",
            "title": "Policy",
            "type": "`$STRING`",
            "short": "* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`.",
          },
        ],
        "name": "create_playback_id",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/assets/{ASSET_ID}/playback-ids",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "playback-ids",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "playback-ids",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "playback-ids",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "playback-ids",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "live_stream_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.asset",
            ],
            [
              "$.main.kit.entity.live_stream",
            ],
          ],
        },
      },
      "create_track": {
        "fields": [
          {
            "name": "closed_captions",
            "title": "Closed Captions",
            "type": "`$BOOLEAN`",
            "short": "Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).",
          },
          {
            "name": "language_code",
            "title": "Language Code",
            "type": "`$STRING`",
            "req": True,
            "short": "The language code of this track.",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "The name of the track containing a human-readable description.",
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary user-supplied metadata set for the track either when creating the asset or track.",
          },
          {
            "name": "text_type",
            "title": "Text Type",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "req": True,
            "short": "The URL of the file that Mux should download and use.",
          },
        ],
        "name": "create_track",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/assets/{ASSET_ID}/tracks",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "tracks",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "tracks",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.asset",
            ],
          ],
        },
      },
      "directive": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the directive was created.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Stable directive identifier (drv_...).",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Human-readable directive name.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$ARRAY`",
            "req": True,
            "op": {
              "create": {
                "type": "`$ARRAY`",
              },
            },
            "short": "Resource declarations.",
          },
          {
            "name": "subject",
            "title": "Subject",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the directive was last updated.",
          },
          {
            "name": "workflows",
            "title": "Workflows",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Workflow bindings.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "directive",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/directives/{DIRECTIVE_ID}/runs",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "directives",
                  },
                  {
                    "var": "directive_id",
                  },
                  {
                    "lit": "runs",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "directives",
                  "{directive_id}",
                  "runs",
                ],
                "rename": {
                  "param": {
                    "DIRECTIVE_ID": "directive_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "directive_id",
                      "orig": "DIRECTIVE_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "run",
                  "exist": [
                    "directive_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/directives",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "directives",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "directives",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/directives",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "directives",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "directives",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/directives/{DIRECTIVE_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "directives",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "directives",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "DIRECTIVE_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "DIRECTIVE_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/robots/v0/directives/{DIRECTIVE_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "directives",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "directives",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "DIRECTIVE_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "DIRECTIVE_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "directive_run_detail": {
        "fields": [
          {
            "name": "completed_at",
            "title": "Completed At",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "req": True,
            "short": "Unix timestamp (seconds) when the run reached terminal state.",
          },
          {
            "name": "node_states",
            "title": "Node States",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`.",
          },
          {
            "name": "run_id",
            "title": "Run Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique run identifier (drvrun_...).",
          },
          {
            "name": "started_at",
            "title": "Started At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the run started.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current run status.",
          },
          {
            "name": "subject_id",
            "title": "Subject Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The bare Mux asset ID this run targeted.",
          },
        ],
        "name": "directive_run_detail",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/directives/{DIRECTIVE_ID}/runs",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "directives",
                  },
                  {
                    "var": "directive_id",
                  },
                  {
                    "lit": "runs",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "directives",
                  "{directive_id}",
                  "runs",
                ],
                "rename": {
                  "param": {
                    "DIRECTIVE_ID": "directive_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "directive_id",
                      "orig": "DIRECTIVE_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "directive_id",
                    "limit",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/directives/{DIRECTIVE_ID}/runs/{RUN_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "directives",
                  },
                  {
                    "var": "directive_id",
                  },
                  {
                    "lit": "runs",
                  },
                  {
                    "var": "run_id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "directives",
                  "{directive_id}",
                  "runs",
                  "{run_id}",
                ],
                "rename": {
                  "param": {
                    "DIRECTIVE_ID": "directive_id",
                    "RUN_ID": "run_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "directive_id",
                      "orig": "DIRECTIVE_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "run_id",
                      "orig": "RUN_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "directive_id",
                    "run_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.directive",
            ],
            [
              "$.main.kit.entity.directive",
            ],
          ],
        },
      },
      "drm_configuration": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the DRM Configuration.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "drm_configuration",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/drm-configurations",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "drm-configurations",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "drm-configurations",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/drm-configurations/{DRM_CONFIGURATION_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "drm-configurations",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "drm-configurations",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "DRM_CONFIGURATION_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "DRM_CONFIGURATION_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "edit_caption": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "edit_caption",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/edit-captions",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "edit-captions",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "edit-captions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/edit-captions/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "edit-captions",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "edit-captions",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "engagement_heatmap": {
        "fields": [
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "timeframe",
            "title": "Timeframe",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
        ],
        "name": "engagement_heatmap",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/engagement/assets/{ASSET_ID}/heatmap",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "engagement",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "heatmap",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "engagement",
                  "assets",
                  "{asset_id}",
                  "heatmap",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy",
                    },
                  ],
                  "query": [
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                    "timeframe",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/engagement/playback-ids/{PLAYBACK_ID}/heatmap",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "engagement",
                  },
                  {
                    "lit": "playback-ids",
                  },
                  {
                    "var": "playback_id_id",
                  },
                  {
                    "lit": "heatmap",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "engagement",
                  "playback-ids",
                  "{playback_id_id}",
                  "heatmap",
                ],
                "rename": {
                  "param": {
                    "PLAYBACK_ID": "playback_id_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "playback_id_id",
                      "orig": "PLAYBACK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "nLp01dgPzELHV6101iHGXmS3Og7lEU01TUDb02kg2Z6mPRs",
                    },
                  ],
                  "query": [
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "playback_id_id",
                    "timeframe",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/engagement/videos/{VIDEO_ID}/heatmap",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "engagement",
                  },
                  {
                    "lit": "videos",
                  },
                  {
                    "var": "video_id",
                  },
                  {
                    "lit": "heatmap",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "engagement",
                  "videos",
                  "{video_id}",
                  "heatmap",
                ],
                "rename": {
                  "param": {
                    "VIDEO_ID": "video_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "video_id",
                      "orig": "VIDEO_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "abcd1234",
                    },
                  ],
                  "query": [
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "timeframe",
                    "video_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.asset",
            ],
          ],
        },
      },
      "engagement_hotspot": {
        "fields": [
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "timeframe",
            "title": "Timeframe",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
        ],
        "name": "engagement_hotspot",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/engagement/assets/{ASSET_ID}/hotspots",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "engagement",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "hotspots",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "engagement",
                  "assets",
                  "{asset_id}",
                  "hotspots",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy",
                    },
                  ],
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                    "limit",
                    "order_direction",
                    "timeframe",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/engagement/playback-ids/{PLAYBACK_ID}/hotspots",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "engagement",
                  },
                  {
                    "lit": "playback-ids",
                  },
                  {
                    "var": "playback_id_id",
                  },
                  {
                    "lit": "hotspots",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "engagement",
                  "playback-ids",
                  "{playback_id_id}",
                  "hotspots",
                ],
                "rename": {
                  "param": {
                    "PLAYBACK_ID": "playback_id_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "playback_id_id",
                      "orig": "PLAYBACK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "nLp01dgPzELHV6101iHGXmS3Og7lEU01TUDb02kg2Z6mPRs",
                    },
                  ],
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "order_direction",
                    "playback_id_id",
                    "timeframe",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/engagement/videos/{VIDEO_ID}/hotspots",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "engagement",
                  },
                  {
                    "lit": "videos",
                  },
                  {
                    "var": "video_id",
                  },
                  {
                    "lit": "hotspots",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "engagement",
                  "videos",
                  "{video_id}",
                  "hotspots",
                ],
                "rename": {
                  "param": {
                    "VIDEO_ID": "video_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "video_id",
                      "orig": "VIDEO_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "abcd1234",
                    },
                  ],
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "order_direction",
                    "timeframe",
                    "video_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.asset",
            ],
          ],
        },
      },
      "find_best_thumbnail": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "find_best_thumbnail",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/find-best-thumbnails",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "find-best-thumbnails",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "find-best-thumbnails",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/find-best-thumbnails/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "find-best-thumbnails",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "find-best-thumbnails",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "find_key_moment": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "find_key_moment",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/find-key-moments",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "find-key-moments",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "find-key-moments",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/find-key-moments/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "find-key-moments",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "find-key-moments",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "find_scene": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "find_scene",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/find-scenes",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "find-scenes",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "find-scenes",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/find-scenes/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "find-scenes",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "find-scenes",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "generate_asset_shot": {
        "fields": [
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
          },
        ],
        "name": "generate_asset_shot",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/assets/{ASSET_ID}/shots",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "shots",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "shots",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.asset",
            ],
          ],
        },
      },
      "generate_chapter": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "generate_chapter",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/generate-chapters",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "generate-chapters",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "generate-chapters",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/generate-chapters/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "generate-chapters",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "generate-chapters",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "generate_engagement_insight": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "generate_engagement_insight",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/generate-engagement-insights",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "generate-engagement-insights",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "generate-engagement-insights",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/generate-engagement-insights/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "generate-engagement-insights",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "generate-engagement-insights",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "generate_premium_caption": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "generate_premium_caption",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/generate-premium-captions",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "generate-premium-captions",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "generate-premium-captions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/generate-premium-captions/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "generate-premium-captions",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "generate-premium-captions",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "generate_track_subtitle": {
        "fields": [
          {
            "name": "generated_subtitles",
            "title": "Generated Subtitles",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Generate subtitle tracks using automatic speech recognition with this configuration.",
          },
        ],
        "name": "generate_track_subtitle",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "tracks",
                  },
                  {
                    "var": "track_id",
                  },
                  {
                    "lit": "generate-subtitles",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "tracks",
                  "{track_id}",
                  "generate-subtitles",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                    "TRACK_ID": "track_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "track_id",
                      "orig": "TRACK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                    "track_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.asset",
            ],
          ],
        },
      },
      "incident": {
        "fields": [
          {
            "name": "affected_views",
            "title": "Affected Views",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "affected_views_per_hour",
            "title": "Affected Views Per Hour",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "affected_views_per_hour_on_open",
            "title": "Affected Views Per Hour On Open",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "breakdowns",
            "title": "Breakdowns",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "error_description",
            "title": "Error Description",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "impact",
            "title": "Impact",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "incident_key",
            "title": "Incident Key",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "measured_value",
            "title": "Measured Value",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "measured_value_on_close",
            "title": "Measured Value On Close",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "measurement",
            "title": "Measurement",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "notification_rules",
            "title": "Notification Rules",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "notifications",
            "title": "Notifications",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "resolved_at",
            "title": "Resolved At",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "sample_size",
            "title": "Sample Size",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "sample_size_unit",
            "title": "Sample Size Unit",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "severity",
            "title": "Severity",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "started_at",
            "title": "Started At",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "threshold",
            "title": "Threshold",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "timeframe",
            "title": "Timeframe",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "incident",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/incidents",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "incidents",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "incidents",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "severity",
                      "orig": "severity",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "order_by",
                    "order_direction",
                    "page",
                    "severity",
                    "status",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/incidents/{INCIDENT_ID}",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "incidents",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "incidents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "INCIDENT_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "INCIDENT_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "abcd1234",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "input_info": {
        "fields": [
          {
            "name": "file",
            "title": "File",
            "type": "`$OBJECT`",
          },
          {
            "name": "settings",
            "title": "Settings",
            "type": "`$OBJECT`",
            "short": "An array of objects that each describe an input file to be used to create the asset.",
          },
        ],
        "name": "input_info",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/assets/{ASSET_ID}/input-info",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "input-info",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "input-info",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.asset",
            ],
          ],
        },
      },
      "job_summary": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "links",
            "title": "Links",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Hypermedia links for this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
            "short": "Workflow type that created this job.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "job_summary",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/{JOB_ID}/cancel",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "var": "job_id",
                  },
                  {
                    "lit": "cancel",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "{job_id}",
                  "cancel",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "job_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "job_id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "job_id",
                  ],
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "asset_id",
                      "orig": "asset_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$ANY`",
                      "kind": "query",
                    },
                    {
                      "name": "workflow",
                      "orig": "workflow",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                    "limit",
                    "page",
                    "status",
                    "workflow",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_all_metric_value": {
        "fields": [
          {
            "name": "ended_views",
            "title": "Ended Views",
            "type": "`$INTEGER`",
            "format": "int64",
          },
          {
            "name": "items",
            "title": "Items",
            "type": "`$ARRAY`",
          },
          {
            "name": "metric",
            "title": "Metric",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "started_views",
            "title": "Started Views",
            "type": "`$INTEGER`",
            "format": "int64",
          },
          {
            "name": "total_playing_time",
            "title": "Total Playing Time",
            "type": "`$INTEGER`",
            "format": "int64",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
          },
          {
            "name": "unique_viewers",
            "title": "Unique Viewers",
            "type": "`$INTEGER`",
            "format": "int64",
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$NUMBER`",
            "format": "double",
          },
          {
            "name": "view_count",
            "title": "View Count",
            "type": "`$INTEGER`",
            "format": "int64",
          },
          {
            "name": "watch_time",
            "title": "Watch Time",
            "type": "`$INTEGER`",
            "format": "int64",
          },
        ],
        "name": "list_all_metric_value",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/metrics/comparison",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "lit": "comparison",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "metrics",
                  "comparison",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "dimension",
                      "orig": "dimension",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "metric_filter",
                      "orig": "metric_filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "value",
                      "orig": "value",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dimension",
                    "filter",
                    "metric_filter",
                    "timeframe",
                    "value",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_breakdown_value": {
        "fields": [
          {
            "name": "field",
            "title": "Field",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "negative_impact",
            "title": "Negative Impact",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int32",
          },
          {
            "name": "total_playing_time",
            "title": "Total Playing Time",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "total_watch_time",
            "title": "Total Watch Time",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "views",
            "title": "Views",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
        ],
        "name": "list_breakdown_value",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/metrics/{METRIC_ID}/breakdown",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "var": "metric_id",
                  },
                  {
                    "lit": "breakdown",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "metrics",
                  "{metric_id}",
                  "breakdown",
                ],
                "rename": {
                  "param": {
                    "METRIC_ID": "metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "metric_id",
                      "orig": "METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "video_startup_time",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "group_by",
                      "orig": "group_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "measurement",
                      "orig": "measurement",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "metric_filter",
                      "orig": "metric_filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "group_by",
                    "limit",
                    "measurement",
                    "metric_filter",
                    "metric_id",
                    "order_by",
                    "order_direction",
                    "page",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_delivery_usage": {
        "fields": [
          {
            "name": "asset_duration",
            "title": "Asset Duration",
            "type": "`$NUMBER`",
            "req": True,
            "short": "The duration of the asset in seconds.",
            "format": "double",
          },
          {
            "name": "asset_encoding_tier",
            "title": "Asset Encoding Tier",
            "type": "`$STRING`",
            "req": True,
            "short": "This field is deprecated.",
            "deprecated": True,
          },
          {
            "name": "asset_id",
            "title": "Asset Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the asset.",
          },
          {
            "name": "asset_resolution_tier",
            "title": "Asset Resolution Tier",
            "type": "`$STRING`",
            "req": True,
            "short": "The resolution tier that the asset was ingested at, affecting billing for ingest & storage",
          },
          {
            "name": "asset_state",
            "title": "Asset State",
            "type": "`$STRING`",
            "req": True,
            "short": "The state of the asset.",
          },
          {
            "name": "asset_video_quality",
            "title": "Asset Video Quality",
            "type": "`$STRING`",
            "short": "The video quality that the asset was ingested at.",
          },
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
            "req": True,
            "short": "Time at which the asset was created.",
          },
          {
            "name": "deleted_at",
            "title": "Deleted At",
            "type": "`$STRING`",
            "short": "If exists, time at which the asset was deleted.",
          },
          {
            "name": "delivered_seconds",
            "title": "Delivered Seconds",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Total number of delivered seconds during this time window.",
            "format": "double",
          },
          {
            "name": "delivered_seconds_by_resolution",
            "title": "Delivered Seconds By Resolution",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Seconds delivered broken into resolution tiers.",
          },
          {
            "name": "live_stream_id",
            "title": "Live Stream Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the live stream that created the asset.",
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "The `passthrough` value for the asset.",
          },
        ],
        "name": "list_delivery_usage",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/delivery-usage",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "delivery-usage",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "delivery-usage",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "asset_id",
                      "orig": "asset_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 100,
                    },
                    {
                      "name": "live_stream_id",
                      "orig": "live_stream_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                    "limit",
                    "live_stream_id",
                    "page",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_dimension_value": {
        "fields": [
          {
            "name": "data",
            "title": "Data",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "timeframe",
            "title": "Timeframe",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "total_count",
            "title": "Total Count",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "list_dimension_value",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/dimensions/{DIMENSION_ID}/elements",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "dimensions",
                  },
                  {
                    "var": "dimension_id",
                  },
                  {
                    "lit": "elements",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "dimensions",
                  "{dimension_id}",
                  "elements",
                ],
                "rename": {
                  "param": {
                    "DIMENSION_ID": "dimension_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "dimension_id",
                      "orig": "DIMENSION_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "abcd1234",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "metric_filter",
                      "orig": "metric_filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dimension_id",
                    "filter",
                    "limit",
                    "metric_filter",
                    "order_by",
                    "order_direction",
                    "page",
                    "timeframe",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/dimensions",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "dimensions",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "dimensions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/dimensions/{DIMENSION_ID}",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "dimensions",
                  },
                  {
                    "var": "dimension_id",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "dimensions",
                  "{dimension_id}",
                ],
                "rename": {
                  "param": {
                    "DIMENSION_ID": "dimension_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "dimension_id",
                      "orig": "DIMENSION_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "abcd1234",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "metric_filter",
                      "orig": "metric_filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dimension_id",
                    "filter",
                    "limit",
                    "metric_filter",
                    "page",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_error": {
        "fields": [
          {
            "name": "code",
            "title": "Code",
            "type": "`$INTEGER`",
            "req": True,
            "short": "The error code",
            "format": "int64",
          },
          {
            "name": "count",
            "title": "Count",
            "type": "`$INTEGER`",
            "req": True,
            "short": "The total number of views that experienced this error.",
            "format": "int64",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "req": True,
            "short": "Description of the error.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "req": True,
            "short": "A unique identifier for this error.",
            "format": "int64",
          },
          {
            "name": "last_seen",
            "title": "Last Seen",
            "type": "`$STRING`",
            "req": True,
            "short": "The last time this error was seen (ISO 8601 timestamp).",
          },
          {
            "name": "message",
            "title": "Message",
            "type": "`$STRING`",
            "req": True,
            "short": "The error message.",
          },
          {
            "name": "notes",
            "title": "Notes",
            "type": "`$STRING`",
            "req": True,
            "short": "Notes that are attached to this error.",
          },
          {
            "name": "percentage",
            "title": "Percentage",
            "type": "`$NUMBER`",
            "req": True,
            "short": "The percentage of views that experienced this error.",
            "format": "double",
          },
          {
            "name": "player_error_code",
            "title": "Player Error Code",
            "type": "`$STRING`",
            "req": True,
            "short": "The string version of the error code",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "list_error",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/errors",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "errors",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "errors",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "metric_filter",
                      "orig": "metric_filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "metric_filter",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_export": {
        "fields": [
          {
            "name": "data",
            "title": "Data",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "timeframe",
            "title": "Timeframe",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
        ],
        "name": "list_export",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/exports",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "exports",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "exports",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_filter_value": {
        "fields": [
          {
            "name": "data",
            "title": "Data",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "timeframe",
            "title": "Timeframe",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
        ],
        "name": "list_filter_value",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/filters",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "filters",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "filters",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/filters/{FILTER_ID}",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "filters",
                  },
                  {
                    "var": "filter_id",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "filters",
                  "{filter_id}",
                ],
                "rename": {
                  "param": {
                    "FILTER_ID": "filter_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "filter_id",
                      "orig": "FILTER_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "abcd1234",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "filter_id",
                    "limit",
                    "page",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_insight": {
        "fields": [
          {
            "name": "filter_column",
            "title": "Filter Column",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "filter_value",
            "title": "Filter Value",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "metric",
            "title": "Metric",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "negative_impact_score",
            "title": "Negative Impact Score",
            "type": "`$NUMBER`",
            "req": True,
            "format": "float",
          },
          {
            "name": "total_playing_time",
            "title": "Total Playing Time",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "total_views",
            "title": "Total Views",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "total_watch_time",
            "title": "Total Watch Time",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
        ],
        "name": "list_insight",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/metrics/{METRIC_ID}/insights",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "var": "metric_id",
                  },
                  {
                    "lit": "insights",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "metrics",
                  "{metric_id}",
                  "insights",
                ],
                "rename": {
                  "param": {
                    "METRIC_ID": "metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "metric_id",
                      "orig": "METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "video_startup_time",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "measurement",
                      "orig": "measurement",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "metric_filter",
                      "orig": "metric_filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "measurement",
                    "metric_filter",
                    "metric_id",
                    "order_direction",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_monitoring_dimension": {
        "fields": [
          {
            "name": "display_name",
            "title": "Display Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "list_monitoring_dimension",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/monitoring/dimensions",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "monitoring",
                  },
                  {
                    "lit": "dimensions",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "monitoring",
                  "dimensions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_monitoring_metric": {
        "fields": [
          {
            "name": "display_name",
            "title": "Display Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "list_monitoring_metric",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/monitoring/metrics",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "monitoring",
                  },
                  {
                    "lit": "metrics",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "monitoring",
                  "metrics",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_real_time_dimension": {
        "fields": [
          {
            "name": "display_name",
            "title": "Display Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "list_real_time_dimension",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/realtime/dimensions",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "realtime",
                  },
                  {
                    "lit": "dimensions",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "realtime",
                  "dimensions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_real_time_metric": {
        "fields": [
          {
            "name": "display_name",
            "title": "Display Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "list_real_time_metric",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/realtime/metrics",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "realtime",
                  },
                  {
                    "lit": "metrics",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "realtime",
                  "metrics",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_related_incident": {
        "fields": [
          {
            "name": "affected_views",
            "title": "Affected Views",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "affected_views_per_hour",
            "title": "Affected Views Per Hour",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "affected_views_per_hour_on_open",
            "title": "Affected Views Per Hour On Open",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "breakdowns",
            "title": "Breakdowns",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "error_description",
            "title": "Error Description",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "impact",
            "title": "Impact",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "incident_key",
            "title": "Incident Key",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "measured_value",
            "title": "Measured Value",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "measured_value_on_close",
            "title": "Measured Value On Close",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "measurement",
            "title": "Measurement",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "notification_rules",
            "title": "Notification Rules",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "notifications",
            "title": "Notifications",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "resolved_at",
            "title": "Resolved At",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "sample_size",
            "title": "Sample Size",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "sample_size_unit",
            "title": "Sample Size Unit",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "severity",
            "title": "Severity",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "started_at",
            "title": "Started At",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "threshold",
            "title": "Threshold",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "list_related_incident",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/incidents/{INCIDENT_ID}/related",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "incidents",
                  },
                  {
                    "var": "incident_id",
                  },
                  {
                    "lit": "related",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "incidents",
                  "{incident_id}",
                  "related",
                ],
                "rename": {
                  "param": {
                    "INCIDENT_ID": "incident_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "incident_id",
                      "orig": "INCIDENT_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "abcd1234",
                    },
                  ],
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "incident_id",
                    "limit",
                    "order_by",
                    "order_direction",
                    "page",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.incident",
            ],
          ],
        },
      },
      "list_subview_breakdown_value": {
        "fields": [
          {
            "name": "breakdown_value",
            "title": "Breakdown Value",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "metric_value",
            "title": "Metric Value",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
        ],
        "name": "list_subview_breakdown_value",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "subview-metrics",
                  },
                  {
                    "var": "subview_metric_id",
                  },
                  {
                    "var": "subview_type",
                  },
                  {
                    "lit": "breakdown",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "subview-metrics",
                  "{subview_metric_id}",
                  "{subview_type}",
                  "breakdown",
                ],
                "rename": {
                  "param": {
                    "METRIC_ID": "subview_metric_id",
                    "SUBVIEW_TYPE": "subview_type",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "subview_metric_id",
                      "orig": "METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "playing_time",
                    },
                    {
                      "name": "subview_type",
                      "orig": "SUBVIEW_TYPE",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "rendition",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "group_by",
                      "orig": "group_by[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "group_by",
                    "limit",
                    "page",
                    "subview_metric_id",
                    "subview_type",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_subview_comparison_value": {
        "fields": [
          {
            "name": "dimension_value",
            "title": "Dimension Value",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "values",
            "title": "Values",
            "type": "`$ARRAY`",
            "req": True,
          },
        ],
        "name": "list_subview_comparison_value",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/comparison",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "subview-metrics",
                  },
                  {
                    "var": "subview_metric_id",
                  },
                  {
                    "var": "subview_type",
                  },
                  {
                    "lit": "comparison",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "subview-metrics",
                  "{subview_metric_id}",
                  "{subview_type}",
                  "comparison",
                ],
                "rename": {
                  "param": {
                    "METRIC_ID": "subview_metric_id",
                    "SUBVIEW_TYPE": "subview_type",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "subview_metric_id",
                      "orig": "METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "playing_time",
                    },
                    {
                      "name": "subview_type",
                      "orig": "SUBVIEW_TYPE",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "rendition",
                    },
                  ],
                  "query": [
                    {
                      "name": "breakdown_value_limit",
                      "orig": "breakdown_value_limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "dimension",
                      "orig": "dimension",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "country",
                    },
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "group_by",
                      "orig": "group_by[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "value",
                      "orig": "values[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                      "reqd": True,
                      "example": [
                        "US",
                        "FR",
                      ],
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "breakdown_value_limit",
                    "dimension",
                    "filter",
                    "group_by",
                    "subview_metric_id",
                    "subview_type",
                    "timeframe",
                    "value",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_subview_dimension": {
        "fields": [
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count.",
            "format": "int64",
          },
        ],
        "name": "list_subview_dimension",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "subview-metrics",
                  },
                  {
                    "var": "subview_type",
                  },
                  {
                    "lit": "dimensions",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "subview-metrics",
                  "{subview_type}",
                  "dimensions",
                ],
                "rename": {
                  "param": {
                    "SUBVIEW_TYPE": "subview_type",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "subview_type",
                      "orig": "SUBVIEW_TYPE",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "rendition",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "subview_type",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_subview_dimension_value": {
        "fields": [
          {
            "name": "data",
            "title": "Data",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "meta",
            "title": "Meta",
            "type": "`$ANY`",
            "req": True,
          },
          {
            "name": "timeframe",
            "title": "Timeframe",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
        ],
        "name": "list_subview_dimension_value",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions/{DIMENSION_NAME}",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "subview-metrics",
                  },
                  {
                    "var": "subview_metric_id",
                  },
                  {
                    "lit": "dimensions",
                  },
                  {
                    "var": "dimension_name",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "subview-metrics",
                  "{subview_metric_id}",
                  "dimensions",
                  "{dimension_name}",
                ],
                "rename": {
                  "param": {
                    "DIMENSION_NAME": "dimension_name",
                    "SUBVIEW_TYPE": "subview_metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "dimension_name",
                      "orig": "DIMENSION_NAME",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "country",
                    },
                    {
                      "name": "subview_metric_id",
                      "orig": "SUBVIEW_TYPE",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "rendition",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "playing_time",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dimension_name",
                    "filter",
                    "limit",
                    "order_by",
                    "order_direction",
                    "page",
                    "query",
                    "subview_metric_id",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_video_view_export": {
        "fields": [
          {
            "name": "export_date",
            "title": "Export Date",
            "type": "`$STRING`",
            "req": True,
            "format": "date",
          },
          {
            "name": "files",
            "title": "Files",
            "type": "`$ARRAY`",
            "req": True,
          },
        ],
        "name": "list_video_view_export",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/exports/views",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "exports",
                  },
                  {
                    "lit": "views",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "exports",
                  "views",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "live_stream": {
        "fields": [
          {
            "name": "active_asset_id",
            "title": "Active Asset Id",
            "type": "`$STRING`",
            "short": "The Asset that is currently being created if there is an active broadcast.",
          },
          {
            "name": "active_ingest_protocol",
            "title": "Active Ingest Protocol",
            "type": "`$STRING`",
            "short": "The protocol used for the active ingest stream.",
          },
          {
            "name": "advanced_playback_policies",
            "title": "Advanced Playback Policies",
            "type": "`$ARRAY`",
            "short": "An array of playback policy objects that you want applied on this live stream and available through `playback_ids`.",
          },
          {
            "name": "audio_only",
            "title": "Audio Only",
            "type": "`$BOOLEAN`",
            "short": "The live stream only processes the audio track if the value is set to true.",
          },
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
            "req": True,
            "short": "Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch).",
            "format": "int64",
          },
          {
            "name": "embedded_subtitles",
            "title": "Embedded Subtitles",
            "type": "`$ARRAY`",
            "short": "Describes the embedded closed caption configuration of the incoming live stream.",
          },
          {
            "name": "generated_subtitles",
            "title": "Generated Subtitles",
            "type": "`$ARRAY`",
            "short": "Configure the incoming live stream to include subtitles created with automatic speech recognition.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the Live Stream.",
          },
          {
            "name": "latency_mode",
            "title": "Latency Mode",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "create": {
                "type": "`$STRING`",
              },
              "update": {
                "type": "`$STRING`",
              },
            },
            "short": "Latency is the time from when the streamer transmits a frame of video to when you see it in the player.",
          },
          {
            "name": "low_latency",
            "title": "Low Latency",
            "type": "`$BOOLEAN`",
            "short": "This field is deprecated.",
            "deprecated": True,
            "format": "boolean",
          },
          {
            "name": "max_continuous_duration",
            "title": "Max Continuous Duration",
            "type": "`$INTEGER`",
            "req": True,
            "op": {
              "create": {
                "type": "`$INTEGER`",
              },
              "update": {
                "type": "`$INTEGER`",
              },
            },
            "short": "The time in seconds a live stream may be continuously active before being disconnected.",
            "format": "int32",
          },
          {
            "name": "meta",
            "title": "Meta",
            "type": "`$OBJECT`",
            "short": "Customer provided metadata about this live stream.",
          },
          {
            "name": "new_asset_settings",
            "title": "New Asset Settings",
            "type": "`$OBJECT`",
            "short": "Updates the new asset settings to use to generate a new asset for this live stream.",
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary user-supplied metadata set for the asset.",
          },
          {
            "name": "playback_ids",
            "title": "Playback Ids",
            "type": "`$ARRAY`",
            "short": "An array of Playback ID objects.",
          },
          {
            "name": "playback_policies",
            "title": "Playback Policies",
            "type": "`$ARRAY`",
            "short": "An array of playback policy names that you want applied to this live stream and available through `playback_ids`.",
          },
          {
            "name": "playback_policy",
            "title": "Playback Policy",
            "type": "`$ARRAY`",
            "short": "Deprecated.",
            "deprecated": True,
          },
          {
            "name": "recent_asset_ids",
            "title": "Recent Asset Ids",
            "type": "`$ARRAY`",
            "short": "An array of strings with the most recent Asset IDs that were created from this Live Stream.",
          },
          {
            "name": "reconnect_slate_url",
            "title": "Reconnect Slate Url",
            "type": "`$STRING`",
            "short": "The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media.",
          },
          {
            "name": "reconnect_window",
            "title": "Reconnect Window",
            "type": "`$NUMBER`",
            "short": "When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s…",
            "format": "float",
          },
          {
            "name": "reduced_latency",
            "title": "Reduced Latency",
            "type": "`$BOOLEAN`",
            "short": "This field is deprecated.",
            "deprecated": True,
            "format": "boolean",
          },
          {
            "name": "simulcast_targets",
            "title": "Simulcast Targets",
            "type": "`$ARRAY`",
            "short": "Each Simulcast Target contains configuration details to broadcast (or \"restream\") a live stream to a third-party streaming service.",
          },
          {
            "name": "srt_passphrase",
            "title": "Srt Passphrase",
            "type": "`$STRING`",
            "short": "Unique key used for encrypting a stream to a Mux SRT endpoint.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "`idle` indicates that there is no active broadcast.",
          },
          {
            "name": "stream_key",
            "title": "Stream Key",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique key used for streaming to a Mux RTMP endpoint.",
          },
          {
            "name": "test",
            "title": "Test",
            "type": "`$BOOLEAN`",
            "short": "True means this live stream is a test live stream.",
            "format": "boolean",
          },
          {
            "name": "use_slate_for_standard_latency",
            "title": "Use Slate For Standard Latency",
            "type": "`$BOOLEAN`",
            "short": "By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux.",
            "format": "boolean",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "live_stream",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "reset-stream-key",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "reset-stream-key",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "reset_stream_key",
                  "exist": [
                    "live_stream_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/live-streams",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/live-streams",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "stream_key",
                      "orig": "stream_key",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "page",
                    "status",
                    "stream_key",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "playback-ids",
                  },
                  {
                    "var": "playback_id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "playback-ids",
                  "{playback_id}",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                    "PLAYBACK_ID": "playback_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "playback_id",
                      "orig": "PLAYBACK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "live_stream_id",
                    "playback_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "simulcast-targets",
                  },
                  {
                    "var": "simulcast_target_id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "simulcast-targets",
                  "{simulcast_target_id}",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                    "SIMULCAST_TARGET_ID": "simulcast_target_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "simulcast_target_id",
                      "orig": "SIMULCAST_TARGET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "live_stream_id",
                    "simulcast_target_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "new-asset-settings",
                  },
                  {
                    "lit": "static-renditions",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "new-asset-settings",
                  "static-renditions",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "new_asset_setting_static_rendition",
                  "exist": [
                    "live_stream_id",
                  ],
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PATCH",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/disable",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "disable",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "disable",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "disable",
                  "exist": [
                    "live_stream_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "embedded-subtitles",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "embedded-subtitles",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "embedded_subtitle",
                  "exist": [
                    "live_stream_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/enable",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "enable",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "enable",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "enable",
                  "exist": [
                    "live_stream_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "generated-subtitles",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "generated-subtitles",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "generated_subtitle",
                  "exist": [
                    "live_stream_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "new-asset-settings",
                  },
                  {
                    "lit": "static-renditions",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "new-asset-settings",
                  "static-renditions",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "new_asset_setting_static_rendition",
                  "exist": [
                    "live_stream_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.simulcast_target",
            ],
          ],
        },
      },
      "live_stream_playback_id": {
        "fields": [
          {
            "name": "drm_configuration_id",
            "title": "Drm Configuration Id",
            "type": "`$STRING`",
            "short": "The DRM configuration used by this playback ID.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the PlaybackID",
          },
          {
            "name": "policy",
            "title": "Policy",
            "type": "`$STRING`",
            "req": True,
            "short": "* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "live_stream_playback_id",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "playback-ids",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "playback-ids",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                    "PLAYBACK_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "PLAYBACK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "live_stream_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.live_stream",
            ],
          ],
        },
      },
      "metric_timeseries_data": {
        "fields": [
          {
            "name": "data",
            "title": "Data",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "meta",
            "title": "Meta",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "timeframe",
            "title": "Timeframe",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
        ],
        "name": "metric_timeseries_data",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/metrics/{METRIC_ID}/timeseries",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "var": "metric_id",
                  },
                  {
                    "lit": "timeseries",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "metrics",
                  "{metric_id}",
                  "timeseries",
                ],
                "rename": {
                  "param": {
                    "METRIC_ID": "metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "metric_id",
                      "orig": "METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "video_startup_time",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "group_by",
                      "orig": "group_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "measurement",
                      "orig": "measurement",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "metric_filter",
                      "orig": "metric_filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "group_by",
                    "measurement",
                    "metric_filter",
                    "metric_id",
                    "order_direction",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moderate": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moderate",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/moderate",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "moderate",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "moderate",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/moderate/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "moderate",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "moderate",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "monitoring_breakdown": {
        "fields": [
          {
            "name": "concurrent_viewers",
            "title": "Concurrent Viewers",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "display_value",
            "title": "Display Value",
            "type": "`$STRING`",
          },
          {
            "name": "metric_value",
            "title": "Metric Value",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "negative_impact",
            "title": "Negative Impact",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "starting_up_viewers",
            "title": "Starting Up Viewers",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "monitoring_breakdown",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "monitoring",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "var": "monitoring_metric_id",
                  },
                  {
                    "lit": "breakdown",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "monitoring",
                  "metrics",
                  "{monitoring_metric_id}",
                  "breakdown",
                ],
                "rename": {
                  "param": {
                    "MONITORING_METRIC_ID": "monitoring_metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "monitoring_metric_id",
                      "orig": "MONITORING_METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "current-concurrent-viewers",
                    },
                  ],
                  "query": [
                    {
                      "name": "dimension",
                      "orig": "dimension",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "timestamp",
                      "orig": "timestamp",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dimension",
                    "filter",
                    "monitoring_metric_id",
                    "order_by",
                    "order_direction",
                    "timestamp",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "monitoring_breakdown_timeseries": {
        "fields": [
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "values",
            "title": "Values",
            "type": "`$ARRAY`",
            "req": True,
          },
        ],
        "name": "monitoring_breakdown_timeseries",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "monitoring",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "var": "monitoring_metric_id",
                  },
                  {
                    "lit": "breakdown-timeseries",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "monitoring",
                  "metrics",
                  "{monitoring_metric_id}",
                  "breakdown-timeseries",
                ],
                "rename": {
                  "param": {
                    "MONITORING_METRIC_ID": "monitoring_metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "monitoring_metric_id",
                      "orig": "MONITORING_METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "current-concurrent-viewers",
                    },
                  ],
                  "query": [
                    {
                      "name": "dimension",
                      "orig": "dimension",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dimension",
                    "filter",
                    "limit",
                    "monitoring_metric_id",
                    "order_by",
                    "order_direction",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "monitoring_histogram_timeseries": {
        "fields": [
          {
            "name": "average",
            "title": "Average",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "bucket_values",
            "title": "Bucket Values",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "max_percentage",
            "title": "Max Percentage",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "median",
            "title": "Median",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "p95",
            "title": "P95",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "sum",
            "title": "Sum",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "timestamp",
            "title": "Timestamp",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "monitoring_histogram_timeseries",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "monitoring",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "var": "monitoring_histogram_metric_id",
                  },
                  {
                    "lit": "histogram-timeseries",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "monitoring",
                  "metrics",
                  "{monitoring_histogram_metric_id}",
                  "histogram-timeseries",
                ],
                "rename": {
                  "param": {
                    "MONITORING_HISTOGRAM_METRIC_ID": "monitoring_histogram_metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "monitoring_histogram_metric_id",
                      "orig": "MONITORING_HISTOGRAM_METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "video-startup-time",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "monitoring_histogram_metric_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "monitoring_timeseries": {
        "fields": [
          {
            "name": "concurrent_viewers",
            "title": "Concurrent Viewers",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
        ],
        "name": "monitoring_timeseries",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "monitoring",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "var": "monitoring_metric_id",
                  },
                  {
                    "lit": "timeseries",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "monitoring",
                  "metrics",
                  "{monitoring_metric_id}",
                  "timeseries",
                ],
                "rename": {
                  "param": {
                    "MONITORING_METRIC_ID": "monitoring_metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "monitoring_metric_id",
                      "orig": "MONITORING_METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "current-concurrent-viewers",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "timestamp",
                      "orig": "timestamp",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "monitoring_metric_id",
                    "timestamp",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "overall": {
        "fields": [
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "meta",
            "title": "Meta",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "timeframe",
            "title": "Timeframe",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
        ],
        "name": "overall",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/metrics/{METRIC_ID}/overall",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "var": "metric_id",
                  },
                  {
                    "lit": "overall",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "metrics",
                  "{metric_id}",
                  "overall",
                ],
                "rename": {
                  "param": {
                    "METRIC_ID": "metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "metric_id",
                      "orig": "METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "video_startup_time",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "measurement",
                      "orig": "measurement",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "metric_filter",
                      "orig": "metric_filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "measurement",
                    "metric_filter",
                    "metric_id",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "playback_restriction": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
            "req": True,
            "short": "Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch).",
            "format": "int64",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the Playback Restriction.",
          },
          {
            "name": "referrer",
            "title": "Referrer",
            "type": "`$OBJECT`",
            "req": True,
            "short": "A list of domains allowed to play your videos.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$STRING`",
            "req": True,
            "short": "Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch).",
            "format": "int64",
          },
          {
            "name": "user_agent",
            "title": "User Agent",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Rules that control what user agents are allowed to play your videos.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "playback_restriction",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/playback-restrictions",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "playback-restrictions",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "playback-restrictions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/playback-restrictions",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "playback-restrictions",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "playback-restrictions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "playback-restrictions",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "playback-restrictions",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "PLAYBACK_RESTRICTION_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "PLAYBACK_RESTRICTION_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "playback-restrictions",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "playback-restrictions",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "PLAYBACK_RESTRICTION_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "PLAYBACK_RESTRICTION_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "playback-restrictions",
                  },
                  {
                    "var": "playback_restriction_id",
                  },
                  {
                    "lit": "referrer",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "playback-restrictions",
                  "{playback_restriction_id}",
                  "referrer",
                ],
                "rename": {
                  "param": {
                    "PLAYBACK_RESTRICTION_ID": "playback_restriction_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "playback_restriction_id",
                      "orig": "PLAYBACK_RESTRICTION_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "referrer",
                  "exist": [
                    "playback_restriction_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "playback-restrictions",
                  },
                  {
                    "var": "playback_restriction_id",
                  },
                  {
                    "lit": "user_agent",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "playback-restrictions",
                  "{playback_restriction_id}",
                  "user_agent",
                ],
                "rename": {
                  "param": {
                    "PLAYBACK_RESTRICTION_ID": "playback_restriction_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "playback_restriction_id",
                      "orig": "PLAYBACK_RESTRICTION_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "user_agent",
                  "exist": [
                    "playback_restriction_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "real_time_breakdown": {
        "fields": [
          {
            "name": "concurrent_viewers",
            "title": "Concurrent Viewers",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "display_value",
            "title": "Display Value",
            "type": "`$STRING`",
          },
          {
            "name": "metric_value",
            "title": "Metric Value",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "negative_impact",
            "title": "Negative Impact",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "starting_up_viewers",
            "title": "Starting Up Viewers",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "real_time_breakdown",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "realtime",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "var": "realtime_metric_id",
                  },
                  {
                    "lit": "breakdown",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "realtime",
                  "metrics",
                  "{realtime_metric_id}",
                  "breakdown",
                ],
                "rename": {
                  "param": {
                    "REALTIME_METRIC_ID": "realtime_metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "realtime_metric_id",
                      "orig": "REALTIME_METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "current-concurrent-viewers",
                    },
                  ],
                  "query": [
                    {
                      "name": "dimension",
                      "orig": "dimension",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "timestamp",
                      "orig": "timestamp",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dimension",
                    "filter",
                    "order_by",
                    "order_direction",
                    "realtime_metric_id",
                    "timestamp",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "real_time_histogram_timeseries": {
        "fields": [
          {
            "name": "average",
            "title": "Average",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "bucket_values",
            "title": "Bucket Values",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "max_percentage",
            "title": "Max Percentage",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "median",
            "title": "Median",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "p95",
            "title": "P95",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
          {
            "name": "sum",
            "title": "Sum",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "timestamp",
            "title": "Timestamp",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "real_time_histogram_timeseries",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "realtime",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "var": "realtime_histogram_metric_id",
                  },
                  {
                    "lit": "histogram-timeseries",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "realtime",
                  "metrics",
                  "{realtime_histogram_metric_id}",
                  "histogram-timeseries",
                ],
                "rename": {
                  "param": {
                    "REALTIME_HISTOGRAM_METRIC_ID": "realtime_histogram_metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "realtime_histogram_metric_id",
                      "orig": "REALTIME_HISTOGRAM_METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "video-startup-time",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "realtime_histogram_metric_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "real_time_timeseries": {
        "fields": [
          {
            "name": "concurrent_viewers",
            "title": "Concurrent Viewers",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$NUMBER`",
            "req": True,
            "format": "double",
          },
        ],
        "name": "real_time_timeseries",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "realtime",
                  },
                  {
                    "lit": "metrics",
                  },
                  {
                    "var": "realtime_metric_id",
                  },
                  {
                    "lit": "timeseries",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "realtime",
                  "metrics",
                  "{realtime_metric_id}",
                  "timeseries",
                ],
                "rename": {
                  "param": {
                    "REALTIME_METRIC_ID": "realtime_metric_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "realtime_metric_id",
                      "orig": "REALTIME_METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "current-concurrent-viewers",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "timestamp",
                      "orig": "timestamp",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "realtime_metric_id",
                    "timestamp",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "signal_live_stream_complete": {
        "fields": [],
        "name": "signal_live_stream_complete",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/complete",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "complete",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "complete",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "live_stream_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.live_stream",
            ],
          ],
        },
      },
      "signing_key": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
            "req": True,
            "short": "Time at which the object was created.",
            "format": "int64",
          },
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the Signing Key.",
          },
          {
            "name": "private_key",
            "title": "Private Key",
            "type": "`$STRING`",
            "short": "A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/).",
            "format": "byte",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "signing_key",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/system/v1/signing-keys",
                "segments": [
                  {
                    "lit": "system",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "signing-keys",
                  },
                ],
                "parts": [
                  "system",
                  "v1",
                  "signing-keys",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/signing-keys",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "signing-keys",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "signing-keys",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/system/v1/signing-keys",
                "segments": [
                  {
                    "lit": "system",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "signing-keys",
                  },
                ],
                "parts": [
                  "system",
                  "v1",
                  "signing-keys",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/signing-keys",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "signing-keys",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "signing-keys",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/system/v1/signing-keys/{SIGNING_KEY_ID}",
                "segments": [
                  {
                    "lit": "system",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "signing-keys",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "system",
                  "v1",
                  "signing-keys",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "SIGNING_KEY_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "SIGNING_KEY_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/signing-keys/{SIGNING_KEY_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "signing-keys",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "signing-keys",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "SIGNING_KEY_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "SIGNING_KEY_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/system/v1/signing-keys/{SIGNING_KEY_ID}",
                "segments": [
                  {
                    "lit": "system",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "signing-keys",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "system",
                  "v1",
                  "signing-keys",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "SIGNING_KEY_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "SIGNING_KEY_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "simulcast_target": {
        "fields": [
          {
            "name": "error_severity",
            "title": "Error Severity",
            "type": "`$STRING`",
            "short": "The severity of the error encountered by the simulcast target.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "ID of the Simulcast Target",
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary user-supplied metadata set when creating a simulcast target.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "The current status of the simulcast target.",
          },
          {
            "name": "stream_key",
            "title": "Stream Key",
            "type": "`$STRING`",
            "short": "Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to.",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "req": True,
            "short": "The RTMP(s) or SRT endpoint for a simulcast destination.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "simulcast_target",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "simulcast-targets",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "simulcast-targets",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "live_stream_id",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "live-streams",
                  },
                  {
                    "var": "live_stream_id",
                  },
                  {
                    "lit": "simulcast-targets",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "live-streams",
                  "{live_stream_id}",
                  "simulcast-targets",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "LIVE_STREAM_ID": "live_stream_id",
                    "SIMULCAST_TARGET_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "SIMULCAST_TARGET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "live_stream_id",
                      "orig": "LIVE_STREAM_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "live_stream_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.live_stream",
            ],
          ],
        },
      },
      "static_rendition": {
        "fields": [
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary user-supplied metadata set for the static rendition.",
          },
          {
            "name": "resolution",
            "title": "Resolution",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "static_rendition",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/assets/{ASSET_ID}/static-renditions",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "static-renditions",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "static-renditions",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.asset",
            ],
          ],
        },
      },
      "subview_breakdown_timeseries": {
        "fields": [
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "req": True,
            "format": "date-time",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "values",
            "title": "Values",
            "type": "`$ARRAY`",
            "req": True,
          },
        ],
        "name": "subview_breakdown_timeseries",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown-timeseries",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "subview-metrics",
                  },
                  {
                    "var": "subview_metric_id",
                  },
                  {
                    "var": "subview_type",
                  },
                  {
                    "lit": "breakdown-timeseries",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "subview-metrics",
                  "{subview_metric_id}",
                  "{subview_type}",
                  "breakdown-timeseries",
                ],
                "rename": {
                  "param": {
                    "METRIC_ID": "subview_metric_id",
                    "SUBVIEW_TYPE": "subview_type",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "subview_metric_id",
                      "orig": "METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "playing_time",
                    },
                    {
                      "name": "subview_type",
                      "orig": "SUBVIEW_TYPE",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "rendition",
                    },
                  ],
                  "query": [
                    {
                      "name": "breakdown_value_limit",
                      "orig": "breakdown_value_limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "group_by",
                      "orig": "group_by[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "time_granularity",
                      "orig": "time_granularity",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "hour",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "breakdown_value_limit",
                    "filter",
                    "group_by",
                    "subview_metric_id",
                    "subview_type",
                    "time_granularity",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "subview_overall_value": {
        "fields": [
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "meta",
            "title": "Meta",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "timeframe",
            "title": "Timeframe",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Always `null` for this endpoint — a single aggregate value has no row count.",
            "format": "int64",
          },
        ],
        "name": "subview_overall_value",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/overall",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "subview-metrics",
                  },
                  {
                    "var": "subview_metric_id",
                  },
                  {
                    "var": "subview_type",
                  },
                  {
                    "lit": "overall",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "subview-metrics",
                  "{subview_metric_id}",
                  "{subview_type}",
                  "overall",
                ],
                "rename": {
                  "param": {
                    "METRIC_ID": "subview_metric_id",
                    "SUBVIEW_TYPE": "subview_type",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "subview_metric_id",
                      "orig": "METRIC_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "playing_time",
                    },
                    {
                      "name": "subview_type",
                      "orig": "SUBVIEW_TYPE",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "rendition",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "filter",
                    "subview_metric_id",
                    "subview_type",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "summarize": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "summarize",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/summarize",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "summarize",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "summarize",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/summarize/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "summarize",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "summarize",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "transcription_vocabulary": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
            "req": True,
            "short": "Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch).",
            "format": "int64",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the Transcription Vocabulary",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "The user-supplied name of the Transcription Vocabulary.",
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary user-supplied metadata set for the Transcription Vocabulary.",
          },
          {
            "name": "phrases",
            "title": "Phrases",
            "type": "`$ARRAY`",
            "op": {
              "create": {
                "req": True,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": True,
                "type": "`$ARRAY`",
              },
            },
            "short": "Phrases, individual words, or proper names to include in the Transcription Vocabulary.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$STRING`",
            "req": True,
            "short": "Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch).",
            "format": "int64",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "transcription_vocabulary",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/transcription-vocabularies",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "transcription-vocabularies",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "transcription-vocabularies",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/transcription-vocabularies",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "transcription-vocabularies",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "transcription-vocabularies",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "transcription-vocabularies",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "transcription-vocabularies",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "TRANSCRIPTION_VOCABULARY_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "TRANSCRIPTION_VOCABULARY_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "transcription-vocabularies",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "transcription-vocabularies",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "TRANSCRIPTION_VOCABULARY_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "TRANSCRIPTION_VOCABULARY_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "transcription-vocabularies",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "transcription-vocabularies",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "TRANSCRIPTION_VOCABULARY_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "TRANSCRIPTION_VOCABULARY_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "translate_audio": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "translate_audio",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/translate-audio",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "translate-audio",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "translate-audio",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/translate-audio/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "translate-audio",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "translate-audio",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "translate_caption": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) when the job was created.",
          },
          {
            "name": "directive",
            "title": "Directive",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The directive run that dispatched this job.",
          },
          {
            "name": "errors",
            "title": "Errors",
            "type": "`$ARRAY`",
            "short": "Error details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique job identifier.",
          },
          {
            "name": "outputs",
            "title": "Outputs",
            "type": "`$OBJECT`",
            "short": "Workflow results.",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary string supplied at creation, returned as-is.",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$OBJECT`",
            "req": True,
            "short": "Related Mux resources linked to this job.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current job status.",
          },
          {
            "name": "units_consumed",
            "title": "Units Consumed",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of Mux AI units consumed by this job.",
          },
          {
            "name": "updated_at",
            "title": "Updated At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
          },
          {
            "name": "workflow",
            "title": "Workflow",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "translate_caption",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/robots/v0/jobs/translate-captions",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "translate-captions",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "translate-captions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/robots/v0/jobs/translate-captions/{JOB_ID}",
                "segments": [
                  {
                    "lit": "robots",
                  },
                  {
                    "lit": "v0",
                  },
                  {
                    "lit": "jobs",
                  },
                  {
                    "lit": "translate-captions",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "robots",
                  "v0",
                  "jobs",
                  "translate-captions",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "JOB_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "JOB_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "update_asset_track": {
        "fields": [
          {
            "name": "auto_language_confidence",
            "title": "Auto Language Confidence",
            "type": "`$NUMBER`",
            "short": "The confidence value (0-1) of the determined language.",
            "format": "double",
          },
          {
            "name": "closed_captions",
            "title": "Closed Captions",
            "type": "`$BOOLEAN`",
            "short": "Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).",
          },
          {
            "name": "duration",
            "title": "Duration",
            "type": "`$NUMBER`",
            "short": "The duration in seconds of the track media.",
            "format": "double",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the Track",
          },
          {
            "name": "language_code",
            "title": "Language Code",
            "type": "`$STRING`",
            "short": "The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'.",
          },
          {
            "name": "max_channels",
            "title": "Max Channels",
            "type": "`$INTEGER`",
            "short": "The maximum number of audio channels the track supports.",
            "format": "int64",
          },
          {
            "name": "max_frame_rate",
            "title": "Max Frame Rate",
            "type": "`$NUMBER`",
            "short": "The maximum frame rate available for the track.",
            "format": "double",
          },
          {
            "name": "max_height",
            "title": "Max Height",
            "type": "`$INTEGER`",
            "short": "The maximum height in pixels available for the track.",
            "format": "int64",
          },
          {
            "name": "max_width",
            "title": "Max Width",
            "type": "`$INTEGER`",
            "short": "The maximum width in pixels available for the track.",
            "format": "int64",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "The name of the track containing a human-readable description.",
          },
          {
            "name": "passthrough",
            "title": "Passthrough",
            "type": "`$STRING`",
            "short": "Arbitrary user-supplied metadata set for the track either when creating the asset or track.",
          },
          {
            "name": "primary",
            "title": "Primary",
            "type": "`$BOOLEAN`",
            "short": "For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "The status of the track.",
          },
          {
            "name": "text_source",
            "title": "Text Source",
            "type": "`$STRING`",
            "short": "The source of the text contained in a Track of type `text`.",
          },
          {
            "name": "text_type",
            "title": "Text Type",
            "type": "`$STRING`",
            "short": "This parameter is only set for `text` type tracks.",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "The type of track",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "update_asset_track",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PATCH",
                "orig": "/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "assets",
                  },
                  {
                    "var": "asset_id",
                  },
                  {
                    "lit": "tracks",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "assets",
                  "{asset_id}",
                  "tracks",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ASSET_ID": "asset_id",
                    "TRACK_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "asset_id",
                      "orig": "ASSET_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "id",
                      "orig": "TRACK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "asset_id",
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.asset",
            ],
          ],
        },
      },
      "upload": {
        "fields": [
          {
            "name": "asset_id",
            "title": "Asset Id",
            "type": "`$STRING`",
            "short": "Only set once the upload is in the `asset_created` state.",
          },
          {
            "name": "cors_origin",
            "title": "Cors Origin",
            "type": "`$STRING`",
            "req": True,
            "short": "If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers.",
          },
          {
            "name": "error",
            "title": "Error",
            "type": "`$OBJECT`",
            "short": "Only set if an error occurred during asset creation.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the Direct Upload.",
          },
          {
            "name": "new_asset_settings",
            "title": "New Asset Settings",
            "type": "`$OBJECT`",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "test",
            "title": "Test",
            "type": "`$BOOLEAN`",
            "short": "Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset.",
            "format": "boolean",
          },
          {
            "name": "timeout",
            "title": "Timeout",
            "type": "`$INTEGER`",
            "req": True,
            "op": {
              "create": {
                "type": "`$INTEGER`",
              },
            },
            "short": "Max time in seconds for the signed upload URL to be valid.",
            "format": "int32",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "The URL to upload the associated source media to.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "upload",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/video/v1/uploads",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "uploads",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "uploads",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/uploads",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "uploads",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "uploads",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/video/v1/uploads/{UPLOAD_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "uploads",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "uploads",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "UPLOAD_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "UPLOAD_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "abcd1234",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/video/v1/uploads/{UPLOAD_ID}/cancel",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "uploads",
                  },
                  {
                    "var": "upload_id",
                  },
                  {
                    "lit": "cancel",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "uploads",
                  "{upload_id}",
                  "cancel",
                ],
                "rename": {
                  "param": {
                    "UPLOAD_ID": "upload_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "upload_id",
                      "orig": "UPLOAD_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "abcd1234",
                    },
                  ],
                },
                "select": {
                  "$action": "cancel",
                  "exist": [
                    "upload_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "url_signing_key": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "url_signing_key",
        "op": {
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/video/v1/signing-keys/{SIGNING_KEY_ID}",
                "segments": [
                  {
                    "lit": "video",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "signing-keys",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "video",
                  "v1",
                  "signing-keys",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "SIGNING_KEY_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "SIGNING_KEY_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "usage_export": {
        "fields": [
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "req": True,
            "short": "The calendar date this CSV covers, in `YYYY-MM-DD` format.",
            "format": "date",
          },
          {
            "name": "download_url",
            "title": "Download Url",
            "type": "`$STRING`",
            "req": True,
            "short": "A pre-signed URL to download the CSV.",
          },
          {
            "name": "download_url_expires_at",
            "title": "Download Url Expires At",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Unix timestamp (seconds since epoch) at which `download_url` expires.",
          },
          {
            "name": "file_size",
            "title": "File Size",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Uncompressed size of the CSV file in bytes.",
          },
        ],
        "name": "usage_export",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/system/v1/usage/exports",
                "segments": [
                  {
                    "lit": "system",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "usage",
                  },
                  {
                    "lit": "exports",
                  },
                ],
                "parts": [
                  "system",
                  "v1",
                  "usage",
                  "exports",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "download_url_ttl",
                      "orig": "download_url_ttl",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 3600,
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "download_url_ttl",
                    "limit",
                    "page",
                    "timeframe",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "video_view": {
        "fields": [
          {
            "name": "country_code",
            "title": "Country Code",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "error_type_id",
            "title": "Error Type Id",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int32",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "playback_failure",
            "title": "Playback Failure",
            "type": "`$BOOLEAN`",
            "req": True,
          },
          {
            "name": "player_error_code",
            "title": "Player Error Code",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "player_error_message",
            "title": "Player Error Message",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "timeframe",
            "title": "Timeframe",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "total_row_count",
            "title": "Total Row Count",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int64",
          },
          {
            "name": "video_title",
            "title": "Video Title",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "view_end",
            "title": "View End",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "view_start",
            "title": "View Start",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "viewer_application_name",
            "title": "Viewer Application Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "viewer_experience_score",
            "title": "Viewer Experience Score",
            "type": "`$NUMBER`",
            "req": True,
            "format": "float",
          },
          {
            "name": "viewer_os_family",
            "title": "Viewer Os Family",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "watch_time",
            "title": "Watch Time",
            "type": "`$INTEGER`",
            "req": True,
            "format": "int32",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "video_view",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/video-views",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "video-views",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "video-views",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "error_id",
                      "orig": "error_id",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "filter",
                      "orig": "filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "metric_filter",
                      "orig": "metric_filters[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "timeframe",
                      "orig": "timeframe[]",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "viewer_id",
                      "orig": "viewer_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "error_id",
                    "filter",
                    "limit",
                    "metric_filter",
                    "order_direction",
                    "page",
                    "timeframe",
                    "viewer_id",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/data/v1/video-views/{VIDEO_VIEW_ID}",
                "segments": [
                  {
                    "lit": "data",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "video-views",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "data",
                  "v1",
                  "video-views",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "VIDEO_VIEW_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "VIDEO_VIEW_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "abcd1234",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "webhook": {
        "fields": [
          {
            "name": "address",
            "title": "Address",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": "`$STRING`",
              },
            },
            "short": "The URL where Mux sends webhook notifications.",
          },
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
            "req": True,
            "short": "Time at which the webhook was created, as an ISO 8601 UTC datetime.",
            "format": "date-time",
          },
          {
            "name": "enabled",
            "title": "Enabled",
            "type": "`$BOOLEAN`",
            "req": True,
            "op": {
              "update": {
                "type": "`$BOOLEAN`",
              },
            },
            "short": "Whether Mux attempts to deliver notifications to this webhook.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the webhook.",
          },
          {
            "name": "signing_secret",
            "title": "Signing Secret",
            "type": "`$STRING`",
            "short": "Secret used to verify that webhook payloads were sent by Mux.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "webhook",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/system/v1/webhooks",
                "segments": [
                  {
                    "lit": "system",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "webhooks",
                  },
                ],
                "parts": [
                  "system",
                  "v1",
                  "webhooks",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/system/v1/webhooks",
                "segments": [
                  {
                    "lit": "system",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "webhooks",
                  },
                ],
                "parts": [
                  "system",
                  "v1",
                  "webhooks",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 25,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/system/v1/webhooks/{WEBHOOK_ID}",
                "segments": [
                  {
                    "lit": "system",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "webhooks",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "system",
                  "v1",
                  "webhooks",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "WEBHOOK_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "WEBHOOK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/system/v1/webhooks/{WEBHOOK_ID}",
                "segments": [
                  {
                    "lit": "system",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "webhooks",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "system",
                  "v1",
                  "webhooks",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "WEBHOOK_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "WEBHOOK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PATCH",
                "orig": "/system/v1/webhooks/{WEBHOOK_ID}",
                "segments": [
                  {
                    "lit": "system",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "webhooks",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "system",
                  "v1",
                  "webhooks",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "WEBHOOK_ID": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "WEBHOOK_ID",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "who_am_i": {
        "fields": [
          {
            "name": "access_token_name",
            "title": "Access Token Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "environment_id",
            "title": "Environment Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "environment_name",
            "title": "Environment Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "environment_type",
            "title": "Environment Type",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "organization_id",
            "title": "Organization Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "organization_name",
            "title": "Organization Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "permissions",
            "title": "Permissions",
            "type": "`$ARRAY`",
            "req": True,
          },
        ],
        "name": "who_am_i",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/system/v1/whoami",
                "segments": [
                  {
                    "lit": "system",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "whoami",
                  },
                ],
                "parts": [
                  "system",
                  "v1",
                  "whoami",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
