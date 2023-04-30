import { TAddActiveInputConnectionToAudioNodeFunction } from './add-active-input-connection-to-audio-node-function.d.ts';
import { TAddConnectionToAudioNodeFunction } from './add-connection-to-audio-node-function.d.ts';
import { TAddPassiveInputConnectionToAudioNodeFunction } from './add-passive-input-connection-to-audio-node-function.d.ts';
import { TConnectNativeAudioNodeToNativeAudioNodeFunction } from './connect-native-audio-node-to-native-audio-node-function.d.ts';
import { TDeleteActiveInputConnectionToAudioNodeFunction } from './delete-active-input-connection-to-audio-node-function.d.ts';
import { TDisconnectNativeAudioNodeFromNativeAudioNodeFunction } from './disconnect-native-audio-node-from-native-audio-node-function.d.ts';
import { TGetAudioNodeConnectionsFunction } from './get-audio-node-connections-function.d.ts';
import { TGetAudioNodeTailTimeFunction } from './get-audio-node-tail-time-function.d.ts';
import { TGetEventListenersOfAudioNodeFunction } from './get-event-listeners-of-audio-node-function.d.ts';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function.d.ts';
import { TInsertElementInSetFunction } from './insert-element-in-set-function.d.ts';
import { TIsActiveAudioNodeFunction } from './is-active-audio-node-function.d.ts';
import { TIsPartOfACycleFunction } from './is-part-of-a-cycle-function.d.ts';
import { TIsPassiveAudioNodeFunction } from './is-passive-audio-node-function.d.ts';
export type TAddConnectionToAudioNodeFactory = (addActiveInputConnectionToAudioNode: TAddActiveInputConnectionToAudioNodeFunction, addPassiveInputConnectionToAudioNode: TAddPassiveInputConnectionToAudioNodeFunction, connectNativeAudioNodeToNativeAudioNode: TConnectNativeAudioNodeToNativeAudioNodeFunction, deleteActiveInputConnectionToAudioNode: TDeleteActiveInputConnectionToAudioNodeFunction, disconnectNativeAudioNodeFromNativeAudioNode: TDisconnectNativeAudioNodeFromNativeAudioNodeFunction, getAudioNodeConnections: TGetAudioNodeConnectionsFunction, getAudioNodeTailTime: TGetAudioNodeTailTimeFunction, getEventListenersOfAudioNode: TGetEventListenersOfAudioNodeFunction, getNativeAudioNode: TGetNativeAudioNodeFunction, insertElementInSet: TInsertElementInSetFunction, isActiveAudioNode: TIsActiveAudioNodeFunction, isPartOfACycle: TIsPartOfACycleFunction, isPassiveAudioNode: TIsPassiveAudioNodeFunction) => TAddConnectionToAudioNodeFunction;
//# sourceMappingURL=add-connection-to-audio-node-factory.d.ts.map
