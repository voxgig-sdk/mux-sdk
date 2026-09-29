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
(0, node_test_1.describe)('EngagementHeatmapEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.EngagementHeatmap();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'engagement_heatmap.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": true, "t": "`$OBJECT`", "key$": "data", "index$": 0 }, "timeframe": { "a": true, "h": "Timeframe", "n": "timeframe", "r": true, "t": "`$ARRAY`", "key$": "timeframe", "index$": 1 }, "total_row_count": { "a": true, "fo": "int64", "h": "Total Row Count", "n": "total_row_count", "r": true, "t": "`$INTEGER`", "key$": "total_row_count", "index$": 2 } }, "name": "engagement_heatmap", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /data/v1/engagement/assets/{ASSET_ID}/heatmap", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy", "k": "param", "n": "asset_id", "or": "ASSET_ID", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "timeframe", "or": "timeframe[]", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/data/v1/engagement/assets/{ASSET_ID}/heatmap", "q": { "exist": ["asset_id", "timeframe"] }, "r": { "param": { "ASSET_ID": "asset_id" } }, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "engagement" }, { "lit": "assets" }, { "var": "asset_id" }, { "lit": "heatmap" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /data/v1/engagement/playback-ids/{PLAYBACK_ID}/heatmap", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "nLp01dgPzELHV6101iHGXmS3Og7lEU01TUDb02kg2Z6mPRs", "k": "param", "n": "playback_id_id", "or": "PLAYBACK_ID", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "timeframe", "or": "timeframe[]", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/data/v1/engagement/playback-ids/{PLAYBACK_ID}/heatmap", "q": { "exist": ["playback_id_id", "timeframe"] }, "r": { "param": { "PLAYBACK_ID": "playback_id_id" } }, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "engagement" }, { "lit": "playback-ids" }, { "var": "playback_id_id" }, { "lit": "heatmap" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /data/v1/engagement/videos/{VIDEO_ID}/heatmap", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcd1234", "k": "param", "n": "video_id", "or": "VIDEO_ID", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "timeframe", "or": "timeframe[]", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/data/v1/engagement/videos/{VIDEO_ID}/heatmap", "q": { "exist": ["timeframe", "video_id"] }, "r": { "param": { "VIDEO_ID": "video_id" } }, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "engagement" }, { "lit": "videos" }, { "var": "video_id" }, { "lit": "heatmap" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.asset"]] }, "key$": "engagement_heatmap", "name__orig": "engagement_heatmap", "Name": "EngagementHeatmap", "name_": "engagement_heatmap", "name-": "engagement-heatmap", "NAME": "ENGAGEMENT_HEATMAP", "index$": 12 }, { "active": true, "entity": "engagement_heatmap", "key$": "BasicEngagementHeatmapFlow", "kind": "basic", "name": "BasicEngagementHeatmapFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "video_id": "video01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "engagement_heatmap_ref01" } }], "index$": 0 }] }, 'EngagementHeatmap', { "GET /data/v1/engagement/assets/{ASSET_ID}/heatmap": { "protocol": "http", "parameters": [{ "name": "ASSET_ID", "in": "path", "description": "ID of the Asset", "required": true, "example": "rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy", "schema": { "type": "string" }, "x-ref": "#/components/parameters/engagement_asset_id", "index$": 0 }, { "name": "timeframe[]", "in": "query", "description": "Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/timeframe", "index$": 1 }] }, "GET /data/v1/engagement/playback-ids/{PLAYBACK_ID}/heatmap": { "protocol": "http", "parameters": [{ "name": "PLAYBACK_ID", "in": "path", "description": "A Playback ID for the asset.", "required": true, "example": "nLp01dgPzELHV6101iHGXmS3Og7lEU01TUDb02kg2Z6mPRs", "schema": { "type": "string" }, "x-ref": "#/components/parameters/engagement_playback_id", "index$": 0 }, { "name": "timeframe[]", "in": "query", "description": "Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/timeframe", "index$": 1 }] }, "GET /data/v1/engagement/videos/{VIDEO_ID}/heatmap": { "protocol": "http", "parameters": [{ "name": "VIDEO_ID", "in": "path", "description": "ID of the Video, as provided in the `video_id` metadata field when configuring the player.", "required": true, "example": "abcd1234", "schema": { "type": "string" }, "x-ref": "#/components/parameters/engagement_video_id", "index$": 0 }, { "name": "timeframe[]", "in": "query", "description": "Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/timeframe", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let engagement_heatmap_ref01_data = Object.values(setup.data.existing.engagement_heatmap)[0];
        // LIST
        const engagement_heatmap_ref01_ent = client.EngagementHeatmap();
        const engagement_heatmap_ref01_match = {};
        engagement_heatmap_ref01_match['video_id'] = setup.idmap['video01'];
        const engagement_heatmap_ref01_list = (await engagement_heatmap_ref01_ent.list(engagement_heatmap_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/engagement_heatmap/EngagementHeatmapTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['engagement_heatmap01', 'engagement_heatmap02', 'engagement_heatmap03', 'asset01', 'asset02', 'asset03', 'video01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_ENGAGEMENT_HEATMAP_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_ENGAGEMENT_HEATMAP_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_ENGAGEMENT_HEATMAP_ENTID'];
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
//# sourceMappingURL=EngagementHeatmapEntity.test.js.map