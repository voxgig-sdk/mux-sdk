import { MuxEntityBase } from '../MuxEntityBase';
import type { MuxSDK } from '../MuxSDK';
import type { Control } from '../types';
import type { ListWebhook, ListWebhookListMatch } from '../MuxTypes';
declare class ListWebhookEntity extends MuxEntityBase<ListWebhook> {
    constructor(client: MuxSDK, entopts: any);
    make(this: ListWebhookEntity): ListWebhookEntity;
    list(this: any, reqmatch?: ListWebhookListMatch, ctrl?: Control): Promise<ListWebhookEntity[]>;
}
export { ListWebhookEntity };
