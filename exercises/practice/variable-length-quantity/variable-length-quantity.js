//
// This is only a SKELETON file for the 'Variable Length Quantity' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (numbers) => {
  const encoded = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let bytes = [];
    while (number > 0) {
      bytes.unshift(number & 0x7f);
      number >>= 7;
    }
    if (bytes.length === 0) {
      encoded.push(0);
    } else {
      for (let j = 0; j < bytes.length - 1; j++) {
        bytes[j] |= 0x80;
      }
      encoded.push(...bytes);
    }
  }
  return encoded;
};

export const decode = (bytes) => {
  const decoded = [];
  let number = 0;
  for (let i = 0; i < bytes.length; i++) {
    number = (number << 7) | (bytes[i] & 0x7f);
    if ((bytes[i] & 0x80) === 0) {
      decoded.push(number);
      number = 0;
    }
  }
  if (number !== 0) {
    throw new Error('Invalid variable length quantity');
  }
  return decoded;
};

export const decode = () => {
  throw new Error('Remove this statement and implement this function');
};
