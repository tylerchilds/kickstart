import { TAudioListenerFactory } from './audio-listener-factory.d.ts';
import { TAudioParamFactory } from './audio-param-factory.d.ts';
import { TGetFirstSampleFunction } from './get-first-sample-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeChannelMergerNodeFactory } from './native-channel-merger-node-factory.d.ts';
import { TNativeConstantSourceNodeFactory } from './native-constant-source-node-factory.d.ts';
import { TNativeScriptProcessorNodeFactory } from './native-script-processor-node-factory.d.ts';
import { TNotSupportedErrorFactory } from './not-supported-error-factory.d.ts';
import { TOverwriteAccessorsFunction } from './overwrite-accessors-function.d.ts';
export type TAudioListenerFactoryFactory = (createAudioParam: TAudioParamFactory, createNativeChannelMergerNode: TNativeChannelMergerNodeFactory, createNativeConstantSourceNode: TNativeConstantSourceNodeFactory, createNativeScriptProcessorNode: TNativeScriptProcessorNodeFactory, createNotSupportedError: TNotSupportedErrorFactory, getFirstSample: TGetFirstSampleFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, overwriteAccessors: TOverwriteAccessorsFunction) => TAudioListenerFactory;
//# sourceMappingURL=audio-listener-factory-factory.d.ts.map
