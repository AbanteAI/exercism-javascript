//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
export class Rational {
  constructor(num, denom) {
    this.num = num;
    this.denom = denom;
    this.reduce();
  }

  add(other) {
    const num = this.num * other.denom + other.num * this.denom;
    const denom = this.denom * other.denom;
    return new Rational(num, denom);
  }

  sub(other) {
    const num = this.num * other.denom - other.num * this.denom;
    const denom = this.denom * other.denom;
    return new Rational(num, denom);
  }

  mul(other) {
    const num = this.num * other.num;
    const denom = this.denom * other.denom;
    return new Rational(num, denom);
  }

  div(other) {
    const num = this.num * other.denom;
    const denom = this.denom * other.num;
    return new Rational(num, denom);
  }

  abs() {
    const num = Math.abs(this.num);
    const denom = Math.abs(this.denom);
    return new Rational(num, denom);
  }

  exprational(exponent) {
    const num = Math.pow(this.num, exponent);
    const denom = Math.pow(this.denom, exponent);
    return new Rational(num, denom);
  }

  expreal(exponent) {
    const num = Math.pow(this.num, exponent);
    const denom = Math.pow(this.denom, exponent);
    return Math.pow(num / denom, 1 / exponent);
  }

  reduce() {
    const gcd = this.calculateGCD(this.num, this.denom);
    this.num = this.num / gcd;
    this.denom = this.denom / gcd;
    if (this.denom < 0) {
      this.num = -this.num;
      this.denom = -this.denom;
    }
  }

  calculateGCD(a, b) {
    if (b === 0) {
      return Math.abs(a);
    }
    return this.calculateGCD(b, a % b);
  }
}
  }
}
