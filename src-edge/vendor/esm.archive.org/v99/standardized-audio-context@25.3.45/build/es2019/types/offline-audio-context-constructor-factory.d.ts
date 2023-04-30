import { IOfflineAudioContextConstructor } from '../interfaces/index.d.ts';
import { TBaseAudioContextConstructor } from './base-audio-context-constructor.d.ts';
import { TCacheTestResultFunction } from './cache-test-result-function.d.ts';
import { TCreateNativeOfflineAudioContextFunction } from './create-native-offline-audio-context-function.d.ts';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TStartRenderingFunction } from './start-rendering-function.d.ts';
export type TOfflineAudioContextConstructorFactory = (baseAudioContextConstructor: TBaseAudioContextConstructor, cacheTestResult: TCacheTestResultFunction, createInvalidStateError: TInvalidStateErrorFactory, createNativeOfflineAudioContext: TCreateNativeOfflineAudioContextFunction, startRendering: TStartRenderingFunction) => IOfflineAudioContextConstructor;
//# sourceMappingURL=offline-audio-context-constructor-factory.d.ts.map
