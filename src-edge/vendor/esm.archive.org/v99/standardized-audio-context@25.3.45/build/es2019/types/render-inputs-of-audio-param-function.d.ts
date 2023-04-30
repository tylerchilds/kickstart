import { IAudioParam } from '../interfaces/index.d.ts';
import { TNativeAudioParam } from './native-audio-param.d.ts';
import { TNativeOfflineAudioContext } from './native-offline-audio-context.d.ts';
export type TRenderInputsOfAudioParamFunction = (audioParam: IAudioParam, nativeOfflineAudioContext: TNativeOfflineAudioContext, nativeAudioParam: TNativeAudioParam) => Promise<void>;
//# sourceMappingURL=render-inputs-of-audio-param-function.d.ts.map
