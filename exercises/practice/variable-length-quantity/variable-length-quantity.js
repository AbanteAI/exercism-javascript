//
// This is only a SKELETON file for the 'Variable Length Quantity' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (numbers) => {
  const result = [];
  for (const number of numbers) {
    let remaining = number;
    const bytes = [];
    do {
      let byte = remaining & 0x7F;
      remaining >>>= 7;
      if (remaining > 0) {
        byte |= 0x80;
      }
      bytes.unshift(byte);
    } while (remaining > 0);
    result.push(...bytes);
  }
  return result;
};

export const decode = (bytes) => {
  const result = [];
  let value = 0;
  for (const byte of bytes) {
    value = (value << 7) | (byte & 0x7F);
    if ((byte & 0x80) === 0) {
      result.push(value);
      value = 0;
    }
  }
  if ((bytes[bytes.length - 1] & 0x80) !== 0) {
    throw new Error('Incomplete sequence');
  }
  return result;
};
