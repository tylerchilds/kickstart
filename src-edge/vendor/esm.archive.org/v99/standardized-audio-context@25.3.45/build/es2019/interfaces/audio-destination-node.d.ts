import { TContext } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
export interface IAudioDestinationNode<T extends TContext> extends IAudioNode<T> {
    readonly maxChannelCount: number;
}
//# sourceMappingURL=audio-destination-node.d.ts.map
