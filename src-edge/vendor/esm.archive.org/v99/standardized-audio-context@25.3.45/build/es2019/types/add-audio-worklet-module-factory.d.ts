import { TAddAudioWorkletModuleFunction } from './add-audio-worklet-module-function.d.ts';
import { TCacheTestResultFunction } from './cache-test-result-function.d.ts';
import { TContext } from './context.d.ts';
import { TEvaluateSourceFunction } from './evaluate-source-function.d.ts';
import { TExposeCurrentFrameAndCurrentTimeFunction } from './expose-current-frame-and-current-time-function.d.ts';
import { TFetchSourceFunction } from './fetch-source-function.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TGetOrCreateBackupOfflineAudioContextFunction } from './get-or-create-backup-offline-audio-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeAudioWorkletNodeConstructor } from './native-audio-worklet-node-constructor.d.ts';
import { TNotSupportedErrorFactory } from './not-supported-error-factory.d.ts';
import { TWindow } from './window.d.ts';
export type TAddAudioWorkletModuleFactory = (cacheTestResult: TCacheTestResultFunction, createNotSupportedError: TNotSupportedErrorFactory, evaluateSource: TEvaluateSourceFunction, exposeCurrentFrameAndCurrentTime: TExposeCurrentFrameAndCurrentTimeFunction, fetchSource: TFetchSourceFunction, getNativeContext: TGetNativeContextFunction, getOrCreateBackupOfflineAudioContext: TGetOrCreateBackupOfflineAudioContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, nativeAudioWorkletNodeConstructor: null | TNativeAudioWorkletNodeConstructor, ongoingRequests: WeakMap<TContext, Map<string, Promise<void>>>, resolvedRequests: WeakMap<TContext, Set<string>>, testAudioWorkletProcessorPostMessageSupport: () => Promise<boolean>, window: TWindow) => TAddAudioWorkletModuleFunction;
//# sourceMappingURL=add-audio-worklet-module-factory.d.ts.map
