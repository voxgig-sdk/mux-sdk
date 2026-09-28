import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { InputInfo, InputInfoListMatch } from '../MuxTypes';
declare class InputInfoEntity extends MuxEntityBase<InputInfo> {
    constructor(client: MuxSDK, entopts: any);
    make(this: InputInfoEntity): InputInfoEntity;
    list(this: any, reqmatch?: InputInfoListMatch, ctrl?: Control): Promise<InputInfoEntity[]>;
}
export { InputInfoEntity };
