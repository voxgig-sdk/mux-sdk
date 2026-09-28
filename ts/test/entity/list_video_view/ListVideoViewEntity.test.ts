

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


describe('ListVideoViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.ListVideoView()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_video_view.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"country_code":{"a":true,"h":"Country Code","n":"country_code","r":true,"t":"`$STRING`","key$":"country_code","index$":0},"error_type_id":{"a":true,"fo":"int32","h":"Error Type Id","n":"error_type_id","r":true,"t":"`$INTEGER`","key$":"error_type_id","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":2},"playback_failure":{"a":true,"h":"Playback Failure","n":"playback_failure","r":true,"t":"`$BOOLEAN`","key$":"playback_failure","index$":3},"player_error_code":{"a":true,"h":"Player Error Code","n":"player_error_code","r":true,"t":"`$STRING`","key$":"player_error_code","index$":4},"player_error_message":{"a":true,"h":"Player Error Message","n":"player_error_message","r":true,"t":"`$STRING`","key$":"player_error_message","index$":5},"total_row_count":{"a":true,"fo":"int64","h":"Total Row Count","n":"total_row_count","r":true,"t":"`$INTEGER`","key$":"total_row_count","index$":6},"video_title":{"a":true,"h":"Video Title","n":"video_title","r":true,"t":"`$STRING`","key$":"video_title","index$":7},"view_end":{"a":true,"h":"View End","n":"view_end","r":true,"t":"`$STRING`","key$":"view_end","index$":8},"view_start":{"a":true,"h":"View Start","n":"view_start","r":true,"t":"`$STRING`","key$":"view_start","index$":9},"viewer_application_name":{"a":true,"h":"Viewer Application Name","n":"viewer_application_name","r":true,"t":"`$STRING`","key$":"viewer_application_name","index$":10},"viewer_experience_score":{"a":true,"fo":"float","h":"Viewer Experience Score","n":"viewer_experience_score","r":true,"t":"`$NUMBER`","key$":"viewer_experience_score","index$":11},"viewer_os_family":{"a":true,"h":"Viewer Os Family","n":"viewer_os_family","r":true,"t":"`$STRING`","key$":"viewer_os_family","index$":12},"watch_time":{"a":true,"fo":"int32","h":"Watch Time","n":"watch_time","r":true,"t":"`$INTEGER`","key$":"watch_time","index$":13}},"id":{"field":"id","name":"id"},"name":"list_video_view","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/v1/video-views","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"error_id","or":"error_id","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"metric_filter","or":"metric_filter","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"order_direction","or":"order_direction","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"timeframe","or":"timeframe","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"k":"query","n":"viewer_id","or":"viewer_id","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/data/v1/video-views","q":{"exist":["error_id","filter","limit","metric_filter","order_direction","page","timeframe","viewer_id"]},"r":{},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"video-views"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_video_view","name__orig":"list_video_view","Name":"ListVideoView","name_":"list_video_view","name-":"list-video-view","NAME":"LIST_VIDEO_VIEW","index$":56}, {"active":true,"entity":"list_video_view","key$":"BasicListVideoViewFlow","kind":"basic","name":"BasicListVideoViewFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_video_view_ref01"}}],"index$":0}]}, 'ListVideoView', {"GET /data/v1/video-views":{"protocol":"http","parameters":[{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":25},"x-ref":"#/components/parameters/limit","index$":0},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":1},{"name":"viewer_id","in":"query","description":"Viewer ID to filter results by. This value may be provided by the integration, or may be created by Mux.","required":false,"schema":{"type":"string"},"x-ref":"#/components/parameters/viewer_id","index$":2},{"name":"error_id","in":"query","description":"Filter video views by the provided error ID (as returned in the error_type_id field in the list video views endpoint). If you provide any as the error ID, this will filter the results to those with any error.","required":false,"schema":{"type":"integer","format":"int32"},"x-ref":"#/components/parameters/error_id","index$":3},{"name":"order_direction","in":"query","description":"Sort order.","required":false,"schema":{"type":"string","enum":["asc","desc"]},"x-ref":"#/components/parameters/order_direction","index$":4},{"name":"filters[]","in":"query","description":"Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/filters","index$":5},{"name":"metric_filters[]","in":"query","description":"Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/metric_filters","index$":6},{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/timeframe","index$":7}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_video_view_ref01_data = Object.values(setup.data.existing.list_video_view)[0] as any

    // LIST
    const list_video_view_ref01_ent = client.ListVideoView()
    const list_video_view_ref01_match: any = {}

    const list_video_view_ref01_list = (await list_video_view_ref01_ent.list(list_video_view_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_video_view/ListVideoViewTestData.json')

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
    ['list_video_view01','list_video_view02','list_video_view03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_LIST_VIDEO_VIEW_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_LIST_VIDEO_VIEW_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_LIST_VIDEO_VIEW_ENTID']
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
  
