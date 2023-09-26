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
    let power = this.binaryString.length - 1;

    for (let digit of this.binaryString) {
      decimal += parseInt(digit) * Math.pow(2, power);
      power--;
    }

    return decimal;
  }
}

    let decimal = 0;
    let power = this.binaryString.length - 1;

    for (let digit of this.binaryString) {
      decimal += parseInt(digit) * Math.pow(2, power);
      power--;
    }

    return decimal;
  }
}
}
