//
// This is only a SKELETON file for the 'Octal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Octal {
  }

  toDecimal() {
    if (this.input.match(/[^0-7]/)) {
      return 0;
    }

    let decimal = 0;
    const octalDigits = this.input.split("").reverse();

    for (let i = 0; i < octalDigits.length; i++) {
      decimal += parseInt(octalDigits[i]) * Math.pow(8, i);
    }

    return decimal;
  }
  }
}
