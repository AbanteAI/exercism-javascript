//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor = 1, maxFactor, sum }) {
  if (!maxFactor) {
    maxFactor = Math.floor(sum / 2);
  }
  const results = [];

  for (let a = minFactor; a <= maxFactor; a++) {
    for (let b = a + 1; b <= maxFactor; b++) {
      const c = sum - a - b;
      if (c > b && a * a + b * b === c * c && Number.isInteger(c)) {
        results.push(new Triplet(a, b, c));
      }
    }
  }

  return results.map(triplet => triplet.toArray());
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
