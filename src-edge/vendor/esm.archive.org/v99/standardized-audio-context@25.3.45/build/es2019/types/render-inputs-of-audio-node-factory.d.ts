import { TGetAudioNodeConnectionsFunction } from './get-audio-node-connections-function.d.ts';
import { TGetAudioNodeRendererFunction } from './get-audio-node-renderer-function.d.ts';
import { TIsPartOfACycleFunction } from './is-part-of-a-cycle-function.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
export type TRenderInputsOfAudioNodeFactory = (getAudioNodeConnections: TGetAudioNodeConnectionsFunction, getAudioNodeRenderer: TGetAudioNodeRendererFunction, isPartOfACycle: TIsPartOfACycleFunction) => TRenderInputsOfAudioNodeFunction;
//# sourceMappingURL=render-inputs-of-audio-node-factory.d.ts.map
