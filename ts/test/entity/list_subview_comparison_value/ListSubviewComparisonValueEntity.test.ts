

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


describe('ListSubviewComparisonValueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.ListSubviewComparisonValue()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_subview_comparison_value.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"dimension_value":{"a":true,"h":"Dimension Value","n":"dimension_value","r":true,"t":"`$STRING`","key$":"dimension_value","index$":0},"values":{"a":true,"h":"Values","n":"values","r":true,"t":"`$ARRAY`","key$":"values","index$":1}},"name":"list_subview_comparison_value","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/comparison","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"playing_time","k":"param","n":"subview_metric_id","or":"METRIC_ID","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"rendition","k":"param","n":"subview_type","or":"SUBVIEW_TYPE","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":10,"k":"query","n":"breakdown_value_limit","or":"breakdown_value_limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":"country","k":"query","n":"dimension","or":"dimension","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"filter","or":"filters[]","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"group_by","or":"group_by[]","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"timeframe","or":"timeframe[]","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"ex":["US","FR"],"k":"query","n":"value","or":"values[]","r":true,"t":"`$ARRAY`","index$":5}]},"k":"http","m":"GET","o":"/data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/comparison","q":{"exist":["breakdown_value_limit","dimension","filter","group_by","subview_metric_id","subview_type","timeframe","value"]},"r":{"param":{"METRIC_ID":"subview_metric_id","SUBVIEW_TYPE":"subview_type"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"subview-metrics"},{"var":"subview_metric_id"},{"var":"subview_type"},{"lit":"comparison"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_subview_comparison_value","name__orig":"list_subview_comparison_value","Name":"ListSubviewComparisonValue","name_":"list_subview_comparison_value","name-":"list-subview-comparison-value","NAME":"LIST_SUBVIEW_COMPARISON_VALUE","index$":39}, {"active":true,"entity":"list_subview_comparison_value","key$":"BasicListSubviewComparisonValueFlow","kind":"basic","name":"BasicListSubviewComparisonValueFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"subview_metric_id":"subview_metric01","subview_type":"subview_type01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_subview_comparison_value_ref01"}}],"index$":0}]}, 'ListSubviewComparisonValue', {"GET /data/v1/subview-metrics/{METRIC_ID}/{SUBVIEW_TYPE}/comparison":{"protocol":"http","parameters":[{"name":"METRIC_ID","in":"path","description":"ID of the metric to compute over subviews. Additional metrics may be added over time.","required":true,"example":"playing_time","schema":{"type":"string","enum":["playing_time"]},"x-ref":"#/components/parameters/subview_metric_id","index$":0},{"name":"SUBVIEW_TYPE","in":"path","description":"The subview type to query.","required":true,"example":"rendition","schema":{"type":"string","enum":["rendition","playback_mode"]},"x-ref":"#/components/parameters/subview_type","index$":1},{"name":"dimension","in":"query","description":"Name of the dimension to compare across. See the List Subview Dimensions endpoint for the valid values for a given subview type.","required":true,"example":"country","schema":{"type":"string"},"x-ref":"#/components/parameters/subview_comparison_dimension","index$":2},{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/timeframe","index$":3},{"name":"filters[]","in":"query","description":"Filter results using key:value pairs. Must be provided as an array query string parameter.\n\nThe set of filterable dimensions is distinct from the main Data API's dimensions, and depends on the subview type — see the List Subview Dimensions endpoint for the valid names.\n\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n* `filters[]=dimension:__empty__` - Include rows where the dimension has no value\n\nExample: `filters[]=country:US`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/subview_filters","index$":4},{"name":"values[]","in":"query","description":"The dimension values to compare, up to 4. Must be provided as an array query string parameter. Use `__empty__` to select subviews where the dimension has no value.\n\nExample: `values[]=US&values[]=FR`\n","required":true,"style":"form","explode":true,"example":["US","FR"],"schema":{"type":"array","maxItems":4,"items":{"type":"string"}},"x-ref":"#/components/parameters/subview_comparison_values","index$":5},{"name":"group_by[]","in":"query","description":"Subview attributes to group the results by. Must be provided as an array query string parameter. Currently only supported for the `rendition` subview type, as any combination of the 6 enum values below.\n\nIf omitted, defaults to grouping by every attribute available for the subview type.\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string","enum":["video_source_bitrate","video_source_width","video_source_height","video_source_fps","video_source_codec","video_source_rendition_name"]}},"x-ref":"#/components/parameters/subview_group_by","index$":6},{"name":"breakdown_value_limit","in":"query","description":"Number of breakdown rows to include per selected dimension value.","required":false,"schema":{"type":"integer","format":"int32","default":10,"maximum":100},"x-ref":"#/components/parameters/subview_breakdown_value_limit","index$":7}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_subview_comparison_value_ref01_data = Object.values(setup.data.existing.list_subview_comparison_value)[0] as any

    // LIST
    const list_subview_comparison_value_ref01_ent = client.ListSubviewComparisonValue()
    const list_subview_comparison_value_ref01_match: any = {}
    list_subview_comparison_value_ref01_match['subview_metric_id'] = setup.idmap['subview_metric01']
    list_subview_comparison_value_ref01_match['subview_type'] = setup.idmap['subview_type01']

    const list_subview_comparison_value_ref01_list = (await list_subview_comparison_value_ref01_ent.list(list_subview_comparison_value_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_subview_comparison_value/ListSubviewComparisonValueTestData.json')

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
    ['list_subview_comparison_value01','list_subview_comparison_value02','list_subview_comparison_value03','subview_metric01','subview_type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_LIST_SUBVIEW_COMPARISON_VALUE_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_LIST_SUBVIEW_COMPARISON_VALUE_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_LIST_SUBVIEW_COMPARISON_VALUE_ENTID']
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
  
