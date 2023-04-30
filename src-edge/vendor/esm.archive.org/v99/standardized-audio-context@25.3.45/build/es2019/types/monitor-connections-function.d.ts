import { TNativeAudioNode } from './native-audio-node.d.ts';
export type TMonitorConnectionsFunction = <T extends TNativeAudioNode>(nativeAudioNode: T, whenConnected: () => void, whenDisconnected: () => void) => T;
//# sourceMappingURL=monitor-connections-function.d.ts.map
