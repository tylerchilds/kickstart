import { IAudioNodeRenderer, IBiquadFilterNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
export type TBiquadFilterNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => IAudioNodeRenderer<T, IBiquadFilterNode<T>>;
//# sourceMappingURL=biquad-filter-node-renderer-factory.d.ts.map
