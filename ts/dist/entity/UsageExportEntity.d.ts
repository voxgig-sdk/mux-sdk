import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { UsageExport, UsageExportListMatch } from '../MuxTypes';
declare class UsageExportEntity extends MuxEntityBase<UsageExport> {
    constructor(client: MuxSDK, entopts: any);
    make(this: UsageExportEntity): UsageExportEntity;
    list(this: any, reqmatch?: UsageExportListMatch, ctrl?: Control): Promise<UsageExportEntity[]>;
}
export { UsageExportEntity };
