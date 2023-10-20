//
// This is only a SKELETON file for the 'Variable Length Quantity' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (numbers) => {
  const result = [];
  for (const number of numbers) {
    let value = number;
    const bytes = [];
    do {
      let byte = value & 0x7F;
      value >>= 7;
      if (bytes.length) {
        byte |= 0x80;
      }
      bytes.unshift(byte);
    } while (value);
    result.push(...bytes);
  }
  return result;
};

export const decode = (bytes) => {
  const result = [];
  let value = 0;
  for (const byte of bytes) {
    value = (value << 7) | (byte & 0x7F);
    if (!(byte & 0x80)) {
      result.push(value);
      value = 0;
    }
  }
  if (value) {
    throw new Error('Incomplete sequence');
  }
  return result;
};
