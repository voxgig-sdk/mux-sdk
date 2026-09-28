import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { JobSummary, JobSummaryCreateData } from '../MuxTypes';
declare class JobSummaryEntity extends MuxEntityBase<JobSummary> {
    constructor(client: MuxSDK, entopts: any);
    make(this: JobSummaryEntity): JobSummaryEntity;
    create(this: any, reqdata?: JobSummaryCreateData, ctrl?: Control): Promise<JobSummaryEntity>;
}
export { JobSummaryEntity };
