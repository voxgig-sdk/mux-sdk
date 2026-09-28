import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListFilter, ListFilterListMatch } from '../MuxTypes';
declare class ListFilterEntity extends MuxEntityBase<ListFilter> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListFilterEntity): ListFilterEntity;
    list(this: any, reqmatch?: ListFilterListMatch, ctrl?: Control): Promise<ListFilterEntity[]>;
}
export { ListFilterEntity };
