import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { DirectiveRunList, DirectiveRunListListMatch } from '../MuxTypes';
declare class DirectiveRunListEntity extends MuxEntityBase<DirectiveRunList> {
    constructor(client: MuxSDK, entopts: any);
    make(this: DirectiveRunListEntity): DirectiveRunListEntity;
    list(this: any, reqmatch?: DirectiveRunListListMatch, ctrl?: Control): Promise<DirectiveRunListEntity[]>;
}
export { DirectiveRunListEntity };
