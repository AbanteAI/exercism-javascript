//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
  constructor(numerator, denominator) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const sign = denominator < 0 ? -1 : 1;
    const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
    this.numerator = sign * Math.abs(numerator) / divisor;
    this.denominator = Math.abs(denominator) / divisor;
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

  exprational(power) {
    const numerator = Math.pow(this.numerator, power);
    const denominator = Math.pow(this.denominator, power);
    return new Rational(numerator, denominator);
  }

  expreal(base) {
    const value = Math.pow(base, this.numerator / this.denominator);
    return value;
  }

  reduce() {
    return new Rational(this.numerator, this.denominator);
  }
}
