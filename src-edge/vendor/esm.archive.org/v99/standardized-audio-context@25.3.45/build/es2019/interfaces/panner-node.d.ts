import { TContext, TDistanceModelType, TPanningModelType } from '../types/index.d.ts';
import { IAudioNode } from './audio-node.d.ts';
import { IAudioParam } from './audio-param.d.ts';
export interface IPannerNode<T extends TContext> extends IAudioNode<T> {
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    distanceModel: TDistanceModelType;
    maxDistance: number;
    readonly orientationX: IAudioParam;
    readonly orientationY: IAudioParam;
    readonly orientationZ: IAudioParam;
    panningModel: TPanningModelType;
    readonly positionX: IAudioParam;
    readonly positionY: IAudioParam;
    readonly positionZ: IAudioParam;
    refDistance: number;
    rolloffFactor: number;
}
//# sourceMappingURL=panner-node.d.ts.map
