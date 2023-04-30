import { IBiquadFilterNode, IBiquadFilterOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TBiquadFilterNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IBiquadFilterOptions>) => IBiquadFilterNode<T>;
//# sourceMappingURL=biquad-filter-node-constructor.d.ts.map
