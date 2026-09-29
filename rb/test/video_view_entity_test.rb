# VideoView entity test

require "minitest/autorun"
require "json"
require_relative "../Mux_sdk"
require_relative "runner"

class VideoViewEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MuxSDK.test(nil, nil)
    ent = testsdk.VideoView(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "video_view" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = MuxSDK.test(seed, nil)
    seen = base.VideoView(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = MuxConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = MuxSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.VideoView(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = video_view_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "video_view." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MUX_TEST_VIDEO_VIEW_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    video_view_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.video_view")))
    video_view_ref01_data = nil
    if video_view_ref01_data_raw.length > 0
      video_view_ref01_data = Helpers.to_map(video_view_ref01_data_raw[0][1])
    end

    # LIST
    video_view_ref01_ent = client.VideoView(nil)
    video_view_ref01_match = {}

    video_view_ref01_list_result = video_view_ref01_ent.list(video_view_ref01_match, nil)
    assert video_view_ref01_list_result.is_a?(Array)

    # LOAD
    video_view_ref01_match_dt0 = {
      "id" => video_view_ref01_data["id"],
    }
    video_view_ref01_data_dt0_loaded = video_view_ref01_ent.load(video_view_ref01_match_dt0, nil)
    video_view_ref01_data_dt0_load_result = Helpers.to_map(video_view_ref01_data_dt0_loaded.respond_to?(:data_get) ? video_view_ref01_data_dt0_loaded.data_get : video_view_ref01_data_dt0_loaded)
    assert !video_view_ref01_data_dt0_load_result.nil?
    assert_equal video_view_ref01_data_dt0_load_result["id"], video_view_ref01_data["id"]

  end
end

def video_view_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "video_view", "VideoViewTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MuxSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["video_view01", "video_view02", "video_view03"],
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
  entid_env_raw = ENV["MUX_TEST_VIDEO_VIEW_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MUX_TEST_VIDEO_VIEW_ENTID" => idmap,
    "MUX_TEST_LIVE" => "FALSE",
    "MUX_TEST_EXPLAIN" => "FALSE",
    "MUX_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["MUX_TEST_VIDEO_VIEW_ENTID"])
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
