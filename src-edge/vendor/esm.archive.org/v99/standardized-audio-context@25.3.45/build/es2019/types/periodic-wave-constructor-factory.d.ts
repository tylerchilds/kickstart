import { IPeriodicWave } from '../interfaces/index.d.ts';
import { TGetNativeContextFunction } from './get-native-context-function.d.ts';
import { TNativePeriodicWaveFactory } from './native-periodic-wave-factory.d.ts';
import { TPeriodicWaveConstructor } from './periodic-wave-constructor.d.ts';
import { TSanitizePeriodicWaveOptionsFunction } from './sanitize-periodic-wave-options-function.d.ts';
export type TPeriodicWaveConstructorFactory = (createNativePeriodicWave: TNativePeriodicWaveFactory, getNativeContext: TGetNativeContextFunction, periodicWaveStore: WeakSet<IPeriodicWave>, sanitizePeriodicWaveOptions: TSanitizePeriodicWaveOptionsFunction) => TPeriodicWaveConstructor;
//# sourceMappingURL=periodic-wave-constructor-factory.d.ts.map
