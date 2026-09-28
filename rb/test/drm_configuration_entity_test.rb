# DrmConfiguration entity test

require "minitest/autorun"
require "json"
require_relative "../Mux_sdk"
require_relative "runner"

class DrmConfigurationEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MuxSDK.test(nil, nil)
    ent = testsdk.DrmConfiguration(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = drm_configuration_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "drm_configuration." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MUX_TEST_DRM_CONFIGURATION_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    drm_configuration_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.drm_configuration")))
    drm_configuration_ref01_data = nil
    if drm_configuration_ref01_data_raw.length > 0
      drm_configuration_ref01_data = Helpers.to_map(drm_configuration_ref01_data_raw[0][1])
    end

    # LOAD
    drm_configuration_ref01_ent = client.DrmConfiguration(nil)
    drm_configuration_ref01_match_dt0 = {
      "id" => drm_configuration_ref01_data["id"],
    }
    drm_configuration_ref01_data_dt0_loaded = drm_configuration_ref01_ent.load(drm_configuration_ref01_match_dt0, nil)
    drm_configuration_ref01_data_dt0_load_result = Helpers.to_map(drm_configuration_ref01_data_dt0_loaded.respond_to?(:data_get) ? drm_configuration_ref01_data_dt0_loaded.data_get : drm_configuration_ref01_data_dt0_loaded)
    assert !drm_configuration_ref01_data_dt0_load_result.nil?
    assert_equal drm_configuration_ref01_data_dt0_load_result["id"], drm_configuration_ref01_data["id"]

  end
end

def drm_configuration_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "drm_configuration", "DrmConfigurationTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MuxSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["drm_configuration01", "drm_configuration02", "drm_configuration03"],
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
  entid_env_raw = ENV["MUX_TEST_DRM_CONFIGURATION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MUX_TEST_DRM_CONFIGURATION_ENTID" => idmap,
    "MUX_TEST_LIVE" => "FALSE",
    "MUX_TEST_EXPLAIN" => "FALSE",
    "MUX_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["MUX_TEST_DRM_CONFIGURATION_ENTID"])
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
