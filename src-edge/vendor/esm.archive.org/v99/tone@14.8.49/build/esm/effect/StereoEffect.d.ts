import { EffectOptions } from "./Effect.d.ts";
import { OutputNode, ToneAudioNode } from "../core/context/ToneAudioNode.d.ts";
import { CrossFade } from "../component/channel/CrossFade.d.ts";
import { Signal } from "../signal/Signal.d.ts";
import { Split } from "../component/channel/Split.d.ts";
import { Gain } from "../core/context/Gain.d.ts";
import { Merge } from "../component/channel/Merge.d.ts";
export declare type StereoEffectOptions = EffectOptions;
/**
 * Base class for Stereo effects.
 */
export declare class StereoEffect<Options extends StereoEffectOptions> extends ToneAudioNode<Options> {
    readonly name: string;
    readonly input: Gain;
    readonly output: CrossFade;
    /**
     * the drywet knob to control the amount of effect
     */
    private _dryWet;
    /**
     * The wet control, i.e. how much of the effected
     * will pass through to the output.
     */
    readonly wet: Signal<"normalRange">;
    /**
     * Split it
     */
    protected _split: Split;
    /**
     * the stereo effect merger
     */
    protected _merge: Merge;
    constructor(options: StereoEffectOptions);
    /**
     * Connect the left part of the effect
     */
    protected connectEffectLeft(...nodes: OutputNode[]): void;
    /**
     * Connect the right part of the effect
     */
    protected connectEffectRight(...nodes: OutputNode[]): void;
    static getDefaults(): StereoEffectOptions;
    dispose(): this;
}
