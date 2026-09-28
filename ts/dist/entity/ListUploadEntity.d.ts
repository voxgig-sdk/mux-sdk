import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListUpload, ListUploadListMatch } from '../MuxTypes';
declare class ListUploadEntity extends MuxEntityBase<ListUpload> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListUploadEntity): ListUploadEntity;
    list(this: any, reqmatch?: ListUploadListMatch, ctrl?: Control): Promise<ListUploadEntity[]>;
}
export { ListUploadEntity };
