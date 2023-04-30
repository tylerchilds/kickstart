import { IAudioParam, IAudioParamRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TAddAudioParamConnectionsFunction = <T extends TContext>(audioParam: IAudioParam, audioParamRenderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioParamRenderer : null) => void;
//# sourceMappingURL=add-audio-param-connections-function.d.ts.map
