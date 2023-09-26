//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
  gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
  constructor(a, b) {
    if (b === 0) {
      throw new Error('Denominator cannot be zero');
    }
    this.a = a;
    this.b = b;
    this.reduce();
  }

  add(rational) {
    const a = this.a * rational.b + rational.a * this.b;
    const b = this.b * rational.b;
    return new Rational(a, b);
  }

  sub(rational) {
    const a = this.a * rational.b - rational.a * this.b;
    const b = this.b * rational.b;
    return new Rational(a, b);
  }

  mul(rational) {
    const a = this.a * rational.a;
    const b = this.b * rational.b;
    return new Rational(a, b);
  }

  div(rational) {
    if (rational.a === 0) {
      throw new Error('Division by zero');
    }
    const a = this.a * rational.b;
    const b = this.b * rational.a;
    return new Rational(a, b);
  }

  abs() {
    const a = Math.abs(this.a);
    const b = Math.abs(this.b);
    return new Rational(a, b);
  }

  exprational(n) {
    const a = Math.pow(this.a, n);
    const b = Math.pow(this.b, n);
    return new Rational(a, b);
  }

  expreal(x) {
    const a = Math.pow(this.a, x);
    const b = Math.pow(this.b, x);
    return a / b;
  }

  reduce() {
    const gcd = this.gcd(this.a, this.b);
    this.a /= gcd;
    this.b /= gcd;
  }
}
