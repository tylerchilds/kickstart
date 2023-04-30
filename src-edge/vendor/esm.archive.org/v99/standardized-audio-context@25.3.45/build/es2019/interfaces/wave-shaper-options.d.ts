import { TOverSampleType } from '../types/index.d.ts';
import { IAudioNodeOptions } from './audio-node-options.d.ts';
export interface IWaveShaperOptions extends IAudioNodeOptions {
    curve: null | Iterable<number>;
    oversample: TOverSampleType;
}
//# sourceMappingURL=wave-shaper-options.d.ts.map
