//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (digits, fromBase, toBase) => {
  let decimal = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    decimal += digits[i] * Math.pow(fromBase, digits.length - 1 - i);
  }

  const convertedDigits = [];
  while (decimal > 0) {
    convertedDigits.unshift(decimal % toBase);
    decimal = Math.floor(decimal / toBase);
  }

  return convertedDigits.length === 0 ? [0] : convertedDigits;
};
