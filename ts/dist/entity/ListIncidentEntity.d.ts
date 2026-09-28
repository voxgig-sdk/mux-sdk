import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListIncident, ListIncidentListMatch } from '../MuxTypes';
declare class ListIncidentEntity extends MuxEntityBase<ListIncident> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListIncidentEntity): ListIncidentEntity;
    list(this: any, reqmatch?: ListIncidentListMatch, ctrl?: Control): Promise<ListIncidentEntity[]>;
}
export { ListIncidentEntity };
