import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListRealTimeDimension, ListRealTimeDimensionListMatch } from '../MuxTypes';
declare class ListRealTimeDimensionEntity extends MuxEntityBase<ListRealTimeDimension> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListRealTimeDimensionEntity): ListRealTimeDimensionEntity;
    list(this: any, reqmatch?: ListRealTimeDimensionListMatch, ctrl?: Control): Promise<ListRealTimeDimensionEntity[]>;
}
export { ListRealTimeDimensionEntity };
