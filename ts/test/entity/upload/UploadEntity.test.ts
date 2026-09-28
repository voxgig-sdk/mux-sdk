

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


describe('UploadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MUX_TEST_LIVE=TRUE.
  afterEach(liveDelay('MUX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MuxSDK.test()
    const ent = testsdk.Upload()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MUX_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'upload.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"asset_id":{"a":true,"h":"Asset Id","n":"asset_id","r":false,"sh":"Only set once the upload is in the `asset_created` state.","t":"`$STRING`","key$":"asset_id","index$":0},"cors_origin":{"a":true,"h":"Cors Origin","n":"cors_origin","r":true,"sh":"If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers.","t":"`$STRING`","key$":"cors_origin","index$":1},"error":{"a":true,"h":"Error","n":"error","r":false,"sh":"Only set if an error occurred during asset creation.","t":"`$OBJECT`","key$":"error","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the Direct Upload.","t":"`$STRING`","key$":"id","index$":3},"new_asset_settings":{"a":true,"h":"New Asset Settings","n":"new_asset_settings","r":false,"t":"`$OBJECT`","key$":"new_asset_settings","index$":4},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":5},"test":{"a":true,"fo":"boolean","h":"Test","n":"test","r":false,"sh":"Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset.","t":"`$BOOLEAN`","key$":"test","index$":6},"timeout":{"a":true,"fo":"int32","h":"Timeout","n":"timeout","op":{"create":{"req":false,"type":"`$INTEGER`"}},"r":true,"sh":"Max time in seconds for the signed upload URL to be valid.","t":"`$INTEGER`","key$":"timeout","index$":7},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"The URL to upload the associated source media to.","t":"`$STRING`","key$":"url","index$":8}},"id":{"field":"id","name":"id"},"name":"upload","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /video/v1/uploads","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/video/v1/uploads","q":{},"r":{},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"uploads"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /video/v1/uploads/{UPLOAD_ID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcd1234","k":"param","n":"id","or":"upload_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/video/v1/uploads/{UPLOAD_ID}","q":{"exist":["id"]},"r":{"param":{"UPLOAD_ID":"id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"uploads"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /video/v1/uploads/{UPLOAD_ID}/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcd1234","k":"param","n":"upload_id","or":"upload_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/video/v1/uploads/{UPLOAD_ID}/cancel","q":{"$action":"cancel","exist":["upload_id"]},"r":{"param":{"UPLOAD_ID":"upload_id"}},"s":[{"lit":"video"},{"lit":"v1"},{"lit":"uploads"},{"var":"upload_id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"upload","name__orig":"upload","Name":"Upload","name_":"upload","name-":"upload","NAME":"UPLOAD","index$":83}, {"active":true,"entity":"upload","key$":"BasicUploadFlow","kind":"basic","name":"BasicUploadFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"upload_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"upload_ref01","srcdatavar":"upload_ref01_data","suffix":"_up0","textfield":"asset_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-upload_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"upload_ref01","srcdatavar":"upload_ref01_data","suffix":"_dt0"},"m":{"id":"upload01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-upload_ref01"}}],"index$":2}]}, 'Upload', {"POST /video/v1/uploads":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["cors_origin"],"properties":{"timeout":{"type":"integer","format":"int32","default":3600,"minimum":60,"maximum":604800,"description":"Max time in seconds for the signed upload URL to be valid. If a successful upload has not occurred before the timeout limit, the direct upload is marked `timed_out`","key$":"timeout"},"cors_origin":{"type":"string","description":"If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers.","key$":"cors_origin"},"new_asset_settings":{"type":"object","properties":{"input":{"deprecated":true,"description":"Deprecated. Use `inputs` instead, which accepts an identical type.","items":{"description":"An array of objects that each describe an input file to be used to create the asset. As a shortcut, `input` can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.","properties":{},"type":"object","x-ref":"#/components/schemas/InputSettings"},"title":"AssetOptionsDeprecatedInput","type":"array","x-mux-doc-decorators-hidden-children":"all","x-stainless-deprecation-message":"Use `inputs` instead."},"inputs":{"description":"An array of objects that each describe an input file to be used to create the asset. As a shortcut, input can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.","items":{"description":"An array of objects that each describe an input file to be used to create the asset. As a shortcut, `input` can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.","properties":{},"type":"object","x-ref":"#/components/schemas/InputSettings"},"type":"array"},"playback_policy":{"deprecated":true,"description":"Deprecated. Use `playback_policies` instead, which accepts an identical type.","items":{"description":"* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}`\n\n* `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens.\n\n* `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).\n","enum":[],"type":"string","x-ref":"#/components/schemas/PlaybackPolicy"},"title":"AssetOptionsDeprecatedPlaybackPolicy","type":"array","x-mux-doc-decorators-hidden-children":"all","x-stainless-deprecation-message":"Use `playback_policies` instead."},"playback_policies":{"description":"An array of playback policy names that you want applied to this asset and available through `playback_ids`. Options include:\n\n* `\"public\"` (anyone with the playback URL can stream the asset).\n* `\"signed\"` (an additional access token is required to play the asset).\n\nIf no `playback_policies` are set, the asset will have no playback IDs and will therefore not be playable. For simplicity, a single string name can be used in place of the array in the case of only one playback policy.\n","items":{"description":"* `public` playback IDs are accessible by constructing an HLS URL like `https://stream.mux.com/${PLAYBACK_ID}`\n\n* `signed` playback IDs should be used with tokens `https://stream.mux.com/${PLAYBACK_ID}?token={TOKEN}`. See [Secure video playback](https://docs.mux.com/guides/secure-video-playback) for details about creating tokens.\n\n* `drm` playback IDs are protected with DRM technologies. [See DRM documentation for more details](https://docs.mux.com/guides/protect-videos-with-drm).\n","enum":[],"type":"string","x-ref":"#/components/schemas/PlaybackPolicy"},"type":"array"},"advanced_playback_policies":{"description":"An array of playback policy objects that you want applied to this asset and available through `playback_ids`. `advanced_playback_policies` must be used instead of `playback_policies` when creating a DRM playback ID.\n","items":{"properties":{},"type":"object","x-ref":"#/components/schemas/CreatePlaybackIDRequest"},"type":"array"},"passthrough":{"description":"You can set this field to anything you want. It will be included in the asset details and related webhooks. If you're looking for more structured metadata, such as `title` or `external_id`, you can use the `meta` object instead. **Max: 255 characters**.","type":"string"},"mp4_support":{"deprecated":true,"description":"Deprecated. See the [Static Renditions API](https://www.mux.com/docs/guides/enable-static-mp4-renditions) for the updated API.\n\nSpecify what level of support for mp4 playback. You may not enable both `mp4_support` and `static_renditions`.\n\n* The `capped-1080p` option produces a single MP4 file, called `capped-1080p.mp4`, with the video resolution capped at 1080p. This option produces an `audio.m4a` file for an audio-only asset.\n* The `audio-only` option produces a single M4A file, called `audio.m4a` for a video or an audio-only asset. MP4 generation will error when this option is specified for a video-only asset.\n* The `audio-only,capped-1080p` option produces both the `audio.m4a` and `capped-1080p.mp4` files. Only the `capped-1080p.mp4` file is produced for a video-only asset, while only the `audio.m4a` file is produced for an audio-only asset.\n\nThe `standard`(deprecated) option produces up to three MP4 files with different levels of resolution (`high.mp4`, `medium.mp4`, `low.mp4`, or `audio.m4a` for an audio-only asset).\n\nMP4 files are not produced for `none` (default).\n\nIn most cases you should use our default HLS-based streaming playback (`{playback_id}.m3u8`) which can automatically adjust to viewers' connection speeds, but an mp4 can be useful for some legacy devices or downloading for offline playback. See the [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions) for more information.\n","enum":["none","standard","capped-1080p","audio-only","audio-only,capped-1080p"],"type":"string","x-mux-doc-decorators-deprecated-enum-values":["standard"],"x-stainless-deprecation-message":"See the Static Renditions API (https://www.mux.com/docs/guides/enable-static-mp4-renditions)."},"normalize_audio":{"default":false,"description":"Normalize the audio track loudness level. This parameter is only applicable to on-demand (not live) assets.","format":"boolean","type":"boolean"},"master_access":{"description":"Specify what level (if any) of support for master access. Master access can be enabled temporarily for your asset to be downloaded. See the [Download your videos guide](https://docs.mux.com/guides/enable-static-mp4-renditions) for more information.","enum":["none","temporary"],"type":"string"},"test":{"description":"Marks the asset as a test asset when the value is set to true. A Test asset can help evaluate the Mux Video APIs without incurring any cost. There is no limit on number of test assets created. Test asset are watermarked with the Mux logo, limited to 10 seconds, deleted after 24 hrs.","format":"boolean","type":"boolean"},"max_resolution_tier":{"description":"Max resolution tier can be used to control the maximum `resolution_tier` your asset is encoded, stored, and streamed at. If not set, this defaults to `1080p`.","enum":["1080p","1440p","2160p"],"type":"string"},"encoding_tier":{"deprecated":true,"description":"This field is deprecated. Please use `video_quality` instead. The encoding tier informs the cost, quality, and available platform features for the asset. The default encoding tier for an account can be set in the Mux Dashboard. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)","enum":["smart","baseline","premium"],"type":"string","x-stainless-deprecation-message":"Use `video_quality` instead."},"video_quality":{"description":"The video quality controls the cost, quality, and available platform features for the asset. The default video quality for an account can be set in the Mux Dashboard. This field replaces the deprecated `encoding_tier` value. [See the video quality guide for more details.](https://docs.mux.com/guides/use-video-quality-levels)","enum":["basic","plus","premium"],"type":"string"},"static_renditions":{"description":"An array of static renditions to create for this asset. You may not enable both `static_renditions` and the deprecated `mp4_support`.","items":{"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/CreateStaticRenditionRequest"},"type":"array"},"meta":{"description":"Customer provided metadata about this asset.\n\nNote: This metadata may be publicly available via the video player. Do not include PII or sensitive information.\n","properties":{"creator_id":{},"external_id":{},"title":{}},"type":"object","x-ref":"#/components/schemas/AssetMetadata"},"copy_overlays":{"default":true,"description":"If the created asset is a clip, this controls whether overlays are copied from the source asset.","type":"boolean"},"directives":{"description":"An array of Mux Robots directives to apply to the asset.","items":{"description":"A Mux Robots directive to apply to the asset.","properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/AssetDirective"},"type":"array"},"generate_shots":{"default":false,"description":"Whether to perform shot detection on this asset. Shots are only generated for video assets and will not be generated for audio-only assets.","type":"boolean"}},"x-ref":"#/components/schemas/AssetOptions","key$":"new_asset_settings"},"test":{"type":"boolean","format":"boolean","description":"Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a `test` Asset.","key$":"test"}},"x-ref":"#/components/schemas/CreateUploadRequest","index$":1},"example":{"cors_origin":"https://example.com/","new_asset_settings":{"playback_policies":["public"]}}}}},"parameters":[]},"GET /video/v1/uploads/{UPLOAD_ID}":{"protocol":"http","parameters":[{"name":"UPLOAD_ID","in":"path","description":"ID of the Upload","required":true,"example":"abcd1234","schema":{"type":"string"},"x-ref":"#/components/parameters/upload_id","index$":0}]},"PUT /video/v1/uploads/{UPLOAD_ID}/cancel":{"protocol":"http","parameters":[{"name":"UPLOAD_ID","in":"path","description":"ID of the Upload","required":true,"example":"abcd1234","schema":{"type":"string"},"x-ref":"#/components/parameters/upload_id","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const upload_ref01_ent = client.Upload()
    let upload_ref01_data = setup.data.new.upload['upload_ref01']

    upload_ref01_data = (await upload_ref01_ent.create(upload_ref01_data)).data()
    assert(null != upload_ref01_data.id)


    // UPDATE
    const upload_ref01_data_up0: any = {}
    upload_ref01_data_up0.id = upload_ref01_data.id

    const upload_ref01_markdef_up0 = { name: 'asset_id', value: 'Mark01-upload_ref01_' + setup.now }
    ;(upload_ref01_data_up0 as any)[upload_ref01_markdef_up0.name] = upload_ref01_markdef_up0.value

    const upload_ref01_resdata_up0 = (await upload_ref01_ent.update(upload_ref01_data_up0)).data()
    assert(upload_ref01_resdata_up0.id === upload_ref01_data_up0.id)

    assert((upload_ref01_resdata_up0 as any)[upload_ref01_markdef_up0.name] === upload_ref01_markdef_up0.value)


    // LOAD
    const upload_ref01_match_dt0: any = {}
    upload_ref01_match_dt0.id = upload_ref01_data.id
    const upload_ref01_data_dt0 = (await upload_ref01_ent.load(upload_ref01_match_dt0)).data()
    assert(upload_ref01_data_dt0.id === upload_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/upload/UploadTestData.json')

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
    ['upload01','upload02','upload03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MUX_TEST_UPLOAD_ENTID': idmap,
    'MUX_TEST_LIVE': 'FALSE',
    'MUX_TEST_EXPLAIN': 'FALSE',
    'MUX_APIKEY': '',
    'MUX_SECRET': '',
  })

  idmap = env['MUX_TEST_UPLOAD_ENTID']

  const live = 'TRUE' === env.MUX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MUX_TEST_UPLOAD_ENTID']
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
  
