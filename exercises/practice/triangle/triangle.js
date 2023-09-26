//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
constructor(...sides) {
    this.sides = sides;
    if (this.sides.some(side => side <= 0)) {
        throw new Error('Invalid triangle sides');
    }
    const [a, b, c] = this.sides;
    if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error('Invalid triangle sides');
    }
}
  }

  get isEquilateral() {
get isEquilateral() {
    const [a, b, c] = this.sides;
    return a === b && b === c;
}
    return a === b && b === c;
}

  get isIsosceles() {
get isIsosceles() {
    const [a, b, c] = this.sides;
    return a === b || a === c || b === c;
}
    return a === b || a === c || b === c;
}

  get isScalene() {
get isScalene() {
    const [a, b, c] = this.sides;
    return a !== b && a !== c && b !== c;
}
    return a !== b && a !== c && b !== c;
}
}
