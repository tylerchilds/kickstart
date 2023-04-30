import { TCacheTestResultFunction } from './cache-test-result-function.d.ts';
import { TCreateNativeOfflineAudioContextFunction } from './create-native-offline-audio-context-function.d.ts';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TMinimalBaseAudioContextConstructor } from './minimal-base-audio-context-constructor.d.ts';
import { TMinimalOfflineAudioContextConstructor } from './minimal-offline-audio-context-constructor.d.ts';
import { TStartRenderingFunction } from './start-rendering-function.d.ts';
export type TMinimalOfflineAudioContextConstructorFactory = (cacheTestResult: TCacheTestResultFunction, createInvalidStateError: TInvalidStateErrorFactory, createNativeOfflineAudioContext: TCreateNativeOfflineAudioContextFunction, minimalBaseAudioContextConstructor: TMinimalBaseAudioContextConstructor, startRendering: TStartRenderingFunction) => TMinimalOfflineAudioContextConstructor;
//# sourceMappingURL=minimal-offline-audio-context-constructor-factory.d.ts.map
