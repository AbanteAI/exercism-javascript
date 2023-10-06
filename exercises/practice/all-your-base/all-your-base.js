//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (inputBase, inputDigits, outputBase) => {
  if (inputBase <= 1 || !Number.isInteger(inputBase)) {
    throw new Error('Wrong input base');
  }
  if (outputBase <= 1 || !Number.isInteger(outputBase)) {
    throw new Error('Wrong output base');
  }
  if (inputDigits.length === 0 || (inputDigits.length > 1 && inputDigits[0] === 0)) {
    throw new Error('Input has wrong format');
  }

  const decimalValue = inputDigits.reduce((acc, digit) => {
    const digitNumber = Number(digit);
    if (digitNumber < 0 || digitNumber >= inputBase || !Number.isInteger(digitNumber)) {
      throw new Error('Input has wrong format');
    }
    return acc * inputBase + digitNumber;
  }, 0);
    return acc * inputBase + digit;
  }, 0);

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
