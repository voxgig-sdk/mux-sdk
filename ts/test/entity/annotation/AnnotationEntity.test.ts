

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


describe('AnnotationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.Annotation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'annotation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"date":{"a":true,"fo":"date-time","h":"Date","n":"date","r":true,"sh":"Datetime when the annotation applies","t":"`$STRING`","key$":"date","index$":0},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"Unique identifier for the annotation","t":"`$STRING`","key$":"id","index$":1},"note":{"a":true,"h":"Note","n":"note","r":true,"sh":"The annotation note content","t":"`$STRING`","key$":"note","index$":2},"sub_property_id":{"a":true,"h":"Sub Property Id","n":"sub_property_id","r":false,"sh":"Customer-defined sub-property identifier","t":"`$STRING`","key$":"sub_property_id","index$":3}},"id":{"field":"id","name":"id"},"name":"annotation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /data/v1/annotations","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/data/v1/annotations","q":{},"r":{},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"annotations"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /data/v1/annotations/{ANNOTATION_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"annotation_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/data/v1/annotations/{ANNOTATION_ID}","q":{"exist":["id"]},"r":{"param":{"ANNOTATION_ID":"id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"annotations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /data/v1/annotations/{ANNOTATION_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"annotation_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/data/v1/annotations/{ANNOTATION_ID}","q":{"exist":["id"]},"r":{"param":{"ANNOTATION_ID":"id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"annotations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /data/v1/annotations/{ANNOTATION_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"annotation_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/data/v1/annotations/{ANNOTATION_ID}","q":{"exist":["id"]},"r":{"param":{"ANNOTATION_ID":"id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"annotations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"annotation","name__orig":"annotation","Name":"Annotation","name_":"annotation","name-":"annotation","NAME":"ANNOTATION","index$":0}, {"active":true,"entity":"annotation","key$":"BasicAnnotationFlow","kind":"basic","name":"BasicAnnotationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"annotation_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"annotation_ref01","srcdatavar":"annotation_ref01_data","suffix":"_up0","textfield":"date"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-annotation_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"annotation_ref01","srcdatavar":"annotation_ref01_data","suffix":"_dt0"},"m":{"id":"annotation01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-annotation_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"annotation_ref01","suffix":"_rm0"},"m":{"id":"annotation01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'Annotation', {"POST /data/v1/annotations":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["note","date"],"properties":{"note":{"type":"string","description":"The annotation note content","key$":"note"},"date":{"type":"integer","format":"int64","description":"Datetime when the annotation applies (Unix timestamp)","key$":"date"},"sub_property_id":{"type":"string","description":"Customer-defined sub-property identifier","key$":"sub_property_id"}},"x-ref":"#/components/schemas/AnnotationInput","index$":1},"example":{"note":"This is a note","date":1745438400,"sub_property_id":"123456"}}}},"parameters":[]},"GET /data/v1/annotations/{ANNOTATION_ID}":{"protocol":"http","parameters":[{"name":"ANNOTATION_ID","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The annotation ID","x-ref":"#/components/parameters/annotation_id","index$":0}]},"DELETE /data/v1/annotations/{ANNOTATION_ID}":{"protocol":"http","parameters":[{"name":"ANNOTATION_ID","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The annotation ID","x-ref":"#/components/parameters/annotation_id","index$":0}]},"PATCH /data/v1/annotations/{ANNOTATION_ID}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["note","date"],"properties":{"note":{"type":"string","description":"The annotation note content","key$":"note"},"date":{"type":"integer","format":"int64","description":"Datetime when the annotation applies (Unix timestamp)","key$":"date"},"sub_property_id":{"type":"string","description":"Customer-defined sub-property identifier","key$":"sub_property_id"}},"x-ref":"#/components/schemas/AnnotationInput","index$":1},"example":{"note":"This is a note","date":1745438400,"sub_property_id":"123456"}}}},"parameters":[{"name":"ANNOTATION_ID","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The annotation ID","x-ref":"#/components/parameters/annotation_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const annotation_ref01_ent = client.Annotation()
    let annotation_ref01_data = setup.data.new.annotation['annotation_ref01']

    annotation_ref01_data = (await annotation_ref01_ent.create(annotation_ref01_data)).data()
    assert(null != annotation_ref01_data.id)


    // UPDATE
    const annotation_ref01_data_up0: any = {}
    annotation_ref01_data_up0.id = annotation_ref01_data.id

    const annotation_ref01_markdef_up0 = { name: 'date', value: 'Mark01-annotation_ref01_' + setup.now }
    ;(annotation_ref01_data_up0 as any)[annotation_ref01_markdef_up0.name] = annotation_ref01_markdef_up0.value

    const annotation_ref01_resdata_up0 = (await annotation_ref01_ent.update(annotation_ref01_data_up0)).data()
    assert(annotation_ref01_resdata_up0.id === annotation_ref01_data_up0.id)

    assert((annotation_ref01_resdata_up0 as any)[annotation_ref01_markdef_up0.name] === annotation_ref01_markdef_up0.value)


    // LOAD
    const annotation_ref01_match_dt0: any = {}
    annotation_ref01_match_dt0.id = annotation_ref01_data.id
    const annotation_ref01_data_dt0 = (await annotation_ref01_ent.load(annotation_ref01_match_dt0)).data()
    assert(annotation_ref01_data_dt0.id === annotation_ref01_data.id)


    // REMOVE
    const annotation_ref01_match_rm0: any = { id: annotation_ref01_data.id }
    await annotation_ref01_ent.remove(annotation_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/annotation/AnnotationTestData.json')

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
    ['annotation01','annotation02','annotation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_ANNOTATION_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_ANNOTATION_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_ANNOTATION_ENTID']
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
  
