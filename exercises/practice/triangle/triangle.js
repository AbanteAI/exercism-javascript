//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    return this.sides.every(side => side > 0) && this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2];
  }

  get isIsosceles() {
    const [a, b, c] = this.sides;
    return (a + b >= c && a + c >= b && b + c >= a) && (a === b || b === c || a === c);
  }

  get isScalene() {
    const [a, b, c] = this.sides;
    return (a + b >= c && a + c >= b && b + c >= a) && !this.isEquilateral && !this.isIsosceles;
  }
}
