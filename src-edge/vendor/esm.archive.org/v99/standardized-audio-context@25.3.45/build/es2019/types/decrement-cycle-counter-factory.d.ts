import { TConnectNativeAudioNodeToNativeAudioNodeFunction } from './connect-native-audio-node-to-native-audio-node-function.d.ts';
import { TCycleCounters } from './cycle-counters.d.ts';
import { TDecrementCycleCounterFunction } from './decrement-cycle-counter-function.d.ts';
import { TGetAudioNodeConnectionsFunction } from './get-audio-node-connections-function.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TGetNativeAudioParamFunction } from './get-native-audio-param-function.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsActiveAudioNodeFunction } from './is-active-audio-node-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
export type TDecrementCycleCounterFactory = (connectNativeAudioNodeToNativeAudioNode: TConnectNativeAudioNodeToNativeAudioNodeFunction, cycleCounters: TCycleCounters, getAudioNodeConnections: TGetAudioNodeConnectionsFunction, getNativeAudioNode: TGetNativeAudioNodeFunction, getNativeAudioParam: TGetNativeAudioParamFunction, getNativeContext: TGetNativeContextFunction, isActiveAudioNode: TIsActiveAudioNodeFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction) => TDecrementCycleCounterFunction;
//# sourceMappingURL=decrement-cycle-counter-factory.d.ts.map
