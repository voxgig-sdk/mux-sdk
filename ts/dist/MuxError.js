"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuxError = void 0;
class MuxError extends Error {
    isMuxError = true;
    sdk = 'Mux';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.MuxError = MuxError;
//# sourceMappingURL=MuxError.js.map