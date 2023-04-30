import { TConnectAudioParamFunction } from './connect-audio-param-function.d.ts';
import { TDynamicsCompressorNodeRendererFactory } from './dynamics-compressor-node-renderer-factory.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TNativeDynamicsCompressorNodeFactory } from './native-dynamics-compressor-node-factory.d.ts';
import { TRenderAutomationFunction } from './render-automation-function.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
export type TDynamicsCompressorNodeRendererFactoryFactory = (connectAudioParam: TConnectAudioParamFunction, createNativeDynamicsCompressorNode: TNativeDynamicsCompressorNodeFactory, getNativeAudioNode: TGetNativeAudioNodeFunction, renderAutomation: TRenderAutomationFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => TDynamicsCompressorNodeRendererFactory;
//# sourceMappingURL=dynamics-compressor-node-renderer-factory-factory.d.ts.map
