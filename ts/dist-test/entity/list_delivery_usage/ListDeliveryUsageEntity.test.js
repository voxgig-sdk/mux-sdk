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
(0, node_test_1.describe)('ListDeliveryUsageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.ListDeliveryUsage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_delivery_usage.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "asset_duration": { "a": true, "fo": "double", "h": "Asset Duration", "n": "asset_duration", "r": true, "sh": "The duration of the asset in seconds.", "t": "`$NUMBER`", "key$": "asset_duration", "index$": 0 }, "asset_encoding_tier": { "a": true, "de": true, "h": "Asset Encoding Tier", "n": "asset_encoding_tier", "r": true, "sh": "This field is deprecated.", "t": "`$STRING`", "key$": "asset_encoding_tier", "index$": 1 }, "asset_id": { "a": true, "h": "Asset Id", "n": "asset_id", "r": true, "sh": "Unique identifier for the asset.", "t": "`$STRING`", "key$": "asset_id", "index$": 2 }, "asset_resolution_tier": { "a": true, "h": "Asset Resolution Tier", "n": "asset_resolution_tier", "r": true, "sh": "The resolution tier that the asset was ingested at, affecting billing for ingest & storage", "t": "`$STRING`", "key$": "asset_resolution_tier", "index$": 3 }, "asset_state": { "a": true, "h": "Asset State", "n": "asset_state", "r": true, "sh": "The state of the asset.", "t": "`$STRING`", "key$": "asset_state", "index$": 4 }, "asset_video_quality": { "a": true, "h": "Asset Video Quality", "n": "asset_video_quality", "r": false, "sh": "The video quality that the asset was ingested at.", "t": "`$STRING`", "key$": "asset_video_quality", "index$": 5 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "sh": "Time at which the asset was created.", "t": "`$STRING`", "key$": "created_at", "index$": 6 }, "deleted_at": { "a": true, "h": "Deleted At", "n": "deleted_at", "r": false, "sh": "If exists, time at which the asset was deleted.", "t": "`$STRING`", "key$": "deleted_at", "index$": 7 }, "delivered_seconds": { "a": true, "fo": "double", "h": "Delivered Seconds", "n": "delivered_seconds", "r": true, "sh": "Total number of delivered seconds during this time window.", "t": "`$NUMBER`", "key$": "delivered_seconds", "index$": 8 }, "delivered_seconds_by_resolution": { "a": true, "h": "Delivered Seconds By Resolution", "n": "delivered_seconds_by_resolution", "r": true, "sh": "Seconds delivered broken into resolution tiers.", "t": "`$OBJECT`", "key$": "delivered_seconds_by_resolution", "index$": 9 }, "live_stream_id": { "a": true, "h": "Live Stream Id", "n": "live_stream_id", "r": false, "sh": "Unique identifier for the live stream that created the asset.", "t": "`$STRING`", "key$": "live_stream_id", "index$": 10 }, "passthrough": { "a": true, "h": "Passthrough", "n": "passthrough", "r": false, "sh": "The `passthrough` value for the asset.", "t": "`$STRING`", "key$": "passthrough", "index$": 11 } }, "name": "list_delivery_usage", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /video/v1/delivery-usage", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "asset_id", "or": "asset_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 100, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "live_stream_id", "or": "live_stream_id", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "timeframe", "or": "timeframe", "r": false, "t": "`$ARRAY`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/video/v1/delivery-usage", "q": { "exist": ["asset_id", "limit", "live_stream_id", "page", "timeframe"] }, "r": {}, "s": [{ "lit": "video" }, { "lit": "v1" }, { "lit": "delivery-usage" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "list_delivery_usage", "name__orig": "list_delivery_usage", "Name": "ListDeliveryUsage", "name_": "list_delivery_usage", "name-": "list-delivery-usage", "NAME": "LIST_DELIVERY_USAGE", "index$": 30 }, { "active": true, "entity": "list_delivery_usage", "key$": "BasicListDeliveryUsageFlow", "kind": "basic", "name": "BasicListDeliveryUsageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_delivery_usage_ref01" } }], "index$": 0 }] }, 'ListDeliveryUsage', { "GET /video/v1/delivery-usage": { "protocol": "http", "parameters": [{ "name": "page", "in": "query", "description": "Offset by this many pages, of the size of `limit`", "required": false, "schema": { "type": "integer", "format": "int32", "default": 1 }, "x-ref": "#/components/parameters/page", "index$": 0 }, { "name": "limit", "in": "query", "description": "Number of items to include in the response", "required": false, "schema": { "type": "integer", "format": "int32", "default": 100 }, "x-ref": "#/components/parameters/delivery_usage_limit", "index$": 1 }, { "name": "asset_id", "in": "query", "description": "Filter response to return delivery usage for this asset only. You cannot specify both the `asset_id` and `live_stream_id` parameters together.", "required": false, "schema": { "type": "string" }, "x-ref": "#/components/parameters/delivery_usage_asset_id", "index$": 2 }, { "name": "live_stream_id", "in": "query", "description": "Filter response to return delivery usage for assets for this live stream. You cannot specify both the `asset_id` and `live_stream_id` parameters together.", "required": false, "schema": { "type": "string" }, "x-ref": "#/components/parameters/delivery_usage_live_stream_id", "index$": 3 }, { "name": "timeframe[]", "in": "query", "description": "Time window to get delivery usage information. timeframe[0] indicates the start time, timeframe[1] indicates the end time in seconds since the Unix epoch. Default time window is 1 hour representing usage from 13th to 12th hour from when the request is made.", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/delivery_usage_timeframe", "index$": 4 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_delivery_usage_ref01_data = Object.values(setup.data.existing.list_delivery_usage)[0];
        // LIST
        const list_delivery_usage_ref01_ent = client.ListDeliveryUsage();
        const list_delivery_usage_ref01_match = {};
        const list_delivery_usage_ref01_list = (await list_delivery_usage_ref01_ent.list(list_delivery_usage_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_delivery_usage/ListDeliveryUsageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_delivery_usage01', 'list_delivery_usage02', 'list_delivery_usage03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_LIST_DELIVERY_USAGE_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_LIST_DELIVERY_USAGE_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_LIST_DELIVERY_USAGE_ENTID'];
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
//# sourceMappingURL=ListDeliveryUsageEntity.test.js.map