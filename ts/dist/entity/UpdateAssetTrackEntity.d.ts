import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { UpdateAssetTrack, UpdateAssetTrackUpdateData } from '../MuxTypes';
declare class UpdateAssetTrackEntity extends MuxEntityBase<UpdateAssetTrack> {
    constructor(client: MuxSDK, entopts: any);
    make(this: UpdateAssetTrackEntity): UpdateAssetTrackEntity;
    update(this: any, reqdata?: UpdateAssetTrackUpdateData, ctrl?: Control): Promise<UpdateAssetTrackEntity>;
}
export { UpdateAssetTrackEntity };
