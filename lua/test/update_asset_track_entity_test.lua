-- UpdateAssetTrack entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("mux_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("UpdateAssetTrackEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:UpdateAssetTrack(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = update_asset_track_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "update_asset_track." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set MUX_TEST_UPDATE_ASSET_TRACK_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local update_asset_track_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.update_asset_track")))
    local update_asset_track_ref01_data = nil
    if #update_asset_track_ref01_data_raw > 0 then
      update_asset_track_ref01_data = helpers.to_map(update_asset_track_ref01_data_raw[1][2])
    end

    -- UPDATE
    local update_asset_track_ref01_ent = client:UpdateAssetTrack(nil)
    local update_asset_track_ref01_data_up0_up = {
      id = update_asset_track_ref01_data["id"],
      ["asset_id"] = setup.idmap["asset_id"],
    }

    local update_asset_track_ref01_markdef_up0_name = "language_code"
    local update_asset_track_ref01_markdef_up0_value = "Mark01-update_asset_track_ref01_" .. tostring(setup.now)
    update_asset_track_ref01_data_up0_up[update_asset_track_ref01_markdef_up0_name] = update_asset_track_ref01_markdef_up0_value

    local update_asset_track_ref01_resdata_up0_result, err = update_asset_track_ref01_ent:update(update_asset_track_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local update_asset_track_ref01_resdata_up0 = helpers.to_map(type(update_asset_track_ref01_resdata_up0_result) == 'table' and update_asset_track_ref01_resdata_up0_result.data_get and update_asset_track_ref01_resdata_up0_result:data_get() or update_asset_track_ref01_resdata_up0_result)
    assert.is_not_nil(update_asset_track_ref01_resdata_up0)
    assert.are.equal(update_asset_track_ref01_resdata_up0["id"], update_asset_track_ref01_data_up0_up["id"])
    assert.are.equal(update_asset_track_ref01_resdata_up0[update_asset_track_ref01_markdef_up0_name], update_asset_track_ref01_markdef_up0_value)

  end)
end)

function update_asset_track_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/update_asset_track/UpdateAssetTrackTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read update_asset_track test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "update_asset_track01", "update_asset_track02", "update_asset_track03", "asset01", "asset02", "asset03" },
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
  local entid_env_raw = os.getenv("MUX_TEST_UPDATE_ASSET_TRACK_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["MUX_TEST_UPDATE_ASSET_TRACK_ENTID"] = idmap,
    ["MUX_TEST_LIVE"] = "FALSE",
    ["MUX_TEST_EXPLAIN"] = "FALSE",
    ["MUX_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["MUX_TEST_UPDATE_ASSET_TRACK_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["asset_id"] == nil then
    idmap_resolved["asset_id"] = idmap_resolved["asset01"]
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
