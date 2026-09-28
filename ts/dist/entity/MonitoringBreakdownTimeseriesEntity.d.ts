import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { MonitoringBreakdownTimeseries, MonitoringBreakdownTimeseriesListMatch } from '../MuxTypes';
declare class MonitoringBreakdownTimeseriesEntity extends MuxEntityBase<MonitoringBreakdownTimeseries> {
    constructor(client: MuxSDK, entopts: any);
    make(this: MonitoringBreakdownTimeseriesEntity): MonitoringBreakdownTimeseriesEntity;
    list(this: any, reqmatch?: MonitoringBreakdownTimeseriesListMatch, ctrl?: Control): Promise<MonitoringBreakdownTimeseriesEntity[]>;
}
export { MonitoringBreakdownTimeseriesEntity };
