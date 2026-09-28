import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { VideoView, VideoViewLoadMatch } from '../MuxTypes';
declare class VideoViewEntity extends MuxEntityBase<VideoView> {
    constructor(client: MuxSDK, entopts: any);
    make(this: VideoViewEntity): VideoViewEntity;
    load(this: any, reqmatch?: VideoViewLoadMatch, ctrl?: Control): Promise<VideoViewEntity>;
}
export { VideoViewEntity };
