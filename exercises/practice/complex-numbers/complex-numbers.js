//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
export class ComplexNumber {
  constructor(real, imag) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(other) {
    const real = this._real + other.real;
    const imag = this._imag + other.imag;
    return new ComplexNumber(real, imag);
  }

  sub(other) {
    const real = this._real - other.real;
    const imag = this._imag - other.imag;
    return new ComplexNumber(real, imag);
  }

  div(other) {
    const real = (this._real * other.real + this._imag * other.imag) / (other.real ** 2 + other.imag ** 2);
    const imag = (this._imag * other.real - this._real * other.imag) / (other.real ** 2 + other.imag ** 2);
    return new ComplexNumber(real, imag);
  }

  mul(other) {
    const real = this._real * other.real - this._imag * other.imag;
    const imag = this._imag * other.real + this._real * other.imag;
    return new ComplexNumber(real, imag);
  }

  get abs() {
    const abs = Math.sqrt(this._real ** 2 + this._imag ** 2);
    return abs;
  }

  get conj() {
    const imag = -this._imag;
    return new ComplexNumber(this._real, imag);
  }

  get exp() {
    const real = Math.exp(this._real) * Math.cos(this._imag);
    const imag = Math.exp(this._real) * Math.sin(this._imag);
    return new ComplexNumber(real, imag);
  }
}
}
