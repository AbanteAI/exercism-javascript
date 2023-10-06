//
// This is only a SKELETON file for the 'Trinary' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Trinary {
  constructor(trinaryString) {
    this.trinaryString = trinaryString;
  }

  toDecimal() {
    const trinaryDigits = this.trinaryString.split("").map(Number);
    if (trinaryDigits.some(digit => digit < 0 || digit > 2)) {
      return 0;
    }
    return trinaryDigits.reduce((decimal, digit) => decimal * 3 + digit, 0);
  }
}
