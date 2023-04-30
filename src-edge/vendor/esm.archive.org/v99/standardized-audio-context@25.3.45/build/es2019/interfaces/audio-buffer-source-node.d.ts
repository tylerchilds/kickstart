import { TAnyAudioBuffer, TContext } from '../types/index.d.ts';
import { IAudioParam } from './audio-param.d.ts';
import { IAudioScheduledSourceNode } from './audio-scheduled-source-node.d.ts';
export interface IAudioBufferSourceNode<T extends TContext> extends IAudioScheduledSourceNode<T> {
    buffer: null | TAnyAudioBuffer;
    loop: boolean;
    loopEnd: number;
    loopStart: number;
    readonly playbackRate: IAudioParam;
    start(when?: number, offset?: number, duration?: number): void;
}
//# sourceMappingURL=audio-buffer-source-node.d.ts.map
