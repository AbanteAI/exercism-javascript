//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (number) => {
  // Check if the number is less than 2
  if (number < 2) {
    return [];
  }

  const factors = [];
  let divisor = 2;

  // Divide the number by the smallest prime factor (2) until it is no longer divisible
  while (number > 1) {
    if (number % divisor === 0) {
      factors.push(divisor);
      number /= divisor;
    } else {
      divisor++;
    }
  }

  return factors;
};
