import { TDistanceModelType, TPanningModelType } from '../types/index.d.ts';
import { IAudioNodeOptions } from './audio-node-options.d.ts';
export interface IPannerOptions extends IAudioNodeOptions {
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    distanceModel: TDistanceModelType;
    maxDistance: number;
    orientationX: number;
    orientationY: number;
    orientationZ: number;
    panningModel: TPanningModelType;
    positionX: number;
    positionY: number;
    positionZ: number;
    refDistance: number;
    rolloffFactor: number;
}
//# sourceMappingURL=panner-options.d.ts.map
