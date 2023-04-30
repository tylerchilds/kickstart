import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
import { TNativeAudioNode } from './native-audio-node.d.ts';
export type TAddAudioNodeConnectionsFunction = <T extends TContext>(audioNode: IAudioNode<T>, audioNodeRenderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioNodeRenderer<T, IAudioNode<T>> : null, nativeAudioNode: TNativeAudioNode) => void;
//# sourceMappingURL=add-audio-node-connections-function.d.ts.map
