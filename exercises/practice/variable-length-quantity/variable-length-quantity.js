//
// This is only a SKELETON file for the 'Variable Length Quantity' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (numbers) => {
  return numbers.flatMap(number => {
    const bytes = [];
    do {
      let byte = number & 0x7F;
      number >>>= 7;
      if (number !== 0) byte |= 0x80;
      bytes.unshift(byte);
    } while (number !== 0);
    return bytes;
  });
};

export const decode = (bytes) => {
  let value = 0;
  const numbers = [];

  for (const byte of bytes) {
    value = (value << 7) | (byte & 0x7F);
    if ((byte & 0x80) === 0) {
      numbers.push(value);
      value = 0;
    }
  }

  if ((bytes[bytes.length - 1] & 0x80) !== 0) {
    throw new Error('Incomplete sequence');
  }

  return numbers;
};
