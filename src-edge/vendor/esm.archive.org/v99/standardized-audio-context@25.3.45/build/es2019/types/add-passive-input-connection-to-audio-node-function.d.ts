import { IAudioNode } from '../interfaces/index.d.ts';
import { TActiveInputConnection } from './active-input-connection.d.ts';
import { TContext } from './context.d.ts';
import { TPassiveAudioNodeInputConnection } from './passive-audio-node-input-connection.d.ts';
export type TAddPassiveInputConnectionToAudioNodeFunction = <T extends TContext>(passiveInputs: WeakMap<IAudioNode<T>, Set<TPassiveAudioNodeInputConnection>>, input: number, [source, output, eventListener]: TActiveInputConnection<T>, ignoreDuplicates: boolean) => void;
//# sourceMappingURL=add-passive-input-connection-to-audio-node-function.d.ts.map
