import { TAudioBufferSourceNodeRendererFactory } from './audio-buffer-source-node-renderer-factory.d.ts';
import { TConnectAudioParamFunction } from './connect-audio-param-function.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TNativeAudioBufferSourceNodeFactory } from './native-audio-buffer-source-node-factory.d.ts';
import { TRenderAutomationFunction } from './render-automation-function.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
export type TAudioBufferSourceNodeRendererFactoryFactory = (connectAudioParam: TConnectAudioParamFunction, createNativeAudioBufferSourceNode: TNativeAudioBufferSourceNodeFactory, getNativeAudioNode: TGetNativeAudioNodeFunction, renderAutomation: TRenderAutomationFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => TAudioBufferSourceNodeRendererFactory;
//# sourceMappingURL=audio-buffer-source-node-renderer-factory-factory.d.ts.map
