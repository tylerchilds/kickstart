import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TAudioParamFactory } from './audio-param-factory.d.ts';
import { TDelayNodeConstructor } from './delay-node-constructor.d.ts';
import { TDelayNodeRendererFactory } from './delay-node-renderer-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeDelayNodeFactory } from './native-delay-node-factory.d.ts';
import { TSetAudioNodeTailTimeFunction } from './set-audio-node-tail-time-function.d.ts';
export type TDelayNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createAudioParam: TAudioParamFactory, createDelayNodeRenderer: TDelayNodeRendererFactory, createNativeDelayNode: TNativeDelayNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, setAudioNodeTailTime: TSetAudioNodeTailTimeFunction) => TDelayNodeConstructor;
//# sourceMappingURL=delay-node-constructor-factory.d.ts.map
