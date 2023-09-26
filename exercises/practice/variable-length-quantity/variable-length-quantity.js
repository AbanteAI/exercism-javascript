//
// This is only a SKELETON file for the 'Variable Length Quantity' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (number) => {
  let bytes = [];
  while (number > 0) {
    let byte = number & 0x7f;
    number >>= 7;
    if (number > 0) {
      byte |= 0x80;
    }
    bytes.unshift(byte);
  }
  return bytes;
};

export const decode = (bytes) => {
  let number = 0;
  for (let i = 0; i < bytes.length; i++) {
    number <<= 7;
    number |= bytes[i] & 0x7f;
    if ((bytes[i] & 0x80) === 0) {
      break;
    }
  }
  return number;
};