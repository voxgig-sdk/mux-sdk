import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { Incident, IncidentLoadMatch } from '../MuxTypes';
declare class IncidentEntity extends MuxEntityBase<Incident> {
    constructor(client: MuxSDK, entopts: any);
    make(this: IncidentEntity): IncidentEntity;
    load(this: any, reqmatch?: IncidentLoadMatch, ctrl?: Control): Promise<IncidentEntity>;
}
export { IncidentEntity };
