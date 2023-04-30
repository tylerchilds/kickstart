import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
export type TChannelSplitterNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => IAudioNodeRenderer<T, IAudioNode<T>>;
//# sourceMappingURL=channel-splitter-node-renderer-factory.d.ts.map
