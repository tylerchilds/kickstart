import { IAudioContext, IMinimalAudioContext } from '../interfaces/index.d.ts';
import { TNativeAudioContext } from './native-audio-context.d.ts';
export type TIsAnyAudioContextFunction = (anything: unknown) => anything is IAudioContext | IMinimalAudioContext | TNativeAudioContext;
//# sourceMappingURL=is-any-audio-context-function.d.ts.map
