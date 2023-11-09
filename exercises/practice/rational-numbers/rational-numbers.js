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
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(power) {
    return new Rational(Math.pow(this.numerator, power), Math.pow(this.denominator, power));
  }

  expreal(x) {
    return Math.pow(this.numerator, x) / Math.pow(this.denominator, x);
  }

  reduce() {
    const gcd = (a, b) => {
      if (b === 0) return a;
      return gcd(b, a % b);
    };
    const divisor = gcd(this.numerator, this.denominator);
    this.numerator /= divisor;
    this.denominator /= divisor;
  }
}
