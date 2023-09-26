//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCaseInput = input.toLowerCase();

  for (let char of alphabet) {
    if (!lowerCaseInput.includes(char)) {
      return false;
    }
  }

  return true;
};
