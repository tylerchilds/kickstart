import { Effect, EffectOptions } from "./Effect.d.ts";
import { ToneOscillatorType } from "../source/oscillator/OscillatorInterface.d.ts";
import { Frequency, NormalRange, Seconds } from "../core/type/Units.d.ts";
import { Signal } from "../signal/Signal.d.ts";
import { Param } from "../core/context/Param.d.ts";
export interface VibratoOptions extends EffectOptions {
    maxDelay: Seconds;
    frequency: Frequency;
    depth: NormalRange;
    type: ToneOscillatorType;
}
/**
 * A Vibrato effect composed of a Tone.Delay and a Tone.LFO. The LFO
 * modulates the delayTime of the delay, causing the pitch to rise and fall.
 * @category Effect
 */
export declare class Vibrato extends Effect<VibratoOptions> {
    readonly name: string;
    /**
     * The delay node used for the vibrato effect
     */
    private _delayNode;
    /**
     * The LFO used to control the vibrato
     */
    private _lfo;
    /**
     * The frequency of the vibrato
     */
    readonly frequency: Signal<"frequency">;
    /**
     * The depth of the vibrato.
     */
    readonly depth: Param<"normalRange">;
    /**
     * @param frequency The frequency of the vibrato.
     * @param depth The amount the pitch is modulated.
     */
    constructor(frequency?: Frequency, depth?: NormalRange);
    constructor(options?: Partial<VibratoOptions>);
    static getDefaults(): VibratoOptions;
    /**
     * Type of oscillator attached to the Vibrato.
     */
    get type(): ToneOscillatorType;
    set type(type: ToneOscillatorType);
    dispose(): this;
}
