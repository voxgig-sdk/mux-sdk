

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


describe('ListAllMetricValueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.ListAllMetricValue()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_all_metric_value.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"ended_views":{"a":true,"fo":"int64","h":"Ended Views","n":"ended_views","r":false,"t":"`$INTEGER`","key$":"ended_views","index$":0},"items":{"a":true,"h":"Items","n":"items","r":false,"t":"`$ARRAY`","key$":"items","index$":1},"metric":{"a":true,"h":"Metric","n":"metric","r":false,"t":"`$STRING`","key$":"metric","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":3},"started_views":{"a":true,"fo":"int64","h":"Started Views","n":"started_views","r":false,"t":"`$INTEGER`","key$":"started_views","index$":4},"total_playing_time":{"a":true,"fo":"int64","h":"Total Playing Time","n":"total_playing_time","r":false,"t":"`$INTEGER`","key$":"total_playing_time","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":6},"unique_viewers":{"a":true,"fo":"int64","h":"Unique Viewers","n":"unique_viewers","r":false,"t":"`$INTEGER`","key$":"unique_viewers","index$":7},"value":{"a":true,"fo":"double","h":"Value","n":"value","r":false,"t":"`$NUMBER`","key$":"value","index$":8},"view_count":{"a":true,"fo":"int64","h":"View Count","n":"view_count","r":false,"t":"`$INTEGER`","key$":"view_count","index$":9},"watch_time":{"a":true,"fo":"int64","h":"Watch Time","n":"watch_time","r":false,"t":"`$INTEGER`","key$":"watch_time","index$":10}},"name":"list_all_metric_value","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/v1/metrics/comparison","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"dimension","or":"dimension","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"filter","or":"filters[]","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"metric_filter","or":"metric_filters[]","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"timeframe","or":"timeframe[]","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"value","or":"value","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/data/v1/metrics/comparison","q":{"exist":["dimension","filter","metric_filter","timeframe","value"]},"r":{},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"metrics"},{"lit":"comparison"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_all_metric_value","name__orig":"list_all_metric_value","Name":"ListAllMetricValue","name_":"list_all_metric_value","name-":"list-all-metric-value","NAME":"LIST_ALL_METRIC_VALUE","index$":25}, {"active":true,"entity":"list_all_metric_value","key$":"BasicListAllMetricValueFlow","kind":"basic","name":"BasicListAllMetricValueFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_all_metric_value_ref01"}}],"index$":0}]}, 'ListAllMetricValue', {"GET /data/v1/metrics/comparison":{"protocol":"http","parameters":[{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/timeframe","index$":0},{"name":"filters[]","in":"query","description":"Filter results using key:value pairs. Must be provided as an array query string parameter.\n\n**Basic filtering:**\n* `filters[]=dimension:value` - Include rows where dimension equals value\n* `filters[]=!dimension:value` - Exclude rows where dimension equals value\n\n**For trace dimensions (like video_cdn_trace):**\n* `filters[]=+dimension:value` - Include rows where trace contains value\n* `filters[]=-dimension:value` - Exclude rows where trace contains value\n* `filters[]=dimension:[value1,value2]` - Exact trace match\n\n**Examples:**\n* `filters[]=country:US` - US views only\n* `filters[]=+video_cdn_trace:fastly` - Views using Fastly CDN\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/filters","index$":1},{"name":"metric_filters[]","in":"query","description":"Limit the results to rows that match inequality conditions from provided metric comparison clauses. Must be provided as an array query string parameter.\n\nPossible filterable metrics are the same as the set of metric ids, with the exceptions of `exits_before_video_start`, `unique_viewers`, `video_startup_failure_percentage`, `view_dropped_percentage`, and `views`.\n\nExample:\n\n  * `metric_filters[]=aggregate_startup_time>=1000`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/metric_filters","index$":2},{"name":"dimension","in":"query","description":"Dimension the specified value belongs to","required":false,"schema":{"type":"string","enum":["asn","asset_id","browser","browser_version","cdn","continent_code","country","custom_1","custom_2","custom_3","custom_4","custom_5","custom_6","custom_7","custom_8","custom_9","custom_10","exit_before_video_start","experiment_name","live_stream_id","operating_system","operating_system_version","page_type","page_url","playback_failure","playback_business_exception","playback_id","player_autoplay","player_error_code","player_mux_plugin_name","player_mux_plugin_version","player_name","player_preload","player_remote_played","player_software","player_software_version","player_version","preroll_ad_asset_hostname","preroll_ad_tag_hostname","preroll_played","preroll_requested","region","source_hostname","source_type","stream_type","sub_property_id","video_content_type","video_encoding_variant","video_id","video_series","video_startup_failure","video_startup_business_exception","video_title","view_drm_type","view_has_ad","view_session_id","viewer_connection_type","viewer_device_category","viewer_device_manufacturer","viewer_device_model","viewer_device_name","viewer_user_id","ad_playback_failure","content_playback_failure","view_dropped","client_application_name","client_application_version","video_affiliate","viewer_plan","viewer_plan_status","viewer_plan_category","view_drm_level","video_brand","used_pip","time_shift_enabled","used_captions","video_codec","audio_codec","video_dynamic_range_type","view_cdn_edge_pop","view_cdn_origin","video_creator_id","video_cdn_trace"]},"x-ref":"#/components/parameters/dimension","index$":3},{"name":"value","in":"query","description":"Value to show all available metrics for","required":false,"schema":{"type":"string"},"x-ref":"#/components/parameters/value","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_all_metric_value_ref01_data = Object.values(setup.data.existing.list_all_metric_value)[0] as any

    // LIST
    const list_all_metric_value_ref01_ent = client.ListAllMetricValue()
    const list_all_metric_value_ref01_match: any = {}

    const list_all_metric_value_ref01_list = (await list_all_metric_value_ref01_ent.list(list_all_metric_value_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_all_metric_value/ListAllMetricValueTestData.json')

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
    ['list_all_metric_value01','list_all_metric_value02','list_all_metric_value03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_LIST_ALL_METRIC_VALUE_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_LIST_ALL_METRIC_VALUE_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_LIST_ALL_METRIC_VALUE_ENTID']
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
  
