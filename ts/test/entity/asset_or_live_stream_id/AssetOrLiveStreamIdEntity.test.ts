

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


describe('AssetOrLiveStreamIdEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.AssetOrLiveStreamId()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'asset_or_live_stream_id.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The Playback ID used to retrieve the corresponding asset or the live stream ID","t":"`$STRING`","key$":"id","index$":0},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"Describes the Asset or LiveStream object associated with the playback ID.","t":"`$OBJECT`","key$":"object","index$":1},"policy":{"a":true,"h":"Policy","n":"policy","r":true,"sh":"* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`.","t":"`$STRING`","key$":"policy","index$":2}},"id":{"field":"id","name":"id"},"name":"asset_or_live_stream_id","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /video/v1/playback-ids/{PLAYBACK_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"playback_id","or":"playback_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/video/v1/playback-ids/{PLAYBACK_ID}","q":{"exist":["playback_id"]},"r":{"param":{"PLAYBACK_ID":"playback_id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"playback-ids"},{"var":"playback_id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"asset_or_live_stream_id","name__orig":"asset_or_live_stream_id","Name":"AssetOrLiveStreamId","name_":"asset_or_live_stream_id","name-":"asset-or-live-stream-id","NAME":"ASSET_OR_LIVE_STREAM_ID","index$":3}, {"active":true,"entity":"asset_or_live_stream_id","key$":"BasicAssetOrLiveStreamIdFlow","kind":"basic","name":"BasicAssetOrLiveStreamIdFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"asset_or_live_stream_id_ref01","srcdatavar":"asset_or_live_stream_id_ref01_data","suffix":"_dt0"},"m":{"id":"asset_or_live_stream_id01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-asset_or_live_stream_id_ref01"}}],"index$":0}]}, 'AssetOrLiveStreamId', {"GET /video/v1/playback-ids/{PLAYBACK_ID}":{"protocol":"http","parameters":[{"name":"PLAYBACK_ID","in":"path","description":"The asset or live stream's playback ID.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/playback_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let asset_or_live_stream_id_ref01_data = Object.values(setup.data.existing.asset_or_live_stream_id)[0] as any

    // LOAD
    const asset_or_live_stream_id_ref01_ent = client.AssetOrLiveStreamId()
    const asset_or_live_stream_id_ref01_match_dt0: any = {}
    asset_or_live_stream_id_ref01_match_dt0.id = asset_or_live_stream_id_ref01_data.id
    const asset_or_live_stream_id_ref01_data_dt0 = (await asset_or_live_stream_id_ref01_ent.load(asset_or_live_stream_id_ref01_match_dt0)).data()
    assert(asset_or_live_stream_id_ref01_data_dt0.id === asset_or_live_stream_id_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/asset_or_live_stream_id/AssetOrLiveStreamIdTestData.json')

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
    ['asset_or_live_stream_id01','asset_or_live_stream_id02','asset_or_live_stream_id03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_ASSET_OR_LIVE_STREAM_ID_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_ASSET_OR_LIVE_STREAM_ID_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_ASSET_OR_LIVE_STREAM_ID_ENTID']
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
  
