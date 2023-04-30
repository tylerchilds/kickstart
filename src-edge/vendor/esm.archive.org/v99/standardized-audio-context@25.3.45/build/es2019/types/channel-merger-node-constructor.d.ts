import { IAudioNode, IChannelMergerOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TChannelMergerNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IChannelMergerOptions>) => IAudioNode<T>;
//# sourceMappingURL=channel-merger-node-constructor.d.ts.map
