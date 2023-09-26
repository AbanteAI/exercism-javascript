//
// This is only a SKELETON file for the 'Variable Length Quantity' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (numbers) => {
  const encodedNumbers = [];

  for (const number of numbers) {
    let bytes = [];
    while (number > 0) {
      let byte = number & 0x7f;
      number >>= 7;
      if (number > 0) {
        byte |= 0x80;
      }
      bytes.unshift(byte);
    }
    encodedNumbers.push(bytes);
  }

  return encodedNumbers.flat();
};

  for (const number of numbers) {
export const decode = (bytes) => {
  const decodedNumbers = [];

  let number = 0;
  for (const byte of bytes) {
    number = (number << 7) | (byte & 0x7f);
    if ((byte & 0x80) === 0) {
      decodedNumbers.push(number);
      number = 0;
    }
  }

  if (number > 0) {
    throw new Error('Incomplete sequence');
  }

  return decodedNumbers;
};
      let byte = number & 0x7f;
      number >>= 7;
      if (number > 0) {
        byte |= 0x80;
      }
      bytes.unshift(byte);
    }
    encodedNumbers.push(bytes);
  }

  return encodedNumbers.flat();
};
};

export const decode = (bytes) => {
  const decodedNumbers = [];

  let number = 0;
  for (const byte of bytes) {
    number = (number << 7) | (byte & 0x7f);
    if ((byte & 0x80) === 0) {
      decodedNumbers.push(number);
      number = 0;
    }
  }

  if (number > 0) {
    throw new Error('Incomplete sequence');
  }

  return decodedNumbers;
};
};
