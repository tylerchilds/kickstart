import { TAddSilentConnectionFunction } from './add-silent-connection-function.d.ts';
import { TCacheTestResultFunction } from './cache-test-result-function.d.ts';
import { TNativeConstantSourceNodeFactory } from './native-constant-source-node-factory.d.ts';
import { TNativeConstantSourceNodeFakerFactory } from './native-constant-source-node-faker-factory.d.ts';
import { TNativeContext } from './native-context.d.ts';
export type TNativeConstantSourceNodeFactoryFactory = (addSilentConnection: TAddSilentConnectionFunction, cacheTestResult: TCacheTestResultFunction, createNativeConstantSourceNodeFaker: TNativeConstantSourceNodeFakerFactory, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport: (nativeContext: TNativeContext) => boolean, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport: (nativeContext: TNativeContext) => boolean) => TNativeConstantSourceNodeFactory;
//# sourceMappingURL=native-constant-source-node-factory-factory.d.ts.map
