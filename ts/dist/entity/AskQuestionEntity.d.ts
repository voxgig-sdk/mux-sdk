import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { AskQuestion, AskQuestionLoadMatch, AskQuestionCreateData } from '../MuxTypes';
declare class AskQuestionEntity extends MuxEntityBase<AskQuestion> {
    constructor(client: MuxSDK, entopts: any);
    make(this: AskQuestionEntity): AskQuestionEntity;
    load(this: any, reqmatch?: AskQuestionLoadMatch, ctrl?: Control): Promise<AskQuestionEntity>;
    create(this: any, reqdata?: AskQuestionCreateData, ctrl?: Control): Promise<AskQuestionEntity>;
}
export { AskQuestionEntity };
