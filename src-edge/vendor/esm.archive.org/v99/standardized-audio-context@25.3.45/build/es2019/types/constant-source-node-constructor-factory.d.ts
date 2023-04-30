import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TAudioParamFactory } from './audio-param-factory.d.ts';
import { TConstantSourceNodeConstructor } from './constant-source-node-constructor.d.ts';
import { TConstantSourceNodeRendererFactory } from './constant-source-node-renderer-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeConstantSourceNodeFactory } from './native-constant-source-node-factory.d.ts';
import { TWrapEventListenerFunction } from './wrap-event-listener-function.d.ts';
export type TConstantSourceNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createAudioParam: TAudioParamFactory, createConstantSourceNodeRenderer: TConstantSourceNodeRendererFactory, createNativeConstantSourceNode: TNativeConstantSourceNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, wrapEventListener: TWrapEventListenerFunction) => TConstantSourceNodeConstructor;
//# sourceMappingURL=constant-source-node-constructor-factory.d.ts.map
