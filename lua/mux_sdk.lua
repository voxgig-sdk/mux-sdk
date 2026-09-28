-- Mux SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("mux_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local MuxSDK = {}
MuxSDK.__index = MuxSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

MuxSDK._make_feature = _make_feature


function MuxSDK.new(options)
  local self = setmetatable({}, MuxSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function MuxSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function MuxSDK:get_utility()
  return Utility.copy(self._utility)
end


function MuxSDK:get_root_ctx()
  return self._rootctx
end


function MuxSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function MuxSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function MuxSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function MuxSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "MuxSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function MuxSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function MuxSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "MuxSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Annotation():list() / client:Annotation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:Annotation(data)
  local EntityMod = require("entity.annotation_entity")
  if data == nil then
    if self._annotation == nil then
      self._annotation = EntityMod.new(self, nil)
    end
    return self._annotation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AskQuestion():list() / client:AskQuestion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:AskQuestion(data)
  local EntityMod = require("entity.ask_question_entity")
  if data == nil then
    if self._ask_question == nil then
      self._ask_question = EntityMod.new(self, nil)
    end
    return self._ask_question
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Asset():list() / client:Asset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:Asset(data)
  local EntityMod = require("entity.asset_entity")
  if data == nil then
    if self._asset == nil then
      self._asset = EntityMod.new(self, nil)
    end
    return self._asset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AssetOrLiveStreamId():list() / client:AssetOrLiveStreamId():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:AssetOrLiveStreamId(data)
  local EntityMod = require("entity.asset_or_live_stream_id_entity")
  if data == nil then
    if self._asset_or_live_stream_id == nil then
      self._asset_or_live_stream_id = EntityMod.new(self, nil)
    end
    return self._asset_or_live_stream_id
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AssetPlaybackId():list() / client:AssetPlaybackId():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:AssetPlaybackId(data)
  local EntityMod = require("entity.asset_playback_id_entity")
  if data == nil then
    if self._asset_playback_id == nil then
      self._asset_playback_id = EntityMod.new(self, nil)
    end
    return self._asset_playback_id
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AssetShot():list() / client:AssetShot():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:AssetShot(data)
  local EntityMod = require("entity.asset_shot_entity")
  if data == nil then
    if self._asset_shot == nil then
      self._asset_shot = EntityMod.new(self, nil)
    end
    return self._asset_shot
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreatePlaybackId():list() / client:CreatePlaybackId():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:CreatePlaybackId(data)
  local EntityMod = require("entity.create_playback_id_entity")
  if data == nil then
    if self._create_playback_id == nil then
      self._create_playback_id = EntityMod.new(self, nil)
    end
    return self._create_playback_id
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateTrack():list() / client:CreateTrack():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:CreateTrack(data)
  local EntityMod = require("entity.create_track_entity")
  if data == nil then
    if self._create_track == nil then
      self._create_track = EntityMod.new(self, nil)
    end
    return self._create_track
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Directive():list() / client:Directive():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:Directive(data)
  local EntityMod = require("entity.directive_entity")
  if data == nil then
    if self._directive == nil then
      self._directive = EntityMod.new(self, nil)
    end
    return self._directive
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DirectiveRunDetail():list() / client:DirectiveRunDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:DirectiveRunDetail(data)
  local EntityMod = require("entity.directive_run_detail_entity")
  if data == nil then
    if self._directive_run_detail == nil then
      self._directive_run_detail = EntityMod.new(self, nil)
    end
    return self._directive_run_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DirectiveRunList():list() / client:DirectiveRunList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:DirectiveRunList(data)
  local EntityMod = require("entity.directive_run_list_entity")
  if data == nil then
    if self._directive_run_list == nil then
      self._directive_run_list = EntityMod.new(self, nil)
    end
    return self._directive_run_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DrmConfiguration():list() / client:DrmConfiguration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:DrmConfiguration(data)
  local EntityMod = require("entity.drm_configuration_entity")
  if data == nil then
    if self._drm_configuration == nil then
      self._drm_configuration = EntityMod.new(self, nil)
    end
    return self._drm_configuration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EditCaption():list() / client:EditCaption():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:EditCaption(data)
  local EntityMod = require("entity.edit_caption_entity")
  if data == nil then
    if self._edit_caption == nil then
      self._edit_caption = EntityMod.new(self, nil)
    end
    return self._edit_caption
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EngagementHeatmap():list() / client:EngagementHeatmap():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:EngagementHeatmap(data)
  local EntityMod = require("entity.engagement_heatmap_entity")
  if data == nil then
    if self._engagement_heatmap == nil then
      self._engagement_heatmap = EntityMod.new(self, nil)
    end
    return self._engagement_heatmap
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EngagementHotspot():list() / client:EngagementHotspot():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:EngagementHotspot(data)
  local EntityMod = require("entity.engagement_hotspot_entity")
  if data == nil then
    if self._engagement_hotspot == nil then
      self._engagement_hotspot = EntityMod.new(self, nil)
    end
    return self._engagement_hotspot
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FindBestThumbnail():list() / client:FindBestThumbnail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:FindBestThumbnail(data)
  local EntityMod = require("entity.find_best_thumbnail_entity")
  if data == nil then
    if self._find_best_thumbnail == nil then
      self._find_best_thumbnail = EntityMod.new(self, nil)
    end
    return self._find_best_thumbnail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FindKeyMoment():list() / client:FindKeyMoment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:FindKeyMoment(data)
  local EntityMod = require("entity.find_key_moment_entity")
  if data == nil then
    if self._find_key_moment == nil then
      self._find_key_moment = EntityMod.new(self, nil)
    end
    return self._find_key_moment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FindScene():list() / client:FindScene():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:FindScene(data)
  local EntityMod = require("entity.find_scene_entity")
  if data == nil then
    if self._find_scene == nil then
      self._find_scene = EntityMod.new(self, nil)
    end
    return self._find_scene
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GenerateAssetShot():list() / client:GenerateAssetShot():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:GenerateAssetShot(data)
  local EntityMod = require("entity.generate_asset_shot_entity")
  if data == nil then
    if self._generate_asset_shot == nil then
      self._generate_asset_shot = EntityMod.new(self, nil)
    end
    return self._generate_asset_shot
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GenerateChapter():list() / client:GenerateChapter():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:GenerateChapter(data)
  local EntityMod = require("entity.generate_chapter_entity")
  if data == nil then
    if self._generate_chapter == nil then
      self._generate_chapter = EntityMod.new(self, nil)
    end
    return self._generate_chapter
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GenerateEngagementInsight():list() / client:GenerateEngagementInsight():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:GenerateEngagementInsight(data)
  local EntityMod = require("entity.generate_engagement_insight_entity")
  if data == nil then
    if self._generate_engagement_insight == nil then
      self._generate_engagement_insight = EntityMod.new(self, nil)
    end
    return self._generate_engagement_insight
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GeneratePremiumCaption():list() / client:GeneratePremiumCaption():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:GeneratePremiumCaption(data)
  local EntityMod = require("entity.generate_premium_caption_entity")
  if data == nil then
    if self._generate_premium_caption == nil then
      self._generate_premium_caption = EntityMod.new(self, nil)
    end
    return self._generate_premium_caption
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GenerateTrackSubtitle():list() / client:GenerateTrackSubtitle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:GenerateTrackSubtitle(data)
  local EntityMod = require("entity.generate_track_subtitle_entity")
  if data == nil then
    if self._generate_track_subtitle == nil then
      self._generate_track_subtitle = EntityMod.new(self, nil)
    end
    return self._generate_track_subtitle
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Incident():list() / client:Incident():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:Incident(data)
  local EntityMod = require("entity.incident_entity")
  if data == nil then
    if self._incident == nil then
      self._incident = EntityMod.new(self, nil)
    end
    return self._incident
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InputInfo():list() / client:InputInfo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:InputInfo(data)
  local EntityMod = require("entity.input_info_entity")
  if data == nil then
    if self._input_info == nil then
      self._input_info = EntityMod.new(self, nil)
    end
    return self._input_info
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:JobSummary():list() / client:JobSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:JobSummary(data)
  local EntityMod = require("entity.job_summary_entity")
  if data == nil then
    if self._job_summary == nil then
      self._job_summary = EntityMod.new(self, nil)
    end
    return self._job_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListAllMetricValue():list() / client:ListAllMetricValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListAllMetricValue(data)
  local EntityMod = require("entity.list_all_metric_value_entity")
  if data == nil then
    if self._list_all_metric_value == nil then
      self._list_all_metric_value = EntityMod.new(self, nil)
    end
    return self._list_all_metric_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListAnnotation():list() / client:ListAnnotation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListAnnotation(data)
  local EntityMod = require("entity.list_annotation_entity")
  if data == nil then
    if self._list_annotation == nil then
      self._list_annotation = EntityMod.new(self, nil)
    end
    return self._list_annotation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListAsset():list() / client:ListAsset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListAsset(data)
  local EntityMod = require("entity.list_asset_entity")
  if data == nil then
    if self._list_asset == nil then
      self._list_asset = EntityMod.new(self, nil)
    end
    return self._list_asset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListBreakdownValue():list() / client:ListBreakdownValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListBreakdownValue(data)
  local EntityMod = require("entity.list_breakdown_value_entity")
  if data == nil then
    if self._list_breakdown_value == nil then
      self._list_breakdown_value = EntityMod.new(self, nil)
    end
    return self._list_breakdown_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListDeliveryUsage():list() / client:ListDeliveryUsage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListDeliveryUsage(data)
  local EntityMod = require("entity.list_delivery_usage_entity")
  if data == nil then
    if self._list_delivery_usage == nil then
      self._list_delivery_usage = EntityMod.new(self, nil)
    end
    return self._list_delivery_usage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListDimension():list() / client:ListDimension():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListDimension(data)
  local EntityMod = require("entity.list_dimension_entity")
  if data == nil then
    if self._list_dimension == nil then
      self._list_dimension = EntityMod.new(self, nil)
    end
    return self._list_dimension
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListDimensionValue():list() / client:ListDimensionValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListDimensionValue(data)
  local EntityMod = require("entity.list_dimension_value_entity")
  if data == nil then
    if self._list_dimension_value == nil then
      self._list_dimension_value = EntityMod.new(self, nil)
    end
    return self._list_dimension_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListDrmConfiguration():list() / client:ListDrmConfiguration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListDrmConfiguration(data)
  local EntityMod = require("entity.list_drm_configuration_entity")
  if data == nil then
    if self._list_drm_configuration == nil then
      self._list_drm_configuration = EntityMod.new(self, nil)
    end
    return self._list_drm_configuration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListError():list() / client:ListError():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListError(data)
  local EntityMod = require("entity.list_error_entity")
  if data == nil then
    if self._list_error == nil then
      self._list_error = EntityMod.new(self, nil)
    end
    return self._list_error
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListExport():list() / client:ListExport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListExport(data)
  local EntityMod = require("entity.list_export_entity")
  if data == nil then
    if self._list_export == nil then
      self._list_export = EntityMod.new(self, nil)
    end
    return self._list_export
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListFilter():list() / client:ListFilter():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListFilter(data)
  local EntityMod = require("entity.list_filter_entity")
  if data == nil then
    if self._list_filter == nil then
      self._list_filter = EntityMod.new(self, nil)
    end
    return self._list_filter
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListFilterValue():list() / client:ListFilterValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListFilterValue(data)
  local EntityMod = require("entity.list_filter_value_entity")
  if data == nil then
    if self._list_filter_value == nil then
      self._list_filter_value = EntityMod.new(self, nil)
    end
    return self._list_filter_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListIncident():list() / client:ListIncident():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListIncident(data)
  local EntityMod = require("entity.list_incident_entity")
  if data == nil then
    if self._list_incident == nil then
      self._list_incident = EntityMod.new(self, nil)
    end
    return self._list_incident
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListInsight():list() / client:ListInsight():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListInsight(data)
  local EntityMod = require("entity.list_insight_entity")
  if data == nil then
    if self._list_insight == nil then
      self._list_insight = EntityMod.new(self, nil)
    end
    return self._list_insight
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListJob():list() / client:ListJob():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListJob(data)
  local EntityMod = require("entity.list_job_entity")
  if data == nil then
    if self._list_job == nil then
      self._list_job = EntityMod.new(self, nil)
    end
    return self._list_job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListLiveStream():list() / client:ListLiveStream():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListLiveStream(data)
  local EntityMod = require("entity.list_live_stream_entity")
  if data == nil then
    if self._list_live_stream == nil then
      self._list_live_stream = EntityMod.new(self, nil)
    end
    return self._list_live_stream
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListMonitoringDimension():list() / client:ListMonitoringDimension():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListMonitoringDimension(data)
  local EntityMod = require("entity.list_monitoring_dimension_entity")
  if data == nil then
    if self._list_monitoring_dimension == nil then
      self._list_monitoring_dimension = EntityMod.new(self, nil)
    end
    return self._list_monitoring_dimension
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListMonitoringMetric():list() / client:ListMonitoringMetric():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListMonitoringMetric(data)
  local EntityMod = require("entity.list_monitoring_metric_entity")
  if data == nil then
    if self._list_monitoring_metric == nil then
      self._list_monitoring_metric = EntityMod.new(self, nil)
    end
    return self._list_monitoring_metric
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListPlaybackRestriction():list() / client:ListPlaybackRestriction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListPlaybackRestriction(data)
  local EntityMod = require("entity.list_playback_restriction_entity")
  if data == nil then
    if self._list_playback_restriction == nil then
      self._list_playback_restriction = EntityMod.new(self, nil)
    end
    return self._list_playback_restriction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListRealTimeDimension():list() / client:ListRealTimeDimension():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListRealTimeDimension(data)
  local EntityMod = require("entity.list_real_time_dimension_entity")
  if data == nil then
    if self._list_real_time_dimension == nil then
      self._list_real_time_dimension = EntityMod.new(self, nil)
    end
    return self._list_real_time_dimension
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListRealTimeMetric():list() / client:ListRealTimeMetric():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListRealTimeMetric(data)
  local EntityMod = require("entity.list_real_time_metric_entity")
  if data == nil then
    if self._list_real_time_metric == nil then
      self._list_real_time_metric = EntityMod.new(self, nil)
    end
    return self._list_real_time_metric
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListRelatedIncident():list() / client:ListRelatedIncident():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListRelatedIncident(data)
  local EntityMod = require("entity.list_related_incident_entity")
  if data == nil then
    if self._list_related_incident == nil then
      self._list_related_incident = EntityMod.new(self, nil)
    end
    return self._list_related_incident
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListSigningKey():list() / client:ListSigningKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListSigningKey(data)
  local EntityMod = require("entity.list_signing_key_entity")
  if data == nil then
    if self._list_signing_key == nil then
      self._list_signing_key = EntityMod.new(self, nil)
    end
    return self._list_signing_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListSubviewBreakdownValue():list() / client:ListSubviewBreakdownValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListSubviewBreakdownValue(data)
  local EntityMod = require("entity.list_subview_breakdown_value_entity")
  if data == nil then
    if self._list_subview_breakdown_value == nil then
      self._list_subview_breakdown_value = EntityMod.new(self, nil)
    end
    return self._list_subview_breakdown_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListSubviewComparisonValue():list() / client:ListSubviewComparisonValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListSubviewComparisonValue(data)
  local EntityMod = require("entity.list_subview_comparison_value_entity")
  if data == nil then
    if self._list_subview_comparison_value == nil then
      self._list_subview_comparison_value = EntityMod.new(self, nil)
    end
    return self._list_subview_comparison_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListSubviewDimension():list() / client:ListSubviewDimension():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListSubviewDimension(data)
  local EntityMod = require("entity.list_subview_dimension_entity")
  if data == nil then
    if self._list_subview_dimension == nil then
      self._list_subview_dimension = EntityMod.new(self, nil)
    end
    return self._list_subview_dimension
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListSubviewDimensionValue():list() / client:ListSubviewDimensionValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListSubviewDimensionValue(data)
  local EntityMod = require("entity.list_subview_dimension_value_entity")
  if data == nil then
    if self._list_subview_dimension_value == nil then
      self._list_subview_dimension_value = EntityMod.new(self, nil)
    end
    return self._list_subview_dimension_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListTranscriptionVocabulary():list() / client:ListTranscriptionVocabulary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListTranscriptionVocabulary(data)
  local EntityMod = require("entity.list_transcription_vocabulary_entity")
  if data == nil then
    if self._list_transcription_vocabulary == nil then
      self._list_transcription_vocabulary = EntityMod.new(self, nil)
    end
    return self._list_transcription_vocabulary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListUpload():list() / client:ListUpload():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListUpload(data)
  local EntityMod = require("entity.list_upload_entity")
  if data == nil then
    if self._list_upload == nil then
      self._list_upload = EntityMod.new(self, nil)
    end
    return self._list_upload
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListUsageExport():list() / client:ListUsageExport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListUsageExport(data)
  local EntityMod = require("entity.list_usage_export_entity")
  if data == nil then
    if self._list_usage_export == nil then
      self._list_usage_export = EntityMod.new(self, nil)
    end
    return self._list_usage_export
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListVideoView():list() / client:ListVideoView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListVideoView(data)
  local EntityMod = require("entity.list_video_view_entity")
  if data == nil then
    if self._list_video_view == nil then
      self._list_video_view = EntityMod.new(self, nil)
    end
    return self._list_video_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListVideoViewExport():list() / client:ListVideoViewExport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListVideoViewExport(data)
  local EntityMod = require("entity.list_video_view_export_entity")
  if data == nil then
    if self._list_video_view_export == nil then
      self._list_video_view_export = EntityMod.new(self, nil)
    end
    return self._list_video_view_export
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListWebhook():list() / client:ListWebhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:ListWebhook(data)
  local EntityMod = require("entity.list_webhook_entity")
  if data == nil then
    if self._list_webhook == nil then
      self._list_webhook = EntityMod.new(self, nil)
    end
    return self._list_webhook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LiveStream():list() / client:LiveStream():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:LiveStream(data)
  local EntityMod = require("entity.live_stream_entity")
  if data == nil then
    if self._live_stream == nil then
      self._live_stream = EntityMod.new(self, nil)
    end
    return self._live_stream
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LiveStreamPlaybackId():list() / client:LiveStreamPlaybackId():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:LiveStreamPlaybackId(data)
  local EntityMod = require("entity.live_stream_playback_id_entity")
  if data == nil then
    if self._live_stream_playback_id == nil then
      self._live_stream_playback_id = EntityMod.new(self, nil)
    end
    return self._live_stream_playback_id
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MetricTimeseriesData():list() / client:MetricTimeseriesData():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:MetricTimeseriesData(data)
  local EntityMod = require("entity.metric_timeseries_data_entity")
  if data == nil then
    if self._metric_timeseries_data == nil then
      self._metric_timeseries_data = EntityMod.new(self, nil)
    end
    return self._metric_timeseries_data
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Moderate():list() / client:Moderate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:Moderate(data)
  local EntityMod = require("entity.moderate_entity")
  if data == nil then
    if self._moderate == nil then
      self._moderate = EntityMod.new(self, nil)
    end
    return self._moderate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MonitoringBreakdown():list() / client:MonitoringBreakdown():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:MonitoringBreakdown(data)
  local EntityMod = require("entity.monitoring_breakdown_entity")
  if data == nil then
    if self._monitoring_breakdown == nil then
      self._monitoring_breakdown = EntityMod.new(self, nil)
    end
    return self._monitoring_breakdown
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MonitoringBreakdownTimeseries():list() / client:MonitoringBreakdownTimeseries():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:MonitoringBreakdownTimeseries(data)
  local EntityMod = require("entity.monitoring_breakdown_timeseries_entity")
  if data == nil then
    if self._monitoring_breakdown_timeseries == nil then
      self._monitoring_breakdown_timeseries = EntityMod.new(self, nil)
    end
    return self._monitoring_breakdown_timeseries
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MonitoringHistogramTimeseries():list() / client:MonitoringHistogramTimeseries():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:MonitoringHistogramTimeseries(data)
  local EntityMod = require("entity.monitoring_histogram_timeseries_entity")
  if data == nil then
    if self._monitoring_histogram_timeseries == nil then
      self._monitoring_histogram_timeseries = EntityMod.new(self, nil)
    end
    return self._monitoring_histogram_timeseries
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MonitoringTimeseries():list() / client:MonitoringTimeseries():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:MonitoringTimeseries(data)
  local EntityMod = require("entity.monitoring_timeseries_entity")
  if data == nil then
    if self._monitoring_timeseries == nil then
      self._monitoring_timeseries = EntityMod.new(self, nil)
    end
    return self._monitoring_timeseries
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Overall():list() / client:Overall():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:Overall(data)
  local EntityMod = require("entity.overall_entity")
  if data == nil then
    if self._overall == nil then
      self._overall = EntityMod.new(self, nil)
    end
    return self._overall
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PlaybackRestriction():list() / client:PlaybackRestriction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:PlaybackRestriction(data)
  local EntityMod = require("entity.playback_restriction_entity")
  if data == nil then
    if self._playback_restriction == nil then
      self._playback_restriction = EntityMod.new(self, nil)
    end
    return self._playback_restriction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RealTimeBreakdown():list() / client:RealTimeBreakdown():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:RealTimeBreakdown(data)
  local EntityMod = require("entity.real_time_breakdown_entity")
  if data == nil then
    if self._real_time_breakdown == nil then
      self._real_time_breakdown = EntityMod.new(self, nil)
    end
    return self._real_time_breakdown
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RealTimeHistogramTimeseries():list() / client:RealTimeHistogramTimeseries():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:RealTimeHistogramTimeseries(data)
  local EntityMod = require("entity.real_time_histogram_timeseries_entity")
  if data == nil then
    if self._real_time_histogram_timeseries == nil then
      self._real_time_histogram_timeseries = EntityMod.new(self, nil)
    end
    return self._real_time_histogram_timeseries
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RealTimeTimeseries():list() / client:RealTimeTimeseries():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:RealTimeTimeseries(data)
  local EntityMod = require("entity.real_time_timeseries_entity")
  if data == nil then
    if self._real_time_timeseries == nil then
      self._real_time_timeseries = EntityMod.new(self, nil)
    end
    return self._real_time_timeseries
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SignalLiveStreamComplete():list() / client:SignalLiveStreamComplete():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:SignalLiveStreamComplete(data)
  local EntityMod = require("entity.signal_live_stream_complete_entity")
  if data == nil then
    if self._signal_live_stream_complete == nil then
      self._signal_live_stream_complete = EntityMod.new(self, nil)
    end
    return self._signal_live_stream_complete
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SigningKey():list() / client:SigningKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:SigningKey(data)
  local EntityMod = require("entity.signing_key_entity")
  if data == nil then
    if self._signing_key == nil then
      self._signing_key = EntityMod.new(self, nil)
    end
    return self._signing_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SimulcastTarget():list() / client:SimulcastTarget():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:SimulcastTarget(data)
  local EntityMod = require("entity.simulcast_target_entity")
  if data == nil then
    if self._simulcast_target == nil then
      self._simulcast_target = EntityMod.new(self, nil)
    end
    return self._simulcast_target
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StaticRendition():list() / client:StaticRendition():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:StaticRendition(data)
  local EntityMod = require("entity.static_rendition_entity")
  if data == nil then
    if self._static_rendition == nil then
      self._static_rendition = EntityMod.new(self, nil)
    end
    return self._static_rendition
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubviewBreakdownTimeseries():list() / client:SubviewBreakdownTimeseries():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:SubviewBreakdownTimeseries(data)
  local EntityMod = require("entity.subview_breakdown_timeseries_entity")
  if data == nil then
    if self._subview_breakdown_timeseries == nil then
      self._subview_breakdown_timeseries = EntityMod.new(self, nil)
    end
    return self._subview_breakdown_timeseries
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubviewOverallValue():list() / client:SubviewOverallValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:SubviewOverallValue(data)
  local EntityMod = require("entity.subview_overall_value_entity")
  if data == nil then
    if self._subview_overall_value == nil then
      self._subview_overall_value = EntityMod.new(self, nil)
    end
    return self._subview_overall_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Summarize():list() / client:Summarize():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:Summarize(data)
  local EntityMod = require("entity.summarize_entity")
  if data == nil then
    if self._summarize == nil then
      self._summarize = EntityMod.new(self, nil)
    end
    return self._summarize
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TranscriptionVocabulary():list() / client:TranscriptionVocabulary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:TranscriptionVocabulary(data)
  local EntityMod = require("entity.transcription_vocabulary_entity")
  if data == nil then
    if self._transcription_vocabulary == nil then
      self._transcription_vocabulary = EntityMod.new(self, nil)
    end
    return self._transcription_vocabulary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TranslateAudio():list() / client:TranslateAudio():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:TranslateAudio(data)
  local EntityMod = require("entity.translate_audio_entity")
  if data == nil then
    if self._translate_audio == nil then
      self._translate_audio = EntityMod.new(self, nil)
    end
    return self._translate_audio
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TranslateCaption():list() / client:TranslateCaption():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:TranslateCaption(data)
  local EntityMod = require("entity.translate_caption_entity")
  if data == nil then
    if self._translate_caption == nil then
      self._translate_caption = EntityMod.new(self, nil)
    end
    return self._translate_caption
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UpdateAssetTrack():list() / client:UpdateAssetTrack():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:UpdateAssetTrack(data)
  local EntityMod = require("entity.update_asset_track_entity")
  if data == nil then
    if self._update_asset_track == nil then
      self._update_asset_track = EntityMod.new(self, nil)
    end
    return self._update_asset_track
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Upload():list() / client:Upload():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:Upload(data)
  local EntityMod = require("entity.upload_entity")
  if data == nil then
    if self._upload == nil then
      self._upload = EntityMod.new(self, nil)
    end
    return self._upload
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UrlSigningKey():list() / client:UrlSigningKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:UrlSigningKey(data)
  local EntityMod = require("entity.url_signing_key_entity")
  if data == nil then
    if self._url_signing_key == nil then
      self._url_signing_key = EntityMod.new(self, nil)
    end
    return self._url_signing_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VideoView():list() / client:VideoView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:VideoView(data)
  local EntityMod = require("entity.video_view_entity")
  if data == nil then
    if self._video_view == nil then
      self._video_view = EntityMod.new(self, nil)
    end
    return self._video_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Webhook():list() / client:Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:Webhook(data)
  local EntityMod = require("entity.webhook_entity")
  if data == nil then
    if self._webhook == nil then
      self._webhook = EntityMod.new(self, nil)
    end
    return self._webhook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WhoAmI():list() / client:WhoAmI():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MuxSDK:WhoAmI(data)
  local EntityMod = require("entity.who_am_i_entity")
  if data == nil then
    if self._who_am_i == nil then
      self._who_am_i = EntityMod.new(self, nil)
    end
    return self._who_am_i
  end
  return EntityMod.new(self, data)
end




function MuxSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = MuxSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return MuxSDK
