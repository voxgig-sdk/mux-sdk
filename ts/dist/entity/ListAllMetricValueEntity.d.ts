import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListAllMetricValue, ListAllMetricValueListMatch } from '../MuxTypes';
declare class ListAllMetricValueEntity extends MuxEntityBase<ListAllMetricValue> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListAllMetricValueEntity): ListAllMetricValueEntity;
    list(this: any, reqmatch?: ListAllMetricValueListMatch, ctrl?: Control): Promise<ListAllMetricValueEntity[]>;
}
export { ListAllMetricValueEntity };
