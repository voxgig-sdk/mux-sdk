import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { GenerateChapter, GenerateChapterLoadMatch, GenerateChapterCreateData } from '../MuxTypes';
declare class GenerateChapterEntity extends MuxEntityBase<GenerateChapter> {
    constructor(client: MuxSDK, entopts: any);
    make(this: GenerateChapterEntity): GenerateChapterEntity;
    load(this: any, reqmatch?: GenerateChapterLoadMatch, ctrl?: Control): Promise<GenerateChapterEntity>;
    create(this: any, reqdata?: GenerateChapterCreateData, ctrl?: Control): Promise<GenerateChapterEntity>;
}
export { GenerateChapterEntity };
