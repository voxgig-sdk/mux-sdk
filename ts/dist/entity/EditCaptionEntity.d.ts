import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { EditCaption, EditCaptionLoadMatch, EditCaptionCreateData } from '../MuxTypes';
declare class EditCaptionEntity extends MuxEntityBase<EditCaption> {
    constructor(client: MuxSDK, entopts: any);
    make(this: EditCaptionEntity): EditCaptionEntity;
    load(this: any, reqmatch?: EditCaptionLoadMatch, ctrl?: Control): Promise<EditCaptionEntity>;
    create(this: any, reqdata?: EditCaptionCreateData, ctrl?: Control): Promise<EditCaptionEntity>;
}
export { EditCaptionEntity };
