// Type definitions for @mapbox/vector-tile 1.3
// Project: https://github.com/mapbox/vector-tile-js
// Definitions by: Mathieu Maes <https://github.com/webberig>
//                 Harel Mazor <https://github.com/HarelM>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Pbf =  require('https://esm.sh/v117/@types/pbf@3.0.2/index.d.ts');
import { Feature } from 'https://esm.sh/v117/@types/geojson@7946.0.10/index.d.ts';
import Point = require('https://esm.sh/v117/@types/mapbox__point-geometry@0.1.2/index.d.ts');

export class VectorTile {
    constructor(pbf: Pbf);
    layers: {[_: string]: VectorTileLayer};
}

export class VectorTileFeature {
    static types: ['Unknown', 'Point', 'LineString', 'Polygon'];
    extent: number;
    type: 1 | 2 | 3;
    id: number;
    properties: {[_: string]: string | number | boolean};
    loadGeometry(): Point[][];
    toGeoJSON(x: number, y: number, z: number): Feature;
    bbox?(): [number, number, number, number];
}

export class VectorTileLayer {
    constructor(pbf: Pbf);
    version?: number;
    name: string;
    extent: number;
    length: number;
    feature(featureIndex: number): VectorTileFeature;
}
