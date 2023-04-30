import { TAnyAudioBuffer, TContext } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
export interface IConvolverNode<T extends TContext> extends IAudioNode<T> {
    buffer: null | TAnyAudioBuffer;
    normalize: boolean;
}
//# sourceMappingURL=convolver-node.d.ts.map
