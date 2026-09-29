

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


describe('JobSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.JobSummary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'job_summary.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"sh":"Unix timestamp (seconds) when the job was created.","t":"`$INTEGER`","key$":"created_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique job identifier.","t":"`$STRING`","key$":"id","index$":1},"links":{"a":true,"h":"Links","n":"links","r":true,"sh":"Hypermedia links for this job.","t":"`$OBJECT`","key$":"links","index$":2},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current job status.","t":"`$STRING`","key$":"status","index$":3},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":true,"sh":"Unix timestamp (seconds) of the job's last state transition (e.g.","t":"`$INTEGER`","key$":"updated_at","index$":4},"workflow":{"a":true,"h":"Workflow","n":"workflow","r":true,"sh":"Workflow type that created this job.","t":"`$STRING`","key$":"workflow","index$":5}},"id":{"field":"id","name":"id"},"name":"job_summary","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /robots/v0/jobs/{JOB_ID}/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"job_id","or":"JOB_ID","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/robots/v0/jobs/{JOB_ID}/cancel","q":{"exist":["job_id"]},"r":{"param":{"JOB_ID":"job_id"}},"s":[{"lit":"robots"},{"lit":"v0"},{"lit":"jobs"},{"var":"job_id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /robots/v0/jobs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"asset_id","or":"asset_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"workflow","or":"workflow","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/robots/v0/jobs","q":{"exist":["asset_id","limit","page","status","workflow"]},"r":{},"s":[{"lit":"robots"},{"lit":"v0"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"job_summary","name__orig":"job_summary","Name":"JobSummary","name_":"job_summary","name-":"job-summary","NAME":"JOB_SUMMARY","index$":24}, {"active":true,"entity":"job_summary","key$":"BasicJobSummaryFlow","kind":"basic","name":"BasicJobSummaryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"job_summary_ref01"},"m":{"job_id":"job01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"job_summary_ref01"}}],"index$":1}]}, 'JobSummary', {"POST /robots/v0/jobs/{JOB_ID}/cancel":{"protocol":"http","parameters":[{"schema":{"type":"string","minLength":1,"maxLength":255},"required":true,"name":"JOB_ID","in":"path","index$":0}]},"GET /robots/v0/jobs":{"protocol":"http","parameters":[{"schema":{"type":"string","enum":["summarize","moderate","generate-chapters","find-scenes","edit-captions","translate-captions","translate-audio","ask-questions","find-key-moments","generate-engagement-insights","generate-premium-captions","find-best-thumbnails"],"description":"Filter by workflow name"},"required":false,"description":"Filter by workflow name","name":"workflow","in":"query","index$":0},{"schema":{"allOf":[{"type":"string","enum":["pending","processing","completed","errored","cancelled"],"description":"Current job status.","x-ref":"#/components/schemas/JobStatus"},{"description":"Filter by job status"}]},"required":false,"description":"Filter by job status","name":"status","in":"query","index$":1},{"schema":{"type":"string","minLength":1,"description":"Filter by Mux asset ID"},"required":false,"description":"Filter by Mux asset ID","name":"asset_id","in":"query","index$":2},{"schema":{"type":"integer","minimum":1,"maximum":100,"default":25,"description":"Maximum number of jobs to return (default 25, max 100)"},"required":false,"description":"Maximum number of jobs to return (default 25, max 100)","name":"limit","in":"query","index$":3},{"schema":{"type":"integer","minimum":1,"default":1,"description":"Page number (default 1)"},"required":false,"description":"Page number (default 1)","name":"page","in":"query","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const job_summary_ref01_ent = client.JobSummary()
    let job_summary_ref01_data = setup.data.new.job_summary['job_summary_ref01']
    job_summary_ref01_data['job_id'] = setup.idmap['job01']

    job_summary_ref01_data = (await job_summary_ref01_ent.create(job_summary_ref01_data)).data()
    assert(null != job_summary_ref01_data.id)


    // LIST
    const job_summary_ref01_match: any = {}

    const job_summary_ref01_list = (await job_summary_ref01_ent.list(job_summary_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(job_summary_ref01_list, { id: job_summary_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/job_summary/JobSummaryTestData.json')

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
    ['job_summary01','job_summary02','job_summary03','job01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_JOB_SUMMARY_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_JOB_SUMMARY_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_JOB_SUMMARY_ENTID']
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
  
