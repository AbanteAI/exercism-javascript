//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (limit) => {
  if (limit < 2) {
    return [];
  }

  const primes = [];
  const isComposite = new Array(limit + 1).fill(false);

  for (let num = 2; num <= limit; num++) {
    if (!isComposite[num]) {
      primes.push(num);
      for (let multiple = num * num; multiple <= limit; multiple += num) {
        isComposite[multiple] = true;
      }
    }
  }

  return primes;
};
