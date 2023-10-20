//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const reversedAlphabet = 'zyxwvutsrqponmlkjihgfedcba';
  let encodedText = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    const index = alphabet.indexOf(char);

    if (index !== -1) {
      encodedText += reversedAlphabet[index];
    } else {
      encodedText += char;
    }
  }

  return encodedText;
};

export const decode = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const reversedAlphabet = 'zyxwvutsrqponmlkjihgfedcba';
  let decodedText = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    const index = reversedAlphabet.indexOf(char);

    if (index !== -1) {
      decodedText += alphabet[index];
    } else {
      decodedText += char;
    }
  }

  return decodedText;
};
export const decode = () => {
  throw new Error('Remove this statement and implement this function');
};