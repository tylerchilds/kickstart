import { IDelayNode, IDelayOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TDelayNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IDelayOptions>) => IDelayNode<T>;
//# sourceMappingURL=delay-node-constructor.d.ts.map
