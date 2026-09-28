import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListError, ListErrorListMatch } from '../MuxTypes';
declare class ListErrorEntity extends MuxEntityBase<ListError> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListErrorEntity): ListErrorEntity;
    list(this: any, reqmatch?: ListErrorListMatch, ctrl?: Control): Promise<ListErrorEntity[]>;
}
export { ListErrorEntity };
