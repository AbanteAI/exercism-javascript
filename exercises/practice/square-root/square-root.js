//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (n) => {
  if (n < 0) {
    throw new Error('Square root of negative numbers is not supported');
  }

  if (n === 0) {
    return 0;
  }

  let x = n;
  let y = 1;

  while (x > y) {
    x = (x + y) / 2;
    y = n / x;
  }

  return Math.floor(x);
};
