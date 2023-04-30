import { IAudioContext, IMediaStreamAudioSourceNode, IMediaStreamAudioSourceOptions, IMinimalAudioContext } from '../interfaces/index.d.ts';
export type TMediaStreamAudioSourceNodeConstructor = new <T extends IAudioContext | IMinimalAudioContext>(context: T, options: IMediaStreamAudioSourceOptions) => IMediaStreamAudioSourceNode<T>;
//# sourceMappingURL=media-stream-audio-source-node-constructor.d.ts.map
