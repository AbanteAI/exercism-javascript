//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
  add(complex) {
    return new ComplexNumber(this.real + complex.real, this.imag + complex.imag);
  }

  sub(complex) {
    return new ComplexNumber(this.real - complex.real, this.imag - complex.imag);
  }

  div(complex) {
    const denominator = complex.real ** 2 + complex.imag ** 2;
    const real = (this.real * complex.real + this.imag * complex.imag) / denominator;
    const imag = (this.imag * complex.real - this.real * complex.imag) / denominator;
    return new ComplexNumber(real, imag);
  }

  mul(complex) {
    const real = this.real * complex.real - this.imag * complex.imag;
    const imag = this.imag * complex.real + this.real * complex.imag;
    return new ComplexNumber(real, imag);
  }

  get abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }
    return new ComplexNumber(this.real, -this.imag);
  }
    const real = Math.exp(this.real) * Math.cos(this.imag);
    const imag = Math.exp(this.real) * Math.sin(this.imag);
    return new ComplexNumber(real, imag);
}
