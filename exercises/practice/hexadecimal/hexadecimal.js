//
// This is only a SKELETON file for the 'Hexadecimal' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toDecimal = (hexString) => {
  if (!hexString.match(/^[0-9a-fA-F]+$/)) {
    return 0;
  }

  let decimalValue = 0;
  for (let i = 0; i < hexString.length; i++) {
    const digitValue = parseInt(hexString[i], 16);
    decimalValue = decimalValue * 16 + digitValue;
  }

  return decimalValue;
};
