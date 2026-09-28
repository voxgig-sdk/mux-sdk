# Mux SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MuxUtility.registrar = ->(u) {
  u.clean = MuxUtilities::Clean
  u.done = MuxUtilities::Done
  u.make_error = MuxUtilities::MakeError
  u.feature_add = MuxUtilities::FeatureAdd
  u.feature_hook = MuxUtilities::FeatureHook
  u.feature_init = MuxUtilities::FeatureInit
  u.fetcher = MuxUtilities::Fetcher
  u.make_fetch_def = MuxUtilities::MakeFetchDef
  u.make_context = MuxUtilities::MakeContext
  u.make_options = MuxUtilities::MakeOptions
  u.make_request = MuxUtilities::MakeRequest
  u.make_response = MuxUtilities::MakeResponse
  u.make_result = MuxUtilities::MakeResult
  u.make_point = MuxUtilities::MakePoint
  u.make_spec = MuxUtilities::MakeSpec
  u.make_url = MuxUtilities::MakeUrl
  u.param = MuxUtilities::Param
  u.prepare_auth = MuxUtilities::PrepareAuth
  u.prepare_body = MuxUtilities::PrepareBody
  u.prepare_headers = MuxUtilities::PrepareHeaders
  u.prepare_method = MuxUtilities::PrepareMethod
  u.prepare_params = MuxUtilities::PrepareParams
  u.prepare_path = MuxUtilities::PreparePath
  u.prepare_query = MuxUtilities::PrepareQuery
  u.graphql_body = MuxUtilities::GraphqlBody
  u.graphql_errors = MuxUtilities::GraphqlErrors
  u.result_basic = MuxUtilities::ResultBasic
  u.result_body = MuxUtilities::ResultBody
  u.result_headers = MuxUtilities::ResultHeaders
  u.transform_request = MuxUtilities::TransformRequest
  u.transform_response = MuxUtilities::TransformResponse
}
