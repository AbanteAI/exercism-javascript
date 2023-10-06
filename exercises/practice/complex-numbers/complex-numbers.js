//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imag) {
    this._real = real;
    this._imag = imag;
  }
  }

  get real() {
    return this._real;
  }
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  get imag() {
    throw new Error('Remove this statement and implement this function');
  }

  add(other) {
    return new ComplexNumber(
      this._real + other.real,
      this._imag + other.imag
    );
  }

  sub(other) {
    return new ComplexNumber(
      this._real - other.real,
      this._imag - other.imag
    );
  }

  mul(other) {
    return new ComplexNumber(
      this._real * other.real - this._imag * other.imag,
      this._real * other.imag + this._imag * other.real
    );
  }

  div(other) {
    const denominator = other.real ** 2 + other.imag ** 2;
    return new ComplexNumber(
      (this._real * other.real + this._imag * other.imag) / denominator,
      (this._imag * other.real - this._real * other.imag) / denominator
    );
  }

  div() {
    throw new Error('Remove this statement and implement this function');
  }

  mul() {
    throw new Error('Remove this statement and implement this function');
  }

  get abs() {
    return Math.sqrt(this._real ** 2 + this._imag ** 2);
  }

  get conj() {
    return new ComplexNumber(this._real, -this._imag);
  }

  get exp() {
    const realExp = Math.exp(this._real);
    return new ComplexNumber(
      realExp * Math.cos(this._imag),
      realExp * Math.sin(this._imag)
    );
  }

  get exp() {
    throw new Error('Remove this statement and implement this function');
  }
}
