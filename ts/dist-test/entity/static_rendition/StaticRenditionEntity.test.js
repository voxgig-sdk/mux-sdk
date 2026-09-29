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
(0, node_test_1.describe)('StaticRenditionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.StaticRendition();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'static_rendition.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "passthrough": { "a": true, "h": "Passthrough", "n": "passthrough", "r": false, "sh": "Arbitrary user-supplied metadata set for the static rendition.", "t": "`$STRING`", "key$": "passthrough", "index$": 0 }, "resolution": { "a": true, "h": "Resolution", "n": "resolution", "r": true, "t": "`$STRING`", "key$": "resolution", "index$": 1 } }, "name": "static_rendition", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /video/v1/assets/{ASSET_ID}/static-renditions", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "asset_id", "or": "ASSET_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/video/v1/assets/{ASSET_ID}/static-renditions", "q": { "exist": ["asset_id"] }, "r": { "param": { "ASSET_ID": "asset_id" } }, "s": [{ "lit": "video" }, { "lit": "v1" }, { "lit": "assets" }, { "var": "asset_id" }, { "lit": "static-renditions" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.asset"]] }, "key$": "static_rendition", "name__orig": "static_rendition", "Name": "StaticRendition", "name_": "static_rendition", "name-": "static-rendition", "NAME": "STATIC_RENDITION", "index$": 59 }, { "active": true, "entity": "static_rendition", "key$": "BasicStaticRenditionFlow", "kind": "basic", "name": "BasicStaticRenditionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "static_rendition_ref01" }, "m": { "asset_id": "asset01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'StaticRendition', { "POST /video/v1/assets/{ASSET_ID}/static-renditions": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["resolution"], "properties": { "resolution": { "enum": ["highest", "audio-only", "2160p", "1440p", "1080p", "720p", "540p", "480p", "360p", "270p"], "type": "string", "key$": "resolution" }, "passthrough": { "description": "Arbitrary user-supplied metadata set for the static rendition. Max 255 characters.", "type": "string", "key$": "passthrough" } }, "x-ref": "#/components/schemas/CreateStaticRenditionRequest", "index$": 1 }, "example": { "resolution": "highest" } } } }, "parameters": [{ "name": "ASSET_ID", "in": "path", "description": "The asset ID.", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/asset_id", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const static_rendition_ref01_ent = client.StaticRendition();
        let static_rendition_ref01_data = setup.data.new.static_rendition['static_rendition_ref01'];
        static_rendition_ref01_data['asset_id'] = setup.idmap['asset01'];
        static_rendition_ref01_data = (await static_rendition_ref01_ent.create(static_rendition_ref01_data)).data();
        (0, node_assert_1.default)(null != static_rendition_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/static_rendition/StaticRenditionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['static_rendition01', 'static_rendition02', 'static_rendition03', 'asset01', 'asset02', 'asset03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_STATIC_RENDITION_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_STATIC_RENDITION_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_STATIC_RENDITION_ENTID'];
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
//# sourceMappingURL=StaticRenditionEntity.test.js.map