//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, key) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const rotatedAlphabet = alphabet.slice(key) + alphabet.slice(0, key);
  let result = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    const index = alphabet.indexOf(char);

    if (index === -1) {
      result += char;
    } else {
      const rotatedChar = rotatedAlphabet[index];
      result += text[i] === text[i].toUpperCase() ? rotatedChar.toUpperCase() : rotatedChar;
    }
  }

  return result;
};
