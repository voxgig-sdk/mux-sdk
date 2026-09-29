

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


describe('SignalLiveStreamCompleteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.SignalLiveStreamComplete()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'signal_live_stream_complete.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"signal_live_stream_complete","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /video/v1/live-streams/{LIVE_STREAM_ID}/complete","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"live_stream_id","or":"LIVE_STREAM_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/video/v1/live-streams/{LIVE_STREAM_ID}/complete","q":{"exist":["live_stream_id"]},"r":{"param":{"LIVE_STREAM_ID":"live_stream_id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"live-streams"},{"var":"live_stream_id"},{"lit":"complete"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.live_stream"]]},"key$":"signal_live_stream_complete","name__orig":"signal_live_stream_complete","Name":"SignalLiveStreamComplete","name_":"signal_live_stream_complete","name-":"signal-live-stream-complete","NAME":"SIGNAL_LIVE_STREAM_COMPLETE","index$":56}, {"active":true,"entity":"signal_live_stream_complete","key$":"BasicSignalLiveStreamCompleteFlow","kind":"basic","name":"BasicSignalLiveStreamCompleteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"signal_live_stream_complete_ref01","srcdatavar":"signal_live_stream_complete_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-signal_live_stream_complete_ref01"}}],"v":[],"index$":0}]}, 'SignalLiveStreamComplete', {"PUT /video/v1/live-streams/{LIVE_STREAM_ID}/complete":{"protocol":"http","parameters":[{"name":"LIVE_STREAM_ID","in":"path","description":"The live stream ID","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/livestream_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let signal_live_stream_complete_ref01_data = Object.values(setup.data.existing.signal_live_stream_complete)[0] as any

    // UPDATE
    const signal_live_stream_complete_ref01_ent = client.SignalLiveStreamComplete()
    const signal_live_stream_complete_ref01_data_up0: any = {}

    const signal_live_stream_complete_ref01_resdata_up0 = (await signal_live_stream_complete_ref01_ent.update(signal_live_stream_complete_ref01_data_up0)).data()
    assert(null != signal_live_stream_complete_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/signal_live_stream_complete/SignalLiveStreamCompleteTestData.json')

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
    ['signal_live_stream_complete01','signal_live_stream_complete02','signal_live_stream_complete03','live_stream01','live_stream02','live_stream03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_SIGNAL_LIVE_STREAM_COMPLETE_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_SIGNAL_LIVE_STREAM_COMPLETE_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_SIGNAL_LIVE_STREAM_COMPLETE_ENTID']
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
  
