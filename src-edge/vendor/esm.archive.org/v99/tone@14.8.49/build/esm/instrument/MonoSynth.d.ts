import { AmplitudeEnvelope } from "../component/envelope/AmplitudeEnvelope.d.ts";
import { EnvelopeOptions } from "../component/envelope/Envelope.d.ts";
import { Filter, FilterOptions } from "../component/filter/Filter.d.ts";
import { RecursivePartial } from "../core/util/Interface.d.ts";
import { Monophonic, MonophonicOptions } from "../instrument/Monophonic.d.ts";
import { OmniOscillator } from "../source/oscillator/OmniOscillator.d.ts";
import { FrequencyEnvelope, FrequencyEnvelopeOptions } from "../component/envelope/FrequencyEnvelope.d.ts";
import { NormalRange, Seconds, Time } from "../core/type/Units.d.ts";
import { Signal } from "../signal/Signal.d.ts";
import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.d.ts";
import { OmniOscillatorSynthOptions } from "../source/oscillator/OscillatorInterface.d.ts";
export interface MonoSynthOptions extends MonophonicOptions {
    oscillator: OmniOscillatorSynthOptions;
    envelope: Omit<EnvelopeOptions, keyof ToneAudioNodeOptions>;
    filterEnvelope: Omit<FrequencyEnvelopeOptions, keyof ToneAudioNodeOptions>;
    filter: Omit<FilterOptions, keyof ToneAudioNodeOptions>;
}
/**
 * MonoSynth is composed of one `oscillator`, one `filter`, and two `envelopes`.
 * The amplitude of the Oscillator and the cutoff frequency of the
 * Filter are controlled by Envelopes.
 * <img src="https://docs.google.com/drawings/d/1gaY1DF9_Hzkodqf8JI1Cg2VZfwSElpFQfI94IQwad38/pub?w=924&h=240">
 * @example
 * const synth = new Tone.MonoSynth({
 * 	oscillator: {
 * 		type: "square"
 * 	},
 * 	envelope: {
 * 		attack: 0.1
 * 	}
 * }).toDestination();
 * synth.triggerAttackRelease("C4", "8n");
 * @category Instrument
 */
export declare class MonoSynth extends Monophonic<MonoSynthOptions> {
    readonly name = "MonoSynth";
    /**
     * The oscillator.
     */
    readonly oscillator: OmniOscillator<any>;
    /**
     * The frequency control.
     */
    readonly frequency: Signal<"frequency">;
    /**
     * The detune control.
     */
    readonly detune: Signal<"cents">;
    /**
     * The filter.
     */
    readonly filter: Filter;
    /**
     * The filter envelope.
     */
    readonly filterEnvelope: FrequencyEnvelope;
    /**
     * The amplitude envelope.
     */
    readonly envelope: AmplitudeEnvelope;
    constructor(options?: RecursivePartial<MonoSynthOptions>);
    static getDefaults(): MonoSynthOptions;
    /**
     * start the attack portion of the envelope
     * @param time the time the attack should start
     * @param velocity the velocity of the note (0-1)
     */
    protected _triggerEnvelopeAttack(time: Seconds, velocity?: number): void;
    /**
     * start the release portion of the envelope
     * @param time the time the release should start
     */
    protected _triggerEnvelopeRelease(time: Seconds): void;
    getLevelAtTime(time: Time): NormalRange;
    dispose(): this;
}
