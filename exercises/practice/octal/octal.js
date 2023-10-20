//
// This is only a SKELETON file for the 'Octal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Octal {
class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    if (!/^[0-7]+$/.test(this.octal)) {
      return 0;
    }

    let decimal = 0;
    for (let i = this.octal.length - 1; i >= 0; i--) {
      decimal += parseInt(this.octal[i]) * Math.pow(8, this.octal.length - 1 - i);
    }
    return decimal;
  }
}

export { Octal };
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    if (!/^[0-7]+$/.test(this.octal)) {
      return 0;
    }

    let decimal = 0;
    for (let i = this.octal.length - 1; i >= 0; i--) {
      decimal += parseInt(this.octal[i]) * Math.pow(8, this.octal.length - 1 - i);
    }
    return decimal;
  }
}
}
