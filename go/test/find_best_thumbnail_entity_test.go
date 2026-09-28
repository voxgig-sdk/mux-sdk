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

func TestFindBestThumbnailEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.FindBestThumbnail(nil)
		if ent == nil {
			t.Fatal("expected non-nil FindBestThumbnailEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := find_best_thumbnailBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "find_best_thumbnail." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MUX_TEST_FIND_BEST_THUMBNAIL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		findBestThumbnailRef01Ent := client.FindBestThumbnail(nil)
		findBestThumbnailRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "find_best_thumbnail"}), "find_best_thumbnail_ref01"))

		findBestThumbnailRef01DataResult, err := findBestThumbnailRef01Ent.Create(findBestThumbnailRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		findBestThumbnailRef01Data = core.ToMapAny(entityData(findBestThumbnailRef01DataResult))
		if findBestThumbnailRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if findBestThumbnailRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		findBestThumbnailRef01MatchDt0 := map[string]any{
			"id": findBestThumbnailRef01Data["id"],
		}
		findBestThumbnailRef01DataDt0Loaded, err := findBestThumbnailRef01Ent.Load(findBestThumbnailRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		findBestThumbnailRef01DataDt0LoadResult := core.ToMapAny(entityData(findBestThumbnailRef01DataDt0Loaded))
		if findBestThumbnailRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if findBestThumbnailRef01DataDt0LoadResult["id"] != findBestThumbnailRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func find_best_thumbnailBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "find_best_thumbnail", "FindBestThumbnailTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read find_best_thumbnail test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse find_best_thumbnail test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"find_best_thumbnail01", "find_best_thumbnail02", "find_best_thumbnail03"},
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
	entidEnvRaw := os.Getenv("MUX_TEST_FIND_BEST_THUMBNAIL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MUX_TEST_FIND_BEST_THUMBNAIL_ENTID": idmap,
		"MUX_TEST_LIVE":      "FALSE",
		"MUX_TEST_EXPLAIN":   "FALSE",
		"MUX_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["MUX_TEST_FIND_BEST_THUMBNAIL_ENTID"])
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
