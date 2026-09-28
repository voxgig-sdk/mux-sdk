import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { CreatePlaybackId, CreatePlaybackIdCreateData } from '../MuxTypes';
declare class CreatePlaybackIdEntity extends MuxEntityBase<CreatePlaybackId> {
    constructor(client: MuxSDK, entopts: any);
    make(this: CreatePlaybackIdEntity): CreatePlaybackIdEntity;
    create(this: any, reqdata?: CreatePlaybackIdCreateData, ctrl?: Control): Promise<CreatePlaybackIdEntity>;
}
export { CreatePlaybackIdEntity };
