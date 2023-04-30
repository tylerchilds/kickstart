import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TAudioParamFactory } from './audio-param-factory.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeStereoPannerNodeFactory } from './native-stereo-panner-node-factory.d.ts';
import { TStereoPannerNodeConstructor } from './stereo-panner-node-constructor.d.ts';
import { TStereoPannerNodeRendererFactory } from './stereo-panner-node-renderer-factory.d.ts';
export type TStereoPannerNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createAudioParam: TAudioParamFactory, createNativeStereoPannerNode: TNativeStereoPannerNodeFactory, createStereoPannerNodeRenderer: TStereoPannerNodeRendererFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction) => TStereoPannerNodeConstructor;
//# sourceMappingURL=stereo-panner-node-constructor-factory.d.ts.map
