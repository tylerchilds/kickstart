import { IAnalyserNode, IAudioBuffer, IAudioBufferSourceNode, IAudioContext, IAudioNode, IAudioWorkletNode, IBiquadFilterNode, IConstantSourceNode, IConvolverNode, IDelayNode, IDynamicsCompressorNode, IGainNode, IIIRFilterNode, IMediaElementAudioSourceNode, IMediaStreamAudioDestinationNode, IMediaStreamAudioSourceNode, IMediaStreamTrackAudioSourceNode, IMinimalAudioContext, IMinimalOfflineAudioContext, IOfflineAudioContext, IOfflineAudioContextConstructor, IOscillatorNode, IPannerNode, IPeriodicWave, IStereoPannerNode, IWaveShaperNode } from './interfaces/index.d.ts';
import { TAddAudioWorkletModuleFunction, TAnalyserNodeConstructor, TAudioBufferConstructor, TAudioBufferSourceNodeConstructor, TAudioContextConstructor, TAudioWorkletNodeConstructor, TBiquadFilterNodeConstructor, TChannelMergerNodeConstructor, TChannelSplitterNodeConstructor, TConstantSourceNodeConstructor, TContext, TConvolverNodeConstructor, TDecodeAudioDataFunction, TDelayNodeConstructor, TDynamicsCompressorNodeConstructor, TGainNodeConstructor, TIIRFilterNodeConstructor, TMediaElementAudioSourceNodeConstructor, TMediaStreamAudioDestinationNodeConstructor, TMediaStreamAudioSourceNodeConstructor, TMediaStreamTrackAudioSourceNodeConstructor, TMinimalAudioContextConstructor, TMinimalOfflineAudioContextConstructor, TOscillatorNodeConstructor, TPannerNodeConstructor, TPeriodicWaveConstructor, TStereoPannerNodeConstructor, TWaveShaperNodeConstructor } from './types/index.d.ts';
export * from './interfaces/index.d.ts';
export * from './types/index.d.ts';
declare const analyserNodeConstructor: TAnalyserNodeConstructor;
type analyserNodeConstructor<T extends TContext> = IAnalyserNode<T>;
export { analyserNodeConstructor as AnalyserNode };
declare const audioBufferConstructor: TAudioBufferConstructor;
type audioBufferConstructor = IAudioBuffer;
export { audioBufferConstructor as AudioBuffer };
declare const audioBufferSourceNodeConstructor: TAudioBufferSourceNodeConstructor;
type audioBufferSourceNodeConstructor<T extends TContext> = IAudioBufferSourceNode<T>;
export { audioBufferSourceNodeConstructor as AudioBufferSourceNode };
declare const biquadFilterNodeConstructor: TBiquadFilterNodeConstructor;
declare const channelMergerNodeConstructor: TChannelMergerNodeConstructor;
declare const channelSplitterNodeConstructor: TChannelSplitterNodeConstructor;
declare const constantSourceNodeConstructor: TConstantSourceNodeConstructor;
declare const convolverNodeConstructor: TConvolverNodeConstructor;
declare const delayNodeConstructor: TDelayNodeConstructor;
declare const dynamicsCompressorNodeConstructor: TDynamicsCompressorNodeConstructor;
declare const gainNodeConstructor: TGainNodeConstructor;
declare const iIRFilterNodeConstructor: TIIRFilterNodeConstructor;
declare const oscillatorNodeConstructor: TOscillatorNodeConstructor;
declare const pannerNodeConstructor: TPannerNodeConstructor;
declare const periodicWaveConstructor: TPeriodicWaveConstructor;
declare const stereoPannerNodeConstructor: TStereoPannerNodeConstructor;
declare const waveShaperNodeConstructor: TWaveShaperNodeConstructor;
export declare const addAudioWorkletModule: undefined | TAddAudioWorkletModuleFunction;
export declare const decodeAudioData: TDecodeAudioDataFunction;
declare const mediaElementAudioSourceNodeConstructor: TMediaElementAudioSourceNodeConstructor;
declare const mediaStreamAudioDestinationNodeConstructor: TMediaStreamAudioDestinationNodeConstructor;
declare const mediaStreamAudioSourceNodeConstructor: TMediaStreamAudioSourceNodeConstructor;
declare const mediaStreamTrackAudioSourceNodeConstructor: TMediaStreamTrackAudioSourceNodeConstructor;
declare const audioContextConstructor: TAudioContextConstructor;
type audioContextConstructor = IAudioContext;
export { audioContextConstructor as AudioContext };
declare const audioWorkletNodeConstructor: undefined | TAudioWorkletNodeConstructor;
type audioWorkletNodeConstructor<T extends TContext> = undefined | IAudioWorkletNode<T>;
export { audioWorkletNodeConstructor as AudioWorkletNode };
type biquadFilterNodeConstructor<T extends TContext> = IBiquadFilterNode<T>;
export { biquadFilterNodeConstructor as BiquadFilterNode };
type channelMergerNodeConstructor<T extends TContext> = IAudioNode<T>;
export { channelMergerNodeConstructor as ChannelMergerNode };
type channelSplitterNodeConstructor<T extends TContext> = IAudioNode<T>;
export { channelSplitterNodeConstructor as ChannelSplitterNode };
type constantSourceNodeConstructor<T extends TContext> = IConstantSourceNode<T>;
export { convolverNodeConstructor as ConvolverNode };
type convolverNodeConstructor<T extends TContext> = IConvolverNode<T>;
export { constantSourceNodeConstructor as ConstantSourceNode };
type delayNodeConstructor<T extends TContext> = IDelayNode<T>;
export { delayNodeConstructor as DelayNode };
type dynamicsCompressorNodeConstructor<T extends TContext> = IDynamicsCompressorNode<T>;
export { dynamicsCompressorNodeConstructor as DynamicsCompressorNode };
type gainNodeConstructor<T extends TContext> = IGainNode<T>;
export { gainNodeConstructor as GainNode };
type iIRFilterNodeConstructor<T extends TContext> = IIIRFilterNode<T>;
export { iIRFilterNodeConstructor as IIRFilterNode };
type mediaElementAudioSourceNodeConstructor<T extends IAudioContext | IMinimalAudioContext> = IMediaElementAudioSourceNode<T>;
export { mediaElementAudioSourceNodeConstructor as MediaElementAudioSourceNode };
type mediaStreamAudioDestinationNodeConstructor<T extends IAudioContext | IMinimalAudioContext> = IMediaStreamAudioDestinationNode<T>;
export { mediaStreamAudioDestinationNodeConstructor as MediaStreamAudioDestinationNode };
type mediaStreamAudioSourceNodeConstructor<T extends IAudioContext | IMinimalAudioContext> = IMediaStreamAudioSourceNode<T>;
export { mediaStreamAudioSourceNodeConstructor as MediaStreamAudioSourceNode };
type mediaStreamTrackAudioSourceNodeConstructor<T extends IAudioContext | IMinimalAudioContext> = IMediaStreamTrackAudioSourceNode<T>;
export { mediaStreamTrackAudioSourceNodeConstructor as MediaStreamTrackAudioSourceNode };
declare const minimalAudioContextConstructor: TMinimalAudioContextConstructor;
type minimalAudioContextConstructor = IMinimalAudioContext;
export { minimalAudioContextConstructor as MinimalAudioContext };
declare const minimalOfflineAudioContextConstructor: TMinimalOfflineAudioContextConstructor;
type minimalOfflineAudioContextConstructor = IMinimalOfflineAudioContext;
export { minimalOfflineAudioContextConstructor as MinimalOfflineAudioContext };
declare const offlineAudioContextConstructor: IOfflineAudioContextConstructor;
type offlineAudioContextConstructor = IOfflineAudioContext;
export { offlineAudioContextConstructor as OfflineAudioContext };
type oscillatorNodeConstructor<T extends TContext> = IOscillatorNode<T>;
export { oscillatorNodeConstructor as OscillatorNode };
type pannerNodeConstructor<T extends TContext> = IPannerNode<T>;
export { pannerNodeConstructor as PannerNode };
type periodicWaveConstructor = IPeriodicWave;
export { periodicWaveConstructor as PeriodicWave };
type stereoPannerNodeConstructor<T extends TContext> = IStereoPannerNode<T>;
export { stereoPannerNodeConstructor as StereoPannerNode };
type waveShaperNodeConstructor<T extends TContext> = IWaveShaperNode<T>;
export { waveShaperNodeConstructor as WaveShaperNode };
export declare const isAnyAudioContext: import("./types/index.d.ts").TIsAnyAudioContextFunction;
export declare const isAnyAudioNode: import("./types/index.d.ts").TIsAnyAudioNodeFunction;
export declare const isAnyAudioParam: import("./types/index.d.ts").TIsAnyAudioParamFunction;
export declare const isAnyOfflineAudioContext: import("./types/index.d.ts").TIsAnyOfflineAudioContextFunction;
export declare const isSupported: () => Promise<boolean>;
//# sourceMappingURL=module.d.ts.map
