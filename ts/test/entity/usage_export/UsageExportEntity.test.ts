

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


describe('UsageExportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.UsageExport()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'usage_export.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"date":{"a":true,"fo":"date","h":"Date","n":"date","r":true,"sh":"The calendar date this CSV covers, in `YYYY-MM-DD` format.","t":"`$STRING`","key$":"date","index$":0},"download_url":{"a":true,"h":"Download Url","n":"download_url","r":true,"sh":"A pre-signed URL to download the CSV.","t":"`$STRING`","key$":"download_url","index$":1},"download_url_expires_at":{"a":true,"h":"Download Url Expires At","n":"download_url_expires_at","r":true,"sh":"Unix timestamp (seconds since epoch) at which `download_url` expires.","t":"`$INTEGER`","key$":"download_url_expires_at","index$":2},"file_size":{"a":true,"h":"File Size","n":"file_size","r":true,"sh":"Uncompressed size of the CSV file in bytes.","t":"`$INTEGER`","key$":"file_size","index$":3}},"name":"usage_export","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /system/v1/usage/exports","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":3600,"k":"query","n":"download_url_ttl","or":"download_url_ttl","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"timeframe","or":"timeframe[]","r":false,"t":"`$ARRAY`","index$":3}]},"k":"http","m":"GET","o":"/system/v1/usage/exports","q":{"exist":["download_url_ttl","limit","page","timeframe"]},"r":{},"s":[{"lit":"system"},{"lit":"v1"},{"lit":"usage"},{"lit":"exports"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"usage_export","name__orig":"usage_export","Name":"UsageExport","name_":"usage_export","name-":"usage-export","NAME":"USAGE_EXPORT","index$":69}, {"active":true,"entity":"usage_export","key$":"BasicUsageExportFlow","kind":"basic","name":"BasicUsageExportFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"usage_export_ref01"}}],"index$":0}]}, 'UsageExport', {"GET /system/v1/usage/exports":{"protocol":"http","parameters":[{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":25},"x-ref":"#/components/parameters/limit","index$":0},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":1},{"name":"timeframe[]","in":"query","description":"Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).\n\nAccepted formats are...\n\n  * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`\n  * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`\n","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"x-ref":"#/components/parameters/timeframe","index$":2},{"name":"download_url_ttl","in":"query","description":"Lifetime in seconds for the pre-signed download URL.","required":false,"schema":{"type":"integer","minimum":1,"maximum":604800,"default":3600},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let usage_export_ref01_data = Object.values(setup.data.existing.usage_export)[0] as any

    // LIST
    const usage_export_ref01_ent = client.UsageExport()
    const usage_export_ref01_match: any = {}

    const usage_export_ref01_list = (await usage_export_ref01_ent.list(usage_export_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/usage_export/UsageExportTestData.json')

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
    ['usage_export01','usage_export02','usage_export03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_USAGE_EXPORT_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_USAGE_EXPORT_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_USAGE_EXPORT_ENTID']
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
  
