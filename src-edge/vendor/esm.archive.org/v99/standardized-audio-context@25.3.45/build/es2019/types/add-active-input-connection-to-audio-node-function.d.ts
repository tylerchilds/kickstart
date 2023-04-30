import { IAudioNode } from '../interfaces/index.d.ts';
import { TActiveInputConnection } from './active-input-connection.d.ts';
import { TContext } from './context.d.ts';
import { TPassiveAudioNodeInputConnection } from './passive-audio-node-input-connection.d.ts';
export type TAddActiveInputConnectionToAudioNodeFunction = <T extends TContext>(activeInputs: Set<TActiveInputConnection<T>>[], source: IAudioNode<T>, [output, input, eventListener]: TPassiveAudioNodeInputConnection, ignoreDuplicates: boolean) => void;
//# sourceMappingURL=add-active-input-connection-to-audio-node-function.d.ts.map
