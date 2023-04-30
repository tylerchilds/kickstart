import { IStereoPannerNode, IStereoPannerOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TStereoPannerNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IStereoPannerOptions>) => IStereoPannerNode<T>;
//# sourceMappingURL=stereo-panner-node-constructor.d.ts.map
