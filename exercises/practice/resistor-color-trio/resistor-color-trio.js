//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ResistorColorTrio {
  constructor(colors) {
    this.colors = colors;
  }
  }

  label() {
    const colorValues = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9,
    };

    const mainValue = colorValues[this.colors[0]] * 10 + colorValues[this.colors[1]];
    const zeros = "0".repeat(colorValues[this.colors[2]]);
    let label = `${mainValue} ${zeros}ohms`;

    if (mainValue >= 1000) {
      label = `${mainValue / 1000} kiloohms`;
    }

    return label;
  }
    const colorValues = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9,
    };

    const mainValue = colorValues[this.colors[0]] * 10 + colorValues[this.colors[1]];
    const zeros = "0".repeat(colorValues[this.colors[2]]);
    let label = `${mainValue} ${zeros}ohms`;

    if (mainValue >= 1000) {
      label = `${mainValue / 1000} kiloohms`;
    }

    return label;
  }
  }
}
