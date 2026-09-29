

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


describe('WhoAmIEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.WhoAmI()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'who_am_i.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"access_token_name":{"a":true,"h":"Access Token Name","n":"access_token_name","r":true,"t":"`$STRING`","key$":"access_token_name","index$":0},"environment_id":{"a":true,"h":"Environment Id","n":"environment_id","r":true,"t":"`$STRING`","key$":"environment_id","index$":1},"environment_name":{"a":true,"h":"Environment Name","n":"environment_name","r":true,"t":"`$STRING`","key$":"environment_name","index$":2},"environment_type":{"a":true,"h":"Environment Type","n":"environment_type","r":true,"t":"`$STRING`","key$":"environment_type","index$":3},"organization_id":{"a":true,"h":"Organization Id","n":"organization_id","r":true,"t":"`$STRING`","key$":"organization_id","index$":4},"organization_name":{"a":true,"h":"Organization Name","n":"organization_name","r":true,"t":"`$STRING`","key$":"organization_name","index$":5},"permissions":{"a":true,"h":"Permissions","n":"permissions","r":true,"t":"`$ARRAY`","key$":"permissions","index$":6}},"name":"who_am_i","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /system/v1/whoami","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/system/v1/whoami","q":{},"r":{},"s":[{"lit":"system"},{"lit":"v1"},{"lit":"whoami"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"who_am_i","name__orig":"who_am_i","Name":"WhoAmI","name_":"who_am_i","name-":"who-am-i","NAME":"WHO_AM_I","index$":72}, {"active":true,"entity":"who_am_i","key$":"BasicWhoAmIFlow","kind":"basic","name":"BasicWhoAmIFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"who_am_i_ref01","srcdatavar":"who_am_i_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-who_am_i_ref01"}}],"index$":0}]}, 'WhoAmI', {"GET /system/v1/whoami":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let who_am_i_ref01_data = Object.values(setup.data.existing.who_am_i)[0] as any

    // LOAD
    const who_am_i_ref01_ent = client.WhoAmI()
    const who_am_i_ref01_match_dt0: any = {}
    const who_am_i_ref01_data_dt0 = (await who_am_i_ref01_ent.load(who_am_i_ref01_match_dt0)).data()
    assert(null != who_am_i_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/who_am_i/WhoAmITestData.json')

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
    ['who_am_i01','who_am_i02','who_am_i03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_WHO_AM_I_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_WHO_AM_I_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_WHO_AM_I_ENTID']
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
  
