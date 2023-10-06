//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {
  if (span < 0) {
    throw new Error('Span must be greater than or equal to 0');
  }
  if (!/^\d*$/.test(input)) {
    throw new Error('Digits input must only contain digits');
  }
  if (span > input.length) {
    throw new Error('Span must be smaller or equal to input length');
  }

  let maxProduct = 0;
  for (let i = 0; i <= input.length - span; i++) {
    const series = input.slice(i, i + span);
    const product = series.split('').reduce((acc, digit) => acc * Number(digit), 1);
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
};

