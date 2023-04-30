import { TBiquadFilterType } from '../types/index.d.ts';
import { IAudioNodeOptions } from './audio-node-options.d.ts';
export interface IBiquadFilterOptions extends IAudioNodeOptions {
    detune: number;
    frequency: number;
    gain: number;
    Q: number;
    type: TBiquadFilterType;
}
//# sourceMappingURL=biquad-filter-options.d.ts.map
