import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListAsset, ListAssetListMatch } from '../MuxTypes';
declare class ListAssetEntity extends MuxEntityBase<ListAsset> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListAssetEntity): ListAssetEntity;
    list(this: any, reqmatch?: ListAssetListMatch, ctrl?: Control): Promise<ListAssetEntity[]>;
}
export { ListAssetEntity };
