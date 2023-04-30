import { IConstantSourceNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
export type TConstantSourceNodeRenderer<T extends TContext> = T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IConstantSourceNodeRenderer<T> : null;
//# sourceMappingURL=constant-source-node-renderer.d.ts.map
