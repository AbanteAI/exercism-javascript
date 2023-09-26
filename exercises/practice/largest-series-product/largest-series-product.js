//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {
  if (span < 0) {
    throw new Error('Span must be greater than or equal to zero');
  }

  if (span === 0) {
    return 1;
  }

  if (span > input.length) {
    throw new Error('Span cannot be greater than the input length');
  }

  let largestProduct = 0;

  for (let i = 0; i <= input.length - span; i++) {
    let product = 1;
    for (let j = 0; j < span; j++) {
      product *= parseInt(input[i + j]);
    }
    largestProduct = Math.max(largestProduct, product);
  }

  return largestProduct;
};
