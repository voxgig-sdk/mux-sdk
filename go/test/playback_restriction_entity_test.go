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

func TestPlaybackRestrictionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PlaybackRestriction(nil)
		if ent == nil {
			t.Fatal("expected non-nil PlaybackRestrictionEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := playback_restrictionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "playback_restriction." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MUX_TEST_PLAYBACK_RESTRICTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		playbackRestrictionRef01Ent := client.PlaybackRestriction(nil)
		playbackRestrictionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "playback_restriction"}), "playback_restriction_ref01"))

		playbackRestrictionRef01DataResult, err := playbackRestrictionRef01Ent.Create(playbackRestrictionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		playbackRestrictionRef01Data = core.ToMapAny(entityData(playbackRestrictionRef01DataResult))
		if playbackRestrictionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if playbackRestrictionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		playbackRestrictionRef01DataUp0Up := map[string]any{
			"id": playbackRestrictionRef01Data["id"],
		}

		playbackRestrictionRef01MarkdefUp0Name := "created_at"
		playbackRestrictionRef01MarkdefUp0Value := fmt.Sprintf("Mark01-playback_restriction_ref01_%d", setup.now)
		playbackRestrictionRef01DataUp0Up[playbackRestrictionRef01MarkdefUp0Name] = playbackRestrictionRef01MarkdefUp0Value

		playbackRestrictionRef01ResdataUp0Result, err := playbackRestrictionRef01Ent.Update(playbackRestrictionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		playbackRestrictionRef01ResdataUp0 := core.ToMapAny(entityData(playbackRestrictionRef01ResdataUp0Result))
		if playbackRestrictionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if playbackRestrictionRef01ResdataUp0["id"] != playbackRestrictionRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if playbackRestrictionRef01ResdataUp0[playbackRestrictionRef01MarkdefUp0Name] != playbackRestrictionRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", playbackRestrictionRef01MarkdefUp0Name, playbackRestrictionRef01ResdataUp0[playbackRestrictionRef01MarkdefUp0Name])
		}

		// LOAD
		playbackRestrictionRef01MatchDt0 := map[string]any{
			"id": playbackRestrictionRef01Data["id"],
		}
		playbackRestrictionRef01DataDt0Loaded, err := playbackRestrictionRef01Ent.Load(playbackRestrictionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		playbackRestrictionRef01DataDt0LoadResult := core.ToMapAny(entityData(playbackRestrictionRef01DataDt0Loaded))
		if playbackRestrictionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if playbackRestrictionRef01DataDt0LoadResult["id"] != playbackRestrictionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		playbackRestrictionRef01MatchRm0 := map[string]any{
			"id": playbackRestrictionRef01Data["id"],
		}
		_, err = playbackRestrictionRef01Ent.Remove(playbackRestrictionRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func playback_restrictionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "playback_restriction", "PlaybackRestrictionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read playback_restriction test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse playback_restriction test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"playback_restriction01", "playback_restriction02", "playback_restriction03"},
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
	entidEnvRaw := os.Getenv("MUX_TEST_PLAYBACK_RESTRICTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MUX_TEST_PLAYBACK_RESTRICTION_ENTID": idmap,
		"MUX_TEST_LIVE":      "FALSE",
		"MUX_TEST_EXPLAIN":   "FALSE",
		"MUX_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["MUX_TEST_PLAYBACK_RESTRICTION_ENTID"])
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
