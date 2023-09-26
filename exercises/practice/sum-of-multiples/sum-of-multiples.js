//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (level, baseValues) => {
  const multiples = new Set();
  
  for (let baseValue of baseValues) {
    for (let i = baseValue; i < level; i += baseValue) {
      multiples.add(i);
    }
  }
  
  let sum = 0;
  for (let multiple of multiples) {
    sum += multiple;
  }
  
  return sum;
};
  for (let baseValue of baseValues) {
    for (let i = baseValue; i < level; i += baseValue) {
      multiples.add(i);
    }
  }
  
  let sum = 0;
  for (let multiple of multiples) {
    sum += multiple;
  }
  
  return sum;
};
