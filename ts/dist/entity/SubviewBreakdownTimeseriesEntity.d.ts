import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { SubviewBreakdownTimeseries, SubviewBreakdownTimeseriesListMatch } from '../MuxTypes';
declare class SubviewBreakdownTimeseriesEntity extends MuxEntityBase<SubviewBreakdownTimeseries> {
    constructor(client: MuxSDK, entopts: any);
    make(this: SubviewBreakdownTimeseriesEntity): SubviewBreakdownTimeseriesEntity;
    list(this: any, reqmatch?: SubviewBreakdownTimeseriesListMatch, ctrl?: Control): Promise<SubviewBreakdownTimeseriesEntity[]>;
}
export { SubviewBreakdownTimeseriesEntity };
