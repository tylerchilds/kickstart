import { TAddAudioNodeConnectionsFunction } from './add-audio-node-connections-function.d.ts';
import { TAddConnectionToAudioNodeFunction } from './add-connection-to-audio-node-function.d.ts';
import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TCacheTestResultFunction } from './cache-test-result-function.d.ts';
import { TDecrementCycleCounterFunction } from './decrement-cycle-counter-function.d.ts';
import { TDetectCyclesFunction } from './detect-cycles-function.d.ts';
import { TEventTargetConstructor } from './event-target-constructor.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIncrementCycleCounterFactory } from './increment-cycle-counter-factory.d.ts';
import { TIndexSizeErrorFactory } from './index-size-error-factory.d.ts';
import { TInvalidAccessErrorFactory } from './invalid-access-error-factory.d.ts';
import { TIsNativeAudioContextFunction } from './is-native-audio-context-function.d.ts';
import { TIsNativeAudioNodeFunction } from './is-native-audio-node-function.d.ts';
import { TIsNativeAudioParamFunction } from './is-native-audio-param-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeAudioWorkletNodeConstructor } from './native-audio-worklet-node-constructor.d.ts';
import { TNotSupportedErrorFactory } from './not-supported-error-factory.d.ts';
export type TAudioNodeConstructorFactory = (addAudioNodeConnections: TAddAudioNodeConnectionsFunction, addConnectionToAudioNode: TAddConnectionToAudioNodeFunction, cacheTestResult: TCacheTestResultFunction, createIncrementCycleCounter: TIncrementCycleCounterFactory, createIndexSizeError: TIndexSizeErrorFactory, createInvalidAccessError: TInvalidAccessErrorFactory, createNotSupportedError: TNotSupportedErrorFactory, decrementCycleCounter: TDecrementCycleCounterFunction, detectCycles: TDetectCyclesFunction, eventTargetConstructor: TEventTargetConstructor, getNativeContext: TGetNativeContextFunction, isNativeAudioContext: TIsNativeAudioContextFunction, isNativeAudioNode: TIsNativeAudioNodeFunction, isNativeAudioParam: TIsNativeAudioParamFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, nativeAudioWorkletNodeConstructor: null | TNativeAudioWorkletNodeConstructor) => TAudioNodeConstructor;
//# sourceMappingURL=audio-node-constructor-factory.d.ts.map
