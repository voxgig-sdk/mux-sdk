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
(0, node_test_1.describe)('DirectiveRunListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.DirectiveRunList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'directive_run_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "completed_at": { "a": true, "h": "Completed At", "n": "completed_at", "r": true, "sh": "Unix timestamp (seconds) when the run reached terminal state.", "t": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "key$": "completed_at", "index$": 0 }, "node_states": { "a": true, "h": "Node States", "n": "node_states", "r": true, "sh": "Per-binding status entries, one per binding, in the order the bindings appear in `directive.workflows[]`.", "t": "`$ARRAY`", "key$": "node_states", "index$": 1 }, "run_id": { "a": true, "h": "Run Id", "n": "run_id", "r": true, "sh": "Unique run identifier (drvrun_...).", "t": "`$STRING`", "key$": "run_id", "index$": 2 }, "started_at": { "a": true, "h": "Started At", "n": "started_at", "r": true, "sh": "Unix timestamp (seconds) when the run started.", "t": "`$INTEGER`", "key$": "started_at", "index$": 3 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Current run status.", "t": "`$STRING`", "key$": "status", "index$": 4 }, "subject_id": { "a": true, "h": "Subject Id", "n": "subject_id", "r": true, "sh": "The bare Mux asset ID this run targeted.", "t": "`$STRING`", "key$": "subject_id", "index$": 5 } }, "name": "directive_run_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /robots/v0/directives/{DIRECTIVE_ID}/runs", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "directive_id", "or": "directive_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 25, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/robots/v0/directives/{DIRECTIVE_ID}/runs", "q": { "exist": ["directive_id", "limit", "page"] }, "r": { "param": { "DIRECTIVE_ID": "directive_id" } }, "s": [{ "lit": "robots" }, { "lit": "v0" }, { "lit": "directives" }, { "var": "directive_id" }, { "lit": "runs" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.directive"]] }, "key$": "directive_run_list", "name__orig": "directive_run_list", "Name": "DirectiveRunList", "name_": "directive_run_list", "name-": "directive-run-list", "NAME": "DIRECTIVE_RUN_LIST", "index$": 10 }, { "active": true, "entity": "directive_run_list", "key$": "BasicDirectiveRunListFlow", "kind": "basic", "name": "BasicDirectiveRunListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "directive_id": "directive01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "directive_run_list_ref01" } }], "index$": 0 }] }, 'DirectiveRunList', { "GET /robots/v0/directives/{DIRECTIVE_ID}/runs": { "protocol": "http", "parameters": [{ "schema": { "type": "string", "minLength": 1 }, "required": true, "name": "DIRECTIVE_ID", "in": "path", "index$": 0 }, { "schema": { "type": "integer", "minimum": 1, "maximum": 100, "default": 25, "description": "Maximum number of results to return (default 25, max 100)." }, "required": false, "description": "Maximum number of results to return (default 25, max 100).", "name": "limit", "in": "query", "index$": 1 }, { "schema": { "type": "integer", "minimum": 1, "default": 1, "description": "Page number, 1-indexed (default 1)." }, "required": false, "description": "Page number, 1-indexed (default 1).", "name": "page", "in": "query", "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let directive_run_list_ref01_data = Object.values(setup.data.existing.directive_run_list)[0];
        // LIST
        const directive_run_list_ref01_ent = client.DirectiveRunList();
        const directive_run_list_ref01_match = {};
        directive_run_list_ref01_match['directive_id'] = setup.idmap['directive01'];
        const directive_run_list_ref01_list = (await directive_run_list_ref01_ent.list(directive_run_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/directive_run_list/DirectiveRunListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['directive_run_list01', 'directive_run_list02', 'directive_run_list03', 'directive01', 'directive02', 'directive03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_DIRECTIVE_RUN_LIST_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_DIRECTIVE_RUN_LIST_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_DIRECTIVE_RUN_LIST_ENTID'];
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
//# sourceMappingURL=DirectiveRunListEntity.test.js.map