import { IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
import { TNativeAudioContext } from './native-audio-context.d.ts';
import { TNativeOfflineAudioContext } from './native-offline-audio-context.d.ts';
export type TGetNativeContextFunction = <T extends TContext>(context: T) => T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? TNativeOfflineAudioContext : TNativeAudioContext;
//# sourceMappingURL=get-native-context-function.d.ts.map
