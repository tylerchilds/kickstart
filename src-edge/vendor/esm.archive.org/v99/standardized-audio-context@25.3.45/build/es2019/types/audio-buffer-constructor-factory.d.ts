import { TAudioBufferConstructor } from './audio-buffer-constructor.d.ts';
import { TAudioBufferStore } from './audio-buffer-store.d.ts';
import { TCacheTestResultFunction } from './cache-test-result-function.d.ts';
import { TNativeAudioBufferConstructor } from './native-audio-buffer-constructor.d.ts';
import { TNativeOfflineAudioContextConstructor } from './native-offline-audio-context-constructor.d.ts';
import { TNotSupportedErrorFactory } from './not-supported-error-factory.d.ts';
import { TWrapAudioBufferCopyChannelMethodsFunction } from './wrap-audio-buffer-copy-channel-methods-function.d.ts';
import { TWrapAudioBufferCopyChannelMethodsOutOfBoundsFunction } from './wrap-audio-buffer-copy-channel-methods-out-of-bounds-function.d.ts';
export type TAudioBufferConstructorFactory = (audioBufferStore: TAudioBufferStore, cacheTestResult: TCacheTestResultFunction, createNotSupportedError: TNotSupportedErrorFactory, nativeAudioBufferConstructor: null | TNativeAudioBufferConstructor, nativeOfflineAudioContextConstructor: null | TNativeOfflineAudioContextConstructor, testNativeAudioBufferConstructorSupport: () => boolean, wrapAudioBufferCopyChannelMethods: TWrapAudioBufferCopyChannelMethodsFunction, wrapAudioBufferCopyChannelMethodsOutOfBounds: TWrapAudioBufferCopyChannelMethodsOutOfBoundsFunction) => TAudioBufferConstructor;
//# sourceMappingURL=audio-buffer-constructor-factory.d.ts.map
