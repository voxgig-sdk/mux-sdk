import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { Asset, AssetLoadMatch, AssetCreateData, AssetUpdateData, AssetRemoveMatch } from '../MuxTypes';
declare class AssetEntity extends MuxEntityBase<Asset> {
    constructor(client: MuxSDK, entopts: any);
    make(this: AssetEntity): AssetEntity;
    load(this: any, reqmatch?: AssetLoadMatch, ctrl?: Control): Promise<AssetEntity>;
    create(this: any, reqdata?: AssetCreateData, ctrl?: Control): Promise<AssetEntity>;
    update(this: any, reqdata?: AssetUpdateData, ctrl?: Control): Promise<AssetEntity>;
    remove(this: any, reqmatch?: AssetRemoveMatch, ctrl?: Control): Promise<AssetEntity>;
}
export { AssetEntity };
