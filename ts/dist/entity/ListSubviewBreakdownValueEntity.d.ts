import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListSubviewBreakdownValue, ListSubviewBreakdownValueListMatch } from '../MuxTypes';
declare class ListSubviewBreakdownValueEntity extends MuxEntityBase<ListSubviewBreakdownValue> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListSubviewBreakdownValueEntity): ListSubviewBreakdownValueEntity;
    list(this: any, reqmatch?: ListSubviewBreakdownValueListMatch, ctrl?: Control): Promise<ListSubviewBreakdownValueEntity[]>;
}
export { ListSubviewBreakdownValueEntity };
