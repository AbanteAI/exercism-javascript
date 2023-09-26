//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (radicand) => {
  if (radicand < 0) {
    throw new Error('Radicand must be a non-negative number');
  }

  let guess = radicand;
  let error = 0.0001;

  while (Math.abs(guess * guess - radicand) > error) {
    guess = (guess + radicand / guess) / 2;
  }

  return guess;
};
