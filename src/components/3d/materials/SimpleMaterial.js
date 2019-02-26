import { MeshPhongMaterial } from 'three/src/materials/MeshPhongMaterial';
import { DoubleSide } from 'three/src/constants';

export class SimpleMaterial {
  constructor() {
    const material = new MeshPhongMaterial({
      side: DoubleSide,
    });
    material.color.setHSL(Math.random(), 1, 0.5);
    return material;
  }
}
