import { TBiquadFilterNodeRendererFactory } from './biquad-filter-node-renderer-factory.d.ts';
import { TConnectAudioParamFunction } from './connect-audio-param-function.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TNativeBiquadFilterNodeFactory } from './native-biquad-filter-node-factory.d.ts';
import { TRenderAutomationFunction } from './render-automation-function.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
export type TBiquadFilterNodeRendererFactoryFactory = (connectAudioParam: TConnectAudioParamFunction, createNativeBiquadFilterNode: TNativeBiquadFilterNodeFactory, getNativeAudioNode: TGetNativeAudioNodeFunction, renderAutomation: TRenderAutomationFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => TBiquadFilterNodeRendererFactory;
//# sourceMappingURL=biquad-filter-node-renderer-factory-factory.d.ts.map
