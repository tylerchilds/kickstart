import { TGetAudioNodeRendererFunction } from './get-audio-node-renderer-function.d.ts';
import { TGetAudioParamConnectionsFunction } from './get-audio-param-connections-function.d.ts';
import { TIsPartOfACycleFunction } from './is-part-of-a-cycle-function.d.ts';
import { TRenderInputsOfAudioParamFunction } from './render-inputs-of-audio-param-function.d.ts';
export type TRenderInputsOfAudioParamFactory = (getAudioNodeRenderer: TGetAudioNodeRendererFunction, getAudioParamConnections: TGetAudioParamConnectionsFunction, isPartOfACycle: TIsPartOfACycleFunction) => TRenderInputsOfAudioParamFunction;
//# sourceMappingURL=render-inputs-of-audio-param-factory.d.ts.map
