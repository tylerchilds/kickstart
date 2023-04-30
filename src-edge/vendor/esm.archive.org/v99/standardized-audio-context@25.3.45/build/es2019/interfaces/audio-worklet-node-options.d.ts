import { IAudioNodeOptions } from './audio-node-options.d.ts';
export interface IAudioWorkletNodeOptions extends IAudioNodeOptions {
    numberOfInputs: number;
    numberOfOutputs: number;
    outputChannelCount: Iterable<number>;
    parameterData: {
        [name: string]: number;
    };
    processorOptions: object;
}
//# sourceMappingURL=audio-worklet-node-options.d.ts.map
