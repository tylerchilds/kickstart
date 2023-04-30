import { IAudioWorkletNodeOptions, IAudioWorkletProcessorConstructor, INativeAudioWorkletNodeFaker } from '../interfaces/index.d.ts';
import { TNativeContext } from './native-context.d.ts';
export type TNativeAudioWorkletNodeFakerFactory = (nativeContext: TNativeContext, baseLatency: null | number, processorConstructor: IAudioWorkletProcessorConstructor, options: IAudioWorkletNodeOptions) => INativeAudioWorkletNodeFaker;
//# sourceMappingURL=native-audio-worklet-node-faker-factory.d.ts.map
