//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (plaintext) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const reversed = 'zyxwvutsrqponmlkjihgfedcba';
  const cleaned = plaintext.toLowerCase().replace(/[^a-z0-9]/g, '');
  let encoded = '';

  for (let i = 0; i < cleaned.length; i++) {
    const char = cleaned[i];
    if (i > 0 && i % 5 === 0) {
      encoded += ' ';
    }
    encoded += alphabet.includes(char) ? reversed[alphabet.indexOf(char)] : char;
  }

  return encoded;
};

export const decode = (ciphertext) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const reversed = 'zyxwvutsrqponmlkjihgfedcba';
  const cleaned = ciphertext.replace(/[^a-z0-9]/g, '');
  let decoded = '';

  for (let i = 0; i < cleaned.length; i++) {
    const char = cleaned[i];
    decoded += alphabet.includes(char) ? reversed[alphabet.indexOf(char)] : char;
  }

  return decoded;
};
