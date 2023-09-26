//
// This is only a SKELETON file for the 'Trinary' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Trinary {
  constructor(trinaryNumber) {
    this.trinaryNumber = trinaryNumber;
  }

  toDecimal() {
    if (!/^[0-2]+$/.test(this.trinaryNumber)) {
      return 0;
    }

    let decimalValue = 0;
    let length = this.trinaryNumber.length;

    for (let i = 0; i < length; i++) {
      decimalValue += parseInt(this.trinaryNumber[length - i - 1]) * Math.pow(3, i);
    }

    return decimalValue;
  }
}
}
