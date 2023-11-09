//
// This is only a SKELETON file for the 'Trinary' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Trinary {
  constructor(trinaryString) {
    this.trinaryString = trinaryString;
  }
  }

  toDecimal() {
    if (!/^[012]+$/.test(this.trinaryString)) {
      return 0;
    }

    let decimalValue = 0;
    for (let i = 0; i < this.trinaryString.length; i++) {
      const digit = parseInt(this.trinaryString[i], 10);
      const exponent = this.trinaryString.length - i - 1;
      decimalValue += digit * Math.pow(3, exponent);
    }

    return decimalValue;
  }
  }
}
