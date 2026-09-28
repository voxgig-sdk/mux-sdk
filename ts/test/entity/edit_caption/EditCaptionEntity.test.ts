

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


describe('EditCaptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.EditCaption()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'edit_caption.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"sh":"Unix timestamp (seconds) when the job was created.","t":"`$INTEGER`","key$":"created_at","index$":0},"directive":{"a":true,"h":"Directive","n":"directive","r":true,"sh":"The directive run that dispatched this job.","t":"`$OBJECT`","key$":"directive","index$":1},"errors":{"a":true,"h":"Errors","n":"errors","r":false,"sh":"Error details.","t":"`$ARRAY`","key$":"errors","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique job identifier.","t":"`$STRING`","key$":"id","index$":3},"outputs":{"a":true,"h":"Outputs","n":"outputs","r":true,"sh":"Workflow results.","t":"`$OBJECT`","key$":"outputs","index$":4},"parameters":{"a":true,"h":"Parameters","n":"parameters","r":true,"t":"`$OBJECT`","key$":"parameters","index$":5},"passthrough":{"a":true,"h":"Passthrough","n":"passthrough","r":false,"sh":"Arbitrary string supplied at creation, returned as-is.","t":"`$STRING`","key$":"passthrough","index$":6},"resources":{"a":true,"h":"Resources","n":"resources","r":true,"sh":"Related Mux resources linked to this job.","t":"`$OBJECT`","key$":"resources","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current job status.","t":"`$STRING`","key$":"status","index$":8},"units_consumed":{"a":true,"h":"Units Consumed","n":"units_consumed","r":true,"sh":"Number of Mux AI units consumed by this job.","t":"`$INTEGER`","key$":"units_consumed","index$":9},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":true,"sh":"Unix timestamp (seconds) of the job's last state transition (e.g.","t":"`$INTEGER`","key$":"updated_at","index$":10},"workflow":{"a":true,"h":"Workflow","n":"workflow","r":true,"t":"`$STRING`","key$":"workflow","index$":11}},"id":{"field":"id","name":"id"},"name":"edit_caption","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /robots/v0/jobs/edit-captions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/robots/v0/jobs/edit-captions","q":{},"r":{},"s":[{"lit":"robots"},{"lit":"v0"},{"lit":"jobs"},{"lit":"edit-captions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /robots/v0/jobs/edit-captions/{JOB_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"job_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/robots/v0/jobs/edit-captions/{JOB_ID}","q":{"exist":["id"]},"r":{"param":{"JOB_ID":"id"}},"s":[{"lit":"robots"},{"lit":"v0"},{"lit":"jobs"},{"lit":"edit-captions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"edit_caption","name__orig":"edit_caption","Name":"EditCaption","name_":"edit_caption","name-":"edit-caption","NAME":"EDIT_CAPTION","index$":12}, {"active":true,"entity":"edit_caption","key$":"BasicEditCaptionFlow","kind":"basic","name":"BasicEditCaptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"edit_caption_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"edit_caption_ref01","srcdatavar":"edit_caption_ref01_data","suffix":"_dt0"},"m":{"id":"edit_caption01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-edit_caption_ref01"}}],"index$":1}]}, 'EditCaption', {"POST /robots/v0/jobs/edit-captions":{"protocol":"http","requestBody":{"description":"Caption editing parameters","content":{"application/json":{"schema":{"type":"object","properties":{"passthrough":{"type":"string","description":"Arbitrary string stored with the job and returned in responses. Useful for correlating jobs with your own systems.","key$":"passthrough"},"parameters":{"type":"object","properties":{"asset_id":{"type":"string","minLength":1,"description":"The Mux asset ID whose existing text track should be edited."},"track_id":{"type":"string","minLength":1,"description":"The existing ready Mux text track ID to edit and optionally replace."},"auto_censor_profanity":{"type":"object","properties":{"detection_method":{},"mode":{},"always_censor":{},"never_censor":{}},"description":"Optional LLM-driven profanity detection and censorship rules applied to the selected caption track."},"replacements":{"type":"array","items":{"type":"object","properties":{},"required":[]},"description":"Optional static word or phrase replacements applied directly to cue text."},"speaker_replacements":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/EditCaptionsSpeakerReplacement"},"description":"Optional replacements for bracketed speaker labels at the start of caption cues. Values omit the surrounding square brackets, and matching spoken text is not changed."},"upload_to_mux":{"type":"boolean","default":true,"description":"Whether to upload the edited VTT back to the Mux asset as a new text track. Defaults to true."},"delete_original_track":{"type":"boolean","default":true,"description":"Whether to delete the original source text track after the edited track upload succeeds. Has effect only when upload_to_mux is true. Defaults to true."},"track_name_suffix":{"type":"string","minLength":1,"description":"Optional suffix appended to the uploaded replacement track name. Defaults to \"edited\"."}},"required":["asset_id","track_id"],"example":{"asset_id":"mux_asset_123abc","track_id":"text_track_456def","replacements":[{"find":"Mucks","replace":"Mux","case_sensitive":true},{"find":"gonna","replace":"going to"}],"speaker_replacements":[{"find":"speaker_0","replace":"Alice"}],"upload_to_mux":true,"delete_original_track":true},"x-ref":"#/components/schemas/EditCaptionsJobParameters","key$":"parameters"}},"required":["parameters"],"x-ref":"#/components/schemas/CreateEditCaptionsJobRequest","index$":1},"example":{"parameters":{"asset_id":"mux_asset_123abc","track_id":"text_track_456def","replacements":[{"find":"Mucks","replace":"Mux","case_sensitive":true},{"find":"gonna","replace":"going to"}],"speaker_replacements":[{"find":"speaker_0","replace":"Alice"}],"upload_to_mux":true,"delete_original_track":true}}}}},"parameters":[]},"GET /robots/v0/jobs/edit-captions/{JOB_ID}":{"protocol":"http","parameters":[{"schema":{"type":"string","minLength":1,"maxLength":255},"required":true,"name":"JOB_ID","in":"path","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const edit_caption_ref01_ent = client.EditCaption()
    let edit_caption_ref01_data = setup.data.new.edit_caption['edit_caption_ref01']

    edit_caption_ref01_data = (await edit_caption_ref01_ent.create(edit_caption_ref01_data)).data()
    assert(null != edit_caption_ref01_data.id)


    // LOAD
    const edit_caption_ref01_match_dt0: any = {}
    edit_caption_ref01_match_dt0.id = edit_caption_ref01_data.id
    const edit_caption_ref01_data_dt0 = (await edit_caption_ref01_ent.load(edit_caption_ref01_match_dt0)).data()
    assert(edit_caption_ref01_data_dt0.id === edit_caption_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/edit_caption/EditCaptionTestData.json')

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
    ['edit_caption01','edit_caption02','edit_caption03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_EDIT_CAPTION_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_EDIT_CAPTION_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_EDIT_CAPTION_ENTID']
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
  
