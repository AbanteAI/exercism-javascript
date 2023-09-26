//
// This is only a SKELETON file for the 'Octal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Octal {
  constructor(octalString) {
    this.octalString = octalString;
  }
  }

  toDecimal() {
    if (!/^[0-7]+$/.test(this.octalString)) {
      return 0;
    }

    let decimal = 0;
    for (let i = 0; i < this.octalString.length; i++) {
      decimal += parseInt(this.octalString[i], 10) * Math.pow(8, this.octalString.length - 1 - i);
    }

    return decimal;
  }
  }
}
