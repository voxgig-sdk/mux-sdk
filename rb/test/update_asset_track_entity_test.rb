# UpdateAssetTrack entity test

require "minitest/autorun"
require "json"
require_relative "../Mux_sdk"
require_relative "runner"

class UpdateAssetTrackEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MuxSDK.test(nil, nil)
    ent = testsdk.UpdateAssetTrack(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = update_asset_track_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "update_asset_track." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MUX_TEST_UPDATE_ASSET_TRACK_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    update_asset_track_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.update_asset_track")))
    update_asset_track_ref01_data = nil
    if update_asset_track_ref01_data_raw.length > 0
      update_asset_track_ref01_data = Helpers.to_map(update_asset_track_ref01_data_raw[0][1])
    end

    # UPDATE
    update_asset_track_ref01_ent = client.UpdateAssetTrack(nil)
    update_asset_track_ref01_data_up0_up = {
      "id" => update_asset_track_ref01_data["id"],
      "asset_id" => setup[:idmap]["asset_id"],
    }

    update_asset_track_ref01_markdef_up0_name = "language_code"
    update_asset_track_ref01_markdef_up0_value = "Mark01-update_asset_track_ref01_#{setup[:now]}"
    update_asset_track_ref01_data_up0_up[update_asset_track_ref01_markdef_up0_name] = update_asset_track_ref01_markdef_up0_value

    update_asset_track_ref01_resdata_up0_result = update_asset_track_ref01_ent.update(update_asset_track_ref01_data_up0_up, nil)
    update_asset_track_ref01_resdata_up0 = Helpers.to_map(update_asset_track_ref01_resdata_up0_result.respond_to?(:data_get) ? update_asset_track_ref01_resdata_up0_result.data_get : update_asset_track_ref01_resdata_up0_result)
    assert !update_asset_track_ref01_resdata_up0.nil?
    assert_equal update_asset_track_ref01_resdata_up0["id"], update_asset_track_ref01_data_up0_up["id"]
    assert_equal update_asset_track_ref01_resdata_up0[update_asset_track_ref01_markdef_up0_name], update_asset_track_ref01_markdef_up0_value

  end
end

def update_asset_track_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "update_asset_track", "UpdateAssetTrackTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MuxSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["update_asset_track01", "update_asset_track02", "update_asset_track03", "asset01", "asset02", "asset03"],
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
  entid_env_raw = ENV["MUX_TEST_UPDATE_ASSET_TRACK_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MUX_TEST_UPDATE_ASSET_TRACK_ENTID" => idmap,
    "MUX_TEST_LIVE" => "FALSE",
    "MUX_TEST_EXPLAIN" => "FALSE",
    "MUX_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["MUX_TEST_UPDATE_ASSET_TRACK_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["asset_id"].nil?
    idmap_resolved["asset_id"] = idmap_resolved["asset01"]
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
