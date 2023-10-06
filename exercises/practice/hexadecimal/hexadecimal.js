//
// This is only a SKELETON file for the 'Hexadecimal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toDecimal = (hexadecimal) => {
  if (!/^[0-9a-fA-F]+$/.test(hexadecimal)) {
    throw new Error('Invalid hexadecimal string');
  }

  let decimal = 0;
  for (let i = 0; i < hexadecimal.length; i++) {
    const digit = parseInt(hexadecimal[i], 16);
    decimal = decimal * 16 + digit;
  }

  return decimal;
};
