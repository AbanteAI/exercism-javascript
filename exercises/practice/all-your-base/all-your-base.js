//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (digits, sourceBase, targetBase) => {
  if (sourceBase <= 1 || targetBase <= 1) {
    throw new Error('Wrong base');
  }
  if (digits.length === 0 || (digits.length > 1 && digits[0] === 0) || digits.some(d => d < 0 || d >= sourceBase)) {
    throw new Error('Input has wrong format');
  }

  // Convert from source base to integer
  const number = digits.reduce((acc, digit) => acc * sourceBase + digit, 0);

  // Special case for number = 0
  if (number === 0) {
    return [0];
  }

  // Convert from integer to target base
  let result = [];
  let quotient = number;
  while (quotient > 0) {
    result.unshift(quotient % targetBase);
    quotient = Math.floor(quotient / targetBase);
  }

  return result;
};
