import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { PlaybackRestriction, PlaybackRestrictionLoadMatch, PlaybackRestrictionCreateData, PlaybackRestrictionUpdateData, PlaybackRestrictionRemoveMatch } from '../MuxTypes';
declare class PlaybackRestrictionEntity extends MuxEntityBase<PlaybackRestriction> {
    constructor(client: MuxSDK, entopts: any);
    make(this: PlaybackRestrictionEntity): PlaybackRestrictionEntity;
    load(this: any, reqmatch?: PlaybackRestrictionLoadMatch, ctrl?: Control): Promise<PlaybackRestrictionEntity>;
    create(this: any, reqdata?: PlaybackRestrictionCreateData, ctrl?: Control): Promise<PlaybackRestrictionEntity>;
    update(this: any, reqdata?: PlaybackRestrictionUpdateData, ctrl?: Control): Promise<PlaybackRestrictionEntity>;
    remove(this: any, reqmatch?: PlaybackRestrictionRemoveMatch, ctrl?: Control): Promise<PlaybackRestrictionEntity>;
}
export { PlaybackRestrictionEntity };
