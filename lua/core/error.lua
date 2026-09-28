-- Mux SDK error

local MuxError = {}
MuxError.__index = MuxError


function MuxError.new(code, msg, ctx)
  local self = setmetatable({}, MuxError)
  self.is_sdk_error = true
  self.sdk = "Mux"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MuxError:error()
  return self.msg
end


function MuxError:__tostring()
  return self.msg
end


return MuxError
