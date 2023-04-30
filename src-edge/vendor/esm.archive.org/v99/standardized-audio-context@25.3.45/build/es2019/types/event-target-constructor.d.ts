import { IEventTarget } from '../interfaces/index.d.ts';
import { TNativeEventTarget } from './native-event-target.d.ts';
export type TEventTargetConstructor = new <EventMap extends Record<string, Event>>(nativeEventTarget: TNativeEventTarget) => IEventTarget<EventMap>;
//# sourceMappingURL=event-target-constructor.d.ts.map
