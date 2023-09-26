//
// This is only a SKELETON file for the 'Hexadecimal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toDecimal = (hexadecimal) => {
  const hexDigits = "0123456789abcdef";
  let decimal = 0;

  if (!/^[0-9a-fA-F]+$/.test(hexadecimal)) {
    return null;
  }

  for (let i = 0; i < hexadecimal.length; i++) {
    const digit = hexDigits.indexOf(hexadecimal[i].toLowerCase());
    decimal = decimal * 16 + digit;
  }

  return decimal;
};
