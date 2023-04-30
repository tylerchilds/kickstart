import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
import { TNativeAudioNode } from './native-audio-node.d.ts';
export type TAudioNodeConstructor = new <T extends TContext, EventMap extends Record<string, Event> = {}>(context: T, isActive: boolean, nativeAudioNode: TNativeAudioNode, audioNodeRenderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioNodeRenderer<T, IAudioNode<T, EventMap>> : null) => IAudioNode<T, EventMap>;
//# sourceMappingURL=audio-node-constructor.d.ts.map
