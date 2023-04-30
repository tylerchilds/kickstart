import { IAudioNode } from '../interfaces/index.d.ts';
import { TNativeAudioNode } from './native-audio-node.d.ts';
export type TIsAnyAudioNodeFunction = (anything: unknown) => anything is IAudioNode<any> | TNativeAudioNode;
//# sourceMappingURL=is-any-audio-node-function.d.ts.map
