import { TMonitorConnectionsFunction } from './monitor-connections-function.d.ts';
import { TNativeChannelMergerNodeFactory } from './native-channel-merger-node-factory.d.ts';
import { TNativeChannelSplitterNodeFactory } from './native-channel-splitter-node-factory.d.ts';
import { TNativeGainNodeFactory } from './native-gain-node-factory.d.ts';
import { TNativeStereoPannerNodeFakerFactory } from './native-stereo-panner-node-faker-factory.d.ts';
import { TNativeWaveShaperNodeFactory } from './native-wave-shaper-node-factory.d.ts';
import { TNotSupportedErrorFactory } from './not-supported-error-factory.d.ts';
export type TNativeStereoPannerNodeFakerFactoryFactory = (createNativeChannelMergerNode: TNativeChannelMergerNodeFactory, createNativeChannelSplitterNode: TNativeChannelSplitterNodeFactory, createNativeGainNode: TNativeGainNodeFactory, createNativeWaveShaperNode: TNativeWaveShaperNodeFactory, createNotSupportedError: TNotSupportedErrorFactory, monitorConnections: TMonitorConnectionsFunction) => TNativeStereoPannerNodeFakerFactory;
//# sourceMappingURL=native-stereo-panner-node-faker-factory-factory.d.ts.map
