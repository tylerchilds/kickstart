import { TContext } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
export interface IIIRFilterNode<T extends TContext> extends IAudioNode<T> {
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}
//# sourceMappingURL=iir-filter-node.d.ts.map
