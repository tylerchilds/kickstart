import { IAudioNodeRenderer, IDelayNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
export type TDelayNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(maxDelayTime: number) => IAudioNodeRenderer<T, IDelayNode<T>>;
//# sourceMappingURL=delay-node-renderer-factory.d.ts.map
