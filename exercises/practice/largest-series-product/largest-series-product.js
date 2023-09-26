//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, seriesLength) => {
  if (seriesLength > input.length) {
    throw new Error('Span must be smaller than string length');
  }
  
  let maxProduct = 0;
  for (let i = 0; i <= input.length - seriesLength; i++) {
    const series = input.slice(i, i + seriesLength);
    const product = series.split('').reduce((acc, num) => acc * parseInt(num), 1);
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  
  return maxProduct;
};
