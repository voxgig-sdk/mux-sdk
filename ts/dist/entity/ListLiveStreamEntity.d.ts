import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListLiveStream, ListLiveStreamListMatch } from '../MuxTypes';
declare class ListLiveStreamEntity extends MuxEntityBase<ListLiveStream> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListLiveStreamEntity): ListLiveStreamEntity;
    list(this: any, reqmatch?: ListLiveStreamListMatch, ctrl?: Control): Promise<ListLiveStreamEntity[]>;
}
export { ListLiveStreamEntity };
