import { IAudioNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TNativeAudioNode } from './native-audio-node.d.ts';
import { TNativeOfflineAudioContext } from './native-offline-audio-context.d.ts';
export type TRenderInputsOfAudioNodeFunction = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(audioNode: IAudioNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext, nativeAudioNode: TNativeAudioNode) => Promise<void>;
//# sourceMappingURL=render-inputs-of-audio-node-function.d.ts.map
