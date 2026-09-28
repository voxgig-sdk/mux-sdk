import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { StaticRendition, StaticRenditionCreateData } from '../MuxTypes';
declare class StaticRenditionEntity extends MuxEntityBase<StaticRendition> {
    constructor(client: MuxSDK, entopts: any);
    make(this: StaticRenditionEntity): StaticRenditionEntity;
    create(this: any, reqdata?: StaticRenditionCreateData, ctrl?: Control): Promise<StaticRenditionEntity>;
}
export { StaticRenditionEntity };
