

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MuxSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('OverallEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.Overall()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'overall.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":0},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"t":"`$OBJECT`","key$":"meta","index$":1},"timeframe":{"a":true,"h":"Timeframe","n":"timeframe","r":true,"t":"`$ARRAY`","key$":"timeframe","index$":2},"total_row_count":{"a":true,"fo":"int64","h":"Total Row Count","n":"total_row_count","r":true,"t":"`$INTEGER`","key$":"total_row_count","index$":3}},"name":"overall","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/v1/metrics/{METRIC_ID}/overall","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"video_startup_time","k":"param","n":"metric_id","or":"metric_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"measurement","or":"measurement","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"metric_filter","or":"metric_filter","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"timeframe","or":"timeframe","r":false,"t":"`$ARRAY`","index$":3}]},"k":"http","m":"GET","o":"/data/v1/metrics/{METRIC_ID}/overall","q":{"exist":["filter","measurement","metric_filter","metric_id","timeframe"]},"r":{"param":{"METRIC_ID":"metric_id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"metrics"},{"var":"metric_id"},{"lit":"overall"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"overall","name__orig":"overall","Name":"Overall","name_":"overall","name-":"overall","NAME":"OVERALL","index$":67}, {"active":true,"entity":"overall","key$":"BasicOverallFlow","kind":"basic","name":"BasicOverallFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"metric_id":"metric01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"overall_ref01"}}],"index$":0}]}, 'Overall', {"GET /data/v1/metrics/{METRIC_ID}/overall":{"protocol":"http","parameters":[{"name":"METRIC_ID","in":"path","description":"ID of the Metric","required":true,"example":"video_startup_time","schema":{"type":"string","enum":["aggregate_startup_time","downscale_percentage","exits_before_video_start","live_stream_latency","max_downscale_percentage","max_request_latency","max_upscale_percentage","page_load_time","playback_failure_percentage","playback_success_score","player_startup_time","playing_time","rebuffer_count","rebuffer_duration","rebuffer_frequency","rebuffer_percentage","request_latency","request_throughput","rebuffer_score","requests_for_first_preroll","seek_latency","startup_time_score","unique_viewers","upscale_percentage","video_quality_score","video_startup_preroll_load_time","video_startup_preroll_request_time","video_startup_time","viewer_experience_score","views","weighted_average_bitrate","video_startup_failure_percentage","ad_attempt_count","ad_break_count","ad_break_error_count","ad_break_error_percentage","ad_error_count","ad_error_percentage","ad_exit_before_start_count","ad_exit_before_start_percentage","ad_impression_count","ad_startup_error_count","ad_startup_error_percentage","playback_business_exception_percentage","video_startup_business_exception_percentage","view_content_startup_time","ad_preroll_startup_time","view_dropped_percentage","rendition_change_count","rendition_upshift_count","rendition_downshift_count"]},"x-ref":"#/components/parameters/metric_id","index$":0},{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/timeframe","index$":1},{"name":"filters[]","in":"query","description":"Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/filters","index$":2},{"name":"metric_filters[]","in":"query","description":"Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/metric_filters","index$":3},{"name":"measurement","in":"query","description":"Measurement for the provided metric. If omitted, the default for the metric will be used.\nThe default measurement for each metric is:\n\"sum\" : `ad_attempt_count`, `ad_break_count`, `ad_break_error_count`, `ad_error_count`, `ad_impression_count`, `playing_time`\n\"median\" : `ad_preroll_startup_time`, `aggregate_startup_time`, `content_startup_time`, `max_downscale_percentage`, `max_upscale_percentage`, `page_load_time`, `player_average_live_latency`, `player_startup_time`, `rebuffer_count`, `rebuffer_duration`, `requests_for_first_preroll`, `video_startup_preroll_load_time`, `video_startup_preroll_request_time`, `video_startup_time`, `view_average_request_latency`, `view_average_request_throughput`, `view_max_request_latency`, `weighted_average_bitrate`\n\"avg\" : `ad_break_error_percentage`, `ad_error_percentage`, `ad_exit_before_start_count`, `ad_exit_before_start_percentage`, `ad_playback_failure_percentage`, `ad_startup_error_count`, `ad_startup_error_percentage`, `content_playback_failure_percentage`, `downscale_percentage`, `exits_before_video_start`, `playback_business_exception_percentage`, `playback_failure_percentage`, `playback_success_score`, `rebuffer_frequency`, `rebuffer_percentage`, `seek_latency`, `smoothness_score`, `startup_time_score`, `upscale_percentage`, `video_quality_score`, `video_startup_business_exception_percentage`, `video_startup_failure_percentage`, `view_dropped_percentage`, `viewer_experience_score`\n\"count\" : `started_views`, `unique_viewers`\n","required":false,"schema":{"type":"string","enum":["95th","median","avg","count","sum"]},"x-ref":"#/components/parameters/measurement","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let overall_ref01_data = Object.values(setup.data.existing.overall)[0] as any

    // LIST
    const overall_ref01_ent = client.Overall()
    const overall_ref01_match: any = {}
    overall_ref01_match['metric_id'] = setup.idmap['metric01']

    const overall_ref01_list = (await overall_ref01_ent.list(overall_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/overall/OverallTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MuxSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['overall01','overall02','overall03','metric01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_OVERALL_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_OVERALL_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_OVERALL_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MuxSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
