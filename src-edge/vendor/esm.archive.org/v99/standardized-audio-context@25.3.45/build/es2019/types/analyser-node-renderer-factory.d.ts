import { IAnalyserNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
export type TAnalyserNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => IAudioNodeRenderer<T, IAnalyserNode<T>>;
//# sourceMappingURL=analyser-node-renderer-factory.d.ts.map
