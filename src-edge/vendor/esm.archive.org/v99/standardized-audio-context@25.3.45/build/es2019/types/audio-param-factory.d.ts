import { IAudioNode, IAudioParam } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
import { TNativeAudioParam } from './native-audio-param.d.ts';
export type TAudioParamFactory = <T extends TContext>(audioNode: IAudioNode<T>, isAudioParamOfOfflineAudioContext: boolean, nativeAudioParam: TNativeAudioParam, maxValue?: null | number, minValue?: null | number) => IAudioParam;
//# sourceMappingURL=audio-param-factory.d.ts.map
