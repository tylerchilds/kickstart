import { IAudioContext } from './audio-context.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IMinimalAudioContext } from './minimal-audio-context.d.ts';
export interface IMediaStreamAudioSourceNode<T extends IAudioContext | IMinimalAudioContext> extends IAudioNode<T> {
    readonly mediaStream: MediaStream;
}
//# sourceMappingURL=media-stream-audio-source-node.d.ts.map
