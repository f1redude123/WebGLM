import IMatrix from "https://f1redude123.github.io/WebGLM/matrix/IMatrix.js";

export class Matrix4 extends IMatrix {
  sizeX = 4;
  sizeY = 4;

  static translate(x, y, z) {
    return new Matrix4(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      x, y, z, 1
    );
  }
  static rotateZ(rot) {
    const c = Math.cos(rot);
    const s = Math.sin(rot);
    return new Matrix4(
      1, 0, 0, 0,
      0, c, -s, 0,
      0, s, c, 0,
      0, 0, 0, 1
    );
  }
  static rotateY(rot) {
    const c = Math.cos(rot);
    const s = Math.sin(rot);
    return new Matrix4(
      c, 0, s, 0,
      0, 1, 0, 0,
      -s, 0, c, 0,
      0, 0, 0, 1
    );
  }
  static rotateX(rot) {
    const c = Math.cos(rot);
    const s = Math.sin(rot);
    return new Matrix4(
      c, -s, 0, 0,
      s, c, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    );
  }
  static perspective(fov, aspect, near, far) {
    const f = 1 / Math.tan(fov / 2);
    const rangeInv = 1 / (near - far);
    return new Matrix4(
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) * rangeInv, -1,
      0, 0, (far * near * 2) * rangeInv, 0
    );
  }
}

export class Matrix3 extends IMatrix {
  sizeX = 3;
  sizeY = 3;
}

export class Matrix2 extends IMatrix {
  sizeX = 2;
  sizeY = 2;
}

export class Matrix4x3 extends IMatrix {
  sizeX = 4;
  sizeY = 3;
}

export class Matrix4x2 extends IMatrix {
  sizeX = 4;
  sizeY = 2;
}

export class Matrix3x4 extends IMatrix {
  sizeX = 3;
  sizeY = 4;
}

export class Matrix3x2 extends IMatrix {
  sizeX = 3;
  sizeY = 2;
}

export class Matrix2x4 extends IMatrix {
  sizeX = 2;
  sizeY = 4;
}

export class Matrix2x3 extends IMatrix {
  sizeX = 2;
  sizeY = 3;
}
