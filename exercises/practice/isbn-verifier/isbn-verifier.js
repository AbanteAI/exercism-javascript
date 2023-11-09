//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (input) => {
  // Remove dashes
  const isbn = input.replace(/-/g, '');

  // Check length and format
  if (!/^\d{9}(\d|X)$/.test(isbn)) {
    return false;
  }

  // Calculate the sum
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(isbn[i]) * (10 - i);
  }
  const checkDigit = isbn[9] === 'X' ? 10 : parseInt(isbn[9]);
  sum += checkDigit;

  // Check if the sum is divisible by 11
  return sum % 11 === 0;
};
