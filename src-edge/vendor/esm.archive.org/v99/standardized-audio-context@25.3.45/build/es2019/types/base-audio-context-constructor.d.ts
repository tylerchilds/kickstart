import { IBaseAudioContext } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
import { TNativeContext } from './native-context.d.ts';
export type TBaseAudioContextConstructor = new <T extends TContext>(nativeContext: TNativeContext, numberOfChannels: number) => IBaseAudioContext<T>;
//# sourceMappingURL=base-audio-context-constructor.d.ts.map
