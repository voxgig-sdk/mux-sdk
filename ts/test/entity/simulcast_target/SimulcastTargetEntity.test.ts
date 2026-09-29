

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


describe('SimulcastTargetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.SimulcastTarget()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'simulcast_target.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"error_severity":{"a":true,"h":"Error Severity","n":"error_severity","r":false,"sh":"The severity of the error encountered by the simulcast target.","t":"`$STRING`","key$":"error_severity","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"ID of the Simulcast Target","t":"`$STRING`","key$":"id","index$":1},"passthrough":{"a":true,"h":"Passthrough","n":"passthrough","r":false,"sh":"Arbitrary user-supplied metadata set when creating a simulcast target.","t":"`$STRING`","key$":"passthrough","index$":2},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The current status of the simulcast target.","t":"`$STRING`","key$":"status","index$":3},"stream_key":{"a":true,"h":"Stream Key","n":"stream_key","r":false,"sh":"Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to.","t":"`$STRING`","key$":"stream_key","index$":4},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The RTMP(s) or SRT endpoint for a simulcast destination.","t":"`$STRING`","key$":"url","index$":5}},"id":{"field":"id","name":"id"},"name":"simulcast_target","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"live_stream_id","or":"LIVE_STREAM_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets","q":{"exist":["live_stream_id"]},"r":{"param":{"LIVE_STREAM_ID":"live_stream_id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"live-streams"},{"var":"live_stream_id"},{"lit":"simulcast-targets"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"SIMULCAST_TARGET_ID","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"live_stream_id","or":"LIVE_STREAM_ID","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}","q":{"exist":["id","live_stream_id"]},"r":{"param":{"LIVE_STREAM_ID":"live_stream_id","SIMULCAST_TARGET_ID":"id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"live-streams"},{"var":"live_stream_id"},{"lit":"simulcast-targets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.live_stream"]]},"key$":"simulcast_target","name__orig":"simulcast_target","Name":"SimulcastTarget","name_":"simulcast_target","name-":"simulcast-target","NAME":"SIMULCAST_TARGET","index$":58}, {"active":true,"entity":"simulcast_target","key$":"BasicSimulcastTargetFlow","kind":"basic","name":"BasicSimulcastTargetFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"simulcast_target_ref01"},"m":{"live_stream_id":"live_stream01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"simulcast_target_ref01","srcdatavar":"simulcast_target_ref01_data","suffix":"_dt0"},"m":{"id":"simulcast_target01","live_stream_id":"live_stream01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-simulcast_target_ref01"}}],"index$":1}]}, 'SimulcastTarget', {"POST /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["url"],"properties":{"passthrough":{"type":"string","description":"Arbitrary user-supplied metadata set by you when creating a simulcast target.","key$":"passthrough"},"stream_key":{"type":"string","description":"Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. Only used for RTMP(s) simulcast destinations.","key$":"stream_key"},"url":{"type":"string","description":"The RTMP(s) or SRT endpoint for a simulcast destination.\n* For RTMP(s) destinations, this should include the application name for the third party live streaming service, for example: `rtmp://live.example.com/app`.\n* For SRT destinations, this should be a fully formed SRT connection string, for example: `srt://srt-live.example.com:1234?streamid={stream_key}&passphrase={srt_passphrase}`.\n\nNote: SRT simulcast targets can only be used when an source is connected over SRT.\n","key$":"url"}},"x-ref":"#/components/schemas/CreateSimulcastTargetRequest","index$":1},"example":{"url":"rtmp://live.example.com/app","stream_key":"abcdefgh","passthrough":"Example"}}}},"parameters":[{"name":"LIVE_STREAM_ID","in":"path","description":"The live stream ID","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/livestream_id","index$":0}]},"GET /video/v1/live-streams/{LIVE_STREAM_ID}/simulcast-targets/{SIMULCAST_TARGET_ID}":{"protocol":"http","parameters":[{"name":"LIVE_STREAM_ID","in":"path","description":"The live stream ID","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/livestream_id","index$":0},{"name":"SIMULCAST_TARGET_ID","in":"path","description":"The ID of the simulcast target.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/simulcast_target_id","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const simulcast_target_ref01_ent = client.SimulcastTarget()
    let simulcast_target_ref01_data = setup.data.new.simulcast_target['simulcast_target_ref01']
    simulcast_target_ref01_data['live_stream_id'] = setup.idmap['live_stream01']

    simulcast_target_ref01_data = (await simulcast_target_ref01_ent.create(simulcast_target_ref01_data)).data()
    assert(null != simulcast_target_ref01_data.id)


    // LOAD
    const simulcast_target_ref01_match_dt0: any = {}
    simulcast_target_ref01_match_dt0.id = simulcast_target_ref01_data.id
    const simulcast_target_ref01_data_dt0 = (await simulcast_target_ref01_ent.load(simulcast_target_ref01_match_dt0)).data()
    assert(simulcast_target_ref01_data_dt0.id === simulcast_target_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/simulcast_target/SimulcastTargetTestData.json')

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
    ['simulcast_target01','simulcast_target02','simulcast_target03','live_stream01','live_stream02','live_stream03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_SIMULCAST_TARGET_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_SIMULCAST_TARGET_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_SIMULCAST_TARGET_ENTID']
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
  
