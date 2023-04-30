import { IAudioNode } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TAddConnectionToAudioNodeFunction = <T extends TContext>(source: IAudioNode<T>, destination: IAudioNode<T>, output: number, input: number, isOffline: boolean) => boolean;
//# sourceMappingURL=add-connection-to-audio-node-function.d.ts.map
