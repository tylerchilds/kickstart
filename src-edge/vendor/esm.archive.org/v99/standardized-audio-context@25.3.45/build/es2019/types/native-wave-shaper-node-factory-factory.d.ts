import { TConnectedNativeAudioBufferSourceNodeFactory } from './connected-native-audio-buffer-source-node-factory.d.ts';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TIsDCCurveFunction } from './is-dc-curve-function.d.ts';
import { TMonitorConnectionsFunction } from './monitor-connections-function.d.ts';
import { TNativeAudioContextConstructor } from './native-audio-context-constructor.d.ts';
import { TNativeWaveShaperNodeFactory } from './native-wave-shaper-node-factory.d.ts';
import { TNativeWaveShaperNodeFakerFactory } from './native-wave-shaper-node-faker-factory.d.ts';
import { TOverwriteAccessorsFunction } from './overwrite-accessors-function.d.ts';
export type TNativeWaveShaperNodeFactoryFactory = (createConnectedNativeAudioBufferSourceNode: TConnectedNativeAudioBufferSourceNodeFactory, createInvalidStateError: TInvalidStateErrorFactory, createNativeWaveShaperNodeFaker: TNativeWaveShaperNodeFakerFactory, isDCCurve: TIsDCCurveFunction, monitorConnections: TMonitorConnectionsFunction, nativeAudioContextConstructor: null | TNativeAudioContextConstructor, overwriteAccessors: TOverwriteAccessorsFunction) => TNativeWaveShaperNodeFactory;
//# sourceMappingURL=native-wave-shaper-node-factory-factory.d.ts.map
