//
// This is only a SKELETON file for the 'Variable Length Quantity' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (numbers) => {
  const result = [];
  for (let number of numbers) {
    let bytes = [];
    while (number > 0) {
      bytes.unshift(number & 0x7f);
      number >>= 7;
    }
    bytes[bytes.length - 1] |= 0x80;
    result.push(...bytes);
  }
  return result;
};

export const decode = (bytes) => {
  const result = [];
  let number = 0;
  for (let byte of bytes) {
    number = (number << 7) | (byte & 0x7f);
    if ((byte & 0x80) === 0) {
      result.push(number);
      number = 0;
    }
  }
  if (number !== 0) {
    throw new Error('Incomplete sequence');
  }
  return result;
};

export const decode = () => {
  throw new Error('Remove this statement and implement this function');
};
