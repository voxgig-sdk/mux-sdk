import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListDrmConfiguration, ListDrmConfigurationListMatch } from '../MuxTypes';
declare class ListDrmConfigurationEntity extends MuxEntityBase<ListDrmConfiguration> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListDrmConfigurationEntity): ListDrmConfigurationEntity;
    list(this: any, reqmatch?: ListDrmConfigurationListMatch, ctrl?: Control): Promise<ListDrmConfigurationEntity[]>;
}
export { ListDrmConfigurationEntity };
