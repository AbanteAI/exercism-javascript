//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  const cleanIsbn = isbn.replace(/-/g, '');
  if (!/^\d{9}[\dX]$/.test(cleanIsbn)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanIsbn.charAt(i), 10) * (10 - i);
  }
  const checkDigit = cleanIsbn.charAt(9);
  sum += checkDigit === 'X' ? 10 : parseInt(checkDigit, 10);

  return sum % 11 === 0;
};
