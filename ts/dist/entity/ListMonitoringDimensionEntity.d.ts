import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListMonitoringDimension, ListMonitoringDimensionListMatch } from '../MuxTypes';
declare class ListMonitoringDimensionEntity extends MuxEntityBase<ListMonitoringDimension> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListMonitoringDimensionEntity): ListMonitoringDimensionEntity;
    list(this: any, reqmatch?: ListMonitoringDimensionListMatch, ctrl?: Control): Promise<ListMonitoringDimensionEntity[]>;
}
export { ListMonitoringDimensionEntity };
