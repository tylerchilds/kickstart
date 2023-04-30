import { TConnectedNativeAudioBufferSourceNodeFactory } from './connected-native-audio-buffer-source-node-factory.d.ts';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TIsDCCurveFunction } from './is-dc-curve-function.d.ts';
import { TMonitorConnectionsFunction } from './monitor-connections-function.d.ts';
import { TNativeGainNodeFactory } from './native-gain-node-factory.d.ts';
import { TNativeWaveShaperNodeFakerFactory } from './native-wave-shaper-node-faker-factory.d.ts';
export type TNativeWaveShaperNodeFakerFactoryFactory = (createConnectedNativeAudioBufferSourceNode: TConnectedNativeAudioBufferSourceNodeFactory, createInvalidStateError: TInvalidStateErrorFactory, createNativeGainNode: TNativeGainNodeFactory, isDCCurve: TIsDCCurveFunction, monitorConnections: TMonitorConnectionsFunction) => TNativeWaveShaperNodeFakerFactory;
//# sourceMappingURL=native-wave-shaper-node-faker-factory-factory.d.ts.map
