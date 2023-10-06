//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (factors, limit) => {
  const multiples = new Set();
  factors.forEach(factor => {
    for (let i = factor; i < limit; i += factor) {
      multiples.add(i);
    }
  });
  return [...multiples].reduce((sum, num) => sum + num, 0);
};

