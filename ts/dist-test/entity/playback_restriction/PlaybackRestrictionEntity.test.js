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
(0, node_test_1.describe)('PlaybackRestrictionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.PlaybackRestriction();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'playback_restriction.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "int64", "h": "Created At", "n": "created_at", "r": true, "sh": "Time the Playback Restriction was created, defined as a Unix timestamp (seconds since epoch).", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the Playback Restriction.", "t": "`$STRING`", "key$": "id", "index$": 1 }, "referrer": { "a": true, "h": "Referrer", "n": "referrer", "r": true, "sh": "A list of domains allowed to play your videos.", "t": "`$OBJECT`", "key$": "referrer", "index$": 2 }, "updated_at": { "a": true, "fo": "int64", "h": "Updated At", "n": "updated_at", "r": true, "sh": "Time the Playback Restriction was last updated, defined as a Unix timestamp (seconds since epoch).", "t": "`$STRING`", "key$": "updated_at", "index$": 3 }, "user_agent": { "a": true, "h": "User Agent", "n": "user_agent", "r": true, "sh": "Rules that control what user agents are allowed to play your videos.", "t": "`$OBJECT`", "key$": "user_agent", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "playback_restriction", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /video/v1/playback-restrictions", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/video/v1/playback-restrictions", "q": {}, "r": {}, "s": [{ "lit": "video" }, { "lit": "v1" }, { "lit": "playback-restrictions" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /video/v1/playback-restrictions", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 25, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/video/v1/playback-restrictions", "q": { "exist": ["limit", "page"] }, "r": {}, "s": [{ "lit": "video" }, { "lit": "v1" }, { "lit": "playback-restrictions" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "PLAYBACK_RESTRICTION_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}", "q": { "exist": ["id"] }, "r": { "param": { "PLAYBACK_RESTRICTION_ID": "id" } }, "s": [{ "lit": "video" }, { "lit": "v1" }, { "lit": "playback-restrictions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "PLAYBACK_RESTRICTION_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}", "q": { "exist": ["id"] }, "r": { "param": { "PLAYBACK_RESTRICTION_ID": "id" } }, "s": [{ "lit": "video" }, { "lit": "v1" }, { "lit": "playback-restrictions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "playback_restriction_id", "or": "PLAYBACK_RESTRICTION_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer", "q": { "$action": "referrer", "exist": ["playback_restriction_id"] }, "r": { "param": { "PLAYBACK_RESTRICTION_ID": "playback_restriction_id" } }, "s": [{ "lit": "video" }, { "lit": "v1" }, { "lit": "playback-restrictions" }, { "var": "playback_restriction_id" }, { "lit": "referrer" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "playback_restriction_id", "or": "PLAYBACK_RESTRICTION_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent", "q": { "$action": "user_agent", "exist": ["playback_restriction_id"] }, "r": { "param": { "PLAYBACK_RESTRICTION_ID": "playback_restriction_id" } }, "s": [{ "lit": "video" }, { "lit": "v1" }, { "lit": "playback-restrictions" }, { "var": "playback_restriction_id" }, { "lit": "user_agent" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "playback_restriction", "name__orig": "playback_restriction", "Name": "PlaybackRestriction", "name_": "playback_restriction", "name-": "playback-restriction", "NAME": "PLAYBACK_RESTRICTION", "index$": 52 }, { "active": true, "entity": "playback_restriction", "key$": "BasicPlaybackRestrictionFlow", "kind": "basic", "name": "BasicPlaybackRestrictionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "playback_restriction_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "playback_restriction_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "playback_restriction_ref01", "srcdatavar": "playback_restriction_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-playback_restriction_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "playback_restriction_ref01", "srcdatavar": "playback_restriction_ref01_data", "suffix": "_dt0" }, "m": { "id": "playback_restriction01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-playback_restriction_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "playback_restriction_ref01", "suffix": "_rm0" }, "m": { "id": "playback_restriction01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "playback_restriction_ref01" } }], "index$": 5 }] }, 'PlaybackRestriction', { "POST /video/v1/playback-restrictions": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["referrer", "user_agent"], "properties": { "referrer": { "type": "object", "description": "A list of domains allowed to play your videos.", "required": ["allowed_domains"], "properties": { "allowed_domains": { "type": "array", "items": { "type": "string" }, "description": "List of domains allowed to play videos. Possible values are\n  * `[]` Empty Array indicates deny video playback requests for all domains\n  * `[\"*\"]` A Single Wildcard `*` entry means allow video playback requests from any domain\n  * `[\"*.example.com\", \"foo.com\"]` A list of up to 10 domains or valid dns-style wildcards\n" }, "allow_no_referrer": { "type": "boolean", "default": false, "description": "A boolean to determine whether to allow or deny HTTP requests without `Referer` HTTP request header. Playback requests coming from non-web/native applications like iOS, Android or smart TVs will not have a `Referer` HTTP header. Set this value to `true` to allow these playback requests." } }, "x-ref": "#/components/schemas/ReferrerDomainRestrictionRequest", "key$": "referrer" }, "user_agent": { "type": "object", "description": "Rules that control what user agents are allowed to play your videos. Please see [Using User-Agent HTTP header for validation](https://docs.mux.com/guides/secure-video-playback#using-user-agent-http-header-for-validation) for more details on this feature.", "properties": { "allow_no_user_agent": { "type": "boolean", "default": true, "description": "Whether or not to allow views without a `User-Agent` HTTP request header." }, "allow_high_risk_user_agent": { "type": "boolean", "default": true, "description": "Whether or not to allow high risk user agents. The high risk user agents are defined by Mux." } }, "x-ref": "#/components/schemas/UserAgentRestrictionRequest", "key$": "user_agent" } }, "x-ref": "#/components/schemas/CreatePlaybackRestrictionRequest", "index$": 1 }, "example": { "referrer": { "allowed_domains": ["*.example.com"], "allow_no_referrer": true }, "user_agent": { "allow_no_user_agent": false, "allow_high_risk_user_agent": false } } } } }, "parameters": [] }, "GET /video/v1/playback-restrictions": { "protocol": "http", "parameters": [{ "name": "page", "in": "query", "description": "Offset by this many pages, of the size of `limit`", "required": false, "schema": { "type": "integer", "format": "int32", "default": 1 }, "x-ref": "#/components/parameters/page", "index$": 0 }, { "name": "limit", "in": "query", "description": "Number of items to include in the response", "required": false, "schema": { "type": "integer", "format": "int32", "default": 25 }, "x-ref": "#/components/parameters/limit", "index$": 1 }] }, "GET /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}": { "protocol": "http", "parameters": [{ "name": "PLAYBACK_RESTRICTION_ID", "in": "path", "description": "ID of the Playback Restriction.", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/playback_restriction_id", "index$": 0 }] }, "DELETE /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}": { "protocol": "http", "parameters": [{ "name": "PLAYBACK_RESTRICTION_ID", "in": "path", "description": "ID of the Playback Restriction.", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/playback_restriction_id", "index$": 0 }] }, "PUT /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/referrer": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "A list of domains allowed to play your videos.", "required": ["allowed_domains"], "properties": { "allowed_domains": { "type": "array", "items": { "type": "string" }, "description": "List of domains allowed to play videos. Possible values are\n  * `[]` Empty Array indicates deny video playback requests for all domains\n  * `[\"*\"]` A Single Wildcard `*` entry means allow video playback requests from any domain\n  * `[\"*.example.com\", \"foo.com\"]` A list of up to 10 domains or valid dns-style wildcards\n" }, "allow_no_referrer": { "type": "boolean", "default": false, "description": "A boolean to determine whether to allow or deny HTTP requests without `Referer` HTTP request header. Playback requests coming from non-web/native applications like iOS, Android or smart TVs will not have a `Referer` HTTP header. Set this value to `true` to allow these playback requests." } }, "x-ref": "#/components/schemas/UpdateReferrerDomainRestrictionRequest" }, "example": { "allowed_domains": ["*.example.com"], "allow_no_referrer": true } } } }, "parameters": [{ "name": "PLAYBACK_RESTRICTION_ID", "in": "path", "description": "ID of the Playback Restriction.", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/playback_restriction_id", "index$": 0 }] }, "PUT /video/v1/playback-restrictions/{PLAYBACK_RESTRICTION_ID}/user_agent": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["allow_no_user_agent", "allow_high_risk_user_agent"], "properties": { "allow_no_user_agent": { "type": "boolean", "default": true, "description": "Whether or not to allow views without a `User-Agent` HTTP request header." }, "allow_high_risk_user_agent": { "type": "boolean", "default": true, "description": "Whether or not to allow high risk user agents. The high risk user agents are defined by Mux." } }, "x-ref": "#/components/schemas/UpdateUserAgentRestrictionRequest" }, "example": { "allow_no_user_agent": false, "allow_high_risk_user_agent": false } } } }, "parameters": [{ "name": "PLAYBACK_RESTRICTION_ID", "in": "path", "description": "ID of the Playback Restriction.", "required": true, "schema": { "type": "string" }, "x-ref": "#/components/parameters/playback_restriction_id", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const playback_restriction_ref01_ent = client.PlaybackRestriction();
        let playback_restriction_ref01_data = setup.data.new.playback_restriction['playback_restriction_ref01'];
        playback_restriction_ref01_data = (await playback_restriction_ref01_ent.create(playback_restriction_ref01_data)).data();
        (0, node_assert_1.default)(null != playback_restriction_ref01_data.id);
        // LIST
        const playback_restriction_ref01_match = {};
        const playback_restriction_ref01_list = (await playback_restriction_ref01_ent.list(playback_restriction_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(playback_restriction_ref01_list, { id: playback_restriction_ref01_data.id })));
        // UPDATE
        const playback_restriction_ref01_data_up0 = {};
        playback_restriction_ref01_data_up0.id = playback_restriction_ref01_data.id;
        const playback_restriction_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-playback_restriction_ref01_' + setup.now };
        playback_restriction_ref01_data_up0[playback_restriction_ref01_markdef_up0.name] = playback_restriction_ref01_markdef_up0.value;
        const playback_restriction_ref01_resdata_up0 = (await playback_restriction_ref01_ent.update(playback_restriction_ref01_data_up0)).data();
        (0, node_assert_1.default)(playback_restriction_ref01_resdata_up0.id === playback_restriction_ref01_data_up0.id);
        (0, node_assert_1.default)(playback_restriction_ref01_resdata_up0[playback_restriction_ref01_markdef_up0.name] === playback_restriction_ref01_markdef_up0.value);
        // LOAD
        const playback_restriction_ref01_match_dt0 = {};
        playback_restriction_ref01_match_dt0.id = playback_restriction_ref01_data.id;
        const playback_restriction_ref01_data_dt0 = (await playback_restriction_ref01_ent.load(playback_restriction_ref01_match_dt0)).data();
        (0, node_assert_1.default)(playback_restriction_ref01_data_dt0.id === playback_restriction_ref01_data.id);
        // REMOVE
        const playback_restriction_ref01_match_rm0 = { id: playback_restriction_ref01_data.id };
        await playback_restriction_ref01_ent.remove(playback_restriction_ref01_match_rm0);
        // LIST
        const playback_restriction_ref01_match_rt0 = {};
        const playback_restriction_ref01_list_rt0 = (await playback_restriction_ref01_ent.list(playback_restriction_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(playback_restriction_ref01_list_rt0, { id: playback_restriction_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/playback_restriction/PlaybackRestrictionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['playback_restriction01', 'playback_restriction02', 'playback_restriction03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_PLAYBACK_RESTRICTION_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_PLAYBACK_RESTRICTION_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_PLAYBACK_RESTRICTION_ENTID'];
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
//# sourceMappingURL=PlaybackRestrictionEntity.test.js.map