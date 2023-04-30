import { TAudioContextConstructor } from './audio-context-constructor.d.ts';
import { TBaseAudioContextConstructor } from './base-audio-context-constructor.d.ts';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TMediaElementAudioSourceNodeConstructor } from './media-element-audio-source-node-constructor.d.ts';
import { TMediaStreamAudioDestinationNodeConstructor } from './media-stream-audio-destination-node-constructor.d.ts';
import { TMediaStreamAudioSourceNodeConstructor } from './media-stream-audio-source-node-constructor.d.ts';
import { TMediaStreamTrackAudioSourceNodeConstructor } from './media-stream-track-audio-source-node-constructor.d.ts';
import { TNativeAudioContextConstructor } from './native-audio-context-constructor.d.ts';
import { TNotSupportedErrorFactory } from './not-supported-error-factory.d.ts';
import { TUnknownErrorFactory } from './unknown-error-factory.d.ts';
export type TAudioContextConstructorFactory = (baseAudioContextConstructor: TBaseAudioContextConstructor, createInvalidStateError: TInvalidStateErrorFactory, createNotSupportedError: TNotSupportedErrorFactory, createUnknownError: TUnknownErrorFactory, mediaElementAudioSourceNodeConstructor: TMediaElementAudioSourceNodeConstructor, mediaStreamAudioDestinationNodeConstructor: TMediaStreamAudioDestinationNodeConstructor, mediaStreamAudioSourceNodeConstructor: TMediaStreamAudioSourceNodeConstructor, mediaStreamTrackAudioSourceNodeConstructor: TMediaStreamTrackAudioSourceNodeConstructor, nativeAudioContextConstructor: null | TNativeAudioContextConstructor) => TAudioContextConstructor;
//# sourceMappingURL=audio-context-constructor-factory.d.ts.map
