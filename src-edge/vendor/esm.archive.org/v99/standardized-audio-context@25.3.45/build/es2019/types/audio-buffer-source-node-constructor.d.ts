import { IAudioBufferSourceNode, IAudioBufferSourceOptions } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TAudioBufferSourceNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IAudioBufferSourceOptions>) => IAudioBufferSourceNode<T>;
//# sourceMappingURL=audio-buffer-source-node-constructor.d.ts.map
