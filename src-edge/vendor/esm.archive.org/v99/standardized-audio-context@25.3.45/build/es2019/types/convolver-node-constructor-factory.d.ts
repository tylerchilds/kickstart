import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TConvolverNodeConstructor } from './convolver-node-constructor.d.ts';
import { TConvolverNodeRendererFactory } from './convolver-node-renderer-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeConvolverNodeFactory } from './native-convolver-node-factory.d.ts';
import { TSetAudioNodeTailTimeFunction } from './set-audio-node-tail-time-function.d.ts';
export type TConvolverNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createConvolverNodeRenderer: TConvolverNodeRendererFactory, createNativeConvolverNode: TNativeConvolverNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, setAudioNodeTailTime: TSetAudioNodeTailTimeFunction) => TConvolverNodeConstructor;
//# sourceMappingURL=convolver-node-constructor-factory.d.ts.map
