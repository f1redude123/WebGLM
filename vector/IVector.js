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
    for (var i = 0; i < this.size; i++) {
      this[i] += v[i];
    }
  }

  sub(v) {
    for (var i = 0; i < this.size; i++) {
      this[i] -= v[i];
    }
  }

  mul(v) {
    for (var i = 0; i < this.size; i++) {
      this[i] *= v[i];
    }
  }

  div(v) {
    for (var i = 0; i < this.size; i++) {
      this[i] /= v[i];
    }
  }

  pow(v) {
    for (var i = 0; i < this.size; i++) {
      this[i] = Math.pow(this[i], v[i]);
    }
  }
}
