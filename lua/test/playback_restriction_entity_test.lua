-- PlaybackRestriction entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("mux_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("PlaybackRestrictionEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:PlaybackRestriction(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["playback_restriction"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:PlaybackRestriction(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:PlaybackRestriction(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = playback_restriction_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "playback_restriction." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set MUX_TEST_PLAYBACK_RESTRICTION_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local playback_restriction_ref01_ent = client:PlaybackRestriction(nil)
    local playback_restriction_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.playback_restriction"), "playback_restriction_ref01"))

    local playback_restriction_ref01_data_result, err = playback_restriction_ref01_ent:create(playback_restriction_ref01_data, nil)
    assert.is_nil(err)
    playback_restriction_ref01_data = helpers.to_map(type(playback_restriction_ref01_data_result) == 'table' and playback_restriction_ref01_data_result.data_get and playback_restriction_ref01_data_result:data_get() or playback_restriction_ref01_data_result)
    assert.is_not_nil(playback_restriction_ref01_data)
    assert.is_not_nil(playback_restriction_ref01_data["id"])

    -- LIST
    local playback_restriction_ref01_match = {}

    local playback_restriction_ref01_list_result, err = playback_restriction_ref01_ent:list(playback_restriction_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(playback_restriction_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(playback_restriction_ref01_list_result),
      { id = playback_restriction_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local playback_restriction_ref01_data_up0_up = {
      id = playback_restriction_ref01_data["id"],
    }

    local playback_restriction_ref01_markdef_up0_name = "created_at"
    local playback_restriction_ref01_markdef_up0_value = "Mark01-playback_restriction_ref01_" .. tostring(setup.now)
    playback_restriction_ref01_data_up0_up[playback_restriction_ref01_markdef_up0_name] = playback_restriction_ref01_markdef_up0_value

    local playback_restriction_ref01_resdata_up0_result, err = playback_restriction_ref01_ent:update(playback_restriction_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local playback_restriction_ref01_resdata_up0 = helpers.to_map(type(playback_restriction_ref01_resdata_up0_result) == 'table' and playback_restriction_ref01_resdata_up0_result.data_get and playback_restriction_ref01_resdata_up0_result:data_get() or playback_restriction_ref01_resdata_up0_result)
    assert.is_not_nil(playback_restriction_ref01_resdata_up0)
    assert.are.equal(playback_restriction_ref01_resdata_up0["id"], playback_restriction_ref01_data_up0_up["id"])
    assert.are.equal(playback_restriction_ref01_resdata_up0[playback_restriction_ref01_markdef_up0_name], playback_restriction_ref01_markdef_up0_value)

    -- LOAD
    local playback_restriction_ref01_match_dt0 = {
      id = playback_restriction_ref01_data["id"],
    }
    local playback_restriction_ref01_data_dt0_loaded, err = playback_restriction_ref01_ent:load(playback_restriction_ref01_match_dt0, nil)
    assert.is_nil(err)
    local playback_restriction_ref01_data_dt0_load_result = helpers.to_map(type(playback_restriction_ref01_data_dt0_loaded) == 'table' and playback_restriction_ref01_data_dt0_loaded.data_get and playback_restriction_ref01_data_dt0_loaded:data_get() or playback_restriction_ref01_data_dt0_loaded)
    assert.is_not_nil(playback_restriction_ref01_data_dt0_load_result)
    assert.are.equal(playback_restriction_ref01_data_dt0_load_result["id"], playback_restriction_ref01_data["id"])

    -- REMOVE
    local playback_restriction_ref01_match_rm0 = {
      id = playback_restriction_ref01_data["id"],
    }
    local _, err = playback_restriction_ref01_ent:remove(playback_restriction_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local playback_restriction_ref01_match_rt0 = {}

    local playback_restriction_ref01_list_rt0_result, err = playback_restriction_ref01_ent:list(playback_restriction_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(playback_restriction_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(playback_restriction_ref01_list_rt0_result),
      { id = playback_restriction_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function playback_restriction_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/playback_restriction/PlaybackRestrictionTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read playback_restriction test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "playback_restriction01", "playback_restriction02", "playback_restriction03" },
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
  local entid_env_raw = os.getenv("MUX_TEST_PLAYBACK_RESTRICTION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["MUX_TEST_PLAYBACK_RESTRICTION_ENTID"] = idmap,
    ["MUX_TEST_LIVE"] = "FALSE",
    ["MUX_TEST_EXPLAIN"] = "FALSE",
    ["MUX_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["MUX_TEST_PLAYBACK_RESTRICTION_ENTID"])
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
