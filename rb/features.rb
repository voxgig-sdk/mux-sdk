# Mux SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MuxFeatures
  def self.make_feature(name)
    case name
    when "base"
      MuxBaseFeature.new
    when "debug"
      MuxDebugFeature.new
    when "idempotency"
      MuxIdempotencyFeature.new
    when "metrics"
      MuxMetricsFeature.new
    when "paging"
      MuxPagingFeature.new
    when "ratelimit"
      MuxRatelimitFeature.new
    when "retry"
      MuxRetryFeature.new
    when "test"
      MuxTestFeature.new
    when "timeout"
      MuxTimeoutFeature.new
    else
      MuxBaseFeature.new
    end
  end
end
