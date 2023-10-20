//
// This is only a SKELETON file for the 'Binary' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Binary {
  constructor(binaryString) {
    this.binaryString = binaryString;
  }
  }

  toDecimal() {
    if (!/^[01]+$/.test(this.binaryString)) {
      return 0;
    }

    let decimal = 0;
    for (let i = 0; i < this.binaryString.length; i++) {
      decimal = decimal * 2 + parseInt(this.binaryString[i], 10);
    }
    return decimal;
  }
  }
}
