//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.validateTriangle();
  }

  validateTriangle() {
    if (this.sides.length !== 3) {
      throw new Error('Triangle must have exactly 3 sides');
    }
    if (this.sides.some(side => side <= 0)) {
      throw new Error('Triangle sides must be greater than 0');
    }
    const [a, b, c] = this.sides;
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Triangle inequality violated');
    }
  }

  get isEquilateral() {
    const [a, b, c] = this.sides;
    return a === b && b === c;
  }

  get isIsosceles() {
    const [a, b, c] = this.sides;
    return a === b || a === c || b === c;
  }

  get isScalene() {
    const [a, b, c] = this.sides;
    return a !== b && a !== c && b !== c;
  }
}
