//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  const factors = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }

  const sum = factors.reduce((acc, curr) => acc + curr, 0);

  if (sum === number) {
    return 'perfect';
  } else if (sum > number) {
    return 'abundant';
  } else {
    return 'deficient';
  }
};
