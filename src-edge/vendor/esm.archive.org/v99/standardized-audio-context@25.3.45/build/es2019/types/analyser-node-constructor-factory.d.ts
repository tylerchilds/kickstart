import { TAnalyserNodeConstructor } from './analyser-node-constructor.d.ts';
import { TAnalyserNodeRendererFactory } from './analyser-node-renderer-factory.d.ts';
import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIndexSizeErrorFactory } from './index-size-error-factory.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeAnalyserNodeFactory } from './native-analyser-node-factory.d.ts';
export type TAnalyserNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createAnalyserNodeRenderer: TAnalyserNodeRendererFactory, createIndexSizeError: TIndexSizeErrorFactory, createNativeAnalyserNode: TNativeAnalyserNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction) => TAnalyserNodeConstructor;
//# sourceMappingURL=analyser-node-constructor-factory.d.ts.map
