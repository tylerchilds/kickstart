import { TOscillatorType } from '../types/index.d.ts';
import { IAudioNodeOptions } from './audio-node-options.d.ts';
import { IPeriodicWave } from './periodic-wave.d.ts';
export interface IOscillatorOptions extends IAudioNodeOptions {
    detune: number;
    frequency: number;
    periodicWave?: IPeriodicWave;
    type: TOscillatorType;
}
//# sourceMappingURL=oscillator-options.d.ts.map
