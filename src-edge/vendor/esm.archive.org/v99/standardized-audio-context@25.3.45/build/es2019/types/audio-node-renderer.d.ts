import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TAudioNodeRenderer<T extends TContext, U extends IAudioNode<T> = IAudioNode<T>> = T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioNodeRenderer<T, U> : null;
//# sourceMappingURL=audio-node-renderer.d.ts.map
