import { IAudioNode } from '../interfaces/index.d.ts';
import { TAudioNodeConnections } from './audio-node-connections.d.ts';
import { TContext } from './context.d.ts';
export type TGetAudioNodeConnectionsFunction = <T extends TContext>(audioNode: IAudioNode<T>) => TAudioNodeConnections<T>;
//# sourceMappingURL=get-audio-node-connections-function.d.ts.map
