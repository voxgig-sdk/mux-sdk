import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListAnnotation, ListAnnotationListMatch } from '../MuxTypes';
declare class ListAnnotationEntity extends MuxEntityBase<ListAnnotation> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListAnnotationEntity): ListAnnotationEntity;
    list(this: any, reqmatch?: ListAnnotationListMatch, ctrl?: Control): Promise<ListAnnotationEntity[]>;
}
export { ListAnnotationEntity };
