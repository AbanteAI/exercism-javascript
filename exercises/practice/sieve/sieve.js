//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (limit) => {
  if (limit < 2) {
    return [];
  }

  const numbers = new Array(limit + 1).fill(true);
  numbers[0] = false;
  numbers[1] = false;

  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (numbers[i]) {
      for (let j = i * i; j <= limit; j += i) {
        numbers[j] = false;
      }
    }
  }

  return numbers.reduce((primes, isPrime, number) => {
    if (isPrime) {
      primes.push(number);
    }
    return primes;
  }, []);
};
