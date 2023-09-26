//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {
  if (span < 0) {
    throw new Error("Span must be greater than or equal to zero");
  }

  if (span > input.length) {
    throw new Error("Span must be smaller than or equal to the input length");
  }

  if (!/^\d*$/.test(input)) {
    throw new Error("Input must only contain digits");
  }

  const calculateProduct = (series) => {
    return series.split("").reduce((product, digit) => product * parseInt(digit, 10), 1);
  };

  let largestProduct = 0;

  for (let i = 0; i <= input.length - span; i++) {
    const series = input.slice(i, i + span);
    const product = calculateProduct(series);

    if (product > largestProduct) {
      largestProduct = product;
    }
  }

  return largestProduct;
};
