import IVector from "https://f1redude123.github.io/WebGLM/vector/IVector.js";

export class Vector4 extends IVector {
  get size() { return 4; }
}

export class Vector3 extends IVector {
  get size() { return 3; }
}

export class Vector2 extends IVector {
  get size() { return 2; }
}
