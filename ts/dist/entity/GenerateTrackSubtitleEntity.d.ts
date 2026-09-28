import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { GenerateTrackSubtitle, GenerateTrackSubtitleCreateData } from '../MuxTypes';
declare class GenerateTrackSubtitleEntity extends MuxEntityBase<GenerateTrackSubtitle> {
    constructor(client: MuxSDK, entopts: any);
    make(this: GenerateTrackSubtitleEntity): GenerateTrackSubtitleEntity;
    create(this: any, reqdata?: GenerateTrackSubtitleCreateData, ctrl?: Control): Promise<GenerateTrackSubtitleEntity>;
}
export { GenerateTrackSubtitleEntity };
