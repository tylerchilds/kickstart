import { IBaseAudioContext } from './base-audio-context.d.ts';
import { ICommonAudioContext } from './common-audio-context.d.ts';
import { IMediaElementAudioSourceNode } from './media-element-audio-source-node.d.ts';
import { IMediaStreamAudioDestinationNode } from './media-stream-audio-destination-node.d.ts';
import { IMediaStreamAudioSourceNode } from './media-stream-audio-source-node.d.ts';
import { IMediaStreamTrackAudioSourceNode } from './media-stream-track-audio-source-node.d.ts';
export interface IAudioContext extends IBaseAudioContext<IAudioContext>, ICommonAudioContext {
    createMediaElementSource(mediaElement: HTMLMediaElement): IMediaElementAudioSourceNode<this>;
    createMediaStreamDestination(): IMediaStreamAudioDestinationNode<this>;
    createMediaStreamSource(mediaStream: MediaStream): IMediaStreamAudioSourceNode<this>;
    createMediaStreamTrackSource(mediaStreamTrack: MediaStreamTrack): IMediaStreamTrackAudioSourceNode<this>;
}
//# sourceMappingURL=audio-context.d.ts.map
