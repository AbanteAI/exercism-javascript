//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (radicand) => {
  if (radicand < 0) {
    throw new Error("Radicand must be a positive number");
  }

  let guess = radicand;
  let difference = 1;

  while (difference > 1e-15) {
    let newGuess = (guess + radicand / guess) / 2;
    difference = Math.abs(newGuess - guess);
    guess = newGuess;
  }

  return guess;
};
