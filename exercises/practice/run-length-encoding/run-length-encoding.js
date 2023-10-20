//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  let encoded = '';
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      encoded += (count > 1 ? count : '') + input[i];
      count = 1;
    }
  }

  return encoded;
};

export const decode = (input) => {
  let decoded = '';
  let count = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char >= '0' && char <= '9') {
      count += char;
    } else {
      decoded += char.repeat(count === '' ? 1 : parseInt(count));
      count = '';
    }
  }

  return decoded;
};
