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
    const binaryArray = this.binaryString.split('').reverse();

    for (let i = 0; i < binaryArray.length; i++) {
      decimal += parseInt(binaryArray[i]) * Math.pow(2, i);
    }

    return decimal;
  }
}
}
