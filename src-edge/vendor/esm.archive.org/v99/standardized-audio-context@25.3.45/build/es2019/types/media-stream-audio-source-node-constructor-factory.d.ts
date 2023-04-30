import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TMediaStreamAudioSourceNodeConstructor } from './media-stream-audio-source-node-constructor.d.ts';
import { TNativeMediaStreamAudioSourceNodeFactory } from './native-media-stream-audio-source-node-factory.d.ts';
export type TMediaStreamAudioSourceNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createNativeMediaStreamAudioSourceNode: TNativeMediaStreamAudioSourceNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction) => TMediaStreamAudioSourceNodeConstructor;
//# sourceMappingURL=media-stream-audio-source-node-constructor-factory.d.ts.map
