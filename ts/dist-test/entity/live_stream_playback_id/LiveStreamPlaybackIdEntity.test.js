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
(0, node_test_1.describe)('LiveStreamPlaybackIdEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.LiveStreamPlaybackId();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'live_stream_playback_id.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "drm_configuration_id": { "a": true, "h": "Drm Configuration Id", "n": "drm_configuration_id", "r": false, "sh": "The DRM configuration used by this playback ID.", "t": "`$STRING`", "key$": "drm_configuration_id", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the PlaybackID", "t": "`$STRING`", "key$": "id", "index$": 1 }, "policy": { "a": true, "h": "Policy", "n": "policy", "r": true, "sh": "* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`.", "t": "`$STRING`", "key$": "policy", "index$": 2 } }, "id": { "field": "id", "name": "id" }, "name": "live_stream_playback_id", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "PLAYBACK_ID", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "live_stream_id", "or": "LIVE_STREAM_ID", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}", "q": { "exist": ["id", "live_stream_id"] }, "r": { "param": { "LIVE_STREAM_ID": "live_stream_id", "PLAYBACK_ID": "id" } }, "s": [{ "lit": "video" }, { "lit": "v1" }, { "lit": "live-streams" }, { "var": "live_stream_id" }, { "lit": "playback-ids" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.live_stream"]] }, "key$": "live_stream_playback_id", "name__orig": "live_stream_playback_id", "Name": "LiveStreamPlaybackId", "name_": "live_stream_playback_id", "name-": "live-stream-playback-id", "NAME": "LIVE_STREAM_PLAYBACK_ID", "index$": 44 }, { "active": true, "entity": "live_stream_playback_id", "key$": "BasicLiveStreamPlaybackIdFlow", "kind": "basic", "name": "BasicLiveStreamPlaybackIdFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "live_stream_playback_id_ref01", "srcdatavar": "live_stream_playback_id_ref01_data", "suffix": "_dt0" }, "m": { "id": "live_stream_playback_id01", "live_stream_id": "live_stream01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-live_stream_playback_id_ref01" } }], "index$": 0 }] }, 'LiveStreamPlaybackId', { "GET /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids/{PLAYBACK_ID}": { "protocol": "http", "parameters": [{ "name": "LIVE_STREAM_ID", "in": "path", "description": "The live stream ID", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/livestream_id", "index$": 0 }, { "name": "PLAYBACK_ID", "in": "path", "description": "The asset or live stream's playback ID.", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/playback_id", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let live_stream_playback_id_ref01_data = Object.values(setup.data.existing.live_stream_playback_id)[0];
        // LOAD
        const live_stream_playback_id_ref01_ent = client.LiveStreamPlaybackId();
        const live_stream_playback_id_ref01_match_dt0 = {};
        live_stream_playback_id_ref01_match_dt0.id = live_stream_playback_id_ref01_data.id;
        const live_stream_playback_id_ref01_data_dt0 = (await live_stream_playback_id_ref01_ent.load(live_stream_playback_id_ref01_match_dt0)).data();
        (0, node_assert_1.default)(live_stream_playback_id_ref01_data_dt0.id === live_stream_playback_id_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/live_stream_playback_id/LiveStreamPlaybackIdTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['live_stream_playback_id01', 'live_stream_playback_id02', 'live_stream_playback_id03', 'live_stream01', 'live_stream02', 'live_stream03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_LIVE_STREAM_PLAYBACK_ID_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_LIVE_STREAM_PLAYBACK_ID_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_LIVE_STREAM_PLAYBACK_ID_ENTID'];
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
//# sourceMappingURL=LiveStreamPlaybackIdEntity.test.js.map