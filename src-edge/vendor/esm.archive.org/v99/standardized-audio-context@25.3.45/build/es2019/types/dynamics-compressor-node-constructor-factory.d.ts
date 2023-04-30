import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TAudioParamFactory } from './audio-param-factory.d.ts';
import { TDynamicsCompressorNodeConstructor } from './dynamics-compressor-node-constructor.d.ts';
import { TDynamicsCompressorNodeRendererFactory } from './dynamics-compressor-node-renderer-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeDynamicsCompressorNodeFactory } from './native-dynamics-compressor-node-factory.d.ts';
import { TNotSupportedErrorFactory } from './not-supported-error-factory.d.ts';
import { TSetAudioNodeTailTimeFunction } from './set-audio-node-tail-time-function.d.ts';
export type TDynamicsCompressorNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createAudioParam: TAudioParamFactory, createDynamicsCompressorNodeRenderer: TDynamicsCompressorNodeRendererFactory, createNativeDynamicsCompressorNode: TNativeDynamicsCompressorNodeFactory, createNotSupportedError: TNotSupportedErrorFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, setAudioNodeTailTime: TSetAudioNodeTailTimeFunction) => TDynamicsCompressorNodeConstructor;
//# sourceMappingURL=dynamics-compressor-node-constructor-factory.d.ts.map
