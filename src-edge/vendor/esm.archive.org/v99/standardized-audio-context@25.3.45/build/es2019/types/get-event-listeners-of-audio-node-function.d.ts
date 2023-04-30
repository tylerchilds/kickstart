import { IAudioNode } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
import { TInternalStateEventListener } from './internal-state-event-listener.d.ts';
export type TGetEventListenersOfAudioNodeFunction = <T extends TContext>(audioNode: IAudioNode<T>) => Set<TInternalStateEventListener>;
//# sourceMappingURL=get-event-listeners-of-audio-node-function.d.ts.map
