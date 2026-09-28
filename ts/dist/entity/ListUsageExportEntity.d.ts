import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListUsageExport, ListUsageExportListMatch } from '../MuxTypes';
declare class ListUsageExportEntity extends MuxEntityBase<ListUsageExport> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListUsageExportEntity): ListUsageExportEntity;
    list(this: any, reqmatch?: ListUsageExportListMatch, ctrl?: Control): Promise<ListUsageExportEntity[]>;
}
export { ListUsageExportEntity };
