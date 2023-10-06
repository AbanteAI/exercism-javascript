//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
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

  if (!colorMap.hasOwnProperty(color.toLowerCase())) {
    throw new Error('Invalid color');
  }

  return colorMap[color];
};

export const COLORS = Object.keys(colorMap);

export const COLORS = undefined;
