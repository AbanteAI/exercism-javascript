//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  const cleanedIsbn = isbn.replace(/-/g, '');
  if (cleanedIsbn.length !== 10 || !/^\d{9}[\dX]$/.test(cleanedIsbn)) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    const digit = cleanedIsbn[i];
    const value = digit === 'X' ? 10 : parseInt(digit);
    sum += value * (10 - i);
  }
  return sum % 11 === 0;
};
