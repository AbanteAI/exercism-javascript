//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  let encodedString = '';
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      encodedString += (count > 1 ? count : '') + input[i];
      count = 1;
    }
  }

  return encodedString;
};
};

export const decode = (input) => {
  let decodedString = '';
  let count = '';

  for (let i = 0; i < input.length; i++) {
    if (/[0-9]/.test(input[i])) {
      count += input[i];
    } else {
      const repeatCount = count === '' ? 1 : parseInt(count);
      decodedString += input[i].repeat(repeatCount);
      count = '';
    }
  }

  return decodedString;
};
}
