import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { SignalLiveStreamComplete, SignalLiveStreamCompleteUpdateData } from '../MuxTypes';
declare class SignalLiveStreamCompleteEntity extends MuxEntityBase<SignalLiveStreamComplete> {
    constructor(client: MuxSDK, entopts: any);
    make(this: SignalLiveStreamCompleteEntity): SignalLiveStreamCompleteEntity;
    update(this: any, reqdata?: SignalLiveStreamCompleteUpdateData, ctrl?: Control): Promise<SignalLiveStreamCompleteEntity>;
}
export { SignalLiveStreamCompleteEntity };
