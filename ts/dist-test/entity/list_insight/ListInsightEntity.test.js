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
(0, node_test_1.describe)('ListInsightEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MUX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MuxSDK.test();
        const ent = testsdk.ListInsight();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MUX_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_insight.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "filter_column": { "a": true, "h": "Filter Column", "n": "filter_column", "r": true, "t": "`$STRING`", "key$": "filter_column", "index$": 0 }, "filter_value": { "a": true, "h": "Filter Value", "n": "filter_value", "r": true, "t": "`$STRING`", "key$": "filter_value", "index$": 1 }, "metric": { "a": true, "fo": "double", "h": "Metric", "n": "metric", "r": true, "t": "`$NUMBER`", "key$": "metric", "index$": 2 }, "negative_impact_score": { "a": true, "fo": "float", "h": "Negative Impact Score", "n": "negative_impact_score", "r": true, "t": "`$NUMBER`", "key$": "negative_impact_score", "index$": 3 }, "total_playing_time": { "a": true, "fo": "int64", "h": "Total Playing Time", "n": "total_playing_time", "r": true, "t": "`$INTEGER`", "key$": "total_playing_time", "index$": 4 }, "total_views": { "a": true, "fo": "int64", "h": "Total Views", "n": "total_views", "r": true, "t": "`$INTEGER`", "key$": "total_views", "index$": 5 }, "total_watch_time": { "a": true, "fo": "int64", "h": "Total Watch Time", "n": "total_watch_time", "r": true, "t": "`$INTEGER`", "key$": "total_watch_time", "index$": 6 } }, "name": "list_insight", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /data/v1/metrics/{METRIC_ID}/insights", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "video_startup_time", "k": "param", "n": "metric_id", "or": "METRIC_ID", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "filter", "or": "filters[]", "r": false, "t": "`$ARRAY`", "index$": 0 }, { "a": true, "k": "query", "n": "measurement", "or": "measurement", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "metric_filter", "or": "metric_filters[]", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "k": "query", "n": "order_direction", "or": "order_direction", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "timeframe", "or": "timeframe[]", "r": false, "t": "`$ARRAY`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/data/v1/metrics/{METRIC_ID}/insights", "q": { "exist": ["filter", "measurement", "metric_filter", "metric_id", "order_direction", "timeframe"] }, "r": { "param": { "METRIC_ID": "metric_id" } }, "s": [{ "lit": "data" }, { "lit": "v1" }, { "lit": "metrics" }, { "var": "metric_id" }, { "lit": "insights" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "list_insight", "name__orig": "list_insight", "Name": "ListInsight", "name_": "list_insight", "name-": "list-insight", "NAME": "LIST_INSIGHT", "index$": 32 }, { "active": true, "entity": "list_insight", "key$": "BasicListInsightFlow", "kind": "basic", "name": "BasicListInsightFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "metric_id": "metric01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_insight_ref01" } }], "index$": 0 }] }, 'ListInsight', { "GET /data/v1/metrics/{METRIC_ID}/insights": { "protocol": "http", "parameters": [{ "name": "METRIC_ID", "in": "path", "description": "ID of the Metric", "required": true, "example": "video_startup_time", "schema": { "type": "string", "enum": ["aggregate_startup_time", "downscale_percentage", "exits_before_video_start", "live_stream_latency", "max_downscale_percentage", "max_request_latency", "max_upscale_percentage", "page_load_time", "playback_failure_percentage", "playback_success_score", "player_startup_time", "playing_time", "rebuffer_count", "rebuffer_duration", "rebuffer_frequency", "rebuffer_percentage", "request_latency", "request_throughput", "rebuffer_score", "requests_for_first_preroll", "seek_latency", "startup_time_score", "unique_viewers", "upscale_percentage", "video_quality_score", "video_startup_preroll_load_time", "video_startup_preroll_request_time", "video_startup_time", "viewer_experience_score", "views", "weighted_average_bitrate", "video_startup_failure_percentage", "ad_attempt_count", "ad_break_count", "ad_break_error_count", "ad_break_error_percentage", "ad_error_count", "ad_error_percentage", "ad_exit_before_start_count", "ad_exit_before_start_percentage", "ad_impression_count", "ad_startup_error_count", "ad_startup_error_percentage", "playback_business_exception_percentage", "video_startup_business_exception_percentage", "view_content_startup_time", "ad_preroll_startup_time", "view_dropped_percentage", "rendition_change_count", "rendition_upshift_count", "rendition_downshift_count"] }, "x-ref": "#/components/parameters/metric_id", "index$": 0 }, { "name": "measurement", "in": "query", "description": "Measurement for the provided metric. If omitted, the default for the metric will be used.\nThe default measurement for each metric is:\n\"sum\" : `ad_attempt_count`, `ad_break_count`, `ad_break_error_count`, `ad_error_count`, `ad_impression_count`, `playing_time`\n\"median\" : `ad_preroll_startup_time`, `aggregate_startup_time`, `content_startup_time`, `max_downscale_percentage`, `max_upscale_percentage`, `page_load_time`, `player_average_live_latency`, `player_startup_time`, `rebuffer_count`, `rebuffer_duration`, `requests_for_first_preroll`, `video_startup_preroll_load_time`, `video_startup_preroll_request_time`, `video_startup_time`, `view_average_request_latency`, `view_average_request_throughput`, `view_max_request_latency`, `weighted_average_bitrate`\n\"avg\" : `ad_break_error_percentage`, `ad_error_percentage`, `ad_exit_before_start_count`, `ad_exit_before_start_percentage`, `ad_playback_failure_percentage`, `ad_startup_error_count`, `ad_startup_error_percentage`, `content_playback_failure_percentage`, `downscale_percentage`, `exits_before_video_start`, `playback_business_exception_percentage`, `playback_failure_percentage`, `playback_success_score`, `rebuffer_frequency`, `rebuffer_percentage`, `seek_latency`, `smoothness_score`, `startup_time_score`, `upscale_percentage`, `video_quality_score`, `video_startup_business_exception_percentage`, `video_startup_failure_percentage`, `view_dropped_percentage`, `viewer_experience_score`\n\"count\" : `started_views`, `unique_viewers`\n", "required": false, "schema": { "type": "string", "enum": ["95th", "median", "avg", "count", "sum"] }, "x-ref": "#/components/parameters/measurement", "index$": 1 }, { "name": "order_direction", "in": "query", "description": "Sort order.", "deprecated": true, "required": false, "schema": { "type": "string", "enum": ["asc", "desc"] }, "x-ref": "#/components/parameters/order_direction_deprecated", "index$": 2 }, { "name": "timeframe[]", "in": "query", "description": "Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/timeframe", "index$": 3 }, { "name": "filters[]", "in": "query", "description": "Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/filters", "index$": 4 }, { "name": "metric_filters[]", "in": "query", "description": "Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/metric_filters", "index$": 5 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_insight_ref01_data = Object.values(setup.data.existing.list_insight)[0];
        // LIST
        const list_insight_ref01_ent = client.ListInsight();
        const list_insight_ref01_match = {};
        list_insight_ref01_match['metric_id'] = setup.idmap['metric01'];
        const list_insight_ref01_list = (await list_insight_ref01_ent.list(list_insight_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_insight/ListInsightTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MuxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_insight01', 'list_insight02', 'list_insight03', 'metric01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MUX_TEST_LIST_INSIGHT_ENTID': idmap,
        'MUX_TEST_LIVE': 'FALSE',
        'MUX_TEST_EXPLAIN': 'FALSE',
        'MUX_APIKEY': '',
        'MUX_SECRET': '',
    });
    idmap = env['MUX_TEST_LIST_INSIGHT_ENTID'];
    const live = 'TRUE' === env.MUX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MUX_TEST_LIST_INSIGHT_ENTID'];
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
//# sourceMappingURL=ListInsightEntity.test.js.map