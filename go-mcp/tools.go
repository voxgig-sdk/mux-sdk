package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/mux-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"annotation | ask_question | asset | asset_or_live_stream_id | asset_playback_id | asset_shot | create_playback_id | create_track | directive | directive_run_detail | directive_run_list | drm_configuration | edit_caption | engagement_heatmap | engagement_hotspot | find_best_thumbnail | find_key_moment | find_scene | generate_asset_shot | generate_chapter | generate_engagement_insight | generate_premium_caption | generate_track_subtitle | incident | input_info | job_summary | list_all_metric_value | list_annotation | list_asset | list_breakdown_value | list_delivery_usage | list_dimension | list_dimension_value | list_drm_configuration | list_error | list_export | list_filter | list_filter_value | list_incident | list_insight | list_job | list_live_stream | list_monitoring_dimension | list_monitoring_metric | list_playback_restriction | list_real_time_dimension | list_real_time_metric | list_related_incident | list_signing_key | list_subview_breakdown_value | list_subview_comparison_value | list_subview_dimension | list_subview_dimension_value | list_transcription_vocabulary | list_upload | list_usage_export | list_video_view | list_video_view_export | list_webhook | live_stream | live_stream_playback_id | metric_timeseries_data | moderate | monitoring_breakdown | monitoring_breakdown_timeseries | monitoring_histogram_timeseries | monitoring_timeseries | overall | playback_restriction | real_time_breakdown | real_time_histogram_timeseries | real_time_timeseries | signal_live_stream_complete | signing_key | simulcast_target | static_rendition | subview_breakdown_timeseries | subview_overall_value | summarize | transcription_vocabulary | translate_audio | translate_caption | update_asset_track | upload | url_signing_key | video_view | webhook | who_am_i"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.MuxSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "mux_list",
		Description: "List records from Mux. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "mux_load",
		Description: "Load a single record from Mux. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.MuxSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.MuxSDK, name string) (sdk.MuxEntity, error) {
	switch strings.ToLower(name) {
	case "annotation":
		return client.Annotation(nil), nil
	case "ask_question":
		return client.AskQuestion(nil), nil
	case "asset":
		return client.Asset(nil), nil
	case "asset_or_live_stream_id":
		return client.AssetOrLiveStreamId(nil), nil
	case "asset_playback_id":
		return client.AssetPlaybackId(nil), nil
	case "asset_shot":
		return client.AssetShot(nil), nil
	case "create_playback_id":
		return client.CreatePlaybackId(nil), nil
	case "create_track":
		return client.CreateTrack(nil), nil
	case "directive":
		return client.Directive(nil), nil
	case "directive_run_detail":
		return client.DirectiveRunDetail(nil), nil
	case "directive_run_list":
		return client.DirectiveRunList(nil), nil
	case "drm_configuration":
		return client.DrmConfiguration(nil), nil
	case "edit_caption":
		return client.EditCaption(nil), nil
	case "engagement_heatmap":
		return client.EngagementHeatmap(nil), nil
	case "engagement_hotspot":
		return client.EngagementHotspot(nil), nil
	case "find_best_thumbnail":
		return client.FindBestThumbnail(nil), nil
	case "find_key_moment":
		return client.FindKeyMoment(nil), nil
	case "find_scene":
		return client.FindScene(nil), nil
	case "generate_asset_shot":
		return client.GenerateAssetShot(nil), nil
	case "generate_chapter":
		return client.GenerateChapter(nil), nil
	case "generate_engagement_insight":
		return client.GenerateEngagementInsight(nil), nil
	case "generate_premium_caption":
		return client.GeneratePremiumCaption(nil), nil
	case "generate_track_subtitle":
		return client.GenerateTrackSubtitle(nil), nil
	case "incident":
		return client.Incident(nil), nil
	case "input_info":
		return client.InputInfo(nil), nil
	case "job_summary":
		return client.JobSummary(nil), nil
	case "list_all_metric_value":
		return client.ListAllMetricValue(nil), nil
	case "list_annotation":
		return client.ListAnnotation(nil), nil
	case "list_asset":
		return client.ListAsset(nil), nil
	case "list_breakdown_value":
		return client.ListBreakdownValue(nil), nil
	case "list_delivery_usage":
		return client.ListDeliveryUsage(nil), nil
	case "list_dimension":
		return client.ListDimension(nil), nil
	case "list_dimension_value":
		return client.ListDimensionValue(nil), nil
	case "list_drm_configuration":
		return client.ListDrmConfiguration(nil), nil
	case "list_error":
		return client.ListError(nil), nil
	case "list_export":
		return client.ListExport(nil), nil
	case "list_filter":
		return client.ListFilter(nil), nil
	case "list_filter_value":
		return client.ListFilterValue(nil), nil
	case "list_incident":
		return client.ListIncident(nil), nil
	case "list_insight":
		return client.ListInsight(nil), nil
	case "list_job":
		return client.ListJob(nil), nil
	case "list_live_stream":
		return client.ListLiveStream(nil), nil
	case "list_monitoring_dimension":
		return client.ListMonitoringDimension(nil), nil
	case "list_monitoring_metric":
		return client.ListMonitoringMetric(nil), nil
	case "list_playback_restriction":
		return client.ListPlaybackRestriction(nil), nil
	case "list_real_time_dimension":
		return client.ListRealTimeDimension(nil), nil
	case "list_real_time_metric":
		return client.ListRealTimeMetric(nil), nil
	case "list_related_incident":
		return client.ListRelatedIncident(nil), nil
	case "list_signing_key":
		return client.ListSigningKey(nil), nil
	case "list_subview_breakdown_value":
		return client.ListSubviewBreakdownValue(nil), nil
	case "list_subview_comparison_value":
		return client.ListSubviewComparisonValue(nil), nil
	case "list_subview_dimension":
		return client.ListSubviewDimension(nil), nil
	case "list_subview_dimension_value":
		return client.ListSubviewDimensionValue(nil), nil
	case "list_transcription_vocabulary":
		return client.ListTranscriptionVocabulary(nil), nil
	case "list_upload":
		return client.ListUpload(nil), nil
	case "list_usage_export":
		return client.ListUsageExport(nil), nil
	case "list_video_view":
		return client.ListVideoView(nil), nil
	case "list_video_view_export":
		return client.ListVideoViewExport(nil), nil
	case "list_webhook":
		return client.ListWebhook(nil), nil
	case "live_stream":
		return client.LiveStream(nil), nil
	case "live_stream_playback_id":
		return client.LiveStreamPlaybackId(nil), nil
	case "metric_timeseries_data":
		return client.MetricTimeseriesData(nil), nil
	case "moderate":
		return client.Moderate(nil), nil
	case "monitoring_breakdown":
		return client.MonitoringBreakdown(nil), nil
	case "monitoring_breakdown_timeseries":
		return client.MonitoringBreakdownTimeseries(nil), nil
	case "monitoring_histogram_timeseries":
		return client.MonitoringHistogramTimeseries(nil), nil
	case "monitoring_timeseries":
		return client.MonitoringTimeseries(nil), nil
	case "overall":
		return client.Overall(nil), nil
	case "playback_restriction":
		return client.PlaybackRestriction(nil), nil
	case "real_time_breakdown":
		return client.RealTimeBreakdown(nil), nil
	case "real_time_histogram_timeseries":
		return client.RealTimeHistogramTimeseries(nil), nil
	case "real_time_timeseries":
		return client.RealTimeTimeseries(nil), nil
	case "signal_live_stream_complete":
		return client.SignalLiveStreamComplete(nil), nil
	case "signing_key":
		return client.SigningKey(nil), nil
	case "simulcast_target":
		return client.SimulcastTarget(nil), nil
	case "static_rendition":
		return client.StaticRendition(nil), nil
	case "subview_breakdown_timeseries":
		return client.SubviewBreakdownTimeseries(nil), nil
	case "subview_overall_value":
		return client.SubviewOverallValue(nil), nil
	case "summarize":
		return client.Summarize(nil), nil
	case "transcription_vocabulary":
		return client.TranscriptionVocabulary(nil), nil
	case "translate_audio":
		return client.TranslateAudio(nil), nil
	case "translate_caption":
		return client.TranslateCaption(nil), nil
	case "update_asset_track":
		return client.UpdateAssetTrack(nil), nil
	case "upload":
		return client.Upload(nil), nil
	case "url_signing_key":
		return client.UrlSigningKey(nil), nil
	case "video_view":
		return client.VideoView(nil), nil
	case "webhook":
		return client.Webhook(nil), nil
	case "who_am_i":
		return client.WhoAmI(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
