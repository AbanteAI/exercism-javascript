//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (digits, span) => {
  if (span < 0) {
    throw new Error('Span must be a positive integer');
  }
  if (span > digits.length) {
    throw new Error('Span cannot be greater than the number of digits');
  }
  let maxProduct = 0;
  for (let i = 0; i <= digits.length - span; i++) {
    let product = 1;
    for (let j = i; j < i + span; j++) {
      product *= parseInt(digits[j]);
    }
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
};
