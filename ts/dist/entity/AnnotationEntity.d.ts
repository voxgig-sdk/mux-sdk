import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { Annotation, AnnotationLoadMatch, AnnotationListMatch, AnnotationCreateData, AnnotationUpdateData, AnnotationRemoveMatch } from '../MuxTypes';
declare class AnnotationEntity extends MuxEntityBase<Annotation> {
    constructor(client: MuxSDK, entopts: any);
    make(this: AnnotationEntity): AnnotationEntity;
    load(this: any, reqmatch?: AnnotationLoadMatch, ctrl?: Control): Promise<AnnotationEntity>;
    list(this: any, reqmatch?: AnnotationListMatch, ctrl?: Control): Promise<AnnotationEntity[]>;
    create(this: any, reqdata?: AnnotationCreateData, ctrl?: Control): Promise<AnnotationEntity>;
    update(this: any, reqdata?: AnnotationUpdateData, ctrl?: Control): Promise<AnnotationEntity>;
    remove(this: any, reqmatch?: AnnotationRemoveMatch, ctrl?: Control): Promise<AnnotationEntity>;
}
export { AnnotationEntity };
