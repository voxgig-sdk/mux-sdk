package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/mux-sdk/go/utility/struct"
)

type MuxSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewMuxSDK(options map[string]any) *MuxSDK {
	sdk := &MuxSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *MuxSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *MuxSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *MuxSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *MuxSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *MuxSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *MuxSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *MuxSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("MuxSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *MuxSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *MuxSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("MuxSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Annotation returns a Annotation entity bound to this client.
// Idiomatic usage: client.Annotation(nil).List(nil, nil) or
// client.Annotation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) Annotation(data map[string]any) MuxEntity {
	return NewAnnotationEntityFunc(sdk, data)
}


// AskQuestion returns a AskQuestion entity bound to this client.
// Idiomatic usage: client.AskQuestion(nil).List(nil, nil) or
// client.AskQuestion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) AskQuestion(data map[string]any) MuxEntity {
	return NewAskQuestionEntityFunc(sdk, data)
}


// Asset returns a Asset entity bound to this client.
// Idiomatic usage: client.Asset(nil).List(nil, nil) or
// client.Asset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) Asset(data map[string]any) MuxEntity {
	return NewAssetEntityFunc(sdk, data)
}


// AssetOrLiveStreamId returns a AssetOrLiveStreamId entity bound to this client.
// Idiomatic usage: client.AssetOrLiveStreamId(nil).List(nil, nil) or
// client.AssetOrLiveStreamId(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) AssetOrLiveStreamId(data map[string]any) MuxEntity {
	return NewAssetOrLiveStreamIdEntityFunc(sdk, data)
}


// AssetPlaybackId returns a AssetPlaybackId entity bound to this client.
// Idiomatic usage: client.AssetPlaybackId(nil).List(nil, nil) or
// client.AssetPlaybackId(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) AssetPlaybackId(data map[string]any) MuxEntity {
	return NewAssetPlaybackIdEntityFunc(sdk, data)
}


// AssetShot returns a AssetShot entity bound to this client.
// Idiomatic usage: client.AssetShot(nil).List(nil, nil) or
// client.AssetShot(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) AssetShot(data map[string]any) MuxEntity {
	return NewAssetShotEntityFunc(sdk, data)
}


// CreatePlaybackId returns a CreatePlaybackId entity bound to this client.
// Idiomatic usage: client.CreatePlaybackId(nil).List(nil, nil) or
// client.CreatePlaybackId(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) CreatePlaybackId(data map[string]any) MuxEntity {
	return NewCreatePlaybackIdEntityFunc(sdk, data)
}


// CreateTrack returns a CreateTrack entity bound to this client.
// Idiomatic usage: client.CreateTrack(nil).List(nil, nil) or
// client.CreateTrack(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) CreateTrack(data map[string]any) MuxEntity {
	return NewCreateTrackEntityFunc(sdk, data)
}


// Directive returns a Directive entity bound to this client.
// Idiomatic usage: client.Directive(nil).List(nil, nil) or
// client.Directive(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) Directive(data map[string]any) MuxEntity {
	return NewDirectiveEntityFunc(sdk, data)
}


// DirectiveRunDetail returns a DirectiveRunDetail entity bound to this client.
// Idiomatic usage: client.DirectiveRunDetail(nil).List(nil, nil) or
// client.DirectiveRunDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) DirectiveRunDetail(data map[string]any) MuxEntity {
	return NewDirectiveRunDetailEntityFunc(sdk, data)
}


// DrmConfiguration returns a DrmConfiguration entity bound to this client.
// Idiomatic usage: client.DrmConfiguration(nil).List(nil, nil) or
// client.DrmConfiguration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) DrmConfiguration(data map[string]any) MuxEntity {
	return NewDrmConfigurationEntityFunc(sdk, data)
}


// EditCaption returns a EditCaption entity bound to this client.
// Idiomatic usage: client.EditCaption(nil).List(nil, nil) or
// client.EditCaption(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) EditCaption(data map[string]any) MuxEntity {
	return NewEditCaptionEntityFunc(sdk, data)
}


// EngagementHeatmap returns a EngagementHeatmap entity bound to this client.
// Idiomatic usage: client.EngagementHeatmap(nil).List(nil, nil) or
// client.EngagementHeatmap(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) EngagementHeatmap(data map[string]any) MuxEntity {
	return NewEngagementHeatmapEntityFunc(sdk, data)
}


// EngagementHotspot returns a EngagementHotspot entity bound to this client.
// Idiomatic usage: client.EngagementHotspot(nil).List(nil, nil) or
// client.EngagementHotspot(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) EngagementHotspot(data map[string]any) MuxEntity {
	return NewEngagementHotspotEntityFunc(sdk, data)
}


// FindBestThumbnail returns a FindBestThumbnail entity bound to this client.
// Idiomatic usage: client.FindBestThumbnail(nil).List(nil, nil) or
// client.FindBestThumbnail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) FindBestThumbnail(data map[string]any) MuxEntity {
	return NewFindBestThumbnailEntityFunc(sdk, data)
}


// FindKeyMoment returns a FindKeyMoment entity bound to this client.
// Idiomatic usage: client.FindKeyMoment(nil).List(nil, nil) or
// client.FindKeyMoment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) FindKeyMoment(data map[string]any) MuxEntity {
	return NewFindKeyMomentEntityFunc(sdk, data)
}


// FindScene returns a FindScene entity bound to this client.
// Idiomatic usage: client.FindScene(nil).List(nil, nil) or
// client.FindScene(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) FindScene(data map[string]any) MuxEntity {
	return NewFindSceneEntityFunc(sdk, data)
}


// GenerateAssetShot returns a GenerateAssetShot entity bound to this client.
// Idiomatic usage: client.GenerateAssetShot(nil).List(nil, nil) or
// client.GenerateAssetShot(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) GenerateAssetShot(data map[string]any) MuxEntity {
	return NewGenerateAssetShotEntityFunc(sdk, data)
}


// GenerateChapter returns a GenerateChapter entity bound to this client.
// Idiomatic usage: client.GenerateChapter(nil).List(nil, nil) or
// client.GenerateChapter(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) GenerateChapter(data map[string]any) MuxEntity {
	return NewGenerateChapterEntityFunc(sdk, data)
}


// GenerateEngagementInsight returns a GenerateEngagementInsight entity bound to this client.
// Idiomatic usage: client.GenerateEngagementInsight(nil).List(nil, nil) or
// client.GenerateEngagementInsight(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) GenerateEngagementInsight(data map[string]any) MuxEntity {
	return NewGenerateEngagementInsightEntityFunc(sdk, data)
}


// GeneratePremiumCaption returns a GeneratePremiumCaption entity bound to this client.
// Idiomatic usage: client.GeneratePremiumCaption(nil).List(nil, nil) or
// client.GeneratePremiumCaption(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) GeneratePremiumCaption(data map[string]any) MuxEntity {
	return NewGeneratePremiumCaptionEntityFunc(sdk, data)
}


// GenerateTrackSubtitle returns a GenerateTrackSubtitle entity bound to this client.
// Idiomatic usage: client.GenerateTrackSubtitle(nil).List(nil, nil) or
// client.GenerateTrackSubtitle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) GenerateTrackSubtitle(data map[string]any) MuxEntity {
	return NewGenerateTrackSubtitleEntityFunc(sdk, data)
}


// Incident returns a Incident entity bound to this client.
// Idiomatic usage: client.Incident(nil).List(nil, nil) or
// client.Incident(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) Incident(data map[string]any) MuxEntity {
	return NewIncidentEntityFunc(sdk, data)
}


// InputInfo returns a InputInfo entity bound to this client.
// Idiomatic usage: client.InputInfo(nil).List(nil, nil) or
// client.InputInfo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) InputInfo(data map[string]any) MuxEntity {
	return NewInputInfoEntityFunc(sdk, data)
}


// JobSummary returns a JobSummary entity bound to this client.
// Idiomatic usage: client.JobSummary(nil).List(nil, nil) or
// client.JobSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) JobSummary(data map[string]any) MuxEntity {
	return NewJobSummaryEntityFunc(sdk, data)
}


// ListAllMetricValue returns a ListAllMetricValue entity bound to this client.
// Idiomatic usage: client.ListAllMetricValue(nil).List(nil, nil) or
// client.ListAllMetricValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListAllMetricValue(data map[string]any) MuxEntity {
	return NewListAllMetricValueEntityFunc(sdk, data)
}


// ListBreakdownValue returns a ListBreakdownValue entity bound to this client.
// Idiomatic usage: client.ListBreakdownValue(nil).List(nil, nil) or
// client.ListBreakdownValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListBreakdownValue(data map[string]any) MuxEntity {
	return NewListBreakdownValueEntityFunc(sdk, data)
}


// ListDeliveryUsage returns a ListDeliveryUsage entity bound to this client.
// Idiomatic usage: client.ListDeliveryUsage(nil).List(nil, nil) or
// client.ListDeliveryUsage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListDeliveryUsage(data map[string]any) MuxEntity {
	return NewListDeliveryUsageEntityFunc(sdk, data)
}


// ListDimensionValue returns a ListDimensionValue entity bound to this client.
// Idiomatic usage: client.ListDimensionValue(nil).List(nil, nil) or
// client.ListDimensionValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListDimensionValue(data map[string]any) MuxEntity {
	return NewListDimensionValueEntityFunc(sdk, data)
}


// ListError returns a ListError entity bound to this client.
// Idiomatic usage: client.ListError(nil).List(nil, nil) or
// client.ListError(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListError(data map[string]any) MuxEntity {
	return NewListErrorEntityFunc(sdk, data)
}


// ListExport returns a ListExport entity bound to this client.
// Idiomatic usage: client.ListExport(nil).List(nil, nil) or
// client.ListExport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListExport(data map[string]any) MuxEntity {
	return NewListExportEntityFunc(sdk, data)
}


// ListFilterValue returns a ListFilterValue entity bound to this client.
// Idiomatic usage: client.ListFilterValue(nil).List(nil, nil) or
// client.ListFilterValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListFilterValue(data map[string]any) MuxEntity {
	return NewListFilterValueEntityFunc(sdk, data)
}


// ListInsight returns a ListInsight entity bound to this client.
// Idiomatic usage: client.ListInsight(nil).List(nil, nil) or
// client.ListInsight(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListInsight(data map[string]any) MuxEntity {
	return NewListInsightEntityFunc(sdk, data)
}


// ListMonitoringDimension returns a ListMonitoringDimension entity bound to this client.
// Idiomatic usage: client.ListMonitoringDimension(nil).List(nil, nil) or
// client.ListMonitoringDimension(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListMonitoringDimension(data map[string]any) MuxEntity {
	return NewListMonitoringDimensionEntityFunc(sdk, data)
}


// ListMonitoringMetric returns a ListMonitoringMetric entity bound to this client.
// Idiomatic usage: client.ListMonitoringMetric(nil).List(nil, nil) or
// client.ListMonitoringMetric(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListMonitoringMetric(data map[string]any) MuxEntity {
	return NewListMonitoringMetricEntityFunc(sdk, data)
}


// ListRealTimeDimension returns a ListRealTimeDimension entity bound to this client.
// Idiomatic usage: client.ListRealTimeDimension(nil).List(nil, nil) or
// client.ListRealTimeDimension(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListRealTimeDimension(data map[string]any) MuxEntity {
	return NewListRealTimeDimensionEntityFunc(sdk, data)
}


// ListRealTimeMetric returns a ListRealTimeMetric entity bound to this client.
// Idiomatic usage: client.ListRealTimeMetric(nil).List(nil, nil) or
// client.ListRealTimeMetric(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListRealTimeMetric(data map[string]any) MuxEntity {
	return NewListRealTimeMetricEntityFunc(sdk, data)
}


// ListRelatedIncident returns a ListRelatedIncident entity bound to this client.
// Idiomatic usage: client.ListRelatedIncident(nil).List(nil, nil) or
// client.ListRelatedIncident(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListRelatedIncident(data map[string]any) MuxEntity {
	return NewListRelatedIncidentEntityFunc(sdk, data)
}


// ListSubviewBreakdownValue returns a ListSubviewBreakdownValue entity bound to this client.
// Idiomatic usage: client.ListSubviewBreakdownValue(nil).List(nil, nil) or
// client.ListSubviewBreakdownValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListSubviewBreakdownValue(data map[string]any) MuxEntity {
	return NewListSubviewBreakdownValueEntityFunc(sdk, data)
}


// ListSubviewComparisonValue returns a ListSubviewComparisonValue entity bound to this client.
// Idiomatic usage: client.ListSubviewComparisonValue(nil).List(nil, nil) or
// client.ListSubviewComparisonValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListSubviewComparisonValue(data map[string]any) MuxEntity {
	return NewListSubviewComparisonValueEntityFunc(sdk, data)
}


// ListSubviewDimension returns a ListSubviewDimension entity bound to this client.
// Idiomatic usage: client.ListSubviewDimension(nil).List(nil, nil) or
// client.ListSubviewDimension(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListSubviewDimension(data map[string]any) MuxEntity {
	return NewListSubviewDimensionEntityFunc(sdk, data)
}


// ListSubviewDimensionValue returns a ListSubviewDimensionValue entity bound to this client.
// Idiomatic usage: client.ListSubviewDimensionValue(nil).List(nil, nil) or
// client.ListSubviewDimensionValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListSubviewDimensionValue(data map[string]any) MuxEntity {
	return NewListSubviewDimensionValueEntityFunc(sdk, data)
}


// ListVideoViewExport returns a ListVideoViewExport entity bound to this client.
// Idiomatic usage: client.ListVideoViewExport(nil).List(nil, nil) or
// client.ListVideoViewExport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) ListVideoViewExport(data map[string]any) MuxEntity {
	return NewListVideoViewExportEntityFunc(sdk, data)
}


// LiveStream returns a LiveStream entity bound to this client.
// Idiomatic usage: client.LiveStream(nil).List(nil, nil) or
// client.LiveStream(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) LiveStream(data map[string]any) MuxEntity {
	return NewLiveStreamEntityFunc(sdk, data)
}


// LiveStreamPlaybackId returns a LiveStreamPlaybackId entity bound to this client.
// Idiomatic usage: client.LiveStreamPlaybackId(nil).List(nil, nil) or
// client.LiveStreamPlaybackId(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) LiveStreamPlaybackId(data map[string]any) MuxEntity {
	return NewLiveStreamPlaybackIdEntityFunc(sdk, data)
}


// MetricTimeseriesData returns a MetricTimeseriesData entity bound to this client.
// Idiomatic usage: client.MetricTimeseriesData(nil).List(nil, nil) or
// client.MetricTimeseriesData(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) MetricTimeseriesData(data map[string]any) MuxEntity {
	return NewMetricTimeseriesDataEntityFunc(sdk, data)
}


// Moderate returns a Moderate entity bound to this client.
// Idiomatic usage: client.Moderate(nil).List(nil, nil) or
// client.Moderate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) Moderate(data map[string]any) MuxEntity {
	return NewModerateEntityFunc(sdk, data)
}


// MonitoringBreakdown returns a MonitoringBreakdown entity bound to this client.
// Idiomatic usage: client.MonitoringBreakdown(nil).List(nil, nil) or
// client.MonitoringBreakdown(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) MonitoringBreakdown(data map[string]any) MuxEntity {
	return NewMonitoringBreakdownEntityFunc(sdk, data)
}


// MonitoringBreakdownTimeseries returns a MonitoringBreakdownTimeseries entity bound to this client.
// Idiomatic usage: client.MonitoringBreakdownTimeseries(nil).List(nil, nil) or
// client.MonitoringBreakdownTimeseries(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) MonitoringBreakdownTimeseries(data map[string]any) MuxEntity {
	return NewMonitoringBreakdownTimeseriesEntityFunc(sdk, data)
}


// MonitoringHistogramTimeseries returns a MonitoringHistogramTimeseries entity bound to this client.
// Idiomatic usage: client.MonitoringHistogramTimeseries(nil).List(nil, nil) or
// client.MonitoringHistogramTimeseries(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) MonitoringHistogramTimeseries(data map[string]any) MuxEntity {
	return NewMonitoringHistogramTimeseriesEntityFunc(sdk, data)
}


// MonitoringTimeseries returns a MonitoringTimeseries entity bound to this client.
// Idiomatic usage: client.MonitoringTimeseries(nil).List(nil, nil) or
// client.MonitoringTimeseries(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) MonitoringTimeseries(data map[string]any) MuxEntity {
	return NewMonitoringTimeseriesEntityFunc(sdk, data)
}


// Overall returns a Overall entity bound to this client.
// Idiomatic usage: client.Overall(nil).List(nil, nil) or
// client.Overall(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) Overall(data map[string]any) MuxEntity {
	return NewOverallEntityFunc(sdk, data)
}


// PlaybackRestriction returns a PlaybackRestriction entity bound to this client.
// Idiomatic usage: client.PlaybackRestriction(nil).List(nil, nil) or
// client.PlaybackRestriction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) PlaybackRestriction(data map[string]any) MuxEntity {
	return NewPlaybackRestrictionEntityFunc(sdk, data)
}


// RealTimeBreakdown returns a RealTimeBreakdown entity bound to this client.
// Idiomatic usage: client.RealTimeBreakdown(nil).List(nil, nil) or
// client.RealTimeBreakdown(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) RealTimeBreakdown(data map[string]any) MuxEntity {
	return NewRealTimeBreakdownEntityFunc(sdk, data)
}


// RealTimeHistogramTimeseries returns a RealTimeHistogramTimeseries entity bound to this client.
// Idiomatic usage: client.RealTimeHistogramTimeseries(nil).List(nil, nil) or
// client.RealTimeHistogramTimeseries(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) RealTimeHistogramTimeseries(data map[string]any) MuxEntity {
	return NewRealTimeHistogramTimeseriesEntityFunc(sdk, data)
}


// RealTimeTimeseries returns a RealTimeTimeseries entity bound to this client.
// Idiomatic usage: client.RealTimeTimeseries(nil).List(nil, nil) or
// client.RealTimeTimeseries(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) RealTimeTimeseries(data map[string]any) MuxEntity {
	return NewRealTimeTimeseriesEntityFunc(sdk, data)
}


// SignalLiveStreamComplete returns a SignalLiveStreamComplete entity bound to this client.
// Idiomatic usage: client.SignalLiveStreamComplete(nil).List(nil, nil) or
// client.SignalLiveStreamComplete(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) SignalLiveStreamComplete(data map[string]any) MuxEntity {
	return NewSignalLiveStreamCompleteEntityFunc(sdk, data)
}


// SigningKey returns a SigningKey entity bound to this client.
// Idiomatic usage: client.SigningKey(nil).List(nil, nil) or
// client.SigningKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) SigningKey(data map[string]any) MuxEntity {
	return NewSigningKeyEntityFunc(sdk, data)
}


// SimulcastTarget returns a SimulcastTarget entity bound to this client.
// Idiomatic usage: client.SimulcastTarget(nil).List(nil, nil) or
// client.SimulcastTarget(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) SimulcastTarget(data map[string]any) MuxEntity {
	return NewSimulcastTargetEntityFunc(sdk, data)
}


// StaticRendition returns a StaticRendition entity bound to this client.
// Idiomatic usage: client.StaticRendition(nil).List(nil, nil) or
// client.StaticRendition(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) StaticRendition(data map[string]any) MuxEntity {
	return NewStaticRenditionEntityFunc(sdk, data)
}


// SubviewBreakdownTimeseries returns a SubviewBreakdownTimeseries entity bound to this client.
// Idiomatic usage: client.SubviewBreakdownTimeseries(nil).List(nil, nil) or
// client.SubviewBreakdownTimeseries(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) SubviewBreakdownTimeseries(data map[string]any) MuxEntity {
	return NewSubviewBreakdownTimeseriesEntityFunc(sdk, data)
}


// SubviewOverallValue returns a SubviewOverallValue entity bound to this client.
// Idiomatic usage: client.SubviewOverallValue(nil).List(nil, nil) or
// client.SubviewOverallValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) SubviewOverallValue(data map[string]any) MuxEntity {
	return NewSubviewOverallValueEntityFunc(sdk, data)
}


// Summarize returns a Summarize entity bound to this client.
// Idiomatic usage: client.Summarize(nil).List(nil, nil) or
// client.Summarize(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) Summarize(data map[string]any) MuxEntity {
	return NewSummarizeEntityFunc(sdk, data)
}


// TranscriptionVocabulary returns a TranscriptionVocabulary entity bound to this client.
// Idiomatic usage: client.TranscriptionVocabulary(nil).List(nil, nil) or
// client.TranscriptionVocabulary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) TranscriptionVocabulary(data map[string]any) MuxEntity {
	return NewTranscriptionVocabularyEntityFunc(sdk, data)
}


// TranslateAudio returns a TranslateAudio entity bound to this client.
// Idiomatic usage: client.TranslateAudio(nil).List(nil, nil) or
// client.TranslateAudio(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) TranslateAudio(data map[string]any) MuxEntity {
	return NewTranslateAudioEntityFunc(sdk, data)
}


// TranslateCaption returns a TranslateCaption entity bound to this client.
// Idiomatic usage: client.TranslateCaption(nil).List(nil, nil) or
// client.TranslateCaption(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) TranslateCaption(data map[string]any) MuxEntity {
	return NewTranslateCaptionEntityFunc(sdk, data)
}


// UpdateAssetTrack returns a UpdateAssetTrack entity bound to this client.
// Idiomatic usage: client.UpdateAssetTrack(nil).List(nil, nil) or
// client.UpdateAssetTrack(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) UpdateAssetTrack(data map[string]any) MuxEntity {
	return NewUpdateAssetTrackEntityFunc(sdk, data)
}


// Upload returns a Upload entity bound to this client.
// Idiomatic usage: client.Upload(nil).List(nil, nil) or
// client.Upload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) Upload(data map[string]any) MuxEntity {
	return NewUploadEntityFunc(sdk, data)
}


// UrlSigningKey returns a UrlSigningKey entity bound to this client.
// Idiomatic usage: client.UrlSigningKey(nil).List(nil, nil) or
// client.UrlSigningKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) UrlSigningKey(data map[string]any) MuxEntity {
	return NewUrlSigningKeyEntityFunc(sdk, data)
}


// UsageExport returns a UsageExport entity bound to this client.
// Idiomatic usage: client.UsageExport(nil).List(nil, nil) or
// client.UsageExport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) UsageExport(data map[string]any) MuxEntity {
	return NewUsageExportEntityFunc(sdk, data)
}


// VideoView returns a VideoView entity bound to this client.
// Idiomatic usage: client.VideoView(nil).List(nil, nil) or
// client.VideoView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) VideoView(data map[string]any) MuxEntity {
	return NewVideoViewEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) Webhook(data map[string]any) MuxEntity {
	return NewWebhookEntityFunc(sdk, data)
}


// WhoAmI returns a WhoAmI entity bound to this client.
// Idiomatic usage: client.WhoAmI(nil).List(nil, nil) or
// client.WhoAmI(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MuxSDK) WhoAmI(data map[string]any) MuxEntity {
	return NewWhoAmIEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *MuxSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewMuxSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
