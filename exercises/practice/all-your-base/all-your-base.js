//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (digits, inputBase, outputBase) => {
  if (inputBase < 2 || outputBase < 2) {
    throw new Error("Input and output base must be greater than 1");
  }
  if (digits.some(d => d < 0 || d >= inputBase)) {
    throw new Error("Digits must be within input base range");
  }

  let decimalNumber = 0;
  for (let i = 0; i < digits.length; i++) {
    decimalNumber = decimalNumber * inputBase + digits[i];
  }

  if (decimalNumber === 0) {
    return [0];
  }

  const outputDigits = [];
  while (decimalNumber > 0) {
    outputDigits.unshift(decimalNumber % outputBase);
    decimalNumber = Math.floor(decimalNumber / outputBase);
  }

  return outputDigits;
};
