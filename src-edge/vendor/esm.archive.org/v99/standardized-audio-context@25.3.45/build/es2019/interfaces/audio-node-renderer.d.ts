import { TNativeAudioNode, TNativeOfflineAudioContext } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IMinimalOfflineAudioContext } from './minimal-offline-audio-context.d.ts';
import { IOfflineAudioContext } from './offline-audio-context.d.ts';
export interface IAudioNodeRenderer<T extends IMinimalOfflineAudioContext | IOfflineAudioContext, U extends IAudioNode<T>> {
    render(proxy: U, nativeOfflineAudioContext: TNativeOfflineAudioContext): Promise<TNativeAudioNode>;
}
//# sourceMappingURL=audio-node-renderer.d.ts.map
