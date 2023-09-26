//
// This is only a SKELETON file for the 'Trinary' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Trinary {
  constructor(trinaryString) {
    this.trinaryString = trinaryString;
  }
  }
  }
  toDecimal() {
    if (!/^[0-2]+$/.test(this.trinaryString)) {
      return 0;
    }

    let decimalValue = 0;
    const reversedTrinaryString = this.trinaryString.split('').reverse().join('');
    for (let i = 0; i < reversedTrinaryString.length; i++) {
      decimalValue += parseInt(reversedTrinaryString[i]) * Math.pow(3, i);
    }

    return decimalValue;
  }
}
