import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { TranslateAudio, TranslateAudioLoadMatch, TranslateAudioCreateData } from '../MuxTypes';
declare class TranslateAudioEntity extends MuxEntityBase<TranslateAudio> {
    constructor(client: MuxSDK, entopts: any);
    make(this: TranslateAudioEntity): TranslateAudioEntity;
    load(this: any, reqmatch?: TranslateAudioLoadMatch, ctrl?: Control): Promise<TranslateAudioEntity>;
    create(this: any, reqdata?: TranslateAudioCreateData, ctrl?: Control): Promise<TranslateAudioEntity>;
}
export { TranslateAudioEntity };
