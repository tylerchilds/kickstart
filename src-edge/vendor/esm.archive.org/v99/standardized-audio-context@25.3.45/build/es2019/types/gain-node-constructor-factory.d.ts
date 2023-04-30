import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TAudioParamFactory } from './audio-param-factory.d.ts';
import { TGainNodeConstructor } from './gain-node-constructor.d.ts';
import { TGainNodeRendererFactory } from './gain-node-renderer-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeGainNodeFactory } from './native-gain-node-factory.d.ts';
export type TGainNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createAudioParam: TAudioParamFactory, createGainNodeRenderer: TGainNodeRendererFactory, createNativeGainNode: TNativeGainNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction) => TGainNodeConstructor;
//# sourceMappingURL=gain-node-constructor-factory.d.ts.map
