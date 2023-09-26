//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (limit) => {
  const sieve = new Array(limit + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;
  
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }
  
  const primeNumbers = [];
  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      primeNumbers.push(i);
    }
  }
  
  return primeNumbers;
};
