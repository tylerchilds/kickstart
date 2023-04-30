import { IConstantSourceNode, IConstantSourceOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TConstantSourceNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IConstantSourceOptions>) => IConstantSourceNode<T>;
//# sourceMappingURL=constant-source-node-constructor.d.ts.map
