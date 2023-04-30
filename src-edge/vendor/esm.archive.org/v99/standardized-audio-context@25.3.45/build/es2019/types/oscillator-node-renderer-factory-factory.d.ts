import { TConnectAudioParamFunction } from './connect-audio-param-function.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TNativeOscillatorNodeFactory } from './native-oscillator-node-factory.d.ts';
import { TOscillatorNodeRendererFactory } from './oscillator-node-renderer-factory.d.ts';
import { TRenderAutomationFunction } from './render-automation-function.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
export type TOscillatorNodeRendererFactoryFactory = (connectAudioParam: TConnectAudioParamFunction, createNativeOscillatorNode: TNativeOscillatorNodeFactory, getNativeAudioNode: TGetNativeAudioNodeFunction, renderAutomation: TRenderAutomationFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => TOscillatorNodeRendererFactory;
//# sourceMappingURL=oscillator-node-renderer-factory-factory.d.ts.map
