import { IAudioNodeRenderer, IConvolverNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
export type TConvolverNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => IAudioNodeRenderer<T, IConvolverNode<T>>;
//# sourceMappingURL=convolver-node-renderer-factory.d.ts.map
