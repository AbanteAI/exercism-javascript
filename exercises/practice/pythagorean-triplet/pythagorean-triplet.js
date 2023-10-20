//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor = 1, maxFactor, sum }) {
  const result = [];

  for (let a = minFactor; a <= maxFactor - 2; a++) {
    for (let b = a + 1; b <= maxFactor - 1; b++) {
      const c = sum - a - b;
      if (c > b && c <= maxFactor && a * a + b * b === c * c) {
        result.push([a, b, c]);
      }
    }
  }

  return result;
}
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
