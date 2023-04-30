import { IAudioContext, IMediaStreamTrackAudioSourceNode, IMediaStreamTrackAudioSourceOptions, IMinimalAudioContext } from '../interfaces/index.d.ts';
export type TMediaStreamTrackAudioSourceNodeConstructor = new <T extends IAudioContext | IMinimalAudioContext>(context: T, options: IMediaStreamTrackAudioSourceOptions) => IMediaStreamTrackAudioSourceNode<T>;
//# sourceMappingURL=media-stream-track-audio-source-node-constructor.d.ts.map
