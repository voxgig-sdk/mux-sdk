

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


describe('SigningKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.SigningKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'signing_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"int64","h":"Created At","n":"created_at","r":true,"sh":"Time at which the object was created.","t":"`$STRING`","key$":"created_at","index$":0},"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$OBJECT`","key$":"data","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the Signing Key.","t":"`$STRING`","key$":"id","index$":2},"private_key":{"a":true,"fo":"byte","h":"Private Key","n":"private_key","r":false,"sh":"A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/).","t":"`$STRING`","key$":"private_key","index$":3}},"id":{"field":"id","name":"id"},"name":"signing_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /system/v1/signing-keys","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/system/v1/signing-keys","q":{},"r":{},"s":[{"lit":"system"},{"lit":"v1"},{"lit":"signing-keys"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"POST /video/v1/signing-keys","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/video/v1/signing-keys","q":{},"r":{},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"signing-keys"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /system/v1/signing-keys","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/system/v1/signing-keys","q":{"exist":["limit","page"]},"r":{},"s":[{"lit":"system"},{"lit":"v1"},{"lit":"signing-keys"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /video/v1/signing-keys","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/video/v1/signing-keys","q":{"exist":["limit","page"]},"r":{},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"signing-keys"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /system/v1/signing-keys/{SIGNING_KEY_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"SIGNING_KEY_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/system/v1/signing-keys/{SIGNING_KEY_ID}","q":{"exist":["id"]},"r":{"param":{"SIGNING_KEY_ID":"id"}},"s":[{"lit":"system"},{"lit":"v1"},{"lit":"signing-keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /video/v1/signing-keys/{SIGNING_KEY_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"SIGNING_KEY_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/video/v1/signing-keys/{SIGNING_KEY_ID}","q":{"exist":["id"]},"r":{"param":{"SIGNING_KEY_ID":"id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"signing-keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /system/v1/signing-keys/{SIGNING_KEY_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"SIGNING_KEY_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/system/v1/signing-keys/{SIGNING_KEY_ID}","q":{"exist":["id"]},"r":{"param":{"SIGNING_KEY_ID":"id"}},"s":[{"lit":"system"},{"lit":"v1"},{"lit":"signing-keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"signing_key","name__orig":"signing_key","Name":"SigningKey","name_":"signing_key","name-":"signing-key","NAME":"SIGNING_KEY","index$":57}, {"active":true,"entity":"signing_key","key$":"BasicSigningKeyFlow","kind":"basic","name":"BasicSigningKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"signing_key_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"signing_key_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"signing_key_ref01","srcdatavar":"signing_key_ref01_data","suffix":"_dt0"},"m":{"id":"signing_key01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-signing_key_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"signing_key_ref01","suffix":"_rm0"},"m":{"id":"signing_key01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"signing_key_ref01"}}],"index$":4}]}, 'SigningKey', {"POST /system/v1/signing-keys":{"protocol":"http","parameters":[]},"POST /video/v1/signing-keys":{"protocol":"http","parameters":[]},"GET /system/v1/signing-keys":{"protocol":"http","parameters":[{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":25},"x-ref":"#/components/parameters/limit","index$":0},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":1}]},"GET /video/v1/signing-keys":{"protocol":"http","parameters":[{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":25},"x-ref":"#/components/parameters/limit","index$":0},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":1}]},"GET /system/v1/signing-keys/{SIGNING_KEY_ID}":{"protocol":"http","parameters":[{"name":"SIGNING_KEY_ID","in":"path","description":"The ID of the signing key.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/signing_key_id","index$":0}]},"GET /video/v1/signing-keys/{SIGNING_KEY_ID}":{"protocol":"http","parameters":[{"name":"SIGNING_KEY_ID","in":"path","description":"The ID of the signing key.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/signing_key_id","index$":0}]},"DELETE /system/v1/signing-keys/{SIGNING_KEY_ID}":{"protocol":"http","parameters":[{"name":"SIGNING_KEY_ID","in":"path","description":"The ID of the signing key.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/signing_key_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const signing_key_ref01_ent = client.SigningKey()
    let signing_key_ref01_data = setup.data.new.signing_key['signing_key_ref01']

    signing_key_ref01_data = (await signing_key_ref01_ent.create(signing_key_ref01_data)).data()
    assert(null != signing_key_ref01_data.id)


    // LIST
    const signing_key_ref01_match: any = {}

    const signing_key_ref01_list = (await signing_key_ref01_ent.list(signing_key_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(signing_key_ref01_list, { id: signing_key_ref01_data.id })))


    // LOAD
    const signing_key_ref01_match_dt0: any = {}
    signing_key_ref01_match_dt0.id = signing_key_ref01_data.id
    const signing_key_ref01_data_dt0 = (await signing_key_ref01_ent.load(signing_key_ref01_match_dt0)).data()
    assert(signing_key_ref01_data_dt0.id === signing_key_ref01_data.id)


    // REMOVE
    const signing_key_ref01_match_rm0: any = { id: signing_key_ref01_data.id }
    await signing_key_ref01_ent.remove(signing_key_ref01_match_rm0)
  

    // LIST
    const signing_key_ref01_match_rt0: any = {}

    const signing_key_ref01_list_rt0 = (await signing_key_ref01_ent.list(signing_key_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(signing_key_ref01_list_rt0, { id: signing_key_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/signing_key/SigningKeyTestData.json')

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
    ['signing_key01','signing_key02','signing_key03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_SIGNING_KEY_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_SIGNING_KEY_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_SIGNING_KEY_ENTID']
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
  
