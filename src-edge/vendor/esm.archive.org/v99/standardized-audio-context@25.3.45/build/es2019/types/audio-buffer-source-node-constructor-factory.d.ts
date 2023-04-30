import { TAudioBufferSourceNodeConstructor } from './audio-buffer-source-node-constructor.d.ts';
import { TAudioBufferSourceNodeRendererFactory } from './audio-buffer-source-node-renderer-factory.d.ts';
import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TAudioParamFactory } from './audio-param-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeAudioBufferSourceNodeFactory } from './native-audio-buffer-source-node-factory.d.ts';
import { TWrapEventListenerFunction } from './wrap-event-listener-function.d.ts';
export type TAudioBufferSourceNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createAudioBufferSourceNodeRenderer: TAudioBufferSourceNodeRendererFactory, createAudioParam: TAudioParamFactory, createInvalidStateError: TInvalidStateErrorFactory, createNativeAudioBufferSourceNode: TNativeAudioBufferSourceNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, wrapEventListener: TWrapEventListenerFunction) => TAudioBufferSourceNodeConstructor;
//# sourceMappingURL=audio-buffer-source-node-constructor-factory.d.ts.map
