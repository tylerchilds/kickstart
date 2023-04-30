import { IAudioBufferSourceNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TAudioBufferSourceNodeRenderer<T extends TContext> = T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioBufferSourceNodeRenderer<T> : null;
//# sourceMappingURL=audio-buffer-source-node-renderer.d.ts.map
