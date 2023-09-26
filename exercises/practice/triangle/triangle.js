//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  get isEquilateral() {
    return this.side1 === this.side2 && this.side2 === this.side3;
  }

  get isIsosceles() {
    return this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3;
  }

  get isScalene() {
    return this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3;
  }
}
