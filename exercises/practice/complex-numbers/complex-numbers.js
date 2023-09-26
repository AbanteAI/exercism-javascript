//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  }

  get real() {
    return this.a;
  }
  }

  get imag() {
    return this.b;
  }
  }

  add(other) {
    const a = this.a + other.a;
    const b = this.b + other.b;
    return new ComplexNumber(a, b);
  }
  }

  sub(other) {
    const a = this.a - other.a;
    const b = this.b - other.b;
    return new ComplexNumber(a, b);
  }
  }

  mul(other) {
    const a = this.a * other.a - this.b * other.b;
    const b = this.b * other.a + this.a * other.b;
    return new ComplexNumber(a, b);
  }
  }

  div(other) {
    const a = (this.a * other.a + this.b * other.b) / (other.a * other.a + other.b * other.b);
    const b = (this.b * other.a - this.a * other.b) / (other.a * other.a + other.b * other.b);
    return new ComplexNumber(a, b);
  }
  }

  get abs() {
    return Math.sqrt(this.a * this.a + this.b * this.b);
  }
  }

  get conj() {
    return new ComplexNumber(this.a, -this.b);
  }
  }

  get exp() {
    const realPart = Math.exp(this.a) * Math.cos(this.b);
    const imagPart = Math.exp(this.a) * Math.sin(this.b);
    return new ComplexNumber(realPart, imagPart);
  }
  }
}
