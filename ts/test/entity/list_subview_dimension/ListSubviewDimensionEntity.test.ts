

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


describe('ListSubviewDimensionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.ListSubviewDimension()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_subview_dimension.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":0},"total_row_count":{"a":true,"fo":"int64","h":"Total Row Count","n":"total_row_count","r":true,"sh":"Always `null` for this endpoint, matching `GET /data/v1/dimensions`, which also never computes a row count.","t":"`$INTEGER`","key$":"total_row_count","index$":1}},"name":"list_subview_dimension","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"rendition","k":"param","n":"subview_type","or":"SUBVIEW_TYPE","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions","q":{"exist":["subview_type"]},"r":{"param":{"SUBVIEW_TYPE":"subview_type"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"subview-metrics"},{"var":"subview_type"},{"lit":"dimensions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"list_subview_dimension","name__orig":"list_subview_dimension","Name":"ListSubviewDimension","name_":"list_subview_dimension","name-":"list-subview-dimension","NAME":"LIST_SUBVIEW_DIMENSION","index$":40}, {"active":true,"entity":"list_subview_dimension","key$":"BasicListSubviewDimensionFlow","kind":"basic","name":"BasicListSubviewDimensionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"list_subview_dimension_ref01","srcdatavar":"list_subview_dimension_ref01_data","suffix":"_dt0"},"m":{"id":"list_subview_dimension01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-list_subview_dimension_ref01"}}],"index$":0}]}, 'ListSubviewDimension', {"GET /data/v1/subview-metrics/{SUBVIEW_TYPE}/dimensions":{"protocol":"http","parameters":[{"name":"SUBVIEW_TYPE","in":"path","description":"The subview type to query.","required":true,"example":"rendition","schema":{"type":"string","enum":["rendition","playback_mode"]},"x-ref":"#/components/parameters/subview_type","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_subview_dimension_ref01_data = Object.values(setup.data.existing.list_subview_dimension)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const list_subview_dimension_ref01_ent = client.ListSubviewDimension()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_subview_dimension/ListSubviewDimensionTestData.json')

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
    ['list_subview_dimension01','list_subview_dimension02','list_subview_dimension03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_LIST_SUBVIEW_DIMENSION_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_LIST_SUBVIEW_DIMENSION_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_LIST_SUBVIEW_DIMENSION_ENTID']
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
  
