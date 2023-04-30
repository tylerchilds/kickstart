import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TChannelSplitterNodeConstructor } from './channel-splitter-node-constructor.d.ts';
import { TChannelSplitterNodeRendererFactory } from './channel-splitter-node-renderer-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeChannelSplitterNodeFactory } from './native-channel-splitter-node-factory.d.ts';
import { TSanitizeChannelSplitterOptionsFunction } from './sanitize-channel-splitter-options-function.d.ts';
export type TChannelSplitterNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createChannelSplitterNodeRenderer: TChannelSplitterNodeRendererFactory, createNativeChannelSplitterNode: TNativeChannelSplitterNodeFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, sanitizeChannelSplitterOptions: TSanitizeChannelSplitterOptionsFunction) => TChannelSplitterNodeConstructor;
//# sourceMappingURL=channel-splitter-node-constructor-factory.d.ts.map
