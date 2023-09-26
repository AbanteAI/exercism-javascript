//
// This is only a SKELETON file for the 'Binary' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Binary {
  }

    if (!/^[01]+$/.test(this.binaryString)) {
      return 0;
    }

    let decimal = 0;
    const binaryDigits = this.binaryString.split("").reverse();
    for (let i = 0; i < binaryDigits.length; i++) {
      decimal += parseInt(binaryDigits[i]) * Math.pow(2, i);
    }

    return decimal;
      return 0;
    }

    let decimal = 0;
    const binaryDigits = this.binaryString.split("").reverse();
    for (let i = 0; i < binaryDigits.length; i++) {
      decimal += parseInt(binaryDigits[i]) * Math.pow(2, i);
    }

    return decimal;
  }
}
}
