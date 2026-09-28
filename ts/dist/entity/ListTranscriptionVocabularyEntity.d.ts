import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListTranscriptionVocabulary, ListTranscriptionVocabularyListMatch } from '../MuxTypes';
declare class ListTranscriptionVocabularyEntity extends MuxEntityBase<ListTranscriptionVocabulary> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListTranscriptionVocabularyEntity): ListTranscriptionVocabularyEntity;
    list(this: any, reqmatch?: ListTranscriptionVocabularyListMatch, ctrl?: Control): Promise<ListTranscriptionVocabularyEntity[]>;
}
export { ListTranscriptionVocabularyEntity };
