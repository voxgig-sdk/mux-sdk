import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { MetricTimeseriesData, MetricTimeseriesDataListMatch } from '../MuxTypes';
declare class MetricTimeseriesDataEntity extends MuxEntityBase<MetricTimeseriesData> {
    constructor(client: MuxSDK, entopts: any);
    make(this: MetricTimeseriesDataEntity): MetricTimeseriesDataEntity;
    list(this: any, reqmatch?: MetricTimeseriesDataListMatch, ctrl?: Control): Promise<MetricTimeseriesDataEntity[]>;
}
export { MetricTimeseriesDataEntity };
