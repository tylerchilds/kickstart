import { IGainNode, IGainOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TGainNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IGainOptions>) => IGainNode<T>;
//# sourceMappingURL=gain-node-constructor.d.ts.map
