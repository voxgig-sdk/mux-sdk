import { Context } from './Context';
declare class MuxError extends Error {
    isMuxError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { MuxError };
