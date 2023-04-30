import { IAudioNode, INativeAudioNodeFaker } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
import { TNativeAudioNode } from './native-audio-node.d.ts';
export type TAudioNodeStore = WeakMap<IAudioNode<TContext>, TNativeAudioNode | INativeAudioNodeFaker>;
//# sourceMappingURL=audio-node-store.d.ts.map
