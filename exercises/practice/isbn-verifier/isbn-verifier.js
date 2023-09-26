//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  const parsedIsbn = isbn.replace(/-/g, '');

  if (parsedIsbn.length !== 10) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < parsedIsbn.length; i++) {
    const digit = parsedIsbn[i] === 'X' ? 10 : parseInt(parsedIsbn[i]);
    sum += digit * (10 - i);
  }

  return sum % 11 === 0;
};
