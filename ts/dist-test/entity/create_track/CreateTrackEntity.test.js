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
(0, node_test_1.describe)('CreateTrackEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.CreateTrack();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'create_track.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "closed_captions": { "a": true, "h": "Closed Captions", "n": "closed_captions", "r": false, "sh": "Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).", "t": "`$BOOLEAN`", "key$": "closed_captions", "index$": 0 }, "language_code": { "a": true, "h": "Language Code", "n": "language_code", "r": true, "sh": "The language code of this track.", "t": "`$STRING`", "key$": "language_code", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the track containing a human-readable description.", "t": "`$STRING`", "key$": "name", "index$": 2 }, "passthrough": { "a": true, "h": "Passthrough", "n": "passthrough", "r": false, "sh": "Arbitrary user-supplied metadata set for the track either when creating the asset or track.", "t": "`$STRING`", "key$": "passthrough", "index$": 3 }, "text_type": { "a": true, "h": "Text Type", "n": "text_type", "r": false, "t": "`$STRING`", "key$": "text_type", "index$": 4 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 5 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "The URL of the file that Mux should download and use.", "t": "`$STRING`", "key$": "url", "index$": 6 } }, "name": "create_track", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /video/v1/assets/{ASSET_ID}/tracks", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "asset_id", "or": "ASSET_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/video/v1/assets/{ASSET_ID}/tracks", "q": { "exist": ["asset_id"] }, "r": { "param": { "ASSET_ID": "asset_id" } }, "s": [{ "lit": "video" }, { "lit": "v1" }, { "lit": "assets" }, { "var": "asset_id" }, { "lit": "tracks" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.asset"]] }, "key$": "create_track", "name__orig": "create_track", "Name": "CreateTrack", "name_": "create_track", "name-": "create-track", "NAME": "CREATE_TRACK", "index$": 7 }, { "active": true, "entity": "create_track", "key$": "BasicCreateTrackFlow", "kind": "basic", "name": "BasicCreateTrackFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "create_track_ref01" }, "m": { "asset_id": "asset01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'CreateTrack', { "POST /video/v1/assets/{ASSET_ID}/tracks": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["url", "type", "language_code"], "properties": { "url": { "type": "string", "description": "The URL of the file that Mux should download and use.\n* For `audio` tracks, the URL is the location of the audio file for Mux to download, for example an M4A, WAV, or MP3 file. Mux supports most audio file formats and codecs, but for fastest processing, you should [use standard inputs wherever possible](https://docs.mux.com/guides/minimize-processing-time).\n* For `text` tracks, the URL is the location of subtitle/captions file. Mux supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) formats for ingesting Subtitles and Closed Captions.\n", "key$": "url" }, "type": { "type": "string", "enum": ["text", "audio"], "key$": "type" }, "text_type": { "type": "string", "enum": ["subtitles"], "key$": "text_type" }, "language_code": { "type": "string", "description": "The language code of this track. The value must be a valid BCP 47 specification compliant value. For example, en for English or en-US for the US version of English.", "key$": "language_code" }, "name": { "type": "string", "description": "The name of the track containing a human-readable description. This value must be unique within each group of `text` or `audio` track types. The HLS manifest will associate the `text` or `audio` track with this value. For example, set the value to \"English\" for subtitles text track with `language_code` as en-US. If this parameter is not included, Mux will auto-populate a value based on the `language_code` value.", "key$": "name" }, "closed_captions": { "type": "boolean", "description": "Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).", "key$": "closed_captions" }, "passthrough": { "type": "string", "description": "Arbitrary user-supplied metadata set for the track either when creating the asset or track.", "key$": "passthrough" } }, "x-ref": "#/components/schemas/CreateTrackRequest", "index$": 1 }, "example": { "url": "https://example.com/myVideo_en.srt", "type": "text", "text_type": "subtitles", "language_code": "en-US", "name": "English", "closed_captions": true, "passthrough": "English" } } } }, "parameters": [{ "name": "ASSET_ID", "in": "path", "description": "The asset ID.", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/asset_id", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const create_track_ref01_ent = client.CreateTrack();
        let create_track_ref01_data = setup.data.new.create_track['create_track_ref01'];
        create_track_ref01_data['asset_id'] = setup.idmap['asset01'];
        create_track_ref01_data = (await create_track_ref01_ent.create(create_track_ref01_data)).data();
        (0, node_assert_1.default)(null != create_track_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/create_track/CreateTrackTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['create_track01', 'create_track02', 'create_track03', 'asset01', 'asset02', 'asset03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_CREATE_TRACK_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_CREATE_TRACK_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_CREATE_TRACK_ENTID'];
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
//# sourceMappingURL=CreateTrackEntity.test.js.map