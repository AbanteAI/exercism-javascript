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
    if (input[i].match(/[0-9]/)) {
      count += input[i];
    } else {
      decoded += input[i].repeat(count === '' ? 1 : parseInt(count));
      count = '';
    }
  }

  return decoded;
};
