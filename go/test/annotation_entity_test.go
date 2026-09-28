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

func TestAnnotationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Annotation(nil)
		if ent == nil {
			t.Fatal("expected non-nil AnnotationEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := annotationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "annotation." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MUX_TEST_ANNOTATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		annotationRef01Ent := client.Annotation(nil)
		annotationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "annotation"}), "annotation_ref01"))

		annotationRef01DataResult, err := annotationRef01Ent.Create(annotationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		annotationRef01Data = core.ToMapAny(entityData(annotationRef01DataResult))
		if annotationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if annotationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		annotationRef01DataUp0Up := map[string]any{
			"id": annotationRef01Data["id"],
		}

		annotationRef01MarkdefUp0Name := "date"
		annotationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-annotation_ref01_%d", setup.now)
		annotationRef01DataUp0Up[annotationRef01MarkdefUp0Name] = annotationRef01MarkdefUp0Value

		annotationRef01ResdataUp0Result, err := annotationRef01Ent.Update(annotationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		annotationRef01ResdataUp0 := core.ToMapAny(entityData(annotationRef01ResdataUp0Result))
		if annotationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if annotationRef01ResdataUp0["id"] != annotationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if annotationRef01ResdataUp0[annotationRef01MarkdefUp0Name] != annotationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", annotationRef01MarkdefUp0Name, annotationRef01ResdataUp0[annotationRef01MarkdefUp0Name])
		}

		// LOAD
		annotationRef01MatchDt0 := map[string]any{
			"id": annotationRef01Data["id"],
		}
		annotationRef01DataDt0Loaded, err := annotationRef01Ent.Load(annotationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		annotationRef01DataDt0LoadResult := core.ToMapAny(entityData(annotationRef01DataDt0Loaded))
		if annotationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if annotationRef01DataDt0LoadResult["id"] != annotationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		annotationRef01MatchRm0 := map[string]any{
			"id": annotationRef01Data["id"],
		}
		_, err = annotationRef01Ent.Remove(annotationRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func annotationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "annotation", "AnnotationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read annotation test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse annotation test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"annotation01", "annotation02", "annotation03"},
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
	entidEnvRaw := os.Getenv("MUX_TEST_ANNOTATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MUX_TEST_ANNOTATION_ENTID": idmap,
		"MUX_TEST_LIVE":      "FALSE",
		"MUX_TEST_EXPLAIN":   "FALSE",
		"MUX_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["MUX_TEST_ANNOTATION_ENTID"])
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
