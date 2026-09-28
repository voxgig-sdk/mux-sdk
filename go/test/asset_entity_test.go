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

func TestAssetEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Asset(nil)
		if ent == nil {
			t.Fatal("expected non-nil AssetEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := assetBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "asset." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MUX_TEST_ASSET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		assetRef01Ent := client.Asset(nil)
		assetRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "asset"}), "asset_ref01"))
		assetRef01Data["asset_id"] = setup.idmap["asset01"]

		assetRef01DataResult, err := assetRef01Ent.Create(assetRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		assetRef01Data = core.ToMapAny(entityData(assetRef01DataResult))
		if assetRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if assetRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		assetRef01DataUp0Up := map[string]any{
			"id": assetRef01Data["id"],
		}

		assetRef01MarkdefUp0Name := "aspect_ratio"
		assetRef01MarkdefUp0Value := fmt.Sprintf("Mark01-asset_ref01_%d", setup.now)
		assetRef01DataUp0Up[assetRef01MarkdefUp0Name] = assetRef01MarkdefUp0Value

		assetRef01ResdataUp0Result, err := assetRef01Ent.Update(assetRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		assetRef01ResdataUp0 := core.ToMapAny(entityData(assetRef01ResdataUp0Result))
		if assetRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if assetRef01ResdataUp0["id"] != assetRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if assetRef01ResdataUp0[assetRef01MarkdefUp0Name] != assetRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", assetRef01MarkdefUp0Name, assetRef01ResdataUp0[assetRef01MarkdefUp0Name])
		}

		// LOAD
		assetRef01MatchDt0 := map[string]any{
			"id": assetRef01Data["id"],
		}
		assetRef01DataDt0Loaded, err := assetRef01Ent.Load(assetRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		assetRef01DataDt0LoadResult := core.ToMapAny(entityData(assetRef01DataDt0Loaded))
		if assetRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if assetRef01DataDt0LoadResult["id"] != assetRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		assetRef01MatchRm0 := map[string]any{
			"id": assetRef01Data["id"],
		}
		_, err = assetRef01Ent.Remove(assetRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func assetBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "asset", "AssetTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read asset test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse asset test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"asset01", "asset02", "asset03", "static_rendition01", "static_rendition02", "static_rendition03"},
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
	entidEnvRaw := os.Getenv("MUX_TEST_ASSET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MUX_TEST_ASSET_ENTID": idmap,
		"MUX_TEST_LIVE":      "FALSE",
		"MUX_TEST_EXPLAIN":   "FALSE",
		"MUX_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["MUX_TEST_ASSET_ENTID"])
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
