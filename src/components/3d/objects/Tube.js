import { Shape } from 'three/src/extras/core/Shape';
import { Path } from 'three/src/extras/core/Path';
import { ExtrudeBufferGeometry } from 'three/src/geometries/Geometries';
import { Mesh } from 'three/src/objects/Mesh';

export class Tube {
  constructor(material, params = {}) {
    const shape = new Shape();
    const path = new Path();

    shape.absarc(0, 0, 2, 0, Math.PI * 2, false);
    path.absarc(0, 0, 1.8, 0, Math.PI * 2, true);
    shape.holes.push(path);

    const geometry = new ExtrudeBufferGeometry(shape, {
      depth: params.depth,
      steps: 1,
      bevelEnabled: false,
      curveSegments: 64,
    });

    return new Mesh(geometry, material);
  }
}
