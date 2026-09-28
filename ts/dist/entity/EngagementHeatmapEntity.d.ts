import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { EngagementHeatmap, EngagementHeatmapListMatch } from '../MuxTypes';
declare class EngagementHeatmapEntity extends MuxEntityBase<EngagementHeatmap> {
    constructor(client: MuxSDK, entopts: any);
    make(this: EngagementHeatmapEntity): EngagementHeatmapEntity;
    list(this: any, reqmatch?: EngagementHeatmapListMatch, ctrl?: Control): Promise<EngagementHeatmapEntity[]>;
}
export { EngagementHeatmapEntity };
