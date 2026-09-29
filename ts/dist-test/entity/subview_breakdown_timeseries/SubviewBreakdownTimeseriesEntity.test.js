"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SubviewBreakdownTimeseriesEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.SubviewBreakdownTimeseries();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'subview_breakdown_timeseries.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "date": { "a": true, "fo": "date-time", "h": "Date", "n": "date", "r": true, "t": "`$STRING`", "key$": "date", "index$": 0 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 1 }, "values": { "a": true, "h": "Values", "n": "values", "r": true, "t": "`$ARRAY`", "key$": "values", "index$": 2 } }, "name": "subview_breakdown_timeseries", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown-timeseries", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "playing_time", "k": "param", "n": "subview_metric_id", "or": "METRIC_ID", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "rendition", "k": "param", "n": "subview_type", "or": "SUBVIEW_TYPE", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": 10, "k": "query", "n": "breakdown_value_limit", "or": "breakdown_value_limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "filter", "or": "filters[]", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "group_by", "or": "group_by[]", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "ex": "hour", "k": "query", "n": "time_granularity", "or": "time_granularity", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "timeframe", "or": "timeframe[]", "r": false, "t": "`$ARRAY`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown-timeseries", "q": { "exist": ["breakdown_value_limit", "filter", "group_by", "subview_metric_id", "subview_type", "time_granularity", "timeframe"] }, "r": { "param": { "METRIC_ID": "subview_metric_id", "SUBVIEW_TYPE": "subview_type" } }, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "subview-metrics" }, { "var": "subview_metric_id" }, { "var": "subview_type" }, { "lit": "breakdown-timeseries" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "subview_breakdown_timeseries", "name__orig": "subview_breakdown_timeseries", "Name": "SubviewBreakdownTimeseries", "name_": "subview_breakdown_timeseries", "name-": "subview-breakdown-timeseries", "NAME": "SUBVIEW_BREAKDOWN_TIMESERIES", "index$": 60 }, { "active": true, "entity": "subview_breakdown_timeseries", "key$": "BasicSubviewBreakdownTimeseriesFlow", "kind": "basic", "name": "BasicSubviewBreakdownTimeseriesFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "subview_metric_id": "subview_metric01", "subview_type": "subview_type01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "subview_breakdown_timeseries_ref01" } }], "index$": 0 }] }, 'SubviewBreakdownTimeseries', { "GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown-timeseries": { "protocol": "http", "parameters": [{ "name": "METRIC_ID", "in": "path", "description": "ID of the metric to compute over subviews. Additional metrics may be added over time.", "required": true, "example": "playing_time", "schema": { "type": "string", "enum": ["playing_time"] }, "x-ref": "#/components/parameters/subview_metric_id", "index$": 0 }, { "name": "SUBVIEW_TYPE", "in": "path", "description": "The subview type to query.", "required": true, "example": "rendition", "schema": { "type": "string", "enum": ["rendition", "playback_mode"] }, "x-ref": "#/components/parameters/subview_type", "index$": 1 }, { "name": "timeframe[]", "in": "query", "description": "Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/timeframe", "index$": 2 }, { "name": "filters[]", "in": "query", "description": "Filter results using key:value pairs. Must be provided as an array query string parameter.\n\nThe set of filterable dimensions is distinct from the main Data API's dimensions, and depends on the subview type — see the List Subview Dimensions endpoint for the valid names.\n\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n* `filters[]=dimension:__empty__` - Include rows where the dimension has no value\n\nExample: `filters[]=country:US`\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/subview_filters", "index$": 3 }, { "name": "group_by[]", "in": "query", "description": "Subview attributes to group the results by. Must be provided as an array query string parameter. Currently only supported for the `rendition` subview type, as any combination of the 6 enum values below.\n\nIf omitted, defaults to grouping by every attribute available for the subview type.\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string", "enum": ["video_source_bitrate", "video_source_width", "video_source_height", "video_source_fps", "video_source_codec", "video_source_rendition_name"] } }, "x-ref": "#/components/parameters/subview_group_by", "index$": 4 }, { "name": "time_granularity", "in": "query", "description": "Time bucket size for the timeseries.", "required": false, "schema": { "type": "string", "default": "hour", "enum": ["hour", "day"] }, "x-ref": "#/components/parameters/subview_time_granularity", "index$": 5 }, { "name": "breakdown_value_limit", "in": "query", "description": "Number of breakdown rows to include per selected dimension value.", "required": false, "schema": { "type": "integer", "format": "int32", "default": 10, "maximum": 100 }, "x-ref": "#/components/parameters/subview_breakdown_value_limit", "index$": 6 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let subview_breakdown_timeseries_ref01_data = Object.values(setup.data.existing.subview_breakdown_timeseries)[0];
        // LIST
        const subview_breakdown_timeseries_ref01_ent = client.SubviewBreakdownTimeseries();
        const subview_breakdown_timeseries_ref01_match = {};
        subview_breakdown_timeseries_ref01_match['subview_metric_id'] = setup.idmap['subview_metric01'];
        subview_breakdown_timeseries_ref01_match['subview_type'] = setup.idmap['subview_type01'];
        const subview_breakdown_timeseries_ref01_list = (await subview_breakdown_timeseries_ref01_ent.list(subview_breakdown_timeseries_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/subview_breakdown_timeseries/SubviewBreakdownTimeseriesTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['subview_breakdown_timeseries01', 'subview_breakdown_timeseries02', 'subview_breakdown_timeseries03', 'subview_metric01', 'subview_type01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_SUBVIEW_BREAKDOWN_TIMESERIES_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_SUBVIEW_BREAKDOWN_TIMESERIES_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_SUBVIEW_BREAKDOWN_TIMESERIES_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.MuxSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.MUX_APIKEY,
                secret: env.MUX_SECRET,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.MUX_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SubviewBreakdownTimeseriesEntity.test.js.map