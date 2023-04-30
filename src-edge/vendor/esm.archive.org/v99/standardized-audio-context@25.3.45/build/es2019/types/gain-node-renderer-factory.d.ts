import { IAudioNodeRenderer, IGainNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
export type TGainNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => IAudioNodeRenderer<T, IGainNode<T>>;
//# sourceMappingURL=gain-node-renderer-factory.d.ts.map
