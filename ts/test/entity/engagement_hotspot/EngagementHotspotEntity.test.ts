

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


describe('EngagementHotspotEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.EngagementHotspot()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'engagement_hotspot.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":0},"timeframe":{"a":true,"h":"Timeframe","n":"timeframe","r":true,"t":"`$ARRAY`","key$":"timeframe","index$":1},"total_row_count":{"a":true,"fo":"int64","h":"Total Row Count","n":"total_row_count","r":true,"t":"`$INTEGER`","key$":"total_row_count","index$":2}},"name":"engagement_hotspot","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/v1/engagement/assets/{ASSET_ID}/hotspots","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy","k":"param","n":"asset_id","or":"asset_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"order_direction","or":"order_direction","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"timeframe","or":"timeframe","r":false,"t":"`$ARRAY`","index$":2}]},"k":"http","m":"GET","o":"/data/v1/engagement/assets/{ASSET_ID}/hotspots","q":{"exist":["asset_id","limit","order_direction","timeframe"]},"r":{"param":{"ASSET_ID":"asset_id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"engagement"},{"lit":"assets"},{"var":"asset_id"},{"lit":"hotspots"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /data/v1/engagement/playback-ids/{PLAYBACK_ID}/hotspots","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"nLp01dgPzELHV6101iHGXmS3Og7lEU01TUDb02kg2Z6mPRs","k":"param","n":"playback_id_id","or":"playback_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"order_direction","or":"order_direction","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"timeframe","or":"timeframe","r":false,"t":"`$ARRAY`","index$":2}]},"k":"http","m":"GET","o":"/data/v1/engagement/playback-ids/{PLAYBACK_ID}/hotspots","q":{"exist":["limit","order_direction","playback_id_id","timeframe"]},"r":{"param":{"PLAYBACK_ID":"playback_id_id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"engagement"},{"lit":"playback-ids"},{"var":"playback_id_id"},{"lit":"hotspots"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /data/v1/engagement/videos/{VIDEO_ID}/hotspots","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcd1234","k":"param","n":"video_id","or":"video_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"order_direction","or":"order_direction","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"timeframe","or":"timeframe","r":false,"t":"`$ARRAY`","index$":2}]},"k":"http","m":"GET","o":"/data/v1/engagement/videos/{VIDEO_ID}/hotspots","q":{"exist":["limit","order_direction","timeframe","video_id"]},"r":{"param":{"VIDEO_ID":"video_id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"engagement"},{"lit":"videos"},{"var":"video_id"},{"lit":"hotspots"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.asset"]]},"key$":"engagement_hotspot","name__orig":"engagement_hotspot","Name":"EngagementHotspot","name_":"engagement_hotspot","name-":"engagement-hotspot","NAME":"ENGAGEMENT_HOTSPOT","index$":14}, {"active":true,"entity":"engagement_hotspot","key$":"BasicEngagementHotspotFlow","kind":"basic","name":"BasicEngagementHotspotFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"video_id":"video01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"engagement_hotspot_ref01"}}],"index$":0}]}, 'EngagementHotspot', {"GET /data/v1/engagement/assets/{ASSET_ID}/hotspots":{"protocol":"http","parameters":[{"name":"ASSET_ID","in":"path","description":"ID of the Asset","required":true,"example":"rmp7fvw5lPD01l8PZ2aN74js84XrTWxHy","schema":{"type":"string"},"x-ref":"#/components/parameters/engagement_asset_id","index$":0},{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/timeframe","index$":1},{"name":"limit","in":"query","description":"Maximum number of hotspots to return. If omitted, all hotspots are returned.","required":false,"schema":{"type":"integer","format":"int32"},"x-ref":"#/components/parameters/hotspots_limit","index$":2},{"name":"order_direction","in":"query","description":"Sort order.","required":false,"schema":{"type":"string","enum":["asc","desc"]},"x-ref":"#/components/parameters/order_direction","index$":3}]},"GET /data/v1/engagement/playback-ids/{PLAYBACK_ID}/hotspots":{"protocol":"http","parameters":[{"name":"PLAYBACK_ID","in":"path","description":"A Playback ID for the asset.","required":true,"example":"nLp01dgPzELHV6101iHGXmS3Og7lEU01TUDb02kg2Z6mPRs","schema":{"type":"string"},"x-ref":"#/components/parameters/engagement_playback_id","index$":0},{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/timeframe","index$":1},{"name":"limit","in":"query","description":"Maximum number of hotspots to return. If omitted, all hotspots are returned.","required":false,"schema":{"type":"integer","format":"int32"},"x-ref":"#/components/parameters/hotspots_limit","index$":2},{"name":"order_direction","in":"query","description":"Sort order.","required":false,"schema":{"type":"string","enum":["asc","desc"]},"x-ref":"#/components/parameters/order_direction","index$":3}]},"GET /data/v1/engagement/videos/{VIDEO_ID}/hotspots":{"protocol":"http","parameters":[{"name":"VIDEO_ID","in":"path","description":"ID of the Video, as provided in the `video_id` metadata field when configuring the player.","required":true,"example":"abcd1234","schema":{"type":"string"},"x-ref":"#/components/parameters/engagement_video_id","index$":0},{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/timeframe","index$":1},{"name":"limit","in":"query","description":"Maximum number of hotspots to return. If omitted, all hotspots are returned.","required":false,"schema":{"type":"integer","format":"int32"},"x-ref":"#/components/parameters/hotspots_limit","index$":2},{"name":"order_direction","in":"query","description":"Sort order.","required":false,"schema":{"type":"string","enum":["asc","desc"]},"x-ref":"#/components/parameters/order_direction","index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let engagement_hotspot_ref01_data = Object.values(setup.data.existing.engagement_hotspot)[0] as any

    // LIST
    const engagement_hotspot_ref01_ent = client.EngagementHotspot()
    const engagement_hotspot_ref01_match: any = {}
    engagement_hotspot_ref01_match['video_id'] = setup.idmap['video01']

    const engagement_hotspot_ref01_list = (await engagement_hotspot_ref01_ent.list(engagement_hotspot_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/engagement_hotspot/EngagementHotspotTestData.json')

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
    ['engagement_hotspot01','engagement_hotspot02','engagement_hotspot03','asset01','asset02','asset03','video01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_ENGAGEMENT_HOTSPOT_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_ENGAGEMENT_HOTSPOT_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_ENGAGEMENT_HOTSPOT_ENTID']
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
  
