import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TMediaElementAudioSourceNodeConstructor } from './media-element-audio-source-node-constructor.d.ts';
import { TNativeMediaElementAudioSourceNodeFactory } from './native-media-element-audio-source-node-factory.d.ts';
export type TMediaElementAudioSourceNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createNativeMediaElementAudioSourceNode: TNativeMediaElementAudioSourceNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction) => TMediaElementAudioSourceNodeConstructor;
//# sourceMappingURL=media-element-audio-source-node-constructor-factory.d.ts.map
