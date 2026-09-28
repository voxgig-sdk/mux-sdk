import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListSubviewDimensionValue, ListSubviewDimensionValueLoadMatch } from '../MuxTypes';
declare class ListSubviewDimensionValueEntity extends MuxEntityBase<ListSubviewDimensionValue> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListSubviewDimensionValueEntity): ListSubviewDimensionValueEntity;
    load(this: any, reqmatch?: ListSubviewDimensionValueLoadMatch, ctrl?: Control): Promise<ListSubviewDimensionValueEntity>;
}
export { ListSubviewDimensionValueEntity };
