//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {
  if (span < 0 || span > input.length) {
    throw new Error('Span must be greater than or equal to zero and less than or equal to the length of the input.');
  }

  if (span === 0) return 1;

  if (!input.match(/^\d*$/)) {
    throw new Error('Input must only contain digits.');
  }

  let maxProduct = 0;

  for (let i = 0; i <= input.length - span; i++) {
    const series = input.substring(i, i + span).split('').map(Number);
    const product = series.reduce((acc, val) => acc * val, 1);
    maxProduct = Math.max(maxProduct, product);
  }

  return maxProduct;
};
