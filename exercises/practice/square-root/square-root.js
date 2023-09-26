//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (radicand) => {
  if (radicand < 0) {
    throw new Error('Square root of negative numbers is not supported');
  }
  if (radicand === 0 || radicand === 1) {
    return radicand;
  }

  let x = radicand;
  let y = (x + 1) / 2;

  while (y < x) {
    x = y;
    y = (x + radicand / x) / 2;
  }

  return x;
};
