import { TAudioBufferStore } from './audio-buffer-store.d.ts';
import { TCacheTestResultFunction } from './cache-test-result-function.d.ts';
import { TGetAudioNodeRendererFunction } from './get-audio-node-renderer-function.d.ts';
import { TGetUnrenderedAudioWorkletNodesFunction } from './get-unrendered-audio-worklet-nodes-function.d.ts';
import { TNativeAudioBuffer } from './native-audio-buffer.d.ts';
import { TRenderNativeOfflineAudioContextFunction } from './render-native-offline-audio-context-function.d.ts';
import { TStartRenderingFunction } from './start-rendering-function.d.ts';
import { TWrapAudioBufferCopyChannelMethodsFunction } from './wrap-audio-buffer-copy-channel-methods-function.d.ts';
import { TWrapAudioBufferCopyChannelMethodsOutOfBoundsFunction } from './wrap-audio-buffer-copy-channel-methods-out-of-bounds-function.d.ts';
export type TStartRenderingFactory = (audioBufferStore: TAudioBufferStore, cacheTestResult: TCacheTestResultFunction, getAudioNodeRenderer: TGetAudioNodeRendererFunction, getUnrenderedAudioWorkletNodes: TGetUnrenderedAudioWorkletNodesFunction, renderNativeOfflineAudioContext: TRenderNativeOfflineAudioContextFunction, testAudioBufferCopyChannelMethodsOutOfBoundsSupport: (nativeAudioBuffer: TNativeAudioBuffer) => boolean, wrapAudioBufferCopyChannelMethods: TWrapAudioBufferCopyChannelMethodsFunction, wrapAudioBufferCopyChannelMethodsOutOfBounds: TWrapAudioBufferCopyChannelMethodsOutOfBoundsFunction) => TStartRenderingFunction;
//# sourceMappingURL=start-rendering-factory.d.ts.map
