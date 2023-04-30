import { TAudioContextState, TContext, TEventHandler } from '../types/index.d.ts';
import { IAudioDestinationNode } from './audio-destination-node.d.ts';
import { IAudioListener } from './audio-listener.d.ts';
import { IEventTarget } from './event-target.d.ts';
import { IMinimalBaseAudioContextEventMap } from './minimal-base-audio-context-event-map.d.ts';
export interface IMinimalBaseAudioContext<T extends TContext> extends IEventTarget<IMinimalBaseAudioContextEventMap> {
    readonly currentTime: number;
    readonly destination: IAudioDestinationNode<T>;
    readonly listener: IAudioListener;
    onstatechange: null | TEventHandler<T>;
    readonly sampleRate: number;
    readonly state: TAudioContextState;
}
//# sourceMappingURL=minimal-base-audio-context.d.ts.map
