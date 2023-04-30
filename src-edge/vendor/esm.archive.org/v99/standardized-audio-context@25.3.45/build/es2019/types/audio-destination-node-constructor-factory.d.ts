import { TAudioDestinationNodeConstructor } from './audio-destination-node-constructor.d.ts';
import { TAudioDestinationNodeRendererFactory } from './audio-destination-node-renderer-factory.d.ts';
import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIndexSizeErrorFactory } from './index-size-error-factory.d.ts';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeAudioDestinationNodeFactory } from './native-audio-destination-node-factory.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
export type TAudioDestinationNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createAudioDestinationNodeRenderer: TAudioDestinationNodeRendererFactory, createIndexSizeError: TIndexSizeErrorFactory, createInvalidStateError: TInvalidStateErrorFactory, createNativeAudioDestinationNode: TNativeAudioDestinationNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => TAudioDestinationNodeConstructor;
//# sourceMappingURL=audio-destination-node-constructor-factory.d.ts.map
