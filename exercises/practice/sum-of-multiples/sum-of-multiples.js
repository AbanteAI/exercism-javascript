//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (level, baseValues) => {
  const multiples = new Set();
  if (!Array.isArray(baseValues)) {
    baseValues = [baseValues];
  }
  baseValues.forEach(baseValue => {
    for (let i = baseValue; i < level; i += baseValue) {
      multiples.add(i);
    }
  });
  return Array.from(multiples).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
};
