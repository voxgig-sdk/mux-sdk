import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { DirectiveRunDetail, DirectiveRunDetailLoadMatch, DirectiveRunDetailListMatch } from '../MuxTypes';
declare class DirectiveRunDetailEntity extends MuxEntityBase<DirectiveRunDetail> {
    constructor(client: MuxSDK, entopts: any);
    make(this: DirectiveRunDetailEntity): DirectiveRunDetailEntity;
    load(this: any, reqmatch?: DirectiveRunDetailLoadMatch, ctrl?: Control): Promise<DirectiveRunDetailEntity>;
    list(this: any, reqmatch?: DirectiveRunDetailListMatch, ctrl?: Control): Promise<DirectiveRunDetailEntity[]>;
}
export { DirectiveRunDetailEntity };
