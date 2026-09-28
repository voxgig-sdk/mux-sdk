import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { AssetOrLiveStreamId, AssetOrLiveStreamIdLoadMatch } from '../MuxTypes';
declare class AssetOrLiveStreamIdEntity extends MuxEntityBase<AssetOrLiveStreamId> {
    constructor(client: MuxSDK, entopts: any);
    make(this: AssetOrLiveStreamIdEntity): AssetOrLiveStreamIdEntity;
    load(this: any, reqmatch?: AssetOrLiveStreamIdLoadMatch, ctrl?: Control): Promise<AssetOrLiveStreamIdEntity>;
}
export { AssetOrLiveStreamIdEntity };
