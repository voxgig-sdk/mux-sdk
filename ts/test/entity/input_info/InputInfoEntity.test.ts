

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


describe('InputInfoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.InputInfo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'input_info.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"file":{"a":true,"h":"File","n":"file","r":false,"t":"`$OBJECT`","key$":"file","index$":0},"settings":{"a":true,"h":"Settings","n":"settings","r":false,"sh":"An array of objects that each describe an input file to be used to create the asset.","t":"`$OBJECT`","key$":"settings","index$":1}},"name":"input_info","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /video/v1/assets/{ASSET_ID}/input-info","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"asset_id","or":"ASSET_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/video/v1/assets/{ASSET_ID}/input-info","q":{"exist":["asset_id"]},"r":{"param":{"ASSET_ID":"asset_id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"assets"},{"var":"asset_id"},{"lit":"input-info"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.asset"]]},"key$":"input_info","name__orig":"input_info","Name":"InputInfo","name_":"input_info","name-":"input-info","NAME":"INPUT_INFO","index$":23}, {"active":true,"entity":"input_info","key$":"BasicInputInfoFlow","kind":"basic","name":"BasicInputInfoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"asset_id":"asset01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"input_info_ref01"}}],"index$":0}]}, 'InputInfo', {"GET /video/v1/assets/{ASSET_ID}/input-info":{"protocol":"http","parameters":[{"name":"ASSET_ID","in":"path","description":"The asset ID.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/asset_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let input_info_ref01_data = Object.values(setup.data.existing.input_info)[0] as any

    // LIST
    const input_info_ref01_ent = client.InputInfo()
    const input_info_ref01_match: any = {}
    input_info_ref01_match['asset_id'] = setup.idmap['asset01']

    const input_info_ref01_list = (await input_info_ref01_ent.list(input_info_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/input_info/InputInfoTestData.json')

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
    ['input_info01','input_info02','input_info03','asset01','asset02','asset03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_INPUT_INFO_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_INPUT_INFO_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_INPUT_INFO_ENTID']
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
  
