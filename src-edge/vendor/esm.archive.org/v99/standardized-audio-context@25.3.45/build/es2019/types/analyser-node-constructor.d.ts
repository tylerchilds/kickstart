import { IAnalyserNode, IAnalyserOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TAnalyserNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IAnalyserOptions>) => IAnalyserNode<T>;
//# sourceMappingURL=analyser-node-constructor.d.ts.map
