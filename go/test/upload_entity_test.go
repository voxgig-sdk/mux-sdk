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

func TestUploadEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Upload(nil)
		if ent == nil {
			t.Fatal("expected non-nil UploadEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := uploadBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "upload." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MUX_TEST_UPLOAD_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		uploadRef01Ent := client.Upload(nil)
		uploadRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "upload"}), "upload_ref01"))

		uploadRef01DataResult, err := uploadRef01Ent.Create(uploadRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		uploadRef01Data = core.ToMapAny(entityData(uploadRef01DataResult))
		if uploadRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if uploadRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		uploadRef01DataUp0Up := map[string]any{
			"id": uploadRef01Data["id"],
		}

		uploadRef01MarkdefUp0Name := "asset_id"
		uploadRef01MarkdefUp0Value := fmt.Sprintf("Mark01-upload_ref01_%d", setup.now)
		uploadRef01DataUp0Up[uploadRef01MarkdefUp0Name] = uploadRef01MarkdefUp0Value

		uploadRef01ResdataUp0Result, err := uploadRef01Ent.Update(uploadRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		uploadRef01ResdataUp0 := core.ToMapAny(entityData(uploadRef01ResdataUp0Result))
		if uploadRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if uploadRef01ResdataUp0["id"] != uploadRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if uploadRef01ResdataUp0[uploadRef01MarkdefUp0Name] != uploadRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", uploadRef01MarkdefUp0Name, uploadRef01ResdataUp0[uploadRef01MarkdefUp0Name])
		}

		// LOAD
		uploadRef01MatchDt0 := map[string]any{
			"id": uploadRef01Data["id"],
		}
		uploadRef01DataDt0Loaded, err := uploadRef01Ent.Load(uploadRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		uploadRef01DataDt0LoadResult := core.ToMapAny(entityData(uploadRef01DataDt0Loaded))
		if uploadRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if uploadRef01DataDt0LoadResult["id"] != uploadRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func uploadBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "upload", "UploadTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read upload test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse upload test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"upload01", "upload02", "upload03"},
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
	entidEnvRaw := os.Getenv("MUX_TEST_UPLOAD_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MUX_TEST_UPLOAD_ENTID": idmap,
		"MUX_TEST_LIVE":      "FALSE",
		"MUX_TEST_EXPLAIN":   "FALSE",
		"MUX_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["MUX_TEST_UPLOAD_ENTID"])
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
