//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, key) => {
  const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const rotateCharacter = (char, alphabet) => {
    const index = alphabet.indexOf(char);
    if (index === -1) return char;
    return alphabet[(index + key) % alphabet.length];
  };

  return text.split('').map(char => {
    if (char.match(/[a-z]/)) return rotateCharacter(char, lowerCaseAlphabet);
    if (char.match(/[A-Z]/)) return rotateCharacter(char, upperCaseAlphabet);
    return char;
  }).join('');
};
