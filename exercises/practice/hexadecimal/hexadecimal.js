//
// This is only a SKELETON file for the 'Hexadecimal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toDecimal = (hexString) => {
  if (!/^[\da-fA-F]+$/.test(hexString)) {
    return null;
  }

  let decimalValue = 0;
  for (let i = 0; i < hexString.length; i++) {
    decimalValue = decimalValue * 16 + parseInt(hexString[i], 16);
  }

  return decimalValue;
};
