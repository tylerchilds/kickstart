import { IAudioNode, IChannelSplitterOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TChannelSplitterNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IChannelSplitterOptions>) => IAudioNode<T>;
//# sourceMappingURL=channel-splitter-node-constructor.d.ts.map
