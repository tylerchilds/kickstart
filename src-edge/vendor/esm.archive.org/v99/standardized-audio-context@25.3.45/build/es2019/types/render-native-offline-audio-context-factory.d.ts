import { TCacheTestResultFunction } from './cache-test-result-function.d.ts';
import { TNativeGainNodeFactory } from './native-gain-node-factory.d.ts';
import { TNativeScriptProcessorNodeFactory } from './native-script-processor-node-factory.d.ts';
import { TRenderNativeOfflineAudioContextFunction } from './render-native-offline-audio-context-function.d.ts';
export type TRenderNativeOfflineAudioContextFactory = (cacheTestResult: TCacheTestResultFunction, createNativeGainNode: TNativeGainNodeFactory, createNativeScriptProcessorNode: TNativeScriptProcessorNodeFactory, testOfflineAudioContextCurrentTimeSupport: () => Promise<boolean>) => TRenderNativeOfflineAudioContextFunction;
//# sourceMappingURL=render-native-offline-audio-context-factory.d.ts.map
