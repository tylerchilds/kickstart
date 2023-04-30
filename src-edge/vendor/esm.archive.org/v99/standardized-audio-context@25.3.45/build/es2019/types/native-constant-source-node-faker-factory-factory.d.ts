import { TAddSilentConnectionFunction } from './add-silent-connection-function.d.ts';
import { TMonitorConnectionsFunction } from './monitor-connections-function.d.ts';
import { TNativeAudioBufferSourceNodeFactory } from './native-audio-buffer-source-node-factory.d.ts';
import { TNativeConstantSourceNodeFakerFactory } from './native-constant-source-node-faker-factory.d.ts';
import { TNativeGainNodeFactory } from './native-gain-node-factory.d.ts';
export type TNativeConstantSourceNodeFakerFactoryFactory = (addSilentConnection: TAddSilentConnectionFunction, createNativeAudioBufferSourceNode: TNativeAudioBufferSourceNodeFactory, createNativeGainNode: TNativeGainNodeFactory, monitorConnections: TMonitorConnectionsFunction) => TNativeConstantSourceNodeFakerFactory;
//# sourceMappingURL=native-constant-source-node-faker-factory-factory.d.ts.map
