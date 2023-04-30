import { IMinimalBaseAudioContext } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
import { TNativeContext } from './native-context.d.ts';
export type TMinimalBaseAudioContextConstructor = new <T extends TContext>(nativeContext: TNativeContext, numberOfChannels: number) => IMinimalBaseAudioContext<T>;
//# sourceMappingURL=minimal-base-audio-context-constructor.d.ts.map
