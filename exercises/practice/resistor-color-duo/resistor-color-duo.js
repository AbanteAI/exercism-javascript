//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
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

  const firstColor = colors[0].toLowerCase();
  const secondColor = colors[1].toLowerCase();

  const value = colorValues[firstColor] * 10 + colorValues[secondColor];
  return value;
};
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

  const firstColor = colors[0].toLowerCase();
  const secondColor = colors[1].toLowerCase();

  const value = colorValues[firstColor] * 10 + colorValues[secondColor];
  return value;
};
};
