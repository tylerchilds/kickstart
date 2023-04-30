import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TNativeWaveShaperNodeFactory } from './native-wave-shaper-node-factory.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
import { TWaveShaperNodeRendererFactory } from './wave-shaper-node-renderer-factory.d.ts';
export type TWaveShaperNodeRendererFactoryFactory = (createNativeWaveShaperNode: TNativeWaveShaperNodeFactory, getNativeAudioNode: TGetNativeAudioNodeFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => TWaveShaperNodeRendererFactory;
//# sourceMappingURL=wave-shaper-node-renderer-factory-factory.d.ts.map
