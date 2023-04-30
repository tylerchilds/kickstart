import { IAudioParam } from '../interfaces/index.d.ts';
import { TNativeAudioParam } from './native-audio-param.d.ts';
import { TNativeOfflineAudioContext } from './native-offline-audio-context.d.ts';
export type TRenderAutomationFunction = (nativeOfflineAudioContext: TNativeOfflineAudioContext, audioParam: IAudioParam, nativeAudioParam: TNativeAudioParam) => Promise<void>;
//# sourceMappingURL=render-automation-function.d.ts.map
