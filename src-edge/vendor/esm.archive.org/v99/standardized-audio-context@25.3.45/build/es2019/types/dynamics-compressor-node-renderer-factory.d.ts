import { IAudioNodeRenderer, IDynamicsCompressorNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
export type TDynamicsCompressorNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => IAudioNodeRenderer<T, IDynamicsCompressorNode<T>>;
//# sourceMappingURL=dynamics-compressor-node-renderer-factory.d.ts.map
