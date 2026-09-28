import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { GenerateEngagementInsight, GenerateEngagementInsightLoadMatch, GenerateEngagementInsightCreateData } from '../MuxTypes';
declare class GenerateEngagementInsightEntity extends MuxEntityBase<GenerateEngagementInsight> {
    constructor(client: MuxSDK, entopts: any);
    make(this: GenerateEngagementInsightEntity): GenerateEngagementInsightEntity;
    load(this: any, reqmatch?: GenerateEngagementInsightLoadMatch, ctrl?: Control): Promise<GenerateEngagementInsightEntity>;
    create(this: any, reqdata?: GenerateEngagementInsightCreateData, ctrl?: Control): Promise<GenerateEngagementInsightEntity>;
}
export { GenerateEngagementInsightEntity };
