

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


describe('GenerateTrackSubtitleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.GenerateTrackSubtitle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'generate_track_subtitle.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"generated_subtitles":{"a":true,"h":"Generated Subtitles","n":"generated_subtitles","r":true,"sh":"Generate subtitle tracks using automatic speech recognition with this configuration.","t":"`$ARRAY`","key$":"generated_subtitles","index$":0}},"name":"generate_track_subtitle","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"asset_id","or":"asset_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"track_id","or":"track_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles","q":{"exist":["asset_id","track_id"]},"r":{"param":{"ASSET_ID":"asset_id","TRACK_ID":"track_id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"assets"},{"var":"asset_id"},{"lit":"tracks"},{"var":"track_id"},{"lit":"generate-subtitles"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.asset"]]},"key$":"generate_track_subtitle","name__orig":"generate_track_subtitle","Name":"GenerateTrackSubtitle","name_":"generate_track_subtitle","name-":"generate-track-subtitle","NAME":"GENERATE_TRACK_SUBTITLE","index$":22}, {"active":true,"entity":"generate_track_subtitle","key$":"BasicGenerateTrackSubtitleFlow","kind":"basic","name":"BasicGenerateTrackSubtitleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"generate_track_subtitle_ref01"},"m":{"asset_id":"asset01","track_id":"track01"},"o":"create","s":[],"v":[],"index$":0}]}, 'GenerateTrackSubtitle', {"POST /video/v1/assets/{ASSET_ID}/tracks/{TRACK_ID}/generate-subtitles":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["generated_subtitles"],"properties":{"generated_subtitles":{"type":"array","items":{"type":"object","properties":{"name":{"description":"A name for this subtitle track.","type":"string"},"passthrough":{"description":"Arbitrary metadata set for the subtitle track. Max 255 characters.","type":"string"},"language_code":{"default":"en","description":"The language of the audio from which subtitles are generated. Selecting a language of \"auto\" will allow language detection to set the language code automatically.","enum":[],"type":"string"}},"x-ref":"#/components/schemas/AssetGeneratedSubtitleSettings"},"description":"Generate subtitle tracks using automatic speech recognition with this configuration.","key$":"generated_subtitles"}},"x-ref":"#/components/schemas/GenerateTrackSubtitlesRequest","index$":1},"example":{"generated_subtitles":[{"language_code":"en","name":"English (generated)","passthrough":"English (generated)"}]}}}},"parameters":[{"name":"ASSET_ID","in":"path","description":"The asset ID.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/asset_id","index$":0},{"name":"TRACK_ID","in":"path","description":"The ID of the track for an asset.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/track_id","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const generate_track_subtitle_ref01_ent = client.GenerateTrackSubtitle()
    let generate_track_subtitle_ref01_data = setup.data.new.generate_track_subtitle['generate_track_subtitle_ref01']
    generate_track_subtitle_ref01_data['asset_id'] = setup.idmap['asset01']
    generate_track_subtitle_ref01_data['track_id'] = setup.idmap['track01']

    generate_track_subtitle_ref01_data = (await generate_track_subtitle_ref01_ent.create(generate_track_subtitle_ref01_data)).data()
    assert(null != generate_track_subtitle_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/generate_track_subtitle/GenerateTrackSubtitleTestData.json')

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
    ['generate_track_subtitle01','generate_track_subtitle02','generate_track_subtitle03','asset01','asset02','asset03','track01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_GENERATE_TRACK_SUBTITLE_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_GENERATE_TRACK_SUBTITLE_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_GENERATE_TRACK_SUBTITLE_ENTID']
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
  
