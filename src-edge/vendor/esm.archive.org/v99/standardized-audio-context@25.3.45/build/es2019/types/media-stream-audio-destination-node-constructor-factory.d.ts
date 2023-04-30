import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TMediaStreamAudioDestinationNodeConstructor } from './media-stream-audio-destination-node-constructor.d.ts';
import { TNativeMediaStreamAudioDestinationNodeFactory } from './native-media-stream-audio-destination-node-factory.d.ts';
export type TMediaStreamAudioDestinationNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createNativeMediaStreamAudioDestinationNode: TNativeMediaStreamAudioDestinationNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction) => TMediaStreamAudioDestinationNodeConstructor;
//# sourceMappingURL=media-stream-audio-destination-node-constructor-factory.d.ts.map
