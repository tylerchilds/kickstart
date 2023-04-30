import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TChannelMergerNodeConstructor } from './channel-merger-node-constructor.d.ts';
import { TChannelMergerNodeRendererFactory } from './channel-merger-node-renderer-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeChannelMergerNodeFactory } from './native-channel-merger-node-factory.d.ts';
export type TChannelMergerNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createChannelMergerNodeRenderer: TChannelMergerNodeRendererFactory, createNativeChannelMergerNode: TNativeChannelMergerNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction) => TChannelMergerNodeConstructor;
//# sourceMappingURL=channel-merger-node-constructor-factory.d.ts.map
