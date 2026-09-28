import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListSigningKey, ListSigningKeyListMatch } from '../MuxTypes';
declare class ListSigningKeyEntity extends MuxEntityBase<ListSigningKey> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListSigningKeyEntity): ListSigningKeyEntity;
    list(this: any, reqmatch?: ListSigningKeyListMatch, ctrl?: Control): Promise<ListSigningKeyEntity[]>;
}
export { ListSigningKeyEntity };
