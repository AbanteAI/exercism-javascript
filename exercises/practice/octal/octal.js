//
// This is only a SKELETON file for the 'Octal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Octal {
  constructor(input) {
    this.input = input;
  }

  toDecimal() {
    if (!/^[0-7]+$/.test(this.input)) {
      return 0;
    }

    let decimal = 0;
    for (let i = 0; i < this.input.length; i++) {
      decimal += parseInt(this.input[i]) * Math.pow(8, this.input.length - i - 1);
    }
    return decimal;
  }
}
  }

  toDecimal() {
    throw new Error('Remove this statement and implement this function');
  }
}
