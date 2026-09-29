

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


describe('ListDimensionValueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.ListDimensionValue()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_dimension_value.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$ARRAY`","key$":"data","index$":0},"timeframe":{"a":true,"h":"Timeframe","n":"timeframe","r":true,"t":"`$ARRAY`","key$":"timeframe","index$":1},"total_count":{"a":true,"fo":"int64","h":"Total Count","n":"total_count","r":true,"t":"`$INTEGER`","key$":"total_count","index$":2},"total_row_count":{"a":true,"fo":"int64","h":"Total Row Count","n":"total_row_count","r":true,"t":"`$INTEGER`","key$":"total_row_count","index$":3},"value":{"a":true,"h":"Value","n":"value","r":true,"t":"`$STRING`","key$":"value","index$":4}},"name":"list_dimension_value","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/v1/dimensions/{DIMENSION_ID}/elements","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcd1234","k":"param","n":"dimension_id","or":"DIMENSION_ID","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filters[]","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"metric_filter","or":"metric_filters[]","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"order_direction","or":"order_direction","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"timeframe","or":"timeframe[]","r":false,"t":"`$ARRAY`","index$":6}]},"k":"http","m":"GET","o":"/data/v1/dimensions/{DIMENSION_ID}/elements","q":{"exist":["dimension_id","filter","limit","metric_filter","order_by","order_direction","page","timeframe"]},"r":{"param":{"DIMENSION_ID":"dimension_id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"dimensions"},{"var":"dimension_id"},{"lit":"elements"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /data/v1/dimensions","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/data/v1/dimensions","q":{},"r":{},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"dimensions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /data/v1/dimensions/{DIMENSION_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcd1234","k":"param","n":"dimension_id","or":"DIMENSION_ID","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filters[]","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"metric_filter","or":"metric_filters[]","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"timeframe","or":"timeframe[]","r":false,"t":"`$ARRAY`","index$":4}]},"k":"http","m":"GET","o":"/data/v1/dimensions/{DIMENSION_ID}","q":{"exist":["dimension_id","filter","limit","metric_filter","page","timeframe"]},"r":{"param":{"DIMENSION_ID":"dimension_id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"dimensions"},{"var":"dimension_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"list_dimension_value","name__orig":"list_dimension_value","Name":"ListDimensionValue","name_":"list_dimension_value","name-":"list-dimension-value","NAME":"LIST_DIMENSION_VALUE","index$":28}, {"active":true,"entity":"list_dimension_value","key$":"BasicListDimensionValueFlow","kind":"basic","name":"BasicListDimensionValueFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_dimension_value_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"list_dimension_value_ref01","srcdatavar":"list_dimension_value_ref01_data","suffix":"_dt0"},"m":{"id":"list_dimension_value01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-list_dimension_value_ref01"}}],"index$":1}]}, 'ListDimensionValue', {"GET /data/v1/dimensions/{DIMENSION_ID}/elements":{"protocol":"http","parameters":[{"name":"DIMENSION_ID","in":"path","description":"ID of the Dimension","required":true,"example":"abcd1234","schema":{"type":"string"},"x-ref":"#/components/parameters/dimension_id","index$":0},{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":25},"x-ref":"#/components/parameters/limit","index$":1},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":2},{"name":"filters[]","in":"query","description":"Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/filters","index$":3},{"name":"metric_filters[]","in":"query","description":"Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/metric_filters","index$":4},{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/timeframe","index$":5},{"name":"order_by","in":"query","description":"Value to order the results by","required":false,"schema":{"type":"string","enum":["negative_impact","value","views","field"]},"x-ref":"#/components/parameters/order_by","index$":6},{"name":"order_direction","in":"query","description":"Sort order.","required":false,"schema":{"type":"string","enum":["asc","desc"]},"x-ref":"#/components/parameters/order_direction","index$":7}]},"GET /data/v1/dimensions":{"protocol":"http","parameters":[]},"GET /data/v1/dimensions/{DIMENSION_ID}":{"protocol":"http","parameters":[{"name":"DIMENSION_ID","in":"path","description":"ID of the Dimension","required":true,"example":"abcd1234","schema":{"type":"string"},"x-ref":"#/components/parameters/dimension_id","index$":0},{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":25},"x-ref":"#/components/parameters/limit","index$":1},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":2},{"name":"filters[]","in":"query","description":"Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/filters","index$":3},{"name":"metric_filters[]","in":"query","description":"Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/metric_filters","index$":4},{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/timeframe","index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_dimension_value_ref01_data = Object.values(setup.data.existing.list_dimension_value)[0] as any

    // LIST
    const list_dimension_value_ref01_ent = client.ListDimensionValue()
    const list_dimension_value_ref01_match: any = {}

    const list_dimension_value_ref01_list = (await list_dimension_value_ref01_ent.list(list_dimension_value_ref01_match)).map((e: any) => e.data())



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_dimension_value/ListDimensionValueTestData.json')

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
    ['list_dimension_value01','list_dimension_value02','list_dimension_value03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_LIST_DIMENSION_VALUE_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_LIST_DIMENSION_VALUE_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_LIST_DIMENSION_VALUE_ENTID']
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
  
