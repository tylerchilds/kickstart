import { IAudioDestinationNode } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TAudioDestinationNodeConstructor = new <T extends TContext>(context: T, channelCount: number) => IAudioDestinationNode<T>;
//# sourceMappingURL=audio-destination-node-constructor.d.ts.map
