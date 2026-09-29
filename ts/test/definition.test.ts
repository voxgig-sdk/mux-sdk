import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "annotation",
    "accessor": "Annotation",
    "op": "create",
    "method": "POST",
    "path": "/data/v1/annotations",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "note": "This is a note",
        "date": "2025-04-23T20:00:00Z",
        "sub_property_id": "123456"
      },
      "total_row_count": 1,
      "timeframe": [
        1745434800,
        1745438400
      ]
    },
    "idField": "id"
  },
  {
    "entity": "annotation",
    "accessor": "Annotation",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/annotations",
    "args": [],
    "select": {
      "limit": "v1",
      "order_direction": "v1",
      "page": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page",
      "order_direction",
      "timeframe[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "id": "123e4567-e89b-12d3-a456-426614174000",
          "note": "This is one note",
          "date": "2025-04-23T19:10:00Z",
          "sub_property_id": "123456"
        },
        {
          "id": "234e4567-e89b-12d3-a456-426614174000",
          "note": "This is another note",
          "date": "2025-04-23T19:20:00Z",
          "sub_property_id": null
        }
      ],
      "total_row_count": 2,
      "timeframe": [
        1745434800,
        1745438400
      ]
    },
    "idField": "id"
  },
  {
    "entity": "annotation",
    "accessor": "Annotation",
    "op": "load",
    "method": "GET",
    "path": "/data/v1/annotations/{ANNOTATION_ID}",
    "args": [
      {
        "name": "id",
        "wire": "ANNOTATION_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "note": "This is a note",
        "date": "2025-04-23T19:10:00Z",
        "sub_property_id": "123456"
      },
      "total_row_count": 1,
      "timeframe": [
        1745434800,
        1745438400
      ]
    },
    "idField": "id"
  },
  {
    "entity": "annotation",
    "accessor": "Annotation",
    "op": "remove",
    "method": "DELETE",
    "path": "/data/v1/annotations/{ANNOTATION_ID}",
    "args": [
      {
        "name": "id",
        "wire": "ANNOTATION_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "annotation",
    "accessor": "Annotation",
    "op": "update",
    "method": "PATCH",
    "path": "/data/v1/annotations/{ANNOTATION_ID}",
    "args": [
      {
        "name": "id",
        "wire": "ANNOTATION_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "note": "This is a note",
        "date": "2025-04-23T20:00:00Z",
        "sub_property_id": "123456"
      },
      "total_row_count": 1,
      "timeframe": [
        1745434800,
        1745438400
      ]
    },
    "idField": "id"
  },
  {
    "entity": "ask_question",
    "accessor": "AskQuestion",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/ask-questions",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "ask-questions",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "questions": [
            {
              "question": "Is this video about glasses?"
            },
            {
              "question": "What is the primary subject?",
              "answer_options": [
                "glasses",
                "watches",
                "shoes"
              ]
            },
            {
              "question": "Describe the primary subject in one sentence.",
              "free_form_reply": true
            }
          ],
          "max_free_form_answer_length": 300,
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            }
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "ask_question",
    "accessor": "AskQuestion",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/ask-questions/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "ask-questions",
        "status": "completed",
        "units_consumed": 1,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "questions": [
            {
              "question": "Is this video about glasses?"
            },
            {
              "question": "What is the primary subject?",
              "answer_options": [
                "glasses",
                "watches",
                "shoes"
              ]
            },
            {
              "question": "Describe the primary subject in one sentence.",
              "free_form_reply": true
            }
          ],
          "max_free_form_answer_length": 300,
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            }
          }
        },
        "outputs": {
          "answers": [
            {
              "question": "Is this video about glasses?",
              "answer": "no",
              "confidence": 0.92,
              "reasoning": "No glasses appear on screen and the narration does not mention eyewear.",
              "skipped": false
            },
            {
              "question": "What is the primary subject?",
              "answer": "watches",
              "confidence": 0.88,
              "reasoning": "Multiple wristwatches are featured prominently throughout the video.",
              "skipped": false
            },
            {
              "question": "Describe the primary subject in one sentence.",
              "answer": "A close-up showcase of luxury wristwatches arranged on a wooden display.",
              "confidence": 0.86,
              "reasoning": "Visual evidence shows several wristwatches displayed against a wooden backdrop with no other competing subjects.",
              "skipped": false
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/assets",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "status": "preparing",
        "playback_ids": [
          {
            "policy": "public",
            "id": "uNbxnGLKJ00yfbijDO8COxTOyVKT01xpxW"
          }
        ],
        "master_access": "none",
        "id": "SqQnqz6s5MBuXGvJaUWdXuXM93J9Q2yv",
        "encoding_tier": "baseline",
        "video_quality": "basic",
        "created_at": "1607452572",
        "max_resolution_tier": "1080p",
        "progress": {
          "state": "ingesting",
          "progress": 0
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "list",
    "method": "GET",
    "path": "/video/v1/assets",
    "args": [],
    "select": {
      "cursor": "v1",
      "limit": "v1",
      "live_stream_id": "v1",
      "page": "v1",
      "upload_id": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page",
      "cursor",
      "live_stream_id",
      "upload_id"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "next_cursor": "tF601CUtCLmnYuHW01Vwl6BWcWTNv001uoaiK4C01jqk1acX802plAjZhTQ",
      "data": [
        {
          "tracks": [
            {
              "type": "video",
              "max_width": 1920,
              "max_height": 800,
              "max_frame_rate": 24,
              "id": "HK01Bq7FrEQmIu3QpRiZZ98HQOOZjm6BYyg17eEunlyo",
              "duration": 734.166667
            },
            {
              "type": "audio",
              "max_channels": 2,
              "id": "nNKHJqw2G9cE019AoK16CJr3O27gGnbtW4w525hJWqWw",
              "duration": 734.143991
            }
          ],
          "status": "ready",
          "playback_ids": [
            {
              "policy": "public",
              "id": "85g23gYz7NmQu02YsY81ihuod6cZMxCp017ZrfglyLCKc"
            }
          ],
          "max_stored_resolution": "HD",
          "resolution_tier": "1080p",
          "max_stored_frame_rate": 24,
          "master_access": "none",
          "id": "8jd7M77xQgf2NzuocJRPYdSdEfY5dLlcRwFARtgQqU4",
          "encoding_tier": "baseline",
          "video_quality": "basic",
          "duration": 734.25,
          "created_at": "1609869152",
          "aspect_ratio": "12:5",
          "max_resolution_tier": "1080p",
          "progress": {
            "state": "completed",
            "progress": 100
          }
        },
        {
          "tracks": [
            {
              "type": "video",
              "max_width": 1920,
              "max_height": 1080,
              "max_frame_rate": 29.97,
              "id": "RiyQPM31a1SPtfI802bEP2zD02F5FQVNL801FRHeE5t01G4",
              "duration": 23.8238
            },
            {
              "type": "audio",
              "max_channels": 2,
              "id": "LvINTciHVoC017knMCH01y9pSi5OrDLCRaBPNDAoNJcmg",
              "duration": 23.823792
            }
          ],
          "status": "ready",
          "playback_ids": [
            {
              "policy": "public",
              "id": "vAFLI2eKFFicXX00iHBS2vqt5JjJGg5HV6fQ4Xijgt1I"
            }
          ],
          "max_stored_resolution": "HD",
          "resolution_tier": "1080p",
          "max_stored_frame_rate": 29.97,
          "master_access": "none",
          "id": "lJ4bGGsp7ZlPf02nMg015W02iHQLN9XnuuLRBsPS00xqd68",
          "encoding_tier": "smart",
          "video_quality": "plus",
          "duration": 23.857167,
          "created_at": "1609868768",
          "aspect_ratio": "16:9",
          "max_resolution_tier": "1080p",
          "progress": {
            "state": "completed",
            "progress": 100
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "load",
    "method": "GET",
    "path": "/video/v1/assets/{ASSET_ID}",
    "args": [
      {
        "name": "id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "tracks": [
          {
            "type": "video",
            "max_width": 1920,
            "max_height": 1080,
            "max_frame_rate": 29.97,
            "id": "RiyQPM31a1SPtfI802bEP2zD02F5FQVNL801FRHeE5t01G4",
            "duration": 23.8238
          },
          {
            "type": "audio",
            "max_channels": 2,
            "id": "LvINTciHVoC017knMCH01y9pSi5OrDLCRaBPNDAoNJcmg",
            "duration": 23.823792
          }
        ],
        "status": "ready",
        "resolution_tier": "1080p",
        "playback_ids": [
          {
            "policy": "public",
            "id": "vAFLI2eKFFicXX00iHBS2vqt5JjJGg5HV6fQ4Xijgt1I"
          }
        ],
        "passthrough": "example",
        "max_stored_resolution": "HD",
        "max_stored_frame_rate": 29.97,
        "max_resolution_tier": "1080p",
        "progress": {
          "state": "completed",
          "progress": 100
        },
        "master_access": "none",
        "id": "lJ4bGGsp7ZlPf02nMg015W02iHQLN9XnuuLRBsPS00xqd68",
        "encoding_tier": "baseline",
        "video_quality": "basic",
        "duration": 23.857167,
        "created_at": "1609868768",
        "aspect_ratio": "16:9"
      }
    },
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      },
      {
        "name": "playback_id",
        "wire": "PLAYBACK_ID",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/assets/{ASSET_ID}/static-renditions/{STATIC_RENDITION_ID}",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      },
      {
        "name": "static_rendition_id",
        "wire": "STATIC_RENDITION_ID",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      },
      {
        "name": "track_id",
        "wire": "TRACK_ID",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/assets/{ASSET_ID}/shots",
    "action": "shot",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/assets/{ASSET_ID}/thumbnail-time",
    "action": "thumbnail_time",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/assets/{ASSET_ID}",
    "args": [
      {
        "name": "id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/assets/{ASSET_ID}/master-access",
    "action": "master_access",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "tracks": [
          {
            "type": "video",
            "max_width": 1920,
            "max_height": 1080,
            "max_frame_rate": 29.97,
            "id": "RiyQPM31a1SPtfI802bEP2zD02F5FQVNL801FRHeE5t01G4",
            "duration": 23.8238
          },
          {
            "type": "audio",
            "max_channels": 2,
            "id": "LvINTciHVoC017knMCH01y9pSi5OrDLCRaBPNDAoNJcmg",
            "duration": 23.823792
          }
        ],
        "status": "ready",
        "playback_ids": [
          {
            "policy": "public",
            "id": "Lj02VZDorh9hCV00flNqPli8fmwf6KEppug01w8zDEYVlQ"
          }
        ],
        "max_stored_resolution": "HD",
        "resolution_tier": "1080p",
        "max_stored_frame_rate": 29.97,
        "master_access": "temporary",
        "master": {
          "status": "preparing"
        },
        "id": "lJ4bGGsp7ZlPf02nMg015W02iHQLN9XnuuLRBsPS00xqd68",
        "encoding_tier": "baseline",
        "video_quality": "basic",
        "duration": 23.857167,
        "created_at": "1609868768",
        "aspect_ratio": "16:9",
        "max_resolution_tier": "1080p",
        "progress": {
          "state": "completed",
          "progress": 100
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/assets/{ASSET_ID}/mp4-support",
    "action": "mp4_support",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "tracks": [
          {
            "type": "video",
            "max_width": 1920,
            "max_height": 1080,
            "max_frame_rate": 29.97,
            "id": "RiyQPM31a1SPtfI802bEP2zD02F5FQVNL801FRHeE5t01G4",
            "duration": 23.8238
          },
          {
            "type": "audio",
            "max_channels": 2,
            "id": "LvINTciHVoC017knMCH01y9pSi5OrDLCRaBPNDAoNJcmg",
            "duration": 23.823792
          }
        ],
        "status": "ready",
        "static_renditions": {
          "status": "preparing"
        },
        "playback_ids": [
          {
            "policy": "public",
            "id": "Lj02VZDorh9hCV00flNqPli8fmwf6KEppug01w8zDEYVlQ"
          }
        ],
        "mp4_support": "capped-1080p",
        "max_stored_resolution": "HD",
        "resolution_tier": "1080p",
        "max_stored_frame_rate": 29.97,
        "master_access": "none",
        "id": "lJ4bGGsp7ZlPf02nMg015W02iHQLN9XnuuLRBsPS00xqd68",
        "encoding_tier": "smart",
        "video_quality": "plus",
        "duration": 23.857167,
        "created_at": "1609868768",
        "aspect_ratio": "16:9",
        "max_resolution_tier": "1080p",
        "progress": {
          "state": "completed",
          "progress": 100
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "asset",
    "accessor": "Asset",
    "op": "update",
    "method": "PATCH",
    "path": "/video/v1/assets/{ASSET_ID}",
    "args": [
      {
        "name": "id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "tracks": [
          {
            "type": "video",
            "max_width": 1920,
            "max_height": 1080,
            "max_frame_rate": 29.97,
            "id": "RiyQPM31a1SPtfI802bEP2zD02F5FQVNL801FRHeE5t01G4",
            "duration": 23.8238
          },
          {
            "type": "audio",
            "max_channels": 2,
            "id": "LvINTciHVoC017knMCH01y9pSi5OrDLCRaBPNDAoNJcmg",
            "duration": 23.823792
          }
        ],
        "status": "ready",
        "playback_ids": [
          {
            "policy": "public",
            "id": "vAFLI2eKFFicXX00iHBS2vqt5JjJGg5HV6fQ4Xijgt1I"
          }
        ],
        "max_stored_resolution": "HD",
        "resolution_tier": "1080p",
        "max_stored_frame_rate": 29.97,
        "master_access": "none",
        "id": "lJ4bGGsp7ZlPf02nMg015W02iHQLN9XnuuLRBsPS00xqd68",
        "encoding_tier": "baseline",
        "video_quality": "basic",
        "duration": 23.857167,
        "created_at": "1609868768",
        "updated_at": "1609869000",
        "aspect_ratio": "16:9",
        "passthrough": "Example",
        "max_resolution_tier": "1080p",
        "progress": {
          "state": "completed",
          "progress": 100
        },
        "thumbnail_time": 12.67
      }
    },
    "idField": "id"
  },
  {
    "entity": "asset_or_live_stream_id",
    "accessor": "AssetOrLiveStreamId",
    "op": "load",
    "method": "GET",
    "path": "/video/v1/playback-ids/{PLAYBACK_ID}",
    "args": [
      {
        "name": "playback_id",
        "wire": "PLAYBACK_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "a1B2c3D4e5F6g7H8i9",
        "policy": "public",
        "object": {
          "type": "asset",
          "id": "123456789012345678"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "asset_playback_id",
    "accessor": "AssetPlaybackId",
    "op": "load",
    "method": "GET",
    "path": "/video/v1/assets/{ASSET_ID}/playback-ids/{PLAYBACK_ID}",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "PLAYBACK_ID",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "policy": "public",
        "id": "vAFLI2eKFFicXX00iHBS2vqt5JjJGg5HV6fQ4Xijgt1I"
      }
    },
    "idField": "id"
  },
  {
    "entity": "asset_shot",
    "accessor": "AssetShot",
    "op": "load",
    "method": "GET",
    "path": "/video/v1/assets/{ASSET_ID}/shots",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "status": "completed",
        "shots_manifest_url": "https://artifacts.mux.com/a/QrgJ00hSt802eYjdclSMdH2vCpHhxBWxgbyLrPFTziJhQ/shots.json?<SIGNATURE>"
      }
    },
    "idField": "id"
  },
  {
    "entity": "create_playback_id",
    "accessor": "CreatePlaybackId",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/assets/{ASSET_ID}/playback-ids",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "policy": "public",
        "id": "Lj02VZDorh9hCV00flNqPli8fmwf6KEppug01w8zDEYVlQ"
      }
    },
    "idField": "id"
  },
  {
    "entity": "create_playback_id",
    "accessor": "CreatePlaybackId",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "policy": "public",
        "id": "4O902oOPU100s7XIQgOeY01U7dHzYlBe26zi3Sq01EJqnxw"
      }
    },
    "idField": "id"
  },
  {
    "entity": "create_track",
    "accessor": "CreateTrack",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/assets/{ASSET_ID}/tracks",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "type": "text",
        "text_type": "subtitles",
        "status": "preparing",
        "passthrough": "English",
        "name": "English",
        "language_code": "en-US",
        "id": "xBe7u01029ipxBLQhYzZCJ1cke01zCkuUsgnYtH0017nNzbpv2YcsoMDmw",
        "closed_captions": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "directive",
    "accessor": "Directive",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/directives/{DIRECTIVE_ID}/runs",
    "action": "run",
    "args": [
      {
        "name": "directive_id",
        "wire": "DIRECTIVE_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "run_id": "x",
        "subject_id": "x",
        "status": "pending"
      }
    },
    "idField": "id"
  },
  {
    "entity": "directive",
    "accessor": "Directive",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/directives",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "id": "x",
        "name": "x",
        "subject": {
          "type": "video.asset"
        },
        "resources": [
          {
            "kind": "caption",
            "language": "en",
            "reference_id": "captions_en",
            "source": {
              "via": "external"
            },
            "type": "video.asset.track"
          }
        ],
        "workflows": [
          {
            "inputs": [
              "x"
            ],
            "params": {
              "description_length": 1,
              "language_code": "x",
              "output_language_code": "x",
              "output_steering": {},
              "prompt_overrides": {},
              "tag_count": 1,
              "title_length": 1,
              "tone": "neutral",
              "update_asset_meta": true
            },
            "reference_id": "x",
            "workflow": "summarize"
          }
        ],
        "created_at": 1,
        "updated_at": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "directive",
    "accessor": "Directive",
    "op": "list",
    "method": "GET",
    "path": "/robots/v0/directives",
    "args": [],
    "select": {
      "limit": "v1",
      "page": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "created_at": 1,
          "id": "x",
          "name": "x",
          "resources": [
            {
              "kind": "caption",
              "language": "en",
              "reference_id": "captions_en",
              "source": {
                "via": "external"
              },
              "type": "video.asset.track"
            }
          ],
          "subject": {
            "type": "video.asset"
          },
          "updated_at": 1,
          "workflows": [
            {
              "inputs": [],
              "params": {},
              "reference_id": "x",
              "workflow": "summarize"
            }
          ]
        }
      ],
      "total_row_count": 42
    },
    "idField": "id"
  },
  {
    "entity": "directive",
    "accessor": "Directive",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/directives/{DIRECTIVE_ID}",
    "args": [
      {
        "name": "id",
        "wire": "DIRECTIVE_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "x",
        "name": "x",
        "subject": {
          "type": "video.asset"
        },
        "resources": [
          {
            "kind": "caption",
            "language": "en",
            "reference_id": "captions_en",
            "source": {
              "via": "external"
            },
            "type": "video.asset.track"
          }
        ],
        "workflows": [
          {
            "inputs": [
              "x"
            ],
            "params": {
              "description_length": 1,
              "language_code": "x",
              "output_language_code": "x",
              "output_steering": {},
              "prompt_overrides": {},
              "tag_count": 1,
              "title_length": 1,
              "tone": "neutral",
              "update_asset_meta": true
            },
            "reference_id": "x",
            "workflow": "summarize"
          }
        ],
        "created_at": 1,
        "updated_at": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "directive",
    "accessor": "Directive",
    "op": "remove",
    "method": "DELETE",
    "path": "/robots/v0/directives/{DIRECTIVE_ID}",
    "args": [
      {
        "name": "id",
        "wire": "DIRECTIVE_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "directive_run_detail",
    "accessor": "DirectiveRunDetail",
    "op": "list",
    "method": "GET",
    "path": "/robots/v0/directives/{DIRECTIVE_ID}/runs",
    "args": [
      {
        "name": "directive_id",
        "wire": "DIRECTIVE_ID",
        "value": "p1"
      }
    ],
    "select": {
      "limit": "v1",
      "page": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "completed_at": 1,
          "node_states": [
            {
              "job_id": "x",
              "reference_id": "x",
              "status": "dispatched",
              "workflow_name": "summarize"
            }
          ],
          "run_id": "x",
          "started_at": 1,
          "status": "pending",
          "subject_id": "x"
        }
      ],
      "total_row_count": 42
    },
    "idField": "id"
  },
  {
    "entity": "directive_run_detail",
    "accessor": "DirectiveRunDetail",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/directives/{DIRECTIVE_ID}/runs/{RUN_ID}",
    "args": [
      {
        "name": "directive_id",
        "wire": "DIRECTIVE_ID",
        "value": "p1"
      },
      {
        "name": "run_id",
        "wire": "RUN_ID",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "run_id": "x",
        "subject_id": "x",
        "status": "pending",
        "node_states": [
          {
            "job_id": "x",
            "reference_id": "x",
            "status": "dispatched",
            "workflow_name": "summarize"
          }
        ],
        "started_at": 1,
        "completed_at": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "drm_configuration",
    "accessor": "DrmConfiguration",
    "op": "list",
    "method": "GET",
    "path": "/video/v1/drm-configurations",
    "args": [],
    "select": {
      "limit": "v1",
      "page": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "limit"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 2,
      "page": 1,
      "limit": 100,
      "data": [
        {
          "id": "9dbEg8o00uqQzZbzJT6NXdqNA00SdnSo8O"
        },
        {
          "id": "012uTQqPygDYWz3jey8cyOX9n01Bd5SDH1"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "drm_configuration",
    "accessor": "DrmConfiguration",
    "op": "load",
    "method": "GET",
    "path": "/video/v1/drm-configurations/{DRM_CONFIGURATION_ID}",
    "args": [
      {
        "name": "id",
        "wire": "DRM_CONFIGURATION_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "lJ4bGGsp7ZlPf02nMg015W02iHQLN9XnuuLRBsPS00xqd68"
      }
    },
    "idField": "id"
  },
  {
    "entity": "edit_caption",
    "accessor": "EditCaption",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/edit-captions",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "edit-captions",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "track_id": "text_track_456def",
          "replacements": [
            {
              "find": "Mucks",
              "replace": "Mux",
              "case_sensitive": true
            },
            {
              "find": "gonna",
              "replace": "going to"
            }
          ],
          "speaker_replacements": [
            {
              "find": "speaker_0",
              "replace": "Alice"
            }
          ],
          "upload_to_mux": true,
          "delete_original_track": true
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "edit_caption",
    "accessor": "EditCaption",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/edit-captions/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "edit-captions",
        "status": "completed",
        "units_consumed": 1,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "track_id": "text_track_456def",
          "replacements": [
            {
              "find": "Mucks",
              "replace": "Mux",
              "case_sensitive": true
            },
            {
              "find": "gonna",
              "replace": "going to"
            }
          ],
          "speaker_replacements": [
            {
              "find": "speaker_0",
              "replace": "Alice"
            }
          ],
          "upload_to_mux": true,
          "delete_original_track": true
        },
        "outputs": {
          "total_replacement_count": 5,
          "uploaded_track_id": "text_track_789ghi",
          "temporary_vtt_url": "https://s3.example.com/edited.vtt?sig=abc"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "engagement_heatmap",
    "accessor": "EngagementHeatmap",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/engagement/assets/{ASSET_ID}/heatmap",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy"
      }
    ],
    "select": {
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 1,
      "timeframe": [
        1610025789,
        1610112189
      ],
      "data": {
        "total_views": 1024,
        "value": [
          0.42,
          0.55,
          0.61
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "engagement_heatmap",
    "accessor": "EngagementHeatmap",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/engagement/playback-ids/{PLAYBACK_ID}/heatmap",
    "args": [
      {
        "name": "playback_id_id",
        "wire": "PLAYBACK_ID",
        "value": "nLp01dgPzELHV6101iHGXmS3Og7lEU01TUDb02kg2Z6mPRs"
      }
    ],
    "select": {
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 1,
      "timeframe": [
        1610025789,
        1610112189
      ],
      "data": {
        "total_views": 1024,
        "value": [
          0.42,
          0.55,
          0.61
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "engagement_heatmap",
    "accessor": "EngagementHeatmap",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/engagement/videos/{VIDEO_ID}/heatmap",
    "args": [
      {
        "name": "video_id",
        "wire": "VIDEO_ID",
        "value": "abcd1234"
      }
    ],
    "select": {
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 1,
      "timeframe": [
        1610025789,
        1610112189
      ],
      "data": {
        "total_views": 1024,
        "value": [
          0.42,
          0.55,
          0.61
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "engagement_hotspot",
    "accessor": "EngagementHotspot",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/engagement/assets/{ASSET_ID}/hotspots",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy"
      }
    ],
    "select": {
      "limit": "v1",
      "order_direction": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]",
      "limit",
      "order_direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 2,
      "timeframe": [
        1610025789,
        1610112189
      ],
      "data": {
        "total_views": 1024,
        "hotspots": [
          {
            "start_ms": 30000,
            "end_ms": 45000,
            "score": 0.842
          },
          {
            "start_ms": 120000,
            "end_ms": 138000,
            "score": 0.713
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "engagement_hotspot",
    "accessor": "EngagementHotspot",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/engagement/playback-ids/{PLAYBACK_ID}/hotspots",
    "args": [
      {
        "name": "playback_id_id",
        "wire": "PLAYBACK_ID",
        "value": "nLp01dgPzELHV6101iHGXmS3Og7lEU01TUDb02kg2Z6mPRs"
      }
    ],
    "select": {
      "limit": "v1",
      "order_direction": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]",
      "limit",
      "order_direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 2,
      "timeframe": [
        1610025789,
        1610112189
      ],
      "data": {
        "total_views": 1024,
        "hotspots": [
          {
            "start_ms": 30000,
            "end_ms": 45000,
            "score": 0.842
          },
          {
            "start_ms": 120000,
            "end_ms": 138000,
            "score": 0.713
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "engagement_hotspot",
    "accessor": "EngagementHotspot",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/engagement/videos/{VIDEO_ID}/hotspots",
    "args": [
      {
        "name": "video_id",
        "wire": "VIDEO_ID",
        "value": "abcd1234"
      }
    ],
    "select": {
      "limit": "v1",
      "order_direction": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]",
      "limit",
      "order_direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 2,
      "timeframe": [
        1610025789,
        1610112189
      ],
      "data": {
        "total_views": 1024,
        "hotspots": [
          {
            "start_ms": 30000,
            "end_ms": 45000,
            "score": 0.842
          },
          {
            "start_ms": 120000,
            "end_ms": 138000,
            "score": 0.713
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "find_best_thumbnail",
    "accessor": "FindBestThumbnail",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/find-best-thumbnails",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "find-best-thumbnails",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "max_thumbnails": 3,
          "update_asset_thumbnail": true,
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            },
            "selection_strategy": "campaign_thumbnail",
            "scoring_priorities": [
              "composition",
              "brand_fit"
            ]
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "find_best_thumbnail",
    "accessor": "FindBestThumbnail",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/find-best-thumbnails/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "x",
        "passthrough": "x",
        "units_consumed": 1,
        "directive": {
          "id": "x",
          "run_id": "x"
        },
        "created_at": 1,
        "updated_at": 1,
        "workflow": "find-best-thumbnails",
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "max_thumbnails": 3,
          "update_asset_thumbnail": true,
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            },
            "selection_strategy": "campaign_thumbnail",
            "scoring_priorities": [
              "composition",
              "brand_fit"
            ]
          }
        },
        "status": "pending",
        "errors": [
          {
            "type": "x",
            "message": "x",
            "retryable": true
          }
        ],
        "resources": {
          "assets": [
            {
              "id": "abc123asset",
              "meta": {
                "title": "My Video",
                "creator_id": "user123",
                "external_id": "ext456"
              },
              "_links": {
                "self": {
                  "href": "https://api.mux.com/video/v1/assets/abc123asset"
                }
              }
            }
          ]
        },
        "outputs": {
          "best_thumbnails": [
            {
              "timestamp_ms": 1,
              "subscores": {
                "focus": 1,
                "face_or_action": 1,
                "composition": 1,
                "contrast_color": 1,
                "brand_fit": 1
              },
              "overall": 1,
              "description": "x",
              "alt_text": "x"
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "find_key_moment",
    "accessor": "FindKeyMoment",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/find-key-moments",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "find-key-moments",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "max_moments": 10,
          "target_duration_ms": {
            "min": 15000,
            "max": 45000
          },
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            },
            "selection_strategy": "educational_takeaways",
            "title_style": "punchy",
            "audience": "Developer advocates",
            "rubric_priorities": [
              "clarity_in_isolation",
              "soundbite_quality"
            ]
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "find_key_moment",
    "accessor": "FindKeyMoment",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/find-key-moments/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "find-key-moments",
        "status": "completed",
        "units_consumed": 1,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "max_moments": 10,
          "target_duration_ms": {
            "min": 15000,
            "max": 45000
          },
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            },
            "selection_strategy": "educational_takeaways",
            "title_style": "punchy",
            "audience": "Developer advocates",
            "rubric_priorities": [
              "clarity_in_isolation",
              "soundbite_quality"
            ]
          }
        },
        "outputs": {
          "moments": [
            {
              "start_ms": 15000,
              "end_ms": 45000,
              "cues": [
                {
                  "start_ms": 15000,
                  "end_ms": 20000,
                  "text": "This is the moment everything changed."
                },
                {
                  "start_ms": 20000,
                  "end_ms": 30000,
                  "text": "We realized the entire approach was wrong."
                }
              ],
              "overall_score": 0.92,
              "title": "The Pivotal Realization",
              "quotable_segment": {
                "start_ms": 20000,
                "text": "We realized the entire approach was wrong."
              },
              "audible_narrative": "The speaker describes the turning point that reshaped the project direction.",
              "notable_audible_concepts": [
                "pivotal realization moment",
                "project direction change"
              ],
              "visual_narrative": "The speaker gestures emphatically at a whiteboard diagram while the camera zooms in.",
              "notable_visual_concepts": [
                {
                  "concept": "whiteboard diagram emphasis",
                  "score": 0.88,
                  "rationale": "The diagram directly illustrates the pivotal realization being described."
                },
                {
                  "concept": "speaker emphatic gestures",
                  "score": 0.75,
                  "rationale": "Body language reinforces the emotional weight of the turning point."
                }
              ]
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "find_scene",
    "accessor": "FindScene",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/find-scenes",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "find-scenes",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "language_code": "en",
          "min_scenes": 4,
          "min_scene_duration_ms": 15000,
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            },
            "segmentation_strategy": "editorial_beats",
            "title_style": "descriptive",
            "narration_detail": "balanced"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "find_scene",
    "accessor": "FindScene",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/find-scenes/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "find-scenes",
        "status": "completed",
        "units_consumed": 1,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "language_code": "en",
          "min_scenes": 4,
          "min_scene_duration_ms": 15000,
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            },
            "segmentation_strategy": "editorial_beats",
            "title_style": "descriptive",
            "narration_detail": "balanced"
          }
        },
        "outputs": {
          "scenes": [
            {
              "start_ms": 0,
              "end_ms": 15000,
              "title": "Opening Remarks",
              "cues": [
                {
                  "start_ms": 500,
                  "end_ms": 5000,
                  "text": "Welcome everyone to today's session."
                }
              ],
              "audible_narrative": "The host introduces the topic and welcomes the audience.",
              "notable_audible_concepts": [
                "session introduction overview",
                "welcome and context"
              ],
              "visual_narrative": "A speaker stands at a podium in front of a large screen.",
              "shot_count": 2
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "generate_asset_shot",
    "accessor": "GenerateAssetShot",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/assets/{ASSET_ID}/shots",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "status": "pending"
      }
    },
    "idField": "id"
  },
  {
    "entity": "generate_chapter",
    "accessor": "GenerateChapter",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/generate-chapters",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "generate-chapters",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "update_asset_chapters": true,
          "output_steering": {
            "chapter_style": "descriptive",
            "chapter_granularity": "balanced",
            "audience": "Developers"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "generate_chapter",
    "accessor": "GenerateChapter",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/generate-chapters/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "generate-chapters",
        "status": "completed",
        "units_consumed": 1,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "update_asset_chapters": true,
          "output_steering": {
            "chapter_style": "descriptive",
            "chapter_granularity": "balanced",
            "audience": "Developers"
          }
        },
        "outputs": {
          "asset_update": {
            "status": "created",
            "track_id": "track_chapters_abc123"
          },
          "chapters": [
            {
              "start_time": 0,
              "title": "Introduction"
            },
            {
              "start_time": 45,
              "title": "Setting Up the Workspace"
            },
            {
              "start_time": 180,
              "title": "Core Implementation"
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "generate_engagement_insight",
    "accessor": "GenerateEngagementInsight",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/generate-engagement-insights",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "generate-engagement-insights",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "generate_engagement_insight",
    "accessor": "GenerateEngagementInsight",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/generate-engagement-insights/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "generate-engagement-insights",
        "status": "completed",
        "units_consumed": 1,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc"
        },
        "outputs": {
          "moment_insights": [
            {
              "start_ms": 30000,
              "end_ms": 60000,
              "engagement_score": 0.89,
              "insight": "Viewers are highly engaged during the product demo, with minimal drop-off."
            }
          ],
          "overall_insight": {
            "summary": "Engagement peaks during hands-on demonstrations and drops during introductory segments.",
            "trends": [
              "Product demos drive the highest retention",
              "Viewers skip past the first 15 seconds of intro"
            ]
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "generate_premium_caption",
    "accessor": "GeneratePremiumCaption",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/generate-premium-captions",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "generate-premium-captions",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "language_code": "en",
          "replace_existing_tracks": "fail",
          "include_speakers": false,
          "include_words": false,
          "upload_to_mux": true,
          "phrases": [
            "Mux",
            "API"
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "generate_premium_caption",
    "accessor": "GeneratePremiumCaption",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/generate-premium-captions/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "generate-premium-captions",
        "status": "completed",
        "units_consumed": 1,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "language_code": "en",
          "replace_existing_tracks": "fail",
          "include_speakers": false,
          "include_words": false,
          "upload_to_mux": true,
          "phrases": [
            "Mux",
            "API"
          ]
        },
        "outputs": {
          "track_id": "track_en_abc123",
          "language_code": "en",
          "detected_language": "en",
          "auto_language_confidence": 0.98,
          "temporary_srt_url": "https://storage.example.com/captions/en/abc123.srt?token=abc"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "generate_track_subtitle",
    "accessor": "GenerateTrackSubtitle",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      },
      {
        "name": "track_id",
        "wire": "TRACK_ID",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": [
        {
          "type": "text",
          "text_type": "subtitles",
          "status": "preparing",
          "passthrough": "English (generated)",
          "name": "English (generated)",
          "language_code": "en",
          "id": "hXhnqUq0054k9SBFB5aczHhj6xMbOTlriTG7gqRn8kikv101lkFUgKNw"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "incident",
    "accessor": "Incident",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/incidents",
    "args": [],
    "select": {
      "limit": "v1",
      "order_by": "v1",
      "order_direction": "v1",
      "page": "v1",
      "severity": "v1",
      "status": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page",
      "order_by",
      "order_direction",
      "status",
      "severity"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "affected_views": 71,
          "affected_views_per_hour": 29,
          "affected_views_per_hour_on_open": 75,
          "breakdowns": [
            {
              "id": "abcdef",
              "name": "error_type_id",
              "value": "697070"
            }
          ],
          "description": "Something is broken",
          "error_description": "No seriously, something is really really broken :(",
          "id": "4u13td",
          "impact": "*71 views* were affected at a rate of *29 per hour*",
          "incident_key": "5312a7c0bbb5d8353bd88602f01fe58eb15e9febac8fd2f0d8ce8f1cb138145c",
          "measured_value": 5.9,
          "measured_value_on_close": 0.1,
          "measurement": "error_rate",
          "notification_rules": [],
          "notifications": [
            {
              "attempted_at": "2021-01-05T09:52:15.119040Z",
              "id": 103014,
              "queued_at": "2021-01-05T09:52:14.945157Z"
            },
            {
              "attempted_at": "2021-01-05T11:31:08.244462Z",
              "id": 102025,
              "queued_at": "2021-01-05T11:31:08.061924Z"
            }
          ],
          "resolved_at": "2021-01-05T11:31:04.000000Z",
          "sample_size": 1000,
          "sample_size_unit": "views",
          "severity": "alert",
          "started_at": "2021-01-05T09:04:46.000000Z",
          "status": "closed",
          "threshold": 5
        },
        {
          "affected_views": 132,
          "affected_views_per_hour": 11,
          "affected_views_per_hour_on_open": 65,
          "breakdowns": [
            {
              "id": "abcdef",
              "name": "video_title",
              "value": "Layla the dog video 1337"
            },
            {
              "id": "abcdef",
              "name": "error_type_id",
              "value": "697065"
            }
          ],
          "description": "Something else is broken",
          "error_description": "Detailed error: On no!",
          "id": "rd9579",
          "impact": "*132 views* were affected at a rate of *11 per hour*",
          "incident_key": "fd9add7a85a013d768f4039f9e726133eddb476c2f16b22ebfe56f18f7c03b27",
          "measured_value": 97,
          "measured_value_on_close": 1,
          "measurement": "error_rate",
          "notification_rules": [],
          "notifications": [
            {
              "attempted_at": "2020-12-31T09:26:19.416919Z",
              "id": 102198,
              "queued_at": "2020-12-31T09:26:18.987717Z"
            },
            {
              "attempted_at": "2020-12-31T20:23:57.279325Z",
              "id": 101269,
              "queued_at": "2020-12-31T20:23:56.997068Z"
            }
          ],
          "resolved_at": "2020-12-31T20:22:54.000000Z",
          "sample_size": 100,
          "sample_size_unit": "views",
          "severity": "alert",
          "started_at": "2020-12-31T07:56:22.000000Z",
          "status": "closed",
          "threshold": 96
        }
      ],
      "timeframe": [
        1610035979,
        1610122379
      ],
      "total_row_count": 2
    },
    "idField": "id"
  },
  {
    "entity": "incident",
    "accessor": "Incident",
    "op": "load",
    "method": "GET",
    "path": "/data/v1/incidents/{INCIDENT_ID}",
    "args": [
      {
        "name": "id",
        "wire": "INCIDENT_ID",
        "value": "abcd1234"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "affected_views": 2026,
        "affected_views_per_hour": 84,
        "affected_views_per_hour_on_open": 12857,
        "breakdowns": [
          {
            "id": "abcdef",
            "name": "error_type_id",
            "value": "499680"
          },
          {
            "id": "abcdef",
            "name": "video_title",
            "value": "Cute dogs"
          }
        ],
        "description": "This video is erroring a lot",
        "error_description": "Error Type ID 499680",
        "id": "g7q2df",
        "impact": "*2026 views* were affected at a rate of *84 per hour*",
        "incident_key": "045dfcbefdb68c6003aaf3bf5ed217493772519f28f14d129f95eaff159ea6d6b",
        "measured_value": 100,
        "measured_value_on_close": 8,
        "measurement": "error_rate",
        "notification_rules": [],
        "notifications": [
          {
            "attempted_at": "2020-05-14T17:23:08.034662Z",
            "id": 63293,
            "queued_at": "2020-05-14T17:23:07.944457Z"
          },
          {
            "attempted_at": "2020-05-13T17:22:30.444389Z",
            "id": 62212,
            "queued_at": "2020-05-13T17:22:30.354828Z"
          }
        ],
        "resolved_at": "2020-05-14T17:22:30.000000Z",
        "sample_size": 100,
        "sample_size_unit": "views",
        "severity": "alert",
        "started_at": "2020-05-13T17:21:54.000000Z",
        "status": "closed",
        "threshold": 100
      },
      "timeframe": [
        1610036456,
        1610122856
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "input_info",
    "accessor": "InputInfo",
    "op": "list",
    "method": "GET",
    "path": "/video/v1/assets/{ASSET_ID}/input-info",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "settings": {
            "url": "https://muxed.s3.amazonaws.com/leds.mp4"
          },
          "file": {
            "container_format": "mp4",
            "tracks": [
              {
                "type": "video",
                "duration": 120,
                "width": 1280,
                "height": 720,
                "frame_rate": 30,
                "encoding": "h.264"
              },
              {
                "type": "audio",
                "duration": 120,
                "sample_rate": 16000,
                "sample_size": 24,
                "encoding": "aac"
              }
            ]
          }
        },
        {
          "settings": {
            "url": "https://example.com/myVideo_en.srt"
          },
          "file": {
            "container_format": "srt"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "job_summary",
    "accessor": "JobSummary",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/{JOB_ID}/cancel",
    "args": [
      {
        "name": "job_id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "x",
        "workflow": "summarize",
        "status": "pending",
        "created_at": 1,
        "updated_at": 1,
        "_links": {
          "self": {
            "href": "x"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "job_summary",
    "accessor": "JobSummary",
    "op": "list",
    "method": "GET",
    "path": "/robots/v0/jobs",
    "args": [],
    "select": {
      "asset_id": "v1",
      "limit": "v1",
      "page": "v1",
      "status": "v1",
      "workflow": "v1"
    },
    "headers": [],
    "query": [
      "workflow",
      "status",
      "asset_id",
      "limit",
      "page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "_links": {
            "self": {
              "href": "x"
            }
          },
          "created_at": 1,
          "id": "x",
          "status": "pending",
          "updated_at": 1,
          "workflow": "summarize"
        }
      ],
      "total_row_count": 42
    },
    "idField": "id"
  },
  {
    "entity": "list_all_metric_value",
    "accessor": "ListAllMetricValue",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/metrics/comparison",
    "args": [],
    "select": {
      "dimension": "v1",
      "filter": "v1",
      "metric_filter": "v1",
      "timeframe": "v1",
      "value": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]",
      "filters[]",
      "metric_filters[]",
      "dimension",
      "value"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 1,
      "timeframe": [
        1610029906,
        1610116306
      ],
      "data": [
        {
          "watch_time": 513934,
          "view_count": 5,
          "started_views": 6,
          "ended_views": 5,
          "unique_viewers": 6,
          "total_playing_time": 503934,
          "name": "totals"
        },
        {
          "value": 6,
          "type": "number",
          "name": "Views",
          "metric": "views",
          "items": [
            {
              "value": 6,
              "type": "number",
              "name": "Unique Viewers",
              "metric": "unique_viewers"
            },
            {
              "value": 503934,
              "type": "milliseconds",
              "name": "Playing Time",
              "metric": "playing_time"
            },
            {
              "value": 0,
              "type": "number",
              "name": "Ad Attempts (total)",
              "metric": "ad_attempt_count",
              "measurement": "avg"
            }
          ]
        },
        {
          "value": 0.7803472280502319,
          "type": "score",
          "name": "Overall Score",
          "metric": "viewer_experience_score"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_breakdown_value",
    "accessor": "ListBreakdownValue",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/metrics/{METRIC_ID}/breakdown",
    "args": [
      {
        "name": "metric_id",
        "wire": "METRIC_ID",
        "value": "video_startup_time"
      }
    ],
    "select": {
      "filter": "v1",
      "group_by": "v1",
      "limit": "v1",
      "measurement": "v1",
      "metric_filter": "v1",
      "order_by": "v1",
      "order_direction": "v1",
      "page": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "group_by",
      "measurement",
      "filters[]",
      "metric_filters[]",
      "limit",
      "page",
      "order_by",
      "order_direction",
      "timeframe[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 1,
      "timeframe": [
        1610028298,
        1610114698
      ],
      "meta": {
        "aggregation": "view_end"
      },
      "data": [
        {
          "views": 5,
          "value": 4,
          "total_watch_time": 513934,
          "total_playing_time": 413934,
          "negative_impact": 1,
          "field": "US"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_delivery_usage",
    "accessor": "ListDeliveryUsage",
    "op": "list",
    "method": "GET",
    "path": "/video/v1/delivery-usage",
    "args": [],
    "select": {
      "asset_id": "v1",
      "limit": "v1",
      "live_stream_id": "v1",
      "page": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "limit",
      "asset_id",
      "live_stream_id",
      "timeframe[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 2,
      "timeframe": [
        1607817600,
        1607990400
      ],
      "page": 1,
      "limit": 100,
      "data": [
        {
          "live_stream_id": "B65hEUWW01ErVKDDGImKcBquYhwEAkjW6Ic3lPY0299Cc",
          "delivered_seconds": 206.366667,
          "delivered_seconds_by_resolution": {
            "tier_1080p": 100,
            "tier_720p": 100,
            "tier_audio_only": 6.366667
          },
          "deleted_at": "1607945257",
          "created_at": "1607939184",
          "asset_state": "deleted",
          "asset_id": "Ww4v2q2H4MNbHIAM2wApKb3cmrh7eHjGLUjdKohR5wM",
          "asset_duration": 154.366667,
          "asset_resolution_tier": "1080p",
          "asset_encoding_tier": "baseline",
          "asset_video_quality": "basic"
        },
        {
          "delivered_seconds": 30,
          "delivered_seconds_by_resolution": {
            "tier_1080p": 10,
            "tier_720p": 10,
            "tier_audio_only": 10
          },
          "deleted_at": "1607935288",
          "created_at": "1607617107",
          "asset_state": "deleted",
          "asset_id": "Qlb007on1TwN43XLIG027QJlUxm3jd01v5PRi1aXhnyFZY",
          "asset_duration": 98.773667,
          "asset_resolution_tier": "1080p",
          "asset_encoding_tier": "smart",
          "asset_video_quality": "plus"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_dimension_value",
    "accessor": "ListDimensionValue",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/dimensions/{DIMENSION_ID}/elements",
    "args": [
      {
        "name": "dimension_id",
        "wire": "DIMENSION_ID",
        "value": "abcd1234"
      }
    ],
    "select": {
      "filter": "v1",
      "limit": "v1",
      "metric_filter": "v1",
      "order_by": "v1",
      "order_direction": "v1",
      "page": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page",
      "filters[]",
      "metric_filters[]",
      "timeframe[]",
      "order_by",
      "order_direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 25,
      "timeframe": [
        1755069000,
        1755155999
      ],
      "data": [
        {
          "value": "cdn_a",
          "total_count": 2640882
        },
        {
          "value": "cdn_b",
          "total_count": 1368812
        },
        {
          "value": "cdn_c",
          "total_count": 154541
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_dimension_value",
    "accessor": "ListDimensionValue",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/dimensions",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "advanced": [
          "asn",
          "audio_codec",
          "audio_codec_initial"
        ],
        "basic": [
          "asset_id",
          "browser",
          "cdn"
        ]
      },
      "timeframe": [
        1610033879,
        1610120279
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "list_dimension_value",
    "accessor": "ListDimensionValue",
    "op": "load",
    "method": "GET",
    "path": "/data/v1/dimensions/{DIMENSION_ID}",
    "args": [
      {
        "name": "dimension_id",
        "wire": "DIMENSION_ID",
        "value": "abcd1234"
      }
    ],
    "select": {
      "filter": "v1",
      "limit": "v1",
      "metric_filter": "v1",
      "page": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page",
      "filters[]",
      "metric_filters[]",
      "timeframe[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "total_count": 10000,
          "value": "FR"
        },
        {
          "total_count": 5000,
          "value": "ES"
        },
        {
          "total_count": 2000,
          "value": "PT"
        }
      ],
      "timeframe": [
        1610033976,
        1610120376
      ],
      "total_row_count": 5
    },
    "idField": "id"
  },
  {
    "entity": "list_error",
    "accessor": "ListError",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/errors",
    "args": [],
    "select": {
      "filter": "v1",
      "metric_filter": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "filters[]",
      "metric_filters[]",
      "timeframe[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 1,
      "timeframe": [
        1610027061,
        1610113461
      ],
      "data": [
        {
          "percentage": 30,
          "notes": "a helpful note",
          "message": "an error message",
          "last_seen": "2021-01-08T13:42:39Z",
          "id": 1,
          "description": "a description for this error",
          "count": 1,
          "code": 100,
          "player_error_code": "100"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_export",
    "accessor": "ListExport",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/exports",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 10,
      "timeframe": [
        1610024528,
        1610110928
      ],
      "data": [
        "https://s3.amazonaws.com/mux-data-exports/1/2021_01_01.csv.gz?...signature...",
        "https://s3.amazonaws.com/mux-data-exports/1/2021_01_02.csv.gz?...signature...",
        "https://s3.amazonaws.com/mux-data-exports/1/2021_01_03.csv.gz?...signature..."
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_filter_value",
    "accessor": "ListFilterValue",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/filters",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 1,
      "timeframe": [
        1610027251,
        1610113651
      ],
      "data": {
        "basic": [
          "browser",
          "operating_system",
          "player_remote_played"
        ],
        "advanced": [
          "browser_version",
          "operating_system_version",
          "viewer_device_name"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "list_filter_value",
    "accessor": "ListFilterValue",
    "op": "load",
    "method": "GET",
    "path": "/data/v1/filters/{FILTER_ID}",
    "args": [
      {
        "name": "filter_id",
        "wire": "FILTER_ID",
        "value": "abcd1234"
      }
    ],
    "select": {
      "filter": "v1",
      "limit": "v1",
      "page": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page",
      "filters[]",
      "timeframe[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 1,
      "timeframe": [
        1610028123,
        1610114523
      ],
      "data": [
        {
          "value": "Chrome",
          "total_count": 5
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_insight",
    "accessor": "ListInsight",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/metrics/{METRIC_ID}/insights",
    "args": [
      {
        "name": "metric_id",
        "wire": "METRIC_ID",
        "value": "video_startup_time"
      }
    ],
    "select": {
      "filter": "v1",
      "measurement": "v1",
      "metric_filter": "v1",
      "order_direction": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "measurement",
      "order_direction",
      "timeframe[]",
      "filters[]",
      "metric_filters[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 18,
      "timeframe": [
        1610029610,
        1610116010
      ],
      "meta": {
        "aggregation": "view_end"
      },
      "data": [
        {
          "total_watch_time": 351144,
          "total_playing_time": 341144,
          "total_views": 1,
          "negative_impact_score": -5,
          "metric": 9,
          "filter_value": "",
          "filter_column": "video_title"
        },
        {
          "total_watch_time": 513934,
          "total_playing_time": 413934,
          "total_views": 5,
          "negative_impact_score": 0,
          "metric": 4,
          "filter_value": "US",
          "filter_column": "country"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_monitoring_dimension",
    "accessor": "ListMonitoringDimension",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/monitoring/dimensions",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "display_name": "ASN",
          "name": "asn"
        },
        {
          "display_name": "CDN",
          "name": "cdn"
        },
        {
          "display_name": "Country",
          "name": "country"
        }
      ],
      "timeframe": [
        1610034823,
        1610121223
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "list_monitoring_metric",
    "accessor": "ListMonitoringMetric",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/monitoring/metrics",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "display_name": "Current Average Bitrate",
          "name": "current-average-bitrate"
        },
        {
          "display_name": "Current Concurrent Viewers (CCV)",
          "name": "current-concurrent-viewers"
        },
        {
          "display_name": "Current Rebuffering Percentage",
          "name": "current-rebuffering-percentage"
        }
      ],
      "timeframe": [
        1610034858,
        1610121258
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "list_real_time_dimension",
    "accessor": "ListRealTimeDimension",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/realtime/dimensions",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "display_name": "ASN",
          "name": "asn"
        },
        {
          "display_name": "CDN",
          "name": "cdn"
        },
        {
          "display_name": "Country",
          "name": "country"
        }
      ],
      "timeframe": [
        1610034823,
        1610121223
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "list_real_time_metric",
    "accessor": "ListRealTimeMetric",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/realtime/metrics",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "display_name": "Current Average Bitrate",
          "name": "current-average-bitrate"
        },
        {
          "display_name": "Current Concurrent Viewers (CCV)",
          "name": "current-concurrent-viewers"
        },
        {
          "display_name": "Current Rebuffering Percentage",
          "name": "current-rebuffering-percentage"
        }
      ],
      "timeframe": [
        1610034858,
        1610121258
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "list_related_incident",
    "accessor": "ListRelatedIncident",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/incidents/{INCIDENT_ID}/related",
    "args": [
      {
        "name": "incident_id",
        "wire": "INCIDENT_ID",
        "value": "abcd1234"
      }
    ],
    "select": {
      "limit": "v1",
      "order_by": "v1",
      "order_direction": "v1",
      "page": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page",
      "order_by",
      "order_direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "affected_views": 71,
          "affected_views_per_hour": 29,
          "affected_views_per_hour_on_open": 75,
          "breakdowns": [
            {
              "id": "abcdef",
              "name": "error_type_id",
              "value": "697070"
            }
          ],
          "description": "Something is broken",
          "error_description": "No seriously, something is really really broken :(",
          "id": "4u13td",
          "impact": "*71 views* were affected at a rate of *29 per hour*",
          "incident_key": "5312a7c0bbb5d8353bd88602f01fe58eb15e9febac8fd2f0d8ce8f1cb138145c",
          "measured_value": 5.9,
          "measured_value_on_close": 0.1,
          "measurement": "error_rate",
          "notification_rules": [],
          "notifications": [
            {
              "attempted_at": "2021-01-05T09:52:15.119040Z",
              "id": 103014,
              "queued_at": "2021-01-05T09:52:14.945157Z"
            },
            {
              "attempted_at": "2021-01-05T11:31:08.244462Z",
              "id": 102025,
              "queued_at": "2021-01-05T11:31:08.061924Z"
            }
          ],
          "resolved_at": "2021-01-05T11:31:04.000000Z",
          "sample_size": 1000,
          "sample_size_unit": "views",
          "severity": "alert",
          "started_at": "2021-01-05T09:04:46.000000Z",
          "status": "closed",
          "threshold": 5
        },
        {
          "affected_views": 132,
          "affected_views_per_hour": 11,
          "affected_views_per_hour_on_open": 65,
          "breakdowns": [
            {
              "id": "abcdef",
              "name": "video_title",
              "value": "Layla the dog video 1337"
            },
            {
              "id": "abcdef",
              "name": "error_type_id",
              "value": "697065"
            }
          ],
          "description": "Something else is broken",
          "error_description": "Detailed error: On no!",
          "id": "rd9579",
          "impact": "*132 views* were affected at a rate of *11 per hour*",
          "incident_key": "fd9add7a85a013d768f4039f9e726133eddb476c2f16b22ebfe56f18f7c03b27",
          "measured_value": 97,
          "measured_value_on_close": 1,
          "measurement": "error_rate",
          "notification_rules": [],
          "notifications": [
            {
              "attempted_at": "2020-12-31T09:26:19.416919Z",
              "id": 102198,
              "queued_at": "2020-12-31T09:26:18.987717Z"
            },
            {
              "attempted_at": "2020-12-31T20:23:57.279325Z",
              "id": 101269,
              "queued_at": "2020-12-31T20:23:56.997068Z"
            }
          ],
          "resolved_at": "2020-12-31T20:22:54.000000Z",
          "sample_size": 100,
          "sample_size_unit": "views",
          "severity": "alert",
          "started_at": "2020-12-31T07:56:22.000000Z",
          "status": "closed",
          "threshold": 96
        }
      ],
      "timeframe": [
        1610035979,
        1610122379
      ],
      "total_row_count": 2
    },
    "idField": "id"
  },
  {
    "entity": "list_subview_breakdown_value",
    "accessor": "ListSubviewBreakdownValue",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown",
    "args": [
      {
        "name": "subview_metric_id",
        "wire": "METRIC_ID",
        "value": "playing_time"
      },
      {
        "name": "subview_type",
        "wire": "SUBVIEW_TYPE",
        "value": "rendition"
      }
    ],
    "select": {
      "filter": "v1",
      "group_by": "v1",
      "limit": "v1",
      "page": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]",
      "filters[]",
      "group_by[]",
      "limit",
      "page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "breakdown_value": "18.5Mb / 3840w / 2160h / 60fps / HEVC / 4k",
          "metric_value": 56200000
        },
        {
          "breakdown_value": "12Mb / 2560w / 1440h / 60fps / HEVC / 2k",
          "metric_value": 18200000
        }
      ],
      "meta": {
        "subview_type": "rendition",
        "metric": "playing_time",
        "unit": "ms",
        "group_by": [
          "video_source_bitrate",
          "video_source_width",
          "video_source_height"
        ]
      },
      "total_row_count": 2,
      "timeframe": [
        1617235200,
        1617321600
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_subview_comparison_value",
    "accessor": "ListSubviewComparisonValue",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/comparison",
    "args": [
      {
        "name": "subview_metric_id",
        "wire": "METRIC_ID",
        "value": "playing_time"
      },
      {
        "name": "subview_type",
        "wire": "SUBVIEW_TYPE",
        "value": "rendition"
      }
    ],
    "select": {
      "breakdown_value_limit": "v1",
      "dimension": "country",
      "filter": "v1",
      "group_by": "v1",
      "timeframe": "v1",
      "value": "v1"
    },
    "headers": [],
    "query": [
      "dimension",
      "timeframe[]",
      "filters[]",
      "values[]",
      "group_by[]",
      "breakdown_value_limit"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "dimension_value": "US",
          "values": [
            {
              "breakdown_value": "18.5Mb / 3840w / 2160h / 60fps / HEVC / 4k",
              "metric_value": 112000000
            },
            {
              "breakdown_value": "5.1Mb / 1920w / 1080h / 60fps / h264 / hi",
              "metric_value": 56200000
            },
            {
              "breakdown_value": "other",
              "metric_value": 13200000
            }
          ]
        },
        {
          "dimension_value": "FR",
          "values": [
            {
              "breakdown_value": "18.5Mb / 3840w / 2160h / 60fps / HEVC / 4k",
              "metric_value": 41200000
            },
            {
              "breakdown_value": "other",
              "metric_value": 8300000
            }
          ]
        }
      ],
      "meta": {
        "dimension": "country",
        "subview_type": "rendition",
        "metric": "playing_time",
        "unit": "ms",
        "group_by": [
          "video_source_bitrate",
          "video_source_width",
          "video_source_height"
        ]
      },
      "total_row_count": 2,
      "timeframe": [
        1617235200,
        1617321600
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_subview_dimension",
    "accessor": "ListSubviewDimension",
    "op": "load",
    "method": "GET",
    "path": "/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions",
    "args": [
      {
        "name": "subview_type",
        "wire": "SUBVIEW_TYPE",
        "value": "rendition"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "view": [
          "video_id",
          "video_title",
          "video_encoding_variant"
        ],
        "subview": [
          "video_source_bitrate",
          "video_source_width",
          "video_source_height"
        ]
      },
      "total_row_count": null
    },
    "idField": "id"
  },
  {
    "entity": "list_subview_dimension_value",
    "accessor": "ListSubviewDimensionValue",
    "op": "load",
    "method": "GET",
    "path": "/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions/{DIMENSION_NAME}",
    "args": [
      {
        "name": "dimension_name",
        "wire": "DIMENSION_NAME",
        "value": "country"
      },
      {
        "name": "subview_metric_id",
        "wire": "SUBVIEW_TYPE",
        "value": "rendition"
      }
    ],
    "select": {
      "filter": "v1",
      "limit": "v1",
      "order_by": "v1",
      "order_direction": "v1",
      "page": "v1",
      "query": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]",
      "filters[]",
      "limit",
      "page",
      "order_by",
      "order_direction",
      "query"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "value": "United States",
          "playing_time": 86400000
        },
        {
          "value": "Great Britain",
          "playing_time": 24800000
        },
        {
          "value": "Germany",
          "playing_time": 18200000
        }
      ],
      "meta": {
        "subview_type": "rendition",
        "dimension_name": "country",
        "metric": "playing_time",
        "unit": "ms"
      },
      "total_row_count": 3,
      "timeframe": [
        1617235200,
        1617321600
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_video_view_export",
    "accessor": "ListVideoViewExport",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/exports/views",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 7,
      "timeframe": [
        1626296941,
        1626383341
      ],
      "data": [
        {
          "files": [
            {
              "version": 2,
              "type": "csv",
              "path": "https://s3.amazonaws.com/mux-data-exports/1/2021_01_03.csv.gz?...signature..."
            }
          ],
          "export_date": "2021-01-03"
        },
        {
          "files": [
            {
              "version": 2,
              "type": "csv",
              "path": "https://s3.amazonaws.com/mux-data-exports/1/2021_01_02.csv.gz?...signature..."
            }
          ],
          "export_date": "2021-01-02"
        },
        {
          "files": [
            {
              "version": 2,
              "type": "csv",
              "path": "https://s3.amazonaws.com/mux-data-exports/1/2021_01_01.csv.gz?...signature..."
            }
          ],
          "export_date": "2021-01-01"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/reset-stream-key",
    "action": "reset_stream_key",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "stream_key": "acaf2ca1-ba9c-5ffe-8c9c-a02bbf0009a6",
        "status": "idle",
        "reconnect_window": 60,
        "playback_ids": [
          {
            "policy": "public",
            "id": "HNRDuwff3K2VjTZZAPuvd2Kx6D01XUQFv02GFBHPUka018"
          },
          {
            "policy": "public",
            "id": "4O902oOPU100s7XIQgOeY01U7dHzYlBe26zi3Sq01EJqnxw"
          }
        ],
        "new_asset_settings": {
          "playback_policies": [
            "public"
          ]
        },
        "id": "ZEBrNTpHC02iUah025KM3te6ylM7W4S4silsrFtUkn3Ag",
        "created_at": "1609937654",
        "latency_mode": "standard",
        "max_continuous_duration": 43200
      }
    },
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/live-streams",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "stream_key": "abcdefgh",
        "status": "idle",
        "reconnect_window": 60,
        "playback_ids": [
          {
            "policy": "public",
            "id": "HNRDuwff3K2VjTZZAPuvd2Kx6D01XUQFv02GFBHPUka018"
          }
        ],
        "new_asset_settings": {
          "playback_policies": [
            "public"
          ]
        },
        "id": "ZEBrNTpHC02iUah025KM3te6ylM7W4S4silsrFtUkn3Ag",
        "created_at": "1609937654",
        "latency_mode": "standard",
        "max_continuous_duration": 43200
      }
    },
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "list",
    "method": "GET",
    "path": "/video/v1/live-streams",
    "args": [],
    "select": {
      "limit": "v1",
      "page": "v1",
      "status": "v1",
      "stream_key": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page",
      "stream_key",
      "status"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "stream_key": "831b5bde-cd8a-5bc4-115d-4ba34b19f481",
          "status": "idle",
          "reconnect_window": 60,
          "playback_ids": [
            {
              "policy": "public",
              "id": "HNRDuwff3K2VjTZZAPuvd2Kx6D01XUQFv02GFBHPUka018"
            }
          ],
          "new_asset_settings": {
            "playback_policies": [
              "public"
            ]
          },
          "id": "ZEBrNTpHC02iUah025KM3te6ylM7W4S4silsrFtUkn3Ag",
          "created_at": "1609937654",
          "latency_mode": "standard",
          "max_continuous_duration": 43200
        },
        {
          "stream_key": "d273c65e-1fc8-27dc-e9ef-56144cbceb3a",
          "status": "idle",
          "reconnect_window": 60,
          "recent_asset_ids": [
            "SZs02xxHgYdkHp00OSCjJiHUHqzVQZNU332XPXRxe341o",
            "e4J9cwb5tjVxMeeV8201dC00i800ThPKKGT2SEN002dHH2s"
          ],
          "playback_ids": [
            {
              "policy": "public",
              "id": "00zOcribkUmXqXHzBTpflk2771BRTcKATqPjWf7JHpuM"
            }
          ],
          "new_asset_settings": {
            "playback_policies": [
              "public"
            ]
          },
          "id": "B65hEUWW01ErVKDDGImKcBquYhwEAkjW6Ic3lPY0299Cc",
          "created_at": "1607587513",
          "latency_mode": "standard",
          "max_continuous_duration": 43200
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "load",
    "method": "GET",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}",
    "args": [
      {
        "name": "id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "stream_key": "831b5bde-cd8a-5bc4-115d-4ba34b19f481",
        "status": "idle",
        "reconnect_window": 60,
        "playback_ids": [
          {
            "policy": "public",
            "id": "HNRDuwff3K2VjTZZAPuvd2Kx6D01XUQFv02GFBHPUka018"
          }
        ],
        "new_asset_settings": {
          "playback_policies": [
            "public"
          ]
        },
        "id": "ZEBrNTpHC02iUah025KM3te6ylM7W4S4silsrFtUkn3Ag",
        "created_at": "1609937654",
        "latency_mode": "standard",
        "max_continuous_duration": 43200
      }
    },
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      },
      {
        "name": "playback_id",
        "wire": "PLAYBACK_ID",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      },
      {
        "name": "simulcast_target_id",
        "wire": "SIMULCAST_TARGET_ID",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}",
    "args": [
      {
        "name": "id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions",
    "action": "new_asset_setting_static_rendition",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "update",
    "method": "PATCH",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}",
    "args": [
      {
        "name": "id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "stream_key": "831b5bde-cd8a-5bc4-115d-4ba34b19f481",
        "status": "idle",
        "reconnect_window": 30,
        "playback_ids": [
          {
            "policy": "public",
            "id": "HNRDuwff3K2VjTZZAPuvd2Kx6D01XUQFv02GFBHPUka018"
          }
        ],
        "new_asset_settings": {
          "playback_policies": [
            "public"
          ]
        },
        "id": "ZEBrNTpHC02iUah025KM3te6ylM7W4S4silsrFtUkn3Ag",
        "created_at": "1609937654",
        "latency_mode": "standard",
        "max_continuous_duration": 1200
      }
    },
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/disable",
    "action": "disable",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {}
    },
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/embedded-subtitles",
    "action": "embedded_subtitle",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "stream_key": "acaf2ca1-ba9c-5ffe-8c9c-a02bbf0009a6",
        "status": "idle",
        "reconnect_window": 60,
        "playback_ids": [
          {
            "policy": "public",
            "id": "HNRDuwff3K2VjTZZAPuvd2Kx6D01XUQFv02GFBHPUka018"
          },
          {
            "policy": "public",
            "id": "4O902oOPU100s7XIQgOeY01U7dHzYlBe26zi3Sq01EJqnxw"
          }
        ],
        "new_asset_settings": {
          "playback_policies": [
            "public"
          ]
        },
        "id": "ZEBrNTpHC02iUah025KM3te6ylM7W4S4silsrFtUkn3Ag",
        "created_at": "1609937654",
        "embedded_subtitles": [
          {
            "name": "English CC",
            "language_code": "en",
            "language_channel": "cc1",
            "passthrough": "Example"
          }
        ],
        "latency_mode": "standard",
        "max_continuous_duration": 43200
      }
    },
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/enable",
    "action": "enable",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {}
    },
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/generated-subtitles",
    "action": "generated_subtitle",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "stream_key": "acaf2ca1-ba9c-5ffe-8c9c-a02bbf0009a6",
        "status": "idle",
        "reconnect_window": 60,
        "playback_ids": [
          {
            "policy": "public",
            "id": "HNRDuwff3K2VjTZZAPuvd2Kx6D01XUQFv02GFBHPUka018"
          },
          {
            "policy": "public",
            "id": "4O902oOPU100s7XIQgOeY01U7dHzYlBe26zi3Sq01EJqnxw"
          }
        ],
        "new_asset_settings": {
          "playback_policies": [
            "public"
          ]
        },
        "id": "ZEBrNTpHC02iUah025KM3te6ylM7W4S4silsrFtUkn3Ag",
        "created_at": "1609937654",
        "generated_subtitles": [
          {
            "name": "English CC (ASR)",
            "language_code": "en",
            "passthrough": "Example"
          }
        ],
        "latency_mode": "standard",
        "max_continuous_duration": 43200
      }
    },
    "idField": "id"
  },
  {
    "entity": "live_stream",
    "accessor": "LiveStream",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/new-asset-settings/static-renditions",
    "action": "new_asset_setting_static_rendition",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "stream_key": "abcdefgh",
        "status": "idle",
        "reconnect_window": 60,
        "playback_ids": [
          {
            "policy": "public",
            "id": "HNRDuwff3K2VjTZZAPuvd2Kx6D01XUQFv02GFBHPUka018"
          }
        ],
        "new_asset_settings": {
          "playback_policies": [
            "public"
          ],
          "static_renditions": [
            {
              "resolution": "audio-only"
            },
            {
              "resolution": "highest"
            }
          ]
        },
        "id": "ZEBrNTpHC02iUah025KM3te6ylM7W4S4silsrFtUkn3Ag",
        "created_at": "1609937654",
        "latency_mode": "standard",
        "max_continuous_duration": 43200
      }
    },
    "idField": "id"
  },
  {
    "entity": "live_stream_playback_id",
    "accessor": "LiveStreamPlaybackId",
    "op": "load",
    "method": "GET",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}",
    "args": [
      {
        "name": "id",
        "wire": "PLAYBACK_ID",
        "value": "p1"
      },
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "policy": "public",
        "id": "4O902oOPU100s7XIQgOeY01U7dHzYlBe26zi3Sq01EJqnxw"
      }
    },
    "idField": "id"
  },
  {
    "entity": "metric_timeseries_data",
    "accessor": "MetricTimeseriesData",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/metrics/{METRIC_ID}/timeseries",
    "args": [
      {
        "name": "metric_id",
        "wire": "METRIC_ID",
        "value": "video_startup_time"
      }
    ],
    "select": {
      "filter": "v1",
      "group_by": "v1",
      "measurement": "v1",
      "metric_filter": "v1",
      "order_direction": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]",
      "filters[]",
      "metric_filters[]",
      "measurement",
      "order_direction",
      "group_by"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 2,
      "timeframe": [
        1610029711,
        1610116111
      ],
      "meta": {
        "aggregation": "view_end"
      },
      "data": [
        [
          "2021-01-07T14:00:00Z",
          "0.8743536882994202",
          "154240"
        ],
        [
          "2021-01-07T15:00:00Z",
          "0.8929105055911401",
          "156056"
        ]
      ]
    },
    "idField": "id"
  },
  {
    "entity": "moderate",
    "accessor": "Moderate",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/moderate",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "moderate",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "thresholds": {
            "sexual": 0.7,
            "violence": 0.8
          },
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            }
          },
          "on_flagged": {
            "action": "delete_playback_ids"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "moderate",
    "accessor": "Moderate",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/moderate/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "moderate",
        "status": "completed",
        "units_consumed": 1,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "thresholds": {
            "sexual": 0.7,
            "violence": 0.8
          },
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            }
          },
          "on_flagged": {
            "action": "delete_playback_ids"
          }
        },
        "outputs": {
          "thumbnail_scores": [
            {
              "time": 0,
              "sexual": 0.01,
              "violence": 0.02
            },
            {
              "time": 30,
              "sexual": 0.03,
              "violence": 0.15
            },
            {
              "time": 60,
              "sexual": 0.02,
              "violence": 0.05
            }
          ],
          "max_scores": {
            "sexual": 0.03,
            "violence": 0.15
          },
          "exceeds_threshold": false
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "monitoring_breakdown",
    "accessor": "MonitoringBreakdown",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown",
    "args": [
      {
        "name": "monitoring_metric_id",
        "wire": "MONITORING_METRIC_ID",
        "value": "current-concurrent-viewers"
      }
    ],
    "select": {
      "dimension": "v1",
      "filter": "v1",
      "order_by": "v1",
      "order_direction": "v1",
      "timestamp": "v1"
    },
    "headers": [],
    "query": [
      "dimension",
      "timestamp",
      "filters[]",
      "order_by",
      "order_direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "concurrent_viewers": 2680,
          "metric_value": 0.008195679660675846,
          "negative_impact": 1,
          "starting_up_viewers": 10,
          "value": "FR"
        },
        {
          "concurrent_viewers": 36,
          "metric_value": 0.010317417106767573,
          "negative_impact": 4,
          "starting_up_viewers": 1,
          "value": "ES"
        },
        {
          "concurrent_viewers": 30,
          "metric_value": 0.06408818534303201,
          "negative_impact": 2,
          "starting_up_viewers": 1,
          "value": "RE"
        }
      ],
      "timeframe": [
        1610121421,
        1610121421
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "monitoring_breakdown_timeseries",
    "accessor": "MonitoringBreakdownTimeseries",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries",
    "args": [
      {
        "name": "monitoring_metric_id",
        "wire": "MONITORING_METRIC_ID",
        "value": "current-concurrent-viewers"
      }
    ],
    "select": {
      "dimension": "v1",
      "filter": "v1",
      "limit": "v1",
      "order_by": "v1",
      "order_direction": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "dimension",
      "timeframe[]",
      "filters[]",
      "limit",
      "order_by",
      "order_direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "values": [
            {
              "value": "FR",
              "metric_value": 0.008195679660675846,
              "concurrent_viewers": 2680,
              "starting_up_viewers": 10
            },
            {
              "value": "ES",
              "metric_value": 0.010317417106767573,
              "concurrent_viewers": 36,
              "starting_up_viewers": 1
            },
            {
              "value": "GB",
              "metric_value": 0.008232510579858339,
              "concurrent_viewers": 26,
              "starting_up_viewers": 1
            }
          ],
          "date": "2023-05-18T19:36:30Z"
        },
        {
          "values": [
            {
              "value": "FR",
              "metric_value": 0.00724579660675846,
              "concurrent_viewers": 2690,
              "starting_up_viewers": 1
            },
            {
              "value": "ES",
              "metric_value": 0.014317417106767573,
              "concurrent_viewers": 35,
              "starting_up_viewers": 15
            },
            {
              "value": "GB",
              "metric_value": 0.007232510579851874,
              "concurrent_viewers": 24,
              "starting_up_viewers": 1
            }
          ],
          "date": "2023-05-18T19:36:35Z"
        }
      ],
      "timeframe": [
        1684438590,
        1684438600
      ],
      "total_row_count": 2
    },
    "idField": "id"
  },
  {
    "entity": "monitoring_histogram_timeseries",
    "accessor": "MonitoringHistogramTimeseries",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries",
    "args": [
      {
        "name": "monitoring_histogram_metric_id",
        "wire": "MONITORING_HISTOGRAM_METRIC_ID",
        "value": "video-startup-time"
      }
    ],
    "select": {
      "filter": "v1"
    },
    "headers": [],
    "query": [
      "filters[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "average": 5298.1612903225805,
          "bucket_values": [
            {
              "count": 3,
              "percentage": 0.0967741935483871
            },
            {
              "count": 0,
              "percentage": 0
            },
            {
              "count": 0,
              "percentage": 0
            }
          ],
          "max_percentage": 0.5161290322580645,
          "median": 4463,
          "p95": 14834,
          "sum": 31,
          "timestamp": "2021-01-08T15:30:00Z"
        },
        {
          "average": 3828.4146341463415,
          "bucket_values": [
            {
              "count": 5,
              "percentage": 0.12195121951219512
            },
            {
              "count": 0,
              "percentage": 0
            },
            {
              "count": 0,
              "percentage": 0
            }
          ],
          "max_percentage": 0.43902439024390244,
          "median": 2625,
          "p95": 7378,
          "sum": 41,
          "timestamp": "2021-01-08T15:31:00Z"
        }
      ],
      "meta": {
        "bucket_unit": "milliseconds",
        "buckets": [
          {
            "end": 100,
            "start": 0
          },
          {
            "end": 500,
            "start": 100
          },
          {
            "end": 1000,
            "start": 500
          }
        ]
      },
      "timeframe": [
        1610119800,
        1610121540
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "monitoring_timeseries",
    "accessor": "MonitoringTimeseries",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries",
    "args": [
      {
        "name": "monitoring_metric_id",
        "wire": "MONITORING_METRIC_ID",
        "value": "current-concurrent-viewers"
      }
    ],
    "select": {
      "filter": "v1",
      "timestamp": "v1"
    },
    "headers": [],
    "query": [
      "filters[]",
      "timestamp"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "concurrent_viewers": 2790,
          "date": "2021-01-08T15:31:20Z",
          "value": 2790
        },
        {
          "concurrent_viewers": 2788,
          "date": "2021-01-08T15:31:25Z",
          "value": 2788
        },
        {
          "concurrent_viewers": 2791,
          "date": "2021-01-08T15:31:30Z",
          "value": 2791
        }
      ],
      "timeframe": [
        1610119880,
        1610121675
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "overall",
    "accessor": "Overall",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/metrics/{METRIC_ID}/overall",
    "args": [
      {
        "name": "metric_id",
        "wire": "METRIC_ID",
        "value": "video_startup_time"
      }
    ],
    "select": {
      "filter": "v1",
      "measurement": "v1",
      "metric_filter": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]",
      "filters[]",
      "metric_filters[]",
      "measurement"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 1,
      "timeframe": [
        1610029525,
        1610115925
      ],
      "meta": {
        "aggregation": "view_end"
      },
      "data": {
        "value": 4,
        "total_watch_time": 513934,
        "total_playing_time": 413934,
        "total_views": 5
      }
    },
    "idField": "id"
  },
  {
    "entity": "playback_restriction",
    "accessor": "PlaybackRestriction",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/playback-restrictions",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "id": "9dbEg8o00uqQzZbzJT6NXdqNA00SdnSo8O",
        "updated_at": "1607945257",
        "created_at": "1607945257",
        "referrer": {
          "allowed_domains": [
            "*.example.com"
          ],
          "allow_no_referrer": true
        },
        "user_agent": {
          "allow_no_user_agent": false,
          "allow_high_risk_user_agent": false
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "playback_restriction",
    "accessor": "PlaybackRestriction",
    "op": "list",
    "method": "GET",
    "path": "/video/v1/playback-restrictions",
    "args": [],
    "select": {
      "limit": "v1",
      "page": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "limit"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 2,
      "page": 1,
      "limit": 100,
      "data": [
        {
          "id": "9dbEg8o00uqQzZbzJT6NXdqNA00SdnSo8O",
          "updated_at": "1607945257",
          "created_at": "1607939184",
          "referrer": {
            "allowed_domains": [
              "*.example.com"
            ],
            "allow_no_referrer": false
          },
          "user_agent": {
            "allow_no_user_agent": false,
            "allow_high_risk_user_agent": false
          }
        },
        {
          "id": "012uTQqPygDYWz3jey8cyOX9n01Bd5SDH1",
          "updated_at": "1607945980",
          "created_at": "1607939188",
          "referrer": {
            "allowed_domains": [
              "a.example.com",
              "b.example.com"
            ],
            "allow_no_referrer": true
          },
          "user_agent": {
            "allow_no_user_agent": false,
            "allow_high_risk_user_agent": false
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "playback_restriction",
    "accessor": "PlaybackRestriction",
    "op": "load",
    "method": "GET",
    "path": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}",
    "args": [
      {
        "name": "id",
        "wire": "PLAYBACK_RESTRICTION_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "9dbEg8o00uqQzZbzJT6NXdqNA00SdnSo8O",
        "updated_at": "1607945257",
        "created_at": "1607939184",
        "referrer": {
          "allowed_domains": [
            "*.example.com"
          ],
          "allow_no_referrer": false
        },
        "user_agent": {
          "allow_no_user_agent": false,
          "allow_high_risk_user_agent": false
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "playback_restriction",
    "accessor": "PlaybackRestriction",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}",
    "args": [
      {
        "name": "id",
        "wire": "PLAYBACK_RESTRICTION_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "playback_restriction",
    "accessor": "PlaybackRestriction",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer",
    "action": "referrer",
    "args": [
      {
        "name": "playback_restriction_id",
        "wire": "PLAYBACK_RESTRICTION_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "9dbEg8o00uqQzZbzJT6NXdqNA00SdnSo8O",
        "updated_at": "1607945257",
        "created_at": "1607939184",
        "referrer": {
          "allowed_domains": [
            "*.example.com"
          ],
          "allow_no_referrer": true
        },
        "user_agent": {
          "allow_no_user_agent": false,
          "allow_high_risk_user_agent": false
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "playback_restriction",
    "accessor": "PlaybackRestriction",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent",
    "action": "user_agent",
    "args": [
      {
        "name": "playback_restriction_id",
        "wire": "PLAYBACK_RESTRICTION_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "9dbEg8o00uqQzZbzJT6NXdqNA00SdnSo8O",
        "updated_at": "1607945257",
        "created_at": "1607939184",
        "referrer": {
          "allowed_domains": [
            "*.example.com"
          ],
          "allow_no_referrer": true
        },
        "user_agent": {
          "allow_no_user_agent": false,
          "allow_high_risk_user_agent": false
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "real_time_breakdown",
    "accessor": "RealTimeBreakdown",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown",
    "args": [
      {
        "name": "realtime_metric_id",
        "wire": "REALTIME_METRIC_ID",
        "value": "current-concurrent-viewers"
      }
    ],
    "select": {
      "dimension": "v1",
      "filter": "v1",
      "order_by": "v1",
      "order_direction": "v1",
      "timestamp": "v1"
    },
    "headers": [],
    "query": [
      "dimension",
      "timestamp",
      "filters[]",
      "order_by",
      "order_direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "concurrent_viewers": 2680,
          "metric_value": 0.008195679660675846,
          "negative_impact": 1,
          "starting_up_viewers": 10,
          "value": "FR"
        },
        {
          "concurrent_viewers": 36,
          "metric_value": 0.010317417106767573,
          "negative_impact": 4,
          "starting_up_viewers": 1,
          "value": "ES"
        },
        {
          "concurrent_viewers": 30,
          "metric_value": 0.06408818534303201,
          "negative_impact": 2,
          "starting_up_viewers": 1,
          "value": "RE"
        }
      ],
      "timeframe": [
        1610121421,
        1610121421
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "real_time_histogram_timeseries",
    "accessor": "RealTimeHistogramTimeseries",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries",
    "args": [
      {
        "name": "realtime_histogram_metric_id",
        "wire": "REALTIME_HISTOGRAM_METRIC_ID",
        "value": "video-startup-time"
      }
    ],
    "select": {
      "filter": "v1"
    },
    "headers": [],
    "query": [
      "filters[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "average": 5298.1612903225805,
          "bucket_values": [
            {
              "count": 3,
              "percentage": 0.0967741935483871
            },
            {
              "count": 0,
              "percentage": 0
            },
            {
              "count": 0,
              "percentage": 0
            }
          ],
          "max_percentage": 0.5161290322580645,
          "median": 4463,
          "p95": 14834,
          "sum": 31,
          "timestamp": "2021-01-08T15:30:00Z"
        },
        {
          "average": 3828.4146341463415,
          "bucket_values": [
            {
              "count": 5,
              "percentage": 0.12195121951219512
            },
            {
              "count": 0,
              "percentage": 0
            },
            {
              "count": 0,
              "percentage": 0
            }
          ],
          "max_percentage": 0.43902439024390244,
          "median": 2625,
          "p95": 7378,
          "sum": 41,
          "timestamp": "2021-01-08T15:31:00Z"
        }
      ],
      "meta": {
        "bucket_unit": "milliseconds",
        "buckets": [
          {
            "end": 100,
            "start": 0
          },
          {
            "end": 500,
            "start": 100
          },
          {
            "end": 1000,
            "start": 500
          }
        ]
      },
      "timeframe": [
        1610119800,
        1610121540
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "real_time_timeseries",
    "accessor": "RealTimeTimeseries",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries",
    "args": [
      {
        "name": "realtime_metric_id",
        "wire": "REALTIME_METRIC_ID",
        "value": "current-concurrent-viewers"
      }
    ],
    "select": {
      "filter": "v1",
      "timestamp": "v1"
    },
    "headers": [],
    "query": [
      "filters[]",
      "timestamp"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "concurrent_viewers": 2790,
          "date": "2021-01-08T15:31:20Z",
          "value": 2790
        },
        {
          "concurrent_viewers": 2788,
          "date": "2021-01-08T15:31:25Z",
          "value": 2788
        },
        {
          "concurrent_viewers": 2791,
          "date": "2021-01-08T15:31:30Z",
          "value": 2791
        }
      ],
      "timeframe": [
        1610119880,
        1610121675
      ],
      "total_row_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "signal_live_stream_complete",
    "accessor": "SignalLiveStreamComplete",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/complete",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {}
    },
    "idField": "id"
  },
  {
    "entity": "signing_key",
    "accessor": "SigningKey",
    "op": "remove",
    "method": "DELETE",
    "path": "/system/v1/signing-keys/{SIGNING_KEY_ID}",
    "args": [
      {
        "name": "id",
        "wire": "SIGNING_KEY_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "simulcast_target",
    "accessor": "SimulcastTarget",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets",
    "args": [
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "url": "rtmp://live.example.com/app",
        "stream_key": "abcdefgh",
        "status": "idle",
        "passthrough": "Example",
        "id": "le1axfGDc9ETqh6trHNTxGQ9XEhj02fOnX0200aAh24fwlmwzqKCYNJgw"
      }
    },
    "idField": "id"
  },
  {
    "entity": "simulcast_target",
    "accessor": "SimulcastTarget",
    "op": "load",
    "method": "GET",
    "path": "/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}",
    "args": [
      {
        "name": "id",
        "wire": "SIMULCAST_TARGET_ID",
        "value": "p1"
      },
      {
        "name": "live_stream_id",
        "wire": "LIVE_STREAM_ID",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "url": "rtmp://live.example.com/app",
        "stream_key": "abcdefgh",
        "status": "idle",
        "passthrough": "Example",
        "id": "02FU00rPq00fC9S6kygrqlxygGMdpW1lk00BkFpCfc2kGregEIr7brt7CQ"
      }
    },
    "idField": "id"
  },
  {
    "entity": "static_rendition",
    "accessor": "StaticRendition",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/assets/{ASSET_ID}/static-renditions",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "id": "lJ4bGGsp7ZlPf02nMg015W02iHQLN9XnuuLRBsPS00xqd68",
        "type": "standard",
        "ext": "mp4",
        "status": "preparing",
        "resolution": "highest",
        "name": "highest.mp4"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subview_breakdown_timeseries",
    "accessor": "SubviewBreakdownTimeseries",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown-timeseries",
    "args": [
      {
        "name": "subview_metric_id",
        "wire": "METRIC_ID",
        "value": "playing_time"
      },
      {
        "name": "subview_type",
        "wire": "SUBVIEW_TYPE",
        "value": "rendition"
      }
    ],
    "select": {
      "breakdown_value_limit": "v1",
      "filter": "v1",
      "group_by": "v1",
      "time_granularity": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]",
      "filters[]",
      "group_by[]",
      "time_granularity",
      "breakdown_value_limit"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "date": "2021-04-01T00:00:00Z",
          "status": "complete",
          "values": [
            {
              "breakdown_value": "18.5Mb / 3840w / 2160h / 60fps / HEVC / 4k",
              "metric_value": 12500000
            },
            {
              "breakdown_value": "12Mb / 2560w / 1440h / 60fps / HEVC / 2k",
              "metric_value": 6300000
            },
            {
              "breakdown_value": "other",
              "metric_value": 4200000
            }
          ]
        },
        {
          "date": "2021-04-01T01:00:00Z",
          "status": "partial",
          "values": [
            {
              "breakdown_value": "18.5Mb / 3840w / 2160h / 60fps / HEVC / 4k",
              "metric_value": 3800000
            }
          ]
        }
      ],
      "meta": {
        "subview_type": "rendition",
        "metric": "playing_time",
        "unit": "ms",
        "group_by": [
          "video_source_bitrate",
          "video_source_width",
          "video_source_height"
        ],
        "time_granularity": "hour",
        "complete_through": "2021-04-01T00:59:59Z"
      },
      "total_row_count": 2,
      "timeframe": [
        1617235200,
        1617321600
      ]
    },
    "idField": "id"
  },
  {
    "entity": "subview_overall_value",
    "accessor": "SubviewOverallValue",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/overall",
    "args": [
      {
        "name": "subview_metric_id",
        "wire": "METRIC_ID",
        "value": "playing_time"
      },
      {
        "name": "subview_type",
        "wire": "SUBVIEW_TYPE",
        "value": "rendition"
      }
    ],
    "select": {
      "filter": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "timeframe[]",
      "filters[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "metric_value": 186400000
      },
      "meta": {
        "subview_type": "rendition",
        "metric": "playing_time",
        "unit": "ms"
      },
      "total_row_count": null,
      "timeframe": [
        1617235200,
        1617321600
      ]
    },
    "idField": "id"
  },
  {
    "entity": "summarize",
    "accessor": "Summarize",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/summarize",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "summarize",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "tone": "neutral",
          "tag_count": 10,
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            },
            "summary_style": "concise",
            "audience": "Product marketers",
            "brand_terms": [
              "Mux",
              "Robots"
            ]
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "summarize",
    "accessor": "Summarize",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/summarize/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "summarize",
        "status": "completed",
        "units_consumed": 1,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "tone": "neutral",
          "tag_count": 10,
          "output_steering": {
            "scope": {
              "start_time": 30,
              "end_time": 180
            },
            "summary_style": "concise",
            "audience": "Product marketers",
            "brand_terms": [
              "Mux",
              "Robots"
            ]
          }
        },
        "outputs": {
          "title": "How to Build a Sustainable Garden in Your Backyard",
          "description": "This video walks through the step-by-step process of creating a sustainable backyard garden, covering soil preparation, plant selection, and organic pest control methods.",
          "tags": [
            "gardening",
            "sustainability",
            "backyard"
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "transcription_vocabulary",
    "accessor": "TranscriptionVocabulary",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/transcription-vocabularies",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "id": "VDm3npt2eaEDvz9emzun8Q",
        "name": "Mux API Vocabulary",
        "phrases": [
          "Mux",
          "Live Stream",
          "Playback ID"
        ],
        "created_at": "1609869152",
        "updated_at": "1609869152"
      }
    },
    "idField": "id"
  },
  {
    "entity": "transcription_vocabulary",
    "accessor": "TranscriptionVocabulary",
    "op": "list",
    "method": "GET",
    "path": "/video/v1/transcription-vocabularies",
    "args": [],
    "select": {
      "limit": "v1",
      "page": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "id": "VDm3npt2eaEDvz9emzun8Q",
          "name": "Mux API Vocabulary",
          "phrases": [
            "Mux",
            "Live Stream",
            "Playback ID"
          ],
          "created_at": "1609869152",
          "updated_at": "1609870000"
        },
        {
          "id": "M1lDlzSP102NgukTnyQyLqw",
          "name": "Video Codecs",
          "phrases": [
            "h.264",
            "HEVC",
            "AV1"
          ],
          "created_at": "1609869152",
          "updated_at": "1609870000"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "transcription_vocabulary",
    "accessor": "TranscriptionVocabulary",
    "op": "load",
    "method": "GET",
    "path": "/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}",
    "args": [
      {
        "name": "id",
        "wire": "TRANSCRIPTION_VOCABULARY_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "VDm3npt2eaEDvz9emzun8Q",
        "name": "Mux API Vocabulary",
        "phrases": [
          "Mux",
          "Live Stream",
          "Playback ID"
        ],
        "created_at": "1609869152",
        "updated_at": "1609870000"
      }
    },
    "idField": "id"
  },
  {
    "entity": "transcription_vocabulary",
    "accessor": "TranscriptionVocabulary",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}",
    "args": [
      {
        "name": "id",
        "wire": "TRANSCRIPTION_VOCABULARY_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "transcription_vocabulary",
    "accessor": "TranscriptionVocabulary",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}",
    "args": [
      {
        "name": "id",
        "wire": "TRANSCRIPTION_VOCABULARY_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "VDm3npt2eaEDvz9emzun8Q",
        "name": "Mux API Vocabulary - Updated",
        "phrases": [
          "Mux",
          "Live Stream",
          "RTMP"
        ],
        "created_at": "1609869152",
        "updated_at": "1609870000"
      }
    },
    "idField": "id"
  },
  {
    "entity": "translate_audio",
    "accessor": "TranslateAudio",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/translate-audio",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "translate-audio",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "to_language_code": "es",
          "upload_to_mux": true,
          "replace_existing_tracks": "fail"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "translate_audio",
    "accessor": "TranslateAudio",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/translate-audio/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "translate-audio",
        "status": "completed",
        "units_consumed": 1,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "to_language_code": "es",
          "upload_to_mux": true,
          "replace_existing_tracks": "fail"
        },
        "outputs": {
          "uploaded_track_id": "track_es_abc123",
          "temporary_audio_url": "https://storage.example.com/dubs/es/audio.m4a?token=abc123"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "translate_caption",
    "accessor": "TranslateCaption",
    "op": "create",
    "method": "POST",
    "path": "/robots/v0/jobs/translate-captions",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "translate-captions",
        "status": "pending",
        "units_consumed": 0,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "track_id": "track_en_abc123",
          "to_language_code": "es",
          "upload_to_mux": true,
          "never_translate": [
            "Mux"
          ],
          "replace_existing_tracks": "fail"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "translate_caption",
    "accessor": "TranslateCaption",
    "op": "load",
    "method": "GET",
    "path": "/robots/v0/jobs/translate-captions/{JOB_ID}",
    "args": [
      {
        "name": "id",
        "wire": "JOB_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "rjob_example123",
        "workflow": "translate-captions",
        "status": "completed",
        "units_consumed": 1,
        "created_at": 1700000000,
        "updated_at": 1700000060,
        "parameters": {
          "asset_id": "mux_asset_123abc",
          "track_id": "track_en_abc123",
          "to_language_code": "es",
          "upload_to_mux": true,
          "never_translate": [
            "Mux"
          ],
          "replace_existing_tracks": "fail"
        },
        "outputs": {
          "uploaded_track_id": "track_es_abc123",
          "temporary_vtt_url": "https://storage.example.com/translations/es/captions.vtt?token=abc123",
          "never_translate_terms_preserved": true
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "update_asset_track",
    "accessor": "UpdateAssetTrack",
    "op": "update",
    "method": "PATCH",
    "path": "/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}",
    "args": [
      {
        "name": "asset_id",
        "wire": "ASSET_ID",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "TRACK_ID",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "type": "text",
        "text_type": "subtitles",
        "status": "ready",
        "passthrough": "passthrough value",
        "name": "English",
        "language_code": "en-US",
        "id": "xBe7u01029ipxBLQhYzZCJ1cke01zCkuUsgnYtH0017nNzbpv2YcsoMDmw",
        "closed_captions": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "upload",
    "accessor": "Upload",
    "op": "create",
    "method": "POST",
    "path": "/video/v1/uploads",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "url": "https://storage.googleapis.com/video-storage-us-east1-uploads/zd01Pe2bNpYhxbrwYABgFE01twZdtv4M00kts2i02GhbGjc?Expires=1610112458&GoogleAccessId=mux-direct-upload%40mux-cloud.iam.gserviceaccount.com&Signature=LCu4PMoKUo%2BJkWQAUwB9WU4bWVVfW3K5bZxSxEptBz3DrjbFxNyGvs0sriyJupZh9Jdb6FxKWFIRbxEetfnAAiesOvSPH%2F1GlIichmGg3YfebfxiX77%2B6ToFF6FMkJucBo284PD90AVLHhKagOea2VsbdO0fh78MAxGH9sEspyQ2uJEfYWjHFqYQ9smJyIuM3CYOmN5HKPgRWy2yUqzV7OTMe%2FivPO4%2FX6XiiN2J4nTmy83252CJUsHIvbiGctfKxcNI6b23UVN4B1tJTVgyxTOZiBQCkMLkD%2FEe5OhoAkvJgkqENRr0q3swO0IChDDWjrh7OTMwqvWGwAoVXEGiHg%3D%3D&upload_id=ABg5-UznTdib1HhOAMjdHhWIYqBbwmSYM6dVKyPe3v33uTeEE8gkN5QzvR3cei6uSZOSrjPn7bdvvDH3nhsrLBq8AjWY2qE4UQ",
        "timeout": 3600,
        "status": "waiting",
        "new_asset_settings": {
          "playback_policies": [
            "public"
          ],
          "video_quality": "basic"
        },
        "id": "zd01Pe2bNpYhxbrwYABgFE01twZdtv4M00kts2i02GhbGjc",
        "cors_origin": "https://example.com/"
      }
    },
    "idField": "id"
  },
  {
    "entity": "upload",
    "accessor": "Upload",
    "op": "list",
    "method": "GET",
    "path": "/video/v1/uploads",
    "args": [],
    "select": {
      "limit": "v1",
      "page": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "url": "https://storage.googleapis.com/video-storage-us-east1-uploads/zd01Pe2bNpYhxbrwYABgFE01twZdtv4M00kts2i02GhbGjc?Expires=1610112458&GoogleAccessId=mux-direct-upload%40mux-cloud.iam.gserviceaccount.com&Signature=LCu4PMoKUo%2BJkWQAUwB9WU4bWVVfW3K5bZxSxEptBz3DrjbFxNyGvs0sriyJupZh9Jdb6FxKWFIRbxEetfnAAiesOvSPH%2F1GlIichmGg3YfebfxiX77%2B6ToFF6FMkJucBo284PD90AVLHhKagOea2VsbdO0fh78MAxGH9sEspyQ2uJEfYWjHFqYQ9smJyIuM3CYOmN5HKPgRWy2yUqzV7OTMe%2FivPO4%2FX6XiiN2J4nTmy83252CJUsHIvbiGctfKxcNI6b23UVN4B1tJTVgyxTOZiBQCkMLkD%2FEe5OhoAkvJgkqENRr0q3swO0IChDDWjrh7OTMwqvWGwAoVXEGiHg%3D%3D&upload_id=ABg5-UznTdib1HhOAMjdHhWIYqBbwmSYM6dVKyPe3v33uTeEE8gkN5QzvR3cei6uSZOSrjPn7bdvvDH3nhsrLBq8AjWY2qE4UQ",
          "timeout": 3600,
          "status": "waiting",
          "new_asset_settings": {
            "playback_policies": [
              "public"
            ],
            "video_quality": "basic"
          },
          "id": "zd01Pe2bNpYhxbrwYABgFE01twZdtv4M00kts2i02GhbGjc",
          "cors_origin": "https://example.com/"
        },
        {
          "timeout": 3600,
          "status": "asset_created",
          "new_asset_settings": {
            "playback_policies": [
              "public"
            ],
            "video_quality": "basic"
          },
          "id": "YzoCL01HHOtAVYq4Ds9zekdHJ2XqL9e8ukPWbr01KhtvM",
          "asset_id": "AnFVqAVXfb7vVL3ypSQDMnJZunnb8nkwe02O00p2gK8P00",
          "cors_origin": "https://example.com/"
        },
        {
          "timeout": 10800,
          "status": "cancelled",
          "new_asset_settings": {
            "playback_policies": [
              "public"
            ],
            "video_quality": "basic"
          },
          "id": "AZcWu0201SqVW01LMdmVxE00m3gEWUFZPItvni1sTqF800dQ",
          "cors_origin": "https://example.com/"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "upload",
    "accessor": "Upload",
    "op": "load",
    "method": "GET",
    "path": "/video/v1/uploads/{UPLOAD_ID}",
    "args": [
      {
        "name": "id",
        "wire": "UPLOAD_ID",
        "value": "abcd1234"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "timeout": 3600,
        "status": "asset_created",
        "new_asset_settings": {
          "playback_policies": [
            "public"
          ],
          "video_quality": "basic"
        },
        "id": "YzoCL01HHOtAVYq4Ds9zekdHJ2XqL9e8ukPWbr01KhtvM",
        "asset_id": "AnFVqAVXfb7vVL3ypSQDMnJZunnb8nkwe02O00p2gK8P00",
        "cors_origin": "https://example.com/"
      }
    },
    "idField": "id"
  },
  {
    "entity": "upload",
    "accessor": "Upload",
    "op": "update",
    "method": "PUT",
    "path": "/video/v1/uploads/{UPLOAD_ID}/cancel",
    "action": "cancel",
    "args": [
      {
        "name": "upload_id",
        "wire": "UPLOAD_ID",
        "value": "abcd1234"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "timeout": 3600,
        "status": "cancelled",
        "new_asset_settings": {
          "playback_policies": [
            "public"
          ],
          "video_quality": "basic"
        },
        "id": "zd01Pe2bNpYhxbrwYABgFE01twZdtv4M00kts2i02GhbGjc",
        "cors_origin": "https://example.com/"
      }
    },
    "idField": "id"
  },
  {
    "entity": "url_signing_key",
    "accessor": "UrlSigningKey",
    "op": "remove",
    "method": "DELETE",
    "path": "/video/v1/signing-keys/{SIGNING_KEY_ID}",
    "args": [
      {
        "name": "id",
        "wire": "SIGNING_KEY_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "usage_export",
    "accessor": "UsageExport",
    "op": "list",
    "method": "GET",
    "path": "/system/v1/usage/exports",
    "args": [],
    "select": {
      "download_url_ttl": "v1",
      "limit": "v1",
      "page": "v1",
      "timeframe": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page",
      "timeframe[]",
      "download_url_ttl"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "date": "2026-03-30",
          "file_size": 1048576,
          "download_url": "https://storage.mux.com/org_abc123/2026-06-09.csv?X-Amz-Expires=3600&X-Amz-Signature=abc",
          "download_url_expires_at": 1749513600
        },
        {
          "date": "2026-03-29",
          "file_size": 983040,
          "download_url": "https://storage.mux.com/org_abc123/2026-06-08.csv?X-Amz-Expires=3600&X-Amz-Signature=def",
          "download_url_expires_at": 1749513600
        }
      ],
      "meta": {
        "page": 1,
        "pages": 16,
        "limit": 25,
        "total": 397
      }
    },
    "idField": "id"
  },
  {
    "entity": "video_view",
    "accessor": "VideoView",
    "op": "list",
    "method": "GET",
    "path": "/data/v1/video-views",
    "args": [],
    "select": {
      "error_id": "v1",
      "filter": "v1",
      "limit": "v1",
      "metric_filter": "v1",
      "order_direction": "v1",
      "page": "v1",
      "timeframe": "v1",
      "viewer_id": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page",
      "viewer_id",
      "error_id",
      "order_direction",
      "filters[]",
      "metric_filters[]",
      "timeframe[]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": 4,
      "timeframe": [
        1610025789,
        1610112189
      ],
      "data": [
        {
          "viewer_os_family": "OS X",
          "viewer_application_name": "Chrome",
          "view_start": "2021-01-07T20:34:06Z",
          "view_end": "2021-01-07T20:46:04Z",
          "video_title": "my-title",
          "total_row_count": 4,
          "player_error_message": null,
          "player_error_code": null,
          "id": "JpA81zBfGaGZ85C6aGF3bptyD4CKwpdNgamr",
          "error_type_id": 1,
          "country_code": "US",
          "viewer_experience_score": 0.8,
          "watch_time": 1000,
          "playback_failure": false
        },
        {
          "viewer_os_family": "OS X",
          "viewer_application_name": "Chrome",
          "view_start": "2021-01-07T20:21:53Z",
          "view_end": "2021-01-07T20:34:03Z",
          "video_title": "",
          "total_row_count": 4,
          "player_error_message": null,
          "player_error_code": null,
          "id": "jPVLR5giYMrLYbHM88Tkn3cM3qCRDk0jL114",
          "error_type_id": 1,
          "country_code": "US",
          "viewer_experience_score": 0.8,
          "watch_time": 1000,
          "playback_failure": false
        },
        {
          "viewer_os_family": "OS X",
          "viewer_application_name": "Chrome",
          "view_start": "2021-01-07T15:16:06Z",
          "view_end": "2021-01-07T15:17:06Z",
          "video_title": "Video Test Title 12.14.20",
          "total_row_count": 4,
          "player_error_message": "this is an error message from the player",
          "player_error_code": "1001",
          "id": "pdLDVKBuPZJJ9YsPVmtmB9FG9gsWBWMmYar4",
          "error_type_id": 1,
          "country_code": "US",
          "viewer_experience_score": 0.8,
          "watch_time": 1000,
          "playback_failure": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "video_view",
    "accessor": "VideoView",
    "op": "load",
    "method": "GET",
    "path": "/data/v1/video-views/{VIDEO_VIEW_ID}",
    "args": [
      {
        "name": "id",
        "wire": "VIDEO_VIEW_ID",
        "value": "abcd1234"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_row_count": null,
      "timeframe": [
        1643133378,
        1643219778
      ],
      "data": {
        "id": "LOpk9M00bMWgOJ3hcTcCHmz1JjxMFRRI",
        "ad_attempt_count": null,
        "ad_break_count": null,
        "ad_break_error_count": null,
        "ad_break_error_percentage": null,
        "ad_error_count": null,
        "ad_error_percentage": null,
        "ad_exit_before_start_count": null,
        "ad_exit_before_start_percentage": null,
        "ad_impression_count": null,
        "ad_playback_failure_error_type_id": null,
        "ad_preroll_startup_time": null,
        "ad_startup_error_count": null,
        "ad_startup_error_percentage": null,
        "asn": 11427,
        "asn_name": null,
        "asset_id": "rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy",
        "audio_codec": null,
        "audio_codec_initial": null,
        "buffering_count": null,
        "buffering_duration": null,
        "buffering_rate": null,
        "cdn": null,
        "city": "Austin",
        "client_application_name": null,
        "client_application_version": null,
        "continent_code": null,
        "country_code": "US",
        "country_name": "United States",
        "custom_1": null,
        "custom_2": null,
        "custom_3": null,
        "custom_4": null,
        "custom_5": null,
        "custom_6": null,
        "custom_7": null,
        "custom_8": null,
        "custom_9": null,
        "custom_10": null,
        "environment_id": "envid123",
        "error_type_id": null,
        "events": [
          {
            "viewer_time": 1643216891851,
            "playback_time": 0,
            "name": "playerready",
            "event_time": 1643216898061,
            "details": {}
          },
          {
            "viewer_time": 1643216891853,
            "playback_time": 0,
            "name": "viewstart",
            "event_time": 1643216898101,
            "details": {}
          }
        ],
        "exit_before_video_start": false,
        "experiment_name": null,
        "inserted_at": "2022-01-26T17:08:18Z",
        "isp": null,
        "latitude": null,
        "live_stream_id": null,
        "live_stream_latency": null,
        "long_rebuffering": false,
        "long_resume": false,
        "longitude": null,
        "metro": null,
        "mux_api_version": "v1",
        "mux_embed": null,
        "mux_embed_version": null,
        "mux_viewer_id": "abc123viewerid",
        "page_load_time": null,
        "page_type": null,
        "page_url": null,
        "platform_description": null,
        "platform_summary": null,
        "playback_business_exception_error_type_id": null,
        "playback_failure": false,
        "playback_failure_error_type_id": null,
        "playback_id": null,
        "playback_score": null,
        "player_autoplay": false,
        "player_error_code": "1001",
        "player_error_context": "error context",
        "player_error_message": "error from player",
        "player_height": null,
        "player_instance_id": null,
        "player_language": null,
        "player_load_time": null,
        "player_mux_plugin_name": "apple-mux",
        "player_mux_plugin_version": null,
        "player_name": null,
        "player_poster": null,
        "player_preload": false,
        "player_remote_played": null,
        "player_software": null,
        "player_software_version": null,
        "player_source_domain": null,
        "player_source_duration": null,
        "player_source_height": null,
        "player_source_host_name": "stream.mux.com",
        "player_source_stream_type": null,
        "player_source_type": null,
        "player_source_url": "https://stream.mux.com/ax9qwyTIaUDLdmhesYDKir5kfE4Ve215.m3u8",
        "player_source_width": null,
        "player_startup_time": null,
        "player_version": null,
        "player_view_count": null,
        "player_width": null,
        "preroll_ad_asset_hostname": null,
        "preroll_ad_tag_hostname": null,
        "preroll_played": null,
        "preroll_requested": null,
        "property_id": 1234,
        "quality_score": null,
        "rebuffer_percentage": null,
        "rebuffering_score": null,
        "region": null,
        "rendition_change_count": null,
        "rendition_downshift_count": null,
        "rendition_upshift_count": null,
        "requests_for_first_preroll": null,
        "session_id": "b97d7b4a-8de7-4b18-8984-1f9ec3d3b5bc",
        "short_time": "2022-01-26T17:08:18Z",
        "startup_score": null,
        "sub_property_id": null,
        "time_shift_enabled": false,
        "time_to_first_frame": null,
        "updated_at": "2022-01-26T17:56:12Z",
        "used_captions": false,
        "used_fullscreen": false,
        "used_pip": false,
        "video_affiliate": null,
        "video_brand": null,
        "video_cdn_trace": [],
        "video_codec": null,
        "video_codec_initial": null,
        "video_content_type": null,
        "video_creator_id": null,
        "video_duration": null,
        "video_dynamic_range_type": null,
        "video_dynamic_range_type_initial": null,
        "video_encoding_variant": null,
        "video_id": "rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy",
        "video_language": null,
        "video_producer": null,
        "video_series": null,
        "video_source_bitrate": null,
        "video_source_bitrate_initial": null,
        "video_source_fps": null,
        "video_source_fps_initial": null,
        "video_source_height": null,
        "video_source_height_initial": null,
        "video_source_width": null,
        "video_source_width_initial": null,
        "video_startup_business_exception_error_type_id": null,
        "video_startup_failure": false,
        "video_startup_preroll_load_time": null,
        "video_startup_preroll_request_time": null,
        "video_stream_type": null,
        "video_title": null,
        "video_variant_id": null,
        "video_variant_name": null,
        "view_average_request_latency": null,
        "view_average_request_throughput": null,
        "view_cdn_edge_pop": null,
        "view_cdn_origin": null,
        "view_content_startup_time": null,
        "view_drm_level": null,
        "view_drm_type": null,
        "view_dropped": false,
        "view_dropped_frame_count": null,
        "view_end": "2022-01-26T17:56:12Z",
        "view_error_id": null,
        "view_has_ad": false,
        "view_id": "8d00a0ca-8456-4e55-9ff8-dc501814a6b1",
        "view_max_downscale_percentage": "0.32222223",
        "view_max_playhead_position": "41126",
        "view_max_request_latency": null,
        "view_max_upscale_percentage": "0",
        "view_playing_time": "58134",
        "view_seek_count": null,
        "view_seek_duration": null,
        "view_session_id": null,
        "view_start": "2022-01-26T17:08:18Z",
        "view_total_content_playback_time": 37521,
        "view_total_downscaling": null,
        "view_total_upscaling": null,
        "viewer_application_engine": null,
        "viewer_application_name": null,
        "viewer_application_version": null,
        "viewer_connection_type": null,
        "viewer_device_category": null,
        "viewer_device_manufacturer": null,
        "viewer_device_model": "iPhone10,4",
        "viewer_device_name": null,
        "viewer_experience_score": null,
        "viewer_os_architecture": null,
        "viewer_os_family": null,
        "viewer_os_version": "15.1",
        "viewer_plan": null,
        "viewer_plan_category": null,
        "viewer_plan_status": null,
        "viewer_user_agent": null,
        "viewer_user_id": null,
        "watch_time": null,
        "watched": true,
        "weighted_average_bitrate": 697078
      }
    },
    "idField": "id"
  },
  {
    "entity": "webhook",
    "accessor": "Webhook",
    "op": "create",
    "method": "POST",
    "path": "/system/v1/webhooks",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "data": {
        "id": "abc12d",
        "address": "https://example.com/webhook",
        "enabled": true,
        "created_at": "2026-07-15T12:00:00.000000Z",
        "signing_secret": "9d0hnvbtpk3rfqe0m8s2a71cu5j6l4gd"
      }
    },
    "idField": "id"
  },
  {
    "entity": "webhook",
    "accessor": "Webhook",
    "op": "list",
    "method": "GET",
    "path": "/system/v1/webhooks",
    "args": [],
    "select": {
      "limit": "v1",
      "page": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "id": "fjk04c",
          "address": "https://example.com/webhook2",
          "enabled": false,
          "created_at": "2026-07-21T17:05:32.000000Z"
        },
        {
          "id": "abc12d",
          "address": "https://example.com/webhook",
          "enabled": true,
          "created_at": "2026-07-15T12:00:00.000000Z"
        }
      ],
      "total_row_count": 2,
      "page": 1,
      "limit": 25
    },
    "idField": "id"
  },
  {
    "entity": "webhook",
    "accessor": "Webhook",
    "op": "load",
    "method": "GET",
    "path": "/system/v1/webhooks/{WEBHOOK_ID}",
    "args": [
      {
        "name": "id",
        "wire": "WEBHOOK_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "abc12d",
        "address": "https://example.com/webhook",
        "enabled": true,
        "created_at": "2026-07-15T12:00:00.000000Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "webhook",
    "accessor": "Webhook",
    "op": "remove",
    "method": "DELETE",
    "path": "/system/v1/webhooks/{WEBHOOK_ID}",
    "args": [
      {
        "name": "id",
        "wire": "WEBHOOK_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "webhook",
    "accessor": "Webhook",
    "op": "update",
    "method": "PATCH",
    "path": "/system/v1/webhooks/{WEBHOOK_ID}",
    "args": [
      {
        "name": "id",
        "wire": "WEBHOOK_ID",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "id": "abc12d",
        "address": "https://example.com/new-webhook",
        "enabled": false,
        "created_at": "2026-07-15T12:00:00.000000Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "who_am_i",
    "accessor": "WhoAmI",
    "op": "load",
    "method": "GET",
    "path": "/system/v1/whoami",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": {
        "permissions": [
          "video:read",
          "data:read"
        ],
        "organization_name": "Mux",
        "organization_id": "orgid123",
        "environment_type": "development",
        "environment_name": "Development",
        "environment_id": "envid123",
        "access_token_name": "Development access token"
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
