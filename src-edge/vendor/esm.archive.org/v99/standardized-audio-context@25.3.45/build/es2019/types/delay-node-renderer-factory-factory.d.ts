import { TConnectAudioParamFunction } from './connect-audio-param-function.d.ts';
import { TDelayNodeRendererFactory } from './delay-node-renderer-factory.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TNativeDelayNodeFactory } from './native-delay-node-factory.d.ts';
import { TRenderAutomationFunction } from './render-automation-function.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
export type TDelayNodeRendererFactoryFactory = (connectAudioParam: TConnectAudioParamFunction, createNativeDelayNode: TNativeDelayNodeFactory, getNativeAudioNode: TGetNativeAudioNodeFunction, renderAutomation: TRenderAutomationFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => TDelayNodeRendererFactory;
//# sourceMappingURL=delay-node-renderer-factory-factory.d.ts.map
