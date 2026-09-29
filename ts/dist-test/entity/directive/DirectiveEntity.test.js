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
(0, node_test_1.describe)('DirectiveEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.Directive();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'directive.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "sh": "Unix timestamp (seconds) when the directive was created.", "t": "`$INTEGER`", "key$": "created_at", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Stable directive identifier (drv_...).", "t": "`$STRING`", "key$": "id", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Human-readable directive name.", "t": "`$STRING`", "key$": "name", "index$": 2 }, "resources": { "a": true, "h": "Resources", "n": "resources", "op": { "create": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Resource declarations.", "t": "`$ARRAY`", "key$": "resources", "index$": 3 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": true, "t": "`$OBJECT`", "key$": "subject", "index$": 4 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": true, "sh": "Unix timestamp (seconds) when the directive was last updated.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 5 }, "workflows": { "a": true, "h": "Workflows", "n": "workflows", "r": true, "sh": "Workflow bindings.", "t": "`$ARRAY`", "key$": "workflows", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "directive", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /robots/v0/directives/{DIRECTIVE_ID}/runs", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "directive_id", "or": "DIRECTIVE_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/robots/v0/directives/{DIRECTIVE_ID}/runs", "q": { "$action": "run", "exist": ["directive_id"] }, "r": { "param": { "DIRECTIVE_ID": "directive_id" } }, "s": [{ "lit": "robots" }, { "lit": "v0" }, { "lit": "directives" }, { "var": "directive_id" }, { "lit": "runs" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /robots/v0/directives", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/robots/v0/directives", "q": {}, "r": {}, "s": [{ "lit": "robots" }, { "lit": "v0" }, { "lit": "directives" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /robots/v0/directives", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 25, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/robots/v0/directives", "q": { "exist": ["limit", "page"] }, "r": {}, "s": [{ "lit": "robots" }, { "lit": "v0" }, { "lit": "directives" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /robots/v0/directives/{DIRECTIVE_ID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "DIRECTIVE_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/robots/v0/directives/{DIRECTIVE_ID}", "q": { "exist": ["id"] }, "r": { "param": { "DIRECTIVE_ID": "id" } }, "s": [{ "lit": "robots" }, { "lit": "v0" }, { "lit": "directives" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /robots/v0/directives/{DIRECTIVE_ID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "DIRECTIVE_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/robots/v0/directives/{DIRECTIVE_ID}", "q": { "exist": ["id"] }, "r": { "param": { "DIRECTIVE_ID": "id" } }, "s": [{ "lit": "robots" }, { "lit": "v0" }, { "lit": "directives" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "directive", "name__orig": "directive", "Name": "Directive", "name_": "directive", "name-": "directive", "NAME": "DIRECTIVE", "index$": 8 }, { "active": true, "entity": "directive", "key$": "BasicDirectiveFlow", "kind": "basic", "name": "BasicDirectiveFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "directive_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "directive_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "directive_ref01", "srcdatavar": "directive_ref01_data", "suffix": "_dt0" }, "m": { "id": "directive01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-directive_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "directive_ref01", "suffix": "_rm0" }, "m": { "id": "directive01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "directive_ref01" } }], "index$": 4 }] }, 'Directive', { "POST /robots/v0/directives/{DIRECTIVE_ID}/runs": { "protocol": "http", "requestBody": { "description": "Run parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "asset_id": { "type": "string", "minLength": 1, "description": "The bare Mux asset ID to run the directive against, as returned by the Mux Video API." } }, "required": ["asset_id"], "example": { "asset_id": "abc123def456" }, "x-ref": "#/components/schemas/RunDirectiveRequest" } } } }, "parameters": [{ "schema": { "type": "string", "minLength": 1 }, "required": true, "name": "DIRECTIVE_ID", "in": "path", "index$": 0 }] }, "POST /robots/v0/directives": { "protocol": "http", "requestBody": { "description": "Directive configuration", "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 256, "description": "Human-readable directive name.", "key$": "name" }, "subject": { "type": "object", "properties": { "type": { "description": "The entity type each run targets. V1 accepts \"video.asset\" only; \"video.live_stream\" is reserved and rejected at save time.", "enum": ["video.asset", "video.live_stream"], "type": "string" } }, "required": ["type"], "x-ref": "#/components/schemas/DirectiveSubject", "key$": "subject" }, "resources": { "type": "array", "items": { "oneOf": [{ "type": "object", "properties": {}, "required": [], "example": {}, "x-ref": "#/components/schemas/TrackResourceDeclaration" }, { "type": "object", "properties": {}, "required": [], "example": {}, "x-ref": "#/components/schemas/ShotsResourceDeclaration" }], "discriminator": { "propertyName": "type", "mapping": { "video.asset.track": "#/components/schemas/TrackResourceDeclaration", "video.asset.shots": "#/components/schemas/ShotsResourceDeclaration" } } }, "maxItems": 50, "description": "Resources the engine ensures on the asset before dependent workflows run. May be omitted for workflows-only directives.", "key$": "resources" }, "workflows": { "type": "array", "items": { "oneOf": [{ "properties": {}, "required": [], "title": "SummarizeBinding", "type": "object", "x-ref": "#/components/schemas/SummarizeBinding" }, { "properties": {}, "required": [], "title": "ModerateBinding", "type": "object", "x-ref": "#/components/schemas/ModerateBinding" }, { "properties": {}, "required": [], "title": "GenerateChaptersBinding", "type": "object", "x-ref": "#/components/schemas/GenerateChaptersBinding" }, { "properties": {}, "required": [], "title": "FindScenesBinding", "type": "object", "x-ref": "#/components/schemas/FindScenesBinding" }, { "properties": {}, "required": [], "title": "EditCaptionsBinding", "type": "object", "x-ref": "#/components/schemas/EditCaptionsBinding" }, { "properties": {}, "required": [], "title": "TranslateCaptionsBinding", "type": "object", "x-ref": "#/components/schemas/TranslateCaptionsBinding" }, { "properties": {}, "required": [], "title": "TranslateAudioBinding", "type": "object", "x-ref": "#/components/schemas/TranslateAudioBinding" }, { "properties": {}, "required": [], "title": "AskQuestionsBinding", "type": "object", "x-ref": "#/components/schemas/AskQuestionsBinding" }, { "properties": {}, "required": [], "title": "FindKeyMomentsBinding", "type": "object", "x-ref": "#/components/schemas/FindKeyMomentsBinding" }, { "properties": {}, "required": [], "title": "GenerateEngagementInsightsBinding", "type": "object", "x-ref": "#/components/schemas/GenerateEngagementInsightsBinding" }, { "properties": {}, "required": [], "title": "GeneratePremiumCaptionsBinding", "type": "object", "x-ref": "#/components/schemas/GeneratePremiumCaptionsBinding" }, { "properties": {}, "required": [], "title": "FindBestThumbnailsBinding", "type": "object", "x-ref": "#/components/schemas/FindBestThumbnailsBinding" }], "discriminator": { "propertyName": "workflow", "mapping": { "ask-questions": "#/components/schemas/AskQuestionsBinding", "edit-captions": "#/components/schemas/EditCaptionsBinding", "find-best-thumbnails": "#/components/schemas/FindBestThumbnailsBinding", "find-key-moments": "#/components/schemas/FindKeyMomentsBinding", "find-scenes": "#/components/schemas/FindScenesBinding", "generate-chapters": "#/components/schemas/GenerateChaptersBinding", "generate-engagement-insights": "#/components/schemas/GenerateEngagementInsightsBinding", "generate-premium-captions": "#/components/schemas/GeneratePremiumCaptionsBinding", "moderate": "#/components/schemas/ModerateBinding", "summarize": "#/components/schemas/SummarizeBinding", "translate-audio": "#/components/schemas/TranslateAudioBinding", "translate-captions": "#/components/schemas/TranslateCaptionsBinding" } }, "x-ref": "#/components/schemas/WorkflowBinding" }, "minItems": 1, "maxItems": 150, "description": "The Robots workflows to dispatch on each run.", "key$": "workflows" } }, "required": ["name", "subject", "workflows"], "example": { "name": "Generate captions, then translate", "subject": { "type": "video.asset" }, "resources": [{ "reference_id": "captions_en", "type": "video.asset.track", "kind": "caption", "language": "en", "source": { "via": "workflow", "binding": "premium_captions" } }], "workflows": [{ "reference_id": "premium_captions", "workflow": "generate-premium-captions", "params": { "language_code": "en" } }, { "reference_id": "translate_es", "workflow": "translate-captions", "inputs": ["captions_en"], "params": { "to_language_code": "es" } }] }, "x-ref": "#/components/schemas/CreateDirectiveRequest", "index$": 1 } } } }, "parameters": [] }, "GET /robots/v0/directives": { "protocol": "http", "parameters": [{ "schema": { "type": "integer", "minimum": 1, "maximum": 100, "default": 25, "description": "Maximum number of results to return (default 25, max 100)." }, "required": false, "description": "Maximum number of results to return (default 25, max 100).", "name": "limit", "in": "query", "index$": 0 }, { "schema": { "type": "integer", "minimum": 1, "default": 1, "description": "Page number, 1-indexed (default 1)." }, "required": false, "description": "Page number, 1-indexed (default 1).", "name": "page", "in": "query", "index$": 1 }] }, "GET /robots/v0/directives/{DIRECTIVE_ID}": { "protocol": "http", "parameters": [{ "schema": { "type": "string", "minLength": 1 }, "required": true, "name": "DIRECTIVE_ID", "in": "path", "index$": 0 }] }, "DELETE /robots/v0/directives/{DIRECTIVE_ID}": { "protocol": "http", "parameters": [{ "schema": { "type": "string", "minLength": 1 }, "required": true, "name": "DIRECTIVE_ID", "in": "path", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const directive_ref01_ent = client.Directive();
        let directive_ref01_data = setup.data.new.directive['directive_ref01'];
        directive_ref01_data = (await directive_ref01_ent.create(directive_ref01_data)).data();
        (0, node_assert_1.default)(null != directive_ref01_data.id);
        // LIST
        const directive_ref01_match = {};
        const directive_ref01_list = (await directive_ref01_ent.list(directive_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(directive_ref01_list, { id: directive_ref01_data.id })));
        // LOAD
        const directive_ref01_match_dt0 = {};
        directive_ref01_match_dt0.id = directive_ref01_data.id;
        const directive_ref01_data_dt0 = (await directive_ref01_ent.load(directive_ref01_match_dt0)).data();
        (0, node_assert_1.default)(directive_ref01_data_dt0.id === directive_ref01_data.id);
        // REMOVE
        const directive_ref01_match_rm0 = { id: directive_ref01_data.id };
        await directive_ref01_ent.remove(directive_ref01_match_rm0);
        // LIST
        const directive_ref01_match_rt0 = {};
        const directive_ref01_list_rt0 = (await directive_ref01_ent.list(directive_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(directive_ref01_list_rt0, { id: directive_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/directive/DirectiveTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['directive01', 'directive02', 'directive03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_DIRECTIVE_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_DIRECTIVE_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_DIRECTIVE_ENTID'];
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
//# sourceMappingURL=DirectiveEntity.test.js.map