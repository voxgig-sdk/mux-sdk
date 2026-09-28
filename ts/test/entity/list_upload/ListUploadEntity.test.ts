

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


describe('ListUploadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.ListUpload()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_upload.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"asset_id":{"a":true,"h":"Asset Id","n":"asset_id","r":false,"sh":"Only set once the upload is in the `asset_created` state.","t":"`$STRING`","key$":"asset_id","index$":0},"cors_origin":{"a":true,"h":"Cors Origin","n":"cors_origin","r":true,"sh":"If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers.","t":"`$STRING`","key$":"cors_origin","index$":1},"error":{"a":true,"h":"Error","n":"error","r":false,"sh":"Only set if an error occurred during asset creation.","t":"`$OBJECT`","key$":"error","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the Direct Upload.","t":"`$STRING`","key$":"id","index$":3},"new_asset_settings":{"a":true,"h":"New Asset Settings","n":"new_asset_settings","r":false,"t":"`$OBJECT`","key$":"new_asset_settings","index$":4},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":5},"test":{"a":true,"fo":"boolean","h":"Test","n":"test","r":false,"sh":"Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset.","t":"`$BOOLEAN`","key$":"test","index$":6},"timeout":{"a":true,"fo":"int32","h":"Timeout","n":"timeout","r":true,"sh":"Max time in seconds for the signed upload URL to be valid.","t":"`$INTEGER`","key$":"timeout","index$":7},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"The URL to upload the associated source media to.","t":"`$STRING`","key$":"url","index$":8}},"id":{"field":"id","name":"id"},"name":"list_upload","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /video/v1/uploads","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/video/v1/uploads","q":{"exist":["limit","page"]},"r":{},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"uploads"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_upload","name__orig":"list_upload","Name":"ListUpload","name_":"list_upload","name-":"list-upload","NAME":"LIST_UPLOAD","index$":54}, {"active":true,"entity":"list_upload","key$":"BasicListUploadFlow","kind":"basic","name":"BasicListUploadFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_upload_ref01"}}],"index$":0}]}, 'ListUpload', {"GET /video/v1/uploads":{"protocol":"http","parameters":[{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":25},"x-ref":"#/components/parameters/limit","index$":0},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_upload_ref01_data = Object.values(setup.data.existing.list_upload)[0] as any

    // LIST
    const list_upload_ref01_ent = client.ListUpload()
    const list_upload_ref01_match: any = {}

    const list_upload_ref01_list = (await list_upload_ref01_ent.list(list_upload_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_upload/ListUploadTestData.json')

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
    ['list_upload01','list_upload02','list_upload03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_LIST_UPLOAD_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_LIST_UPLOAD_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_LIST_UPLOAD_ENTID']
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
  
