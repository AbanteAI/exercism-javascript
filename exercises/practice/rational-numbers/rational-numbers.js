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
  }

  add(other) {
    const numerator = this.numerator * other.denominator + other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }
  }

  sub(other) {
    const numerator = this.numerator * other.denominator - other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }
  }

  mul(other) {
    const numerator = this.numerator * other.numerator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }
  }

  div(other) {
    const numerator = this.numerator * other.denominator;
    const denominator = this.denominator * other.numerator;
    return new Rational(numerator, denominator);
  }
  }

  abs() {
    const numerator = Math.abs(this.numerator);
    const denominator = Math.abs(this.denominator);
    return new Rational(numerator, denominator);
  }
  }

  exprational(exponent) {
    const numerator = Math.pow(this.numerator, exponent);
    const denominator = Math.pow(this.denominator, exponent);
    return new Rational(numerator, denominator);
  }
  }

  expreal(exponent) {
    const numerator = Math.pow(this.numerator, exponent);
    const denominator = Math.pow(this.denominator, exponent);
    return Math.pow(numerator / denominator, exponent);
  }
  }

  reduce() {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(this.numerator, this.denominator);
    this.numerator /= divisor;
    this.denominator /= divisor;
    if (this.denominator < 0) {
      this.numerator *= -1;
      this.denominator *= -1;
    }
  }
}
}
