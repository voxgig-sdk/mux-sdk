import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { SimulcastTarget, SimulcastTargetLoadMatch, SimulcastTargetCreateData } from '../MuxTypes';
declare class SimulcastTargetEntity extends MuxEntityBase<SimulcastTarget> {
    constructor(client: MuxSDK, entopts: any);
    make(this: SimulcastTargetEntity): SimulcastTargetEntity;
    load(this: any, reqmatch?: SimulcastTargetLoadMatch, ctrl?: Control): Promise<SimulcastTargetEntity>;
    create(this: any, reqdata?: SimulcastTargetCreateData, ctrl?: Control): Promise<SimulcastTargetEntity>;
}
export { SimulcastTargetEntity };
