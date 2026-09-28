import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { Moderate, ModerateLoadMatch, ModerateCreateData } from '../MuxTypes';
declare class ModerateEntity extends MuxEntityBase<Moderate> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ModerateEntity): ModerateEntity;
    load(this: any, reqmatch?: ModerateLoadMatch, ctrl?: Control): Promise<ModerateEntity>;
    create(this: any, reqdata?: ModerateCreateData, ctrl?: Control): Promise<ModerateEntity>;
}
export { ModerateEntity };
