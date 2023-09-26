//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (radicand) => {
  if (radicand < 0) {
    throw new Error('Radicand must be a positive number');
  }

  let guess = radicand / 2;
  let precision = 0.000001;

  while (Math.abs(guess * guess - radicand) > precision) {
    guess = (guess + radicand / guess) / 2;
  }

  return guess;
};
};
