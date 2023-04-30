import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TMinimalAudioContextConstructor } from './minimal-audio-context-constructor.d.ts';
import { TMinimalBaseAudioContextConstructor } from './minimal-base-audio-context-constructor.d.ts';
import { TNativeAudioContextConstructor } from './native-audio-context-constructor.d.ts';
import { TNotSupportedErrorFactory } from './not-supported-error-factory.d.ts';
import { TUnknownErrorFactory } from './unknown-error-factory.d.ts';
export type TMinimalAudioContextConstructorFactory = (createInvalidStateError: TInvalidStateErrorFactory, createNotSupportedError: TNotSupportedErrorFactory, createUnknownError: TUnknownErrorFactory, minimalBaseAudioContextConstructor: TMinimalBaseAudioContextConstructor, nativeAudioContextConstructor: null | TNativeAudioContextConstructor) => TMinimalAudioContextConstructor;
//# sourceMappingURL=minimal-audio-context-constructor-factory.d.ts.map
