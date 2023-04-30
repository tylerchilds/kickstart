import { IAudioDestinationNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TNativeAudioBuffer } from './native-audio-buffer.d.ts';
import { TNativeOfflineAudioContext } from './native-offline-audio-context.d.ts';
export type TStartRenderingFunction = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(destination: IAudioDestinationNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => Promise<TNativeAudioBuffer>;
//# sourceMappingURL=start-rendering-function.d.ts.map
