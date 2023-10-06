//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (digits, inputBase, outputBase) => {
  if (inputBase <= 1 || !Number.isInteger(inputBase)) {
    throw new Error('Wrong input base');
  }

  if (outputBase <= 1 || !Number.isInteger(outputBase)) {
    throw new Error('Wrong output base');
  }

  if (digits.length === 0) {
    return [];
  }

  if (digits.length === 1 && digits[0] === 0) {
    return [0];
  }

  const decimalValue = digits.reduce((acc, digit) => {
    if (digit < 0 || digit >= inputBase || !Number.isInteger(digit)) {
      throw new Error('Input has wrong format');
    }
    return acc * inputBase + digit;
  }, 0);

  const result = [];
  let value = decimalValue;

  while (value > 0) {
    result.unshift(value % outputBase);
    value = Math.floor(value / outputBase);
  }

  return result;
};
