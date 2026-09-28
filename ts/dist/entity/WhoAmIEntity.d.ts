import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { WhoAmI, WhoAmILoadMatch } from '../MuxTypes';
declare class WhoAmIEntity extends MuxEntityBase<WhoAmI> {
    constructor(client: MuxSDK, entopts: any);
    make(this: WhoAmIEntity): WhoAmIEntity;
    load(this: any, reqmatch?: WhoAmILoadMatch, ctrl?: Control): Promise<WhoAmIEntity>;
}
export { WhoAmIEntity };
