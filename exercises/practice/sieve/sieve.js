//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (limit) => {
  const numbers = Array.from({ length: limit - 1 }, (_, i) => i + 2);
  const primes = [];

  while (numbers.length > 0) {
    const prime = numbers.shift();
    primes.push(prime);
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % prime === 0) {
        numbers.splice(i, 1);
        i--;
      }
    }
  }

  return primes;
};
