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

func TestUpdateAssetTrackEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.UpdateAssetTrack(nil)
		if ent == nil {
			t.Fatal("expected non-nil UpdateAssetTrackEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := update_asset_trackBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "update_asset_track." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MUX_TEST_UPDATE_ASSET_TRACK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		updateAssetTrackRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.update_asset_track")))
		var updateAssetTrackRef01Data map[string]any
		if len(updateAssetTrackRef01DataRaw) > 0 {
			updateAssetTrackRef01Data = core.ToMapAny(updateAssetTrackRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = updateAssetTrackRef01Data

		// UPDATE
		updateAssetTrackRef01Ent := client.UpdateAssetTrack(nil)
		updateAssetTrackRef01DataUp0Up := map[string]any{
			"id": updateAssetTrackRef01Data["id"],
			"asset_id": setup.idmap["asset_id"],
		}

		updateAssetTrackRef01MarkdefUp0Name := "language_code"
		updateAssetTrackRef01MarkdefUp0Value := fmt.Sprintf("Mark01-update_asset_track_ref01_%d", setup.now)
		updateAssetTrackRef01DataUp0Up[updateAssetTrackRef01MarkdefUp0Name] = updateAssetTrackRef01MarkdefUp0Value

		updateAssetTrackRef01ResdataUp0Result, err := updateAssetTrackRef01Ent.Update(updateAssetTrackRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		updateAssetTrackRef01ResdataUp0 := core.ToMapAny(entityData(updateAssetTrackRef01ResdataUp0Result))
		if updateAssetTrackRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if updateAssetTrackRef01ResdataUp0["id"] != updateAssetTrackRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if updateAssetTrackRef01ResdataUp0[updateAssetTrackRef01MarkdefUp0Name] != updateAssetTrackRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", updateAssetTrackRef01MarkdefUp0Name, updateAssetTrackRef01ResdataUp0[updateAssetTrackRef01MarkdefUp0Name])
		}

	})
}

func update_asset_trackBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "update_asset_track", "UpdateAssetTrackTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read update_asset_track test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse update_asset_track test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"update_asset_track01", "update_asset_track02", "update_asset_track03", "asset01", "asset02", "asset03"},
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
	entidEnvRaw := os.Getenv("MUX_TEST_UPDATE_ASSET_TRACK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MUX_TEST_UPDATE_ASSET_TRACK_ENTID": idmap,
		"MUX_TEST_LIVE":      "FALSE",
		"MUX_TEST_EXPLAIN":   "FALSE",
		"MUX_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["MUX_TEST_UPDATE_ASSET_TRACK_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add asset_id alias for update test.
	if idmapResolved["asset_id"] == nil {
		idmapResolved["asset_id"] = idmapResolved["asset01"]
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
