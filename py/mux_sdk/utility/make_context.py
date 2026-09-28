# Mux SDK utility: make_context

from mux_sdk.core.context import MuxContext


def make_context_util(ctxmap, basectx):
    return MuxContext(ctxmap, basectx)
