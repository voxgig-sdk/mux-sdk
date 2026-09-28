import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { UrlSigningKey, UrlSigningKeyRemoveMatch } from '../MuxTypes';
declare class UrlSigningKeyEntity extends MuxEntityBase<UrlSigningKey> {
    constructor(client: MuxSDK, entopts: any);
    make(this: UrlSigningKeyEntity): UrlSigningKeyEntity;
    remove(this: any, reqmatch?: UrlSigningKeyRemoveMatch, ctrl?: Control): Promise<UrlSigningKeyEntity>;
}
export { UrlSigningKeyEntity };
