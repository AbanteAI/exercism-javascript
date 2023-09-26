//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  get real() {
    return this.a;
  }

  get imag() {
    return this.b;
  }

  get imag() {
    return this.b;
  }
  }

  get real() {
    throw new Error('Remove this statement and implement this function');
  }

  add(other) {
    const real = this.a + other.a;
    const imag = this.b + other.b;
    return new ComplexNumber(real, imag);
  }

  sub(other) {
    const real = this.a - other.a;
    const imag = this.b - other.b;
    return new ComplexNumber(real, imag);
  }

  mul(other) {
    const real = this.a * other.a - this.b * other.b;
    const imag = this.b * other.a + this.a * other.b;
    return new ComplexNumber(real, imag);
  }

  div(other) {
    const denominator = other.a * other.a + other.b * other.b;
    const real = (this.a * other.a + this.b * other.b) / denominator;
    const imag = (this.b * other.a - this.a * other.b) / denominator;
    return new ComplexNumber(real, imag);
  }
    return new ComplexNumber(real, imag);
  }

  sub(other) {
    const real = this.a - other.a;
    const imag = this.b - other.b;
    return new ComplexNumber(real, imag);
  }

  mul(other) {
    const real = this.a * other.a - this.b * other.b;
    const imag = this.b * other.a + this.a * other.b;
    return new ComplexNumber(real, imag);
  }

  div(other) {
    const denominator = other.a * other.a + other.b * other.b;
    const real = (this.a * other.a + this.b * other.b) / denominator;
    const imag = (this.b * other.a - this.a * other.b) / denominator;
    return new ComplexNumber(real, imag);
  }

  sub() {
    throw new Error('Remove this statement and implement this function');
  }

  div() {
    throw new Error('Remove this statement and implement this function');
  }

  mul() {
    throw new Error('Remove this statement and implement this function');
  }

  get abs() {
    return Math.sqrt(this.a * this.a + this.b * this.b);
  }

  get conj() {
    return new ComplexNumber(this.a, -this.b);
  }

  get exp() {
    const real = Math.exp(this.a) * Math.cos(this.b);
    const imag = Math.exp(this.a) * Math.sin(this.b);
    return new ComplexNumber(real, imag);
  }
}

  get conj() {
    return new ComplexNumber(this.a, -this.b);
  }

  get exp() {
    const real = Math.exp(this.a) * Math.cos(this.b);
    const imag = Math.exp(this.a) * Math.sin(this.b);
    return new ComplexNumber(real, imag);
  }
}

  get conj() {
    throw new Error('Remove this statement and implement this function');
  }

  get exp() {
    throw new Error('Remove this statement and implement this function');
  }
}
