//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (level, baseValues) => {
  const uniqueMultiples = new Set();

  if (!Array.isArray(baseValues)) {
    baseValues = [baseValues];
  }
  baseValues.forEach((baseValue) => {
    for (let i = baseValue; i < level; i += baseValue) {
      uniqueMultiples.add(i);
    }
  });

  let sum = 0;
  uniqueMultiples.forEach((multiple) => {
    sum += multiple;
  });

  return sum;
};
