// This is only a SKELETON file for the 'Variable Length Quantity' exercise. It's been provided as a
// convenience to get you started writing code faster.

export const encode = (numbers) => {
  const encodedNumbers = [];

  for (const number of numbers) {
    let encodedNumber = number & 0x7f;

    while ((number >>= 7) > 0) {
      encodedNumber |= 0x80;
      encodedNumber <<= 8;
      encodedNumber |= (number & 0x7f) | 0x80;
    }

    encodedNumbers.push(encodedNumber);
  }

  return encodedNumbers;
};

export const decode = (encodedBytes) => {
  const decodedNumbers = [];

  let number = 0;
  let shift = 0;

  for (const byte of encodedBytes) {
    number |= (byte & 0x7f) << shift;

    if ((byte & 0x80) === 0) {
      decodedNumbers.push(number);
      number = 0;
      shift = 0;
    } else {
      shift += 7;
    }
  }

  if ((byte & 0x80) !== 0) {
    throw new Error("Incomplete sequence");
  }

  return decodedNumbers;
};