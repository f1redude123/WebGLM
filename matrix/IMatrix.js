export default class IMatrix extends Array {
  sizeX;
  sizeY;
  length = this.sizeX * this.sizeY;
  
  mul(mat) {
    if (this.constructor == IMatrix || mat.constructor == IMatrix) {
      throw new Error("Cannot perform matrix operations on object of type IMatrix");
    }
    
    var newMat = new this.constructor();
    newMat.sizeX = Math.min(this.sizeX, mat.sizeX);
    newMat.sizeY = Math.min(this.sizeY, mat.sizeY);
    for (var i = 0; i < this.sizeY; i++) {
      for (var n = 0; n < mat.sizeX; n++) {
        var res = 0;

        for (var r = 0; r < this.sizeX; r++) {
          res += this.getAt(r, i) * mat.getAt(n, r);
        }

        newMat.setAt(n, i, res);
      }
    }
  }

  getAt(x, y) {
    return this[x + y * this.sizeX];
  }
  
  setAt(x, y, n) {
    this[x + y * this.sizeX] = n;
  }
}
