import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TAudioParamFactory } from './audio-param-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativePannerNodeFactory } from './native-panner-node-factory.d.ts';
import { TPannerNodeConstructor } from './panner-node-constructor.d.ts';
import { TPannerNodeRendererFactory } from './panner-node-renderer-factory.d.ts';
import { TSetAudioNodeTailTimeFunction } from './set-audio-node-tail-time-function.d.ts';
export type TPannerNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createAudioParam: TAudioParamFactory, createNativePannerNode: TNativePannerNodeFactory, createPannerNodeRenderer: TPannerNodeRendererFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, setAudioNodeTailTime: TSetAudioNodeTailTimeFunction) => TPannerNodeConstructor;
//# sourceMappingURL=panner-node-constructor-factory.d.ts.map
