//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, key) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const shiftedAlphabet = alphabet.slice(key) + alphabet.slice(0, key);
  
  const encryptedText = [...text].map((char) => {
    if (alphabet.includes(char.toLowerCase())) {
      const isUpperCase = char.toUpperCase() === char;
      const index = alphabet.indexOf(char.toLowerCase());
      const shiftedChar = shiftedAlphabet[index];
      return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    }
    return char;
  }).join('');
  
  return encryptedText;
};
