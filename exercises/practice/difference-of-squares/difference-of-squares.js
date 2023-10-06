//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(limit) {
    this.limit = limit;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.limit; i++) {
      sum += i ** 2;
    }
    return sum;
  }

  get squareOfSum() {
    let sum = 0;
    for (let i = 1; i <= this.limit; i++) {
      sum += i;
    }
    return sum ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }

  get sumOfSquares() {
    throw new Error('Remove this statement and implement this function');
  }

  get squareOfSum() {
    throw new Error('Remove this statement and implement this function');
  }

  get difference() {
    throw new Error('Remove this statement and implement this function');
  }

  get difference() {
    throw new Error('Remove this statement and implement this function');
  }
}
