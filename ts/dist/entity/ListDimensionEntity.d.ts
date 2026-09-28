import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListDimension, ListDimensionListMatch } from '../MuxTypes';
declare class ListDimensionEntity extends MuxEntityBase<ListDimension> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListDimensionEntity): ListDimensionEntity;
    list(this: any, reqmatch?: ListDimensionListMatch, ctrl?: Control): Promise<ListDimensionEntity[]>;
}
export { ListDimensionEntity };
