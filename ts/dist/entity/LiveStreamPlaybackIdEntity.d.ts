import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { LiveStreamPlaybackId, LiveStreamPlaybackIdLoadMatch } from '../MuxTypes';
declare class LiveStreamPlaybackIdEntity extends MuxEntityBase<LiveStreamPlaybackId> {
    constructor(client: MuxSDK, entopts: any);
    make(this: LiveStreamPlaybackIdEntity): LiveStreamPlaybackIdEntity;
    load(this: any, reqmatch?: LiveStreamPlaybackIdLoadMatch, ctrl?: Control): Promise<LiveStreamPlaybackIdEntity>;
}
export { LiveStreamPlaybackIdEntity };
