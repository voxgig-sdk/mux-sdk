

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


describe('ListAssetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.ListAsset()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_asset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"aspect_ratio":{"a":true,"h":"Aspect Ratio","n":"aspect_ratio","r":false,"sh":"The aspect ratio of the asset in the form of `width:height`, for example `16:9`.","t":"`$STRING`","key$":"aspect_ratio","index$":0},"created_at":{"a":true,"fo":"int64","h":"Created At","n":"created_at","r":true,"sh":"Time the Asset was created, defined as a Unix timestamp (seconds since epoch).","t":"`$STRING`","key$":"created_at","index$":1},"directives":{"a":true,"h":"Directives","n":"directives","r":false,"sh":"The Mux Robots directives applied to the asset.","t":"`$ARRAY`","key$":"directives","index$":2},"duration":{"a":true,"fo":"double","h":"Duration","n":"duration","r":false,"sh":"The duration of the asset in seconds (max duration for a single asset is 12 hours).","t":"`$NUMBER`","key$":"duration","index$":3},"encoding_tier":{"a":true,"de":true,"h":"Encoding Tier","n":"encoding_tier","r":true,"sh":"This field is deprecated.","t":"`$STRING`","key$":"encoding_tier","index$":4},"errors":{"a":true,"h":"Errors","n":"errors","r":false,"sh":"Object that describes any errors that happened when processing this asset.","t":"`$OBJECT`","key$":"errors","index$":5},"generate_shots":{"a":true,"h":"Generate Shots","n":"generate_shots","r":false,"sh":"Whether to perform shot detection on this asset.","t":"`$BOOLEAN`","key$":"generate_shots","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the Asset.","t":"`$STRING`","key$":"id","index$":7},"ingest_type":{"a":true,"h":"Ingest Type","n":"ingest_type","r":false,"sh":"The type of ingest used to create the asset.","t":"`$STRING`","key$":"ingest_type","index$":8},"is_live":{"a":true,"fo":"boolean","h":"Is Live","n":"is_live","r":false,"sh":"Indicates whether the live stream that created this asset is currently `active` and not in `idle` state.","t":"`$BOOLEAN`","key$":"is_live","index$":9},"live_stream_id":{"a":true,"h":"Live Stream Id","n":"live_stream_id","r":false,"sh":"Unique identifier for the live stream.","t":"`$STRING`","key$":"live_stream_id","index$":10},"master":{"a":true,"h":"Master","n":"master","r":false,"sh":"An object containing the current status of Master Access and the link to the Master MP4 file when ready.","t":"`$OBJECT`","key$":"master","index$":11},"master_access":{"a":true,"h":"Master Access","n":"master_access","r":true,"t":"`$STRING`","key$":"master_access","index$":12},"max_resolution_tier":{"a":true,"h":"Max Resolution Tier","n":"max_resolution_tier","r":true,"sh":"Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at.","t":"`$STRING`","key$":"max_resolution_tier","index$":13},"max_stored_frame_rate":{"a":true,"fo":"double","h":"Max Stored Frame Rate","n":"max_stored_frame_rate","r":false,"sh":"The maximum frame rate that has been stored for the asset.","t":"`$NUMBER`","key$":"max_stored_frame_rate","index$":14},"max_stored_resolution":{"a":true,"de":true,"h":"Max Stored Resolution","n":"max_stored_resolution","r":false,"sh":"This field is deprecated.","t":"`$STRING`","key$":"max_stored_resolution","index$":15},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"sh":"Customer provided metadata about this asset.","t":"`$OBJECT`","key$":"meta","index$":16},"mp4_support":{"a":true,"de":true,"h":"Mp4 Support","n":"mp4_support","r":false,"sh":"Deprecated.","t":"`$STRING`","key$":"mp4_support","index$":17},"non_standard_input_reasons":{"a":true,"h":"Non Standard Input Reasons","n":"non_standard_input_reasons","r":false,"sh":"An object containing one or more reasons the input file is non-standard.","t":"`$OBJECT`","key$":"non_standard_input_reasons","index$":18},"normalize_audio":{"a":true,"h":"Normalize Audio","n":"normalize_audio","r":false,"sh":"Normalize the audio track loudness level.","t":"`$BOOLEAN`","key$":"normalize_audio","index$":19},"passthrough":{"a":true,"h":"Passthrough","n":"passthrough","r":false,"sh":"You can set this field to anything you want.","t":"`$STRING`","key$":"passthrough","index$":20},"playback_ids":{"a":true,"h":"Playback Ids","n":"playback_ids","r":false,"sh":"An array of Playback ID objects.","t":"`$ARRAY`","key$":"playback_ids","index$":21},"progress":{"a":true,"h":"Progress","n":"progress","r":true,"sh":"Detailed state information about the asset ingest process.","t":"`$OBJECT`","key$":"progress","index$":22},"recording_times":{"a":true,"h":"Recording Times","n":"recording_times","r":false,"sh":"An array of individual live stream recording sessions.","t":"`$ARRAY`","key$":"recording_times","index$":23},"resolution_tier":{"a":true,"h":"Resolution Tier","n":"resolution_tier","r":false,"sh":"The resolution tier that the asset was ingested at, affecting billing for ingest & storage.","t":"`$STRING`","key$":"resolution_tier","index$":24},"shots":{"a":true,"h":"Shots","n":"shots","r":true,"sh":"The results of generating shots on the video","t":"`$OBJECT`","key$":"shots","index$":25},"source_asset_id":{"a":true,"h":"Source Asset Id","n":"source_asset_id","r":false,"sh":"Asset Identifier of the video used as the source for creating the clip.","t":"`$STRING`","key$":"source_asset_id","index$":26},"static_renditions":{"a":true,"h":"Static Renditions","n":"static_renditions","r":false,"sh":"An object containing the current status of any static renditions (MP4s) for this asset.","t":"`$OBJECT`","key$":"static_renditions","index$":27},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the asset.","t":"`$STRING`","key$":"status","index$":28},"test":{"a":true,"fo":"boolean","h":"Test","n":"test","r":false,"sh":"True means this live stream is a test asset.","t":"`$BOOLEAN`","key$":"test","index$":29},"thumbnail_time":{"a":true,"fo":"float","h":"Thumbnail Time","n":"thumbnail_time","r":false,"sh":"The media time within the asset used when a thumbnail without an explicit time is requested.","t":"`$NUMBER`","key$":"thumbnail_time","index$":30},"tracks":{"a":true,"h":"Tracks","n":"tracks","r":false,"sh":"The individual media tracks that make up an asset.","t":"`$ARRAY`","key$":"tracks","index$":31},"upload_id":{"a":true,"h":"Upload Id","n":"upload_id","r":false,"sh":"Unique identifier for the Direct Upload.","t":"`$STRING`","key$":"upload_id","index$":32},"video_quality":{"a":true,"h":"Video Quality","n":"video_quality","r":false,"sh":"The video quality controls the cost, quality, and available platform features for the asset.","t":"`$STRING`","key$":"video_quality","index$":33}},"id":{"field":"id","name":"id"},"name":"list_asset","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /video/v1/assets","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"live_stream_id","or":"live_stream_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"upload_id","or":"upload_id","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/video/v1/assets","q":{"exist":["cursor","limit","live_stream_id","page","upload_id"]},"r":{},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"assets"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_asset","name__orig":"list_asset","Name":"ListAsset","name_":"list_asset","name-":"list-asset","NAME":"LIST_ASSET","index$":28}, {"active":true,"entity":"list_asset","key$":"BasicListAssetFlow","kind":"basic","name":"BasicListAssetFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_asset_ref01"}}],"index$":0}]}, 'ListAsset', {"GET /video/v1/assets":{"protocol":"http","parameters":[{"name":"limit","in":"query","description":"Number of items to include in the response","required":false,"schema":{"type":"integer","format":"int32","default":25},"x-ref":"#/components/parameters/limit","index$":0},{"name":"page","in":"query","description":"Offset by this many pages, of the size of `limit`","required":false,"schema":{"type":"integer","format":"int32","default":1},"x-ref":"#/components/parameters/page","index$":1},{"name":"cursor","in":"query","description":"This parameter is used to request pages beyond the first. You can find the cursor value in the `next_cursor` field of paginated responses.","required":false,"schema":{"type":"string"},"x-ref":"#/components/parameters/cursor","index$":2},{"name":"live_stream_id","in":"query","description":"Filter response to return all the assets for this live stream only","required":false,"schema":{"type":"string"},"x-ref":"#/components/parameters/list_asset_live_stream_id","index$":3},{"name":"upload_id","in":"query","description":"Filter response to return an asset created from this direct upload only","required":false,"schema":{"type":"string"},"x-ref":"#/components/parameters/list_asset_upload_id","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_asset_ref01_data = Object.values(setup.data.existing.list_asset)[0] as any

    // LIST
    const list_asset_ref01_ent = client.ListAsset()
    const list_asset_ref01_match: any = {}

    const list_asset_ref01_list = (await list_asset_ref01_ent.list(list_asset_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_asset/ListAssetTestData.json')

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
    ['list_asset01','list_asset02','list_asset03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_LIST_ASSET_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_LIST_ASSET_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_LIST_ASSET_ENTID']
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
  
