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

    let decimal = 0;
    for (let i = this.binaryString.length - 1, power = 0; i >= 0; i--, power++) {
      decimal += parseInt(this.binaryString[i]) * Math.pow(2, power);
    }
    return decimal;
  }

}
