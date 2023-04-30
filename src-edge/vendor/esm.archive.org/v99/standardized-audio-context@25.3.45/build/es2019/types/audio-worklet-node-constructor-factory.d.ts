import { TAddUnrenderedAudioWorkletNodeFunction } from './add-unrendered-audio-worklet-node-function.d.ts';
import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TAudioParamFactory } from './audio-param-factory.d.ts';
import { TAudioWorkletNodeConstructor } from './audio-worklet-node-constructor.d.ts';
import { TAudioWorkletNodeRendererFactory } from './audio-worklet-node-renderer-factory.d.ts';
import { TGetAudioNodeConnectionsFunction } from './get-audio-node-connections-function.d.ts';
import { TGetBackupOfflineAudioContextFunction } from './get-backup-offline-audio-context-function.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeAudioWorkletNodeConstructor } from './native-audio-worklet-node-constructor.d.ts';
import { TNativeAudioWorkletNodeFactory } from './native-audio-worklet-node-factory.d.ts';
import { TSanitizeAudioWorkletNodeOptionsFunction } from './sanitize-audio-worklet-node-options-function.d.ts';
import { TSetActiveAudioWorkletNodeInputsFunction } from './set-active-audio-worklet-node-inputs-function.d.ts';
import { TTestAudioWorkletNodeOptionsClonabilityFunction } from './test-audio-worklet-node-options-clonability-function.d.ts';
import { TWrapEventListenerFunction } from './wrap-event-listener-function.d.ts';
export type TAudioWorkletNodeConstructorFactory = (addUnrenderedAudioWorkletNode: TAddUnrenderedAudioWorkletNodeFunction, audioNodeConstructor: TAudioNodeConstructor, createAudioParam: TAudioParamFactory, createAudioWorkletNodeRenderer: TAudioWorkletNodeRendererFactory, createNativeAudioWorkletNode: TNativeAudioWorkletNodeFactory, getAudioNodeConnections: TGetAudioNodeConnectionsFunction, getBackupOfflineAudioContext: TGetBackupOfflineAudioContextFunction, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, nativeAudioWorkletNodeConstructor: null | TNativeAudioWorkletNodeConstructor, sanitizeAudioWorkletNodeOptions: TSanitizeAudioWorkletNodeOptionsFunction, setActiveAudioWorkletNodeInputs: TSetActiveAudioWorkletNodeInputsFunction, testAudioWorkletNodeOptionsClonability: TTestAudioWorkletNodeOptionsClonabilityFunction, wrapEventListener: TWrapEventListenerFunction) => TAudioWorkletNodeConstructor;
//# sourceMappingURL=audio-worklet-node-constructor-factory.d.ts.map
