

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


describe('MonitoringBreakdownTimeseriesEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.MonitoringBreakdownTimeseries()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'monitoring_breakdown_timeseries.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"date":{"a":true,"h":"Date","n":"date","r":true,"t":"`$STRING`","key$":"date","index$":0},"values":{"a":true,"h":"Values","n":"values","r":true,"t":"`$ARRAY`","key$":"values","index$":1}},"name":"monitoring_breakdown_timeseries","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"current-concurrent-viewers","k":"param","n":"monitoring_metric_id","or":"MONITORING_METRIC_ID","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"dimension","or":"dimension","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"filter","or":"filters[]","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"order_direction","or":"order_direction","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"timeframe","or":"timeframe[]","r":false,"t":"`$ARRAY`","index$":5}]},"k":"http","m":"GET","o":"/data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries","q":{"exist":["dimension","filter","limit","monitoring_metric_id","order_by","order_direction","timeframe"]},"r":{"param":{"MONITORING_METRIC_ID":"monitoring_metric_id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"monitoring"},{"lit":"metrics"},{"var":"monitoring_metric_id"},{"lit":"breakdown-timeseries"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"monitoring_breakdown_timeseries","name__orig":"monitoring_breakdown_timeseries","Name":"MonitoringBreakdownTimeseries","name_":"monitoring_breakdown_timeseries","name-":"monitoring-breakdown-timeseries","NAME":"MONITORING_BREAKDOWN_TIMESERIES","index$":48}, {"active":true,"entity":"monitoring_breakdown_timeseries","key$":"BasicMonitoringBreakdownTimeseriesFlow","kind":"basic","name":"BasicMonitoringBreakdownTimeseriesFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"monitoring_metric_id":"monitoring_metric01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"monitoring_breakdown_timeseries_ref01"}}],"index$":0}]}, 'MonitoringBreakdownTimeseries', {"GET /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries":{"protocol":"http","parameters":[{"name":"MONITORING_METRIC_ID","in":"path","description":"ID of the Monitoring Metric","required":true,"example":"current-concurrent-viewers","schema":{"type":"string","enum":["current-concurrent-viewers","current-rebuffering-percentage","exits-before-video-start","playback-failure-percentage","current-average-bitrate","video-startup-failure-percentage"]},"x-ref":"#/components/parameters/monitoring_metric_id","index$":0},{"name":"dimension","in":"query","description":"Dimension the specified value belongs to","required":false,"schema":{"type":"string","enum":["asn","cdn","country","operating_system","player_name","region","stream_type","sub_property_id","video_series","video_title","view_has_ad"]},"x-ref":"#/components/parameters/monitoring_dimension","index$":1},{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nThe default for this is the last 60 seconds of available data. Timeframes larger than 10 minutes are not allowed, and must be within the last 24 hours.\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/monitoring_timeseries_timeframe","index$":2},{"name":"filters[]","in":"query","description":"Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/monitoring_filters","index$":3},{"name":"limit","in":"query","description":"Number of items to include in each timestamp's `value` list.\n\nThe default is 10, and the maximum is 100.\n","required":false,"schema":{"type":"integer","format":"int32","default":10},"x-ref":"#/components/parameters/monitoring_timeseries_limit","index$":4},{"name":"order_by","in":"query","description":"Value to order the results by","required":false,"schema":{"type":"string","enum":["negative_impact","value","views","field"]},"x-ref":"#/components/parameters/order_by","index$":5},{"name":"order_direction","in":"query","description":"Sort order.","required":false,"schema":{"type":"string","enum":["asc","desc"]},"x-ref":"#/components/parameters/order_direction","index$":6}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let monitoring_breakdown_timeseries_ref01_data = Object.values(setup.data.existing.monitoring_breakdown_timeseries)[0] as any

    // LIST
    const monitoring_breakdown_timeseries_ref01_ent = client.MonitoringBreakdownTimeseries()
    const monitoring_breakdown_timeseries_ref01_match: any = {}
    monitoring_breakdown_timeseries_ref01_match['monitoring_metric_id'] = setup.idmap['monitoring_metric01']

    const monitoring_breakdown_timeseries_ref01_list = (await monitoring_breakdown_timeseries_ref01_ent.list(monitoring_breakdown_timeseries_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/monitoring_breakdown_timeseries/MonitoringBreakdownTimeseriesTestData.json')

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
    ['monitoring_breakdown_timeseries01','monitoring_breakdown_timeseries02','monitoring_breakdown_timeseries03','monitoring_metric01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_MONITORING_BREAKDOWN_TIMESERIES_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_MONITORING_BREAKDOWN_TIMESERIES_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_MONITORING_BREAKDOWN_TIMESERIES_ENTID']
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
  
