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

func TestTranscriptionVocabularyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TranscriptionVocabulary(nil)
		if ent == nil {
			t.Fatal("expected non-nil TranscriptionVocabularyEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"transcription_vocabulary": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.TranscriptionVocabulary(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.TranscriptionVocabulary(nil).Stream("list", nil, nil) {
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
		setup := transcription_vocabularyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "transcription_vocabulary." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		transcriptionVocabularyRef01Ent := client.TranscriptionVocabulary(nil)
		transcriptionVocabularyRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "transcription_vocabulary"}), "transcription_vocabulary_ref01"))

		transcriptionVocabularyRef01DataResult, err := transcriptionVocabularyRef01Ent.Create(transcriptionVocabularyRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		transcriptionVocabularyRef01Data = core.ToMapAny(entityData(transcriptionVocabularyRef01DataResult))
		if transcriptionVocabularyRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if transcriptionVocabularyRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		transcriptionVocabularyRef01Match := map[string]any{}

		transcriptionVocabularyRef01ListResult, err := transcriptionVocabularyRef01Ent.List(transcriptionVocabularyRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		transcriptionVocabularyRef01List, transcriptionVocabularyRef01ListOk := transcriptionVocabularyRef01ListResult.([]any)
		if !transcriptionVocabularyRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", transcriptionVocabularyRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(transcriptionVocabularyRef01List), map[string]any{"id": transcriptionVocabularyRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		transcriptionVocabularyRef01DataUp0Up := map[string]any{
			"id": transcriptionVocabularyRef01Data["id"],
		}

		transcriptionVocabularyRef01MarkdefUp0Name := "created_at"
		transcriptionVocabularyRef01MarkdefUp0Value := fmt.Sprintf("Mark01-transcription_vocabulary_ref01_%d", setup.now)
		transcriptionVocabularyRef01DataUp0Up[transcriptionVocabularyRef01MarkdefUp0Name] = transcriptionVocabularyRef01MarkdefUp0Value

		transcriptionVocabularyRef01ResdataUp0Result, err := transcriptionVocabularyRef01Ent.Update(transcriptionVocabularyRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		transcriptionVocabularyRef01ResdataUp0 := core.ToMapAny(entityData(transcriptionVocabularyRef01ResdataUp0Result))
		if transcriptionVocabularyRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if transcriptionVocabularyRef01ResdataUp0["id"] != transcriptionVocabularyRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if transcriptionVocabularyRef01ResdataUp0[transcriptionVocabularyRef01MarkdefUp0Name] != transcriptionVocabularyRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", transcriptionVocabularyRef01MarkdefUp0Name, transcriptionVocabularyRef01ResdataUp0[transcriptionVocabularyRef01MarkdefUp0Name])
		}

		// LOAD
		transcriptionVocabularyRef01MatchDt0 := map[string]any{
			"id": transcriptionVocabularyRef01Data["id"],
		}
		transcriptionVocabularyRef01DataDt0Loaded, err := transcriptionVocabularyRef01Ent.Load(transcriptionVocabularyRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		transcriptionVocabularyRef01DataDt0LoadResult := core.ToMapAny(entityData(transcriptionVocabularyRef01DataDt0Loaded))
		if transcriptionVocabularyRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if transcriptionVocabularyRef01DataDt0LoadResult["id"] != transcriptionVocabularyRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		transcriptionVocabularyRef01MatchRm0 := map[string]any{
			"id": transcriptionVocabularyRef01Data["id"],
		}
		_, err = transcriptionVocabularyRef01Ent.Remove(transcriptionVocabularyRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		transcriptionVocabularyRef01MatchRt0 := map[string]any{}

		transcriptionVocabularyRef01ListRt0Result, err := transcriptionVocabularyRef01Ent.List(transcriptionVocabularyRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		transcriptionVocabularyRef01ListRt0, transcriptionVocabularyRef01ListRt0Ok := transcriptionVocabularyRef01ListRt0Result.([]any)
		if !transcriptionVocabularyRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", transcriptionVocabularyRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(transcriptionVocabularyRef01ListRt0), map[string]any{"id": transcriptionVocabularyRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func transcription_vocabularyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "transcription_vocabulary", "TranscriptionVocabularyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read transcription_vocabulary test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse transcription_vocabulary test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"transcription_vocabulary01", "transcription_vocabulary02", "transcription_vocabulary03"},
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
	entidEnvRaw := os.Getenv("MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID": idmap,
		"MUX_TEST_LIVE":      "FALSE",
		"MUX_TEST_EXPLAIN":   "FALSE",
		"MUX_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID"])
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
