import { IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TNativeOfflineAudioContext } from './native-offline-audio-context.d.ts';
export type TIsAnyOfflineAudioContextFunction = (anything: unknown) => anything is IMinimalOfflineAudioContext | IOfflineAudioContext | TNativeOfflineAudioContext;
//# sourceMappingURL=is-any-offline-audio-context-function.d.ts.map
