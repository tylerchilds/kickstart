import { IAudioContext } from './audio-context.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IMinimalAudioContext } from './minimal-audio-context.d.ts';
export interface IMediaElementAudioSourceNode<T extends IAudioContext | IMinimalAudioContext> extends IAudioNode<T> {
    readonly mediaElement: HTMLMediaElement;
}
//# sourceMappingURL=media-element-audio-source-node.d.ts.map
