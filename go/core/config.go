package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Mux",
			"slug": "mux",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.mux.com",
			"auth": map[string]any{
				"prefix": "Basic",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"annotation": map[string]any{},
				"ask_question": map[string]any{},
				"asset": map[string]any{},
				"asset_or_live_stream_id": map[string]any{},
				"asset_playback_id": map[string]any{},
				"asset_shot": map[string]any{},
				"create_playback_id": map[string]any{},
				"create_track": map[string]any{},
				"directive": map[string]any{},
				"directive_run_detail": map[string]any{},
				"drm_configuration": map[string]any{},
				"edit_caption": map[string]any{},
				"engagement_heatmap": map[string]any{},
				"engagement_hotspot": map[string]any{},
				"find_best_thumbnail": map[string]any{},
				"find_key_moment": map[string]any{},
				"find_scene": map[string]any{},
				"generate_asset_shot": map[string]any{},
				"generate_chapter": map[string]any{},
				"generate_engagement_insight": map[string]any{},
				"generate_premium_caption": map[string]any{},
				"generate_track_subtitle": map[string]any{},
				"incident": map[string]any{},
				"input_info": map[string]any{},
				"job_summary": map[string]any{},
				"list_all_metric_value": map[string]any{},
				"list_breakdown_value": map[string]any{},
				"list_delivery_usage": map[string]any{},
				"list_dimension_value": map[string]any{},
				"list_error": map[string]any{},
				"list_export": map[string]any{},
				"list_filter_value": map[string]any{},
				"list_insight": map[string]any{},
				"list_monitoring_dimension": map[string]any{},
				"list_monitoring_metric": map[string]any{},
				"list_real_time_dimension": map[string]any{},
				"list_real_time_metric": map[string]any{},
				"list_related_incident": map[string]any{},
				"list_subview_breakdown_value": map[string]any{},
				"list_subview_comparison_value": map[string]any{},
				"list_subview_dimension": map[string]any{},
				"list_subview_dimension_value": map[string]any{},
				"list_video_view_export": map[string]any{},
				"live_stream": map[string]any{},
				"live_stream_playback_id": map[string]any{},
				"metric_timeseries_data": map[string]any{},
				"moderate": map[string]any{},
				"monitoring_breakdown": map[string]any{},
				"monitoring_breakdown_timeseries": map[string]any{},
				"monitoring_histogram_timeseries": map[string]any{},
				"monitoring_timeseries": map[string]any{},
				"overall": map[string]any{},
				"playback_restriction": map[string]any{},
				"real_time_breakdown": map[string]any{},
				"real_time_histogram_timeseries": map[string]any{},
				"real_time_timeseries": map[string]any{},
				"signal_live_stream_complete": map[string]any{},
				"signing_key": map[string]any{},
				"simulcast_target": map[string]any{},
				"static_rendition": map[string]any{},
				"subview_breakdown_timeseries": map[string]any{},
				"subview_overall_value": map[string]any{},
				"summarize": map[string]any{},
				"transcription_vocabulary": map[string]any{},
				"translate_audio": map[string]any{},
				"translate_caption": map[string]any{},
				"update_asset_track": map[string]any{},
				"upload": map[string]any{},
				"url_signing_key": map[string]any{},
				"usage_export": map[string]any{},
				"video_view": map[string]any{},
				"webhook": map[string]any{},
				"who_am_i": map[string]any{},
			},
		},
		"entity": map[string]any{
			"annotation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Datetime when the annotation applies",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the annotation",
						"format": "uuid",
					},
					map[string]any{
						"name": "note",
						"title": "Note",
						"type": "`$STRING`",
						"req": true,
						"short": "The annotation note content",
					},
					map[string]any{
						"name": "sub_property_id",
						"title": "Sub Property Id",
						"type": "`$STRING`",
						"short": "Customer-defined sub-property identifier",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "annotation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/data/v1/annotations",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "annotations",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"annotations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/annotations",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "annotations",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"annotations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"order_direction",
										"page",
										"timeframe",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/annotations/{ANNOTATION_ID}",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "annotations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"annotations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ANNOTATION_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ANNOTATION_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/data/v1/annotations/{ANNOTATION_ID}",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "annotations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"annotations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ANNOTATION_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ANNOTATION_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/data/v1/annotations/{ANNOTATION_ID}",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "annotations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"annotations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ANNOTATION_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ANNOTATION_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ask_question": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ask_question",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/ask-questions",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "ask-questions",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"ask-questions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/ask-questions/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "ask-questions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"ask-questions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"asset": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "aspect_ratio",
						"title": "Aspect Ratio",
						"type": "`$STRING`",
						"short": "The aspect ratio of the asset in the form of `width:height`, for example `16:9`.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Time the Asset was created, defined as a Unix timestamp (seconds since epoch).",
						"format": "int64",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "directives",
						"title": "Directives",
						"type": "`$ARRAY`",
						"short": "The Mux Robots directives applied to the asset.",
					},
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$NUMBER`",
						"short": "The duration of the asset in seconds (max duration for a single asset is 12 hours).",
						"format": "double",
					},
					map[string]any{
						"name": "encoding_tier",
						"title": "Encoding Tier",
						"type": "`$STRING`",
						"req": true,
						"short": "This field is deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$OBJECT`",
						"short": "Object that describes any errors that happened when processing this asset.",
					},
					map[string]any{
						"name": "generate_shots",
						"title": "Generate Shots",
						"type": "`$BOOLEAN`",
						"short": "Whether to perform shot detection on this asset.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the Asset.",
					},
					map[string]any{
						"name": "ingest_type",
						"title": "Ingest Type",
						"type": "`$STRING`",
						"short": "The type of ingest used to create the asset.",
					},
					map[string]any{
						"name": "is_live",
						"title": "Is Live",
						"type": "`$BOOLEAN`",
						"short": "Indicates whether the live stream that created this asset is currently `active` and not in `idle` state.",
						"format": "boolean",
					},
					map[string]any{
						"name": "live_stream_id",
						"title": "Live Stream Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the live stream.",
					},
					map[string]any{
						"name": "master",
						"title": "Master",
						"type": "`$OBJECT`",
						"short": "An object containing the current status of Master Access and the link to the Master MP4 file when ready.",
					},
					map[string]any{
						"name": "master_access",
						"title": "Master Access",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "max_resolution_tier",
						"title": "Max Resolution Tier",
						"type": "`$STRING`",
						"req": true,
						"short": "Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at.",
					},
					map[string]any{
						"name": "max_stored_frame_rate",
						"title": "Max Stored Frame Rate",
						"type": "`$NUMBER`",
						"short": "The maximum frame rate that has been stored for the asset.",
						"format": "double",
					},
					map[string]any{
						"name": "max_stored_resolution",
						"title": "Max Stored Resolution",
						"type": "`$STRING`",
						"short": "This field is deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"short": "Customer provided metadata about this asset.",
					},
					map[string]any{
						"name": "mp4_support",
						"title": "Mp4 Support",
						"type": "`$STRING`",
						"short": "Deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "non_standard_input_reasons",
						"title": "Non Standard Input Reasons",
						"type": "`$OBJECT`",
						"short": "An object containing one or more reasons the input file is non-standard.",
					},
					map[string]any{
						"name": "normalize_audio",
						"title": "Normalize Audio",
						"type": "`$BOOLEAN`",
						"short": "Normalize the audio track loudness level.",
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "You can set this field to anything you want.",
					},
					map[string]any{
						"name": "playback_ids",
						"title": "Playback Ids",
						"type": "`$ARRAY`",
						"short": "An array of Playback ID objects.",
					},
					map[string]any{
						"name": "progress",
						"title": "Progress",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Detailed state information about the asset ingest process.",
					},
					map[string]any{
						"name": "recording_times",
						"title": "Recording Times",
						"type": "`$ARRAY`",
						"short": "An array of individual live stream recording sessions.",
					},
					map[string]any{
						"name": "resolution_tier",
						"title": "Resolution Tier",
						"type": "`$STRING`",
						"short": "The resolution tier that the asset was ingested at, affecting billing for ingest & storage.",
					},
					map[string]any{
						"name": "shots",
						"title": "Shots",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The results of generating shots on the video",
					},
					map[string]any{
						"name": "source_asset_id",
						"title": "Source Asset Id",
						"type": "`$STRING`",
						"short": "Asset Identifier of the video used as the source for creating the clip.",
					},
					map[string]any{
						"name": "static_renditions",
						"title": "Static Renditions",
						"type": "`$OBJECT`",
						"short": "An object containing the current status of any static renditions (MP4s) for this asset.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The status of the asset.",
					},
					map[string]any{
						"name": "test",
						"title": "Test",
						"type": "`$BOOLEAN`",
						"short": "True means this live stream is a test asset.",
						"format": "boolean",
					},
					map[string]any{
						"name": "thumbnail_time",
						"title": "Thumbnail Time",
						"type": "`$NUMBER`",
						"short": "The media time within the asset used when a thumbnail without an explicit time is requested.",
						"format": "float",
					},
					map[string]any{
						"name": "tracks",
						"title": "Tracks",
						"type": "`$ARRAY`",
						"short": "The individual media tracks that make up an asset.",
					},
					map[string]any{
						"name": "upload_id",
						"title": "Upload Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the Direct Upload.",
					},
					map[string]any{
						"name": "video_quality",
						"title": "Video Quality",
						"type": "`$STRING`",
						"short": "The video quality controls the cost, quality, and available platform features for the asset.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "asset",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/assets",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/assets",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "live_stream_id",
											"orig": "live_stream_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "upload_id",
											"orig": "upload_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"live_stream_id",
										"page",
										"upload_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/assets/{ASSET_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "playback-ids",
									},
									map[string]any{
										"var": "playback_id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"playback-ids",
									"{playback_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
										"PLAYBACK_ID": "playback_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "playback_id",
											"orig": "PLAYBACK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
										"playback_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/assets/{ASSET_ID}/static-renditions/{STATIC_RENDITION_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "static-renditions",
									},
									map[string]any{
										"var": "static_rendition_id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"static-renditions",
									"{static_rendition_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
										"STATIC_RENDITION_ID": "static_rendition_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "static_rendition_id",
											"orig": "STATIC_RENDITION_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
										"static_rendition_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "tracks",
									},
									map[string]any{
										"var": "track_id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"tracks",
									"{track_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
										"TRACK_ID": "track_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "track_id",
											"orig": "TRACK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
										"track_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/assets/{ASSET_ID}/shots",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "shots",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"shots",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "shot",
									"exist": []any{
										"asset_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/assets/{ASSET_ID}/thumbnail-time",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "thumbnail-time",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"thumbnail-time",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "thumbnail_time",
									"exist": []any{
										"asset_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/assets/{ASSET_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/assets/{ASSET_ID}/master-access",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "master-access",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"master-access",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "master_access",
									"exist": []any{
										"asset_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/assets/{ASSET_ID}/mp4-support",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "mp4-support",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"mp4-support",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "mp4_support",
									"exist": []any{
										"asset_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/video/v1/assets/{ASSET_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.static_rendition",
						},
					},
				},
			},
			"asset_or_live_stream_id": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Playback ID used to retrieve the corresponding asset or the live stream ID",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Describes the Asset or LiveStream object associated with the playback ID.",
					},
					map[string]any{
						"name": "policy",
						"title": "Policy",
						"type": "`$STRING`",
						"req": true,
						"short": "* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "asset_or_live_stream_id",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/playback-ids/{PLAYBACK_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "playback-ids",
									},
									map[string]any{
										"var": "playback_id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"playback-ids",
									"{playback_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"PLAYBACK_ID": "playback_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "playback_id",
											"orig": "PLAYBACK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"playback_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"asset_playback_id": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "drm_configuration_id",
						"title": "Drm Configuration Id",
						"type": "`$STRING`",
						"short": "The DRM configuration used by this playback ID.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the PlaybackID",
					},
					map[string]any{
						"name": "policy",
						"title": "Policy",
						"type": "`$STRING`",
						"req": true,
						"short": "* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "asset_playback_id",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "playback-ids",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"playback-ids",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
										"PLAYBACK_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "PLAYBACK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.asset",
						},
					},
				},
			},
			"asset_shot": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$OBJECT`",
						"short": "An object describing any errors encountered during the shot detection process.",
					},
					map[string]any{
						"name": "shots_manifest_url",
						"title": "Shots Manifest Url",
						"type": "`$STRING`",
						"short": "A URL to a JSON manifest describing the shot changes detected in the video along with shot preview images for each shot.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The status of the shot detection process",
					},
				},
				"name": "asset_shot",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/assets/{ASSET_ID}/shots",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "shots",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"shots",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.asset",
						},
					},
				},
			},
			"create_playback_id": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "drm_configuration_id",
						"title": "Drm Configuration Id",
						"type": "`$STRING`",
						"short": "The DRM configuration used by this playback ID.",
					},
					map[string]any{
						"name": "policy",
						"title": "Policy",
						"type": "`$STRING`",
						"short": "* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`.",
					},
				},
				"name": "create_playback_id",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/assets/{ASSET_ID}/playback-ids",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "playback-ids",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"playback-ids",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "playback-ids",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"playback-ids",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"live_stream_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.asset",
						},
						[]any{
							"$.main.kit.entity.live_stream",
						},
					},
				},
			},
			"create_track": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "closed_captions",
						"title": "Closed Captions",
						"type": "`$BOOLEAN`",
						"short": "Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).",
					},
					map[string]any{
						"name": "language_code",
						"title": "Language Code",
						"type": "`$STRING`",
						"req": true,
						"short": "The language code of this track.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the track containing a human-readable description.",
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary user-supplied metadata set for the track either when creating the asset or track.",
					},
					map[string]any{
						"name": "text_type",
						"title": "Text Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The URL of the file that Mux should download and use.",
					},
				},
				"name": "create_track",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/assets/{ASSET_ID}/tracks",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "tracks",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"tracks",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.asset",
						},
					},
				},
			},
			"directive": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the directive was created.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Stable directive identifier (drv_...).",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Human-readable directive name.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "Resource declarations.",
					},
					map[string]any{
						"name": "subject",
						"title": "Subject",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the directive was last updated.",
					},
					map[string]any{
						"name": "workflows",
						"title": "Workflows",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Workflow bindings.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "directive",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/directives/{DIRECTIVE_ID}/runs",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "directives",
									},
									map[string]any{
										"var": "directive_id",
									},
									map[string]any{
										"lit": "runs",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"directives",
									"{directive_id}",
									"runs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"DIRECTIVE_ID": "directive_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "directive_id",
											"orig": "DIRECTIVE_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "run",
									"exist": []any{
										"directive_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/directives",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "directives",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"directives",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/directives",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "directives",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"directives",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/directives/{DIRECTIVE_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "directives",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"directives",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"DIRECTIVE_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "DIRECTIVE_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/robots/v0/directives/{DIRECTIVE_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "directives",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"directives",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"DIRECTIVE_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "DIRECTIVE_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"directive_run_detail": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "completed_at",
						"title": "Completed At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Unix timestamp (seconds) when the run reached terminal state.",
					},
					map[string]any{
						"name": "node_states",
						"title": "Node States",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`.",
					},
					map[string]any{
						"name": "run_id",
						"title": "Run Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique run identifier (drvrun_...).",
					},
					map[string]any{
						"name": "started_at",
						"title": "Started At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the run started.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current run status.",
					},
					map[string]any{
						"name": "subject_id",
						"title": "Subject Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The bare Mux asset ID this run targeted.",
					},
				},
				"name": "directive_run_detail",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/directives/{DIRECTIVE_ID}/runs",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "directives",
									},
									map[string]any{
										"var": "directive_id",
									},
									map[string]any{
										"lit": "runs",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"directives",
									"{directive_id}",
									"runs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"DIRECTIVE_ID": "directive_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "directive_id",
											"orig": "DIRECTIVE_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"directive_id",
										"limit",
										"page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/directives/{DIRECTIVE_ID}/runs/{RUN_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "directives",
									},
									map[string]any{
										"var": "directive_id",
									},
									map[string]any{
										"lit": "runs",
									},
									map[string]any{
										"var": "run_id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"directives",
									"{directive_id}",
									"runs",
									"{run_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"DIRECTIVE_ID": "directive_id",
										"RUN_ID": "run_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "directive_id",
											"orig": "DIRECTIVE_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "run_id",
											"orig": "RUN_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"directive_id",
										"run_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.directive",
						},
						[]any{
							"$.main.kit.entity.directive",
						},
					},
				},
			},
			"drm_configuration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the DRM Configuration.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "drm_configuration",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/drm-configurations",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "drm-configurations",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"drm-configurations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/drm-configurations/{DRM_CONFIGURATION_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "drm-configurations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"drm-configurations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"DRM_CONFIGURATION_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "DRM_CONFIGURATION_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"edit_caption": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "edit_caption",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/edit-captions",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "edit-captions",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"edit-captions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/edit-captions/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "edit-captions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"edit-captions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"engagement_heatmap": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "timeframe",
						"title": "Timeframe",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
				},
				"name": "engagement_heatmap",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/engagement/assets/{ASSET_ID}/heatmap",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "engagement",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "heatmap",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"engagement",
									"assets",
									"{asset_id}",
									"heatmap",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy",
										},
									},
									"query": []any{
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
										"timeframe",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/engagement/playback-ids/{PLAYBACK_ID}/heatmap",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "engagement",
									},
									map[string]any{
										"lit": "playback-ids",
									},
									map[string]any{
										"var": "playback_id_id",
									},
									map[string]any{
										"lit": "heatmap",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"engagement",
									"playback-ids",
									"{playback_id_id}",
									"heatmap",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"PLAYBACK_ID": "playback_id_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "playback_id_id",
											"orig": "PLAYBACK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "nLp01dgPzELHV6101iHGXmS3Og7lEU01TUDb02kg2Z6mPRs",
										},
									},
									"query": []any{
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"playback_id_id",
										"timeframe",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/engagement/videos/{VIDEO_ID}/heatmap",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "engagement",
									},
									map[string]any{
										"lit": "videos",
									},
									map[string]any{
										"var": "video_id",
									},
									map[string]any{
										"lit": "heatmap",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"engagement",
									"videos",
									"{video_id}",
									"heatmap",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"VIDEO_ID": "video_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "video_id",
											"orig": "VIDEO_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "abcd1234",
										},
									},
									"query": []any{
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"timeframe",
										"video_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.asset",
						},
					},
				},
			},
			"engagement_hotspot": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "timeframe",
						"title": "Timeframe",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
				},
				"name": "engagement_hotspot",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/engagement/assets/{ASSET_ID}/hotspots",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "engagement",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "hotspots",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"engagement",
									"assets",
									"{asset_id}",
									"hotspots",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
										"limit",
										"order_direction",
										"timeframe",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/engagement/playback-ids/{PLAYBACK_ID}/hotspots",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "engagement",
									},
									map[string]any{
										"lit": "playback-ids",
									},
									map[string]any{
										"var": "playback_id_id",
									},
									map[string]any{
										"lit": "hotspots",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"engagement",
									"playback-ids",
									"{playback_id_id}",
									"hotspots",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"PLAYBACK_ID": "playback_id_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "playback_id_id",
											"orig": "PLAYBACK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "nLp01dgPzELHV6101iHGXmS3Og7lEU01TUDb02kg2Z6mPRs",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"order_direction",
										"playback_id_id",
										"timeframe",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/engagement/videos/{VIDEO_ID}/hotspots",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "engagement",
									},
									map[string]any{
										"lit": "videos",
									},
									map[string]any{
										"var": "video_id",
									},
									map[string]any{
										"lit": "hotspots",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"engagement",
									"videos",
									"{video_id}",
									"hotspots",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"VIDEO_ID": "video_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "video_id",
											"orig": "VIDEO_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "abcd1234",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"order_direction",
										"timeframe",
										"video_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.asset",
						},
					},
				},
			},
			"find_best_thumbnail": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "find_best_thumbnail",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/find-best-thumbnails",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "find-best-thumbnails",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"find-best-thumbnails",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/find-best-thumbnails/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "find-best-thumbnails",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"find-best-thumbnails",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"find_key_moment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "find_key_moment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/find-key-moments",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "find-key-moments",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"find-key-moments",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/find-key-moments/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "find-key-moments",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"find-key-moments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"find_scene": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "find_scene",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/find-scenes",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "find-scenes",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"find-scenes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/find-scenes/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "find-scenes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"find-scenes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generate_asset_shot": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
					},
				},
				"name": "generate_asset_shot",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/assets/{ASSET_ID}/shots",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "shots",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"shots",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.asset",
						},
					},
				},
			},
			"generate_chapter": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "generate_chapter",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/generate-chapters",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "generate-chapters",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"generate-chapters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/generate-chapters/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "generate-chapters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"generate-chapters",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generate_engagement_insight": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "generate_engagement_insight",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/generate-engagement-insights",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "generate-engagement-insights",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"generate-engagement-insights",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/generate-engagement-insights/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "generate-engagement-insights",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"generate-engagement-insights",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generate_premium_caption": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "generate_premium_caption",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/generate-premium-captions",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "generate-premium-captions",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"generate-premium-captions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/generate-premium-captions/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "generate-premium-captions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"generate-premium-captions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generate_track_subtitle": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "generated_subtitles",
						"title": "Generated Subtitles",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Generate subtitle tracks using automatic speech recognition with this configuration.",
					},
				},
				"name": "generate_track_subtitle",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "tracks",
									},
									map[string]any{
										"var": "track_id",
									},
									map[string]any{
										"lit": "generate-subtitles",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"tracks",
									"{track_id}",
									"generate-subtitles",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
										"TRACK_ID": "track_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "track_id",
											"orig": "TRACK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
										"track_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.asset",
						},
					},
				},
			},
			"incident": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "affected_views",
						"title": "Affected Views",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "affected_views_per_hour",
						"title": "Affected Views Per Hour",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "affected_views_per_hour_on_open",
						"title": "Affected Views Per Hour On Open",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "breakdowns",
						"title": "Breakdowns",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "error_description",
						"title": "Error Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "impact",
						"title": "Impact",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "incident_key",
						"title": "Incident Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "measured_value",
						"title": "Measured Value",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "measured_value_on_close",
						"title": "Measured Value On Close",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "measurement",
						"title": "Measurement",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "notification_rules",
						"title": "Notification Rules",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "notifications",
						"title": "Notifications",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "resolved_at",
						"title": "Resolved At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sample_size",
						"title": "Sample Size",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "sample_size_unit",
						"title": "Sample Size Unit",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "severity",
						"title": "Severity",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "started_at",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "threshold",
						"title": "Threshold",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "timeframe",
						"title": "Timeframe",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "incident",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/incidents",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "incidents",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"incidents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "severity",
											"orig": "severity",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"order_by",
										"order_direction",
										"page",
										"severity",
										"status",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/incidents/{INCIDENT_ID}",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "incidents",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"incidents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"INCIDENT_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "INCIDENT_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "abcd1234",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"input_info": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "file",
						"title": "File",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "settings",
						"title": "Settings",
						"type": "`$OBJECT`",
						"short": "An array of objects that each describe an input file to be used to create the asset.",
					},
				},
				"name": "input_info",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/assets/{ASSET_ID}/input-info",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "input-info",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"input-info",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.asset",
						},
					},
				},
			},
			"job_summary": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Hypermedia links for this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
						"short": "Workflow type that created this job.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "job_summary",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/{JOB_ID}/cancel",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
									map[string]any{
										"lit": "cancel",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"{job_id}",
									"cancel",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "job_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "job_id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"job_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "asset_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "workflow",
											"orig": "workflow",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
										"limit",
										"page",
										"status",
										"workflow",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_all_metric_value": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ended_views",
						"title": "Ended Views",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "items",
						"title": "Items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "metric",
						"title": "Metric",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "started_views",
						"title": "Started Views",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "total_playing_time",
						"title": "Total Playing Time",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unique_viewers",
						"title": "Unique Viewers",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$NUMBER`",
						"format": "double",
					},
					map[string]any{
						"name": "view_count",
						"title": "View Count",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "watch_time",
						"title": "Watch Time",
						"type": "`$INTEGER`",
						"format": "int64",
					},
				},
				"name": "list_all_metric_value",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/metrics/comparison",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"lit": "comparison",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"metrics",
									"comparison",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "dimension",
											"orig": "dimension",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "metric_filter",
											"orig": "metric_filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dimension",
										"filter",
										"metric_filter",
										"timeframe",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_breakdown_value": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "field",
						"title": "Field",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "negative_impact",
						"title": "Negative Impact",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
					map[string]any{
						"name": "total_playing_time",
						"title": "Total Playing Time",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "total_watch_time",
						"title": "Total Watch Time",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "views",
						"title": "Views",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
				},
				"name": "list_breakdown_value",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/metrics/{METRIC_ID}/breakdown",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"var": "metric_id",
									},
									map[string]any{
										"lit": "breakdown",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"metrics",
									"{metric_id}",
									"breakdown",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"METRIC_ID": "metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "metric_id",
											"orig": "METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "video_startup_time",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "group_by",
											"orig": "group_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "measurement",
											"orig": "measurement",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "metric_filter",
											"orig": "metric_filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_delivery_usage": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "asset_duration",
						"title": "Asset Duration",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The duration of the asset in seconds.",
						"format": "double",
					},
					map[string]any{
						"name": "asset_encoding_tier",
						"title": "Asset Encoding Tier",
						"type": "`$STRING`",
						"req": true,
						"short": "This field is deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "asset_id",
						"title": "Asset Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the asset.",
					},
					map[string]any{
						"name": "asset_resolution_tier",
						"title": "Asset Resolution Tier",
						"type": "`$STRING`",
						"req": true,
						"short": "The resolution tier that the asset was ingested at, affecting billing for ingest & storage",
					},
					map[string]any{
						"name": "asset_state",
						"title": "Asset State",
						"type": "`$STRING`",
						"req": true,
						"short": "The state of the asset.",
					},
					map[string]any{
						"name": "asset_video_quality",
						"title": "Asset Video Quality",
						"type": "`$STRING`",
						"short": "The video quality that the asset was ingested at.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Time at which the asset was created.",
					},
					map[string]any{
						"name": "deleted_at",
						"title": "Deleted At",
						"type": "`$STRING`",
						"short": "If exists, time at which the asset was deleted.",
					},
					map[string]any{
						"name": "delivered_seconds",
						"title": "Delivered Seconds",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Total number of delivered seconds during this time window.",
						"format": "double",
					},
					map[string]any{
						"name": "delivered_seconds_by_resolution",
						"title": "Delivered Seconds By Resolution",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Seconds delivered broken into resolution tiers.",
					},
					map[string]any{
						"name": "live_stream_id",
						"title": "Live Stream Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the live stream that created the asset.",
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "The `passthrough` value for the asset.",
					},
				},
				"name": "list_delivery_usage",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/delivery-usage",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "delivery-usage",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"delivery-usage",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "asset_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "live_stream_id",
											"orig": "live_stream_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
										"limit",
										"live_stream_id",
										"page",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_dimension_value": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "timeframe",
						"title": "Timeframe",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_count",
						"title": "Total Count",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "list_dimension_value",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/dimensions/{DIMENSION_ID}/elements",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dimensions",
									},
									map[string]any{
										"var": "dimension_id",
									},
									map[string]any{
										"lit": "elements",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"dimensions",
									"{dimension_id}",
									"elements",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"DIMENSION_ID": "dimension_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "dimension_id",
											"orig": "DIMENSION_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "abcd1234",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "metric_filter",
											"orig": "metric_filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dimension_id",
										"filter",
										"limit",
										"metric_filter",
										"order_by",
										"order_direction",
										"page",
										"timeframe",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/dimensions",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dimensions",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"dimensions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/dimensions/{DIMENSION_ID}",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dimensions",
									},
									map[string]any{
										"var": "dimension_id",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"dimensions",
									"{dimension_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"DIMENSION_ID": "dimension_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "dimension_id",
											"orig": "DIMENSION_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "abcd1234",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "metric_filter",
											"orig": "metric_filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dimension_id",
										"filter",
										"limit",
										"metric_filter",
										"page",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_error": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The error code",
						"format": "int64",
					},
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The total number of views that experienced this error.",
						"format": "int64",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
						"short": "Description of the error.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "A unique identifier for this error.",
						"format": "int64",
					},
					map[string]any{
						"name": "last_seen",
						"title": "Last Seen",
						"type": "`$STRING`",
						"req": true,
						"short": "The last time this error was seen (ISO 8601 timestamp).",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
						"short": "The error message.",
					},
					map[string]any{
						"name": "notes",
						"title": "Notes",
						"type": "`$STRING`",
						"req": true,
						"short": "Notes that are attached to this error.",
					},
					map[string]any{
						"name": "percentage",
						"title": "Percentage",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The percentage of views that experienced this error.",
						"format": "double",
					},
					map[string]any{
						"name": "player_error_code",
						"title": "Player Error Code",
						"type": "`$STRING`",
						"req": true,
						"short": "The string version of the error code",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_error",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/errors",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "errors",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"errors",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "metric_filter",
											"orig": "metric_filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"metric_filter",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_export": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "timeframe",
						"title": "Timeframe",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
				},
				"name": "list_export",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/exports",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "exports",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"exports",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_filter_value": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "timeframe",
						"title": "Timeframe",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
				},
				"name": "list_filter_value",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/filters",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "filters",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"filters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/filters/{FILTER_ID}",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "filters",
									},
									map[string]any{
										"var": "filter_id",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"filters",
									"{filter_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"FILTER_ID": "filter_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "filter_id",
											"orig": "FILTER_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "abcd1234",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"filter_id",
										"limit",
										"page",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_insight": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "filter_column",
						"title": "Filter Column",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "filter_value",
						"title": "Filter Value",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "metric",
						"title": "Metric",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "negative_impact_score",
						"title": "Negative Impact Score",
						"type": "`$NUMBER`",
						"req": true,
						"format": "float",
					},
					map[string]any{
						"name": "total_playing_time",
						"title": "Total Playing Time",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "total_views",
						"title": "Total Views",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "total_watch_time",
						"title": "Total Watch Time",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
				},
				"name": "list_insight",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/metrics/{METRIC_ID}/insights",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"var": "metric_id",
									},
									map[string]any{
										"lit": "insights",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"metrics",
									"{metric_id}",
									"insights",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"METRIC_ID": "metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "metric_id",
											"orig": "METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "video_startup_time",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "measurement",
											"orig": "measurement",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "metric_filter",
											"orig": "metric_filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"measurement",
										"metric_filter",
										"metric_id",
										"order_direction",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_monitoring_dimension": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "display_name",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "list_monitoring_dimension",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/monitoring/dimensions",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "monitoring",
									},
									map[string]any{
										"lit": "dimensions",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"monitoring",
									"dimensions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_monitoring_metric": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "display_name",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "list_monitoring_metric",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/monitoring/metrics",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "monitoring",
									},
									map[string]any{
										"lit": "metrics",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"monitoring",
									"metrics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_real_time_dimension": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "display_name",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "list_real_time_dimension",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/realtime/dimensions",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "realtime",
									},
									map[string]any{
										"lit": "dimensions",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"realtime",
									"dimensions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_real_time_metric": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "display_name",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "list_real_time_metric",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/realtime/metrics",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "realtime",
									},
									map[string]any{
										"lit": "metrics",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"realtime",
									"metrics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_related_incident": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "affected_views",
						"title": "Affected Views",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "affected_views_per_hour",
						"title": "Affected Views Per Hour",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "affected_views_per_hour_on_open",
						"title": "Affected Views Per Hour On Open",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "breakdowns",
						"title": "Breakdowns",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "error_description",
						"title": "Error Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "impact",
						"title": "Impact",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "incident_key",
						"title": "Incident Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "measured_value",
						"title": "Measured Value",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "measured_value_on_close",
						"title": "Measured Value On Close",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "measurement",
						"title": "Measurement",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "notification_rules",
						"title": "Notification Rules",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "notifications",
						"title": "Notifications",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "resolved_at",
						"title": "Resolved At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sample_size",
						"title": "Sample Size",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "sample_size_unit",
						"title": "Sample Size Unit",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "severity",
						"title": "Severity",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "started_at",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "threshold",
						"title": "Threshold",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_related_incident",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/incidents/{INCIDENT_ID}/related",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "incidents",
									},
									map[string]any{
										"var": "incident_id",
									},
									map[string]any{
										"lit": "related",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"incidents",
									"{incident_id}",
									"related",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"INCIDENT_ID": "incident_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "incident_id",
											"orig": "INCIDENT_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "abcd1234",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"incident_id",
										"limit",
										"order_by",
										"order_direction",
										"page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.incident",
						},
					},
				},
			},
			"list_subview_breakdown_value": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "breakdown_value",
						"title": "Breakdown Value",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "metric_value",
						"title": "Metric Value",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
				},
				"name": "list_subview_breakdown_value",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subview-metrics",
									},
									map[string]any{
										"var": "subview_metric_id",
									},
									map[string]any{
										"var": "subview_type",
									},
									map[string]any{
										"lit": "breakdown",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"subview-metrics",
									"{subview_metric_id}",
									"{subview_type}",
									"breakdown",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"METRIC_ID": "subview_metric_id",
										"SUBVIEW_TYPE": "subview_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subview_metric_id",
											"orig": "METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "playing_time",
										},
										map[string]any{
											"name": "subview_type",
											"orig": "SUBVIEW_TYPE",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "rendition",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "group_by",
											"orig": "group_by[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"group_by",
										"limit",
										"page",
										"subview_metric_id",
										"subview_type",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_subview_comparison_value": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dimension_value",
						"title": "Dimension Value",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "values",
						"title": "Values",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "list_subview_comparison_value",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/comparison",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subview-metrics",
									},
									map[string]any{
										"var": "subview_metric_id",
									},
									map[string]any{
										"var": "subview_type",
									},
									map[string]any{
										"lit": "comparison",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"subview-metrics",
									"{subview_metric_id}",
									"{subview_type}",
									"comparison",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"METRIC_ID": "subview_metric_id",
										"SUBVIEW_TYPE": "subview_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subview_metric_id",
											"orig": "METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "playing_time",
										},
										map[string]any{
											"name": "subview_type",
											"orig": "SUBVIEW_TYPE",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "rendition",
										},
									},
									"query": []any{
										map[string]any{
											"name": "breakdown_value_limit",
											"orig": "breakdown_value_limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "dimension",
											"orig": "dimension",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "country",
										},
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "group_by",
											"orig": "group_by[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "value",
											"orig": "values[]",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
											"example": []any{
												"US",
												"FR",
											},
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"breakdown_value_limit",
										"dimension",
										"filter",
										"group_by",
										"subview_metric_id",
										"subview_type",
										"timeframe",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_subview_dimension": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count.",
						"format": "int64",
					},
				},
				"name": "list_subview_dimension",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subview-metrics",
									},
									map[string]any{
										"var": "subview_type",
									},
									map[string]any{
										"lit": "dimensions",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"subview-metrics",
									"{subview_type}",
									"dimensions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"SUBVIEW_TYPE": "subview_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subview_type",
											"orig": "SUBVIEW_TYPE",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "rendition",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subview_type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_subview_dimension_value": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "timeframe",
						"title": "Timeframe",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
				},
				"name": "list_subview_dimension_value",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions/{DIMENSION_NAME}",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subview-metrics",
									},
									map[string]any{
										"var": "subview_metric_id",
									},
									map[string]any{
										"lit": "dimensions",
									},
									map[string]any{
										"var": "dimension_name",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"subview-metrics",
									"{subview_metric_id}",
									"dimensions",
									"{dimension_name}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"DIMENSION_NAME": "dimension_name",
										"SUBVIEW_TYPE": "subview_metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "dimension_name",
											"orig": "DIMENSION_NAME",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "country",
										},
										map[string]any{
											"name": "subview_metric_id",
											"orig": "SUBVIEW_TYPE",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "rendition",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "playing_time",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dimension_name",
										"filter",
										"limit",
										"order_by",
										"order_direction",
										"page",
										"query",
										"subview_metric_id",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_video_view_export": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "export_date",
						"title": "Export Date",
						"type": "`$STRING`",
						"req": true,
						"format": "date",
					},
					map[string]any{
						"name": "files",
						"title": "Files",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "list_video_view_export",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/exports/views",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"lit": "views",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"exports",
									"views",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"live_stream": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active_asset_id",
						"title": "Active Asset Id",
						"type": "`$STRING`",
						"short": "The Asset that is currently being created if there is an active broadcast.",
					},
					map[string]any{
						"name": "active_ingest_protocol",
						"title": "Active Ingest Protocol",
						"type": "`$STRING`",
						"short": "The protocol used for the active ingest stream.",
					},
					map[string]any{
						"name": "advanced_playback_policies",
						"title": "Advanced Playback Policies",
						"type": "`$ARRAY`",
						"short": "An array of playback policy objects that you want applied on this live stream and available through `playback_ids`.",
					},
					map[string]any{
						"name": "audio_only",
						"title": "Audio Only",
						"type": "`$BOOLEAN`",
						"short": "The live stream only processes the audio track if the value is set to true.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch).",
						"format": "int64",
					},
					map[string]any{
						"name": "embedded_subtitles",
						"title": "Embedded Subtitles",
						"type": "`$ARRAY`",
						"short": "Describes the embedded closed caption configuration of the incoming live stream.",
					},
					map[string]any{
						"name": "generated_subtitles",
						"title": "Generated Subtitles",
						"type": "`$ARRAY`",
						"short": "Configure the incoming live stream to include subtitles created with automatic speech recognition.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the Live Stream.",
					},
					map[string]any{
						"name": "latency_mode",
						"title": "Latency Mode",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Latency is the time from when the streamer transmits a frame of video to when you see it in the player.",
					},
					map[string]any{
						"name": "low_latency",
						"title": "Low Latency",
						"type": "`$BOOLEAN`",
						"short": "This field is deprecated.",
						"deprecated": true,
						"format": "boolean",
					},
					map[string]any{
						"name": "max_continuous_duration",
						"title": "Max Continuous Duration",
						"type": "`$INTEGER`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"short": "The time in seconds a live stream may be continuously active before being disconnected.",
						"format": "int32",
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"short": "Customer provided metadata about this live stream.",
					},
					map[string]any{
						"name": "new_asset_settings",
						"title": "New Asset Settings",
						"type": "`$OBJECT`",
						"short": "Updates the new asset settings to use to generate a new asset for this live stream.",
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary user-supplied metadata set for the asset.",
					},
					map[string]any{
						"name": "playback_ids",
						"title": "Playback Ids",
						"type": "`$ARRAY`",
						"short": "An array of Playback ID objects.",
					},
					map[string]any{
						"name": "playback_policies",
						"title": "Playback Policies",
						"type": "`$ARRAY`",
						"short": "An array of playback policy names that you want applied to this live stream and available through `playback_ids`.",
					},
					map[string]any{
						"name": "playback_policy",
						"title": "Playback Policy",
						"type": "`$ARRAY`",
						"short": "Deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "recent_asset_ids",
						"title": "Recent Asset Ids",
						"type": "`$ARRAY`",
						"short": "An array of strings with the most recent Asset IDs that were created from this Live Stream.",
					},
					map[string]any{
						"name": "reconnect_slate_url",
						"title": "Reconnect Slate Url",
						"type": "`$STRING`",
						"short": "The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media.",
					},
					map[string]any{
						"name": "reconnect_window",
						"title": "Reconnect Window",
						"type": "`$NUMBER`",
						"short": "When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s…",
						"format": "float",
					},
					map[string]any{
						"name": "reduced_latency",
						"title": "Reduced Latency",
						"type": "`$BOOLEAN`",
						"short": "This field is deprecated.",
						"deprecated": true,
						"format": "boolean",
					},
					map[string]any{
						"name": "simulcast_targets",
						"title": "Simulcast Targets",
						"type": "`$ARRAY`",
						"short": "Each Simulcast Target contains configuration details to broadcast (or \"restream\") a live stream to a third-party streaming service.",
					},
					map[string]any{
						"name": "srt_passphrase",
						"title": "Srt Passphrase",
						"type": "`$STRING`",
						"short": "Unique key used for encrypting a stream to a Mux SRT endpoint.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "`idle` indicates that there is no active broadcast.",
					},
					map[string]any{
						"name": "stream_key",
						"title": "Stream Key",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique key used for streaming to a Mux RTMP endpoint.",
					},
					map[string]any{
						"name": "test",
						"title": "Test",
						"type": "`$BOOLEAN`",
						"short": "True means this live stream is a test live stream.",
						"format": "boolean",
					},
					map[string]any{
						"name": "use_slate_for_standard_latency",
						"title": "Use Slate For Standard Latency",
						"type": "`$BOOLEAN`",
						"short": "By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux.",
						"format": "boolean",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "live_stream",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "reset-stream-key",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"reset-stream-key",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "reset_stream_key",
									"exist": []any{
										"live_stream_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/live-streams",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/live-streams",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "stream_key",
											"orig": "stream_key",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
										"status",
										"stream_key",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "playback-ids",
									},
									map[string]any{
										"var": "playback_id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"playback-ids",
									"{playback_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
										"PLAYBACK_ID": "playback_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "playback_id",
											"orig": "PLAYBACK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"live_stream_id",
										"playback_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "simulcast-targets",
									},
									map[string]any{
										"var": "simulcast_target_id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"simulcast-targets",
									"{simulcast_target_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
										"SIMULCAST_TARGET_ID": "simulcast_target_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "simulcast_target_id",
											"orig": "SIMULCAST_TARGET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"live_stream_id",
										"simulcast_target_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "new-asset-settings",
									},
									map[string]any{
										"lit": "static-renditions",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"new-asset-settings",
									"static-renditions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "new_asset_setting_static_rendition",
									"exist": []any{
										"live_stream_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/disable",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "disable",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"disable",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "disable",
									"exist": []any{
										"live_stream_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "embedded-subtitles",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"embedded-subtitles",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "embedded_subtitle",
									"exist": []any{
										"live_stream_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/enable",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "enable",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"enable",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "enable",
									"exist": []any{
										"live_stream_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "generated-subtitles",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"generated-subtitles",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "generated_subtitle",
									"exist": []any{
										"live_stream_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "new-asset-settings",
									},
									map[string]any{
										"lit": "static-renditions",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"new-asset-settings",
									"static-renditions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "new_asset_setting_static_rendition",
									"exist": []any{
										"live_stream_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.simulcast_target",
						},
					},
				},
			},
			"live_stream_playback_id": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "drm_configuration_id",
						"title": "Drm Configuration Id",
						"type": "`$STRING`",
						"short": "The DRM configuration used by this playback ID.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the PlaybackID",
					},
					map[string]any{
						"name": "policy",
						"title": "Policy",
						"type": "`$STRING`",
						"req": true,
						"short": "* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "live_stream_playback_id",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "playback-ids",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"playback-ids",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
										"PLAYBACK_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "PLAYBACK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"live_stream_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.live_stream",
						},
					},
				},
			},
			"metric_timeseries_data": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "timeframe",
						"title": "Timeframe",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
				},
				"name": "metric_timeseries_data",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/metrics/{METRIC_ID}/timeseries",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"var": "metric_id",
									},
									map[string]any{
										"lit": "timeseries",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"metrics",
									"{metric_id}",
									"timeseries",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"METRIC_ID": "metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "metric_id",
											"orig": "METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "video_startup_time",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "group_by",
											"orig": "group_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "measurement",
											"orig": "measurement",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "metric_filter",
											"orig": "metric_filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"group_by",
										"measurement",
										"metric_filter",
										"metric_id",
										"order_direction",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"moderate": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "moderate",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/moderate",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "moderate",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"moderate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/moderate/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "moderate",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"moderate",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"monitoring_breakdown": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "concurrent_viewers",
						"title": "Concurrent Viewers",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "display_value",
						"title": "Display Value",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metric_value",
						"title": "Metric Value",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "negative_impact",
						"title": "Negative Impact",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "starting_up_viewers",
						"title": "Starting Up Viewers",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "monitoring_breakdown",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "monitoring",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"var": "monitoring_metric_id",
									},
									map[string]any{
										"lit": "breakdown",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"monitoring",
									"metrics",
									"{monitoring_metric_id}",
									"breakdown",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"MONITORING_METRIC_ID": "monitoring_metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "monitoring_metric_id",
											"orig": "MONITORING_METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "current-concurrent-viewers",
										},
									},
									"query": []any{
										map[string]any{
											"name": "dimension",
											"orig": "dimension",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dimension",
										"filter",
										"monitoring_metric_id",
										"order_by",
										"order_direction",
										"timestamp",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"monitoring_breakdown_timeseries": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "values",
						"title": "Values",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "monitoring_breakdown_timeseries",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "monitoring",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"var": "monitoring_metric_id",
									},
									map[string]any{
										"lit": "breakdown-timeseries",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"monitoring",
									"metrics",
									"{monitoring_metric_id}",
									"breakdown-timeseries",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"MONITORING_METRIC_ID": "monitoring_metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "monitoring_metric_id",
											"orig": "MONITORING_METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "current-concurrent-viewers",
										},
									},
									"query": []any{
										map[string]any{
											"name": "dimension",
											"orig": "dimension",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dimension",
										"filter",
										"limit",
										"monitoring_metric_id",
										"order_by",
										"order_direction",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"monitoring_histogram_timeseries": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "average",
						"title": "Average",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "bucket_values",
						"title": "Bucket Values",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "max_percentage",
						"title": "Max Percentage",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "median",
						"title": "Median",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "p95",
						"title": "P95",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "sum",
						"title": "Sum",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "timestamp",
						"title": "Timestamp",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "monitoring_histogram_timeseries",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "monitoring",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"var": "monitoring_histogram_metric_id",
									},
									map[string]any{
										"lit": "histogram-timeseries",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"monitoring",
									"metrics",
									"{monitoring_histogram_metric_id}",
									"histogram-timeseries",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"MONITORING_HISTOGRAM_METRIC_ID": "monitoring_histogram_metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "monitoring_histogram_metric_id",
											"orig": "MONITORING_HISTOGRAM_METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "video-startup-time",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"monitoring_histogram_metric_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"monitoring_timeseries": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "concurrent_viewers",
						"title": "Concurrent Viewers",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
				},
				"name": "monitoring_timeseries",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "monitoring",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"var": "monitoring_metric_id",
									},
									map[string]any{
										"lit": "timeseries",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"monitoring",
									"metrics",
									"{monitoring_metric_id}",
									"timeseries",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"MONITORING_METRIC_ID": "monitoring_metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "monitoring_metric_id",
											"orig": "MONITORING_METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "current-concurrent-viewers",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"monitoring_metric_id",
										"timestamp",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"overall": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "timeframe",
						"title": "Timeframe",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
				},
				"name": "overall",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/metrics/{METRIC_ID}/overall",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"var": "metric_id",
									},
									map[string]any{
										"lit": "overall",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"metrics",
									"{metric_id}",
									"overall",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"METRIC_ID": "metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "metric_id",
											"orig": "METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "video_startup_time",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "measurement",
											"orig": "measurement",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "metric_filter",
											"orig": "metric_filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"measurement",
										"metric_filter",
										"metric_id",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"playback_restriction": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch).",
						"format": "int64",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the Playback Restriction.",
					},
					map[string]any{
						"name": "referrer",
						"title": "Referrer",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A list of domains allowed to play your videos.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch).",
						"format": "int64",
					},
					map[string]any{
						"name": "user_agent",
						"title": "User Agent",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Rules that control what user agents are allowed to play your videos.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "playback_restriction",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/playback-restrictions",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "playback-restrictions",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"playback-restrictions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/playback-restrictions",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "playback-restrictions",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"playback-restrictions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "playback-restrictions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"playback-restrictions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"PLAYBACK_RESTRICTION_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "PLAYBACK_RESTRICTION_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "playback-restrictions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"playback-restrictions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"PLAYBACK_RESTRICTION_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "PLAYBACK_RESTRICTION_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "playback-restrictions",
									},
									map[string]any{
										"var": "playback_restriction_id",
									},
									map[string]any{
										"lit": "referrer",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"playback-restrictions",
									"{playback_restriction_id}",
									"referrer",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"PLAYBACK_RESTRICTION_ID": "playback_restriction_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "playback_restriction_id",
											"orig": "PLAYBACK_RESTRICTION_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "referrer",
									"exist": []any{
										"playback_restriction_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "playback-restrictions",
									},
									map[string]any{
										"var": "playback_restriction_id",
									},
									map[string]any{
										"lit": "user_agent",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"playback-restrictions",
									"{playback_restriction_id}",
									"user_agent",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"PLAYBACK_RESTRICTION_ID": "playback_restriction_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "playback_restriction_id",
											"orig": "PLAYBACK_RESTRICTION_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "user_agent",
									"exist": []any{
										"playback_restriction_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"real_time_breakdown": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "concurrent_viewers",
						"title": "Concurrent Viewers",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "display_value",
						"title": "Display Value",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metric_value",
						"title": "Metric Value",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "negative_impact",
						"title": "Negative Impact",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "starting_up_viewers",
						"title": "Starting Up Viewers",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "real_time_breakdown",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "realtime",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"var": "realtime_metric_id",
									},
									map[string]any{
										"lit": "breakdown",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"realtime",
									"metrics",
									"{realtime_metric_id}",
									"breakdown",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"REALTIME_METRIC_ID": "realtime_metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "realtime_metric_id",
											"orig": "REALTIME_METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "current-concurrent-viewers",
										},
									},
									"query": []any{
										map[string]any{
											"name": "dimension",
											"orig": "dimension",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dimension",
										"filter",
										"order_by",
										"order_direction",
										"realtime_metric_id",
										"timestamp",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"real_time_histogram_timeseries": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "average",
						"title": "Average",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "bucket_values",
						"title": "Bucket Values",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "max_percentage",
						"title": "Max Percentage",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "median",
						"title": "Median",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "p95",
						"title": "P95",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
					map[string]any{
						"name": "sum",
						"title": "Sum",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "timestamp",
						"title": "Timestamp",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "real_time_histogram_timeseries",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "realtime",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"var": "realtime_histogram_metric_id",
									},
									map[string]any{
										"lit": "histogram-timeseries",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"realtime",
									"metrics",
									"{realtime_histogram_metric_id}",
									"histogram-timeseries",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"REALTIME_HISTOGRAM_METRIC_ID": "realtime_histogram_metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "realtime_histogram_metric_id",
											"orig": "REALTIME_HISTOGRAM_METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "video-startup-time",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"realtime_histogram_metric_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"real_time_timeseries": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "concurrent_viewers",
						"title": "Concurrent Viewers",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$NUMBER`",
						"req": true,
						"format": "double",
					},
				},
				"name": "real_time_timeseries",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "realtime",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"var": "realtime_metric_id",
									},
									map[string]any{
										"lit": "timeseries",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"realtime",
									"metrics",
									"{realtime_metric_id}",
									"timeseries",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"REALTIME_METRIC_ID": "realtime_metric_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "realtime_metric_id",
											"orig": "REALTIME_METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "current-concurrent-viewers",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"realtime_metric_id",
										"timestamp",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"signal_live_stream_complete": map[string]any{
				"fields": []any{},
				"name": "signal_live_stream_complete",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/complete",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "complete",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"complete",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"live_stream_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.live_stream",
						},
					},
				},
			},
			"signing_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Time at which the object was created.",
						"format": "int64",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the Signing Key.",
					},
					map[string]any{
						"name": "private_key",
						"title": "Private Key",
						"type": "`$STRING`",
						"short": "A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/).",
						"format": "byte",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "signing_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/system/v1/signing-keys",
								"segments": []any{
									map[string]any{
										"lit": "system",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "signing-keys",
									},
								},
								"parts": []any{
									"system",
									"v1",
									"signing-keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/signing-keys",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "signing-keys",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"signing-keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/system/v1/signing-keys",
								"segments": []any{
									map[string]any{
										"lit": "system",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "signing-keys",
									},
								},
								"parts": []any{
									"system",
									"v1",
									"signing-keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/signing-keys",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "signing-keys",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"signing-keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/system/v1/signing-keys/{SIGNING_KEY_ID}",
								"segments": []any{
									map[string]any{
										"lit": "system",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "signing-keys",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"system",
									"v1",
									"signing-keys",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"SIGNING_KEY_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "SIGNING_KEY_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/signing-keys/{SIGNING_KEY_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "signing-keys",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"signing-keys",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"SIGNING_KEY_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "SIGNING_KEY_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/system/v1/signing-keys/{SIGNING_KEY_ID}",
								"segments": []any{
									map[string]any{
										"lit": "system",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "signing-keys",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"system",
									"v1",
									"signing-keys",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"SIGNING_KEY_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "SIGNING_KEY_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"simulcast_target": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "error_severity",
						"title": "Error Severity",
						"type": "`$STRING`",
						"short": "The severity of the error encountered by the simulcast target.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the Simulcast Target",
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary user-supplied metadata set when creating a simulcast target.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the simulcast target.",
					},
					map[string]any{
						"name": "stream_key",
						"title": "Stream Key",
						"type": "`$STRING`",
						"short": "Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to.",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The RTMP(s) or SRT endpoint for a simulcast destination.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "simulcast_target",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "simulcast-targets",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"simulcast-targets",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"live_stream_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live-streams",
									},
									map[string]any{
										"var": "live_stream_id",
									},
									map[string]any{
										"lit": "simulcast-targets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"live-streams",
									"{live_stream_id}",
									"simulcast-targets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"LIVE_STREAM_ID": "live_stream_id",
										"SIMULCAST_TARGET_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "SIMULCAST_TARGET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "live_stream_id",
											"orig": "LIVE_STREAM_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"live_stream_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.live_stream",
						},
					},
				},
			},
			"static_rendition": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary user-supplied metadata set for the static rendition.",
					},
					map[string]any{
						"name": "resolution",
						"title": "Resolution",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "static_rendition",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/assets/{ASSET_ID}/static-renditions",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "static-renditions",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"static-renditions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.asset",
						},
					},
				},
			},
			"subview_breakdown_timeseries": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "values",
						"title": "Values",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "subview_breakdown_timeseries",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown-timeseries",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subview-metrics",
									},
									map[string]any{
										"var": "subview_metric_id",
									},
									map[string]any{
										"var": "subview_type",
									},
									map[string]any{
										"lit": "breakdown-timeseries",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"subview-metrics",
									"{subview_metric_id}",
									"{subview_type}",
									"breakdown-timeseries",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"METRIC_ID": "subview_metric_id",
										"SUBVIEW_TYPE": "subview_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subview_metric_id",
											"orig": "METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "playing_time",
										},
										map[string]any{
											"name": "subview_type",
											"orig": "SUBVIEW_TYPE",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "rendition",
										},
									},
									"query": []any{
										map[string]any{
											"name": "breakdown_value_limit",
											"orig": "breakdown_value_limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "group_by",
											"orig": "group_by[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "time_granularity",
											"orig": "time_granularity",
											"type": "`$STRING`",
											"kind": "query",
											"example": "hour",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"breakdown_value_limit",
										"filter",
										"group_by",
										"subview_metric_id",
										"subview_type",
										"time_granularity",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subview_overall_value": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "timeframe",
						"title": "Timeframe",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Always `null` for this endpoint — a single aggregate value has no row count.",
						"format": "int64",
					},
				},
				"name": "subview_overall_value",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/overall",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subview-metrics",
									},
									map[string]any{
										"var": "subview_metric_id",
									},
									map[string]any{
										"var": "subview_type",
									},
									map[string]any{
										"lit": "overall",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"subview-metrics",
									"{subview_metric_id}",
									"{subview_type}",
									"overall",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"METRIC_ID": "subview_metric_id",
										"SUBVIEW_TYPE": "subview_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subview_metric_id",
											"orig": "METRIC_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "playing_time",
										},
										map[string]any{
											"name": "subview_type",
											"orig": "SUBVIEW_TYPE",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "rendition",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"subview_metric_id",
										"subview_type",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"summarize": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "summarize",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/summarize",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "summarize",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"summarize",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/summarize/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "summarize",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"summarize",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"transcription_vocabulary": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch).",
						"format": "int64",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the Transcription Vocabulary",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The user-supplied name of the Transcription Vocabulary.",
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary user-supplied metadata set for the Transcription Vocabulary.",
					},
					map[string]any{
						"name": "phrases",
						"title": "Phrases",
						"type": "`$ARRAY`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"short": "Phrases, individual words, or proper names to include in the Transcription Vocabulary.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch).",
						"format": "int64",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "transcription_vocabulary",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/transcription-vocabularies",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transcription-vocabularies",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"transcription-vocabularies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/transcription-vocabularies",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transcription-vocabularies",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"transcription-vocabularies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transcription-vocabularies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"transcription-vocabularies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"TRANSCRIPTION_VOCABULARY_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "TRANSCRIPTION_VOCABULARY_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transcription-vocabularies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"transcription-vocabularies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"TRANSCRIPTION_VOCABULARY_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "TRANSCRIPTION_VOCABULARY_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transcription-vocabularies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"transcription-vocabularies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"TRANSCRIPTION_VOCABULARY_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "TRANSCRIPTION_VOCABULARY_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"translate_audio": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "translate_audio",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/translate-audio",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "translate-audio",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"translate-audio",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/translate-audio/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "translate-audio",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"translate-audio",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"translate_caption": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the job was created.",
					},
					map[string]any{
						"name": "directive",
						"title": "Directive",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The directive run that dispatched this job.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "Error details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique job identifier.",
					},
					map[string]any{
						"name": "outputs",
						"title": "Outputs",
						"type": "`$OBJECT`",
						"short": "Workflow results.",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary string supplied at creation, returned as-is.",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related Mux resources linked to this job.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current job status.",
					},
					map[string]any{
						"name": "units_consumed",
						"title": "Units Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of Mux AI units consumed by this job.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of the job's last state transition (e.g.",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "translate_caption",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/robots/v0/jobs/translate-captions",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "translate-captions",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"translate-captions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/robots/v0/jobs/translate-captions/{JOB_ID}",
								"segments": []any{
									map[string]any{
										"lit": "robots",
									},
									map[string]any{
										"lit": "v0",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "translate-captions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"robots",
									"v0",
									"jobs",
									"translate-captions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"JOB_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "JOB_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_asset_track": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auto_language_confidence",
						"title": "Auto Language Confidence",
						"type": "`$NUMBER`",
						"short": "The confidence value (0-1) of the determined language.",
						"format": "double",
					},
					map[string]any{
						"name": "closed_captions",
						"title": "Closed Captions",
						"type": "`$BOOLEAN`",
						"short": "Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).",
					},
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$NUMBER`",
						"short": "The duration in seconds of the track media.",
						"format": "double",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the Track",
					},
					map[string]any{
						"name": "language_code",
						"title": "Language Code",
						"type": "`$STRING`",
						"short": "The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'.",
					},
					map[string]any{
						"name": "max_channels",
						"title": "Max Channels",
						"type": "`$INTEGER`",
						"short": "The maximum number of audio channels the track supports.",
						"format": "int64",
					},
					map[string]any{
						"name": "max_frame_rate",
						"title": "Max Frame Rate",
						"type": "`$NUMBER`",
						"short": "The maximum frame rate available for the track.",
						"format": "double",
					},
					map[string]any{
						"name": "max_height",
						"title": "Max Height",
						"type": "`$INTEGER`",
						"short": "The maximum height in pixels available for the track.",
						"format": "int64",
					},
					map[string]any{
						"name": "max_width",
						"title": "Max Width",
						"type": "`$INTEGER`",
						"short": "The maximum width in pixels available for the track.",
						"format": "int64",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the track containing a human-readable description.",
					},
					map[string]any{
						"name": "passthrough",
						"title": "Passthrough",
						"type": "`$STRING`",
						"short": "Arbitrary user-supplied metadata set for the track either when creating the asset or track.",
					},
					map[string]any{
						"name": "primary",
						"title": "Primary",
						"type": "`$BOOLEAN`",
						"short": "For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "The status of the track.",
					},
					map[string]any{
						"name": "text_source",
						"title": "Text Source",
						"type": "`$STRING`",
						"short": "The source of the text contained in a Track of type `text`.",
					},
					map[string]any{
						"name": "text_type",
						"title": "Text Type",
						"type": "`$STRING`",
						"short": "This parameter is only set for `text` type tracks.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "The type of track",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "update_asset_track",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_id",
									},
									map[string]any{
										"lit": "tracks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"assets",
									"{asset_id}",
									"tracks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ASSET_ID": "asset_id",
										"TRACK_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_id",
											"orig": "ASSET_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "TRACK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.asset",
						},
					},
				},
			},
			"upload": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "asset_id",
						"title": "Asset Id",
						"type": "`$STRING`",
						"short": "Only set once the upload is in the `asset_created` state.",
					},
					map[string]any{
						"name": "cors_origin",
						"title": "Cors Origin",
						"type": "`$STRING`",
						"req": true,
						"short": "If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers.",
					},
					map[string]any{
						"name": "error",
						"title": "Error",
						"type": "`$OBJECT`",
						"short": "Only set if an error occurred during asset creation.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the Direct Upload.",
					},
					map[string]any{
						"name": "new_asset_settings",
						"title": "New Asset Settings",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "test",
						"title": "Test",
						"type": "`$BOOLEAN`",
						"short": "Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset.",
						"format": "boolean",
					},
					map[string]any{
						"name": "timeout",
						"title": "Timeout",
						"type": "`$INTEGER`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"short": "Max time in seconds for the signed upload URL to be valid.",
						"format": "int32",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "The URL to upload the associated source media to.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "upload",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/video/v1/uploads",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "uploads",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"uploads",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/uploads",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "uploads",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"uploads",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/video/v1/uploads/{UPLOAD_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "uploads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"uploads",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"UPLOAD_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "UPLOAD_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "abcd1234",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/video/v1/uploads/{UPLOAD_ID}/cancel",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "uploads",
									},
									map[string]any{
										"var": "upload_id",
									},
									map[string]any{
										"lit": "cancel",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"uploads",
									"{upload_id}",
									"cancel",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"UPLOAD_ID": "upload_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "upload_id",
											"orig": "UPLOAD_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "abcd1234",
										},
									},
								},
								"select": map[string]any{
									"$action": "cancel",
									"exist": []any{
										"upload_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"url_signing_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "url_signing_key",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/video/v1/signing-keys/{SIGNING_KEY_ID}",
								"segments": []any{
									map[string]any{
										"lit": "video",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "signing-keys",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"video",
									"v1",
									"signing-keys",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"SIGNING_KEY_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "SIGNING_KEY_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"usage_export": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"req": true,
						"short": "The calendar date this CSV covers, in `YYYY-MM-DD` format.",
						"format": "date",
					},
					map[string]any{
						"name": "download_url",
						"title": "Download Url",
						"type": "`$STRING`",
						"req": true,
						"short": "A pre-signed URL to download the CSV.",
					},
					map[string]any{
						"name": "download_url_expires_at",
						"title": "Download Url Expires At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds since epoch) at which `download_url` expires.",
					},
					map[string]any{
						"name": "file_size",
						"title": "File Size",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Uncompressed size of the CSV file in bytes.",
					},
				},
				"name": "usage_export",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/system/v1/usage/exports",
								"segments": []any{
									map[string]any{
										"lit": "system",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "usage",
									},
									map[string]any{
										"lit": "exports",
									},
								},
								"parts": []any{
									"system",
									"v1",
									"usage",
									"exports",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "download_url_ttl",
											"orig": "download_url_ttl",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 3600,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"download_url_ttl",
										"limit",
										"page",
										"timeframe",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"video_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "country_code",
						"title": "Country Code",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "error_type_id",
						"title": "Error Type Id",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "playback_failure",
						"title": "Playback Failure",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "player_error_code",
						"title": "Player Error Code",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "player_error_message",
						"title": "Player Error Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "timeframe",
						"title": "Timeframe",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_row_count",
						"title": "Total Row Count",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "video_title",
						"title": "Video Title",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "view_end",
						"title": "View End",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "view_start",
						"title": "View Start",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "viewer_application_name",
						"title": "Viewer Application Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "viewer_experience_score",
						"title": "Viewer Experience Score",
						"type": "`$NUMBER`",
						"req": true,
						"format": "float",
					},
					map[string]any{
						"name": "viewer_os_family",
						"title": "Viewer Os Family",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "watch_time",
						"title": "Watch Time",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "video_view",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/video-views",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "video-views",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"video-views",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "error_id",
											"orig": "error_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "metric_filter",
											"orig": "metric_filters[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "timeframe",
											"orig": "timeframe[]",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "viewer_id",
											"orig": "viewer_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"error_id",
										"filter",
										"limit",
										"metric_filter",
										"order_direction",
										"page",
										"timeframe",
										"viewer_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/v1/video-views/{VIDEO_VIEW_ID}",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "video-views",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"data",
									"v1",
									"video-views",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"VIDEO_VIEW_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "VIDEO_VIEW_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "abcd1234",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"title": "Address",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The URL where Mux sends webhook notifications.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Time at which the webhook was created, as an ISO 8601 UTC datetime.",
						"format": "date-time",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether Mux attempts to deliver notifications to this webhook.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the webhook.",
					},
					map[string]any{
						"name": "signing_secret",
						"title": "Signing Secret",
						"type": "`$STRING`",
						"short": "Secret used to verify that webhook payloads were sent by Mux.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/system/v1/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "system",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"system",
									"v1",
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/system/v1/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "system",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"system",
									"v1",
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/system/v1/webhooks/{WEBHOOK_ID}",
								"segments": []any{
									map[string]any{
										"lit": "system",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"system",
									"v1",
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"WEBHOOK_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "WEBHOOK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/system/v1/webhooks/{WEBHOOK_ID}",
								"segments": []any{
									map[string]any{
										"lit": "system",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"system",
									"v1",
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"WEBHOOK_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "WEBHOOK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/system/v1/webhooks/{WEBHOOK_ID}",
								"segments": []any{
									map[string]any{
										"lit": "system",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"system",
									"v1",
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"WEBHOOK_ID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "WEBHOOK_ID",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"who_am_i": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "access_token_name",
						"title": "Access Token Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "environment_id",
						"title": "Environment Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "environment_name",
						"title": "Environment Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "environment_type",
						"title": "Environment Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "organization_id",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "organization_name",
						"title": "Organization Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "permissions",
						"title": "Permissions",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "who_am_i",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/system/v1/whoami",
								"segments": []any{
									map[string]any{
										"lit": "system",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "whoami",
									},
								},
								"parts": []any{
									"system",
									"v1",
									"whoami",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
