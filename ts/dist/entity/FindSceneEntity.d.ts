import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { FindScene, FindSceneLoadMatch, FindSceneCreateData } from '../MuxTypes';
declare class FindSceneEntity extends MuxEntityBase<FindScene> {
    constructor(client: MuxSDK, entopts: any);
    make(this: FindSceneEntity): FindSceneEntity;
    load(this: any, reqmatch?: FindSceneLoadMatch, ctrl?: Control): Promise<FindSceneEntity>;
    create(this: any, reqdata?: FindSceneCreateData, ctrl?: Control): Promise<FindSceneEntity>;
}
export { FindSceneEntity };
