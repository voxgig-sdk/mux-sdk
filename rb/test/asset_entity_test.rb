# Asset entity test

require "minitest/autorun"
require "json"
require_relative "../Mux_sdk"
require_relative "runner"

class AssetEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MuxSDK.test(nil, nil)
    ent = testsdk.Asset(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = asset_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "asset." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MUX_TEST_ASSET_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    asset_ref01_ent = client.Asset(nil)
    asset_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.asset"), "asset_ref01"))
    asset_ref01_data["asset_id"] = setup[:idmap]["asset01"]

    asset_ref01_data_result = asset_ref01_ent.create(asset_ref01_data, nil)
    asset_ref01_data = Helpers.to_map(asset_ref01_data_result.respond_to?(:data_get) ? asset_ref01_data_result.data_get : asset_ref01_data_result)
    assert !asset_ref01_data.nil?
    assert !asset_ref01_data["id"].nil?

    # UPDATE
    asset_ref01_data_up0_up = {
      "id" => asset_ref01_data["id"],
    }

    asset_ref01_markdef_up0_name = "aspect_ratio"
    asset_ref01_markdef_up0_value = "Mark01-asset_ref01_#{setup[:now]}"
    asset_ref01_data_up0_up[asset_ref01_markdef_up0_name] = asset_ref01_markdef_up0_value

    asset_ref01_resdata_up0_result = asset_ref01_ent.update(asset_ref01_data_up0_up, nil)
    asset_ref01_resdata_up0 = Helpers.to_map(asset_ref01_resdata_up0_result.respond_to?(:data_get) ? asset_ref01_resdata_up0_result.data_get : asset_ref01_resdata_up0_result)
    assert !asset_ref01_resdata_up0.nil?
    assert_equal asset_ref01_resdata_up0["id"], asset_ref01_data_up0_up["id"]
    assert_equal asset_ref01_resdata_up0[asset_ref01_markdef_up0_name], asset_ref01_markdef_up0_value

    # LOAD
    asset_ref01_match_dt0 = {
      "id" => asset_ref01_data["id"],
    }
    asset_ref01_data_dt0_loaded = asset_ref01_ent.load(asset_ref01_match_dt0, nil)
    asset_ref01_data_dt0_load_result = Helpers.to_map(asset_ref01_data_dt0_loaded.respond_to?(:data_get) ? asset_ref01_data_dt0_loaded.data_get : asset_ref01_data_dt0_loaded)
    assert !asset_ref01_data_dt0_load_result.nil?
    assert_equal asset_ref01_data_dt0_load_result["id"], asset_ref01_data["id"]

    # REMOVE
    asset_ref01_match_rm0 = {
      "id" => asset_ref01_data["id"],
    }
    asset_ref01_ent.remove(asset_ref01_match_rm0, nil)

  end
end

def asset_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "asset", "AssetTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MuxSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["asset01", "asset02", "asset03", "static_rendition01", "static_rendition02", "static_rendition03"],
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
  entid_env_raw = ENV["MUX_TEST_ASSET_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MUX_TEST_ASSET_ENTID" => idmap,
    "MUX_TEST_LIVE" => "FALSE",
    "MUX_TEST_EXPLAIN" => "FALSE",
    "MUX_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["MUX_TEST_ASSET_ENTID"])
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
