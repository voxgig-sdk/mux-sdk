package sdktest

import (
	"encoding/json"
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

func TestSigningKeyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SigningKey(nil)
		if ent == nil {
			t.Fatal("expected non-nil SigningKeyEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"signing_key": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.SigningKey(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.SigningKey(nil).Stream("list", nil, nil) {
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
		setup := signing_keyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "signing_key." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MUX_TEST_SIGNING_KEY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		signingKeyRef01Ent := client.SigningKey(nil)
		signingKeyRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "signing_key"}), "signing_key_ref01"))

		signingKeyRef01DataResult, err := signingKeyRef01Ent.Create(signingKeyRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		signingKeyRef01Data = core.ToMapAny(entityData(signingKeyRef01DataResult))
		if signingKeyRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if signingKeyRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		signingKeyRef01Match := map[string]any{}

		signingKeyRef01ListResult, err := signingKeyRef01Ent.List(signingKeyRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		signingKeyRef01List, signingKeyRef01ListOk := signingKeyRef01ListResult.([]any)
		if !signingKeyRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", signingKeyRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(signingKeyRef01List), map[string]any{"id": signingKeyRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		signingKeyRef01MatchDt0 := map[string]any{
			"id": signingKeyRef01Data["id"],
		}
		signingKeyRef01DataDt0Loaded, err := signingKeyRef01Ent.Load(signingKeyRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		signingKeyRef01DataDt0LoadResult := core.ToMapAny(entityData(signingKeyRef01DataDt0Loaded))
		if signingKeyRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if signingKeyRef01DataDt0LoadResult["id"] != signingKeyRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		signingKeyRef01MatchRm0 := map[string]any{
			"id": signingKeyRef01Data["id"],
		}
		_, err = signingKeyRef01Ent.Remove(signingKeyRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		signingKeyRef01MatchRt0 := map[string]any{}

		signingKeyRef01ListRt0Result, err := signingKeyRef01Ent.List(signingKeyRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		signingKeyRef01ListRt0, signingKeyRef01ListRt0Ok := signingKeyRef01ListRt0Result.([]any)
		if !signingKeyRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", signingKeyRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(signingKeyRef01ListRt0), map[string]any{"id": signingKeyRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func signing_keyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "signing_key", "SigningKeyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read signing_key test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse signing_key test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"signing_key01", "signing_key02", "signing_key03"},
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
	entidEnvRaw := os.Getenv("MUX_TEST_SIGNING_KEY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MUX_TEST_SIGNING_KEY_ENTID": idmap,
		"MUX_TEST_LIVE":      "FALSE",
		"MUX_TEST_EXPLAIN":   "FALSE",
		"MUX_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["MUX_TEST_SIGNING_KEY_ENTID"])
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
