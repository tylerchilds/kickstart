import { IIIRFilterNode, IIIRFilterOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TIIRFilterNodeConstructor = new <T extends TContext>(context: T, options: {
    feedback: IIIRFilterOptions['feedback'];
    feedforward: IIIRFilterOptions['feedforward'];
} & Partial<IIIRFilterOptions>) => IIIRFilterNode<T>;
//# sourceMappingURL=iir-filter-node-constructor.d.ts.map
