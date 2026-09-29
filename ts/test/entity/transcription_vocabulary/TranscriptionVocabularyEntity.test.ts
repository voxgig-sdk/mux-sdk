

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


describe('TranscriptionVocabularyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.TranscriptionVocabulary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'transcription_vocabulary.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"int64","h":"Created At","n":"created_at","r":true,"sh":"Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch).","t":"`$STRING`","key$":"created_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the Transcription Vocabulary","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The user-supplied name of the Transcription Vocabulary.","t":"`$STRING`","key$":"name","index$":2},"passthrough":{"a":true,"h":"Passthrough","n":"passthrough","r":false,"sh":"Arbitrary user-supplied metadata set for the Transcription Vocabulary.","t":"`$STRING`","key$":"passthrough","index$":3},"phrases":{"a":true,"h":"Phrases","n":"phrases","op":{"create":{"req":true,"type":"`$ARRAY`"},"update":{"req":true,"type":"`$ARRAY`"}},"r":false,"sh":"Phrases, individual words, or proper names to include in the Transcription Vocabulary.","t":"`$ARRAY`","key$":"phrases","index$":4},"updated_at":{"a":true,"fo":"int64","h":"Updated At","n":"updated_at","r":true,"sh":"Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch).","t":"`$STRING`","key$":"updated_at","index$":5}},"id":{"field":"id","name":"id"},"name":"transcription_vocabulary","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /video/v1/transcription-vocabularies","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/video/v1/transcription-vocabularies","q":{},"r":{},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"transcription-vocabularies"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /video/v1/transcription-vocabularies","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/video/v1/transcription-vocabularies","q":{"exist":["limit","page"]},"r":{},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"transcription-vocabularies"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"TRANSCRIPTION_VOCABULARY_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}","q":{"exist":["id"]},"r":{"param":{"TRANSCRIPTION_VOCABULARY_ID":"id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"transcription-vocabularies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"TRANSCRIPTION_VOCABULARY_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}","q":{"exist":["id"]},"r":{"param":{"TRANSCRIPTION_VOCABULARY_ID":"id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"transcription-vocabularies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"TRANSCRIPTION_VOCABULARY_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}","q":{"exist":["id"]},"r":{"param":{"TRANSCRIPTION_VOCABULARY_ID":"id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"transcription-vocabularies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"transcription_vocabulary","name__orig":"transcription_vocabulary","Name":"TranscriptionVocabulary","name_":"transcription_vocabulary","name-":"transcription-vocabulary","NAME":"TRANSCRIPTION_VOCABULARY","index$":63}, {"active":true,"entity":"transcription_vocabulary","key$":"BasicTranscriptionVocabularyFlow","kind":"basic","name":"BasicTranscriptionVocabularyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"transcription_vocabulary_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"transcription_vocabulary_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"transcription_vocabulary_ref01","srcdatavar":"transcription_vocabulary_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-transcription_vocabulary_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"transcription_vocabulary_ref01","srcdatavar":"transcription_vocabulary_ref01_data","suffix":"_dt0"},"m":{"id":"transcription_vocabulary01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-transcription_vocabulary_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"transcription_vocabulary_ref01","suffix":"_rm0"},"m":{"id":"transcription_vocabulary01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"transcription_vocabulary_ref01"}}],"index$":5}]}, 'TranscriptionVocabulary', {"POST /video/v1/transcription-vocabularies":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The user-supplied name of the Transcription Vocabulary.","key$":"name"},"phrases":{"type":"array","items":{"type":"string","description":"A phrase or word belonging to a Transcription Vocabulary.","minLength":1,"maxLength":32,"x-ref":"#/components/schemas/TranscriptionVocabularyPhrase"},"maxItems":1000,"description":"Phrases, individual words, or proper names to include in the Transcription Vocabulary. When the Transcription Vocabulary is attached to a live stream's `generated_subtitles`, the probability of successful speech recognition for these words or phrases is boosted.","key$":"phrases"},"passthrough":{"type":"string","description":"Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255 characters.","key$":"passthrough"}},"required":["phrases"],"x-ref":"#/components/schemas/CreateTranscriptionVocabularyRequest","index$":1},"example":{"name":"Mux API Vocabulary","phrases":["Mux","Live Stream","Playback ID","video encoding"]}}}},"parameters":[]},"GET /video/v1/transcription-vocabularies":{"protocol":"http","parameters":[{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":10,"maximum":10},"index$":0},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":1}]},"GET /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}":{"protocol":"http","parameters":[{"name":"TRANSCRIPTION_VOCABULARY_ID","in":"path","description":"The ID of the Transcription Vocabulary.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/transcription_vocabulary_id","index$":0}]},"DELETE /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}":{"protocol":"http","parameters":[{"name":"TRANSCRIPTION_VOCABULARY_ID","in":"path","description":"The ID of the Transcription Vocabulary.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/transcription_vocabulary_id","index$":0}]},"PUT /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The user-supplied name of the Transcription Vocabulary.","key$":"name"},"phrases":{"type":"array","items":{"type":"string","description":"A phrase or word belonging to a Transcription Vocabulary.","minLength":1,"maxLength":32,"x-ref":"#/components/schemas/TranscriptionVocabularyPhrase"},"maxItems":1000,"description":"Phrases, individual words, or proper names to include in the Transcription Vocabulary. When the Transcription Vocabulary is attached to a live stream's `generated_subtitles`, the probability of successful speech recognition for these words or phrases is boosted.","key$":"phrases"},"passthrough":{"type":"string","description":"Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255 characters.","key$":"passthrough"}},"required":["phrases"],"x-ref":"#/components/schemas/UpdateTranscriptionVocabularyRequest","index$":1},"example":{"name":"Mux API Vocabulary - Updated","phrases":["Mux","Live Stream","RTMP","Stream Key"]}}}},"parameters":[{"name":"TRANSCRIPTION_VOCABULARY_ID","in":"path","description":"The ID of the Transcription Vocabulary.","required":true,"schema":{"type":"string"},"x-ref":"#/components/parameters/transcription_vocabulary_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const transcription_vocabulary_ref01_ent = client.TranscriptionVocabulary()
    let transcription_vocabulary_ref01_data = setup.data.new.transcription_vocabulary['transcription_vocabulary_ref01']

    transcription_vocabulary_ref01_data = (await transcription_vocabulary_ref01_ent.create(transcription_vocabulary_ref01_data)).data()
    assert(null != transcription_vocabulary_ref01_data.id)


    // LIST
    const transcription_vocabulary_ref01_match: any = {}

    const transcription_vocabulary_ref01_list = (await transcription_vocabulary_ref01_ent.list(transcription_vocabulary_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(transcription_vocabulary_ref01_list, { id: transcription_vocabulary_ref01_data.id })))


    // UPDATE
    const transcription_vocabulary_ref01_data_up0: any = {}
    transcription_vocabulary_ref01_data_up0.id = transcription_vocabulary_ref01_data.id

    const transcription_vocabulary_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-transcription_vocabulary_ref01_' + setup.now }
    ;(transcription_vocabulary_ref01_data_up0 as any)[transcription_vocabulary_ref01_markdef_up0.name] = transcription_vocabulary_ref01_markdef_up0.value

    const transcription_vocabulary_ref01_resdata_up0 = (await transcription_vocabulary_ref01_ent.update(transcription_vocabulary_ref01_data_up0)).data()
    assert(transcription_vocabulary_ref01_resdata_up0.id === transcription_vocabulary_ref01_data_up0.id)

    assert((transcription_vocabulary_ref01_resdata_up0 as any)[transcription_vocabulary_ref01_markdef_up0.name] === transcription_vocabulary_ref01_markdef_up0.value)


    // LOAD
    const transcription_vocabulary_ref01_match_dt0: any = {}
    transcription_vocabulary_ref01_match_dt0.id = transcription_vocabulary_ref01_data.id
    const transcription_vocabulary_ref01_data_dt0 = (await transcription_vocabulary_ref01_ent.load(transcription_vocabulary_ref01_match_dt0)).data()
    assert(transcription_vocabulary_ref01_data_dt0.id === transcription_vocabulary_ref01_data.id)


    // REMOVE
    const transcription_vocabulary_ref01_match_rm0: any = { id: transcription_vocabulary_ref01_data.id }
    await transcription_vocabulary_ref01_ent.remove(transcription_vocabulary_ref01_match_rm0)
  

    // LIST
    const transcription_vocabulary_ref01_match_rt0: any = {}

    const transcription_vocabulary_ref01_list_rt0 = (await transcription_vocabulary_ref01_ent.list(transcription_vocabulary_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(transcription_vocabulary_ref01_list_rt0, { id: transcription_vocabulary_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/transcription_vocabulary/TranscriptionVocabularyTestData.json')

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
    ['transcription_vocabulary01','transcription_vocabulary02','transcription_vocabulary03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_TRANSCRIPTION_VOCABULARY_ENTID']
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
  
