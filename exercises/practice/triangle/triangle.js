//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
    constructor(...sides) {
      this.sides = sides.sort((a, b) => a - b);
      const [a, b, c] = this.sides;
      if (a <= 0 || a + b <= c) {
        throw new Error('Invalid triangle');
      }
;
    }
  }

    get isEquilateral() {
      const [a, b, c] = this.sides;
      return a === b && b === c;
    }
;
  }

    get isIsosceles() {
      const [a, b, c] = this.sides;
      return a === b || b === c || a === c;
    }
;
  }

    get isScalene() {
      const [a, b, c] = this.sides;
      return a !== b && b !== c && a !== c;
    }
;
  }
}
