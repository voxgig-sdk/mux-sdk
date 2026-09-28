import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListPlaybackRestriction, ListPlaybackRestrictionListMatch } from '../MuxTypes';
declare class ListPlaybackRestrictionEntity extends MuxEntityBase<ListPlaybackRestriction> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListPlaybackRestrictionEntity): ListPlaybackRestrictionEntity;
    list(this: any, reqmatch?: ListPlaybackRestrictionListMatch, ctrl?: Control): Promise<ListPlaybackRestrictionEntity[]>;
}
export { ListPlaybackRestrictionEntity };
