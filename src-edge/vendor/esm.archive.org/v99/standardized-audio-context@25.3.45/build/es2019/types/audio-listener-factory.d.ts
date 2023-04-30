import { IAudioListener } from '../interfaces/index.d.ts';
import { TContext } from './context.d.ts';
import { TNativeContext } from './native-context.d.ts';
export type TAudioListenerFactory = <T extends TContext>(context: T, nativeContext: TNativeContext) => IAudioListener;
//# sourceMappingURL=audio-listener-factory.d.ts.map
