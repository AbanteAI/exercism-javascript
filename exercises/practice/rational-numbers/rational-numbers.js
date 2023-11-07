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
    return new Rational(
      this.numerator * other.denominator + other.numerator * this.denominator,
      this.denominator * other.denominator
    );
  }

  sub(other) {
    return new Rational(
      this.numerator * other.denominator - other.numerator * this.denominator,
      this.denominator * other.denominator
    );
  }

  mul(other) {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator
    );
  }

  div(other) {
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator
    );
  }

  abs() {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(power) {
    if (power < 0) {
      return new Rational(
        Math.pow(this.denominator, -power),
        Math.pow(this.numerator, -power)
      );
    }
    return new Rational(
      Math.pow(this.numerator, power),
      Math.pow(this.denominator, power)
    );
  }

  expreal(base) {
    return Math.pow(
      Math.pow(base, this.numerator),
      1 / this.denominator
    );
  }

  reduce() {
    const gcd = this.gcd(this.numerator, this.denominator);
    this.numerator /= gcd;
    this.denominator /= gcd;
  }

  gcd(a, b) {
    if (!b) return a;
    return this.gcd(b, a % b);
  }
}
