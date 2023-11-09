//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorCodes = {
  "black": 0,
  "brown": 1,
;
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
    this.colors = colors;
    this.value = (colorCodes[colors[0]] * 10 + colorCodes[colors[1]]) * Math.pow(10, colorCodes[colors[2]]);
  }
  }

  label() {
    if (this.value >= 1000) {
      return `${this.value / 1000} kiloohms`;
    } else {
      return `${this.value} ohms`;
    }
  }
  }
}
