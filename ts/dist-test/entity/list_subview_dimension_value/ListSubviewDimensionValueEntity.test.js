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
(0, node_test_1.describe)('ListSubviewDimensionValueEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.ListSubviewDimensionValue();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_subview_dimension_value.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": true, "t": "`$ARRAY`", "key$": "data", "index$": 0 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": true, "t": "`$ANY`", "key$": "meta", "index$": 1 }, "timeframe": { "a": true, "h": "Timeframe", "n": "timeframe", "r": true, "t": "`$ARRAY`", "key$": "timeframe", "index$": 2 }, "total_row_count": { "a": true, "fo": "int64", "h": "Total Row Count", "n": "total_row_count", "r": true, "t": "`$INTEGER`", "key$": "total_row_count", "index$": 3 } }, "name": "list_subview_dimension_value", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions/{DIMENSION_NAME}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "country", "k": "param", "n": "dimension_name", "or": "DIMENSION_NAME", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "rendition", "k": "param", "n": "subview_metric_id", "or": "SUBVIEW_TYPE", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "filter", "or": "filters[]", "r": false, "t": "`$ARRAY`", "index$": 0 }, { "a": true, "ex": 25, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": "playing_time", "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "order_direction", "or": "order_direction", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "query", "or": "query", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "timeframe", "or": "timeframe[]", "r": false, "t": "`$ARRAY`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions/{DIMENSION_NAME}", "q": { "exist": ["dimension_name", "filter", "limit", "order_by", "order_direction", "page", "query", "subview_metric_id", "timeframe"] }, "r": { "param": { "DIMENSION_NAME": "dimension_name", "SUBVIEW_TYPE": "subview_metric_id" } }, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "subview-metrics" }, { "var": "subview_metric_id" }, { "lit": "dimensions" }, { "var": "dimension_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "list_subview_dimension_value", "name__orig": "list_subview_dimension_value", "Name": "ListSubviewDimensionValue", "name_": "list_subview_dimension_value", "name-": "list-subview-dimension-value", "NAME": "LIST_SUBVIEW_DIMENSION_VALUE", "index$": 41 }, { "active": true, "entity": "list_subview_dimension_value", "key$": "BasicListSubviewDimensionValueFlow", "kind": "basic", "name": "BasicListSubviewDimensionValueFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "list_subview_dimension_value_ref01", "srcdatavar": "list_subview_dimension_value_ref01_data", "suffix": "_dt0" }, "m": { "id": "list_subview_dimension_value01", "subview_metric_id": "subview_metric01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-list_subview_dimension_value_ref01" } }], "index$": 0 }] }, 'ListSubviewDimensionValue', { "GET /data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions/{DIMENSION_NAME}": { "protocol": "http", "parameters": [{ "name": "SUBVIEW_TYPE", "in": "path", "description": "The subview type to query.", "required": true, "example": "rendition", "schema": { "type": "string", "enum": ["rendition", "playback_mode"] }, "x-ref": "#/components/parameters/subview_type", "index$": 0 }, { "name": "DIMENSION_NAME", "in": "path", "description": "Name of the dimension. See the List Subview Dimensions endpoint for the valid values for a given subview type.", "required": true, "example": "country", "schema": { "type": "string" }, "x-ref": "#/components/parameters/subview_dimension_name", "index$": 1 }, { "name": "timeframe[]", "in": "query", "description": "Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/timeframe", "index$": 2 }, { "name": "filters[]", "in": "query", "description": "Filter results using key:value pairs. Must be provided as an array query string parameter.\n\nThe set of filterable dimensions is distinct from the main Data API's dimensions, and depends on the subview type — see the List Subview Dimensions endpoint for the valid names.\n\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n* `filters[]=dimension:__empty__` - Include rows where the dimension has no value\n\nExample: `filters[]=country:US`\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/subview_filters", "index$": 3 }, { "name": "limit", "in": "query", "description": "Number of items to include in the response.", "required": false, "schema": { "type": "integer", "format": "int32", "default": 25, "maximum": 250 }, "x-ref": "#/components/parameters/subview_dimension_values_limit", "index$": 4 }, { "name": "page", "in": "query", "description": "Offset by this many pages, of the size of `limit`", "required": false, "schema": { "type": "integer", "format": "int32", "default": 1 }, "x-ref": "#/components/parameters/page", "index$": 5 }, { "name": "order_by", "in": "query", "description": "Value to order the results by.", "required": false, "schema": { "type": "string", "default": "playing_time", "enum": ["playing_time", "value"] }, "x-ref": "#/components/parameters/subview_dimension_values_order_by", "index$": 6 }, { "name": "order_direction", "in": "query", "description": "Sort order.", "required": false, "schema": { "type": "string", "enum": ["asc", "desc"] }, "x-ref": "#/components/parameters/order_direction", "index$": 7 }, { "name": "query", "in": "query", "description": "Only return dimension values containing this substring.", "required": false, "schema": { "type": "string" }, "x-ref": "#/components/parameters/subview_query", "index$": 8 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_subview_dimension_value_ref01_data = Object.values(setup.data.existing.list_subview_dimension_value)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const list_subview_dimension_value_ref01_ent = client.ListSubviewDimensionValue();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_subview_dimension_value/ListSubviewDimensionValueTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_subview_dimension_value01', 'list_subview_dimension_value02', 'list_subview_dimension_value03', 'subview_metric01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_LIST_SUBVIEW_DIMENSION_VALUE_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_LIST_SUBVIEW_DIMENSION_VALUE_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_LIST_SUBVIEW_DIMENSION_VALUE_ENTID'];
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
//# sourceMappingURL=ListSubviewDimensionValueEntity.test.js.map