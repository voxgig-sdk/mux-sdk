

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


describe('IncidentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.Incident()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'incident.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"affected_views":{"a":true,"fo":"int64","h":"Affected Views","n":"affected_views","r":true,"t":"`$INTEGER`","key$":"affected_views","index$":0},"affected_views_per_hour":{"a":true,"fo":"int64","h":"Affected Views Per Hour","n":"affected_views_per_hour","r":true,"t":"`$INTEGER`","key$":"affected_views_per_hour","index$":1},"affected_views_per_hour_on_open":{"a":true,"fo":"int64","h":"Affected Views Per Hour On Open","n":"affected_views_per_hour_on_open","r":true,"t":"`$INTEGER`","key$":"affected_views_per_hour_on_open","index$":2},"breakdowns":{"a":true,"h":"Breakdowns","n":"breakdowns","r":true,"t":"`$ARRAY`","key$":"breakdowns","index$":3},"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":4},"description":{"a":true,"h":"Description","n":"description","r":true,"t":"`$STRING`","key$":"description","index$":5},"error_description":{"a":true,"h":"Error Description","n":"error_description","r":true,"t":"`$STRING`","key$":"error_description","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":7},"impact":{"a":true,"h":"Impact","n":"impact","r":true,"t":"`$STRING`","key$":"impact","index$":8},"incident_key":{"a":true,"h":"Incident Key","n":"incident_key","r":true,"t":"`$STRING`","key$":"incident_key","index$":9},"measured_value":{"a":true,"fo":"double","h":"Measured Value","n":"measured_value","r":true,"t":"`$NUMBER`","key$":"measured_value","index$":10},"measured_value_on_close":{"a":true,"fo":"double","h":"Measured Value On Close","n":"measured_value_on_close","r":true,"t":"`$NUMBER`","key$":"measured_value_on_close","index$":11},"measurement":{"a":true,"h":"Measurement","n":"measurement","r":true,"t":"`$STRING`","key$":"measurement","index$":12},"notification_rules":{"a":true,"h":"Notification Rules","n":"notification_rules","r":true,"t":"`$ARRAY`","key$":"notification_rules","index$":13},"notifications":{"a":true,"h":"Notifications","n":"notifications","r":true,"t":"`$ARRAY`","key$":"notifications","index$":14},"resolved_at":{"a":true,"h":"Resolved At","n":"resolved_at","r":true,"t":"`$STRING`","key$":"resolved_at","index$":15},"sample_size":{"a":true,"fo":"int64","h":"Sample Size","n":"sample_size","r":true,"t":"`$INTEGER`","key$":"sample_size","index$":16},"sample_size_unit":{"a":true,"h":"Sample Size Unit","n":"sample_size_unit","r":true,"t":"`$STRING`","key$":"sample_size_unit","index$":17},"severity":{"a":true,"h":"Severity","n":"severity","r":true,"t":"`$STRING`","key$":"severity","index$":18},"started_at":{"a":true,"h":"Started At","n":"started_at","r":true,"t":"`$STRING`","key$":"started_at","index$":19},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":20},"threshold":{"a":true,"fo":"double","h":"Threshold","n":"threshold","r":true,"t":"`$NUMBER`","key$":"threshold","index$":21},"timeframe":{"a":true,"h":"Timeframe","n":"timeframe","r":true,"t":"`$ARRAY`","key$":"timeframe","index$":22},"total_row_count":{"a":true,"fo":"int64","h":"Total Row Count","n":"total_row_count","r":true,"t":"`$INTEGER`","key$":"total_row_count","index$":23}},"id":{"field":"id","name":"id"},"name":"incident","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/v1/incidents","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"order_direction","or":"order_direction","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"severity","or":"severity","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/data/v1/incidents","q":{"exist":["limit","order_by","order_direction","page","severity","status"]},"r":{},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"incidents"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /data/v1/incidents/{INCIDENT_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcd1234","k":"param","n":"id","or":"INCIDENT_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/data/v1/incidents/{INCIDENT_ID}","q":{"exist":["id"]},"r":{"param":{"INCIDENT_ID":"id"}},"s":[{"lit":"data"},{"lit":"v1"},{"lit":"incidents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"incident","name__orig":"incident","Name":"Incident","name_":"incident","name-":"incident","NAME":"INCIDENT","index$":22}, {"active":true,"entity":"incident","key$":"BasicIncidentFlow","kind":"basic","name":"BasicIncidentFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"incident_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"incident_ref01","srcdatavar":"incident_ref01_data","suffix":"_dt0"},"m":{"id":"incident01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-incident_ref01"}}],"index$":1}]}, 'Incident', {"GET /data/v1/incidents":{"protocol":"http","parameters":[{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":25},"x-ref":"#/components/parameters/limit","index$":0},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":1},{"name":"order_by","in":"query","description":"Value to order the results by","required":false,"schema":{"type":"string","enum":["negative_impact","value","views","field"]},"x-ref":"#/components/parameters/order_by","index$":2},{"name":"order_direction","in":"query","description":"Sort order.","required":false,"schema":{"type":"string","enum":["asc","desc"]},"x-ref":"#/components/parameters/order_direction","index$":3},{"name":"status","in":"query","description":"Status to filter incidents by","required":false,"schema":{"type":"string","enum":["open","closed","expired"]},"x-ref":"#/components/parameters/incident_status","index$":4},{"name":"severity","in":"query","description":"Severity to filter incidents by","required":false,"schema":{"type":"string","enum":["warning","alert"]},"x-ref":"#/components/parameters/severity","index$":5}]},"GET /data/v1/incidents/{INCIDENT_ID}":{"protocol":"http","parameters":[{"name":"INCIDENT_ID","in":"path","description":"ID of the Incident","required":true,"example":"abcd1234","schema":{"type":"string"},"x-ref":"#/components/parameters/incident_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let incident_ref01_data = Object.values(setup.data.existing.incident)[0] as any

    // LIST
    const incident_ref01_ent = client.Incident()
    const incident_ref01_match: any = {}

    const incident_ref01_list = (await incident_ref01_ent.list(incident_ref01_match)).map((e: any) => e.data())


    // LOAD
    const incident_ref01_match_dt0: any = {}
    incident_ref01_match_dt0.id = incident_ref01_data.id
    const incident_ref01_data_dt0 = (await incident_ref01_ent.load(incident_ref01_match_dt0)).data()
    assert(incident_ref01_data_dt0.id === incident_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/incident/IncidentTestData.json')

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
    ['incident01','incident02','incident03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_INCIDENT_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_INCIDENT_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_INCIDENT_ENTID']
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
  
