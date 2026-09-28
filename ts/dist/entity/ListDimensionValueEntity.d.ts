import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListDimensionValue, ListDimensionValueLoadMatch, ListDimensionValueListMatch } from '../MuxTypes';
declare class ListDimensionValueEntity extends MuxEntityBase<ListDimensionValue> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListDimensionValueEntity): ListDimensionValueEntity;
    load(this: any, reqmatch?: ListDimensionValueLoadMatch, ctrl?: Control): Promise<ListDimensionValueEntity>;
    list(this: any, reqmatch?: ListDimensionValueListMatch, ctrl?: Control): Promise<ListDimensionValueEntity[]>;
}
export { ListDimensionValueEntity };
