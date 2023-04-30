import { IAudioNode } from '../interfaces/index.d.ts';
import { TActiveInputConnection } from './active-input-connection.d.ts';
import { TContext } from './context.d.ts';
export type TDeleteActiveInputConnectionToAudioNodeFunction = <T extends TContext>(activeInputs: Set<TActiveInputConnection<T>>[], source: IAudioNode<T>, output: number, input: number) => TActiveInputConnection<T>;
//# sourceMappingURL=delete-active-input-connection-to-audio-node-function.d.ts.map
