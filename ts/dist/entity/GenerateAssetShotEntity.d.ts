import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { GenerateAssetShot, GenerateAssetShotCreateData } from '../MuxTypes';
declare class GenerateAssetShotEntity extends MuxEntityBase<GenerateAssetShot> {
    constructor(client: MuxSDK, entopts: any);
    make(this: GenerateAssetShotEntity): GenerateAssetShotEntity;
    create(this: any, reqdata?: GenerateAssetShotCreateData, ctrl?: Control): Promise<GenerateAssetShotEntity>;
}
export { GenerateAssetShotEntity };
