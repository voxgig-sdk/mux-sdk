import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { FindKeyMoment, FindKeyMomentLoadMatch, FindKeyMomentCreateData } from '../MuxTypes';
declare class FindKeyMomentEntity extends MuxEntityBase<FindKeyMoment> {
    constructor(client: MuxSDK, entopts: any);
    make(this: FindKeyMomentEntity): FindKeyMomentEntity;
    load(this: any, reqmatch?: FindKeyMomentLoadMatch, ctrl?: Control): Promise<FindKeyMomentEntity>;
    create(this: any, reqdata?: FindKeyMomentCreateData, ctrl?: Control): Promise<FindKeyMomentEntity>;
}
export { FindKeyMomentEntity };
