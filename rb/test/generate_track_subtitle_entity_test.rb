# GenerateTrackSubtitle entity test

require "minitest/autorun"
require "json"
require_relative "../Mux_sdk"
require_relative "runner"

class GenerateTrackSubtitleEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MuxSDK.test(nil, nil)
    ent = testsdk.GenerateTrackSubtitle(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = generate_track_subtitle_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "generate_track_subtitle." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MUX_TEST_GENERATE_TRACK_SUBTITLE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    generate_track_subtitle_ref01_ent = client.GenerateTrackSubtitle(nil)
    generate_track_subtitle_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.generate_track_subtitle"), "generate_track_subtitle_ref01"))
    generate_track_subtitle_ref01_data["asset_id"] = setup[:idmap]["asset01"]
    generate_track_subtitle_ref01_data["track_id"] = setup[:idmap]["track01"]

    generate_track_subtitle_ref01_data_result = generate_track_subtitle_ref01_ent.create(generate_track_subtitle_ref01_data, nil)
    generate_track_subtitle_ref01_data = Helpers.to_map(generate_track_subtitle_ref01_data_result.respond_to?(:data_get) ? generate_track_subtitle_ref01_data_result.data_get : generate_track_subtitle_ref01_data_result)
    assert !generate_track_subtitle_ref01_data.nil?

  end
end

def generate_track_subtitle_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "generate_track_subtitle", "GenerateTrackSubtitleTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MuxSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["generate_track_subtitle01", "generate_track_subtitle02", "generate_track_subtitle03", "asset01", "asset02", "asset03", "track01"],
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
  entid_env_raw = ENV["MUX_TEST_GENERATE_TRACK_SUBTITLE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MUX_TEST_GENERATE_TRACK_SUBTITLE_ENTID" => idmap,
    "MUX_TEST_LIVE" => "FALSE",
    "MUX_TEST_EXPLAIN" => "FALSE",
    "MUX_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["MUX_TEST_GENERATE_TRACK_SUBTITLE_ENTID"])
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
