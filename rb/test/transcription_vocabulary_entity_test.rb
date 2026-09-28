# TranscriptionVocabulary entity test

require "minitest/autorun"
require "json"
require_relative "../Mux_sdk"
require_relative "runner"

class TranscriptionVocabularyEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MuxSDK.test(nil, nil)
    ent = testsdk.TranscriptionVocabulary(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = transcription_vocabulary_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "transcription_vocabulary." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    transcription_vocabulary_ref01_ent = client.TranscriptionVocabulary(nil)
    transcription_vocabulary_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.transcription_vocabulary"), "transcription_vocabulary_ref01"))

    transcription_vocabulary_ref01_data_result = transcription_vocabulary_ref01_ent.create(transcription_vocabulary_ref01_data, nil)
    transcription_vocabulary_ref01_data = Helpers.to_map(transcription_vocabulary_ref01_data_result.respond_to?(:data_get) ? transcription_vocabulary_ref01_data_result.data_get : transcription_vocabulary_ref01_data_result)
    assert !transcription_vocabulary_ref01_data.nil?
    assert !transcription_vocabulary_ref01_data["id"].nil?

    # UPDATE
    transcription_vocabulary_ref01_data_up0_up = {
      "id" => transcription_vocabulary_ref01_data["id"],
    }

    transcription_vocabulary_ref01_markdef_up0_name = "created_at"
    transcription_vocabulary_ref01_markdef_up0_value = "Mark01-transcription_vocabulary_ref01_#{setup[:now]}"
    transcription_vocabulary_ref01_data_up0_up[transcription_vocabulary_ref01_markdef_up0_name] = transcription_vocabulary_ref01_markdef_up0_value

    transcription_vocabulary_ref01_resdata_up0_result = transcription_vocabulary_ref01_ent.update(transcription_vocabulary_ref01_data_up0_up, nil)
    transcription_vocabulary_ref01_resdata_up0 = Helpers.to_map(transcription_vocabulary_ref01_resdata_up0_result.respond_to?(:data_get) ? transcription_vocabulary_ref01_resdata_up0_result.data_get : transcription_vocabulary_ref01_resdata_up0_result)
    assert !transcription_vocabulary_ref01_resdata_up0.nil?
    assert_equal transcription_vocabulary_ref01_resdata_up0["id"], transcription_vocabulary_ref01_data_up0_up["id"]
    assert_equal transcription_vocabulary_ref01_resdata_up0[transcription_vocabulary_ref01_markdef_up0_name], transcription_vocabulary_ref01_markdef_up0_value

    # LOAD
    transcription_vocabulary_ref01_match_dt0 = {
      "id" => transcription_vocabulary_ref01_data["id"],
    }
    transcription_vocabulary_ref01_data_dt0_loaded = transcription_vocabulary_ref01_ent.load(transcription_vocabulary_ref01_match_dt0, nil)
    transcription_vocabulary_ref01_data_dt0_load_result = Helpers.to_map(transcription_vocabulary_ref01_data_dt0_loaded.respond_to?(:data_get) ? transcription_vocabulary_ref01_data_dt0_loaded.data_get : transcription_vocabulary_ref01_data_dt0_loaded)
    assert !transcription_vocabulary_ref01_data_dt0_load_result.nil?
    assert_equal transcription_vocabulary_ref01_data_dt0_load_result["id"], transcription_vocabulary_ref01_data["id"]

    # REMOVE
    transcription_vocabulary_ref01_match_rm0 = {
      "id" => transcription_vocabulary_ref01_data["id"],
    }
    transcription_vocabulary_ref01_ent.remove(transcription_vocabulary_ref01_match_rm0, nil)

  end
end

def transcription_vocabulary_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "transcription_vocabulary", "TranscriptionVocabularyTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MuxSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["transcription_vocabulary01", "transcription_vocabulary02", "transcription_vocabulary03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID" => idmap,
    "MUX_TEST_LIVE" => "FALSE",
    "MUX_TEST_EXPLAIN" => "FALSE",
    "MUX_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["MUX_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["MUX_APIKEY"],
      },
      extra || {},
    ])
    client = MuxSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["MUX_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["MUX_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
