import { Monophonic, MonophonicOptions } from "./Monophonic.d.ts";
import { MonoSynth, MonoSynthOptions } from "./MonoSynth.d.ts";
import { Signal } from "../signal/Signal.d.ts";
import { RecursivePartial } from "../core/util/Interface.d.ts";
import { Frequency, NormalRange, Positive, Seconds, Time } from "../core/type/Units.d.ts";
import { Param } from "../core/context/Param.d.ts";
export interface DuoSynthOptions extends MonophonicOptions {
    voice0: Omit<MonoSynthOptions, keyof MonophonicOptions>;
    voice1: Omit<MonoSynthOptions, keyof MonophonicOptions>;
    harmonicity: Positive;
    vibratoRate: Frequency;
    vibratoAmount: Positive;
}
/**
 * DuoSynth is a monophonic synth composed of two [[MonoSynths]] run in parallel with control over the
 * frequency ratio between the two voices and vibrato effect.
 * @example
 * const duoSynth = new Tone.DuoSynth().toDestination();
 * duoSynth.triggerAttackRelease("C4", "2n");
 * @category Instrument
 */
export declare class DuoSynth extends Monophonic<DuoSynthOptions> {
    readonly name: string;
    readonly frequency: Signal<"frequency">;
    readonly detune: Signal<"cents">;
    /**
     * the first voice
     */
    readonly voice0: MonoSynth;
    /**
     * the second voice
     */
    readonly voice1: MonoSynth;
    /**
     * The amount of vibrato
     */
    vibratoAmount: Param<"normalRange">;
    /**
     * the vibrato frequency
     */
    vibratoRate: Signal<"frequency">;
    /**
     * Harmonicity is the ratio between the two voices. A harmonicity of
     * 1 is no change. Harmonicity = 2 means a change of an octave.
     * @example
     * const duoSynth = new Tone.DuoSynth().toDestination();
     * duoSynth.triggerAttackRelease("C4", "2n");
     * // pitch voice1 an octave below voice0
     * duoSynth.harmonicity.value = 0.5;
     */
    harmonicity: Signal<"positive">;
    /**
     * The vibrato LFO.
     */
    private _vibrato;
    /**
     * the vibrato gain
     */
    private _vibratoGain;
    constructor(options?: RecursivePartial<DuoSynthOptions>);
    getLevelAtTime(time: Time): NormalRange;
    static getDefaults(): DuoSynthOptions;
    /**
     * Trigger the attack portion of the note
     */
    protected _triggerEnvelopeAttack(time: Seconds, velocity: number): void;
    /**
     * Trigger the release portion of the note
     */
    protected _triggerEnvelopeRelease(time: Seconds): this;
    dispose(): this;
}
