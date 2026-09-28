# Mux SDK utility: make_context
require_relative '../core/context'
module MuxUtilities
  MakeContext = ->(ctxmap, basectx) {
    MuxContext.new(ctxmap, basectx)
  }
end
