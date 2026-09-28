import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListVideoViewExport, ListVideoViewExportListMatch } from '../MuxTypes';
declare class ListVideoViewExportEntity extends MuxEntityBase<ListVideoViewExport> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListVideoViewExportEntity): ListVideoViewExportEntity;
    list(this: any, reqmatch?: ListVideoViewExportListMatch, ctrl?: Control): Promise<ListVideoViewExportEntity[]>;
}
export { ListVideoViewExportEntity };
