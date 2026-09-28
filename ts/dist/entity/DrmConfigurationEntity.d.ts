import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { DrmConfiguration, DrmConfigurationLoadMatch } from '../MuxTypes';
declare class DrmConfigurationEntity extends MuxEntityBase<DrmConfiguration> {
    constructor(client: MuxSDK, entopts: any);
    make(this: DrmConfigurationEntity): DrmConfigurationEntity;
    load(this: any, reqmatch?: DrmConfigurationLoadMatch, ctrl?: Control): Promise<DrmConfigurationEntity>;
}
export { DrmConfigurationEntity };
