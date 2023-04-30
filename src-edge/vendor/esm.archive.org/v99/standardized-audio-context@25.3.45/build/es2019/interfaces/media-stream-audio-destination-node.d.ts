import { IAudioContext } from './audio-context.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IMinimalAudioContext } from './minimal-audio-context.d.ts';
export interface IMediaStreamAudioDestinationNode<T extends IAudioContext | IMinimalAudioContext> extends IAudioNode<T> {
    readonly stream: MediaStream;
}
//# sourceMappingURL=media-stream-audio-destination-node.d.ts.map
