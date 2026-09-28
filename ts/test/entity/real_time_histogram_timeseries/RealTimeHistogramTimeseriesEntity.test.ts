

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


describe('RealTimeHistogramTimeseriesEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.RealTimeHistogramTimeseries()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'real_time_histogram_timeseries.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"average":{"a":true,"fo":"double","h":"Average","n":"average","r":true,"t":"`$NUMBER`","key$":"average","index$":0},"bucket_values":{"a":true,"h":"Bucket Values","n":"bucket_values","r":true,"t":"`$ARRAY`","key$":"bucket_values","index$":1},"max_percentage":{"a":true,"fo":"double","h":"Max Percentage","n":"max_percentage","r":true,"t":"`$NUMBER`","key$":"max_percentage","index$":2},"median":{"a":true,"fo":"double","h":"Median","n":"median","r":true,"t":"`$NUMBER`","key$":"median","index$":3},"p95":{"a":true,"fo":"double","h":"P95","n":"p95","r":true,"t":"`$NUMBER`","key$":"p95","index$":4},"sum":{"a":true,"fo":"int64","h":"Sum","n":"sum","r":true,"t":"`$INTEGER`","key$":"sum","index$":5},"timestamp":{"a":true,"h":"Timestamp","n":"timestamp","r":true,"t":"`$STRING`","key$":"timestamp","index$":6}},"name":"real_time_histogram_timeseries","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"video-startup-time","k":"param","n":"realtime_histogram_metric_id","or":"realtime_histogram_metric_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries","q":{"exist":["filter","realtime_histogram_metric_id"]},"r":{"param":{"REALTIME_HISTOGRAM_METRIC_ID":"realtime_histogram_metric_id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"realtime"},{"lit":"metrics"},{"var":"realtime_histogram_metric_id"},{"lit":"histogram-timeseries"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"real_time_histogram_timeseries","name__orig":"real_time_histogram_timeseries","Name":"RealTimeHistogramTimeseries","name_":"real_time_histogram_timeseries","name-":"real-time-histogram-timeseries","NAME":"REAL_TIME_HISTOGRAM_TIMESERIES","index$":70}, {"active":true,"entity":"real_time_histogram_timeseries","key$":"BasicRealTimeHistogramTimeseriesFlow","kind":"basic","name":"BasicRealTimeHistogramTimeseriesFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"realtime_histogram_metric_id":"realtime_histogram_metric01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"real_time_histogram_timeseries_ref01"}}],"index$":0}]}, 'RealTimeHistogramTimeseries', {"GET /data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries":{"protocol":"http","parameters":[{"name":"REALTIME_HISTOGRAM_METRIC_ID","in":"path","description":"ID of the Realtime Histogram Metric","required":true,"example":"video-startup-time","schema":{"type":"string","enum":["video-startup-time"]},"x-ref":"#/components/parameters/realtime_histogram_metric_id","index$":0},{"name":"filters[]","in":"query","description":"Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.\n\nTo exclude rows that match a certain condition, prepend a `!` character to the dimension.\n\nPossible filter names are the same as returned by the List Monitoring Dimensions endpoint.\n\nExample:\n\n  * `filters[]=operating_system:windows&filters[]=!country:US`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/monitoring_filters","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let real_time_histogram_timeseries_ref01_data = Object.values(setup.data.existing.real_time_histogram_timeseries)[0] as any

    // LIST
    const real_time_histogram_timeseries_ref01_ent = client.RealTimeHistogramTimeseries()
    const real_time_histogram_timeseries_ref01_match: any = {}
    real_time_histogram_timeseries_ref01_match['realtime_histogram_metric_id'] = setup.idmap['realtime_histogram_metric01']

    const real_time_histogram_timeseries_ref01_list = (await real_time_histogram_timeseries_ref01_ent.list(real_time_histogram_timeseries_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/real_time_histogram_timeseries/RealTimeHistogramTimeseriesTestData.json')

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
    ['real_time_histogram_timeseries01','real_time_histogram_timeseries02','real_time_histogram_timeseries03','realtime_histogram_metric01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_REAL_TIME_HISTOGRAM_TIMESERIES_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_REAL_TIME_HISTOGRAM_TIMESERIES_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_REAL_TIME_HISTOGRAM_TIMESERIES_ENTID']
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
  
