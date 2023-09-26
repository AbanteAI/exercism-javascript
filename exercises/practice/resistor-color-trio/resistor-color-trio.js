//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "grey": 8,
  "white": 9
};
export class ResistorColorTrio {
  constructor(colors) {
    this.values = colors.map(color => COLORS[color]);
  }
  }

  label() {
    const value = (this.values[0] * 10 + this.values[1]) * Math.pow(10, this.values[2]);
    if (value >= 1000) {
      return `${value / 1000} kiloohms`;
    }
    return `${value} ohms`;
  }
  }
}
}
