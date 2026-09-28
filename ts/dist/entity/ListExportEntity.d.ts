import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListExport, ListExportListMatch } from '../MuxTypes';
declare class ListExportEntity extends MuxEntityBase<ListExport> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListExportEntity): ListExportEntity;
    list(this: any, reqmatch?: ListExportListMatch, ctrl?: Control): Promise<ListExportEntity[]>;
}
export { ListExportEntity };
