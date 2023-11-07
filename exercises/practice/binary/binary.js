//
// This is only a SKELETON file for the 'Binary' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Binary {
  constructor(binaryString) {
    this.binaryString = binaryString;
  }

  toDecimal() {
    if (!/^[01]+$/.test(this.binaryString)) {
      return 0;
    }

    return this.binaryString.split('').reverse().reduce((acc, digit, index) => {
      return acc + Number(digit) * Math.pow(2, index);
    }, 0);
  }
}
