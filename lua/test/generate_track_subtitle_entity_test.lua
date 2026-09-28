-- GenerateTrackSubtitle entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("mux_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("GenerateTrackSubtitleEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:GenerateTrackSubtitle(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = generate_track_subtitle_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "generate_track_subtitle." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set MUX_TEST_GENERATE_TRACK_SUBTITLE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local generate_track_subtitle_ref01_ent = client:GenerateTrackSubtitle(nil)
    local generate_track_subtitle_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.generate_track_subtitle"), "generate_track_subtitle_ref01"))
    generate_track_subtitle_ref01_data["asset_id"] = setup.idmap["asset01"]
    generate_track_subtitle_ref01_data["track_id"] = setup.idmap["track01"]

    local generate_track_subtitle_ref01_data_result, err = generate_track_subtitle_ref01_ent:create(generate_track_subtitle_ref01_data, nil)
    assert.is_nil(err)
    generate_track_subtitle_ref01_data = helpers.to_map(type(generate_track_subtitle_ref01_data_result) == 'table' and generate_track_subtitle_ref01_data_result.data_get and generate_track_subtitle_ref01_data_result:data_get() or generate_track_subtitle_ref01_data_result)
    assert.is_not_nil(generate_track_subtitle_ref01_data)

  end)
end)

function generate_track_subtitle_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/generate_track_subtitle/GenerateTrackSubtitleTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read generate_track_subtitle test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "generate_track_subtitle01", "generate_track_subtitle02", "generate_track_subtitle03", "asset01", "asset02", "asset03", "track01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("MUX_TEST_GENERATE_TRACK_SUBTITLE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["MUX_TEST_GENERATE_TRACK_SUBTITLE_ENTID"] = idmap,
    ["MUX_TEST_LIVE"] = "FALSE",
    ["MUX_TEST_EXPLAIN"] = "FALSE",
    ["MUX_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["MUX_TEST_GENERATE_TRACK_SUBTITLE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["MUX_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["MUX_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["MUX_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["MUX_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
