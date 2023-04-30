import { TContext } from '../types/index.d.ts';
import { IAudioParam } from './audio-param.d.ts';
import { IAudioScheduledSourceNode } from './audio-scheduled-source-node.d.ts';
export interface IConstantSourceNode<T extends TContext> extends IAudioScheduledSourceNode<T> {
    readonly offset: IAudioParam;
}
//# sourceMappingURL=constant-source-node.d.ts.map
