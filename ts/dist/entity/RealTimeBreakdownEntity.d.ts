import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { RealTimeBreakdown, RealTimeBreakdownListMatch } from '../MuxTypes';
declare class RealTimeBreakdownEntity extends MuxEntityBase<RealTimeBreakdown> {
    constructor(client: MuxSDK, entopts: any);
    make(this: RealTimeBreakdownEntity): RealTimeBreakdownEntity;
    list(this: any, reqmatch?: RealTimeBreakdownListMatch, ctrl?: Control): Promise<RealTimeBreakdownEntity[]>;
}
export { RealTimeBreakdownEntity };
