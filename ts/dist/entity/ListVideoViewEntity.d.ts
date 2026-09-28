import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListVideoView, ListVideoViewListMatch } from '../MuxTypes';
declare class ListVideoViewEntity extends MuxEntityBase<ListVideoView> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListVideoViewEntity): ListVideoViewEntity;
    list(this: any, reqmatch?: ListVideoViewListMatch, ctrl?: Control): Promise<ListVideoViewEntity[]>;
}
export { ListVideoViewEntity };
