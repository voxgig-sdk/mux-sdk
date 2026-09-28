// Mux Ts SDK

import { AnnotationEntity } from './entity/AnnotationEntity'
import { AskQuestionEntity } from './entity/AskQuestionEntity'
import { AssetEntity } from './entity/AssetEntity'
import { AssetOrLiveStreamIdEntity } from './entity/AssetOrLiveStreamIdEntity'
import { AssetPlaybackIdEntity } from './entity/AssetPlaybackIdEntity'
import { AssetShotEntity } from './entity/AssetShotEntity'
import { CreatePlaybackIdEntity } from './entity/CreatePlaybackIdEntity'
import { CreateTrackEntity } from './entity/CreateTrackEntity'
import { DirectiveEntity } from './entity/DirectiveEntity'
import { DirectiveRunDetailEntity } from './entity/DirectiveRunDetailEntity'
import { DirectiveRunListEntity } from './entity/DirectiveRunListEntity'
import { DrmConfigurationEntity } from './entity/DrmConfigurationEntity'
import { EditCaptionEntity } from './entity/EditCaptionEntity'
import { EngagementHeatmapEntity } from './entity/EngagementHeatmapEntity'
import { EngagementHotspotEntity } from './entity/EngagementHotspotEntity'
import { FindBestThumbnailEntity } from './entity/FindBestThumbnailEntity'
import { FindKeyMomentEntity } from './entity/FindKeyMomentEntity'
import { FindSceneEntity } from './entity/FindSceneEntity'
import { GenerateAssetShotEntity } from './entity/GenerateAssetShotEntity'
import { GenerateChapterEntity } from './entity/GenerateChapterEntity'
import { GenerateEngagementInsightEntity } from './entity/GenerateEngagementInsightEntity'
import { GeneratePremiumCaptionEntity } from './entity/GeneratePremiumCaptionEntity'
import { GenerateTrackSubtitleEntity } from './entity/GenerateTrackSubtitleEntity'
import { IncidentEntity } from './entity/IncidentEntity'
import { InputInfoEntity } from './entity/InputInfoEntity'
import { JobSummaryEntity } from './entity/JobSummaryEntity'
import { ListAllMetricValueEntity } from './entity/ListAllMetricValueEntity'
import { ListAnnotationEntity } from './entity/ListAnnotationEntity'
import { ListAssetEntity } from './entity/ListAssetEntity'
import { ListBreakdownValueEntity } from './entity/ListBreakdownValueEntity'
import { ListDeliveryUsageEntity } from './entity/ListDeliveryUsageEntity'
import { ListDimensionEntity } from './entity/ListDimensionEntity'
import { ListDimensionValueEntity } from './entity/ListDimensionValueEntity'
import { ListDrmConfigurationEntity } from './entity/ListDrmConfigurationEntity'
import { ListErrorEntity } from './entity/ListErrorEntity'
import { ListExportEntity } from './entity/ListExportEntity'
import { ListFilterEntity } from './entity/ListFilterEntity'
import { ListFilterValueEntity } from './entity/ListFilterValueEntity'
import { ListIncidentEntity } from './entity/ListIncidentEntity'
import { ListInsightEntity } from './entity/ListInsightEntity'
import { ListJobEntity } from './entity/ListJobEntity'
import { ListLiveStreamEntity } from './entity/ListLiveStreamEntity'
import { ListMonitoringDimensionEntity } from './entity/ListMonitoringDimensionEntity'
import { ListMonitoringMetricEntity } from './entity/ListMonitoringMetricEntity'
import { ListPlaybackRestrictionEntity } from './entity/ListPlaybackRestrictionEntity'
import { ListRealTimeDimensionEntity } from './entity/ListRealTimeDimensionEntity'
import { ListRealTimeMetricEntity } from './entity/ListRealTimeMetricEntity'
import { ListRelatedIncidentEntity } from './entity/ListRelatedIncidentEntity'
import { ListSigningKeyEntity } from './entity/ListSigningKeyEntity'
import { ListSubviewBreakdownValueEntity } from './entity/ListSubviewBreakdownValueEntity'
import { ListSubviewComparisonValueEntity } from './entity/ListSubviewComparisonValueEntity'
import { ListSubviewDimensionEntity } from './entity/ListSubviewDimensionEntity'
import { ListSubviewDimensionValueEntity } from './entity/ListSubviewDimensionValueEntity'
import { ListTranscriptionVocabularyEntity } from './entity/ListTranscriptionVocabularyEntity'
import { ListUploadEntity } from './entity/ListUploadEntity'
import { ListUsageExportEntity } from './entity/ListUsageExportEntity'
import { ListVideoViewEntity } from './entity/ListVideoViewEntity'
import { ListVideoViewExportEntity } from './entity/ListVideoViewExportEntity'
import { ListWebhookEntity } from './entity/ListWebhookEntity'
import { LiveStreamEntity } from './entity/LiveStreamEntity'
import { LiveStreamPlaybackIdEntity } from './entity/LiveStreamPlaybackIdEntity'
import { MetricTimeseriesDataEntity } from './entity/MetricTimeseriesDataEntity'
import { ModerateEntity } from './entity/ModerateEntity'
import { MonitoringBreakdownEntity } from './entity/MonitoringBreakdownEntity'
import { MonitoringBreakdownTimeseriesEntity } from './entity/MonitoringBreakdownTimeseriesEntity'
import { MonitoringHistogramTimeseriesEntity } from './entity/MonitoringHistogramTimeseriesEntity'
import { MonitoringTimeseriesEntity } from './entity/MonitoringTimeseriesEntity'
import { OverallEntity } from './entity/OverallEntity'
import { PlaybackRestrictionEntity } from './entity/PlaybackRestrictionEntity'
import { RealTimeBreakdownEntity } from './entity/RealTimeBreakdownEntity'
import { RealTimeHistogramTimeseriesEntity } from './entity/RealTimeHistogramTimeseriesEntity'
import { RealTimeTimeseriesEntity } from './entity/RealTimeTimeseriesEntity'
import { SignalLiveStreamCompleteEntity } from './entity/SignalLiveStreamCompleteEntity'
import { SigningKeyEntity } from './entity/SigningKeyEntity'
import { SimulcastTargetEntity } from './entity/SimulcastTargetEntity'
import { StaticRenditionEntity } from './entity/StaticRenditionEntity'
import { SubviewBreakdownTimeseriesEntity } from './entity/SubviewBreakdownTimeseriesEntity'
import { SubviewOverallValueEntity } from './entity/SubviewOverallValueEntity'
import { SummarizeEntity } from './entity/SummarizeEntity'
import { TranscriptionVocabularyEntity } from './entity/TranscriptionVocabularyEntity'
import { TranslateAudioEntity } from './entity/TranslateAudioEntity'
import { TranslateCaptionEntity } from './entity/TranslateCaptionEntity'
import { UpdateAssetTrackEntity } from './entity/UpdateAssetTrackEntity'
import { UploadEntity } from './entity/UploadEntity'
import { UrlSigningKeyEntity } from './entity/UrlSigningKeyEntity'
import { VideoViewEntity } from './entity/VideoViewEntity'
import { WebhookEntity } from './entity/WebhookEntity'
import { WhoAmIEntity } from './entity/WhoAmIEntity'

export type * from './MuxTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { MuxEntityBase } from './MuxEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class MuxSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('MuxSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('MuxSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('MuxSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Annotation().list()` / `client.Annotation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Annotation(entopts?: Record<string, any>) {
    const self = this
    return new AnnotationEntity(self, entopts)
  }


  // Entity access: `client.AskQuestion().list()` / `client.AskQuestion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AskQuestion(entopts?: Record<string, any>) {
    const self = this
    return new AskQuestionEntity(self, entopts)
  }


  // Entity access: `client.Asset().list()` / `client.Asset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Asset(entopts?: Record<string, any>) {
    const self = this
    return new AssetEntity(self, entopts)
  }


  // Entity access: `client.AssetOrLiveStreamId().list()` / `client.AssetOrLiveStreamId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssetOrLiveStreamId(entopts?: Record<string, any>) {
    const self = this
    return new AssetOrLiveStreamIdEntity(self, entopts)
  }


  // Entity access: `client.AssetPlaybackId().list()` / `client.AssetPlaybackId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssetPlaybackId(entopts?: Record<string, any>) {
    const self = this
    return new AssetPlaybackIdEntity(self, entopts)
  }


  // Entity access: `client.AssetShot().list()` / `client.AssetShot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssetShot(entopts?: Record<string, any>) {
    const self = this
    return new AssetShotEntity(self, entopts)
  }


  // Entity access: `client.CreatePlaybackId().list()` / `client.CreatePlaybackId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreatePlaybackId(entopts?: Record<string, any>) {
    const self = this
    return new CreatePlaybackIdEntity(self, entopts)
  }


  // Entity access: `client.CreateTrack().list()` / `client.CreateTrack().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateTrack(entopts?: Record<string, any>) {
    const self = this
    return new CreateTrackEntity(self, entopts)
  }


  // Entity access: `client.Directive().list()` / `client.Directive().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Directive(entopts?: Record<string, any>) {
    const self = this
    return new DirectiveEntity(self, entopts)
  }


  // Entity access: `client.DirectiveRunDetail().list()` / `client.DirectiveRunDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DirectiveRunDetail(entopts?: Record<string, any>) {
    const self = this
    return new DirectiveRunDetailEntity(self, entopts)
  }


  // Entity access: `client.DirectiveRunList().list()` / `client.DirectiveRunList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DirectiveRunList(entopts?: Record<string, any>) {
    const self = this
    return new DirectiveRunListEntity(self, entopts)
  }


  // Entity access: `client.DrmConfiguration().list()` / `client.DrmConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DrmConfiguration(entopts?: Record<string, any>) {
    const self = this
    return new DrmConfigurationEntity(self, entopts)
  }


  // Entity access: `client.EditCaption().list()` / `client.EditCaption().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EditCaption(entopts?: Record<string, any>) {
    const self = this
    return new EditCaptionEntity(self, entopts)
  }


  // Entity access: `client.EngagementHeatmap().list()` / `client.EngagementHeatmap().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EngagementHeatmap(entopts?: Record<string, any>) {
    const self = this
    return new EngagementHeatmapEntity(self, entopts)
  }


  // Entity access: `client.EngagementHotspot().list()` / `client.EngagementHotspot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EngagementHotspot(entopts?: Record<string, any>) {
    const self = this
    return new EngagementHotspotEntity(self, entopts)
  }


  // Entity access: `client.FindBestThumbnail().list()` / `client.FindBestThumbnail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FindBestThumbnail(entopts?: Record<string, any>) {
    const self = this
    return new FindBestThumbnailEntity(self, entopts)
  }


  // Entity access: `client.FindKeyMoment().list()` / `client.FindKeyMoment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FindKeyMoment(entopts?: Record<string, any>) {
    const self = this
    return new FindKeyMomentEntity(self, entopts)
  }


  // Entity access: `client.FindScene().list()` / `client.FindScene().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FindScene(entopts?: Record<string, any>) {
    const self = this
    return new FindSceneEntity(self, entopts)
  }


  // Entity access: `client.GenerateAssetShot().list()` / `client.GenerateAssetShot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GenerateAssetShot(entopts?: Record<string, any>) {
    const self = this
    return new GenerateAssetShotEntity(self, entopts)
  }


  // Entity access: `client.GenerateChapter().list()` / `client.GenerateChapter().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GenerateChapter(entopts?: Record<string, any>) {
    const self = this
    return new GenerateChapterEntity(self, entopts)
  }


  // Entity access: `client.GenerateEngagementInsight().list()` / `client.GenerateEngagementInsight().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GenerateEngagementInsight(entopts?: Record<string, any>) {
    const self = this
    return new GenerateEngagementInsightEntity(self, entopts)
  }


  // Entity access: `client.GeneratePremiumCaption().list()` / `client.GeneratePremiumCaption().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GeneratePremiumCaption(entopts?: Record<string, any>) {
    const self = this
    return new GeneratePremiumCaptionEntity(self, entopts)
  }


  // Entity access: `client.GenerateTrackSubtitle().list()` / `client.GenerateTrackSubtitle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GenerateTrackSubtitle(entopts?: Record<string, any>) {
    const self = this
    return new GenerateTrackSubtitleEntity(self, entopts)
  }


  // Entity access: `client.Incident().list()` / `client.Incident().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Incident(entopts?: Record<string, any>) {
    const self = this
    return new IncidentEntity(self, entopts)
  }


  // Entity access: `client.InputInfo().list()` / `client.InputInfo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InputInfo(entopts?: Record<string, any>) {
    const self = this
    return new InputInfoEntity(self, entopts)
  }


  // Entity access: `client.JobSummary().list()` / `client.JobSummary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  JobSummary(entopts?: Record<string, any>) {
    const self = this
    return new JobSummaryEntity(self, entopts)
  }


  // Entity access: `client.ListAllMetricValue().list()` / `client.ListAllMetricValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListAllMetricValue(entopts?: Record<string, any>) {
    const self = this
    return new ListAllMetricValueEntity(self, entopts)
  }


  // Entity access: `client.ListAnnotation().list()` / `client.ListAnnotation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListAnnotation(entopts?: Record<string, any>) {
    const self = this
    return new ListAnnotationEntity(self, entopts)
  }


  // Entity access: `client.ListAsset().list()` / `client.ListAsset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListAsset(entopts?: Record<string, any>) {
    const self = this
    return new ListAssetEntity(self, entopts)
  }


  // Entity access: `client.ListBreakdownValue().list()` / `client.ListBreakdownValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListBreakdownValue(entopts?: Record<string, any>) {
    const self = this
    return new ListBreakdownValueEntity(self, entopts)
  }


  // Entity access: `client.ListDeliveryUsage().list()` / `client.ListDeliveryUsage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListDeliveryUsage(entopts?: Record<string, any>) {
    const self = this
    return new ListDeliveryUsageEntity(self, entopts)
  }


  // Entity access: `client.ListDimension().list()` / `client.ListDimension().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListDimension(entopts?: Record<string, any>) {
    const self = this
    return new ListDimensionEntity(self, entopts)
  }


  // Entity access: `client.ListDimensionValue().list()` / `client.ListDimensionValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListDimensionValue(entopts?: Record<string, any>) {
    const self = this
    return new ListDimensionValueEntity(self, entopts)
  }


  // Entity access: `client.ListDrmConfiguration().list()` / `client.ListDrmConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListDrmConfiguration(entopts?: Record<string, any>) {
    const self = this
    return new ListDrmConfigurationEntity(self, entopts)
  }


  // Entity access: `client.ListError().list()` / `client.ListError().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListError(entopts?: Record<string, any>) {
    const self = this
    return new ListErrorEntity(self, entopts)
  }


  // Entity access: `client.ListExport().list()` / `client.ListExport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListExport(entopts?: Record<string, any>) {
    const self = this
    return new ListExportEntity(self, entopts)
  }


  // Entity access: `client.ListFilter().list()` / `client.ListFilter().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListFilter(entopts?: Record<string, any>) {
    const self = this
    return new ListFilterEntity(self, entopts)
  }


  // Entity access: `client.ListFilterValue().list()` / `client.ListFilterValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListFilterValue(entopts?: Record<string, any>) {
    const self = this
    return new ListFilterValueEntity(self, entopts)
  }


  // Entity access: `client.ListIncident().list()` / `client.ListIncident().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListIncident(entopts?: Record<string, any>) {
    const self = this
    return new ListIncidentEntity(self, entopts)
  }


  // Entity access: `client.ListInsight().list()` / `client.ListInsight().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListInsight(entopts?: Record<string, any>) {
    const self = this
    return new ListInsightEntity(self, entopts)
  }


  // Entity access: `client.ListJob().list()` / `client.ListJob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListJob(entopts?: Record<string, any>) {
    const self = this
    return new ListJobEntity(self, entopts)
  }


  // Entity access: `client.ListLiveStream().list()` / `client.ListLiveStream().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListLiveStream(entopts?: Record<string, any>) {
    const self = this
    return new ListLiveStreamEntity(self, entopts)
  }


  // Entity access: `client.ListMonitoringDimension().list()` / `client.ListMonitoringDimension().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListMonitoringDimension(entopts?: Record<string, any>) {
    const self = this
    return new ListMonitoringDimensionEntity(self, entopts)
  }


  // Entity access: `client.ListMonitoringMetric().list()` / `client.ListMonitoringMetric().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListMonitoringMetric(entopts?: Record<string, any>) {
    const self = this
    return new ListMonitoringMetricEntity(self, entopts)
  }


  // Entity access: `client.ListPlaybackRestriction().list()` / `client.ListPlaybackRestriction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListPlaybackRestriction(entopts?: Record<string, any>) {
    const self = this
    return new ListPlaybackRestrictionEntity(self, entopts)
  }


  // Entity access: `client.ListRealTimeDimension().list()` / `client.ListRealTimeDimension().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListRealTimeDimension(entopts?: Record<string, any>) {
    const self = this
    return new ListRealTimeDimensionEntity(self, entopts)
  }


  // Entity access: `client.ListRealTimeMetric().list()` / `client.ListRealTimeMetric().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListRealTimeMetric(entopts?: Record<string, any>) {
    const self = this
    return new ListRealTimeMetricEntity(self, entopts)
  }


  // Entity access: `client.ListRelatedIncident().list()` / `client.ListRelatedIncident().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListRelatedIncident(entopts?: Record<string, any>) {
    const self = this
    return new ListRelatedIncidentEntity(self, entopts)
  }


  // Entity access: `client.ListSigningKey().list()` / `client.ListSigningKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListSigningKey(entopts?: Record<string, any>) {
    const self = this
    return new ListSigningKeyEntity(self, entopts)
  }


  // Entity access: `client.ListSubviewBreakdownValue().list()` / `client.ListSubviewBreakdownValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListSubviewBreakdownValue(entopts?: Record<string, any>) {
    const self = this
    return new ListSubviewBreakdownValueEntity(self, entopts)
  }


  // Entity access: `client.ListSubviewComparisonValue().list()` / `client.ListSubviewComparisonValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListSubviewComparisonValue(entopts?: Record<string, any>) {
    const self = this
    return new ListSubviewComparisonValueEntity(self, entopts)
  }


  // Entity access: `client.ListSubviewDimension().list()` / `client.ListSubviewDimension().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListSubviewDimension(entopts?: Record<string, any>) {
    const self = this
    return new ListSubviewDimensionEntity(self, entopts)
  }


  // Entity access: `client.ListSubviewDimensionValue().list()` / `client.ListSubviewDimensionValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListSubviewDimensionValue(entopts?: Record<string, any>) {
    const self = this
    return new ListSubviewDimensionValueEntity(self, entopts)
  }


  // Entity access: `client.ListTranscriptionVocabulary().list()` / `client.ListTranscriptionVocabulary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListTranscriptionVocabulary(entopts?: Record<string, any>) {
    const self = this
    return new ListTranscriptionVocabularyEntity(self, entopts)
  }


  // Entity access: `client.ListUpload().list()` / `client.ListUpload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListUpload(entopts?: Record<string, any>) {
    const self = this
    return new ListUploadEntity(self, entopts)
  }


  // Entity access: `client.ListUsageExport().list()` / `client.ListUsageExport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListUsageExport(entopts?: Record<string, any>) {
    const self = this
    return new ListUsageExportEntity(self, entopts)
  }


  // Entity access: `client.ListVideoView().list()` / `client.ListVideoView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListVideoView(entopts?: Record<string, any>) {
    const self = this
    return new ListVideoViewEntity(self, entopts)
  }


  // Entity access: `client.ListVideoViewExport().list()` / `client.ListVideoViewExport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListVideoViewExport(entopts?: Record<string, any>) {
    const self = this
    return new ListVideoViewExportEntity(self, entopts)
  }


  // Entity access: `client.ListWebhook().list()` / `client.ListWebhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListWebhook(entopts?: Record<string, any>) {
    const self = this
    return new ListWebhookEntity(self, entopts)
  }


  // Entity access: `client.LiveStream().list()` / `client.LiveStream().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LiveStream(entopts?: Record<string, any>) {
    const self = this
    return new LiveStreamEntity(self, entopts)
  }


  // Entity access: `client.LiveStreamPlaybackId().list()` / `client.LiveStreamPlaybackId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LiveStreamPlaybackId(entopts?: Record<string, any>) {
    const self = this
    return new LiveStreamPlaybackIdEntity(self, entopts)
  }


  // Entity access: `client.MetricTimeseriesData().list()` / `client.MetricTimeseriesData().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MetricTimeseriesData(entopts?: Record<string, any>) {
    const self = this
    return new MetricTimeseriesDataEntity(self, entopts)
  }


  // Entity access: `client.Moderate().list()` / `client.Moderate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Moderate(entopts?: Record<string, any>) {
    const self = this
    return new ModerateEntity(self, entopts)
  }


  // Entity access: `client.MonitoringBreakdown().list()` / `client.MonitoringBreakdown().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MonitoringBreakdown(entopts?: Record<string, any>) {
    const self = this
    return new MonitoringBreakdownEntity(self, entopts)
  }


  // Entity access: `client.MonitoringBreakdownTimeseries().list()` / `client.MonitoringBreakdownTimeseries().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MonitoringBreakdownTimeseries(entopts?: Record<string, any>) {
    const self = this
    return new MonitoringBreakdownTimeseriesEntity(self, entopts)
  }


  // Entity access: `client.MonitoringHistogramTimeseries().list()` / `client.MonitoringHistogramTimeseries().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MonitoringHistogramTimeseries(entopts?: Record<string, any>) {
    const self = this
    return new MonitoringHistogramTimeseriesEntity(self, entopts)
  }


  // Entity access: `client.MonitoringTimeseries().list()` / `client.MonitoringTimeseries().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MonitoringTimeseries(entopts?: Record<string, any>) {
    const self = this
    return new MonitoringTimeseriesEntity(self, entopts)
  }


  // Entity access: `client.Overall().list()` / `client.Overall().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Overall(entopts?: Record<string, any>) {
    const self = this
    return new OverallEntity(self, entopts)
  }


  // Entity access: `client.PlaybackRestriction().list()` / `client.PlaybackRestriction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PlaybackRestriction(entopts?: Record<string, any>) {
    const self = this
    return new PlaybackRestrictionEntity(self, entopts)
  }


  // Entity access: `client.RealTimeBreakdown().list()` / `client.RealTimeBreakdown().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RealTimeBreakdown(entopts?: Record<string, any>) {
    const self = this
    return new RealTimeBreakdownEntity(self, entopts)
  }


  // Entity access: `client.RealTimeHistogramTimeseries().list()` / `client.RealTimeHistogramTimeseries().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RealTimeHistogramTimeseries(entopts?: Record<string, any>) {
    const self = this
    return new RealTimeHistogramTimeseriesEntity(self, entopts)
  }


  // Entity access: `client.RealTimeTimeseries().list()` / `client.RealTimeTimeseries().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RealTimeTimeseries(entopts?: Record<string, any>) {
    const self = this
    return new RealTimeTimeseriesEntity(self, entopts)
  }


  // Entity access: `client.SignalLiveStreamComplete().list()` / `client.SignalLiveStreamComplete().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SignalLiveStreamComplete(entopts?: Record<string, any>) {
    const self = this
    return new SignalLiveStreamCompleteEntity(self, entopts)
  }


  // Entity access: `client.SigningKey().list()` / `client.SigningKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SigningKey(entopts?: Record<string, any>) {
    const self = this
    return new SigningKeyEntity(self, entopts)
  }


  // Entity access: `client.SimulcastTarget().list()` / `client.SimulcastTarget().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SimulcastTarget(entopts?: Record<string, any>) {
    const self = this
    return new SimulcastTargetEntity(self, entopts)
  }


  // Entity access: `client.StaticRendition().list()` / `client.StaticRendition().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StaticRendition(entopts?: Record<string, any>) {
    const self = this
    return new StaticRenditionEntity(self, entopts)
  }


  // Entity access: `client.SubviewBreakdownTimeseries().list()` / `client.SubviewBreakdownTimeseries().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubviewBreakdownTimeseries(entopts?: Record<string, any>) {
    const self = this
    return new SubviewBreakdownTimeseriesEntity(self, entopts)
  }


  // Entity access: `client.SubviewOverallValue().list()` / `client.SubviewOverallValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubviewOverallValue(entopts?: Record<string, any>) {
    const self = this
    return new SubviewOverallValueEntity(self, entopts)
  }


  // Entity access: `client.Summarize().list()` / `client.Summarize().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Summarize(entopts?: Record<string, any>) {
    const self = this
    return new SummarizeEntity(self, entopts)
  }


  // Entity access: `client.TranscriptionVocabulary().list()` / `client.TranscriptionVocabulary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TranscriptionVocabulary(entopts?: Record<string, any>) {
    const self = this
    return new TranscriptionVocabularyEntity(self, entopts)
  }


  // Entity access: `client.TranslateAudio().list()` / `client.TranslateAudio().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TranslateAudio(entopts?: Record<string, any>) {
    const self = this
    return new TranslateAudioEntity(self, entopts)
  }


  // Entity access: `client.TranslateCaption().list()` / `client.TranslateCaption().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TranslateCaption(entopts?: Record<string, any>) {
    const self = this
    return new TranslateCaptionEntity(self, entopts)
  }


  // Entity access: `client.UpdateAssetTrack().list()` / `client.UpdateAssetTrack().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateAssetTrack(entopts?: Record<string, any>) {
    const self = this
    return new UpdateAssetTrackEntity(self, entopts)
  }


  // Entity access: `client.Upload().list()` / `client.Upload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Upload(entopts?: Record<string, any>) {
    const self = this
    return new UploadEntity(self, entopts)
  }


  // Entity access: `client.UrlSigningKey().list()` / `client.UrlSigningKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UrlSigningKey(entopts?: Record<string, any>) {
    const self = this
    return new UrlSigningKeyEntity(self, entopts)
  }


  // Entity access: `client.VideoView().list()` / `client.VideoView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VideoView(entopts?: Record<string, any>) {
    const self = this
    return new VideoViewEntity(self, entopts)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Webhook(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEntity(self, entopts)
  }


  // Entity access: `client.WhoAmI().list()` / `client.WhoAmI().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WhoAmI(entopts?: Record<string, any>) {
    const self = this
    return new WhoAmIEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new MuxSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return MuxSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Mux' }
  }

  toString() {
    return 'Mux ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = MuxSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  MuxEntityBase,

  MuxSDK,
  SDK,
}


