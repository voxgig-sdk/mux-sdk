

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


describe('ListSubviewBreakdownValueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.ListSubviewBreakdownValue()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_subview_breakdown_value.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"breakdown_value":{"a":true,"h":"Breakdown Value","n":"breakdown_value","r":true,"t":"`$STRING`","key$":"breakdown_value","index$":0},"metric_value":{"a":true,"fo":"double","h":"Metric Value","n":"metric_value","r":true,"t":"`$NUMBER`","key$":"metric_value","index$":1}},"name":"list_subview_breakdown_value","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"playing_time","k":"param","n":"subview_metric_id","or":"METRIC_ID","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"rendition","k":"param","n":"subview_type","or":"SUBVIEW_TYPE","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"filter","or":"filters[]","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"group_by","or":"group_by[]","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"timeframe","or":"timeframe[]","r":false,"t":"`$ARRAY`","index$":4}]},"k":"http","m":"GET","o":"/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown","q":{"exist":["filter","group_by","limit","page","subview_metric_id","subview_type","timeframe"]},"r":{"param":{"METRIC_ID":"subview_metric_id","SUBVIEW_TYPE":"subview_type"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"subview-metrics"},{"var":"subview_metric_id"},{"var":"subview_type"},{"lit":"breakdown"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_subview_breakdown_value","name__orig":"list_subview_breakdown_value","Name":"ListSubviewBreakdownValue","name_":"list_subview_breakdown_value","name-":"list-subview-breakdown-value","NAME":"LIST_SUBVIEW_BREAKDOWN_VALUE","index$":38}, {"active":true,"entity":"list_subview_breakdown_value","key$":"BasicListSubviewBreakdownValueFlow","kind":"basic","name":"BasicListSubviewBreakdownValueFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"subview_metric_id":"subview_metric01","subview_type":"subview_type01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_subview_breakdown_value_ref01"}}],"index$":0}]}, 'ListSubviewBreakdownValue', {"GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/breakdown":{"protocol":"http","parameters":[{"name":"METRIC_ID","in":"path","description":"ID of the metric to compute over subviews. Additional metrics may be added over time.","required":true,"example":"playing_time","schema":{"type":"string","enum":["playing_time"]},"x-ref":"#/components/parameters/subview_metric_id","index$":0},{"name":"SUBVIEW_TYPE","in":"path","description":"The subview type to query.","required":true,"example":"rendition","schema":{"type":"string","enum":["rendition","playback_mode"]},"x-ref":"#/components/parameters/subview_type","index$":1},{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/timeframe","index$":2},{"name":"filters[]","in":"query","description":"Filter results using key:value pairs. Must be provided as an array query string parameter.\n\nThe set of filterable dimensions is distinct from the main Data API's dimensions, and depends on the subview type — see the List Subview Dimensions endpoint for the valid names.\n\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n* `filters[]=dimension:__empty__` - Include rows where the dimension has no value\n\nExample: `filters[]=country:US`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/subview_filters","index$":3},{"name":"group_by[]","in":"query","description":"Subview attributes to group the results by. Must be provided as an array query string parameter. Currently only supported for the `rendition` subview type, as any combination of the 6 enum values below.\n\nIf omitted, defaults to grouping by every attribute available for the subview type.\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string","enum":["video_source_bitrate","video_source_width","video_source_height","video_source_fps","video_source_codec","video_source_rendition_name"]}},"x-ref":"#/components/parameters/subview_group_by","index$":4},{"name":"limit","in":"query","description":"Number of breakdown rows to include in the response.","required":false,"schema":{"type":"integer","format":"int32","default":25,"maximum":100},"x-ref":"#/components/parameters/subview_breakdown_limit","index$":5},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":6}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_subview_breakdown_value_ref01_data = Object.values(setup.data.existing.list_subview_breakdown_value)[0] as any

    // LIST
    const list_subview_breakdown_value_ref01_ent = client.ListSubviewBreakdownValue()
    const list_subview_breakdown_value_ref01_match: any = {}
    list_subview_breakdown_value_ref01_match['subview_metric_id'] = setup.idmap['subview_metric01']
    list_subview_breakdown_value_ref01_match['subview_type'] = setup.idmap['subview_type01']

    const list_subview_breakdown_value_ref01_list = (await list_subview_breakdown_value_ref01_ent.list(list_subview_breakdown_value_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_subview_breakdown_value/ListSubviewBreakdownValueTestData.json')

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
    ['list_subview_breakdown_value01','list_subview_breakdown_value02','list_subview_breakdown_value03','subview_metric01','subview_type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_LIST_SUBVIEW_BREAKDOWN_VALUE_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_LIST_SUBVIEW_BREAKDOWN_VALUE_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_LIST_SUBVIEW_BREAKDOWN_VALUE_ENTID']
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
  
