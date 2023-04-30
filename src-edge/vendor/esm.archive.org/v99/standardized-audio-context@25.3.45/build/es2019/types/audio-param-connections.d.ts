import { IAudioNode, IAudioParamRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TActiveInputConnection } from './active-input-connection.d.ts';
import { TContext } from './context.d.ts';
import { TPassiveAudioParamInputConnection } from './passive-audio-param-input-connection.d.ts';
export type TAudioParamConnections<T extends TContext> = Readonly<{
    activeInputs: Set<TActiveInputConnection<T>>;
    passiveInputs: WeakMap<IAudioNode<T>, Set<TPassiveAudioParamInputConnection>>;
    renderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioParamRenderer : null;
}>;
//# sourceMappingURL=audio-param-connections.d.ts.map
