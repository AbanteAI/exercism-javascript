//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ResistorColorTrio {
  constructor(color1, color2, color3) {
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
  }

  label() {
    const colors = {
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

    const value = (colors[this.color1] * 10 + colors[this.color2]) * Math.pow(10, colors[this.color3]);

    if (value >= 1000) {
      return `${value / 1000} kiloohms`;
    } else {
      return `${value} ohms`;
    }
  }
}
}
