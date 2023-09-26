//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (inputDigits, inputBase, outputBase) => {
  if (inputBase < 2 || !Number.isInteger(inputBase)) {
    throw new Error('Wrong input base');
  }

  if (outputBase < 2 || !Number.isInteger(outputBase)) {
    throw new Error('Wrong output base');
  }

  if (inputDigits.length === 0 || (inputDigits.length > 1 && inputDigits[0] === 0)) {
    throw new Error('Input has wrong format');
  }

  const base10Number = inputDigits.reduce((acc, digit) => {
    if (digit < 0 || digit >= inputBase) {
      throw new Error('Input has wrong format');
    }
    return acc * inputBase + digit;
  }, 0);

  if (base10Number === 0) {
    return [0];
  }

  const convertedNumber = [];
  let currentNumber = base10Number;

  while (currentNumber > 0) {
    convertedNumber.unshift(currentNumber % outputBase);
    currentNumber = Math.floor(currentNumber / outputBase);
  }

  return convertedNumber;
};
