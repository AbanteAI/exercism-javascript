//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor, maxFactor, sum }) {
  const triplets = [];

  for (let a = minFactor || 1; a < (maxFactor || sum); a++) {
    for (let b = a + 1; b < (maxFactor || sum); b++) {
      const c = sum - a - b;

      if (c <= b) break;
      if (c * c === a * a + b * b) {
        triplets.push(new Triplet(a, b, c));
      }
    }
  }

  return triplets;
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
}
