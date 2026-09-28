import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { RealTimeHistogramTimeseries, RealTimeHistogramTimeseriesListMatch } from '../MuxTypes';
declare class RealTimeHistogramTimeseriesEntity extends MuxEntityBase<RealTimeHistogramTimeseries> {
    constructor(client: MuxSDK, entopts: any);
    make(this: RealTimeHistogramTimeseriesEntity): RealTimeHistogramTimeseriesEntity;
    list(this: any, reqmatch?: RealTimeHistogramTimeseriesListMatch, ctrl?: Control): Promise<RealTimeHistogramTimeseriesEntity[]>;
}
export { RealTimeHistogramTimeseriesEntity };
