# Mux SDK feature factory

from mux_sdk.feature.base_feature import MuxBaseFeature
from mux_sdk.feature.debug_feature import MuxDebugFeature
from mux_sdk.feature.idempotency_feature import MuxIdempotencyFeature
from mux_sdk.feature.metrics_feature import MuxMetricsFeature
from mux_sdk.feature.paging_feature import MuxPagingFeature
from mux_sdk.feature.ratelimit_feature import MuxRatelimitFeature
from mux_sdk.feature.retry_feature import MuxRetryFeature
from mux_sdk.feature.test_feature import MuxTestFeature
from mux_sdk.feature.timeout_feature import MuxTimeoutFeature


_FEATURES = {
    "base": lambda: MuxBaseFeature(),
    "debug": lambda: MuxDebugFeature(),
    "idempotency": lambda: MuxIdempotencyFeature(),
    "metrics": lambda: MuxMetricsFeature(),
    "paging": lambda: MuxPagingFeature(),
    "ratelimit": lambda: MuxRatelimitFeature(),
    "retry": lambda: MuxRetryFeature(),
    "test": lambda: MuxTestFeature(),
    "timeout": lambda: MuxTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
