//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (limit) => {
  // Create range from 2 to limit
  const range = Array.from({ length: limit - 1 }, (_, i) => i + 2);

  // Mark multiples of primes as composite
  for (let i = 0; i < range.length; i++) {
    const num = range[i];
    if (num !== null) {
      for (let j = i + num; j <= limit; j += num) {
        range[j - 2] = null;
      }
    }
  }

  // Filter out composite numbers and return primes
  return range.filter((num) => num !== null);
};
