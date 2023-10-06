//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  const plain = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba';
  let result = '';
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();
    if (plain.includes(char)) {
      result += cipher[plain.indexOf(char)];
      count++;
      if (count % 5 === 0) {
        result += ' ';
      }
    }
  }

  return result.trim();
};

export const decode = (input) => {
  const plain = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba';
  let result = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();
    if (cipher.includes(char)) {
      result += plain[cipher.indexOf(char)];
    }
  }

  return result;
};

export const decode = () => {
  throw new Error('Remove this statement and implement this function');
};
