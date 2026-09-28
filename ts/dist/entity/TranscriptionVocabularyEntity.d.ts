import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { TranscriptionVocabulary, TranscriptionVocabularyLoadMatch, TranscriptionVocabularyCreateData, TranscriptionVocabularyUpdateData, TranscriptionVocabularyRemoveMatch } from '../MuxTypes';
declare class TranscriptionVocabularyEntity extends MuxEntityBase<TranscriptionVocabulary> {
    constructor(client: MuxSDK, entopts: any);
    make(this: TranscriptionVocabularyEntity): TranscriptionVocabularyEntity;
    load(this: any, reqmatch?: TranscriptionVocabularyLoadMatch, ctrl?: Control): Promise<TranscriptionVocabularyEntity>;
    create(this: any, reqdata?: TranscriptionVocabularyCreateData, ctrl?: Control): Promise<TranscriptionVocabularyEntity>;
    update(this: any, reqdata?: TranscriptionVocabularyUpdateData, ctrl?: Control): Promise<TranscriptionVocabularyEntity>;
    remove(this: any, reqmatch?: TranscriptionVocabularyRemoveMatch, ctrl?: Control): Promise<TranscriptionVocabularyEntity>;
}
export { TranscriptionVocabularyEntity };
