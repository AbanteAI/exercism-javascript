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
      encoded += count > 1 ? count + input[i] : input[i];
      count = 1;
    }
  }

  return encoded;
};
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
};

export const decode = (input) => {
  let decoded = '';
  let count = '';

  for (let i = 0; i < input.length; i++) {
    if (/[0-9]/.test(input[i])) {
      count += input[i];
    } else {
      const repeatCount = count ? parseInt(count) : 1;
      decoded += input[i].repeat(repeatCount);
      count = '';
    }
  }

  return decoded;
};
  let count = '';

  for (let i = 0; i < input.length; i++) {
    if (/[0-9]/.test(input[i])) {
      count += input[i];
    } else {
      const repeatCount = count ? parseInt(count) : 1;
      decoded += input[i].repeat(repeatCount);
      count = '';
    }
  }

  return decoded;
};
};
