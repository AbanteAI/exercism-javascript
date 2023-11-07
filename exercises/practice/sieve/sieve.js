//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (limit) => {
  const sieve = new Array(limit + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve.reduce((primes, isPrime, number) => {
    if (isPrime) primes.push(number);
    return primes;
  }, []);
};
