import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListBreakdownValue, ListBreakdownValueListMatch } from '../MuxTypes';
declare class ListBreakdownValueEntity extends MuxEntityBase<ListBreakdownValue> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListBreakdownValueEntity): ListBreakdownValueEntity;
    list(this: any, reqmatch?: ListBreakdownValueListMatch, ctrl?: Control): Promise<ListBreakdownValueEntity[]>;
}
export { ListBreakdownValueEntity };
