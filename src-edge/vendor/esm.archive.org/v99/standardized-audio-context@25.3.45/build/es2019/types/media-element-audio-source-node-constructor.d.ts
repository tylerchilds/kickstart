import { IAudioContext, IMediaElementAudioSourceNode, IMediaElementAudioSourceOptions, IMinimalAudioContext } from '../interfaces/index.d.ts';
export type TMediaElementAudioSourceNodeConstructor = new <T extends IAudioContext | IMinimalAudioContext>(context: T, options: IMediaElementAudioSourceOptions) => IMediaElementAudioSourceNode<T>;
//# sourceMappingURL=media-element-audio-source-node-constructor.d.ts.map
