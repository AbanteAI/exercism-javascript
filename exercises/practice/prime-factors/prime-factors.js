//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  let factors = [];
  let divisor = 2;

  while (num > 1) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }

  return factors;
};
