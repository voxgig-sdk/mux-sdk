import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { AssetShot, AssetShotLoadMatch } from '../MuxTypes';
declare class AssetShotEntity extends MuxEntityBase<AssetShot> {
    constructor(client: MuxSDK, entopts: any);
    make(this: AssetShotEntity): AssetShotEntity;
    load(this: any, reqmatch?: AssetShotLoadMatch, ctrl?: Control): Promise<AssetShotEntity>;
}
export { AssetShotEntity };
