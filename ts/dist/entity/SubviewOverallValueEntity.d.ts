import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { SubviewOverallValue, SubviewOverallValueListMatch } from '../MuxTypes';
declare class SubviewOverallValueEntity extends MuxEntityBase<SubviewOverallValue> {
    constructor(client: MuxSDK, entopts: any);
    make(this: SubviewOverallValueEntity): SubviewOverallValueEntity;
    list(this: any, reqmatch?: SubviewOverallValueListMatch, ctrl?: Control): Promise<SubviewOverallValueEntity[]>;
}
export { SubviewOverallValueEntity };
