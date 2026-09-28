import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { MonitoringBreakdown, MonitoringBreakdownListMatch } from '../MuxTypes';
declare class MonitoringBreakdownEntity extends MuxEntityBase<MonitoringBreakdown> {
    constructor(client: MuxSDK, entopts: any);
    make(this: MonitoringBreakdownEntity): MonitoringBreakdownEntity;
    list(this: any, reqmatch?: MonitoringBreakdownListMatch, ctrl?: Control): Promise<MonitoringBreakdownEntity[]>;
}
export { MonitoringBreakdownEntity };
