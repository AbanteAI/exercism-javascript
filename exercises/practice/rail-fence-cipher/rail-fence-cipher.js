//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (message, rails) => {
  let encoded = '';
  let step = 1;
  let rail = 0;
  const railStrings = Array.from({ length: rails }, () => '');

  for (const char of message) {
    railStrings[rail] += char;
    rail += step;
    if (rail === rails - 1 || rail === 0) {
      step = -step;
    }
  }

  for (const railString of railStrings) {
    encoded += railString;
  }

  return encoded;
};

export const decode = (encoded, rails) => {
  const messageLength = encoded.length;
  const railStrings = Array.from({ length: rails }, () => '');
  let rail = 0;
  let step = 1;
  let index = 0;

  for (let i = 0; i < messageLength; i++) {
    railStrings[rail] += encoded[index++];
    rail += step;
    if (rail === rails - 1 || rail === 0) {
      step = -step;
    }
  }

  const railIterators = railStrings.map(s => s[Symbol.iterator]());
  let decoded = '';

  for (let i = 0; i < messageLength; i++) {
    decoded += railIterators[rail].next().value;
    rail += step;
    if (rail === rails - 1 || rail === 0) {
      step = -step;
    }
  }

  return decoded;
};
