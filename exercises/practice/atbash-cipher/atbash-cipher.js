//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text) => {
  const plain = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba';

  const encodedText = text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .split('')
    .map((char) => {
      if (/[a-z]/.test(char)) {
        return cipher[plain.indexOf(char)];
      }
      return char;
    })
    .join('');

  return encodedText
    .match(/.{1,5}/g)
    .join(' ');
};

export const decode = (text) => {
  const plain = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba';

  const decodedText = text
    .replace(/ /g, '')
    .split('')
    .map((char) => {
      if (/[a-z]/.test(char)) {
        return plain[cipher.indexOf(char)];
      }
      return char;
    })
    .join('');

  return decodedText;
};

