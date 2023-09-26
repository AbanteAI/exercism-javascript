//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {
  if (span === 0) {
    return 1;
  }

  if (span > input.length) {
    throw new Error('Span must be smaller than or equal to the length of the input');
  }

  const digits = input.split('').map(Number);
  let largestProduct = 0;

  for (let i = 0; i <= digits.length - span; i++) {
    const series = digits.slice(i, i + span);
    const product = series.reduce((acc, curr) => acc * curr, 1);

    if (product > largestProduct) {
      largestProduct = product;
    }
  }

  return largestProduct;
};
