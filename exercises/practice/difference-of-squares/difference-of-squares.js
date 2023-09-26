//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
export class Squares {
  constructor(n) {
    this.n = n;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.n; i++) {
      sum += i ** 2;
    }
    return sum;
  }

  get squareOfSum() {
    let sum = 0;
    for (let i = 1; i <= this.n; i++) {
      sum += i;
    }
    return sum ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

  get sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.n; i++) {
      sum += i ** 2;
    }
    return sum;
  }

  get squareOfSum() {
    let sum = 0;
    for (let i = 1; i <= this.n; i++) {
      sum += i;
    }
    return sum ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
}
