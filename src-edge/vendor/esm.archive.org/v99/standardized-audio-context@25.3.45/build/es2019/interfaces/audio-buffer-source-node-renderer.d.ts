import { IAudioBufferSourceNode } from './audio-buffer-source-node.d.ts';
import { IAudioNodeRenderer } from './audio-node-renderer.d.ts';
import { IMinimalOfflineAudioContext } from './minimal-offline-audio-context.d.ts';
import { IOfflineAudioContext } from './offline-audio-context.d.ts';
export interface IAudioBufferSourceNodeRenderer<T extends IMinimalOfflineAudioContext | IOfflineAudioContext> extends IAudioNodeRenderer<T, IAudioBufferSourceNode<T>> {
    start: [number, number] | [number, number, number];
    stop: number;
}
//# sourceMappingURL=audio-buffer-source-node-renderer.d.ts.map
