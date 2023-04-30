import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.d.ts";
import { SignalOperator } from "./SignalOperator.d.ts";
import { WaveShaper } from "./WaveShaper.d.ts";
/**
 * GainToAudio converts an input in NormalRange [0,1] to AudioRange [-1,1].
 * See [[AudioToGain]].
 * @category Signal
 */
export declare class GainToAudio extends SignalOperator<ToneAudioNodeOptions> {
    readonly name: string;
    /**
     * The node which converts the audio ranges
     */
    private _norm;
    /**
     * The NormalRange input [0, 1]
     */
    input: WaveShaper;
    /**
     * The AudioRange output [-1, 1]
     */
    output: WaveShaper;
    /**
     * clean up
     */
    dispose(): this;
}
