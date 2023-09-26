//
// This is only a SKELETON file for the 'Hexadecimal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toDecimal = (hexString) => {
  if (!/^[\da-fA-F]+$/.test(hexString)) {
    return 0;
  }

  let decimal = 0;
  for (let i = 0; i < hexString.length; i++) {
    decimal *= 16;
    const char = hexString[i].toLowerCase();
    decimal += char >= 'a' ? 10 + char.charCodeAt(0) - 'a'.charCodeAt(0) : parseInt(char, 10);
  }

  return decimal;
};
