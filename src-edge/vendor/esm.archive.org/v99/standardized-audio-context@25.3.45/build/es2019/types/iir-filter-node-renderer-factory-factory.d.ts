import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TIIRFilterNodeRendererFactory } from './iir-filter-node-renderer-factory.d.ts';
import { TNativeAudioBufferSourceNodeFactory } from './native-audio-buffer-source-node-factory.d.ts';
import { TNativeOfflineAudioContextConstructor } from './native-offline-audio-context-constructor.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
import { TRenderNativeOfflineAudioContextFunction } from './render-native-offline-audio-context-function.d.ts';
export type TIIRFilterNodeRendererFactoryFactory = (createNativeAudioBufferSourceNode: TNativeAudioBufferSourceNodeFactory, getNativeAudioNode: TGetNativeAudioNodeFunction, nativeOfflineAudioContextConstructor: null | TNativeOfflineAudioContextConstructor, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction, renderNativeOfflineAudioContext: TRenderNativeOfflineAudioContextFunction) => TIIRFilterNodeRendererFactory;
//# sourceMappingURL=iir-filter-node-renderer-factory-factory.d.ts.map
