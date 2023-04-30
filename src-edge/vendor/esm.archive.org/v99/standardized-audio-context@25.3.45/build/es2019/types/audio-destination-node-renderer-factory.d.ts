import { IAudioDestinationNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function.d.ts';
export type TAudioDestinationNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => IAudioNodeRenderer<T, IAudioDestinationNode<T>>;
//# sourceMappingURL=audio-destination-node-renderer-factory.d.ts.map
