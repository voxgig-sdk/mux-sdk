import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { Overall, OverallListMatch } from '../MuxTypes';
declare class OverallEntity extends MuxEntityBase<Overall> {
    constructor(client: MuxSDK, entopts: any);
    make(this: OverallEntity): OverallEntity;
    list(this: any, reqmatch?: OverallListMatch, ctrl?: Control): Promise<OverallEntity[]>;
}
export { OverallEntity };
