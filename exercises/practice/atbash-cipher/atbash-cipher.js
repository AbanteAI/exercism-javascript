//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const reverseAlphabet = alphabet.split('').reverse().join('');
  const inputCleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');

  let encoded = '';
  for (let i = 0; i < inputCleaned.length; i++) {
    const char = inputCleaned[i];
    const index = alphabet.indexOf(char);
    encoded += index >= 0 ? reverseAlphabet[index] : char;
  }

  return encoded.match(/.{1,5}/g).join(' ');
};

export const decode = (input) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const reverseAlphabet = alphabet.split('').reverse().join('');
  const inputCleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');

  let decoded = '';
  for (let i = 0; i < inputCleaned.length; i++) {
    const char = inputCleaned[i];
    const index = reverseAlphabet.indexOf(char);
    decoded += index >= 0 ? alphabet[index] : char;
  }

  return decoded;
};
