

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


describe('ListLiveStreamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.ListLiveStream()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_live_stream.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active_asset_id":{"a":true,"h":"Active Asset Id","n":"active_asset_id","r":false,"sh":"The Asset that is currently being created if there is an active broadcast.","t":"`$STRING`","key$":"active_asset_id","index$":0},"active_ingest_protocol":{"a":true,"h":"Active Ingest Protocol","n":"active_ingest_protocol","r":false,"sh":"The protocol used for the active ingest stream.","t":"`$STRING`","key$":"active_ingest_protocol","index$":1},"audio_only":{"a":true,"h":"Audio Only","n":"audio_only","r":false,"sh":"The live stream only processes the audio track if the value is set to true.","t":"`$BOOLEAN`","key$":"audio_only","index$":2},"created_at":{"a":true,"fo":"int64","h":"Created At","n":"created_at","r":true,"sh":"Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch).","t":"`$STRING`","key$":"created_at","index$":3},"embedded_subtitles":{"a":true,"h":"Embedded Subtitles","n":"embedded_subtitles","r":false,"sh":"Describes the embedded closed caption configuration of the incoming live stream.","t":"`$ARRAY`","key$":"embedded_subtitles","index$":4},"generated_subtitles":{"a":true,"h":"Generated Subtitles","n":"generated_subtitles","r":false,"sh":"Configure the incoming live stream to include subtitles created with automatic speech recognition.","t":"`$ARRAY`","key$":"generated_subtitles","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the Live Stream.","t":"`$STRING`","key$":"id","index$":6},"latency_mode":{"a":true,"h":"Latency Mode","n":"latency_mode","r":true,"sh":"Latency is the time from when the streamer transmits a frame of video to when you see it in the player.","t":"`$STRING`","key$":"latency_mode","index$":7},"low_latency":{"a":true,"de":true,"fo":"boolean","h":"Low Latency","n":"low_latency","r":false,"sh":"This field is deprecated.","t":"`$BOOLEAN`","key$":"low_latency","index$":8},"max_continuous_duration":{"a":true,"fo":"int32","h":"Max Continuous Duration","n":"max_continuous_duration","r":true,"sh":"The time in seconds a live stream may be continuously active before being disconnected.","t":"`$INTEGER`","key$":"max_continuous_duration","index$":9},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"sh":"Customer provided metadata about this live stream.","t":"`$OBJECT`","key$":"meta","index$":10},"new_asset_settings":{"a":true,"h":"New Asset Settings","n":"new_asset_settings","r":false,"t":"`$OBJECT`","key$":"new_asset_settings","index$":11},"passthrough":{"a":true,"h":"Passthrough","n":"passthrough","r":false,"sh":"Arbitrary user-supplied metadata set for the asset.","t":"`$STRING`","key$":"passthrough","index$":12},"playback_ids":{"a":true,"h":"Playback Ids","n":"playback_ids","r":false,"sh":"An array of Playback ID objects.","t":"`$ARRAY`","key$":"playback_ids","index$":13},"recent_asset_ids":{"a":true,"h":"Recent Asset Ids","n":"recent_asset_ids","r":false,"sh":"An array of strings with the most recent Asset IDs that were created from this Live Stream.","t":"`$ARRAY`","key$":"recent_asset_ids","index$":14},"reconnect_slate_url":{"a":true,"h":"Reconnect Slate Url","n":"reconnect_slate_url","r":false,"sh":"The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media.","t":"`$STRING`","key$":"reconnect_slate_url","index$":15},"reconnect_window":{"a":true,"fo":"float","h":"Reconnect Window","n":"reconnect_window","r":false,"sh":"When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live s…","t":"`$NUMBER`","key$":"reconnect_window","index$":16},"reduced_latency":{"a":true,"de":true,"fo":"boolean","h":"Reduced Latency","n":"reduced_latency","r":false,"sh":"This field is deprecated.","t":"`$BOOLEAN`","key$":"reduced_latency","index$":17},"simulcast_targets":{"a":true,"h":"Simulcast Targets","n":"simulcast_targets","r":false,"sh":"Each Simulcast Target contains configuration details to broadcast (or \"restream\") a live stream to a third-party streaming service.","t":"`$ARRAY`","key$":"simulcast_targets","index$":18},"srt_passphrase":{"a":true,"h":"Srt Passphrase","n":"srt_passphrase","r":false,"sh":"Unique key used for encrypting a stream to a Mux SRT endpoint.","t":"`$STRING`","key$":"srt_passphrase","index$":19},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"`idle` indicates that there is no active broadcast.","t":"`$STRING`","key$":"status","index$":20},"stream_key":{"a":true,"h":"Stream Key","n":"stream_key","r":true,"sh":"Unique key used for streaming to a Mux RTMP endpoint.","t":"`$STRING`","key$":"stream_key","index$":21},"test":{"a":true,"fo":"boolean","h":"Test","n":"test","r":false,"sh":"True means this live stream is a test live stream.","t":"`$BOOLEAN`","key$":"test","index$":22},"use_slate_for_standard_latency":{"a":true,"fo":"boolean","h":"Use Slate For Standard Latency","n":"use_slate_for_standard_latency","r":false,"sh":"By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux.","t":"`$BOOLEAN`","key$":"use_slate_for_standard_latency","index$":23}},"id":{"field":"id","name":"id"},"name":"list_live_stream","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /video/v1/live-streams","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"stream_key","or":"stream_key","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/video/v1/live-streams","q":{"exist":["limit","page","status","stream_key"]},"r":{},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"live-streams"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_live_stream","name__orig":"list_live_stream","Name":"ListLiveStream","name_":"list_live_stream","name-":"list-live-stream","NAME":"LIST_LIVE_STREAM","index$":41}, {"active":true,"entity":"list_live_stream","key$":"BasicListLiveStreamFlow","kind":"basic","name":"BasicListLiveStreamFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_live_stream_ref01"}}],"index$":0}]}, 'ListLiveStream', {"GET /video/v1/live-streams":{"protocol":"http","parameters":[{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":25},"x-ref":"#/components/parameters/limit","index$":0},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":1},{"name":"stream_key","in":"query","description":"Filter response to return live stream for this stream key only","required":false,"schema":{"type":"string"},"x-ref":"#/components/parameters/stream_key","index$":2},{"name":"status","in":"query","description":"Filter response to return live streams with the specified status only","required":false,"schema":{"type":"string","enum":["active","idle","disabled"],"description":"`idle` indicates that there is no active broadcast. `active` indicates that there is an active broadcast and `disabled` status indicates that no future RTMP streams can be published.","x-ref":"#/components/schemas/LiveStreamStatus"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_live_stream_ref01_data = Object.values(setup.data.existing.list_live_stream)[0] as any

    // LIST
    const list_live_stream_ref01_ent = client.ListLiveStream()
    const list_live_stream_ref01_match: any = {}

    const list_live_stream_ref01_list = (await list_live_stream_ref01_ent.list(list_live_stream_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_live_stream/ListLiveStreamTestData.json')

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
    ['list_live_stream01','list_live_stream02','list_live_stream03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_LIST_LIVE_STREAM_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_LIST_LIVE_STREAM_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_LIST_LIVE_STREAM_ENTID']
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
  
