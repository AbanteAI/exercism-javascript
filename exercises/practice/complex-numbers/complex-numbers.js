//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  get real() {
    return this._real;
  }

  set real(value) {
    this._real = value;
  }

  get imag() {
    return this._imag;
  }

  set imag(value) {
    this._imag = value;
  }

  add(other) {
    const real = this.real + other.real;
    const imag = this.imag + other.imag;
    return new ComplexNumber(real, imag);
  }

  sub(other) {
    const real = this.real - other.real;
    const imag = this.imag - other.imag;
    return new ComplexNumber(real, imag);
  }

  div(other) {
    const denominator = other.real ** 2 + other.imag ** 2;
    const real = (this.real * other.real + this.imag * other.imag) / denominator;
    const imag = (this.imag * other.real - this.real * other.imag) / denominator;
    return new ComplexNumber(real, imag);
  }

  mul(other) {
    const real = this.real * other.real - this.imag * other.imag;
    const imag = this.imag * other.real + this.real * other.imag;
    return new ComplexNumber(real, imag);
  }

  get abs() {
    const abs = Math.sqrt(this.real ** 2 + this.imag ** 2);
    return abs;
  }

  get conj() {
    const imag = -this.imag;
    return new ComplexNumber(this.real, imag);
  }

  get exp() {
    const real = Math.exp(this.real) * Math.cos(this.imag);
    const imag = Math.exp(this.real) * Math.sin(this.imag);
    return new ComplexNumber(real, imag);
  }
}
