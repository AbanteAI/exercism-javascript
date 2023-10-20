//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
  gcd(a, b) {
    return b === 0 ? a : this.gcd(b, a % b);
  }
  constructor(numerator, denominator) {
    const gcdValue = this.gcd(numerator, denominator);
    this.numerator = numerator / gcdValue;
    this.denominator = denominator / gcdValue;
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

  expreal(real) {
    return Math.pow(this.numerator, real) / Math.pow(this.denominator, real);
  }

  reduce() {
    const gcdValue = this.gcd(this.numerator, this.denominator);
    this.numerator /= gcdValue;
    this.denominator /= gcdValue;
  }
}
