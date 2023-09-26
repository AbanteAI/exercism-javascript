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
      encodedString += count > 1 ? count + input[i] : input[i];
      count = 1;
    }
  }

  return encodedString;
};

export const decode = (input) => {
  let decodedString = '';
  let count = '';

  for (let i = 0; i < input.length; i++) {
    if (Number.isNaN(parseInt(input[i]))) {
      if (count === '') {
        decodedString += input[i];
      } else {
        decodedString += input[i].repeat(parseInt(count));
        count = '';
      }
    } else {
      count += input[i];
    }
  }

  return decodedString;
};
};

export const decode = (input) => {
  let decodedString = '';
  let count = '';

  for (let i = 0; i < input.length; i++) {
    if (Number.isNaN(parseInt(input[i]))) {
      if (count === '') {
        decodedString += input[i];
      } else {
        decodedString += input[i].repeat(parseInt(count));
        count = '';
      }
    } else {
      count += input[i];
    }
  }

  return decodedString;
};
