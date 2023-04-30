import { IAudioWorkletNode, IAudioWorkletNodeOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TAudioWorkletNodeConstructor = new <T extends TContext>(context: T, name: string, options?: Partial<IAudioWorkletNodeOptions>) => IAudioWorkletNode<T>;
//# sourceMappingURL=audio-worklet-node-constructor.d.ts.map
