//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (input) => {
  input = input.replace(/-/g, '');

  if (input.length !== 10) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    const digit = parseInt(input[i], 10);
    if (isNaN(digit)) {
      return false;
    }
    sum += digit * (10 - i);
  }

  const checkChar = input[9] === 'X' ? 10 : parseInt(input[9], 10);
  if (isNaN(checkChar)) {
    return false;
  }
  sum += checkChar;

  return sum % 11 === 0;
};
