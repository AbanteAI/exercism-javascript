//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, key) => {
  if (!text) return '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const shiftedAlphabet = alphabet.slice(key) + alphabet.slice(0, key);
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (/[a-z]/i.test(char)) {
      const isUpperCase = char.toUpperCase() === char;
      const index = alphabet.indexOf(char.toLowerCase());
      const shiftedChar = shiftedAlphabet[index];
      result += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    } else {
      result += char;
    }
  }
  return result;
};

