//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function squareRoot(radicand) {
  if (radicand < 0) {
    throw new Error('Radicand must be a positive number');
  }

  let guess = radicand / 2;
  let prevGuess = 0;

  while (Math.abs(guess * guess - radicand) > 0.0001) {
    prevGuess = guess;
    guess = (guess + radicand / guess) / 2;
  }

  return Number(guess.toFixed(5));
}
module.exports = squareRoot;

