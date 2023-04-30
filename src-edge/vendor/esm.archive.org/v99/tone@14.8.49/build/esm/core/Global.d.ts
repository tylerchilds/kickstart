import { AnyAudioContext } from "./context/AudioContext.d.ts";
import { BaseContext } from "./context/BaseContext.d.ts";
/**
 * Returns the default system-wide [[Context]]
 * @category Core
 */
export declare function getContext(): BaseContext;
/**
 * Set the default audio context
 * @param context
 * @param disposeOld Pass `true` if you don't need the old context to dispose it.
 * @category Core
 */
export declare function setContext(context: BaseContext | AnyAudioContext, disposeOld?: boolean): void;
/**
 * Most browsers will not play _any_ audio until a user
 * clicks something (like a play button). Invoke this method
 * on a click or keypress event handler to start the audio context.
 * More about the Autoplay policy
 * [here](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio)
 * @example
 * document.querySelector("button").addEventListener("click", async () => {
 * 	await Tone.start();
 * 	console.log("context started");
 * });
 * @category Core
 */
export declare function start(): Promise<void>;
