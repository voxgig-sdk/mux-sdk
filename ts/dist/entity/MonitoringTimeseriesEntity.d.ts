import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { MonitoringTimeseries, MonitoringTimeseriesListMatch } from '../MuxTypes';
declare class MonitoringTimeseriesEntity extends MuxEntityBase<MonitoringTimeseries> {
    constructor(client: MuxSDK, entopts: any);
    make(this: MonitoringTimeseriesEntity): MonitoringTimeseriesEntity;
    list(this: any, reqmatch?: MonitoringTimeseriesListMatch, ctrl?: Control): Promise<MonitoringTimeseriesEntity[]>;
}
export { MonitoringTimeseriesEntity };
