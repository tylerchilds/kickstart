import { IPannerNode, IPannerOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TPannerNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IPannerOptions>) => IPannerNode<T>;
//# sourceMappingURL=panner-node-constructor.d.ts.map
