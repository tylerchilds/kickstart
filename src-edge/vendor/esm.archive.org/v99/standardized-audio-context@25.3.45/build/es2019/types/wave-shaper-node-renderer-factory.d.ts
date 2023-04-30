import { IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext, IWaveShaperNode } from '../interfaces/index.d.ts';
export type TWaveShaperNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => IAudioNodeRenderer<T, IWaveShaperNode<T>>;
//# sourceMappingURL=wave-shaper-node-renderer-factory.d.ts.map
