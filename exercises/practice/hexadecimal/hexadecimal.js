//
// This is only a SKELETON file for the 'Hexadecimal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toDecimal = (hexadecimal) => {
  const hexDigits = "0123456789abcdef";
  let decimal = 0;

  for (let i = 0; i < hexadecimal.length; i++) {
    const digit = hexDigits.indexOf(hexadecimal[i].toLowerCase());
    if (digit === -1) {
      return 0; // Invalid hexadecimal string, return 0
    }
    decimal = decimal * 16 + digit;
  }

  return decimal;
};
