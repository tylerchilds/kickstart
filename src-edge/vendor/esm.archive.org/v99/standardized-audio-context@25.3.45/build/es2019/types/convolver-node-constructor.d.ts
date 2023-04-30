import { IConvolverNode, IConvolverOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TConvolverNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IConvolverOptions>) => IConvolverNode<T>;
//# sourceMappingURL=convolver-node-constructor.d.ts.map
