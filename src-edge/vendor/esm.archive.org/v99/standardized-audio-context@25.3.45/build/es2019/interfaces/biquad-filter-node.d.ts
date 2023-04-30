import { TBiquadFilterType, TContext } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IAudioParam } from './audio-param.d.ts';
export interface IBiquadFilterNode<T extends TContext> extends IAudioNode<T> {
    readonly detune: IAudioParam;
    readonly frequency: IAudioParam;
    readonly gain: IAudioParam;
    readonly Q: IAudioParam;
    type: TBiquadFilterType;
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}
//# sourceMappingURL=biquad-filter-node.d.ts.map
