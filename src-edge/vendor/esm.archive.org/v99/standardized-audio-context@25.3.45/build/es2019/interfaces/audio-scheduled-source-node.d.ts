import { TContext, TEventHandler } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IAudioScheduledSourceNodeEventMap } from './audio-scheduled-source-node-event-map.d.ts';
export interface IAudioScheduledSourceNode<T extends TContext> extends IAudioNode<T, IAudioScheduledSourceNodeEventMap> {
    onended: null | TEventHandler<this>;
    start(when?: number): void;
    stop(when?: number): void;
}
//# sourceMappingURL=audio-scheduled-source-node.d.ts.map
