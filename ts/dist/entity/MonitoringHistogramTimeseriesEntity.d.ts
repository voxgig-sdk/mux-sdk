import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { MonitoringHistogramTimeseries, MonitoringHistogramTimeseriesListMatch } from '../MuxTypes';
declare class MonitoringHistogramTimeseriesEntity extends MuxEntityBase<MonitoringHistogramTimeseries> {
    constructor(client: MuxSDK, entopts: any);
    make(this: MonitoringHistogramTimeseriesEntity): MonitoringHistogramTimeseriesEntity;
    list(this: any, reqmatch?: MonitoringHistogramTimeseriesListMatch, ctrl?: Control): Promise<MonitoringHistogramTimeseriesEntity[]>;
}
export { MonitoringHistogramTimeseriesEntity };
