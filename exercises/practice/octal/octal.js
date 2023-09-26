//
// This is only a SKELETON file for the 'Octal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Octal {
  constructor(octalNumber) {
    this.octalNumber = octalNumber;
  }

  toDecimal() {
    if (!/^[0-7]+$/.test(this.octalNumber)) {
      return 0;
    }

    let decimal = 0;
    const digits = this.octalNumber.split('').reverse();

    for (let i = 0; i < digits.length; i++) {
      decimal += parseInt(digits[i]) * Math.pow(8, i);
    }

    return decimal;
  }
}
