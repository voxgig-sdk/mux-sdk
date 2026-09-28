# LiveStreamPlaybackId entity test

require "minitest/autorun"
require "json"
require_relative "../Mux_sdk"
require_relative "runner"

class LiveStreamPlaybackIdEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MuxSDK.test(nil, nil)
    ent = testsdk.LiveStreamPlaybackId(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = live_stream_playback_id_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "live_stream_playback_id." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MUX_TEST_LIVE_STREAM_PLAYBACK_ID_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    live_stream_playback_id_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.live_stream_playback_id")))
    live_stream_playback_id_ref01_data = nil
    if live_stream_playback_id_ref01_data_raw.length > 0
      live_stream_playback_id_ref01_data = Helpers.to_map(live_stream_playback_id_ref01_data_raw[0][1])
    end

    # LOAD
    live_stream_playback_id_ref01_ent = client.LiveStreamPlaybackId(nil)
    live_stream_playback_id_ref01_match_dt0 = {
      "id" => live_stream_playback_id_ref01_data["id"],
    }
    live_stream_playback_id_ref01_data_dt0_loaded = live_stream_playback_id_ref01_ent.load(live_stream_playback_id_ref01_match_dt0, nil)
    live_stream_playback_id_ref01_data_dt0_load_result = Helpers.to_map(live_stream_playback_id_ref01_data_dt0_loaded.respond_to?(:data_get) ? live_stream_playback_id_ref01_data_dt0_loaded.data_get : live_stream_playback_id_ref01_data_dt0_loaded)
    assert !live_stream_playback_id_ref01_data_dt0_load_result.nil?
    assert_equal live_stream_playback_id_ref01_data_dt0_load_result["id"], live_stream_playback_id_ref01_data["id"]

  end
end

def live_stream_playback_id_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "live_stream_playback_id", "LiveStreamPlaybackIdTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MuxSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["live_stream_playback_id01", "live_stream_playback_id02", "live_stream_playback_id03", "live_stream01", "live_stream02", "live_stream03"],
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
  entid_env_raw = ENV["MUX_TEST_LIVE_STREAM_PLAYBACK_ID_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MUX_TEST_LIVE_STREAM_PLAYBACK_ID_ENTID" => idmap,
    "MUX_TEST_LIVE" => "FALSE",
    "MUX_TEST_EXPLAIN" => "FALSE",
    "MUX_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["MUX_TEST_LIVE_STREAM_PLAYBACK_ID_ENTID"])
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
