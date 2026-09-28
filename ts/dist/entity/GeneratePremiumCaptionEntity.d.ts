import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { GeneratePremiumCaption, GeneratePremiumCaptionLoadMatch, GeneratePremiumCaptionCreateData } from '../MuxTypes';
declare class GeneratePremiumCaptionEntity extends MuxEntityBase<GeneratePremiumCaption> {
    constructor(client: MuxSDK, entopts: any);
    make(this: GeneratePremiumCaptionEntity): GeneratePremiumCaptionEntity;
    load(this: any, reqmatch?: GeneratePremiumCaptionLoadMatch, ctrl?: Control): Promise<GeneratePremiumCaptionEntity>;
    create(this: any, reqdata?: GeneratePremiumCaptionCreateData, ctrl?: Control): Promise<GeneratePremiumCaptionEntity>;
}
export { GeneratePremiumCaptionEntity };
