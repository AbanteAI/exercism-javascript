//
// This is only a SKELETON file for the 'Binary' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Binary {
  constructor(binary) {
    this.binary = binary;
  }

  toDecimal() {
    if (!/^[01]+$/.test(this.binary)) {
      return 0;
    }

    let decimal = 0;
    for (let i = 0; i < this.binary.length; i++) {
      decimal += parseInt(this.binary[i]) * Math.pow(2, this.binary.length - 1 - i);
    }
    return decimal;
  }

  }
}

}
