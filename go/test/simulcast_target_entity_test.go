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

func TestSimulcastTargetEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SimulcastTarget(nil)
		if ent == nil {
			t.Fatal("expected non-nil SimulcastTargetEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := simulcast_targetBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "simulcast_target." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MUX_TEST_SIMULCAST_TARGET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		simulcastTargetRef01Ent := client.SimulcastTarget(nil)
		simulcastTargetRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "simulcast_target"}), "simulcast_target_ref01"))
		simulcastTargetRef01Data["live_stream_id"] = setup.idmap["live_stream01"]

		simulcastTargetRef01DataResult, err := simulcastTargetRef01Ent.Create(simulcastTargetRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		simulcastTargetRef01Data = core.ToMapAny(entityData(simulcastTargetRef01DataResult))
		if simulcastTargetRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if simulcastTargetRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		simulcastTargetRef01MatchDt0 := map[string]any{
			"id": simulcastTargetRef01Data["id"],
		}
		simulcastTargetRef01DataDt0Loaded, err := simulcastTargetRef01Ent.Load(simulcastTargetRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		simulcastTargetRef01DataDt0LoadResult := core.ToMapAny(entityData(simulcastTargetRef01DataDt0Loaded))
		if simulcastTargetRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if simulcastTargetRef01DataDt0LoadResult["id"] != simulcastTargetRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func simulcast_targetBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "simulcast_target", "SimulcastTargetTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read simulcast_target test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse simulcast_target test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"simulcast_target01", "simulcast_target02", "simulcast_target03", "live_stream01", "live_stream02", "live_stream03"},
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
	entidEnvRaw := os.Getenv("MUX_TEST_SIMULCAST_TARGET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MUX_TEST_SIMULCAST_TARGET_ENTID": idmap,
		"MUX_TEST_LIVE":      "FALSE",
		"MUX_TEST_EXPLAIN":   "FALSE",
		"MUX_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["MUX_TEST_SIMULCAST_TARGET_ENTID"])
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
