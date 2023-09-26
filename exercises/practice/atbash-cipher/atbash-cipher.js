//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  const plaintext = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba';
  const normalizedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  let encoded = '';

  for (const char of normalizedInput) {
    if (char.match(/[a-z]/)) {
      encoded += cipher[plaintext.indexOf(char)];
    } else {
      encoded += char;
    }
  }

  return encoded.match(/.{1,5}/g).join(' ');
};

export const decode = (input) => {
  const plaintext = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba';
  const normalizedInput = input.replace(/[^a-z0-9]/g, '');
  let decoded = '';

  for (const char of normalizedInput) {
    if (char.match(/[a-z]/)) {
      decoded += plaintext[cipher.indexOf(char)];
    } else {
      decoded += char;
    }
  }

  return decoded;
};
