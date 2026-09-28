import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListSubviewComparisonValue, ListSubviewComparisonValueListMatch } from '../MuxTypes';
declare class ListSubviewComparisonValueEntity extends MuxEntityBase<ListSubviewComparisonValue> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListSubviewComparisonValueEntity): ListSubviewComparisonValueEntity;
    list(this: any, reqmatch?: ListSubviewComparisonValueListMatch, ctrl?: Control): Promise<ListSubviewComparisonValueEntity[]>;
}
export { ListSubviewComparisonValueEntity };
