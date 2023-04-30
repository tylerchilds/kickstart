import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TAudioParamFactory } from './audio-param-factory.d.ts';
import { TBiquadFilterNodeConstructor } from './biquad-filter-node-constructor.d.ts';
import { TBiquadFilterNodeRendererFactory } from './biquad-filter-node-renderer-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TInvalidAccessErrorFactory } from './invalid-access-error-factory.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeBiquadFilterNodeFactory } from './native-biquad-filter-node-factory.d.ts';
import { TSetAudioNodeTailTimeFunction } from './set-audio-node-tail-time-function.d.ts';
export type TBiquadFilterNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createAudioParam: TAudioParamFactory, createBiquadFilterNodeRenderer: TBiquadFilterNodeRendererFactory, createInvalidAccessError: TInvalidAccessErrorFactory, createNativeBiquadFilterNode: TNativeBiquadFilterNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, setAudioNodeTailTime: TSetAudioNodeTailTimeFunction) => TBiquadFilterNodeConstructor;
//# sourceMappingURL=biquad-filter-node-constructor-factory.d.ts.map
