import { TConnectAudioParamFunction } from './connect-audio-param-function.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TNativeStereoPannerNodeFactory } from './native-stereo-panner-node-factory.d.ts';
import { TRenderAutomationFunction } from './render-automation-function.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
import { TStereoPannerNodeRendererFactory } from './stereo-panner-node-renderer-factory.d.ts';
export type TStereoPannerNodeRendererFactoryFactory = (connectAudioParam: TConnectAudioParamFunction, createNativeStereoPannerNode: TNativeStereoPannerNodeFactory, getNativeAudioNode: TGetNativeAudioNodeFunction, renderAutomation: TRenderAutomationFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => TStereoPannerNodeRendererFactory;
//# sourceMappingURL=stereo-panner-node-renderer-factory-factory.d.ts.map
