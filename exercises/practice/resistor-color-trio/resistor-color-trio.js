//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ResistorColorTrio {
  constructor(colors) {
    this.colors = colors;
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

    const value = colorValues[this.colors[0]] * 10 + colorValues[this.colors[1]];
    const zeros = "0".repeat(colorValues[this.colors[2]]);
    const labelValue = value + zeros;

    if (labelValue >= 1000) {
      return `Resistor value: ${labelValue / 1000} kiloohms`;
    } else {
      return `Resistor value: ${labelValue} ohms`;
    }
  }
}
