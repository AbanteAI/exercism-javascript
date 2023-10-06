//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  let output = '';
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      output += (count > 1 ? count : '') + input[i];
      count = 1;
    }
  }

  return output;
};

export const decode = (input) => {
  let output = '';
  let count = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i].match(/\d/)) {
      count += input[i];
    } else {
      const repeat = count ? parseInt(count) : 1;
      output += input[i].repeat(repeat);
      count = '';
    }
  }

  return output;
};

export const decode = () => {
  throw new Error('Remove this statement and implement this function');
};
