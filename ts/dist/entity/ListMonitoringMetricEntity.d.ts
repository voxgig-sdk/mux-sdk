import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListMonitoringMetric, ListMonitoringMetricListMatch } from '../MuxTypes';
declare class ListMonitoringMetricEntity extends MuxEntityBase<ListMonitoringMetric> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListMonitoringMetricEntity): ListMonitoringMetricEntity;
    list(this: any, reqmatch?: ListMonitoringMetricListMatch, ctrl?: Control): Promise<ListMonitoringMetricEntity[]>;
}
export { ListMonitoringMetricEntity };
