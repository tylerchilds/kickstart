import { TContext, TOscillatorType } from '../types/index.d.ts';
import { IAudioParam } from './audio-param.d.ts';
import { IAudioScheduledSourceNode } from './audio-scheduled-source-node.d.ts';
export interface IOscillatorNode<T extends TContext> extends IAudioScheduledSourceNode<T> {
    readonly detune: IAudioParam;
    readonly frequency: IAudioParam;
    type: TOscillatorType;
    setPeriodicWave(periodicWave: PeriodicWave): void;
}
//# sourceMappingURL=oscillator-node.d.ts.map
