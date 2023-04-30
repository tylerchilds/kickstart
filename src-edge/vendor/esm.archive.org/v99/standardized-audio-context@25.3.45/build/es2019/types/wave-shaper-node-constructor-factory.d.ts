import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeWaveShaperNodeFactory } from './native-wave-shaper-node-factory.d.ts';
import { TSetAudioNodeTailTimeFunction } from './set-audio-node-tail-time-function.d.ts';
import { TWaveShaperNodeConstructor } from './wave-shaper-node-constructor.d.ts';
import { TWaveShaperNodeRendererFactory } from './wave-shaper-node-renderer-factory.d.ts';
export type TWaveShaperNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createInvalidStateError: TInvalidStateErrorFactory, createNativeWaveShaperNode: TNativeWaveShaperNodeFactory, createWaveShaperNodeRenderer: TWaveShaperNodeRendererFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, setAudioNodeTailTime: TSetAudioNodeTailTimeFunction) => TWaveShaperNodeConstructor;
//# sourceMappingURL=wave-shaper-node-constructor-factory.d.ts.map
