import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { RealTimeTimeseries, RealTimeTimeseriesListMatch } from '../MuxTypes';
declare class RealTimeTimeseriesEntity extends MuxEntityBase<RealTimeTimeseries> {
    constructor(client: MuxSDK, entopts: any);
    make(this: RealTimeTimeseriesEntity): RealTimeTimeseriesEntity;
    list(this: any, reqmatch?: RealTimeTimeseriesListMatch, ctrl?: Control): Promise<RealTimeTimeseriesEntity[]>;
}
export { RealTimeTimeseriesEntity };
