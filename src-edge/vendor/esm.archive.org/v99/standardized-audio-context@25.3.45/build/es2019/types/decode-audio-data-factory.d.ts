import { TAudioBufferStore } from './audio-buffer-store.d.ts';
import { TCacheTestResultFunction } from './cache-test-result-function.d.ts';
import { TDataCloneErrorFactory } from './data-clone-error-factory.d.ts';
import { TDecodeAudioDataFunction } from './decode-audio-data-function.d.ts';
import { TEncodingErrorFactory } from './encoding-error-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeContextFunction } from './is-native-context-function.d.ts';
import { TNativeAudioBuffer } from './native-audio-buffer.d.ts';
import { TNativeContext } from './native-context.d.ts';
import { TWrapAudioBufferCopyChannelMethodsFunction } from './wrap-audio-buffer-copy-channel-methods-function.d.ts';
import { TWrapAudioBufferCopyChannelMethodsOutOfBoundsFunction } from './wrap-audio-buffer-copy-channel-methods-out-of-bounds-function.d.ts';
export type TDecodeAudioDataFactory = (audioBufferStore: TAudioBufferStore, cacheTestResult: TCacheTestResultFunction, createDataCloneError: TDataCloneErrorFactory, createEncodingError: TEncodingErrorFactory, detachedArrayBuffers: WeakSet<ArrayBuffer>, getNativeContext: TGetNativeContextFunction, isNativeContext: TIsNativeContextFunction, testAudioBufferCopyChannelMethodsOutOfBoundsSupport: (nativeAudioBuffer: TNativeAudioBuffer) => boolean, testPromiseSupport: (nativeContext: TNativeContext) => boolean, wrapAudioBufferCopyChannelMethods: TWrapAudioBufferCopyChannelMethodsFunction, wrapAudioBufferCopyChannelMethodsOutOfBounds: TWrapAudioBufferCopyChannelMethodsOutOfBoundsFunction) => TDecodeAudioDataFunction;
//# sourceMappingURL=decode-audio-data-factory.d.ts.map
