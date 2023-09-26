//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (digits, fromBase, toBase) => {
  if (fromBase <= 1 || !Number.isInteger(fromBase)) {
    throw new Error('Wrong input base');
  }

  if (toBase <= 1 || !Number.isInteger(toBase)) {
    throw new Error('Wrong output base');
  }

  if (digits.length === 0 || (digits.length > 1 && digits[0] === 0)) {
    throw new Error('Input has wrong format');
  }

  let decimalValue = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] < 0 || digits[i] >= fromBase) {
      throw new Error('Input has wrong format');
    }
    decimalValue = decimalValue * fromBase + digits[i];
  }

  const result = [];
  while (decimalValue > 0) {
    result.unshift(decimalValue % toBase);
    decimalValue = Math.floor(decimalValue / toBase);
  }

  return result;
};
