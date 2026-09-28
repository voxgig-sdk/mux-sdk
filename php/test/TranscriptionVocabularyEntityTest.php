<?php
declare(strict_types=1);

// TranscriptionVocabulary entity test

require_once __DIR__ . '/../mux_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class TranscriptionVocabularyEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = MuxSDK::test(null, null);
        $ent = $testsdk->TranscriptionVocabulary(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = transcription_vocabulary_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "transcription_vocabulary." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $transcription_vocabulary_ref01_ent = $client->TranscriptionVocabulary(null);
        $transcription_vocabulary_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.transcription_vocabulary"), "transcription_vocabulary_ref01"));

        $transcription_vocabulary_ref01_data_result = $transcription_vocabulary_ref01_ent->create($transcription_vocabulary_ref01_data, null);
        $transcription_vocabulary_ref01_data = Helpers::to_map(is_object($transcription_vocabulary_ref01_data_result) && method_exists($transcription_vocabulary_ref01_data_result, 'data_get') ? $transcription_vocabulary_ref01_data_result->data_get() : $transcription_vocabulary_ref01_data_result);
        $this->assertNotNull($transcription_vocabulary_ref01_data);
        $this->assertNotNull($transcription_vocabulary_ref01_data["id"]);

        // UPDATE
        $transcription_vocabulary_ref01_data_up0_up = [
            "id" => $transcription_vocabulary_ref01_data["id"],
        ];

        $transcription_vocabulary_ref01_markdef_up0_name = "created_at";
        $transcription_vocabulary_ref01_markdef_up0_value = "Mark01-transcription_vocabulary_ref01_" . $setup["now"];
        $transcription_vocabulary_ref01_data_up0_up[$transcription_vocabulary_ref01_markdef_up0_name] = $transcription_vocabulary_ref01_markdef_up0_value;

        $transcription_vocabulary_ref01_resdata_up0_result = $transcription_vocabulary_ref01_ent->update($transcription_vocabulary_ref01_data_up0_up, null);
        $transcription_vocabulary_ref01_resdata_up0 = Helpers::to_map(is_object($transcription_vocabulary_ref01_resdata_up0_result) && method_exists($transcription_vocabulary_ref01_resdata_up0_result, 'data_get') ? $transcription_vocabulary_ref01_resdata_up0_result->data_get() : $transcription_vocabulary_ref01_resdata_up0_result);
        $this->assertNotNull($transcription_vocabulary_ref01_resdata_up0);
        $this->assertEquals($transcription_vocabulary_ref01_resdata_up0["id"], $transcription_vocabulary_ref01_data_up0_up["id"]);
        $this->assertEquals($transcription_vocabulary_ref01_resdata_up0[$transcription_vocabulary_ref01_markdef_up0_name], $transcription_vocabulary_ref01_markdef_up0_value);

        // LOAD
        $transcription_vocabulary_ref01_match_dt0 = [
            "id" => $transcription_vocabulary_ref01_data["id"],
        ];
        $transcription_vocabulary_ref01_data_dt0_loaded = $transcription_vocabulary_ref01_ent->load($transcription_vocabulary_ref01_match_dt0, null);
        $transcription_vocabulary_ref01_data_dt0_load_result = Helpers::to_map(is_object($transcription_vocabulary_ref01_data_dt0_loaded) && method_exists($transcription_vocabulary_ref01_data_dt0_loaded, 'data_get') ? $transcription_vocabulary_ref01_data_dt0_loaded->data_get() : $transcription_vocabulary_ref01_data_dt0_loaded);
        $this->assertNotNull($transcription_vocabulary_ref01_data_dt0_load_result);
        $this->assertEquals($transcription_vocabulary_ref01_data_dt0_load_result["id"], $transcription_vocabulary_ref01_data["id"]);

        // REMOVE
        $transcription_vocabulary_ref01_match_rm0 = [
            "id" => $transcription_vocabulary_ref01_data["id"],
        ];
        $transcription_vocabulary_ref01_ent->remove($transcription_vocabulary_ref01_match_rm0, null);

    }
}

function transcription_vocabulary_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/transcription_vocabulary/TranscriptionVocabularyTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = MuxSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["transcription_vocabulary01", "transcription_vocabulary02", "transcription_vocabulary03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID" => $idmap,
        "MUX_TEST_LIVE" => "FALSE",
        "MUX_TEST_EXPLAIN" => "FALSE",
        "MUX_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["MUX_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["MUX_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new MuxSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["MUX_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["MUX_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
