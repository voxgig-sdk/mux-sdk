import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { TranslateCaption, TranslateCaptionLoadMatch, TranslateCaptionCreateData } from '../MuxTypes';
declare class TranslateCaptionEntity extends MuxEntityBase<TranslateCaption> {
    constructor(client: MuxSDK, entopts: any);
    make(this: TranslateCaptionEntity): TranslateCaptionEntity;
    load(this: any, reqmatch?: TranslateCaptionLoadMatch, ctrl?: Control): Promise<TranslateCaptionEntity>;
    create(this: any, reqdata?: TranslateCaptionCreateData, ctrl?: Control): Promise<TranslateCaptionEntity>;
}
export { TranslateCaptionEntity };
