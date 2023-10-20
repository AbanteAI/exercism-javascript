//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {
  if (!/^\d*$/.test(input)) {
    throw new Error('Invalid input.');
  }

  if (span < 0 || span > input.length) {
    throw new Error('Invalid span.');
  }

  let maxProduct = 0;

  for (let i = 0; i <= input.length - span; i++) {
    const series = input.slice(i, i + span);
    const product = series.split('').reduce((acc, num) => acc * parseInt(num, 10), 1);

    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
};
