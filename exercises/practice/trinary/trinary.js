//
// This is only a SKELETON file for the 'Trinary' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Trinary {
constructor(trinaryString) {
    this.trinaryString = trinaryString;
}

toDecimal() {
    if (!/^[0-2]+$/.test(this.trinaryString)) {
        return 0;
    }

    let decimalValue = 0;
    for (let i = 0; i < this.trinaryString.length; i++) {
        decimalValue += parseInt(this.trinaryString[i]) * Math.pow(3, this.trinaryString.length - 1 - i);
    }

    return decimalValue;
}

toDecimal() {
    if (!/^[0-2]+$/.test(this.trinaryString)) {
        return 0;
    }

    let decimalValue = 0;
    for (let i = 0; i < this.trinaryString.length; i++) {
        decimalValue += parseInt(this.trinaryString[i]) * Math.pow(3, this.trinaryString.length - 1 - i);
    }

    return decimalValue;
}
  }
}
