import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { JobSummary, JobSummaryListMatch, JobSummaryCreateData } from '../MuxTypes';
declare class JobSummaryEntity extends MuxEntityBase<JobSummary> {
    constructor(client: MuxSDK, entopts: any);
    make(this: JobSummaryEntity): JobSummaryEntity;
    list(this: any, reqmatch?: JobSummaryListMatch, ctrl?: Control): Promise<JobSummaryEntity[]>;
    create(this: any, reqdata?: JobSummaryCreateData, ctrl?: Control): Promise<JobSummaryEntity>;
}
export { JobSummaryEntity };
