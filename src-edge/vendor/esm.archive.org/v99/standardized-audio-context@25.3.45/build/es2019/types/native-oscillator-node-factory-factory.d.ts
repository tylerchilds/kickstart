import { TAddSilentConnectionFunction } from './add-silent-connection-function.d.ts';
import { TCacheTestResultFunction } from './cache-test-result-function.d.ts';
import { TNativeContext } from './native-context.d.ts';
import { TNativeOscillatorNodeFactory } from './native-oscillator-node-factory.d.ts';
import { TWrapAudioScheduledSourceNodeStopMethodConsecutiveCallsFunction } from './wrap-audio-scheduled-source-node-stop-method-consecutive-calls-function.d.ts';
export type TNativeOscillatorNodeFactoryFactory = (addSilentConnection: TAddSilentConnectionFunction, cacheTestResult: TCacheTestResultFunction, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport: (nativeContext: TNativeContext) => boolean, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport: (nativeContext: TNativeContext) => boolean, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport: (nativeContext: TNativeContext) => boolean, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls: TWrapAudioScheduledSourceNodeStopMethodConsecutiveCallsFunction) => TNativeOscillatorNodeFactory;
//# sourceMappingURL=native-oscillator-node-factory-factory.d.ts.map
