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

    let decimal = 0;
    for (let i = 0; i < this.trinaryString.length; i++) {
      decimal += parseInt(this.trinaryString[i]) * Math.pow(3, this.trinaryString.length - i - 1);
    }

    return decimal;
  }
}
