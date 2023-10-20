//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (inputDigits, inputBase, outputBase) => {
  if (inputBase <= 1 || outputBase <= 1) {
    throw new Error('Input and output base must be greater than 1');
  }

  if (inputDigits.length === 0 || (inputDigits.length > 1 && inputDigits[0] === 0)) {
    throw new Error('Input has wrong format');
  }

  let decimalValue = 0;
  for (let i = 0; i < inputDigits.length; i++) {
    if (inputDigits[i] < 0 || inputDigits[i] >= inputBase) {
      throw new Error('Input contains invalid digits for the input base');
    }
    decimalValue = decimalValue * inputBase + inputDigits[i];
  }

  if (decimalValue === 0) {
    return [0];
  }

  const outputDigits = [];
  while (decimalValue > 0) {
    outputDigits.unshift(decimalValue % outputBase);
    decimalValue = Math.floor(decimalValue / outputBase);
  }

  return outputDigits;
};
