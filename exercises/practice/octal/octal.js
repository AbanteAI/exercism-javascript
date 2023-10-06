//
// This is only a SKELETON file for the 'Octal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    if (!/^[0-7]+$/.test(this.octal)) {
      return 0;
    }

    let decimal = 0;
    for (let i = 0; i < this.octal.length; i++) {
      decimal += parseInt(this.octal[i]) * Math.pow(8, this.octal.length - i - 1);
    }
    return decimal;
  }
}
