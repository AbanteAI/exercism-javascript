//
// This is only a SKELETON file for the 'Trinary' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Trinary {
  constructor(trinary) {
    this.trinary = trinary;
  }

  toDecimal() {
    if (!/^[0-2]+$/.test(this.trinary)) {
      return 0;
    }
    let decimal = 0;
    for (let i = 0; i < this.trinary.length; i++) {
      decimal += parseInt(this.trinary[i]) * Math.pow(3, this.trinary.length - 1 - i);
    }
    return decimal;
  }
}
