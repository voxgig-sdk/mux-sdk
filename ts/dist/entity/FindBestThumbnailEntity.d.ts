import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { FindBestThumbnail, FindBestThumbnailLoadMatch, FindBestThumbnailCreateData } from '../MuxTypes';
declare class FindBestThumbnailEntity extends MuxEntityBase<FindBestThumbnail> {
    constructor(client: MuxSDK, entopts: any);
    make(this: FindBestThumbnailEntity): FindBestThumbnailEntity;
    load(this: any, reqmatch?: FindBestThumbnailLoadMatch, ctrl?: Control): Promise<FindBestThumbnailEntity>;
    create(this: any, reqdata?: FindBestThumbnailCreateData, ctrl?: Control): Promise<FindBestThumbnailEntity>;
}
export { FindBestThumbnailEntity };
