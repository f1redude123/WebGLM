export default class IVector extends Array {
  static #DIMS = [
    "x",
    "y",
    "z",
    "w"
  ];

  get size() { return 0; }

  constructor(...vals) {
    super(...vals);

    for (var i = 0; i < this.size; i++) {
      this[IVector.#DIMS[i]] = vals[i];
    }
  }

  add(v) {
    var newVec = structuredClone(this);
    for (var i = 0; i < this.size; i++) {
      newVec[i] += v[i];
    }
    return newVec;
  }

  sub(v) {
    var newVec = structuredClone(this);
    for (var i = 0; i < this.size; i++) {
      newVec[i] -= v[i];
    }
    return newVec;
  }

  mul(v) {
    var newVec = structuredClone(this);
    for (var i = 0; i < this.size; i++) {
      newVec[i] *= v[i];
    }
    return newVec;
  }

  div(v) {
    var newVec = structuredClone(this);
    for (var i = 0; i < this.size; i++) {
      newVec[i] /= v[i];
    }
    return newVec;
  }

  pow(v) {
    var newVec = structuredClone(this);
    for (var i = 0; i < this.size; i++) {
      newVec[i] = Math.pow(this[i], v[i]);
    }
    return newVec;
  }
}
