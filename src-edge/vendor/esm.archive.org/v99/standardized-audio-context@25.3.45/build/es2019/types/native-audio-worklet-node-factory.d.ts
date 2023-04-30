import { IAudioWorkletNodeOptions, IAudioWorkletProcessorConstructor } from '../interfaces/index.d.ts';
import { TNativeAudioWorkletNode } from './native-audio-worklet-node.d.ts';
import { TNativeAudioWorkletNodeConstructor } from './native-audio-worklet-node-constructor.d.ts';
import { TNativeContext } from './native-context.d.ts';
export type TNativeAudioWorkletNodeFactory = (nativeContext: TNativeContext, baseLatency: null | number, nativeAudioWorkletNodeConstructor: null | TNativeAudioWorkletNodeConstructor, name: string, processorConstructor: undefined | IAudioWorkletProcessorConstructor, options: IAudioWorkletNodeOptions) => TNativeAudioWorkletNode;
//# sourceMappingURL=native-audio-worklet-node-factory.d.ts.map
