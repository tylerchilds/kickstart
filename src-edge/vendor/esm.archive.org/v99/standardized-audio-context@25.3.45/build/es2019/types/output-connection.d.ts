import { TAudioNodeOutputConnection } from './audio-node-output-connection.d.ts';
import { TAudioParamOutputConnection } from './audio-param-output-connection.d.ts';
import { TContext } from './context.d.ts';
export type TOutputConnection<T extends TContext> = TAudioNodeOutputConnection<T> | TAudioParamOutputConnection;
//# sourceMappingURL=output-connection.d.ts.map
