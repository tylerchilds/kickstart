import { TAudioParamMap, TContext, TErrorEventHandler } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IAudioWorkletNodeEventMap } from './audio-worklet-node-event-map.d.ts';
export interface IAudioWorkletNode<T extends TContext> extends IAudioNode<T, IAudioWorkletNodeEventMap> {
    onprocessorerror: null | TErrorEventHandler<this>;
    readonly parameters: TAudioParamMap;
    readonly port: MessagePort;
}
//# sourceMappingURL=audio-worklet-node.d.ts.map
