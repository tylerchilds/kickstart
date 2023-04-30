import { IAudioNodeRenderer } from './audio-node-renderer.d.ts';
import { IConstantSourceNode } from './constant-source-node.d.ts';
import { IMinimalOfflineAudioContext } from './minimal-offline-audio-context.d.ts';
import { IOfflineAudioContext } from './offline-audio-context.d.ts';
export interface IConstantSourceNodeRenderer<T extends IMinimalOfflineAudioContext | IOfflineAudioContext> extends IAudioNodeRenderer<T, IConstantSourceNode<T>> {
    start: number;
    stop: number;
}
//# sourceMappingURL=constant-source-node-renderer.d.ts.map
