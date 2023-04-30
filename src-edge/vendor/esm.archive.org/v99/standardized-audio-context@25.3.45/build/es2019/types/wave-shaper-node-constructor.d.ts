import { IWaveShaperNode, IWaveShaperOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TWaveShaperNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IWaveShaperOptions>) => IWaveShaperNode<T>;
//# sourceMappingURL=wave-shaper-node-constructor.d.ts.map
