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
(0, node_test_1.describe)('ListRelatedIncidentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.ListRelatedIncident();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_related_incident.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "affected_views": { "a": true, "fo": "int64", "h": "Affected Views", "n": "affected_views", "r": true, "t": "`$INTEGER`", "key$": "affected_views", "index$": 0 }, "affected_views_per_hour": { "a": true, "fo": "int64", "h": "Affected Views Per Hour", "n": "affected_views_per_hour", "r": true, "t": "`$INTEGER`", "key$": "affected_views_per_hour", "index$": 1 }, "affected_views_per_hour_on_open": { "a": true, "fo": "int64", "h": "Affected Views Per Hour On Open", "n": "affected_views_per_hour_on_open", "r": true, "t": "`$INTEGER`", "key$": "affected_views_per_hour_on_open", "index$": 2 }, "breakdowns": { "a": true, "h": "Breakdowns", "n": "breakdowns", "r": true, "t": "`$ARRAY`", "key$": "breakdowns", "index$": 3 }, "description": { "a": true, "h": "Description", "n": "description", "r": true, "t": "`$STRING`", "key$": "description", "index$": 4 }, "error_description": { "a": true, "h": "Error Description", "n": "error_description", "r": true, "t": "`$STRING`", "key$": "error_description", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 6 }, "impact": { "a": true, "h": "Impact", "n": "impact", "r": true, "t": "`$STRING`", "key$": "impact", "index$": 7 }, "incident_key": { "a": true, "h": "Incident Key", "n": "incident_key", "r": true, "t": "`$STRING`", "key$": "incident_key", "index$": 8 }, "measured_value": { "a": true, "fo": "double", "h": "Measured Value", "n": "measured_value", "r": true, "t": "`$NUMBER`", "key$": "measured_value", "index$": 9 }, "measured_value_on_close": { "a": true, "fo": "double", "h": "Measured Value On Close", "n": "measured_value_on_close", "r": true, "t": "`$NUMBER`", "key$": "measured_value_on_close", "index$": 10 }, "measurement": { "a": true, "h": "Measurement", "n": "measurement", "r": true, "t": "`$STRING`", "key$": "measurement", "index$": 11 }, "notification_rules": { "a": true, "h": "Notification Rules", "n": "notification_rules", "r": true, "t": "`$ARRAY`", "key$": "notification_rules", "index$": 12 }, "notifications": { "a": true, "h": "Notifications", "n": "notifications", "r": true, "t": "`$ARRAY`", "key$": "notifications", "index$": 13 }, "resolved_at": { "a": true, "h": "Resolved At", "n": "resolved_at", "r": true, "t": "`$STRING`", "key$": "resolved_at", "index$": 14 }, "sample_size": { "a": true, "fo": "int64", "h": "Sample Size", "n": "sample_size", "r": true, "t": "`$INTEGER`", "key$": "sample_size", "index$": 15 }, "sample_size_unit": { "a": true, "h": "Sample Size Unit", "n": "sample_size_unit", "r": true, "t": "`$STRING`", "key$": "sample_size_unit", "index$": 16 }, "severity": { "a": true, "h": "Severity", "n": "severity", "r": true, "t": "`$STRING`", "key$": "severity", "index$": 17 }, "started_at": { "a": true, "h": "Started At", "n": "started_at", "r": true, "t": "`$STRING`", "key$": "started_at", "index$": 18 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 19 }, "threshold": { "a": true, "fo": "double", "h": "Threshold", "n": "threshold", "r": true, "t": "`$NUMBER`", "key$": "threshold", "index$": 20 } }, "id": { "field": "id", "name": "id" }, "name": "list_related_incident", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /data/v1/incidents/{INCIDENT_ID}/related", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcd1234", "k": "param", "n": "incident_id", "or": "incident_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 25, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "order_direction", "or": "order_direction", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/data/v1/incidents/{INCIDENT_ID}/related", "q": { "exist": ["incident_id", "limit", "order_by", "order_direction", "page"] }, "r": { "param": { "INCIDENT_ID": "incident_id" } }, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "incidents" }, { "var": "incident_id" }, { "lit": "related" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.incident"]] }, "key$": "list_related_incident", "name__orig": "list_related_incident", "Name": "ListRelatedIncident", "name_": "list_related_incident", "name-": "list-related-incident", "NAME": "LIST_RELATED_INCIDENT", "index$": 47 }, { "active": true, "entity": "list_related_incident", "key$": "BasicListRelatedIncidentFlow", "kind": "basic", "name": "BasicListRelatedIncidentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "incident_id": "incident01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_related_incident_ref01" } }], "index$": 0 }] }, 'ListRelatedIncident', { "GET /data/v1/incidents/{INCIDENT_ID}/related": { "protocol": "http", "parameters": [{ "name": "INCIDENT_ID", "in": "path", "description": "ID of the Incident", "required": true, "example": "abcd1234", "schema": { "type": "string" }, "x-ref": "#/components/parameters/incident_id", "index$": 0 }, { "name": "limit", "in": "query", "description": "Number of items to include in the response", "required": false, "schema": { "type": "integer", "format": "int32", "default": 25 }, "x-ref": "#/components/parameters/limit", "index$": 1 }, { "name": "page", "in": "query", "description": "Offset by this many pages, of the size of `limit`", "required": false, "schema": { "type": "integer", "format": "int32", "default": 1 }, "x-ref": "#/components/parameters/page", "index$": 2 }, { "name": "order_by", "in": "query", "description": "Value to order the results by", "required": false, "schema": { "type": "string", "enum": ["negative_impact", "value", "views", "field"] }, "x-ref": "#/components/parameters/order_by", "index$": 3 }, { "name": "order_direction", "in": "query", "description": "Sort order.", "required": false, "schema": { "type": "string", "enum": ["asc", "desc"] }, "x-ref": "#/components/parameters/order_direction", "index$": 4 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_related_incident_ref01_data = Object.values(setup.data.existing.list_related_incident)[0];
        // LIST
        const list_related_incident_ref01_ent = client.ListRelatedIncident();
        const list_related_incident_ref01_match = {};
        list_related_incident_ref01_match['incident_id'] = setup.idmap['incident01'];
        const list_related_incident_ref01_list = (await list_related_incident_ref01_ent.list(list_related_incident_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_related_incident/ListRelatedIncidentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_related_incident01', 'list_related_incident02', 'list_related_incident03', 'incident01', 'incident02', 'incident03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_LIST_RELATED_INCIDENT_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_LIST_RELATED_INCIDENT_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_LIST_RELATED_INCIDENT_ENTID'];
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
//# sourceMappingURL=ListRelatedIncidentEntity.test.js.map