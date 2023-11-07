//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorMap = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};

export class ResistorColorTrio {
  constructor(colors) {
    if (colors.length !== 3) {
      throw new Error('Invalid number of colors');
    }

    this.colors = colors.map(color => {
      if (!colorMap.hasOwnProperty(color)) {
        throw new Error('Invalid color');
      }
      return colorMap[color];
    });
  }

  label() {
    const value = (this.colors[0] * 10 + this.colors[1]) * Math.pow(10, this.colors[2]);
    const unit = value >= 1000 ? 'kiloohms' : 'ohms';
    const resistance = value >= 1000 ? value / 1000 : value;
    return `${resistance} ${unit}`;
  }
}
