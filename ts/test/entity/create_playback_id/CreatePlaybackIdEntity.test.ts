

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


describe('CreatePlaybackIdEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.CreatePlaybackId()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_playback_id.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"drm_configuration_id":{"a":true,"h":"Drm Configuration Id","n":"drm_configuration_id","r":false,"sh":"The DRM configuration used by this playback ID.","t":"`$STRING`","key$":"drm_configuration_id","index$":0},"policy":{"a":true,"h":"Policy","n":"policy","r":false,"sh":"* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}` * `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`.","t":"`$STRING`","key$":"policy","index$":1}},"name":"create_playback_id","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /video/v1/assets/{ASSET_ID}/playback-ids","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"asset_id","or":"ASSET_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/video/v1/assets/{ASSET_ID}/playback-ids","q":{"exist":["asset_id"]},"r":{"param":{"ASSET_ID":"asset_id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"assets"},{"var":"asset_id"},{"lit":"playback-ids"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"POST /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"live_stream_id","or":"LIVE_STREAM_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids","q":{"exist":["live_stream_id"]},"r":{"param":{"LIVE_STREAM_ID":"live_stream_id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"live-streams"},{"var":"live_stream_id"},{"lit":"playback-ids"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.asset"],["$.main.kit.entity.live_stream"]]},"key$":"create_playback_id","name__orig":"create_playback_id","Name":"CreatePlaybackId","name_":"create_playback_id","name-":"create-playback-id","NAME":"CREATE_PLAYBACK_ID","index$":6}, {"active":true,"entity":"create_playback_id","key$":"BasicCreatePlaybackIdFlow","kind":"basic","name":"BasicCreatePlaybackIdFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_playback_id_ref01"},"m":{"live_stream_id":"live_stream01"},"o":"create","s":[],"v":[],"index$":0}]}, 'CreatePlaybackId', {"POST /video/v1/assets/{ASSET_ID}/playback-ids":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"policy":{"description":"* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}`\n\n* `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens.\n\n* `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).\n","enum":["public","signed","drm"],"type":"string","x-ref":"#/components/schemas/PlaybackPolicy","key$":"policy"},"drm_configuration_id":{"description":"The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.","type":"string","key$":"drm_configuration_id"}},"x-ref":"#/components/schemas/CreatePlaybackIDRequest","index$":1},"example":{"policy":"public"}}}},"parameters":[{"name":"ASSET_ID","in":"path","description":"The asset ID.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/asset_id","index$":0}]},"POST /video/v1/live-streams/{LIVE_STREAM_ID}/playback-ids":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"policy":{"description":"* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}`\n\n* `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens.\n\n* `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).\n","enum":["public","signed","drm"],"type":"string","x-ref":"#/components/schemas/PlaybackPolicy","key$":"policy"},"drm_configuration_id":{"description":"The DRM configuration used by this playback ID. Must only be set when `policy` is set to `drm`.","type":"string","key$":"drm_configuration_id"}},"x-ref":"#/components/schemas/CreatePlaybackIDRequest","index$":1},"example":{"policy":"signed"}}}},"parameters":[{"name":"LIVE_STREAM_ID","in":"path","description":"The live stream ID","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/livestream_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_playback_id_ref01_ent = client.CreatePlaybackId()
    let create_playback_id_ref01_data = setup.data.new.create_playback_id['create_playback_id_ref01']
    create_playback_id_ref01_data['live_stream_id'] = setup.idmap['live_stream01']

    create_playback_id_ref01_data = (await create_playback_id_ref01_ent.create(create_playback_id_ref01_data)).data()
    assert(null != create_playback_id_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/create_playback_id/CreatePlaybackIdTestData.json')

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
    ['create_playback_id01','create_playback_id02','create_playback_id03','asset01','asset02','asset03','live_stream01','live_stream02','live_stream03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_CREATE_PLAYBACK_ID_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_CREATE_PLAYBACK_ID_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_CREATE_PLAYBACK_ID_ENTID']
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
  
