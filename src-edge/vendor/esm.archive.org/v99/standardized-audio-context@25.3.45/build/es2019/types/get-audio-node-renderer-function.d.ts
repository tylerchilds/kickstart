import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
export type TGetAudioNodeRendererFunction = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(audioNode: IAudioNode<T>) => IAudioNodeRenderer<T, IAudioNode<T>>;
//# sourceMappingURL=get-audio-node-renderer-function.d.ts.map
