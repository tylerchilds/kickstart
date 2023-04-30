import { IAudioNode, IAudioParam } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TDetectCyclesFunction = <T extends TContext>(chain: IAudioNode<T>[], nextLink: IAudioNode<T> | IAudioParam) => IAudioNode<T>[][];
//# sourceMappingURL=detect-cycles-function.d.ts.map
