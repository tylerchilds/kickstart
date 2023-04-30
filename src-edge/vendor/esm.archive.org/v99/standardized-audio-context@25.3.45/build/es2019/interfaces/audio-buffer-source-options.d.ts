import { TAnyAudioBuffer } from '../types/index.d.ts';
import { IAudioNodeOptions } from './audio-node-options.d.ts';
export interface IAudioBufferSourceOptions extends IAudioNodeOptions {
    buffer: null | TAnyAudioBuffer;
    loop: boolean;
    loopEnd: number;
    loopStart: number;
    playbackRate: number;
}
//# sourceMappingURL=audio-buffer-source-options.d.ts.map
