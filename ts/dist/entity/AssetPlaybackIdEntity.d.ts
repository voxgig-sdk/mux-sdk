import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { AssetPlaybackId, AssetPlaybackIdLoadMatch } from '../MuxTypes';
declare class AssetPlaybackIdEntity extends MuxEntityBase<AssetPlaybackId> {
    constructor(client: MuxSDK, entopts: any);
    make(this: AssetPlaybackIdEntity): AssetPlaybackIdEntity;
    load(this: any, reqmatch?: AssetPlaybackIdLoadMatch, ctrl?: Control): Promise<AssetPlaybackIdEntity>;
}
export { AssetPlaybackIdEntity };
