import { TCycleCounters } from './cycle-counters.d.ts';
import { TDisconnectNativeAudioNodeFromNativeAudioNodeFunction } from './disconnect-native-audio-node-from-native-audio-node-function.d.ts';
import { TGetAudioNodeConnectionsFunction } from './get-audio-node-connections-function.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TGetNativeAudioParamFunction } from './get-native-audio-param-function.d.ts';
import { TIncrementCycleCounterFactory } from './increment-cycle-counter-factory.d.ts';
import { TIsActiveAudioNodeFunction } from './is-active-audio-node-function.d.ts';
export type TIncrementCycleCounterFactoryFactory = (cycleCounters: TCycleCounters, disconnectNativeAudioNodeFromNativeAudioNode: TDisconnectNativeAudioNodeFromNativeAudioNodeFunction, getAudioNodeConnections: TGetAudioNodeConnectionsFunction, getNativeAudioNode: TGetNativeAudioNodeFunction, getNativeAudioParam: TGetNativeAudioParamFunction, isActiveAudioNode: TIsActiveAudioNodeFunction) => TIncrementCycleCounterFactory;
//# sourceMappingURL=increment-cycle-counter-factory-factory.d.ts.map
