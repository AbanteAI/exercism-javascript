//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
    this.reduce();
  }

  add(other) {
    const numerator = this.numerator * other.denominator + other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  sub(other) {
    const numerator = this.numerator * other.denominator - other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  mul(other) {
    const numerator = this.numerator * other.numerator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  div(other) {
    const numerator = this.numerator * other.denominator;
    const denominator = this.denominator * other.numerator;
    return new Rational(numerator, denominator);
  }

  abs() {
    const numerator = Math.abs(this.numerator);
    const denominator = Math.abs(this.denominator);
    return new Rational(numerator, denominator);
  }

  exprational(exponent) {
    const numerator = Math.pow(this.numerator, exponent);
    const denominator = Math.pow(this.denominator, exponent);
    return new Rational(numerator, denominator);
  }

  expreal(exponent) {
    const value = Math.pow(this.numerator / this.denominator, exponent);
    return value;
  }

  reduce() {
    const gcd = this.gcd(this.numerator, this.denominator);
    this.numerator /= gcd;
    this.denominator /= gcd;
  }

  gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return this.gcd(b, a % b);
  }
}
