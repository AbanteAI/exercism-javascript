//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ResistorColorTrio {
  constructor(colors) {
    this.colors = colors;
  }

  label() {
    const [firstColor, secondColor, thirdColor] = this.colors;
    const value = (COLORS.indexOf(firstColor) * 10 + COLORS.indexOf(secondColor)) * Math.pow(10, COLORS.indexOf(thirdColor));
    const unit = value >= 1000 ? "kiloohms" : "ohms";
    return `${value} ${unit}`;
  }
}

const COLORS = [
  "black", "brown", "red", "orange", "yellow",
  "green", "blue", "violet", "grey", "white"
];

  label() {
    throw new Error('Remove this statement and implement this function');
  }
}
