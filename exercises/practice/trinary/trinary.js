//
// This is only a SKELETON file for the 'Trinary' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Trinary {
  constructor(trinaryString) {
    this.trinaryString = trinaryString;
  }

  toDecimal() {
    if (!/^[0-2]+$/.test(this.trinaryString)) {
      return 0;
    }

    return this.trinaryString.split('').reverse().reduce((decimal, digit, index) => {
      return decimal + parseInt(digit, 10) * Math.pow(3, index);
    }, 0);
  }
}
