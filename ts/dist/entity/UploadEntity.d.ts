import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { Upload, UploadLoadMatch, UploadListMatch, UploadCreateData, UploadUpdateData } from '../MuxTypes';
declare class UploadEntity extends MuxEntityBase<Upload> {
    constructor(client: MuxSDK, entopts: any);
    make(this: UploadEntity): UploadEntity;
    load(this: any, reqmatch?: UploadLoadMatch, ctrl?: Control): Promise<UploadEntity>;
    list(this: any, reqmatch?: UploadListMatch, ctrl?: Control): Promise<UploadEntity[]>;
    create(this: any, reqdata?: UploadCreateData, ctrl?: Control): Promise<UploadEntity>;
    update(this: any, reqdata?: UploadUpdateData, ctrl?: Control): Promise<UploadEntity>;
}
export { UploadEntity };
