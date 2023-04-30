import { TConnectAudioParamFunction } from './connect-audio-param-function.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TNativeChannelMergerNodeFactory } from './native-channel-merger-node-factory.d.ts';
import { TNativeConstantSourceNodeFactory } from './native-constant-source-node-factory.d.ts';
import { TNativeGainNodeFactory } from './native-gain-node-factory.d.ts';
import { TNativeOfflineAudioContextConstructor } from './native-offline-audio-context-constructor.d.ts';
import { TNativePannerNodeFactory } from './native-panner-node-factory.d.ts';
import { TPannerNodeRendererFactory } from './panner-node-renderer-factory.d.ts';
import { TRenderAutomationFunction } from './render-automation-function.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
import { TRenderNativeOfflineAudioContextFunction } from './render-native-offline-audio-context-function.d.ts';
export type TPannerNodeRendererFactoryFactory = (connectAudioParam: TConnectAudioParamFunction, createNativeChannelMergerNode: TNativeChannelMergerNodeFactory, createNativeConstantSourceNode: TNativeConstantSourceNodeFactory, createNativeGainNode: TNativeGainNodeFactory, createNativePannerNode: TNativePannerNodeFactory, getNativeAudioNode: TGetNativeAudioNodeFunction, nativeOfflineAudioContextConstructor: null | TNativeOfflineAudioContextConstructor, renderAutomation: TRenderAutomationFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction, renderNativeOfflineAudioContext: TRenderNativeOfflineAudioContextFunction) => TPannerNodeRendererFactory;
//# sourceMappingURL=panner-node-renderer-factory-factory.d.ts.map
