//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {
  if (input.match(/[^\d]/) || span < 0) {
    throw new Error('Invalid input.');
  }

  if (span === 0) {
    return 1;
  }

  let maxProduct = 0;

  for (let i = 0; i <= input.length - span; i++) {
    const series = input.slice(i, i + span);
    const product = series.split('').reduce((acc, cur) => acc * Number(cur), 1);
    maxProduct = Math.max(maxProduct, product);
  }

  return maxProduct;
};
