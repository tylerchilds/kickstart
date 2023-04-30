import { TContext } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IAudioParam } from './audio-param.d.ts';
export interface IGainNode<T extends TContext> extends IAudioNode<T> {
    readonly gain: IAudioParam;
}
//# sourceMappingURL=gain-node.d.ts.map
