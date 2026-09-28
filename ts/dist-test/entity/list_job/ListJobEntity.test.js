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
(0, node_test_1.describe)('ListJobEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.ListJob();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_job.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "sh": "Unix timestamp (seconds) when the job was created.", "t": "`$INTEGER`", "key$": "created_at", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique job identifier.", "t": "`$STRING`", "key$": "id", "index$": 1 }, "links": { "a": true, "h": "Links", "n": "links", "r": true, "sh": "Hypermedia links for this job.", "t": "`$OBJECT`", "key$": "links", "index$": 2 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Current job status.", "t": "`$STRING`", "key$": "status", "index$": 3 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": true, "sh": "Unix timestamp (seconds) of the job's last state transition (e.g.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 4 }, "workflow": { "a": true, "h": "Workflow", "n": "workflow", "r": true, "sh": "Workflow type that created this job.", "t": "`$STRING`", "key$": "workflow", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "list_job", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /robots/v0/jobs", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "asset_id", "or": "asset_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 25, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "workflow", "or": "workflow", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/robots/v0/jobs", "q": { "exist": ["asset_id", "limit", "page", "status", "workflow"] }, "r": {}, "s": [{ "lit": "robots" }, { "lit": "v0" }, { "lit": "jobs" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "list_job", "name__orig": "list_job", "Name": "ListJob", "name_": "list_job", "name-": "list-job", "NAME": "LIST_JOB", "index$": 40 }, { "active": true, "entity": "list_job", "key$": "BasicListJobFlow", "kind": "basic", "name": "BasicListJobFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_job_ref01" } }], "index$": 0 }] }, 'ListJob', { "GET /robots/v0/jobs": { "protocol": "http", "parameters": [{ "schema": { "type": "string", "enum": ["summarize", "moderate", "generate-chapters", "find-scenes", "edit-captions", "translate-captions", "translate-audio", "ask-questions", "find-key-moments", "generate-engagement-insights", "generate-premium-captions", "find-best-thumbnails"], "description": "Filter by workflow name" }, "required": false, "description": "Filter by workflow name", "name": "workflow", "in": "query", "index$": 0 }, { "schema": { "allOf": [{ "type": "string", "enum": ["pending", "processing", "completed", "errored", "cancelled"], "description": "Current job status.", "x-ref": "#/components/schemas/JobStatus" }, { "description": "Filter by job status" }] }, "required": false, "description": "Filter by job status", "name": "status", "in": "query", "index$": 1 }, { "schema": { "type": "string", "minLength": 1, "description": "Filter by Mux asset ID" }, "required": false, "description": "Filter by Mux asset ID", "name": "asset_id", "in": "query", "index$": 2 }, { "schema": { "type": "integer", "minimum": 1, "maximum": 100, "default": 25, "description": "Maximum number of jobs to return (default 25, max 100)" }, "required": false, "description": "Maximum number of jobs to return (default 25, max 100)", "name": "limit", "in": "query", "index$": 3 }, { "schema": { "type": "integer", "minimum": 1, "default": 1, "description": "Page number (default 1)" }, "required": false, "description": "Page number (default 1)", "name": "page", "in": "query", "index$": 4 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_job_ref01_data = Object.values(setup.data.existing.list_job)[0];
        // LIST
        const list_job_ref01_ent = client.ListJob();
        const list_job_ref01_match = {};
        const list_job_ref01_list = (await list_job_ref01_ent.list(list_job_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_job/ListJobTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_job01', 'list_job02', 'list_job03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_LIST_JOB_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_LIST_JOB_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_LIST_JOB_ENTID'];
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
//# sourceMappingURL=ListJobEntity.test.js.map