export default class IVector extends Array {
  static #DIMS = [
    "x",
    "y",
    "z",
    "w"
  ];

  size;

  constructor(...vals) {
    super(...vals);

    for (var i = 0; i < this.size; i++) {
      this[IVector.#DIMS[i]] = vals[i];
    }
  }

  add(v) {
    for (var i = 0; i < this.size; i++) {
      this[IVector.#DIMS[i]] = this[IVector.#DIMS[i]] + v[IVector.#DIMS[i]];
    }
  }

  sub(v) {
    for (var i = 0; i < this.size; i++) {
      this[IVector.#DIMS[i]] = this[IVector.#DIMS[i]] - v[IVector.#DIMS[i]];
    }
  }

  mul(v) {
    for (var i = 0; i < this.size; i++) {
      this[IVector.#DIMS[i]] = this[IVector.#DIMS[i]] * v[IVector.#DIMS[i]];
    }
  }

  div(v) {
    for (var i = 0; i < this.size; i++) {
      this[IVector.#DIMS[i]] = this[IVector.#DIMS[i]] / v[IVector.#DIMS[i]];
    }
  }

  pow(v) {
    for (var i = 0; i < this.size; i++) {
      this[IVector.#DIMS[i]] = Math.pow(this[IVector.#DIMS[i]], v[IVector.#DIMS[i]]);
    }
  }
}
