//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (number) => {
  const factors = [];
  for (let divisor = 2; number > 1; divisor++) {
    for (; number % divisor === 0; number /= divisor) {
      factors.push(divisor);
    }
  }
  return factors;
};
