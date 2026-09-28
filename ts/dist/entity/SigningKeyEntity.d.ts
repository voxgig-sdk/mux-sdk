import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { SigningKey, SigningKeyLoadMatch, SigningKeyCreateData, SigningKeyRemoveMatch } from '../MuxTypes';
declare class SigningKeyEntity extends MuxEntityBase<SigningKey> {
    constructor(client: MuxSDK, entopts: any);
    make(this: SigningKeyEntity): SigningKeyEntity;
    load(this: any, reqmatch?: SigningKeyLoadMatch, ctrl?: Control): Promise<SigningKeyEntity>;
    create(this: any, reqdata?: SigningKeyCreateData, ctrl?: Control): Promise<SigningKeyEntity>;
    remove(this: any, reqmatch?: SigningKeyRemoveMatch, ctrl?: Control): Promise<SigningKeyEntity>;
}
export { SigningKeyEntity };
