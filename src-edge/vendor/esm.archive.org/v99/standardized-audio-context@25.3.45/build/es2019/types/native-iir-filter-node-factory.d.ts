import { IIIRFilterOptions } from '../interfaces/index.d.ts';
import { TNativeContext } from './native-context.d.ts';
import { TNativeIIRFilterNode } from './native-iir-filter-node.d.ts';
export type TNativeIIRFilterNodeFactory = (nativeContext: TNativeContext, baseLatency: null | number, options: IIIRFilterOptions) => TNativeIIRFilterNode;
//# sourceMappingURL=native-iir-filter-node-factory.d.ts.map
