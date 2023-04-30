import { TConnectAudioParamFunction } from './connect-audio-param-function.d.ts';
import { TGainNodeRendererFactory } from './gain-node-renderer-factory.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TNativeGainNodeFactory } from './native-gain-node-factory.d.ts';
import { TRenderAutomationFunction } from './render-automation-function.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
export type TGainNodeRendererFactoryFactory = (connectAudioParam: TConnectAudioParamFunction, createNativeGainNode: TNativeGainNodeFactory, getNativeAudioNode: TGetNativeAudioNodeFunction, renderAutomation: TRenderAutomationFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => TGainNodeRendererFactory;
//# sourceMappingURL=gain-node-renderer-factory-factory.d.ts.map
