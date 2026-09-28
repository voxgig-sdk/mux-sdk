import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListSubviewDimension, ListSubviewDimensionLoadMatch } from '../MuxTypes';
declare class ListSubviewDimensionEntity extends MuxEntityBase<ListSubviewDimension> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListSubviewDimensionEntity): ListSubviewDimensionEntity;
    load(this: any, reqmatch?: ListSubviewDimensionLoadMatch, ctrl?: Control): Promise<ListSubviewDimensionEntity>;
}
export { ListSubviewDimensionEntity };
