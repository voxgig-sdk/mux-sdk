import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListRealTimeMetric, ListRealTimeMetricListMatch } from '../MuxTypes';
declare class ListRealTimeMetricEntity extends MuxEntityBase<ListRealTimeMetric> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListRealTimeMetricEntity): ListRealTimeMetricEntity;
    list(this: any, reqmatch?: ListRealTimeMetricListMatch, ctrl?: Control): Promise<ListRealTimeMetricEntity[]>;
}
export { ListRealTimeMetricEntity };
