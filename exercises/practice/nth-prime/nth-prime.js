//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (n) => {
  if (n <= 0) {
    throw new Error('Invalid input. n must be a positive integer');
  }

  let primes = [];
  let number = 2;

  while (primes.length < n) {
    if (isPrime(number)) {
      primes.push(number);
    }
    number++;
  }

  return primes.pop();
};

const isPrime = (num) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
