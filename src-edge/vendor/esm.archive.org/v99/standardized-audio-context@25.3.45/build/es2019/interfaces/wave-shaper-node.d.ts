import { TContext, TOverSampleType } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
export interface IWaveShaperNode<T extends TContext> extends IAudioNode<T> {
    curve: null | Float32Array;
    oversample: TOverSampleType;
}
//# sourceMappingURL=wave-shaper-node.d.ts.map
