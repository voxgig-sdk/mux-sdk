package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/mux-sdk/go"
	"github.com/voxgig-sdk/mux-sdk/go/core"

	vs "github.com/voxgig-sdk/mux-sdk/go/utility/struct"
)

func TestLiveStreamEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.LiveStream(nil)
		if ent == nil {
			t.Fatal("expected non-nil LiveStreamEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"live_stream": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.LiveStream(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.LiveStream(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := live_streamBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "live_stream." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set MUX_TEST_LIVE_STREAM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		liveStreamRef01Ent := client.LiveStream(nil)
		liveStreamRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "live_stream"}), "live_stream_ref01"))
		liveStreamRef01Data["live_stream_id"] = setup.idmap["live_stream01"]

		liveStreamRef01DataResult, err := liveStreamRef01Ent.Create(liveStreamRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		liveStreamRef01Data = core.ToMapAny(entityData(liveStreamRef01DataResult))
		if liveStreamRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if liveStreamRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		liveStreamRef01Match := map[string]any{}

		liveStreamRef01ListResult, err := liveStreamRef01Ent.List(liveStreamRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		liveStreamRef01List, liveStreamRef01ListOk := liveStreamRef01ListResult.([]any)
		if !liveStreamRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", liveStreamRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(liveStreamRef01List), map[string]any{"id": liveStreamRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		liveStreamRef01DataUp0Up := map[string]any{
			"id": liveStreamRef01Data["id"],
		}

		liveStreamRef01MarkdefUp0Name := "active_asset_id"
		liveStreamRef01MarkdefUp0Value := fmt.Sprintf("Mark01-live_stream_ref01_%d", setup.now)
		liveStreamRef01DataUp0Up[liveStreamRef01MarkdefUp0Name] = liveStreamRef01MarkdefUp0Value

		liveStreamRef01ResdataUp0Result, err := liveStreamRef01Ent.Update(liveStreamRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		liveStreamRef01ResdataUp0 := core.ToMapAny(entityData(liveStreamRef01ResdataUp0Result))
		if liveStreamRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if liveStreamRef01ResdataUp0["id"] != liveStreamRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if liveStreamRef01ResdataUp0[liveStreamRef01MarkdefUp0Name] != liveStreamRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", liveStreamRef01MarkdefUp0Name, liveStreamRef01ResdataUp0[liveStreamRef01MarkdefUp0Name])
		}

		// LOAD
		liveStreamRef01MatchDt0 := map[string]any{
			"id": liveStreamRef01Data["id"],
		}
		liveStreamRef01DataDt0Loaded, err := liveStreamRef01Ent.Load(liveStreamRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		liveStreamRef01DataDt0LoadResult := core.ToMapAny(entityData(liveStreamRef01DataDt0Loaded))
		if liveStreamRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if liveStreamRef01DataDt0LoadResult["id"] != liveStreamRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		liveStreamRef01MatchRm0 := map[string]any{
			"id": liveStreamRef01Data["id"],
		}
		_, err = liveStreamRef01Ent.Remove(liveStreamRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		liveStreamRef01MatchRt0 := map[string]any{}

		liveStreamRef01ListRt0Result, err := liveStreamRef01Ent.List(liveStreamRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		liveStreamRef01ListRt0, liveStreamRef01ListRt0Ok := liveStreamRef01ListRt0Result.([]any)
		if !liveStreamRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", liveStreamRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(liveStreamRef01ListRt0), map[string]any{"id": liveStreamRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func live_streamBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "live_stream", "LiveStreamTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read live_stream test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse live_stream test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"live_stream01", "live_stream02", "live_stream03", "simulcast_target01", "simulcast_target02", "simulcast_target03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("MUX_TEST_LIVE_STREAM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MUX_TEST_LIVE_STREAM_ENTID": idmap,
		"MUX_TEST_LIVE":      "FALSE",
		"MUX_TEST_EXPLAIN":   "FALSE",
		"MUX_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["MUX_TEST_LIVE_STREAM_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["MUX_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["MUX_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewMuxSDK(core.ToMapAny(mergedOpts))
	}

	live := env["MUX_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["MUX_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
