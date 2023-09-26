//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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

export const prime = (n) => {
  if (n <= 0) {
    throw new Error('Invalid input. n must be a positive integer.');
  }

  let count = 0;
  let currentNum = 2;

  while (count < n) {
    if (isPrime(currentNum)) {
      count++;
    }

    if (count === n) {
      return currentNum;
    }

    currentNum++;
  }
};
