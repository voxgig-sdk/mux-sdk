import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { Summarize, SummarizeLoadMatch, SummarizeCreateData } from '../MuxTypes';
declare class SummarizeEntity extends MuxEntityBase<Summarize> {
    constructor(client: MuxSDK, entopts: any);
    make(this: SummarizeEntity): SummarizeEntity;
    load(this: any, reqmatch?: SummarizeLoadMatch, ctrl?: Control): Promise<SummarizeEntity>;
    create(this: any, reqdata?: SummarizeCreateData, ctrl?: Control): Promise<SummarizeEntity>;
}
export { SummarizeEntity };
