import { IAudioParamDescriptor } from './audio-param-descriptor.d.ts';
import { IAudioWorkletNodeOptions } from './audio-worklet-node-options.d.ts';
import { IAudioWorkletProcessor } from './audio-worklet-processor.d.ts';
export interface IAudioWorkletProcessorConstructor {
    parameterDescriptors?: IAudioParamDescriptor[];
    new (options: IAudioWorkletNodeOptions): IAudioWorkletProcessor;
}
//# sourceMappingURL=audio-worklet-processor-constructor.d.ts.map
