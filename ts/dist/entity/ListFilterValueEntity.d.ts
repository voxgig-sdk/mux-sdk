import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListFilterValue, ListFilterValueLoadMatch } from '../MuxTypes';
declare class ListFilterValueEntity extends MuxEntityBase<ListFilterValue> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListFilterValueEntity): ListFilterValueEntity;
    load(this: any, reqmatch?: ListFilterValueLoadMatch, ctrl?: Control): Promise<ListFilterValueEntity>;
}
export { ListFilterValueEntity };
