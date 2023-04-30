import { TConnectAudioParamFunction } from './connect-audio-param-function.d.ts';
import { TConstantSourceNodeRendererFactory } from './constant-source-node-renderer-factory.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TNativeConstantSourceNodeFactory } from './native-constant-source-node-factory.d.ts';
import { TRenderAutomationFunction } from './render-automation-function.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
export type TConstantSourceNodeRendererFactoryFactory = (connectAudioParam: TConnectAudioParamFunction, createNativeConstantSourceNode: TNativeConstantSourceNodeFactory, getNativeAudioNode: TGetNativeAudioNodeFunction, renderAutomation: TRenderAutomationFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => TConstantSourceNodeRendererFactory;
//# sourceMappingURL=constant-source-node-renderer-factory-factory.d.ts.map
