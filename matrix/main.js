import IMatrix from "https://f1redude123.github.io/WebGLM/IMatrix.js";

export class Matrix4 extends IMatrix {
  sizeX = 4;
  sizeY = 4;
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
