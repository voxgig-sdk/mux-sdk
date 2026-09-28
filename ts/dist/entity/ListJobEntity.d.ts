import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListJob, ListJobListMatch } from '../MuxTypes';
declare class ListJobEntity extends MuxEntityBase<ListJob> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListJobEntity): ListJobEntity;
    list(this: any, reqmatch?: ListJobListMatch, ctrl?: Control): Promise<ListJobEntity[]>;
}
export { ListJobEntity };
