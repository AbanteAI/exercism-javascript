//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  sentence = sentence.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (const letter of alphabet) {
    if (!sentence.includes(letter)) {
      return false;
    }
  }

  return true;
};
