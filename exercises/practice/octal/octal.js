//
// This is only a SKELETON file for the 'Octal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Octal {
  constructor(octalString) {
    this.octalString = octalString;
  };
  }
  }
  toDecimal() {
    if (this.octalString.match(/[^0-7]/)) {
      return 0;
    }

    let decimal = 0;
    for (let i = 0; i < this.octalString.length; i++) {
      decimal += parseInt(this.octalString[i], 10) * Math.pow(8, this.octalString.length - i - 1);
    }

    return decimal;
  };
  }
  }
}
