import { IAudioNodeRenderer } from './audio-node-renderer.d.ts';
import { IMinimalOfflineAudioContext } from './minimal-offline-audio-context.d.ts';
import { IOfflineAudioContext } from './offline-audio-context.d.ts';
import { IOscillatorNode } from './oscillator-node.d.ts';
import { IPeriodicWave } from './periodic-wave.d.ts';
export interface IOscillatorNodeRenderer<T extends IMinimalOfflineAudioContext | IOfflineAudioContext> extends IAudioNodeRenderer<T, IOscillatorNode<T>> {
    periodicWave: null | IPeriodicWave;
    start: number;
    stop: number;
}
//# sourceMappingURL=oscillator-node-renderer.d.ts.map
