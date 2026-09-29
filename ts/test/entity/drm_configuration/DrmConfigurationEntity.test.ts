

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


describe('DrmConfigurationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.DrmConfiguration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'drm_configuration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the DRM Configuration.","t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"drm_configuration","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /video/v1/drm-configurations","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/video/v1/drm-configurations","q":{"exist":["limit","page"]},"r":{},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"drm-configurations"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /video/v1/drm-configurations/{DRM_CONFIGURATION_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"DRM_CONFIGURATION_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/video/v1/drm-configurations/{DRM_CONFIGURATION_ID}","q":{"exist":["id"]},"r":{"param":{"DRM_CONFIGURATION_ID":"id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"drm-configurations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"drm_configuration","name__orig":"drm_configuration","Name":"DrmConfiguration","name_":"drm_configuration","name-":"drm-configuration","NAME":"DRM_CONFIGURATION","index$":10}, {"active":true,"entity":"drm_configuration","key$":"BasicDrmConfigurationFlow","kind":"basic","name":"BasicDrmConfigurationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"drm_configuration_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"drm_configuration_ref01","srcdatavar":"drm_configuration_ref01_data","suffix":"_dt0"},"m":{"id":"drm_configuration01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-drm_configuration_ref01"}}],"index$":1}]}, 'DrmConfiguration', {"GET /video/v1/drm-configurations":{"protocol":"http","parameters":[{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":0},{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":25},"x-ref":"#/components/parameters/limit","index$":1}]},"GET /video/v1/drm-configurations/{DRM_CONFIGURATION_ID}":{"protocol":"http","parameters":[{"name":"DRM_CONFIGURATION_ID","in":"path","description":"The DRM Configuration ID.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/drm_configuration_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let drm_configuration_ref01_data = Object.values(setup.data.existing.drm_configuration)[0] as any

    // LIST
    const drm_configuration_ref01_ent = client.DrmConfiguration()
    const drm_configuration_ref01_match: any = {}

    const drm_configuration_ref01_list = (await drm_configuration_ref01_ent.list(drm_configuration_ref01_match)).map((e: any) => e.data())


    // LOAD
    const drm_configuration_ref01_match_dt0: any = {}
    drm_configuration_ref01_match_dt0.id = drm_configuration_ref01_data.id
    const drm_configuration_ref01_data_dt0 = (await drm_configuration_ref01_ent.load(drm_configuration_ref01_match_dt0)).data()
    assert(drm_configuration_ref01_data_dt0.id === drm_configuration_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/drm_configuration/DrmConfigurationTestData.json')

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
    ['drm_configuration01','drm_configuration02','drm_configuration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_DRM_CONFIGURATION_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_DRM_CONFIGURATION_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_DRM_CONFIGURATION_ENTID']
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
  
