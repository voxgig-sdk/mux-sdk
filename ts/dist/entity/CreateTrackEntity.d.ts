import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { CreateTrack, CreateTrackCreateData } from '../MuxTypes';
declare class CreateTrackEntity extends MuxEntityBase<CreateTrack> {
    constructor(client: MuxSDK, entopts: any);
    make(this: CreateTrackEntity): CreateTrackEntity;
    create(this: any, reqdata?: CreateTrackCreateData, ctrl?: Control): Promise<CreateTrackEntity>;
}
export { CreateTrackEntity };
