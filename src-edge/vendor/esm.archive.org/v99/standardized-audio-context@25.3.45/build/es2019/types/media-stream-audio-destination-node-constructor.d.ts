import { IAudioContext, IAudioNodeOptions, IMediaStreamAudioDestinationNode, IMinimalAudioContext } from '../interfaces/index.d.ts';
export type TMediaStreamAudioDestinationNodeConstructor = new <T extends IAudioContext | IMinimalAudioContext>(context: T, options?: Partial<IAudioNodeOptions>) => IMediaStreamAudioDestinationNode<T>;
//# sourceMappingURL=media-stream-audio-destination-node-constructor.d.ts.map
