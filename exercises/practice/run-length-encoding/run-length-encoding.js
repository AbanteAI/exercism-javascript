//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  if (!input) return '';

  let encoded = '';
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      encoded += count > 1 ? count + input[i] : input[i];
      count = 1;
    }
  }

  return encoded;
};

export const decode = (input) => {
  if (!input) return '';

  let decoded = '';
  let count = '';

  for (let i = 0; i < input.length; i++) {
    if (/\d/.test(input[i])) {
      count += input[i];
    } else {
      decoded += input[i].repeat(count ? parseInt(count) : 1);
      count = '';
    }
  }

  return decoded;
};
export const decode = () => {
  throw new Error('Remove this statement and implement this function');
};