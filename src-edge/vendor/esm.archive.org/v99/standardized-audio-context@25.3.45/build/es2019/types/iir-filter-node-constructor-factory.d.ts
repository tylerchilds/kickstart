import { TAudioNodeConstructor } from './audio-node-constructor.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TIIRFilterNodeConstructor } from './iir-filter-node-constructor.d.ts';
import { TIIRFilterNodeRendererFactory } from './iir-filter-node-renderer-factory.d.ts';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function.d.ts';
import { TNativeIIRFilterNodeFactory } from './native-iir-filter-node-factory.d.ts';
import { TSetAudioNodeTailTimeFunction } from './set-audio-node-tail-time-function.d.ts';
export type TIIRFilterNodeConstructorFactory = (audioNodeConstructor: TAudioNodeConstructor, createNativeIIRFilterNode: TNativeIIRFilterNodeFactory, createIIRFilterNodeRenderer: TIIRFilterNodeRendererFactory, getNativeContext: TGetNativeContextFunction, isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction, setAudioNodeTailTime: TSetAudioNodeTailTimeFunction) => TIIRFilterNodeConstructor;
//# sourceMappingURL=iir-filter-node-constructor-factory.d.ts.map
