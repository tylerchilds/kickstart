import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TActiveInputConnection } from './active-input-connection.d.ts';
import { TContext } from './context.d.ts';
import { TOutputConnection } from './output-connection.d.ts';
import { TPassiveAudioNodeInputConnection } from './passive-audio-node-input-connection.d.ts';
export type TAudioNodeConnections<T extends TContext> = Readonly<{
    activeInputs: Set<TActiveInputConnection<T>>[];
    outputs: Set<TOutputConnection<T>>;
    passiveInputs: WeakMap<IAudioNode<T>, Set<TPassiveAudioNodeInputConnection>>;
    renderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioNodeRenderer<T, IAudioNode<T>> : null;
}>;
//# sourceMappingURL=audio-node-connections.d.ts.map
