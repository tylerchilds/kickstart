import { TAudioWorkletNodeRendererFactory } from './audio-worklet-node-renderer-factory.d.ts';
import { TConnectAudioParamFunction } from './connect-audio-param-function.d.ts';
import { TConnectMultipleOutputsFunction } from './connect-multiple-outputs-function.d.ts';
import { TDeleteUnrenderedAudioWorkletNodeFunction } from './delete-unrendered-audio-worklet-node-function.d.ts';
import { TDisconnectMultipleOutputsFunction } from './disconnect-multiple-outputs-function.d.ts';
import { TExposeCurrentFrameAndCurrentTimeFunction } from './expose-current-frame-and-current-time-function.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TNativeAudioBufferSourceNodeFactory } from './native-audio-buffer-source-node-factory.d.ts';
import { TNativeAudioWorkletNodeConstructor } from './native-audio-worklet-node-constructor.d.ts';
import { TNativeChannelMergerNodeFactory } from './native-channel-merger-node-factory.d.ts';
import { TNativeChannelSplitterNodeFactory } from './native-channel-splitter-node-factory.d.ts';
import { TNativeConstantSourceNodeFactory } from './native-constant-source-node-factory.d.ts';
import { TNativeGainNodeFactory } from './native-gain-node-factory.d.ts';
import { TNativeOfflineAudioContextConstructor } from './native-offline-audio-context-constructor.d.ts';
import { TRenderAutomationFunction } from './render-automation-function.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
import { TRenderNativeOfflineAudioContextFunction } from './render-native-offline-audio-context-function.d.ts';
export type TAudioWorkletNodeRendererFactoryFactory = (connectAudioParam: TConnectAudioParamFunction, connectMultipleOutputs: TConnectMultipleOutputsFunction, createNativeAudioBufferSourceNode: TNativeAudioBufferSourceNodeFactory, createNativeChannelMergerNode: TNativeChannelMergerNodeFactory, createNativeChannelSplitterNode: TNativeChannelSplitterNodeFactory, createNativeConstantSourceNode: TNativeConstantSourceNodeFactory, createNativeGainNode: TNativeGainNodeFactory, deleteUnrenderedAudioWorkletNode: TDeleteUnrenderedAudioWorkletNodeFunction, disconnectMultipleOutputs: TDisconnectMultipleOutputsFunction, exposeCurrentFrameAndCurrentTime: TExposeCurrentFrameAndCurrentTimeFunction, getNativeAudioNode: TGetNativeAudioNodeFunction, nativeAudioWorkletNodeConstructor: null | TNativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor: null | TNativeOfflineAudioContextConstructor, renderAutomation: TRenderAutomationFunction, renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction, renderNativeOfflineAudioContext: TRenderNativeOfflineAudioContextFunction) => TAudioWorkletNodeRendererFactory;
//# sourceMappingURL=audio-worklet-node-renderer-factory-factory.d.ts.map
