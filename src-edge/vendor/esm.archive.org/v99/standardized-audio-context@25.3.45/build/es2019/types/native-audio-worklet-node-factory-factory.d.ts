import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TMonitorConnectionsFunction } from './monitor-connections-function.d.ts';
import { TNativeAudioWorkletNodeFactory } from './native-audio-worklet-node-factory.d.ts';
import { TNativeAudioWorkletNodeFakerFactory } from './native-audio-worklet-node-faker-factory.d.ts';
import { TNativeGainNodeFactory } from './native-gain-node-factory.d.ts';
import { TNotSupportedErrorFactory } from './not-supported-error-factory.d.ts';
export type TNativeAudioWorkletNodeFactoryFactory = (createInvalidStateError: TInvalidStateErrorFactory, createNativeAudioWorkletNodeFaker: TNativeAudioWorkletNodeFakerFactory, createNativeGainNode: TNativeGainNodeFactory, createNotSupportedError: TNotSupportedErrorFactory, monitorConnections: TMonitorConnectionsFunction) => TNativeAudioWorkletNodeFactory;
//# sourceMappingURL=native-audio-worklet-node-factory-factory.d.ts.map
