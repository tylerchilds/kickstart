import { TConnectNativeAudioNodeToNativeAudioNodeFunction } from './connect-native-audio-node-to-native-audio-node-function.d.ts';
import { TDisconnectNativeAudioNodeFromNativeAudioNodeFunction } from './disconnect-native-audio-node-from-native-audio-node-function.d.ts';
import { TGetFirstSampleFunction } from './get-first-sample-function.d.ts';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TMonitorConnectionsFunction } from './monitor-connections-function.d.ts';
import { TNativeChannelMergerNodeFactory } from './native-channel-merger-node-factory.d.ts';
import { TNativeGainNodeFactory } from './native-gain-node-factory.d.ts';
import { TNativePannerNodeFakerFactory } from './native-panner-node-faker-factory.d.ts';
import { TNativeScriptProcessorNodeFactory } from './native-script-processor-node-factory.d.ts';
import { TNativeWaveShaperNodeFactory } from './native-wave-shaper-node-factory.d.ts';
import { TNotSupportedErrorFactory } from './not-supported-error-factory.d.ts';
export type TNativePannerNodeFakerFactoryFactory = (connectNativeAudioNodeToNativeAudioNode: TConnectNativeAudioNodeToNativeAudioNodeFunction, createInvalidStateError: TInvalidStateErrorFactory, createNativeChannelMergerNode: TNativeChannelMergerNodeFactory, createNativeGainNode: TNativeGainNodeFactory, createNativeScriptProcessorNode: TNativeScriptProcessorNodeFactory, createNativeWaveShaperNode: TNativeWaveShaperNodeFactory, createNotSupportedError: TNotSupportedErrorFactory, disconnectNativeAudioNodeToNativeAudioNode: TDisconnectNativeAudioNodeFromNativeAudioNodeFunction, getFirstSample: TGetFirstSampleFunction, monitorConnections: TMonitorConnectionsFunction) => TNativePannerNodeFakerFactory;
//# sourceMappingURL=native-panner-node-faker-factory-factory.d.ts.map
