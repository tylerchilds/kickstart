import { IMinimalOfflineAudioContext, IOfflineAudioContext, IOscillatorNodeRenderer } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TOscillatorNodeRenderer<T extends TContext> = T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IOscillatorNodeRenderer<T> : null;
//# sourceMappingURL=oscillator-node-renderer.d.ts.map
