import { TAudioDestinationNodeConstructor } from './audio-destination-node-constructor.d.ts';
import { TAudioListenerFactory } from './audio-listener-factory.d.ts';
import { TEventTargetConstructor } from './event-target-constructor.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TMinimalBaseAudioContextConstructor } from './minimal-base-audio-context-constructor.d.ts';
import { TUnrenderedAudioWorkletNodeStore } from './unrendered-audio-worklet-node-store.d.ts';
import { TWrapEventListenerFunction } from './wrap-event-listener-function.d.ts';
export type TMinimalBaseAudioContextConstructorFactory = (audioDestinationNodeConstructor: TAudioDestinationNodeConstructor, createAudioListener: TAudioListenerFactory, eventTargetConstructor: TEventTargetConstructor, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, unrenderedAudioWorkletNodeStore: TUnrenderedAudioWorkletNodeStore, wrapEventListener: TWrapEventListenerFunction) => TMinimalBaseAudioContextConstructor;
//# sourceMappingURL=minimal-base-audio-context-constructor-factory.d.ts.map
