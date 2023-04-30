import { TContext } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IAudioParam } from './audio-param.d.ts';
export interface IDelayNode<T extends TContext> extends IAudioNode<T> {
    readonly delayTime: IAudioParam;
}
//# sourceMappingURL=delay-node.d.ts.map
