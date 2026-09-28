import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { DirectiveRunDetail, DirectiveRunDetailLoadMatch } from '../MuxTypes';
declare class DirectiveRunDetailEntity extends MuxEntityBase<DirectiveRunDetail> {
    constructor(client: MuxSDK, entopts: any);
    make(this: DirectiveRunDetailEntity): DirectiveRunDetailEntity;
    load(this: any, reqmatch?: DirectiveRunDetailLoadMatch, ctrl?: Control): Promise<DirectiveRunDetailEntity>;
}
export { DirectiveRunDetailEntity };
