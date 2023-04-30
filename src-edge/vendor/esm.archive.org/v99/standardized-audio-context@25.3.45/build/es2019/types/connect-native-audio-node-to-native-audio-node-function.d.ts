import { INativeAudioNodeFaker } from '../interfaces/index.d.ts';
import { TNativeAudioNode } from './native-audio-node.d.ts';
export type TConnectNativeAudioNodeToNativeAudioNodeFunction = (nativeSourceAudioNode: INativeAudioNodeFaker | TNativeAudioNode, nativeDestinationAudioNode: INativeAudioNodeFaker | TNativeAudioNode, output: number, input: number) => [TNativeAudioNode, number, number];
//# sourceMappingURL=connect-native-audio-node-to-native-audio-node-function.d.ts.map
