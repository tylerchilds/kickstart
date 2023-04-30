import { IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext, IStereoPannerNode } from '../interfaces/index.d.ts';
export type TStereoPannerNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => IAudioNodeRenderer<T, IStereoPannerNode<T>>;
//# sourceMappingURL=stereo-panner-node-renderer-factory.d.ts.map
