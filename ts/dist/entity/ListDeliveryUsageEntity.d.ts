import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListDeliveryUsage, ListDeliveryUsageListMatch } from '../MuxTypes';
declare class ListDeliveryUsageEntity extends MuxEntityBase<ListDeliveryUsage> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListDeliveryUsageEntity): ListDeliveryUsageEntity;
    list(this: any, reqmatch?: ListDeliveryUsageListMatch, ctrl?: Control): Promise<ListDeliveryUsageEntity[]>;
}
export { ListDeliveryUsageEntity };
