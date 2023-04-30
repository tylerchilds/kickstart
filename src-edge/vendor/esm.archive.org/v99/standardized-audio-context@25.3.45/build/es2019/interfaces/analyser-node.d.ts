import { TContext } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
export interface IAnalyserNode<T extends TContext> extends IAudioNode<T> {
    fftSize: number;
    readonly frequencyBinCount: number;
    maxDecibels: number;
    minDecibels: number;
    smoothingTimeConstant: number;
    getByteFrequencyData(array: Uint8Array): void;
    getByteTimeDomainData(array: Uint8Array): void;
    getFloatFrequencyData(array: Float32Array): void;
    getFloatTimeDomainData(array: Float32Array): void;
}
//# sourceMappingURL=analyser-node.d.ts.map
