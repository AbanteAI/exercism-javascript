//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (n) => {
  if (n <= 0) {
    throw new Error('Invalid input. n must be a positive integer');
  }

  let primes = [];
  let currentNumber = 2;

  while (primes.length < n) {
    if (isPrime(currentNumber)) {
      primes.push(currentNumber);
    }
    currentNumber++;
  }

  return primes[n - 1];
};

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
