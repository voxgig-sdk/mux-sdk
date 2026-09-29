

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


describe('FindSceneEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.FindScene()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'find_scene.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"sh":"Unix timestamp (seconds) when the job was created.","t":"`$INTEGER`","key$":"created_at","index$":0},"directive":{"a":true,"h":"Directive","n":"directive","r":true,"sh":"The directive run that dispatched this job.","t":"`$OBJECT`","key$":"directive","index$":1},"errors":{"a":true,"h":"Errors","n":"errors","r":false,"sh":"Error details.","t":"`$ARRAY`","key$":"errors","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique job identifier.","t":"`$STRING`","key$":"id","index$":3},"outputs":{"a":true,"h":"Outputs","n":"outputs","r":true,"sh":"Workflow results.","t":"`$OBJECT`","key$":"outputs","index$":4},"parameters":{"a":true,"h":"Parameters","n":"parameters","r":true,"t":"`$OBJECT`","key$":"parameters","index$":5},"passthrough":{"a":true,"h":"Passthrough","n":"passthrough","r":false,"sh":"Arbitrary string supplied at creation, returned as-is.","t":"`$STRING`","key$":"passthrough","index$":6},"resources":{"a":true,"h":"Resources","n":"resources","r":true,"sh":"Related Mux resources linked to this job.","t":"`$OBJECT`","key$":"resources","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current job status.","t":"`$STRING`","key$":"status","index$":8},"units_consumed":{"a":true,"h":"Units Consumed","n":"units_consumed","r":true,"sh":"Number of Mux AI units consumed by this job.","t":"`$INTEGER`","key$":"units_consumed","index$":9},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":true,"sh":"Unix timestamp (seconds) of the job's last state transition (e.g.","t":"`$INTEGER`","key$":"updated_at","index$":10},"workflow":{"a":true,"h":"Workflow","n":"workflow","r":true,"t":"`$STRING`","key$":"workflow","index$":11}},"id":{"field":"id","name":"id"},"name":"find_scene","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /robots/v0/jobs/find-scenes","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/robots/v0/jobs/find-scenes","q":{},"r":{},"s":[{"lit":"robots"},{"lit":"v0"},{"lit":"jobs"},{"lit":"find-scenes"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /robots/v0/jobs/find-scenes/{JOB_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"JOB_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/robots/v0/jobs/find-scenes/{JOB_ID}","q":{"exist":["id"]},"r":{"param":{"JOB_ID":"id"}},"s":[{"lit":"robots"},{"lit":"v0"},{"lit":"jobs"},{"lit":"find-scenes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"find_scene","name__orig":"find_scene","Name":"FindScene","name_":"find_scene","name-":"find-scene","NAME":"FIND_SCENE","index$":16}, {"active":true,"entity":"find_scene","key$":"BasicFindSceneFlow","kind":"basic","name":"BasicFindSceneFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"find_scene_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"find_scene_ref01","srcdatavar":"find_scene_ref01_data","suffix":"_dt0"},"m":{"id":"find_scene01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-find_scene_ref01"}}],"index$":1}]}, 'FindScene', {"POST /robots/v0/jobs/find-scenes":{"protocol":"http","requestBody":{"description":"Find scenes parameters","content":{"application/json":{"schema":{"type":"object","properties":{"passthrough":{"type":"string","description":"Arbitrary string stored with the job and returned in responses. Useful for correlating jobs with your own systems.","key$":"passthrough"},"parameters":{"type":"object","properties":{"asset_id":{"type":"string","minLength":1,"description":"The Mux asset ID of the video asset to segment into scenes. Audio-only assets are not supported."},"language_code":{"type":"string","minLength":1,"description":"Preferred transcript language code to analyze when a matching transcript track is available. Defaults to the first ready transcript track on the asset."},"min_scenes":{"type":"integer","exclusiveMinimum":0,"description":"Optional lower-bound hint for scene segmentation. When provided, the model should avoid collapsing clearly distinct beats below this count when the content supports more granular scene boundaries."},"min_scene_duration_ms":{"type":"integer","minimum":1000,"description":"Preferred minimum scene duration in milliseconds for scaffolded transcript chunking. Defaults to 15000."},"output_steering":{"type":"object","properties":{"scope":{},"segmentation_strategy":{},"title_style":{},"narration_detail":{},"audience":{},"brand_terms":{},"topic_taxonomy":{}},"description":"Curated output_steering controls for execution scope, segmentation strategy, title style, narration detail, audience, brand terms, and topic taxonomy. Scope is enforced; other controls guide model behavior but do not guarantee exact output.","x-ref":"#/components/schemas/FindScenesOutputSteering"}},"required":["asset_id"],"example":{"asset_id":"mux_asset_123abc","language_code":"en","min_scenes":4,"min_scene_duration_ms":15000,"output_steering":{"scope":{"start_time":30,"end_time":180},"segmentation_strategy":"editorial_beats","title_style":"descriptive","narration_detail":"balanced"}},"x-ref":"#/components/schemas/FindScenesJobParameters","key$":"parameters"}},"required":["parameters"],"x-ref":"#/components/schemas/CreateFindScenesJobRequest","index$":1},"example":{"parameters":{"asset_id":"mux_asset_123abc","language_code":"en","min_scenes":4,"min_scene_duration_ms":15000,"output_steering":{"scope":{"start_time":30,"end_time":180},"segmentation_strategy":"editorial_beats","title_style":"descriptive","narration_detail":"balanced"}}}}}},"parameters":[]},"GET /robots/v0/jobs/find-scenes/{JOB_ID}":{"protocol":"http","parameters":[{"schema":{"type":"string","minLength":1,"maxLength":255},"required":true,"name":"JOB_ID","in":"path","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const find_scene_ref01_ent = client.FindScene()
    let find_scene_ref01_data = setup.data.new.find_scene['find_scene_ref01']

    find_scene_ref01_data = (await find_scene_ref01_ent.create(find_scene_ref01_data)).data()
    assert(null != find_scene_ref01_data.id)


    // LOAD
    const find_scene_ref01_match_dt0: any = {}
    find_scene_ref01_match_dt0.id = find_scene_ref01_data.id
    const find_scene_ref01_data_dt0 = (await find_scene_ref01_ent.load(find_scene_ref01_match_dt0)).data()
    assert(find_scene_ref01_data_dt0.id === find_scene_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/find_scene/FindSceneTestData.json')

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
    ['find_scene01','find_scene02','find_scene03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_FIND_SCENE_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_FIND_SCENE_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_FIND_SCENE_ENTID']
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
  
