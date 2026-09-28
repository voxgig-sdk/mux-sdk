import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListInsight, ListInsightListMatch } from '../MuxTypes';
declare class ListInsightEntity extends MuxEntityBase<ListInsight> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListInsightEntity): ListInsightEntity;
    list(this: any, reqmatch?: ListInsightListMatch, ctrl?: Control): Promise<ListInsightEntity[]>;
}
export { ListInsightEntity };
