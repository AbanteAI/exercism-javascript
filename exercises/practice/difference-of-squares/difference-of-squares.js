//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(number) {
    this.number = number;
  }
    throw new Error('Remove this statement and implement this function');
  }

  get sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.number; i++) {
      sum += i * i;
    }
    return sum;
  }
    throw new Error('Remove this statement and implement this function');
  }

  get squareOfSum() {
    let sum = 0;
    for (let i = 1; i <= this.number; i++) {
      sum += i;
    }
    return sum * sum;
  }
    throw new Error('Remove this statement and implement this function');
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
    throw new Error('Remove this statement and implement this function');
  }
}
