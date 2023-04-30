import { IAudioParam } from '../interfaces/index.d.ts';
import { TAudioParamConnections } from './audio-param-connections.d.ts';
import { TContext } from './context.d.ts';
export type TGetAudioParamConnectionsFunction = <T extends TContext>(audioParam: IAudioParam) => TAudioParamConnections<T>;
//# sourceMappingURL=get-audio-param-connections-function.d.ts.map
