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
(0, node_test_1.describe)('AnnotationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.Annotation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'annotation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "date": { "a": true, "fo": "date-time", "h": "Date", "n": "date", "r": true, "sh": "Datetime when the annotation applies", "t": "`$STRING`", "key$": "date", "index$": 0 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the annotation", "t": "`$STRING`", "key$": "id", "index$": 1 }, "note": { "a": true, "h": "Note", "n": "note", "r": true, "sh": "The annotation note content", "t": "`$STRING`", "key$": "note", "index$": 2 }, "sub_property_id": { "a": true, "h": "Sub Property Id", "n": "sub_property_id", "r": false, "sh": "Customer-defined sub-property identifier", "t": "`$STRING`", "key$": "sub_property_id", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "annotation", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /data/v1/annotations", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/data/v1/annotations", "q": {}, "r": {}, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "annotations" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /data/v1/annotations", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 25, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "order_direction", "or": "order_direction", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "timeframe", "or": "timeframe[]", "r": false, "t": "`$ARRAY`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/data/v1/annotations", "q": { "exist": ["limit", "order_direction", "page", "timeframe"] }, "r": {}, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "annotations" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /data/v1/annotations/{ANNOTATION_ID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "ANNOTATION_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/data/v1/annotations/{ANNOTATION_ID}", "q": { "exist": ["id"] }, "r": { "param": { "ANNOTATION_ID": "id" } }, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "annotations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /data/v1/annotations/{ANNOTATION_ID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "ANNOTATION_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/data/v1/annotations/{ANNOTATION_ID}", "q": { "exist": ["id"] }, "r": { "param": { "ANNOTATION_ID": "id" } }, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "annotations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /data/v1/annotations/{ANNOTATION_ID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "ANNOTATION_ID", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/data/v1/annotations/{ANNOTATION_ID}", "q": { "exist": ["id"] }, "r": { "param": { "ANNOTATION_ID": "id" } }, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "annotations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "annotation", "name__orig": "annotation", "Name": "Annotation", "name_": "annotation", "name-": "annotation", "NAME": "ANNOTATION", "index$": 0 }, { "active": true, "entity": "annotation", "key$": "BasicAnnotationFlow", "kind": "basic", "name": "BasicAnnotationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "annotation_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "annotation_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "annotation_ref01", "srcdatavar": "annotation_ref01_data", "suffix": "_up0", "textfield": "date" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-annotation_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "annotation_ref01", "srcdatavar": "annotation_ref01_data", "suffix": "_dt0" }, "m": { "id": "annotation01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-annotation_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "annotation_ref01", "suffix": "_rm0" }, "m": { "id": "annotation01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "annotation_ref01" } }], "index$": 5 }] }, 'Annotation', { "POST /data/v1/annotations": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["note", "date"], "properties": { "note": { "type": "string", "description": "The annotation note content", "key$": "note" }, "date": { "type": "integer", "format": "int64", "description": "Datetime when the annotation applies (Unix timestamp)", "key$": "date" }, "sub_property_id": { "type": "string", "description": "Customer-defined sub-property identifier", "key$": "sub_property_id" } }, "x-ref": "#/components/schemas/AnnotationInput", "index$": 1 }, "example": { "note": "This is a note", "date": 1745438400, "sub_property_id": "123456" } } } }, "parameters": [] }, "GET /data/v1/annotations": { "protocol": "http", "parameters": [{ "name": "limit", "in": "query", "description": "Number of items to include in the response", "required": false, "schema": { "type": "integer", "format": "int32", "default": 25 }, "x-ref": "#/components/parameters/limit", "index$": 0 }, { "name": "page", "in": "query", "description": "Offset by this many pages, of the size of `limit`", "required": false, "schema": { "type": "integer", "format": "int32", "default": 1 }, "x-ref": "#/components/parameters/page", "index$": 1 }, { "name": "order_direction", "in": "query", "description": "Sort order.", "required": false, "schema": { "type": "string", "enum": ["asc", "desc"] }, "x-ref": "#/components/parameters/order_direction", "index$": 2 }, { "name": "timeframe[]", "in": "query", "description": "Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/timeframe", "index$": 3 }] }, "GET /data/v1/annotations/{ANNOTATION_ID}": { "protocol": "http", "parameters": [{ "name": "ANNOTATION_ID", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The annotation ID", "x-ref": "#/components/parameters/annotation_id", "index$": 0 }] }, "DELETE /data/v1/annotations/{ANNOTATION_ID}": { "protocol": "http", "parameters": [{ "name": "ANNOTATION_ID", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The annotation ID", "x-ref": "#/components/parameters/annotation_id", "index$": 0 }] }, "PATCH /data/v1/annotations/{ANNOTATION_ID}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["note", "date"], "properties": { "note": { "type": "string", "description": "The annotation note content", "key$": "note" }, "date": { "type": "integer", "format": "int64", "description": "Datetime when the annotation applies (Unix timestamp)", "key$": "date" }, "sub_property_id": { "type": "string", "description": "Customer-defined sub-property identifier", "key$": "sub_property_id" } }, "x-ref": "#/components/schemas/AnnotationInput", "index$": 1 }, "example": { "note": "This is a note", "date": 1745438400, "sub_property_id": "123456" } } } }, "parameters": [{ "name": "ANNOTATION_ID", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The annotation ID", "x-ref": "#/components/parameters/annotation_id", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const annotation_ref01_ent = client.Annotation();
        let annotation_ref01_data = setup.data.new.annotation['annotation_ref01'];
        annotation_ref01_data = (await annotation_ref01_ent.create(annotation_ref01_data)).data();
        (0, node_assert_1.default)(null != annotation_ref01_data.id);
        // LIST
        const annotation_ref01_match = {};
        const annotation_ref01_list = (await annotation_ref01_ent.list(annotation_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(annotation_ref01_list, { id: annotation_ref01_data.id })));
        // UPDATE
        const annotation_ref01_data_up0 = {};
        annotation_ref01_data_up0.id = annotation_ref01_data.id;
        const annotation_ref01_markdef_up0 = { name: 'date', value: 'Mark01-annotation_ref01_' + setup.now };
        annotation_ref01_data_up0[annotation_ref01_markdef_up0.name] = annotation_ref01_markdef_up0.value;
        const annotation_ref01_resdata_up0 = (await annotation_ref01_ent.update(annotation_ref01_data_up0)).data();
        (0, node_assert_1.default)(annotation_ref01_resdata_up0.id === annotation_ref01_data_up0.id);
        (0, node_assert_1.default)(annotation_ref01_resdata_up0[annotation_ref01_markdef_up0.name] === annotation_ref01_markdef_up0.value);
        // LOAD
        const annotation_ref01_match_dt0 = {};
        annotation_ref01_match_dt0.id = annotation_ref01_data.id;
        const annotation_ref01_data_dt0 = (await annotation_ref01_ent.load(annotation_ref01_match_dt0)).data();
        (0, node_assert_1.default)(annotation_ref01_data_dt0.id === annotation_ref01_data.id);
        // REMOVE
        const annotation_ref01_match_rm0 = { id: annotation_ref01_data.id };
        await annotation_ref01_ent.remove(annotation_ref01_match_rm0);
        // LIST
        const annotation_ref01_match_rt0 = {};
        const annotation_ref01_list_rt0 = (await annotation_ref01_ent.list(annotation_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(annotation_ref01_list_rt0, { id: annotation_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/annotation/AnnotationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['annotation01', 'annotation02', 'annotation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_ANNOTATION_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_ANNOTATION_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_ANNOTATION_ENTID'];
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
//# sourceMappingURL=AnnotationEntity.test.js.map