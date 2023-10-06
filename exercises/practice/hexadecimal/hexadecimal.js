//
// This is only a SKELETON file for the 'Hexadecimal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toDecimal = (hex) => {
  if (!/^[0-9a-fA-F]+$/.test(hex)) {
    throw new Error('Invalid hexadecimal string');
  }

  let decimal = 0;
  const hexDigits = '0123456789abcdef';

  for (let i = 0; i < hex.length; i++) {
    const digit = hexDigits.indexOf(hex[i].toLowerCase());
    decimal = decimal * 16 + digit;
  }

  return decimal;
};
