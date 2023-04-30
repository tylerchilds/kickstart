import { IAudioWorkletNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TNativeContext } from './native-context.d.ts';
export type TAddUnrenderedAudioWorkletNodeFunction = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(nativeContext: TNativeContext, audioWorkletNode: IAudioWorkletNode<T>) => void;
//# sourceMappingURL=add-unrendered-audio-worklet-node-function.d.ts.map
