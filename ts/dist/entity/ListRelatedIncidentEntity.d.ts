import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListRelatedIncident, ListRelatedIncidentListMatch } from '../MuxTypes';
declare class ListRelatedIncidentEntity extends MuxEntityBase<ListRelatedIncident> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListRelatedIncidentEntity): ListRelatedIncidentEntity;
    list(this: any, reqmatch?: ListRelatedIncidentListMatch, ctrl?: Control): Promise<ListRelatedIncidentEntity[]>;
}
export { ListRelatedIncidentEntity };
