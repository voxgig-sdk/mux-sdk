import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { LiveStream, LiveStreamLoadMatch, LiveStreamCreateData, LiveStreamUpdateData, LiveStreamRemoveMatch } from '../MuxTypes';
declare class LiveStreamEntity extends MuxEntityBase<LiveStream> {
    constructor(client: MuxSDK, entopts: any);
    make(this: LiveStreamEntity): LiveStreamEntity;
    load(this: any, reqmatch?: LiveStreamLoadMatch, ctrl?: Control): Promise<LiveStreamEntity>;
    create(this: any, reqdata?: LiveStreamCreateData, ctrl?: Control): Promise<LiveStreamEntity>;
    update(this: any, reqdata?: LiveStreamUpdateData, ctrl?: Control): Promise<LiveStreamEntity>;
    remove(this: any, reqmatch?: LiveStreamRemoveMatch, ctrl?: Control): Promise<LiveStreamEntity>;
}
export { LiveStreamEntity };
