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
(0, node_test_1.describe)('UpdateAssetTrackEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.UpdateAssetTrack();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'update_asset_track.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "auto_language_confidence": { "a": true, "fo": "double", "h": "Auto Language Confidence", "n": "auto_language_confidence", "r": false, "sh": "The confidence value (0-1) of the determined language.", "t": "`$NUMBER`", "key$": "auto_language_confidence", "index$": 0 }, "closed_captions": { "a": true, "h": "Closed Captions", "n": "closed_captions", "r": false, "sh": "Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).", "t": "`$BOOLEAN`", "key$": "closed_captions", "index$": 1 }, "duration": { "a": true, "fo": "double", "h": "Duration", "n": "duration", "r": false, "sh": "The duration in seconds of the track media.", "t": "`$NUMBER`", "key$": "duration", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the Track", "t": "`$STRING`", "key$": "id", "index$": 3 }, "language_code": { "a": true, "h": "Language Code", "n": "language_code", "r": false, "sh": "The language code value represents [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value, or 'auto'.", "t": "`$STRING`", "key$": "language_code", "index$": 4 }, "max_channels": { "a": true, "fo": "int64", "h": "Max Channels", "n": "max_channels", "r": false, "sh": "The maximum number of audio channels the track supports.", "t": "`$INTEGER`", "key$": "max_channels", "index$": 5 }, "max_frame_rate": { "a": true, "fo": "double", "h": "Max Frame Rate", "n": "max_frame_rate", "r": false, "sh": "The maximum frame rate available for the track.", "t": "`$NUMBER`", "key$": "max_frame_rate", "index$": 6 }, "max_height": { "a": true, "fo": "int64", "h": "Max Height", "n": "max_height", "r": false, "sh": "The maximum height in pixels available for the track.", "t": "`$INTEGER`", "key$": "max_height", "index$": 7 }, "max_width": { "a": true, "fo": "int64", "h": "Max Width", "n": "max_width", "r": false, "sh": "The maximum width in pixels available for the track.", "t": "`$INTEGER`", "key$": "max_width", "index$": 8 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the track containing a human-readable description.", "t": "`$STRING`", "key$": "name", "index$": 9 }, "passthrough": { "a": true, "h": "Passthrough", "n": "passthrough", "r": false, "sh": "Arbitrary user-supplied metadata set for the track either when creating the asset or track.", "t": "`$STRING`", "key$": "passthrough", "index$": 10 }, "primary": { "a": true, "h": "Primary", "n": "primary", "r": false, "sh": "For an audio track, indicates that this is the primary audio track, ingested from the main input for this asset.", "t": "`$BOOLEAN`", "key$": "primary", "index$": 11 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The status of the track.", "t": "`$STRING`", "key$": "status", "index$": 12 }, "text_source": { "a": true, "h": "Text Source", "n": "text_source", "r": false, "sh": "The source of the text contained in a Track of type `text`.", "t": "`$STRING`", "key$": "text_source", "index$": 13 }, "text_type": { "a": true, "h": "Text Type", "n": "text_type", "r": false, "sh": "This parameter is only set for `text` type tracks.", "t": "`$STRING`", "key$": "text_type", "index$": 14 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of track", "t": "`$STRING`", "key$": "type", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "update_asset_track", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "asset_id", "or": "ASSET_ID", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "TRACK_ID", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}", "q": { "exist": ["asset_id", "id"] }, "r": { "param": { "ASSET_ID": "asset_id", "TRACK_ID": "id" } }, "s": [{ "lit": "video" }, { "lit": "v1" }, { "lit": "assets" }, { "var": "asset_id" }, { "lit": "tracks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.asset"]] }, "key$": "update_asset_track", "name__orig": "update_asset_track", "Name": "UpdateAssetTrack", "name_": "update_asset_track", "name-": "update-asset-track", "NAME": "UPDATE_ASSET_TRACK", "index$": 66 }, { "active": true, "entity": "update_asset_track", "key$": "BasicUpdateAssetTrackFlow", "kind": "basic", "name": "BasicUpdateAssetTrackFlow", "param": {}, "step": [{ "a": true, "d": { "asset_id": "asset01" }, "i": { "ref": "update_asset_track_ref01", "srcdatavar": "update_asset_track_ref01_data", "suffix": "_up0", "textfield": "language_code" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-update_asset_track_ref01" } }], "v": [], "index$": 0 }] }, 'UpdateAssetTrack', { "PATCH /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "language_code": { "type": "string", "description": "The language code of this track. The value must be a valid BCP 47 specification compliant value. For example, en for English or en-US for the US version of English.", "key$": "language_code" }, "name": { "type": "string", "description": "The name of the track containing a human-readable description. This value must be unique within each group of `text` or `audio` track types. The HLS manifest will associate the `text` or `audio` track with this value. For example, set the value to \"English\" for subtitles text track with `language_code` as en-US. If this parameter is not included, Mux will auto-populate a value based on the `language_code` value.", "key$": "name" }, "closed_captions": { "type": "boolean", "description": "Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH).", "key$": "closed_captions" }, "passthrough": { "type": "string", "description": "Arbitrary user-supplied metadata set for the track either when creating the asset or track.", "key$": "passthrough" } }, "x-ref": "#/components/schemas/UpdateAssetTrackRequest", "index$": 1 }, "example": { "language_code": "en-US", "name": "English" } } } }, "parameters": [{ "name": "ASSET_ID", "in": "path", "description": "The asset ID.", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/asset_id", "index$": 0 }, { "name": "TRACK_ID", "in": "path", "description": "The ID of the track for an asset.", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/track_id", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let update_asset_track_ref01_data = Object.values(setup.data.existing.update_asset_track)[0];
        // UPDATE
        const update_asset_track_ref01_ent = client.UpdateAssetTrack();
        const update_asset_track_ref01_data_up0 = {};
        update_asset_track_ref01_data_up0.id = update_asset_track_ref01_data.id;
        update_asset_track_ref01_data_up0['asset_id'] = setup.idmap['asset_id'];
        const update_asset_track_ref01_markdef_up0 = { name: 'language_code', value: 'Mark01-update_asset_track_ref01_' + setup.now };
        update_asset_track_ref01_data_up0[update_asset_track_ref01_markdef_up0.name] = update_asset_track_ref01_markdef_up0.value;
        const update_asset_track_ref01_resdata_up0 = (await update_asset_track_ref01_ent.update(update_asset_track_ref01_data_up0)).data();
        (0, node_assert_1.default)(update_asset_track_ref01_resdata_up0.id === update_asset_track_ref01_data_up0.id);
        (0, node_assert_1.default)(update_asset_track_ref01_resdata_up0[update_asset_track_ref01_markdef_up0.name] === update_asset_track_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/update_asset_track/UpdateAssetTrackTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['update_asset_track01', 'update_asset_track02', 'update_asset_track03', 'asset01', 'asset02', 'asset03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_UPDATE_ASSET_TRACK_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_UPDATE_ASSET_TRACK_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_UPDATE_ASSET_TRACK_ENTID'];
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
//# sourceMappingURL=UpdateAssetTrackEntity.test.js.map