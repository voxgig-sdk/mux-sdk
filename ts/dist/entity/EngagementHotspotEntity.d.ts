import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { EngagementHotspot, EngagementHotspotListMatch } from '../MuxTypes';
declare class EngagementHotspotEntity extends MuxEntityBase<EngagementHotspot> {
    constructor(client: MuxSDK, entopts: any);
    make(this: EngagementHotspotEntity): EngagementHotspotEntity;
    list(this: any, reqmatch?: EngagementHotspotListMatch, ctrl?: Control): Promise<EngagementHotspotEntity[]>;
}
export { EngagementHotspotEntity };
