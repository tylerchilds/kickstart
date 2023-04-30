import { TContext } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IAudioParam } from './audio-param.d.ts';
export interface IDynamicsCompressorNode<T extends TContext> extends IAudioNode<T> {
    readonly attack: IAudioParam;
    readonly knee: IAudioParam;
    readonly ratio: IAudioParam;
    readonly reduction: number;
    readonly release: IAudioParam;
    readonly threshold: IAudioParam;
}
//# sourceMappingURL=dynamics-compressor-node.d.ts.map
