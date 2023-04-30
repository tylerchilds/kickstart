import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TAudioParamFactory } from './audio-param-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeOscillatorNodeFactory } from './native-oscillator-node-factory.d.ts';
import { TOscillatorNodeConstructor } from './oscillator-node-constructor.d.ts';
import { TOscillatorNodeRendererFactory } from './oscillator-node-renderer-factory.d.ts';
import { TWrapEventListenerFunction } from './wrap-event-listener-function.d.ts';
export type TOscillatorNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createAudioParam: TAudioParamFactory, createNativeOscillatorNode: TNativeOscillatorNodeFactory, createOscillatorNodeRenderer: TOscillatorNodeRendererFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, wrapEventListener: TWrapEventListenerFunction) => TOscillatorNodeConstructor;
//# sourceMappingURL=oscillator-node-constructor-factory.d.ts.map
