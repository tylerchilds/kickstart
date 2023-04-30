import { TContext } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IAudioParam } from './audio-param.d.ts';
export interface IStereoPannerNode<T extends TContext> extends IAudioNode<T> {
    readonly pan: IAudioParam;
}
//# sourceMappingURL=stereo-panner-node.d.ts.map
