import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { Directive, DirectiveLoadMatch, DirectiveListMatch, DirectiveCreateData, DirectiveRemoveMatch } from '../MuxTypes';
declare class DirectiveEntity extends MuxEntityBase<Directive> {
    constructor(client: MuxSDK, entopts: any);
    make(this: DirectiveEntity): DirectiveEntity;
    load(this: any, reqmatch?: DirectiveLoadMatch, ctrl?: Control): Promise<DirectiveEntity>;
    list(this: any, reqmatch?: DirectiveListMatch, ctrl?: Control): Promise<DirectiveEntity[]>;
    create(this: any, reqdata?: DirectiveCreateData, ctrl?: Control): Promise<DirectiveEntity>;
    remove(this: any, reqmatch?: DirectiveRemoveMatch, ctrl?: Control): Promise<DirectiveEntity>;
}
export { DirectiveEntity };
