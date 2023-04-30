import { IOfflineAudioContext } from './offline-audio-context.d.ts';
import { IOfflineAudioContextOptions } from './offline-audio-context-options.d.ts';
export interface IOfflineAudioContextConstructor {
    new (options: IOfflineAudioContextOptions): IOfflineAudioContext;
    new (numberOfChannels: number, length: number, sampleRate: number): IOfflineAudioContext;
}
//# sourceMappingURL=offline-audio-context-constructor.d.ts.map
