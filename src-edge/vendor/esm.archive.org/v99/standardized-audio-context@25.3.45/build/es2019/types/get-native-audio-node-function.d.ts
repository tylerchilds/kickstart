import { IAudioNode, INativeAudioNodeFaker } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
import { TNativeAudioNode } from './native-audio-node.d.ts';
export type TGetNativeAudioNodeFunction = <T extends TContext, U extends TNativeAudioNode | INativeAudioNodeFaker>(audioNode: IAudioNode<T>) => U;
//# sourceMappingURL=get-native-audio-node-function.d.ts.map
