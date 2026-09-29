

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


describe('TranslateCaptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.TranslateCaption()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'translate_caption.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"sh":"Unix timestamp (seconds) when the job was created.","t":"`$INTEGER`","key$":"created_at","index$":0},"directive":{"a":true,"h":"Directive","n":"directive","r":true,"sh":"The directive run that dispatched this job.","t":"`$OBJECT`","key$":"directive","index$":1},"errors":{"a":true,"h":"Errors","n":"errors","r":false,"sh":"Error details.","t":"`$ARRAY`","key$":"errors","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique job identifier.","t":"`$STRING`","key$":"id","index$":3},"outputs":{"a":true,"h":"Outputs","n":"outputs","r":false,"sh":"Workflow results.","t":"`$OBJECT`","key$":"outputs","index$":4},"parameters":{"a":true,"h":"Parameters","n":"parameters","r":true,"t":"`$OBJECT`","key$":"parameters","index$":5},"passthrough":{"a":true,"h":"Passthrough","n":"passthrough","r":false,"sh":"Arbitrary string supplied at creation, returned as-is.","t":"`$STRING`","key$":"passthrough","index$":6},"resources":{"a":true,"h":"Resources","n":"resources","r":true,"sh":"Related Mux resources linked to this job.","t":"`$OBJECT`","key$":"resources","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current job status.","t":"`$STRING`","key$":"status","index$":8},"units_consumed":{"a":true,"h":"Units Consumed","n":"units_consumed","r":true,"sh":"Number of Mux AI units consumed by this job.","t":"`$INTEGER`","key$":"units_consumed","index$":9},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":true,"sh":"Unix timestamp (seconds) of the job's last state transition (e.g.","t":"`$INTEGER`","key$":"updated_at","index$":10},"workflow":{"a":true,"h":"Workflow","n":"workflow","r":true,"t":"`$STRING`","key$":"workflow","index$":11}},"id":{"field":"id","name":"id"},"name":"translate_caption","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /robots/v0/jobs/translate-captions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/robots/v0/jobs/translate-captions","q":{},"r":{},"s":[{"lit":"robots"},{"lit":"v0"},{"lit":"jobs"},{"lit":"translate-captions"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /robots/v0/jobs/translate-captions/{JOB_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"JOB_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/robots/v0/jobs/translate-captions/{JOB_ID}","q":{"exist":["id"]},"r":{"param":{"JOB_ID":"id"}},"s":[{"lit":"robots"},{"lit":"v0"},{"lit":"jobs"},{"lit":"translate-captions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"translate_caption","name__orig":"translate_caption","Name":"TranslateCaption","name_":"translate_caption","name-":"translate-caption","NAME":"TRANSLATE_CAPTION","index$":65}, {"active":true,"entity":"translate_caption","key$":"BasicTranslateCaptionFlow","kind":"basic","name":"BasicTranslateCaptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"translate_caption_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"translate_caption_ref01","srcdatavar":"translate_caption_ref01_data","suffix":"_dt0"},"m":{"id":"translate_caption01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-translate_caption_ref01"}}],"index$":1}]}, 'TranslateCaption', {"POST /robots/v0/jobs/translate-captions":{"protocol":"http","requestBody":{"description":"Caption translation parameters","content":{"application/json":{"schema":{"type":"object","properties":{"passthrough":{"type":"string","description":"Arbitrary string stored with the job and returned in responses. Useful for correlating jobs with your own systems.","key$":"passthrough"},"parameters":{"type":"object","properties":{"asset_id":{"type":"string","minLength":1,"description":"The Mux asset ID of the video whose captions will be translated."},"track_id":{"type":"string","minLength":1,"description":"The Mux text track ID of the source caption track to translate. The asset must have a ready text track matching this ID or the request will be rejected."},"to_language_code":{"type":"string","minLength":1,"description":"BCP 47 language code for the translated output (e.g. \"es\", \"ja\"). Unless replace_existing_tracks allows replacement, the asset must not already have a text track for this language."},"upload_to_mux":{"type":"boolean","default":true,"description":"Whether to upload the translated VTT and attach it as a text track on the Mux asset. Defaults to true."},"never_translate":{"type":"array","items":{"type":"string","minLength":1,"maxLength":100},"minItems":1,"maxItems":100,"description":"Best-effort list of terms (brand names, proper nouns) to preserve verbatim in the translated captions. Does not guarantee exact output. Terms must not contain '<' or '>', invisible characters, or characters altered by Unicode normalization.","example":["Mux","Springfield"],"x-ref":"#/components/schemas/TranslateCaptionsNeverTranslateTerms"},"replace_existing_tracks":{"type":"string","enum":["fail","replace_all","replace_generated"],"description":"What to do when the asset already has a text track in the same language as, or with the same name as, the translated track. Defaults to `fail`, which rejects the request before any translation is billed. `replace_all` deletes every such track first. `replace_generated` deletes only Mux Video auto-generated tracks and rejects if an uploaded track is in the way. Any value other than `fail` requires `upload_to_mux` to be true. Existing tracks are matched by language ignoring region subtags, and by name ignoring case, in any status.","x-ref":"#/components/schemas/TranslateCaptionsReplaceExistingTracks"}},"required":["asset_id","track_id","to_language_code"],"example":{"asset_id":"mux_asset_123abc","track_id":"track_en_abc123","to_language_code":"es","upload_to_mux":true,"never_translate":["Mux"],"replace_existing_tracks":"fail"},"x-ref":"#/components/schemas/TranslateCaptionsJobParameters","key$":"parameters"}},"required":["parameters"],"x-ref":"#/components/schemas/CreateTranslateCaptionsJobRequest","index$":1},"example":{"parameters":{"asset_id":"mux_asset_123abc","track_id":"track_en_abc123","to_language_code":"es","upload_to_mux":true,"never_translate":["Mux"],"replace_existing_tracks":"fail"}}}}},"parameters":[]},"GET /robots/v0/jobs/translate-captions/{JOB_ID}":{"protocol":"http","parameters":[{"schema":{"type":"string","minLength":1,"maxLength":255},"required":true,"name":"JOB_ID","in":"path","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const translate_caption_ref01_ent = client.TranslateCaption()
    let translate_caption_ref01_data = setup.data.new.translate_caption['translate_caption_ref01']

    translate_caption_ref01_data = (await translate_caption_ref01_ent.create(translate_caption_ref01_data)).data()
    assert(null != translate_caption_ref01_data.id)


    // LOAD
    const translate_caption_ref01_match_dt0: any = {}
    translate_caption_ref01_match_dt0.id = translate_caption_ref01_data.id
    const translate_caption_ref01_data_dt0 = (await translate_caption_ref01_ent.load(translate_caption_ref01_match_dt0)).data()
    assert(translate_caption_ref01_data_dt0.id === translate_caption_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/translate_caption/TranslateCaptionTestData.json')

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
    ['translate_caption01','translate_caption02','translate_caption03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_TRANSLATE_CAPTION_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_TRANSLATE_CAPTION_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_TRANSLATE_CAPTION_ENTID']
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
  
