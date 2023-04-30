import { TConnectMultipleOutputsFunction } from './connect-multiple-outputs-function.d.ts';
import { TDisconnectMultipleOutputsFunction } from './disconnect-multiple-outputs-function.d.ts';
import { TExposeCurrentFrameAndCurrentTimeFunction } from './expose-current-frame-and-current-time-function.d.ts';
import { TGetActiveAudioWorkletNodeInputsFunction } from './get-active-audio-worklet-node-inputs-function.d.ts';
import { TIndexSizeErrorFactory } from './index-size-error-factory.d.ts';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TMonitorConnectionsFunction } from './monitor-connections-function.d.ts';
import { TNativeAudioWorkletNodeFakerFactory } from './native-audio-worklet-node-faker-factory.d.ts';
import { TNativeChannelMergerNodeFactory } from './native-channel-merger-node-factory.d.ts';
import { TNativeChannelSplitterNodeFactory } from './native-channel-splitter-node-factory.d.ts';
import { TNativeConstantSourceNodeFactory } from './native-constant-source-node-factory.d.ts';
import { TNativeGainNodeFactory } from './native-gain-node-factory.d.ts';
import { TNativeScriptProcessorNodeFactory } from './native-script-processor-node-factory.d.ts';
import { TNotSupportedErrorFactory } from './not-supported-error-factory.d.ts';
export type TNativeAudioWorkletNodeFakerFactoryFactory = (connectMultipleOutputs: TConnectMultipleOutputsFunction, createIndexSizeError: TIndexSizeErrorFactory, createInvalidStateError: TInvalidStateErrorFactory, createNativeChannelMergerNode: TNativeChannelMergerNodeFactory, createNativeChannelSplitterNode: TNativeChannelSplitterNodeFactory, createNativeConstantSourceNode: TNativeConstantSourceNodeFactory, createNativeGainNode: TNativeGainNodeFactory, createNativeScriptProcessorNode: TNativeScriptProcessorNodeFactory, createNotSupportedError: TNotSupportedErrorFactory, disconnectMultipleOutputs: TDisconnectMultipleOutputsFunction, exposeCurrentFrameAndCurrentTime: TExposeCurrentFrameAndCurrentTimeFunction, getActiveAudioWorkletNodeInputs: TGetActiveAudioWorkletNodeInputsFunction, monitorConnections: TMonitorConnectionsFunction) => TNativeAudioWorkletNodeFakerFactory;
//# sourceMappingURL=native-audio-worklet-node-faker-factory-factory.d.ts.map
