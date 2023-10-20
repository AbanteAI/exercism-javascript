//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCaseInput = input.toLowerCase();

  for (const letter of alphabet) {
    if (!lowerCaseInput.includes(letter)) {
      return false;
    }
  }

  return true;
};
