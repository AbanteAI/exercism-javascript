//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, key) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (alphabet.includes(char.toLowerCase())) {
      const isUpperCase = char === char.toUpperCase();
      const index = alphabet.indexOf(char.toLowerCase());
      const rotatedIndex = (index + key) % 26;
      const rotatedChar = alphabet[rotatedIndex];

      result += isUpperCase ? rotatedChar.toUpperCase() : rotatedChar;
    } else {
      result += char;
    }
  }

  return result;
};
